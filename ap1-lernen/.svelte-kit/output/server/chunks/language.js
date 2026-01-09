import { w as writable } from "./index.js";
import { g as goto } from "./client.js";
import "clsx";
const DEFAULT_LANG = "de";
const VALID_LANGS = ["de", "en", "es"];
function getStoredLanguage() {
  return DEFAULT_LANG;
}
function createLanguageStore() {
  const { subscribe, set } = writable(getStoredLanguage());
  return {
    subscribe,
    set: (lang) => {
      set(lang);
    },
    switchTo: async (newLang, currentPath) => {
      if (!VALID_LANGS.includes(newLang)) return;
      set(newLang);
      const pathMatch = currentPath.match(/^\/(de|en|es)(\/.*)?$/);
      if (pathMatch) {
        pathMatch[2] || "";
        await goto();
      } else {
        await goto();
      }
    }
  };
}
const language = createLanguageStore();
const languageLabels = {
  de: "Deutsch",
  en: "English",
  es: "Español"
};
export {
  languageLabels as a,
  language as l
};
