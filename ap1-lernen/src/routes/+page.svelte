<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';
	import { language } from '$lib/stores/language';
	import { progress, getChapterProgress, getReviewTopics } from '$lib/stores/progress';
	import type { ContentManifest } from '$lib/types/content';

	export let data: { manifest: ContentManifest };

	$: stats = getChapterProgress(data.manifest, $progress);
	$: reviewTopics = getReviewTopics(data.manifest, $progress);
	$: progressPercent = stats.total > 0 ? Math.round((stats.read / stats.total) * 100) : 0;

	let downloadStatus: 'idle' | 'downloading' | 'done' | 'error' = 'idle';
	let downloadProgress = 0;
	let downloadTotal = 0;

	function startLearning() {
		const firstChapter = data.manifest.chapters[0];
		if (firstChapter) {
			goto(`${base}/${$language}/${firstChapter.id}-${firstChapter.slug}`);
		}
	}

	async function downloadForOffline() {
		if (!browser) return;

		downloadStatus = 'downloading';
		downloadProgress = 0;

		// Collect all content URLs
		const urls: string[] = [];
		const languages = ['de', 'en', 'es'];

		for (const chapter of data.manifest.chapters) {
			if (chapter.overviewPath) {
				for (const lang of languages) {
					urls.push(`${base}/content/${lang}/${chapter.overviewPath}`);
				}
			}
			for (const sub of chapter.subchapters) {
				for (const topic of sub.topics) {
					for (const lang of languages) {
						urls.push(`${base}/content/${lang}/${topic.path}`);
					}
				}
			}
			for (const topic of chapter.topics) {
				for (const lang of languages) {
					urls.push(`${base}/content/${lang}/${topic.path}`);
				}
			}
		}

		// Add search indices
		for (const lang of languages) {
			urls.push(`${base}/search-index-${lang}.json`);
		}

		downloadTotal = urls.length;

		try {
			// Fetch all URLs to populate cache
			for (let i = 0; i < urls.length; i++) {
				await fetch(urls[i]);
				downloadProgress = i + 1;
			}
			downloadStatus = 'done';
		} catch (e) {
			console.error('Download failed:', e);
			downloadStatus = 'error';
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

	<div class="offline-section">
		{#if downloadStatus === 'idle'}
			<button class="btn-secondary" on:click={downloadForOffline}>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
					<polyline points="7 10 12 15 17 10"></polyline>
					<line x1="12" y1="15" x2="12" y2="3"></line>
				</svg>
				Für Offline herunterladen
			</button>
			<p class="offline-hint">Lade alle Inhalte herunter, um offline zu lernen</p>
		{:else if downloadStatus === 'downloading'}
			<div class="download-progress">
				<div class="download-bar">
					<div class="download-fill" style="width: {(downloadProgress / downloadTotal) * 100}%"></div>
				</div>
				<p>Herunterladen... {downloadProgress} / {downloadTotal}</p>
			</div>
		{:else if downloadStatus === 'done'}
			<div class="download-done">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
					<polyline points="22 4 12 14.01 9 11.01"></polyline>
				</svg>
				<span>Alle Inhalte sind offline verfügbar!</span>
			</div>
		{:else if downloadStatus === 'error'}
			<div class="download-error">
				<span>Download fehlgeschlagen. Bitte erneut versuchen.</span>
				<button class="btn-secondary" on:click={downloadForOffline}>Erneut versuchen</button>
			</div>
		{/if}
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

	.offline-section {
		text-align: center;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: var(--color-bg-secondary);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: var(--color-bg-tertiary);
		color: var(--color-text);
		border-radius: var(--radius-md);
		font-weight: 500;
		transition: background var(--transition-fast);
	}

	.btn-secondary:hover {
		background: var(--color-border);
	}

	.offline-hint {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		margin-top: 0.5rem;
	}

	.download-progress {
		max-width: 300px;
		margin: 0 auto;
	}

	.download-bar {
		height: 8px;
		background: var(--color-bg-tertiary);
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 0.5rem;
	}

	.download-fill {
		height: 100%;
		background: var(--color-primary);
		transition: width 0.2s ease;
	}

	.download-progress p {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
	}

	.download-done {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		color: var(--color-success);
	}

	.download-error {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		color: var(--color-error);
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
