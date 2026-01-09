import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';
import MiniSearch from 'minisearch';
import type { Language } from '$lib/types/content';

interface SearchState {
	isOpen: boolean;
	query: string;
	results: SearchResultItem[];
	isLoading: boolean;
	loadedLang: Language | null;
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
		loadedLang: null
	});

	return {
		subscribe,
		
		open: () => update(s => ({ ...s, isOpen: true })),
		close: () => update(s => ({ ...s, isOpen: false, query: '', results: [] })),
		toggle: () => update(s => ({ ...s, isOpen: !s.isOpen })),
		
		setQuery: (query: string) => {
			update(s => {
				const results = query.length >= 2 && searchIndex
					? searchIndex.search(query, {
						limit: 15,
						prefix: true,      // "proj" matches "project"
						fuzzy: 0.2,        // Tolerates typos
						boost: { title: 3, sections: 2 }
					}) as SearchResultItem[]
					: [];
				return { ...s, query, results };
			});
		},
		
		loadIndex: async (lang: Language, basePath: string = '') => {
			const state = get({ subscribe });
			if (state.loadedLang === lang) return;
			
			update(s => ({ ...s, isLoading: true }));
			
			try {
				const response = await fetch(`${basePath}/search-index-${lang}.json`);
				if (!response.ok) throw new Error('Failed to load search index');
				
				const indexData = await response.text();
				searchIndex = MiniSearch.loadJSON(indexData, {
					fields: ['title', 'content', 'sections'],
					storeFields: ['title', 'path', 'chapterTitle']
				});
				
				update(s => ({ ...s, isLoading: false, loadedLang: lang }));
			} catch (error) {
				console.error('Error loading search index:', error);
				update(s => ({ ...s, isLoading: false }));
			}
		}
	};
}

export const search = createSearchStore();
