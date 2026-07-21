<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { language } from '$lib/stores/language';
	import { progress, getChapterProgress, getReviewTopics } from '$lib/stores/progress';
	import type { ContentManifest, Exam } from '$lib/types/content';
	import type { TestsManifest } from '$lib/types/test';

	export let data: { exam: Exam; manifest: ContentManifest };

	let testCount = 0;
	onMount(async () => {
		try {
			const res = await fetch(`${base}/tests-manifest.json`);
			if (res.ok) {
				const m: TestsManifest = await res.json();
				testCount = m.tests.filter((tt) => tt.exam === data.exam).length;
			}
		} catch {
			/* no tests available */
		}
	});

	$: examProgress = $progress[data.exam] || {};
	$: stats = getChapterProgress(data.manifest, examProgress);
	$: reviewTopics = getReviewTopics(data.manifest, examProgress);
	$: progressPercent = stats.total > 0 ? Math.round((stats.read / stats.total) * 100) : 0;
	$: heading = data.manifest.title?.[$language] || data.exam.toUpperCase();
	$: subtitle = data.manifest.subtitle?.[$language] || '';

	// Reactive so template {t(...)} calls re-evaluate when the language changes.
	$: t = (de: string, en: string, es: string) =>
		$language === 'de' ? de : $language === 'es' ? es : en;

	let downloadStatus: 'idle' | 'downloading' | 'done' | 'error' = 'idle';
	let downloadProgress = 0;
	let downloadTotal = 0;

	function startLearning() {
		const firstChapter = data.manifest.chapters[0];
		if (firstChapter) {
			goto(`${base}/${data.exam}/${$language}/${firstChapter.id}-${firstChapter.slug}`);
		}
	}

	async function downloadForOffline() {
		if (!browser) return;
		downloadStatus = 'downloading';
		downloadProgress = 0;

		const urls: string[] = [];
		const languages = ['de', 'en', 'es'];
		const c = (p: string) => {
			for (const lang of languages) urls.push(`${base}/content/${data.exam}/${lang}/${p}`);
		};

		for (const chapter of data.manifest.chapters) {
			if (chapter.overviewPath) c(chapter.overviewPath);
			for (const sub of chapter.subchapters) for (const topic of sub.topics) c(topic.path);
			for (const topic of chapter.topics) c(topic.path);
		}
		for (const lang of languages) urls.push(`${base}/${data.exam}-search-index-${lang}.json`);

		downloadTotal = urls.length;
		try {
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
	<title>{heading} – FIAE Lernen</title>
</svelte:head>

<div class="dashboard">
	<header class="dashboard-header">
		<h1>{heading}</h1>
		<p class="subtitle">{subtitle}</p>
	</header>

	<div class="stats-grid">
		<div class="stat-card">
			<div class="stat-value">{stats.total}</div>
			<div class="stat-label">{t('Themen gesamt', 'Topics total', 'Temas en total')}</div>
		</div>
		<div class="stat-card completed">
			<div class="stat-value">{stats.read}</div>
			<div class="stat-label">{t('Gelesen', 'Read', 'Leídos')}</div>
		</div>
		<div class="stat-card review">
			<div class="stat-value">{stats.review}</div>
			<div class="stat-label">{t('Wiederholen', 'Review', 'Repasar')}</div>
		</div>
		<div class="stat-card progress">
			<div class="stat-value">{progressPercent}%</div>
			<div class="stat-label">{t('Fortschritt', 'Progress', 'Progreso')}</div>
		</div>
	</div>

	<div class="progress-bar-container">
		<div class="progress-bar" style="width: {progressPercent}%"></div>
	</div>

	<div class="actions">
		<button class="btn-primary" on:click={startLearning}>
			{stats.read > 0 ? t('Weiterlernen', 'Continue', 'Continuar') : t('Jetzt starten', 'Start now', 'Empezar')}
		</button>
	</div>

	{#if testCount > 0}
		<a class="simulator-card" href="{base}/{data.exam}/tests">
			<div class="sim-icon">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M9 11l3 3L22 4"></path>
					<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
				</svg>
			</div>
			<div class="sim-text">
				<span class="sim-title">{t('Prüfungssimulator', 'Exam Simulator', 'Simulador de examen')}</span>
				<span class="sim-sub">{t(
					'Übe mit echten IHK-Prüfungen und werte sie sofort aus',
					'Practice with real IHK exams and grade them instantly',
					'Practica con exámenes reales del IHK y evalúalos al instante'
				)} · {testCount}</span>
			</div>
			<span class="sim-arrow">→</span>
		</a>
	{/if}

	<div class="offline-section">
		{#if downloadStatus === 'idle'}
			<button class="btn-secondary" on:click={downloadForOffline}>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
					<polyline points="7 10 12 15 17 10"></polyline>
					<line x1="12" y1="15" x2="12" y2="3"></line>
				</svg>
				{t('Für Offline herunterladen', 'Download for offline', 'Descargar para sin conexión')}
			</button>
			<p class="offline-hint">{t('Lade alle Inhalte herunter, um offline zu lernen', 'Download all content to study offline', 'Descarga todo el contenido para estudiar sin conexión')}</p>
		{:else if downloadStatus === 'downloading'}
			<div class="download-progress">
				<div class="download-bar">
					<div class="download-fill" style="width: {(downloadProgress / downloadTotal) * 100}%"></div>
				</div>
				<p>{t('Herunterladen', 'Downloading', 'Descargando')}... {downloadProgress} / {downloadTotal}</p>
			</div>
		{:else if downloadStatus === 'done'}
			<div class="download-done">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
					<polyline points="22 4 12 14.01 9 11.01"></polyline>
				</svg>
				<span>{t('Alle Inhalte sind offline verfügbar!', 'All content is available offline!', '¡Todo el contenido está disponible sin conexión!')}</span>
			</div>
		{:else if downloadStatus === 'error'}
			<div class="download-error">
				<span>{t('Download fehlgeschlagen. Bitte erneut versuchen.', 'Download failed. Please try again.', 'La descarga falló. Inténtalo de nuevo.')}</span>
				<button class="btn-secondary" on:click={downloadForOffline}>{t('Erneut versuchen', 'Retry', 'Reintentar')}</button>
			</div>
		{/if}
	</div>

	{#if reviewTopics.length > 0}
		<section class="review-section">
			<h2>{t('Zur Wiederholung markiert', 'Marked for review', 'Marcados para repasar')} ({reviewTopics.length})</h2>
			<ul class="review-list">
				{#each reviewTopics.slice(0, 5) as topic}
					<li>
						<a href="{base}/{data.exam}/{$language}/{topic.path}">
							<span class="topic-chapter">{topic.chapterTitle[$language]}</span>
							<span class="topic-title">{topic.title[$language]}</span>
						</a>
					</li>
				{/each}
			</ul>
			{#if reviewTopics.length > 5}
				<p class="more-items">... {t('und', 'and', 'y')} {reviewTopics.length - 5} {t('weitere', 'more', 'más')}</p>
			{/if}
		</section>
	{/if}

	<section class="chapters-section">
		<h2>{t('Kapitel', 'Chapters', 'Capítulos')}</h2>
		<div class="chapters-grid">
			{#each data.manifest.chapters as chapter}
				<a href="{base}/{data.exam}/{$language}/{chapter.id}-{chapter.slug}" class="chapter-card">
					<span class="chapter-id">{chapter.id}</span>
					<span class="chapter-title">{chapter.title[$language] || chapter.slug}</span>
				</a>
			{/each}
		</div>
	</section>
</div>

<style>
	.dashboard { max-width: 900px; margin: 0 auto; padding: 2rem; }
	.dashboard-header { text-align: center; margin-bottom: 2rem; }
	.dashboard-header h1 { font-size: var(--text-3xl); font-weight: 700; margin-bottom: 0.5rem; }
	.subtitle { color: var(--color-text-muted); font-size: var(--text-lg); }
	.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
	.stat-card { background: var(--color-bg-secondary); border-radius: var(--radius-lg); padding: 1.25rem; text-align: center; border: 1px solid var(--color-border); }
	.stat-value { font-size: var(--text-2xl); font-weight: 700; margin-bottom: 0.25rem; }
	.stat-label { font-size: var(--text-sm); color: var(--color-text-muted); }
	.stat-card.completed .stat-value { color: var(--color-success); }
	.stat-card.review .stat-value { color: var(--color-warning); }
	.stat-card.progress .stat-value { color: var(--color-primary); }
	.progress-bar-container { height: 8px; background: var(--color-bg-secondary); border-radius: 4px; overflow: hidden; margin-bottom: 2rem; }
	.progress-bar { height: 100%; background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light)); border-radius: 4px; transition: width 0.3s ease; }
	.actions { text-align: center; margin-bottom: 3rem; }
	.btn-primary { background: var(--color-primary); color: white; padding: 0.875rem 2rem; border-radius: var(--radius-lg); font-weight: 600; font-size: var(--text-lg); transition: background var(--transition-fast); }
	.btn-primary:hover { background: var(--color-primary-light); }
	.review-section, .chapters-section { margin-top: 2rem; }
	.review-section h2, .chapters-section h2 { font-size: var(--text-xl); margin-bottom: 1rem; color: var(--color-text); }
	.review-list { list-style: none; padding: 0; }
	.review-list li { margin-bottom: 0.5rem; }
	.review-list a { display: flex; flex-direction: column; padding: 0.75rem 1rem; background: var(--color-bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--color-border); text-decoration: none; transition: border-color var(--transition-fast); }
	.review-list a:hover { border-color: var(--color-warning); }
	.topic-chapter { font-size: var(--text-xs); color: var(--color-text-muted); }
	.topic-title { color: var(--color-text); font-weight: 500; }
	.more-items { color: var(--color-text-muted); font-size: var(--text-sm); margin-top: 0.5rem; }
	.chapters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
	.chapter-card { display: flex; flex-direction: column; padding: 1rem; background: var(--color-bg-secondary); border-radius: var(--radius-lg); border: 1px solid var(--color-border); text-decoration: none; transition: border-color var(--transition-fast), transform var(--transition-fast); }
	.chapter-card:hover { border-color: var(--color-primary); transform: translateY(-2px); }
	.chapter-id { font-size: var(--text-2xl); font-weight: 700; color: var(--color-primary); margin-bottom: 0.25rem; }
	.chapter-title { color: var(--color-text); font-weight: 500; font-size: var(--text-sm); }
	.simulator-card {
		display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;
		padding: 1.25rem 1.5rem; text-decoration: none; color: var(--color-text);
		background: linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 12%, var(--color-bg-secondary)), var(--color-bg-secondary));
		border: 1px solid color-mix(in srgb, var(--color-primary) 30%, var(--color-border));
		border-radius: var(--radius-lg); transition: transform var(--transition-fast), border-color var(--transition-fast);
	}
	.simulator-card:hover { transform: translateY(-2px); border-color: var(--color-primary); }
	.sim-icon { color: var(--color-primary); display: flex; }
	.sim-text { display: flex; flex-direction: column; }
	.sim-title { font-weight: 700; font-size: var(--text-lg); }
	.sim-sub { font-size: var(--text-sm); color: var(--color-text-muted); }
	.sim-arrow { margin-left: auto; font-size: var(--text-xl); color: var(--color-primary); }
	.offline-section { text-align: center; margin-bottom: 2rem; padding: 1.5rem; background: var(--color-bg-secondary); border-radius: var(--radius-lg); border: 1px solid var(--color-border); }
	.btn-secondary { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: var(--color-bg-tertiary); color: var(--color-text); border-radius: var(--radius-md); font-weight: 500; transition: background var(--transition-fast); }
	.btn-secondary:hover { background: var(--color-border); }
	.offline-hint { font-size: var(--text-sm); color: var(--color-text-muted); margin-top: 0.5rem; }
	.download-progress { max-width: 300px; margin: 0 auto; }
	.download-bar { height: 8px; background: var(--color-bg-tertiary); border-radius: 4px; overflow: hidden; margin-bottom: 0.5rem; }
	.download-fill { height: 100%; background: var(--color-primary); transition: width 0.2s ease; }
	.download-progress p { font-size: var(--text-sm); color: var(--color-text-muted); }
	.download-done { display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: var(--color-success); }
	.download-error { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; color: var(--color-error); }
	@media (max-width: 640px) {
		.stats-grid { grid-template-columns: repeat(2, 1fr); }
		.dashboard { padding: 1rem; }
	}
</style>
