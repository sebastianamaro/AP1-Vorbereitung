import { w as writable } from "./index.js";
import { g as goto } from "./client.js";
import "clsx";
import { b as base } from "./server.js";
import "@sveltejs/kit/internal/server";
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
      let pathWithoutBase = currentPath;
      if (base && currentPath.startsWith(base)) {
        pathWithoutBase = currentPath.slice(base.length) || "/";
      }
      const pathMatch = pathWithoutBase.match(/^\/(de|en|es)(\/.*)?$/);
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
