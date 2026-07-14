import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { base } from '$app/paths';
import type { Language } from '$lib/types/content';

const STORAGE_KEY = 'ap-language';
const LEGACY_KEY = 'ap1-language';
const DEFAULT_LANG: Language = 'de';
const VALID_LANGS: Language[] = ['de', 'en', 'es'];

function getStoredLanguage(): Language {
	if (!browser) return DEFAULT_LANG;
	const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_KEY);
	if (stored && VALID_LANGS.includes(stored as Language)) return stored as Language;
	return DEFAULT_LANG;
}

function createLanguageStore() {
	const { subscribe, set } = writable<Language>(getStoredLanguage());

	return {
		subscribe,
		set: (lang: Language) => {
			if (browser && VALID_LANGS.includes(lang)) localStorage.setItem(STORAGE_KEY, lang);
			set(lang);
		},
		switchTo: async (newLang: Language, currentPath: string) => {
			if (!VALID_LANGS.includes(newLang)) return;
			if (browser) localStorage.setItem(STORAGE_KEY, newLang);
			set(newLang);

			// Strip base path if present
			let path = currentPath;
			if (base && currentPath.startsWith(base)) {
				path = currentPath.slice(base.length) || '/';
			}

			// Preserve the exam prefix: /<exam>/<lang>/<rest>
			const m = path.match(/^\/(ap1|ap2)\/(de|en|es)(\/.*)?$/);
			if (m) {
				const exam = m[1];
				const rest = m[3] || '';
				await goto(`${base}/${exam}/${newLang}${rest}`);
				return;
			}
			// On an exam dashboard (/<exam>) or elsewhere: just stay, language set.
		}
	};
}

export const language = createLanguageStore();

export const languageLabels: Record<Language, string> = {
	de: 'Deutsch',
	en: 'English',
	es: 'Español'
};
