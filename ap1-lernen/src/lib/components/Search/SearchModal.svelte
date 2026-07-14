<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { language } from '$lib/stores/language';
	import { search } from '$lib/stores/search';
	import type { ContentManifest, Exam } from '$lib/types/content';

	export let manifest: ContentManifest;
	export let exam: Exam;

	let inputRef: HTMLInputElement;

	$: if ($search.isOpen && inputRef) {
		setTimeout(() => inputRef?.focus(), 100);
	}

	function handleSelect(path: string) {
		search.close();
		goto(`${base}/${exam}/${$language}/${path}`);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			search.close();
		}
	}

	function getSnippet(content: string, query: string): string {
		if (!content || !query) return '';

		const lowerContent = content.toLowerCase();
		const lowerQuery = query.toLowerCase().split(/\s+/)[0]; // Use first word
		const index = lowerContent.indexOf(lowerQuery);

		if (index === -1) {
			// No match found, return start of content
			return content.slice(0, 120) + (content.length > 120 ? '...' : '');
		}

		// Get snippet around the match
		const start = Math.max(0, index - 50);
		const end = Math.min(content.length, index + query.length + 70);

		let snippet = '';
		if (start > 0) snippet += '...';
		snippet += content.slice(start, end);
		if (end < content.length) snippet += '...';

		return snippet;
	}

	function highlightMatch(text: string, query: string): string {
		if (!query) return text;
		const words = query.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
		let result = text;
		for (const word of words) {
			const regex = new RegExp(`(${word})`, 'gi');
			result = result.replace(regex, '<mark>$1</mark>');
		}
		return result;
	}
</script>

{#if $search.isOpen}
	<div 
		class="search-overlay" 
		on:click={() => search.close()}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-label="Search"
	>
		<div class="search-modal" on:click|stopPropagation role="presentation">
			<div class="search-input-wrapper">
				<svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="11" cy="11" r="8"></circle>
					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
				</svg>
				<input
					bind:this={inputRef}
					type="search"
					placeholder="Suchen..."
					value={$search.query}
					on:input={(e) => search.setQuery(e.currentTarget.value)}
					class="search-input"
				/>
				<kbd class="search-kbd">ESC</kbd>
			</div>

			{#if $search.results.length > 0}
				<ul class="search-results">
					{#each $search.results as result}
						<li>
							<button
								class="result-item"
								on:click={() => handleSelect(result.path)}
							>
								<span class="result-chapter">{result.chapterTitle}</span>
								<span class="result-title">{@html highlightMatch(result.title, $search.query)}</span>
								{#if result.snippet}
									<span class="result-snippet">{@html highlightMatch(getSnippet(result.snippet, $search.query), $search.query)}</span>
								{/if}
							</button>
						</li>
					{/each}
				</ul>
			{:else if $search.query.length >= 2}
				<div class="no-results">
					Keine Ergebnisse gefunden
				</div>
			{:else if $search.query.length > 0}
				<div class="no-results">
					Mindestens 2 Zeichen eingeben
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.search-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding-top: 10vh;
		z-index: 200;
	}

	.search-modal {
		width: 100%;
		max-width: 560px;
		background: var(--color-bg);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
		margin: 0 1rem;
	}

	.search-input-wrapper {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		border-bottom: 1px solid var(--color-border);
	}

	.search-icon {
		color: var(--color-text-muted);
		flex-shrink: 0;
	}

	.search-input {
		flex: 1;
		border: none;
		background: none;
		font-size: var(--text-lg);
		color: var(--color-text);
		outline: none;
	}

	.search-input::placeholder {
		color: var(--color-text-subtle);
	}

	.search-kbd {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		background: var(--color-bg-secondary);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius-sm);
		color: var(--color-text-muted);
	}

	.search-results {
		list-style: none;
		max-height: 400px;
		overflow-y: auto;
		padding: 0.5rem;
	}

	.result-item {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 0.75rem;
		text-align: left;
		border-radius: var(--radius-md);
		transition: background var(--transition-fast);
	}

	.result-item:hover {
		background: var(--color-bg-secondary);
	}

	.result-chapter {
		font-size: var(--text-xs);
		color: var(--color-text-muted);
		margin-bottom: 0.125rem;
	}

	.result-title {
		font-weight: 500;
		color: var(--color-text);
	}

	.result-snippet {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		margin-top: 0.25rem;
		line-height: 1.4;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.result-item :global(mark) {
		background: var(--color-primary-bg);
		color: var(--color-primary);
		padding: 0 0.125rem;
		border-radius: 2px;
	}

	.no-results {
		padding: 2rem;
		text-align: center;
		color: var(--color-text-muted);
	}
</style>
