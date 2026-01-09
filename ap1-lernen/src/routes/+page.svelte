<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { language } from '$lib/stores/language';
	import { progress, getChapterProgress, getReviewTopics } from '$lib/stores/progress';
	import type { ContentManifest } from '$lib/types/content';

	export let data: { manifest: ContentManifest };

	$: stats = getChapterProgress(data.manifest, $progress);
	$: reviewTopics = getReviewTopics(data.manifest, $progress);
	$: progressPercent = stats.total > 0 ? Math.round((stats.read / stats.total) * 100) : 0;

	function startLearning() {
		const firstChapter = data.manifest.chapters[0];
		if (firstChapter) {
			goto(`${base}/${$language}/${firstChapter.id}-${firstChapter.slug}`);
		}
	}
</script>

<svelte:head>
	<title>AP1 Lernen - Dashboard</title>
</svelte:head>

<div class="dashboard">
	<header class="dashboard-header">
		<h1>AP1 Prüfungsvorbereitung</h1>
		<p class="subtitle">Fachinformatiker Abschlussprüfung Teil 1</p>
	</header>

	<div class="stats-grid">
		<div class="stat-card">
			<div class="stat-value">{stats.total}</div>
			<div class="stat-label">Themen gesamt</div>
		</div>
		<div class="stat-card completed">
			<div class="stat-value">{stats.read}</div>
			<div class="stat-label">Gelesen</div>
		</div>
		<div class="stat-card review">
			<div class="stat-value">{stats.review}</div>
			<div class="stat-label">Wiederholen</div>
		</div>
		<div class="stat-card progress">
			<div class="stat-value">{progressPercent}%</div>
			<div class="stat-label">Fortschritt</div>
		</div>
	</div>

	<div class="progress-bar-container">
		<div class="progress-bar" style="width: {progressPercent}%"></div>
	</div>

	<div class="actions">
		<button class="btn-primary" on:click={startLearning}>
			{stats.read > 0 ? 'Weiterlernen' : 'Jetzt starten'}
		</button>
	</div>

	{#if reviewTopics.length > 0}
		<section class="review-section">
			<h2>Zur Wiederholung markiert ({reviewTopics.length})</h2>
			<ul class="review-list">
				{#each reviewTopics.slice(0, 5) as topic}
					<li>
						<a href="{base}/{$language}/{topic.path}">
							<span class="topic-chapter">{topic.chapterTitle[$language]}</span>
							<span class="topic-title">{topic.title[$language]}</span>
						</a>
					</li>
				{/each}
			</ul>
			{#if reviewTopics.length > 5}
				<p class="more-items">... und {reviewTopics.length - 5} weitere</p>
			{/if}
		</section>
	{/if}

	<section class="chapters-section">
		<h2>Kapitel</h2>
		<div class="chapters-grid">
			{#each data.manifest.chapters as chapter}
				<a 
					href="{base}/{$language}/{chapter.id}-{chapter.slug}" 
					class="chapter-card"
				>
					<span class="chapter-id">{chapter.id}</span>
					<span class="chapter-title">{chapter.title[$language] || chapter.slug}</span>
				</a>
			{/each}
		</div>
	</section>
</div>

<style>
	.dashboard {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
	}

	.dashboard-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.dashboard-header h1 {
		font-size: var(--text-3xl);
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: var(--color-text-muted);
		font-size: var(--text-lg);
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.stat-card {
		background: var(--color-bg-secondary);
		border-radius: var(--radius-lg);
		padding: 1.25rem;
		text-align: center;
		border: 1px solid var(--color-border);
	}

	.stat-value {
		font-size: var(--text-2xl);
		font-weight: 700;
		margin-bottom: 0.25rem;
	}

	.stat-label {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
	}

	.stat-card.completed .stat-value { color: var(--color-success); }
	.stat-card.review .stat-value { color: var(--color-warning); }
	.stat-card.progress .stat-value { color: var(--color-primary); }

	.progress-bar-container {
		height: 8px;
		background: var(--color-bg-secondary);
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 2rem;
	}

	.progress-bar {
		height: 100%;
		background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
		border-radius: 4px;
		transition: width 0.3s ease;
	}

	.actions {
		text-align: center;
		margin-bottom: 3rem;
	}

	.btn-primary {
		background: var(--color-primary);
		color: white;
		padding: 0.875rem 2rem;
		border-radius: var(--radius-lg);
		font-weight: 600;
		font-size: var(--text-lg);
		transition: background var(--transition-fast);
	}

	.btn-primary:hover {
		background: var(--color-primary-light);
	}

	.review-section, .chapters-section {
		margin-top: 2rem;
	}

	.review-section h2, .chapters-section h2 {
		font-size: var(--text-xl);
		margin-bottom: 1rem;
		color: var(--color-text);
	}

	.review-list {
		list-style: none;
		padding: 0;
	}

	.review-list li {
		margin-bottom: 0.5rem;
	}

	.review-list a {
		display: flex;
		flex-direction: column;
		padding: 0.75rem 1rem;
		background: var(--color-bg-secondary);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		text-decoration: none;
		transition: border-color var(--transition-fast);
	}

	.review-list a:hover {
		border-color: var(--color-warning);
	}

	.topic-chapter {
		font-size: var(--text-xs);
		color: var(--color-text-muted);
	}

	.topic-title {
		color: var(--color-text);
		font-weight: 500;
	}

	.more-items {
		color: var(--color-text-muted);
		font-size: var(--text-sm);
		margin-top: 0.5rem;
	}

	.chapters-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	.chapter-card {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		background: var(--color-bg-secondary);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
		text-decoration: none;
		transition: border-color var(--transition-fast), transform var(--transition-fast);
	}

	.chapter-card:hover {
		border-color: var(--color-primary);
		transform: translateY(-2px);
	}

	.chapter-id {
		font-size: var(--text-2xl);
		font-weight: 700;
		color: var(--color-primary);
		margin-bottom: 0.25rem;
	}

	.chapter-title {
		color: var(--color-text);
		font-weight: 500;
		font-size: var(--text-sm);
	}

	@media (max-width: 640px) {
		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		
		.dashboard {
			padding: 1rem;
		}
	}
</style>
