<script lang="ts">
	import { base } from '$app/paths';
	import { progress } from '$lib/stores/progress';
	import { processMarkdown, extractTitle } from '$lib/utils/markdown';
	import type { Language, Chapter, Topic, Exam } from '$lib/types/content';

	export let data: {
		exam: Exam;
		markdown: string;
		filePath: string;
		chapter: Chapter;
		topic: Topic | null;
		topicId: string | null;
		lang: Language;
		navigation: { prev: { slug: string; title: string } | null; next: { slug: string; title: string } | null };
	};

	$: title = extractTitle(data.markdown);
	$: html = processMarkdown(data.markdown, data.filePath, data.exam, data.lang, base);
	$: status = data.topicId ? ($progress[data.exam]?.[data.topicId]?.status || 'unread') : null;

	const label = (de: string, en: string, es: string) =>
		data.lang === 'de' ? de : data.lang === 'es' ? es : en;

	function toggle(target: 'read' | 'review') {
		if (!data.topicId) return;
		if (status === target) progress.markUnread(data.exam, data.topicId);
		else if (target === 'read') progress.markRead(data.exam, data.topicId);
		else progress.markReview(data.exam, data.topicId);
	}
</script>

<svelte:head>
	<title>{title} – {data.exam.toUpperCase()} · FIAE Lernen</title>
</svelte:head>

<div class="content-page">
	<nav class="page-nav top">
		{#if data.navigation.prev}
			<a href="{base}/{data.exam}/{data.lang}/{data.navigation.prev.slug}" class="nav-link prev">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
				<div class="nav-content"><span class="nav-label">{label('Zurück', 'Back', 'Atrás')}</span><span class="nav-title">{data.navigation.prev.title}</span></div>
			</a>
		{:else}<div></div>{/if}
		{#if data.navigation.next}
			<a href="{base}/{data.exam}/{data.lang}/{data.navigation.next.slug}" class="nav-link next">
				<div class="nav-content"><span class="nav-label">{label('Weiter', 'Next', 'Siguiente')}</span><span class="nav-title">{data.navigation.next.title}</span></div>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
			</a>
		{:else}<div></div>{/if}
	</nav>

	<article class="prose">{@html html}</article>

	{#if data.topicId}
		<div class="topic-actions">
			<div class="status-buttons">
				<button class="status-btn" class:active={status === 'read'} on:click={() => toggle('read')}>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
					<span>{label('Gelesen', 'Read', 'Leído')}</span>
				</button>
				<button class="status-btn review" class:active={status === 'review'} on:click={() => toggle('review')}>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
					<span>{label('Wiederholen', 'Review', 'Repasar')}</span>
				</button>
			</div>
		</div>
	{/if}

	<nav class="page-nav">
		{#if data.navigation.prev}
			<a href="{base}/{data.exam}/{data.lang}/{data.navigation.prev.slug}" class="nav-link prev">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
				<div class="nav-content"><span class="nav-label">{label('Zurück', 'Back', 'Atrás')}</span><span class="nav-title">{data.navigation.prev.title}</span></div>
			</a>
		{:else}<div></div>{/if}
		{#if data.navigation.next}
			<a href="{base}/{data.exam}/{data.lang}/{data.navigation.next.slug}" class="nav-link next">
				<div class="nav-content"><span class="nav-label">{label('Weiter', 'Next', 'Siguiente')}</span><span class="nav-title">{data.navigation.next.title}</span></div>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
			</a>
		{:else}<div></div>{/if}
	</nav>
</div>

<style>
	.content-page { max-width: var(--content-max-width); margin: 0 auto; }
	.topic-actions { padding: 0 2rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border); }
	.status-buttons { display: flex; gap: 0.75rem; }
	.status-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1rem; border-radius: var(--radius-lg); font-size: var(--text-sm); font-weight: 500; background: var(--color-bg-secondary); color: var(--color-text-muted); border: 1px solid var(--color-border); transition: all var(--transition-fast); }
	.status-btn:hover { background: var(--color-bg-tertiary); color: var(--color-text); }
	.status-btn.active { background: var(--color-success-bg); color: var(--color-success); border-color: var(--color-success); }
	.status-btn.review.active { background: var(--color-warning-bg); color: var(--color-warning); border-color: var(--color-warning); }
	.page-nav { display: flex; justify-content: space-between; gap: 1rem; padding: 2rem; margin-top: 2rem; border-top: 1px solid var(--color-border); }
	.page-nav.top { margin-top: 0; margin-bottom: 1rem; border-top: none; border-bottom: 1px solid var(--color-border); }
	.nav-link { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border-radius: var(--radius-lg); text-decoration: none; background: var(--color-bg-secondary); border: 1px solid var(--color-border); transition: border-color var(--transition-fast); max-width: 45%; }
	.nav-link:hover { border-color: var(--color-primary); }
	.nav-link svg { color: var(--color-text-muted); flex-shrink: 0; }
	.nav-content { display: flex; flex-direction: column; overflow: hidden; }
	.nav-label { font-size: var(--text-xs); color: var(--color-text-muted); }
	.nav-title { font-weight: 500; color: var(--color-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	.nav-link.next { text-align: right; }
	.nav-link.next .nav-content { align-items: flex-end; }
	@media (max-width: 640px) {
		.page-nav { flex-direction: column; }
		.nav-link { max-width: 100%; }
		.topic-actions { padding: 0 1rem; }
		.status-buttons { flex-direction: column; }
	}
</style>
