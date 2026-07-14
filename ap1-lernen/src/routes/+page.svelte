<script lang="ts">
	import { base } from '$app/paths';
	import { language, languageLabels } from '$lib/stores/language';
	import { theme } from '$lib/stores/theme';
	import type { ExamInfo, Language } from '$lib/types/content';

	export let data: { exams: ExamInfo[] };
	const languages: Language[] = ['de', 'en', 'es'];
</script>

<svelte:head>
	<title>FIAE Lernen</title>
</svelte:head>

<div class="picker">
	<div class="picker-top">
		<select class="lang-select" bind:value={$language}>
			{#each languages as l}<option value={l}>{languageLabels[l]}</option>{/each}
		</select>
		<button class="theme-btn" on:click={() => theme.toggle()} aria-label="Toggle theme">
			{$theme === 'dark' ? '☀️' : '🌙'}
		</button>
	</div>

	<header class="picker-header">
		<h1>FIAE Lernen</h1>
		<p class="subtitle">Fachinformatiker/-in Anwendungsentwicklung – Prüfungsvorbereitung</p>
	</header>

	<div class="exam-grid">
		{#each data.exams as exam}
			<a class="exam-card" href="{base}/{exam.id}">
				<span class="exam-badge">{exam.title[$language] || exam.id.toUpperCase()}</span>
				<span class="exam-name">{exam.subtitle[$language] || ''}</span>
			</a>
		{/each}
	</div>

	<p class="picker-hint">
		{$language === 'de' ? 'Wähle eine Prüfung, um zu starten.' : $language === 'es' ? 'Elige un examen para empezar.' : 'Choose an exam to start.'}
	</p>
</div>

<style>
	.picker {
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		background: var(--color-bg);
		position: relative;
	}
	.picker-top {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}
	.lang-select {
		padding: 0.5rem 0.75rem;
		border-radius: var(--radius-md);
		background: var(--color-bg-tertiary);
		border: 1px solid var(--color-border);
		color: var(--color-text);
		font-size: var(--text-sm);
	}
	.theme-btn {
		width: 40px;
		height: 40px;
		border-radius: var(--radius-md);
		background: var(--color-bg-tertiary);
		border: 1px solid var(--color-border);
	}
	.picker-header {
		text-align: center;
		margin-bottom: 2.5rem;
	}
	.picker-header h1 {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--color-primary);
	}
	.subtitle {
		color: var(--color-text-muted);
		margin-top: 0.5rem;
	}
	.exam-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.5rem;
		width: 100%;
		max-width: 640px;
	}
	.exam-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 2rem 1.5rem;
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		text-decoration: none;
		transition: border-color var(--transition-fast), transform var(--transition-fast);
	}
	.exam-card:hover {
		border-color: var(--color-primary);
		transform: translateY(-3px);
	}
	.exam-badge {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--color-primary);
	}
	.exam-name {
		color: var(--color-text-muted);
		text-align: center;
		font-size: var(--text-sm);
	}
	.picker-hint {
		margin-top: 2rem;
		color: var(--color-text-subtle);
		font-size: var(--text-sm);
	}
</style>
