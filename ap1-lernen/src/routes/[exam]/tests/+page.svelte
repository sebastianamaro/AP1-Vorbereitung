<script lang="ts">
	import { base } from '$app/paths';
	import { language } from '$lib/stores/language';
	import type { TestSummary } from '$lib/types/test';
	import type { Exam } from '$lib/types/content';

	export let data: { exam: Exam; tests: TestSummary[] };

	$: t = (de: string, en: string, es: string) =>
		$language === 'de' ? de : $language === 'es' ? es : en;
</script>

<svelte:head>
	<title>{t('Prüfungssimulator', 'Exam Simulator', 'Simulador de examen')} – FIAE Lernen</title>
</svelte:head>

<div class="page">
	<header class="page-head">
		<h1>{t('Prüfungssimulator', 'Exam Simulator', 'Simulador de examen')}</h1>
		<p class="sub">{t(
			'Übe mit echten IHK-Prüfungen. Wähle einen Prüfungssatz.',
			'Practice with real IHK exams. Pick an exam set.',
			'Practica con exámenes reales del IHK. Elige un examen.'
		)}</p>
	</header>

	{#if data.tests.length === 0}
		<div class="empty">
			<p>{t('Noch keine Prüfungen verfügbar.', 'No exams available yet.', 'Aún no hay exámenes disponibles.')}</p>
		</div>
	{:else}
		<div class="test-list">
			{#each data.tests as test}
				<article class="test-card">
					<div class="test-card-head">
						<h2>{test.title}</h2>
						{#if test.source}<span class="src">{test.source}</span>{/if}
					</div>
					<ul class="parts">
						{#each test.parts as part}
							<li>
								<a class="part-link" href="{base}/{data.exam}/tests/{test.id}/{part.id}">
									<span class="part-name">{part.title}</span>
									<span class="part-meta">
										{part.questionCount} {t('Aufgaben', 'questions', 'preguntas')}
										{#if part.durationMin}· {part.durationMin} {t('Min', 'min', 'min')}{/if}
									</span>
								</a>
							</li>
						{/each}
					</ul>
					<a class="overview-link" href="{base}/{data.exam}/tests/{test.id}">
						{t('Übersicht', 'Overview', 'Resumen')} →
					</a>
					{#if test.disclaimer}<p class="disclaimer">{test.disclaimer}</p>{/if}
				</article>
			{/each}
		</div>
	{/if}
</div>

<style>
	.page { max-width: 820px; margin: 0 auto; padding: 2rem; }
	.page-head { margin-bottom: 1.5rem; }
	.page-head h1 { font-size: var(--text-3xl); font-weight: 700; margin-bottom: 0.35rem; }
	.sub { color: var(--color-text-muted); }
	.empty { text-align: center; padding: 3rem; color: var(--color-text-muted); }
	.test-list { display: flex; flex-direction: column; gap: 1.25rem; }
	.test-card {
		background: var(--color-bg-secondary); border: 1px solid var(--color-border);
		border-radius: var(--radius-lg); padding: 1.5rem;
	}
	.test-card-head { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem; }
	.test-card-head h2 { font-size: var(--text-xl); font-weight: 700; }
	.src { font-size: var(--text-xs); color: var(--color-text-subtle); }
	.parts { list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; margin-bottom: 1rem; }
	.part-link {
		display: flex; flex-direction: column; gap: 0.25rem;
		padding: 0.85rem 1rem; border: 1px solid var(--color-border);
		border-radius: var(--radius-md); text-decoration: none; color: var(--color-text);
		transition: border-color var(--transition-fast), background var(--transition-fast);
	}
	.part-link:hover { border-color: var(--color-primary); background: var(--color-bg-tertiary); }
	.part-name { font-weight: 700; }
	.part-meta { font-size: var(--text-sm); color: var(--color-text-muted); }
	.overview-link { color: var(--color-primary); font-weight: 600; text-decoration: none; font-size: var(--text-sm); }
	.disclaimer { margin-top: 0.85rem; font-size: var(--text-xs); color: var(--color-text-subtle); }
</style>
