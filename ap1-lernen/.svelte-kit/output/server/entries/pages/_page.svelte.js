import { d as store_get, h as head, g as attr_style, e as ensure_array_like, b as attr, s as stringify, u as unsubscribe_stores, c as bind_props } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/client.js";
import { l as language } from "../../chunks/language.js";
import { g as getChapterProgress, a as getReviewTopics, p as progress } from "../../chunks/progress.js";
import { X as escape_html } from "../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let stats, reviewTopics, progressPercent;
    let data = $$props["data"];
    stats = getChapterProgress(data.manifest, store_get($$store_subs ??= {}, "$progress", progress));
    reviewTopics = getReviewTopics(data.manifest, store_get($$store_subs ??= {}, "$progress", progress));
    progressPercent = stats.total > 0 ? Math.round(stats.read / stats.total * 100) : 0;
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>AP1 Lernen - Dashboard</title>`);
      });
    });
    $$renderer2.push(`<div class="dashboard svelte-1uha8ag"><header class="dashboard-header svelte-1uha8ag"><h1 class="svelte-1uha8ag">AP1 Prüfungsvorbereitung</h1> <p class="subtitle svelte-1uha8ag">Fachinformatiker Abschlussprüfung Teil 1</p></header> <div class="stats-grid svelte-1uha8ag"><div class="stat-card svelte-1uha8ag"><div class="stat-value svelte-1uha8ag">${escape_html(stats.total)}</div> <div class="stat-label svelte-1uha8ag">Themen gesamt</div></div> <div class="stat-card completed svelte-1uha8ag"><div class="stat-value svelte-1uha8ag">${escape_html(stats.read)}</div> <div class="stat-label svelte-1uha8ag">Gelesen</div></div> <div class="stat-card review svelte-1uha8ag"><div class="stat-value svelte-1uha8ag">${escape_html(stats.review)}</div> <div class="stat-label svelte-1uha8ag">Wiederholen</div></div> <div class="stat-card progress svelte-1uha8ag"><div class="stat-value svelte-1uha8ag">${escape_html(progressPercent)}%</div> <div class="stat-label svelte-1uha8ag">Fortschritt</div></div></div> <div class="progress-bar-container svelte-1uha8ag"><div class="progress-bar svelte-1uha8ag"${attr_style(`width: ${stringify(progressPercent)}%`)}></div></div> <div class="actions svelte-1uha8ag"><button class="btn-primary svelte-1uha8ag">${escape_html(stats.read > 0 ? "Weiterlernen" : "Jetzt starten")}</button></div> `);
    if (reviewTopics.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="review-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Zur Wiederholung markiert (${escape_html(reviewTopics.length)})</h2> <ul class="review-list svelte-1uha8ag"><!--[-->`);
      const each_array = ensure_array_like(reviewTopics.slice(0, 5));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let topic = each_array[$$index];
        $$renderer2.push(`<li class="svelte-1uha8ag"><a${attr("href", `${stringify(base)}/${stringify(store_get($$store_subs ??= {}, "$language", language))}/${stringify(topic.path)}`)} class="svelte-1uha8ag"><span class="topic-chapter svelte-1uha8ag">${escape_html(topic.chapterTitle[store_get($$store_subs ??= {}, "$language", language)])}</span> <span class="topic-title svelte-1uha8ag">${escape_html(topic.title[store_get($$store_subs ??= {}, "$language", language)])}</span></a></li>`);
      }
      $$renderer2.push(`<!--]--></ul> `);
      if (reviewTopics.length > 5) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="more-items svelte-1uha8ag">... und ${escape_html(reviewTopics.length - 5)} weitere</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <section class="chapters-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Kapitel</h2> <div class="chapters-grid svelte-1uha8ag"><!--[-->`);
    const each_array_1 = ensure_array_like(data.manifest.chapters);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let chapter = each_array_1[$$index_1];
      $$renderer2.push(`<a${attr("href", `${stringify(base)}/${stringify(store_get($$store_subs ??= {}, "$language", language))}/${stringify(chapter.id)}-${stringify(chapter.slug)}`)} class="chapter-card svelte-1uha8ag"><span class="chapter-id svelte-1uha8ag">${escape_html(chapter.id)}</span> <span class="chapter-title svelte-1uha8ag">${escape_html(chapter.title[store_get($$store_subs ??= {}, "$language", language)] || chapter.slug)}</span></a>`);
    }
    $$renderer2.push(`<!--]--></div></section></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
