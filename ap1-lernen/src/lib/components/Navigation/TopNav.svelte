<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { theme } from '$lib/stores/theme';
	import { language, languageLabels } from '$lib/stores/language';
	import { search } from '$lib/stores/search';
	import type { ContentManifest, Language } from '$lib/types/content';

	export let sidebarOpen: boolean;
	export let manifest: ContentManifest;

	const languages: Language[] = ['de', 'en', 'es'];

	function handleLanguageChange(e: Event) {
		const newLang = (e.target as HTMLSelectElement).value as Language;
		language.switchTo(newLang, $page.url.pathname);
	}
</script>

<nav class="top-nav">
	<div class="nav-left">
		<button 
			class="menu-btn" 
			on:click={() => sidebarOpen = !sidebarOpen}
			aria-label="Toggle menu"
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<line x1="3" y1="6" x2="21" y2="6"></line>
				<line x1="3" y1="12" x2="21" y2="12"></line>
				<line x1="3" y1="18" x2="21" y2="18"></line>
			</svg>
		</button>
		<a href="{base}/" class="logo">
			<span class="logo-text">AP1</span>
			<span class="logo-subtitle">Lernen</span>
		</a>
	</div>

	<div class="nav-right">
		<button 
			class="search-btn" 
			on:click={() => search.open()}
			aria-label="Search"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="11" cy="11" r="8"></circle>
				<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
			</svg>
			<span class="search-hint">Ctrl+K</span>
		</button>

		<select 
			class="lang-select" 
			value={$language}
			on:change={handleLanguageChange}
		>
			{#each languages as lang}
				<option value={lang}>{languageLabels[lang]}</option>
			{/each}
		</select>

		<button 
			class="theme-btn" 
			on:click={() => theme.toggle()}
			aria-label="Toggle theme"
		>
			{#if $theme === 'dark'}
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="12" cy="12" r="5"></circle>
					<line x1="12" y1="1" x2="12" y2="3"></line>
					<line x1="12" y1="21" x2="12" y2="23"></line>
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
					<line x1="1" y1="12" x2="3" y2="12"></line>
					<line x1="21" y1="12" x2="23" y2="12"></line>
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
				</svg>
			{:else}
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
			{/if}
		</button>
	</div>
</nav>

<style>
	.top-nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--nav-height);
		padding: 0 1rem;
		background: var(--color-bg-secondary);
		border-bottom: 1px solid var(--color-border);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.nav-left, .nav-right {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.menu-btn, .search-btn, .theme-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: var(--radius-md);
		color: var(--color-text-muted);
		transition: background var(--transition-fast), color var(--transition-fast);
	}

	.menu-btn:hover, .search-btn:hover, .theme-btn:hover {
		background: var(--color-bg-tertiary);
		color: var(--color-text);
	}

	.logo {
		display: flex;
		align-items: baseline;
		gap: 0.375rem;
		text-decoration: none;
	}

	.logo-text {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--color-primary);
	}

	.logo-subtitle {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
	}

	.search-btn {
		width: auto;
		padding: 0 0.75rem;
		gap: 0.5rem;
	}

	.search-hint {
		font-size: var(--text-xs);
		color: var(--color-text-subtle);
		background: var(--color-bg-tertiary);
		padding: 0.125rem 0.375rem;
		border-radius: var(--radius-sm);
	}

	.lang-select {
		padding: 0.5rem 0.75rem;
		border-radius: var(--radius-md);
		background: var(--color-bg-tertiary);
		border: 1px solid var(--color-border);
		color: var(--color-text);
		font-size: var(--text-sm);
		cursor: pointer;
	}

	.lang-select:focus {
		outline: none;
		border-color: var(--color-primary);
	}

	@media (max-width: 640px) {
		.search-hint {
			display: none;
		}
	}
</style>
