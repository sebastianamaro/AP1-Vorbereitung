<script lang="ts">
	import type { Chapter, Subchapter, Topic, ProgressState, Language } from '$lib/types/content';

	export let chapter: Chapter;
	export let lang: Language;
	export let currentPath: string;
	export let progressState: ProgressState;
	export let base: string;
	export let depth: number = 0;

	let expanded = false;

	$: chapterPath = `${base}/${lang}/${chapter.id}-${chapter.slug}`;
	$: isActive = currentPath.startsWith(chapterPath);
	$: if (isActive && !expanded) expanded = true;

	function getTopicStatus(topicId: string): 'unread' | 'read' | 'review' {
		return progressState[topicId]?.status || 'unread';
	}

	$: allTopics = [
		...chapter.topics,
		...chapter.subchapters.flatMap(s => s.topics)
	];

	// Make progressState an explicit dependency for reactivity
	$: chapterProgress = calculateProgress(allTopics, progressState);

	function calculateProgress(topics: Topic[], state: ProgressState) {
		let read = 0;
		for (const topic of topics) {
			if (state[topic.id]?.status === 'read') read++;
		}
		return { read, total: topics.length };
	}
</script>

<div class="chapter-node" class:expanded class:active={isActive}>
	<button 
		class="chapter-header"
		on:click={() => expanded = !expanded}
		aria-expanded={expanded}
	>
		<span class="chevron" class:expanded>
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<polyline points="9 18 15 12 9 6"></polyline>
			</svg>
		</span>
		<span class="chapter-id">{chapter.id}</span>
		<span class="chapter-title">{chapter.title[lang] || chapter.slug}</span>
		{#if chapterProgress.total > 0}
			<span class="chapter-progress">
				{chapterProgress.read}/{chapterProgress.total}
			</span>
		{/if}
	</button>

	{#if expanded}
		<div class="chapter-content">
			{#if chapter.overviewPath}
				<a 
					href="{chapterPath}"
					class="topic-link overview"
					class:active={currentPath === chapterPath}
				>
					Übersicht
				</a>
			{/if}

			{#each chapter.subchapters as subchapter}
				<div class="subchapter">
					<div class="subchapter-header">
						{subchapter.title[lang] || subchapter.slug}
					</div>
					{#each subchapter.topics as topic (topic.id + '-' + (progressState[topic.id]?.status || 'unread'))}
						{@const status = progressState[topic.id]?.status || 'unread'}
						<a 
							href="{chapterPath}/{subchapter.id}-{subchapter.slug}/{topic.slug}"
							class="topic-link"
							class:active={currentPath.includes(topic.slug)}
							class:read={status === 'read'}
							class:review={status === 'review'}
						>
							<span class="status-icon">
								{#if status === 'read'}
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								{:else if status === 'review'}
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
										<line x1="4" y1="22" x2="4" y2="15"></line>
									</svg>
								{/if}
							</span>
							<span class="topic-title">{topic.title[lang] || topic.slug}</span>
						</a>
					{/each}
				</div>
			{/each}

			{#each chapter.topics as topic (topic.id + '-' + (progressState[topic.id]?.status || 'unread'))}
				{@const status = progressState[topic.id]?.status || 'unread'}
				<a 
					href="{chapterPath}/{topic.slug}"
					class="topic-link"
					class:active={currentPath.includes(topic.slug)}
					class:read={status === 'read'}
					class:review={status === 'review'}
				>
					<span class="status-icon">
						{#if status === 'read'}
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
						{:else if status === 'review'}
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
								<line x1="4" y1="22" x2="4" y2="15"></line>
							</svg>
						{/if}
					</span>
					<span class="topic-title">{topic.title[lang] || topic.slug}</span>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	.chapter-node {
		margin-bottom: 0.25rem;
	}

	.chapter-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.5rem;
		border-radius: var(--radius-md);
		text-align: left;
		font-size: var(--text-sm);
		color: var(--color-text);
		transition: background var(--transition-fast);
	}

	.chapter-header:hover {
		background: var(--color-bg-tertiary);
	}

	.chapter-node.active > .chapter-header {
		background: var(--color-primary-bg);
	}

	.chevron {
		display: flex;
		transition: transform var(--transition-fast);
		color: var(--color-text-muted);
	}

	.chevron.expanded {
		transform: rotate(90deg);
	}

	.chapter-id {
		font-weight: 600;
		color: var(--color-primary);
		min-width: 1.5rem;
	}

	.chapter-title {
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.chapter-progress {
		font-size: var(--text-xs);
		color: var(--color-text-subtle);
		background: var(--color-bg-tertiary);
		padding: 0.125rem 0.375rem;
		border-radius: var(--radius-sm);
	}

	.chapter-content {
		padding-left: 1.25rem;
		margin-top: 0.25rem;
	}

	.subchapter {
		margin-bottom: 0.5rem;
	}

	.subchapter-header {
		font-size: var(--text-xs);
		font-weight: 600;
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 0.5rem 0.5rem 0.25rem;
	}

	.topic-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.375rem 0.5rem;
		border-radius: var(--radius-sm);
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		text-decoration: none;
		transition: background var(--transition-fast), color var(--transition-fast);
	}

	.topic-link:hover {
		background: var(--color-bg-tertiary);
		color: var(--color-text);
	}

	.topic-link.active {
		background: var(--color-primary-bg);
		color: var(--color-primary);
	}

	.topic-link.overview {
		font-weight: 500;
	}

	.status-icon {
		width: 14px;
		height: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.topic-link.read .status-icon {
		color: var(--color-success);
	}

	.topic-link.review .status-icon {
		color: var(--color-warning);
	}

	.topic-title {
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
