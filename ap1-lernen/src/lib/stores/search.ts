import { writable, get } from 'svelte/store';
import MiniSearch from 'minisearch';
import type { Language, Exam } from '$lib/types/content';

interface SearchState {
	isOpen: boolean;
	query: string;
	results: SearchResultItem[];
	isLoading: boolean;
	loadedKey: string | null;
}

interface SearchResultItem {
	id: number;
	title: string;
	path: string;
	chapterTitle: string;
	snippet: string;
	score: number;
}

let searchIndex: MiniSearch | null = null;

function createSearchStore() {
	const { subscribe, set, update } = writable<SearchState>({
		isOpen: false,
		query: '',
		results: [],
		isLoading: false,
		loadedKey: null
	});

	return {
		subscribe,
		
		open: () => update(s => ({ ...s, isOpen: true })),
		close: () => update(s => ({ ...s, isOpen: false, query: '', results: [] })),
		toggle: () => update(s => ({ ...s, isOpen: !s.isOpen })),
		
		setQuery: (query: string) => {
			update(s => {
				const raw = query.length >= 2 && searchIndex
					? searchIndex.search(query, {
						prefix: true,      // "proj" matches "project"
						fuzzy: 0.2,        // Tolerates typos
						boost: { title: 3, sections: 2 }
					})
					: [];
				const results = (raw as unknown as SearchResultItem[]).slice(0, 15);
				return { ...s, query, results };
			});
		},
		
		loadIndex: async (exam: Exam, lang: Language, basePath: string = '') => {
			const key = `${exam}-${lang}`;
			const state = get({ subscribe });
			if (state.loadedKey === key) return;

			update(s => ({ ...s, isLoading: true }));

			try {
				const response = await fetch(`${basePath}/${exam}-search-index-${lang}.json`);
				if (!response.ok) throw new Error('Failed to load search index');

				const indexData = await response.text();
				searchIndex = MiniSearch.loadJSON(indexData, {
					fields: ['title', 'content', 'sections'],
					storeFields: ['title', 'path', 'chapterTitle']
				});

				update(s => ({ ...s, isLoading: false, loadedKey: key, results: [] }));
			} catch (error) {
				console.error('Error loading search index:', error);
				update(s => ({ ...s, isLoading: false }));
			}
		}
	};
}

export const search = createSearchStore();
