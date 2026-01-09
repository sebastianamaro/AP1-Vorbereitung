import { a as attr_class, b as attr, e as ensure_array_like, s as stringify, c as bind_props, d as store_get, u as unsubscribe_stores, f as slot } from "../../chunks/index2.js";
import { w as writable, g as get } from "../../chunks/index.js";
import { l as language, a as languageLabels } from "../../chunks/language.js";
import MiniSearch from "minisearch";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { V as getContext, W as fallback, X as escape_html } from "../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "../../chunks/client.js";
import { p as progress } from "../../chunks/progress.js";
import { h as html } from "../../chunks/html.js";
function getInitialTheme() {
  return "dark";
}
function createThemeStore() {
  const { subscribe, set, update } = writable(getInitialTheme());
  return {
    subscribe,
    toggle: () => {
      update((current) => {
        const next = current === "light" ? "dark" : "light";
        return next;
      });
    },
    set: (theme2) => {
      set(theme2);
    },
    init: () => {
    }
  };
}
const theme = createThemeStore();
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
let searchIndex = null;
function createSearchStore() {
  const { subscribe, set, update } = writable({
    isOpen: false,
    query: "",
    results: [],
    isLoading: false,
    loadedLang: null
  });
  return {
    subscribe,
    open: () => update((s) => ({ ...s, isOpen: true })),
    close: () => update((s) => ({ ...s, isOpen: false, query: "", results: [] })),
    toggle: () => update((s) => ({ ...s, isOpen: !s.isOpen })),
    setQuery: (query) => {
      update((s) => {
        const results = query.length >= 2 && searchIndex ? searchIndex.search(query, {
          limit: 15,
          prefix: true,
          // "proj" matches "project"
          fuzzy: 0.2,
          // Tolerates typos
          boost: { title: 3, sections: 2 }
        }) : [];
        return { ...s, query, results };
      });
    },
    loadIndex: async (lang, basePath = "") => {
      const state = get({ subscribe });
      if (state.loadedLang === lang) return;
      update((s) => ({ ...s, isLoading: true }));
      try {
        const response = await fetch(`${basePath}/search-index-${lang}.json`);
        if (!response.ok) throw new Error("Failed to load search index");
        const indexData = await response.text();
        searchIndex = MiniSearch.loadJSON(indexData, {
          fields: ["title", "content", "sections"],
          storeFields: ["title", "path", "chapterTitle"]
        });
        update((s) => ({ ...s, isLoading: false, loadedLang: lang }));
      } catch (error) {
        console.error("Error loading search index:", error);
        update((s) => ({ ...s, isLoading: false }));
      }
    }
  };
}
const search = createSearchStore();
function ChapterNode($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let chapterPath, isActive, allTopics, chapterProgress;
    let chapter = $$props["chapter"];
    let lang = $$props["lang"];
    let currentPath = $$props["currentPath"];
    let progressState = $$props["progressState"];
    let base2 = $$props["base"];
    let depth = fallback($$props["depth"], 0);
    let expanded = false;
    function calculateProgress(topics, state) {
      let read = 0;
      for (const topic of topics) {
        if (state[topic.id]?.status === "read") read++;
      }
      return { read, total: topics.length };
    }
    chapterPath = `${base2}/${lang}/${chapter.id}-${chapter.slug}`;
    isActive = currentPath.startsWith(chapterPath);
    if (isActive && !expanded) expanded = true;
    allTopics = [
      ...chapter.topics,
      ...chapter.subchapters.flatMap((s) => s.topics)
    ];
    chapterProgress = calculateProgress(allTopics, progressState);
    $$renderer2.push(`<div${attr_class("chapter-node svelte-144t7ho", void 0, { "expanded": expanded, "active": isActive })}><button class="chapter-header svelte-144t7ho"${attr("aria-expanded", expanded)}><span${attr_class("chevron svelte-144t7ho", void 0, { "expanded": expanded })}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></span> <span class="chapter-id svelte-144t7ho">${escape_html(chapter.id)}</span> <span class="chapter-title svelte-144t7ho">${escape_html(chapter.title[lang] || chapter.slug)}</span> `);
    if (chapterProgress.total > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="chapter-progress svelte-144t7ho">${escape_html(chapterProgress.read)}/${escape_html(chapterProgress.total)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></button> `);
    if (expanded) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="chapter-content svelte-144t7ho">`);
      if (chapter.overviewPath) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", chapterPath)}${attr_class("topic-link overview svelte-144t7ho", void 0, { "active": currentPath === chapterPath })}>Übersicht</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <!--[-->`);
      const each_array = ensure_array_like(chapter.subchapters);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let subchapter = each_array[$$index_1];
        $$renderer2.push(`<div class="subchapter svelte-144t7ho"><div class="subchapter-header svelte-144t7ho">${escape_html(subchapter.title[lang] || subchapter.slug)}</div> <!--[-->`);
        const each_array_1 = ensure_array_like(subchapter.topics);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let topic = each_array_1[$$index];
          const status = progressState[topic.id]?.status || "unread";
          $$renderer2.push(`<a${attr("href", `${stringify(chapterPath)}/${stringify(subchapter.id)}-${stringify(subchapter.slug)}/${stringify(topic.slug)}`)}${attr_class("topic-link svelte-144t7ho", void 0, {
            "active": currentPath.includes(topic.slug),
            "read": status === "read",
            "review": status === "review"
          })}><span class="status-icon svelte-144t7ho">`);
          if (status === "read") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (status === "review") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`);
            } else {
              $$renderer2.push("<!--[!-->");
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]--></span> <span class="topic-title svelte-144t7ho">${escape_html(topic.title[lang] || topic.slug)}</span></a>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]--> <!--[-->`);
      const each_array_2 = ensure_array_like(chapter.topics);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let topic = each_array_2[$$index_2];
        const status = progressState[topic.id]?.status || "unread";
        $$renderer2.push(`<a${attr("href", `${stringify(chapterPath)}/${stringify(topic.slug)}`)}${attr_class("topic-link svelte-144t7ho", void 0, {
          "active": currentPath.includes(topic.slug),
          "read": status === "read",
          "review": status === "review"
        })}><span class="status-icon svelte-144t7ho">`);
        if (status === "read") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (status === "review") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></span> <span class="topic-title svelte-144t7ho">${escape_html(topic.title[lang] || topic.slug)}</span></a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { chapter, lang, currentPath, progressState, base: base2, depth });
  });
}
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let currentPath;
    let manifest = $$props["manifest"];
    currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    $$renderer2.push(`<aside class="sidebar svelte-15vo0d7"><div class="sidebar-header svelte-15vo0d7"><h2 class="svelte-15vo0d7">Inhalt</h2> <button class="close-btn svelte-15vo0d7" aria-label="Close sidebar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div> <nav class="sidebar-nav svelte-15vo0d7"><!--[-->`);
    const each_array = ensure_array_like(manifest.chapters);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let chapter = each_array[$$index];
      ChapterNode($$renderer2, {
        chapter,
        lang: store_get($$store_subs ??= {}, "$language", language),
        currentPath,
        progressState: store_get($$store_subs ??= {}, "$progress", progress),
        base
      });
    }
    $$renderer2.push(`<!--]--></nav></aside>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { manifest });
  });
}
function TopNav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let sidebarOpen = $$props["sidebarOpen"];
    let manifest = $$props["manifest"];
    const languages = ["de", "en", "es"];
    $$renderer2.push(`<nav class="top-nav svelte-1auxntv"><div class="nav-left svelte-1auxntv"><button class="menu-btn svelte-1auxntv" aria-label="Toggle menu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button> <a${attr("href", `${stringify(base)}/`)} class="logo svelte-1auxntv"><span class="logo-text svelte-1auxntv">AP1</span> <span class="logo-subtitle svelte-1auxntv">Lernen</span></a></div> <div class="nav-right svelte-1auxntv"><button class="search-btn svelte-1auxntv" aria-label="Search"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> <span class="search-hint svelte-1auxntv">Ctrl+K</span></button> `);
    $$renderer2.select(
      {
        class: "lang-select",
        value: store_get($$store_subs ??= {}, "$language", language)
      },
      ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(languages);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let lang = each_array[$$index];
          $$renderer3.option({ value: lang }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(languageLabels[lang])}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      },
      "svelte-1auxntv"
    );
    $$renderer2.push(` <button class="theme-btn svelte-1auxntv" aria-label="Toggle theme">`);
    if (store_get($$store_subs ??= {}, "$theme", theme) === "dark") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></div></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { sidebarOpen, manifest });
  });
}
function SearchModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let manifest = $$props["manifest"];
    let inputRef;
    function getSnippet(content, query) {
      if (!content || !query) return "";
      const lowerContent = content.toLowerCase();
      const lowerQuery = query.toLowerCase().split(/\s+/)[0];
      const index = lowerContent.indexOf(lowerQuery);
      if (index === -1) {
        return content.slice(0, 120) + (content.length > 120 ? "..." : "");
      }
      const start = Math.max(0, index - 50);
      const end = Math.min(content.length, index + query.length + 70);
      let snippet = "";
      if (start > 0) snippet += "...";
      snippet += content.slice(start, end);
      if (end < content.length) snippet += "...";
      return snippet;
    }
    function highlightMatch(text, query) {
      if (!query) return text;
      const words = query.toLowerCase().split(/\s+/).filter((w) => w.length >= 2);
      let result = text;
      for (const word of words) {
        const regex = new RegExp(`(${word})`, "gi");
        result = result.replace(regex, "<mark>$1</mark>");
      }
      return result;
    }
    if (store_get($$store_subs ??= {}, "$search", search).isOpen && inputRef) ;
    if (
      // Use first word
      // No match found, return start of content
      // Get snippet around the match
      store_get($$store_subs ??= {}, "$search", search).isOpen
    ) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="search-overlay svelte-o3sl0m" role="dialog" aria-modal="true" aria-label="Search"><div class="search-modal svelte-o3sl0m" role="presentation"><div class="search-input-wrapper svelte-o3sl0m"><svg class="search-icon svelte-o3sl0m" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> <input type="search" placeholder="Suchen..."${attr("value", store_get($$store_subs ??= {}, "$search", search).query)} class="search-input svelte-o3sl0m"/> <kbd class="search-kbd svelte-o3sl0m">ESC</kbd></div> `);
      if (store_get($$store_subs ??= {}, "$search", search).results.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<ul class="search-results svelte-o3sl0m"><!--[-->`);
        const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$search", search).results);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let result = each_array[$$index];
          $$renderer2.push(`<li><button class="result-item svelte-o3sl0m"><span class="result-chapter svelte-o3sl0m">${escape_html(result.chapterTitle)}</span> <span class="result-title svelte-o3sl0m">${html(highlightMatch(result.title, store_get($$store_subs ??= {}, "$search", search).query))}</span> `);
          if (result.snippet) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span class="result-snippet svelte-o3sl0m">${html(highlightMatch(getSnippet(result.snippet, store_get($$store_subs ??= {}, "$search", search).query), store_get($$store_subs ??= {}, "$search", search).query))}</span>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></button></li>`);
        }
        $$renderer2.push(`<!--]--></ul>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (store_get($$store_subs ??= {}, "$search", search).query.length >= 2) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="no-results svelte-o3sl0m">Keine Ergebnisse gefunden</div>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (store_get($$store_subs ??= {}, "$search", search).query.length > 0) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="no-results svelte-o3sl0m">Mindestens 2 Zeichen eingeben</div>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { manifest });
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let data = $$props["data"];
    let sidebarOpen = true;
    if (store_get($$store_subs ??= {}, "$page", page).params.lang) {
      search.loadIndex(store_get($$store_subs ??= {}, "$page", page).params.lang, base);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div${attr_class("app svelte-12qhfyh", void 0, {
        "dark": store_get($$store_subs ??= {}, "$theme", theme) === "dark"
      })}>`);
      TopNav($$renderer3, {
        manifest: data.manifest,
        get sidebarOpen() {
          return sidebarOpen;
        },
        set sidebarOpen($$value) {
          sidebarOpen = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="app-layout svelte-12qhfyh">`);
      if (sidebarOpen) {
        $$renderer3.push("<!--[-->");
        Sidebar($$renderer3, { manifest: data.manifest });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <main class="app-main svelte-12qhfyh"><!--[-->`);
      slot($$renderer3, $$props, "default", {});
      $$renderer3.push(`<!--]--></main></div> `);
      SearchModal($$renderer3, { manifest: data.manifest });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _layout as default
};
