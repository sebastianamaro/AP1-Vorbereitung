<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { search } from '$lib/stores/search';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Sidebar from '$lib/components/Navigation/Sidebar.svelte';
	import TopNav from '$lib/components/Navigation/TopNav.svelte';
	import SearchModal from '$lib/components/Search/SearchModal.svelte';
	import type { ContentManifest, Exam } from '$lib/types/content';

	export let data: { exam: Exam; manifest: ContentManifest };

	let sidebarOpen = true;

	// Load the search index for the active exam + current language.
	$: {
		const lang = ($page.params.lang || 'de') as 'de' | 'en' | 'es';
		search.loadIndex(data.exam, lang, base);
	}
</script>

<div class="app">
	<TopNav bind:sidebarOpen exam={data.exam} manifest={data.manifest} />

	<div class="app-layout">
		{#if sidebarOpen}
			<Sidebar exam={data.exam} manifest={data.manifest} on:close={() => (sidebarOpen = false)} />
		{/if}

		<main class="app-main">
			<slot />
		</main>
	</div>

	<SearchModal exam={data.exam} manifest={data.manifest} />
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
