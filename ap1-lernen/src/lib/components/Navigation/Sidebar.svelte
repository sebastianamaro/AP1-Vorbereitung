<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { language } from '$lib/stores/language';
	import { progress } from '$lib/stores/progress';
	import ChapterNode from './ChapterNode.svelte';
	import type { ContentManifest, Exam } from '$lib/types/content';

	export let manifest: ContentManifest;
	export let exam: Exam;

	const dispatch = createEventDispatcher();

	$: currentPath = $page.url.pathname;
	$: examProgress = $progress[exam] || {};
</script>

<aside class="sidebar">
	<div class="sidebar-header">
		<h2>Inhalt</h2>
		<button class="close-btn" on:click={() => dispatch('close')} aria-label="Close sidebar">
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</svg>
		</button>
	</div>
	
	<nav class="sidebar-nav">
		{#each manifest.chapters as chapter}
			<ChapterNode
				{chapter}
				{exam}
				lang={$language}
				{currentPath}
				progressState={examProgress}
				{base}
			/>
		{/each}
	</nav>
</aside>

<style>
	.sidebar {
		width: var(--sidebar-width);
		min-width: var(--sidebar-width);
		height: calc(100vh - var(--nav-height));
		background: var(--color-bg-secondary);
		border-right: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.sidebar-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		border-bottom: 1px solid var(--color-border);
	}

	.sidebar-header h2 {
		font-size: var(--text-lg);
		font-weight: 600;
	}

	.close-btn {
		display: none;
		width: 32px;
		height: 32px;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-md);
		color: var(--color-text-muted);
	}

	.close-btn:hover {
		background: var(--color-bg-tertiary);
		color: var(--color-text);
	}

	.sidebar-nav {
		flex: 1;
		overflow-y: auto;
		padding: 0.5rem;
	}

	@media (max-width: 768px) {
		.sidebar {
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			z-index: 50;
			box-shadow: var(--shadow-lg);
		}

		.close-btn {
			display: flex;
		}
	}
</style>
