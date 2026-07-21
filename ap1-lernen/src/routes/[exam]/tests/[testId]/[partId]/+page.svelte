<script lang="ts">
	import { base } from '$app/paths';
	import { tick } from 'svelte';
	import { marked } from 'marked';
	import { language } from '$lib/stores/language';
	import { attempts, gradePart } from '$lib/stores/tests';
	import QuestionCard from '$lib/components/Tests/QuestionCard.svelte';
	import Timer from '$lib/components/Tests/Timer.svelte';
	import type { Test, TestPart, UserAnswer, SelfGrade } from '$lib/types/test';
	import type { Exam } from '$lib/types/content';

	export let data: { exam: Exam; test: Test; part: TestPart; assetBase: string };

	$: t = (de: string, en: string, es: string) =>
		$language === 'de' ? de : $language === 'es' ? es : en;

	$: test = data.test;
	$: part = data.part;

	// Live attempt from the store
	$: attempt = $attempts[test.id]?.[part.id] ?? {
		testId: test.id,
		partId: part.id,
		answers: {},
		selfGrades: {},
		submitted: false
	};
	$: submitted = attempt.submitted;

	// Always compute grading; only surfaced once submitted
	$: graded = gradePart(part, attempt.answers, attempt.selfGrades);
	$: resultMap = new Map(graded.results.map((r) => [r.questionId, r]));

	$: answeredCount = part.questions.filter((q) => {
		const a = attempt.answers[q.id];
		if (!a) return false;
		if (a.kind === 'choice') return a.selected.length > 0;
		if (a.kind === 'pairs') return Object.keys(a.pairs).length > 0;
		if (a.kind === 'numeric') return a.raw.trim() !== '';
		if (a.kind === 'open') return a.text.trim() !== '';
		return false;
	}).length;

	let timerOn = true;
	let elapsed = 0;
	let topEl: HTMLElement;

	function handleAnswer(e: CustomEvent<{ id: string; answer: UserAnswer }>) {
		attempts.setAnswer(test.id, part.id, e.detail.id, e.detail.answer);
	}

	function persistScore() {
		const g = gradePart(part, attempt.answers, attempt.selfGrades);
		attempts.submit(
			test.id,
			part.id,
			{ earned: g.earned, possible: g.possible, percent: g.percent, grade: g.grade },
			elapsed
		);
	}

	function handleSelfGrade(e: CustomEvent<{ id: string; grade: SelfGrade }>) {
		attempts.setSelfGrade(test.id, part.id, e.detail.id, e.detail.grade);
		persistScore();
	}

	async function submit() {
		persistScore();
		await tick();
		topEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function retry() {
		attempts.reset(test.id, part.id);
		elapsed = 0;
		timerOn = true;
	}
</script>

<svelte:head>
	<title>{test.title} · {part.title} – FIAE Lernen</title>
</svelte:head>

<div class="runner" bind:this={topEl}>
	<div class="runner-head">
		<div>
			<a class="back" href="{base}/{data.exam}/tests/{test.id}">← {test.title}</a>
			<h1>{part.title} <span class="full">{part.fullTitle}</span></h1>
		</div>
		{#if !submitted}
			<div class="head-right">
				{#if part.durationMin}
					{#if timerOn}
						<Timer durationMin={part.durationMin} running={!submitted} bind:elapsed {t} />
						<button class="link-btn" on:click={() => (timerOn = false)}>{t('Timer aus', 'Timer off', 'Sin cronómetro')}</button>
					{:else}
						<button class="link-btn" on:click={() => (timerOn = true)}>{t('Timer an', 'Timer on', 'Con cronómetro')}</button>
					{/if}
				{/if}
			</div>
		{/if}
	</div>

	{#if submitted && attempt.score}
		<div class="result-banner" class:pass={attempt.score.grade <= 4}>
			<div class="rb-score">
				<span class="rb-percent">{Math.round(attempt.score.percent)}%</span>
				<span class="rb-detail">{graded.earned.toFixed(1)} / {graded.possible} {t('Punkte', 'points', 'puntos')}</span>
			</div>
			<div class="rb-grade">
				<span class="rb-grade-num">{attempt.score.grade}</span>
				<span class="rb-detail">{t('IHK-Note', 'IHK grade', 'Nota IHK')}</span>
			</div>
			<div class="rb-actions">
				<button class="btn-secondary" on:click={retry}>{t('Neuer Versuch', 'New attempt', 'Nuevo intento')}</button>
			</div>
		</div>
		<p class="review-hint">{t(
			'Unten siehst du zu jeder Aufgabe die richtige Lösung. Offene Aufgaben bewertest du selbst. Bei Mehrfachauswahl-, Zuordnungs- und Reihenfolgeaufgaben gibt es Teilpunkte (Näherung an die IHK-Teil-/Globalbewertung).',
			'Below you can see the correct solution for each task. You grade open tasks yourself. Multiple-choice, matching and ordering questions award partial points (an approximation of the official IHK Teil-/Globalbewertung).',
			'Abajo verás la solución correcta de cada tarea. Las preguntas abiertas las evalúas tú. Las preguntas de selección múltiple, asignación y orden otorgan puntos parciales (una aproximación a la evaluación oficial del IHK).'
		)}</p>
	{:else if part.intro}
		<div class="intro">{@html marked.parse(part.intro, { breaks: true })}</div>
	{/if}

	<div class="questions">
		{#each part.questions as q (q.id)}
			<QuestionCard
				question={q}
				answer={attempt.answers[q.id]}
				result={submitted ? (resultMap.get(q.id) ?? null) : null}
				assetBase={data.assetBase}
				{t}
				on:answer={handleAnswer}
				on:selfgrade={handleSelfGrade}
			/>
		{/each}
	</div>

	{#if !submitted}
		<div class="submit-bar">
			<span class="answered">{answeredCount} / {part.questions.length} {t('beantwortet', 'answered', 'respondidas')}</span>
			<button class="btn-primary" on:click={submit}>{t('Abgeben & auswerten', 'Submit & grade', 'Entregar y evaluar')}</button>
		</div>
	{:else}
		<div class="submit-bar">
			<a class="btn-secondary" href="{base}/{data.exam}/tests/{test.id}">← {t('Zur Übersicht', 'To overview', 'Al resumen')}</a>
			<button class="btn-primary" on:click={retry}>{t('Neuer Versuch', 'New attempt', 'Nuevo intento')}</button>
		</div>
	{/if}
</div>

<style>
	.runner { max-width: 820px; margin: 0 auto; padding: 2rem; }
	.runner-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
	.back { color: var(--color-text-muted); text-decoration: none; font-size: var(--text-sm); }
	.runner-head h1 { font-size: var(--text-2xl); font-weight: 700; margin-top: 0.25rem; }
	.full { font-weight: 400; font-size: var(--text-base); color: var(--color-text-muted); }
	.head-right { display: flex; align-items: center; gap: 0.75rem; }
	.link-btn { font-size: var(--text-sm); color: var(--color-primary); text-decoration: underline; }

	.intro {
		background: var(--color-bg-secondary); border: 1px solid var(--color-border);
		border-radius: var(--radius-lg); padding: 1rem 1.25rem; margin-bottom: 1.5rem;
		font-size: var(--text-sm);
	}
	.intro :global(p) { margin: 0.35rem 0; }

	.result-banner {
		display: flex; align-items: center; gap: 2rem; flex-wrap: wrap;
		background: var(--color-bg-secondary); border: 1px solid var(--color-border);
		border-left: 5px solid var(--color-error);
		border-radius: var(--radius-lg); padding: 1.25rem 1.5rem; margin-bottom: 0.75rem;
	}
	.result-banner.pass { border-left-color: var(--color-success); }
	.rb-percent { font-size: var(--text-3xl); font-weight: 800; display: block; }
	.rb-grade-num { font-size: var(--text-3xl); font-weight: 800; display: block; }
	.rb-detail { font-size: var(--text-xs); color: var(--color-text-muted); }
	.rb-actions { margin-left: auto; }
	.review-hint { font-size: var(--text-sm); color: var(--color-text-muted); margin-bottom: 1.5rem; }

	.submit-bar {
		display: flex; align-items: center; justify-content: space-between; gap: 1rem;
		margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--color-border);
	}
	.answered { color: var(--color-text-muted); font-size: var(--text-sm); }
	.btn-primary {
		display: inline-flex; align-items: center; padding: 0.7rem 1.5rem;
		background: var(--color-primary); color: #fff; border-radius: var(--radius-md); font-weight: 700; text-decoration: none;
	}
	.btn-secondary {
		display: inline-flex; align-items: center; padding: 0.7rem 1.25rem;
		background: var(--color-bg-tertiary); color: var(--color-text); border-radius: var(--radius-md); font-weight: 600; text-decoration: none;
	}
</style>
