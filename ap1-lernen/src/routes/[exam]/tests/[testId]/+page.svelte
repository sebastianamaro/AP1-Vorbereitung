<script lang="ts">
	import { base } from '$app/paths';
	import { language } from '$lib/stores/language';
	import { attempts } from '$lib/stores/tests';
	import type { Test } from '$lib/types/test';
	import type { Exam } from '$lib/types/content';

	export let data: { exam: Exam; test: Test; assetBase: string };

	$: t = (de: string, en: string, es: string) =>
		$language === 'de' ? de : $language === 'es' ? es : en;

	// reactive on the attempts store so scores update after a submission
	$: attemptFor = (partId: string) => $attempts[data.test.id]?.[partId];
</script>

<svelte:head>
	<title>{data.test.title} – FIAE Lernen</title>
</svelte:head>

<div class="page">
	<a class="back" href="{base}/{data.exam}/tests">← {t('Alle Prüfungen', 'All exams', 'Todos los exámenes')}</a>
	<header class="page-head">
		<h1>{data.test.title}</h1>
		{#if data.test.source}<p class="src">{data.test.source}</p>{/if}
	</header>

	<div class="parts">
		{#each data.test.parts as part}
			{@const a = attemptFor(part.id)}
			<article class="part-card">
				<div class="part-info">
					<h2>{part.title} <span class="full">{part.fullTitle}</span></h2>
					<p class="meta">
						{part.questions.length} {t('Aufgaben', 'questions', 'preguntas')}
						{#if part.durationMin}· {part.durationMin} {t('Minuten', 'minutes', 'minutos')}{/if}
					</p>
					{#if part.pointsScheme}<p class="scheme">{part.pointsScheme}</p>{/if}
				</div>
				<div class="part-action">
					{#if a?.submitted && a.score}
						<div class="score" class:pass={a.score.grade <= 4}>
							<span class="score-percent">{Math.round(a.score.percent)}%</span>
							<span class="score-grade">{t('Note', 'Grade', 'Nota')} {a.score.grade}</span>
						</div>
						<a class="btn-primary" href="{base}/{data.exam}/tests/{data.test.id}/{part.id}">{t('Wiederholen', 'Retry', 'Reintentar')}</a>
					{:else if a && Object.keys(a.answers).length > 0}
						<span class="in-progress">{t('Begonnen', 'In progress', 'En curso')}</span>
						<a class="btn-primary" href="{base}/{data.exam}/tests/{data.test.id}/{part.id}">{t('Fortsetzen', 'Continue', 'Continuar')}</a>
					{:else}
						<a class="btn-primary" href="{base}/{data.exam}/tests/{data.test.id}/{part.id}">{t('Starten', 'Start', 'Empezar')}</a>
					{/if}
				</div>
			</article>
		{/each}
	</div>

	{#if data.test.disclaimer}<p class="disclaimer">{data.test.disclaimer}</p>{/if}
</div>

<style>
	.page { max-width: 820px; margin: 0 auto; padding: 2rem; }
	.back { color: var(--color-text-muted); text-decoration: none; font-size: var(--text-sm); }
	.page-head { margin: 0.75rem 0 1.5rem; }
	.page-head h1 { font-size: var(--text-3xl); font-weight: 700; }
	.src { color: var(--color-text-subtle); font-size: var(--text-sm); margin-top: 0.25rem; }
	.parts { display: flex; flex-direction: column; gap: 1rem; }
	.part-card {
		display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
		background: var(--color-bg-secondary); border: 1px solid var(--color-border);
		border-radius: var(--radius-lg); padding: 1.25rem 1.5rem;
	}
	.part-info h2 { font-size: var(--text-xl); font-weight: 700; }
	.full { font-weight: 400; font-size: var(--text-base); color: var(--color-text-muted); }
	.meta { color: var(--color-text-muted); font-size: var(--text-sm); margin-top: 0.25rem; }
	.scheme { color: var(--color-text-subtle); font-size: var(--text-xs); margin-top: 0.25rem; }
	.part-action { display: flex; align-items: center; gap: 1rem; }
	.score { text-align: center; line-height: 1.1; }
	.score-percent { display: block; font-size: var(--text-xl); font-weight: 700; color: var(--color-error); }
	.score.pass .score-percent { color: var(--color-success); }
	.score-grade { font-size: var(--text-xs); color: var(--color-text-muted); }
	.in-progress { font-size: var(--text-sm); color: var(--color-warning, #d97706); font-weight: 600; }
	.btn-primary {
		display: inline-flex; align-items: center; padding: 0.6rem 1.25rem;
		background: var(--color-primary); color: #fff; border-radius: var(--radius-md);
		font-weight: 600; text-decoration: none;
	}
	.disclaimer { margin-top: 1.5rem; font-size: var(--text-xs); color: var(--color-text-subtle); }
</style>
