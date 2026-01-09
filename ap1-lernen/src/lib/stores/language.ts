import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { base } from '$app/paths';
import type { Language } from '$lib/types/content';

const STORAGE_KEY = 'ap1-language';
const DEFAULT_LANG: Language = 'de';
const VALID_LANGS: Language[] = ['de', 'en', 'es'];

function getStoredLanguage(): Language {
	if (!browser) return DEFAULT_LANG;
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored && VALID_LANGS.includes(stored as Language)) {
		return stored as Language;
	}
	return DEFAULT_LANG;
}

function createLanguageStore() {
	const { subscribe, set } = writable<Language>(getStoredLanguage());

	return {
		subscribe,
		set: (lang: Language) => {
			if (browser && VALID_LANGS.includes(lang)) {
				localStorage.setItem(STORAGE_KEY, lang);
			}
			set(lang);
		},
		switchTo: async (newLang: Language, currentPath: string) => {
			if (!VALID_LANGS.includes(newLang)) return;

			if (browser) {
				localStorage.setItem(STORAGE_KEY, newLang);
			}
			set(newLang);

			// Navigate to same content in new language
			// Strip base path if present
			let pathWithoutBase = currentPath;
			if (base && currentPath.startsWith(base)) {
				pathWithoutBase = currentPath.slice(base.length) || '/';
			}

			const pathMatch = pathWithoutBase.match(/^\/(de|en|es)(\/.*)?$/);
			if (pathMatch) {
				const restOfPath = pathMatch[2] || '';
				await goto(`${base}/${newLang}${restOfPath}`);
			} else {
				await goto(`${base}/${newLang}`);
			}
		}
	};
}

export const language = createLanguageStore();

export const languageLabels: Record<Language, string> = {
	de: 'Deutsch',
	en: 'English',
	es: 'Español'
};
