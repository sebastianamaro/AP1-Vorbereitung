<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import { language } from '$lib/stores/language';
	import { search } from '$lib/stores/search';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Sidebar from '$lib/components/Navigation/Sidebar.svelte';
	import TopNav from '$lib/components/Navigation/TopNav.svelte';
	import SearchModal from '$lib/components/Search/SearchModal.svelte';
	import type { ContentManifest } from '$lib/types/content';

	export let data: { manifest: ContentManifest };

	let sidebarOpen = true;

	onMount(() => {
		theme.init();
		
		// Load search index for current language
		const lang = $page.params.lang || 'de';
		search.loadIndex(lang as 'de' | 'en' | 'es', base);

		// Handle keyboard shortcuts
		function handleKeydown(e: KeyboardEvent) {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				search.toggle();
			}
			if (e.key === 'Escape') {
				search.close();
			}
		}

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});

	// Update search index when language changes
	$: if ($page.params.lang) {
		search.loadIndex($page.params.lang as 'de' | 'en' | 'es', base);
	}
</script>

<div class="app" class:dark={$theme === 'dark'}>
	<TopNav 
		bind:sidebarOpen 
		manifest={data.manifest}
	/>
	
	<div class="app-layout">
		{#if sidebarOpen}
			<Sidebar 
				manifest={data.manifest}
				on:close={() => sidebarOpen = false}
			/>
		{/if}
		
		<main class="app-main">
			<slot />
		</main>
	</div>
	
	<SearchModal manifest={data.manifest} />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100dvh;
	}

	.app-layout {
		display: flex;
		flex: 1;
		overflow: hidden;
	}

	.app-main {
		flex: 1;
		overflow-y: auto;
		background: var(--color-bg);
	}

	@media (max-width: 768px) {
		.app-layout {
			position: relative;
		}
	}
</style>
