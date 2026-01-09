import { d as store_get, h as head, b as attr, s as stringify, a as attr_class, u as unsubscribe_stores, c as bind_props } from "../../../../chunks/index2.js";
import { b as base } from "../../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { p as progress } from "../../../../chunks/progress.js";
import { marked } from "marked";
import { X as escape_html } from "../../../../chunks/context.js";
import { h as html } from "../../../../chunks/html.js";
function transformLinks(markdown, currentPath, lang, basePath = "") {
  const linkRegex = /\[([^\]]+)\]\(([^)]+\.md)\)/g;
  return markdown.replace(linkRegex, (match, text, relativePath) => {
    try {
      const currentDir = currentPath.substring(0, currentPath.lastIndexOf("/"));
      const absolutePath = resolvePath(currentDir, relativePath);
      const appRoute = contentPathToRoute(absolutePath, lang, basePath);
      return "[" + text + "](" + appRoute + ")";
    } catch (e) {
      return match;
    }
  });
}
function resolvePath(basePath, relativePath) {
  const baseParts = basePath.split("/").filter(Boolean);
  const relParts = relativePath.split("/");
  for (const part of relParts) {
    if (part === "..") {
      baseParts.pop();
    } else if (part !== ".") {
      baseParts.push(part);
    }
  }
  return baseParts.join("/");
}
function contentPathToRoute(contentPath, lang, basePath) {
  let path = contentPath.replace(/\.md$/, "");
  const parts = path.split("/");
  const fileName = parts[parts.length - 1];
  const slugMatch = fileName.match(/^\d+-\d+(?:-\d+)?-(.+)$/);
  if (slugMatch) {
    parts[parts.length - 1] = slugMatch[1];
  }
  return basePath + "/" + lang + "/" + parts.join("/");
}
function renderMarkdown(content) {
  marked.setOptions({ gfm: true, breaks: false });
  return marked(content);
}
function extractTitle(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "Untitled";
}
function processMarkdown(markdown, currentPath, lang, basePath = "") {
  const transformed = transformLinks(markdown, currentPath, lang, basePath);
  return renderMarkdown(transformed);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let title, html$1, status;
    let data = $$props["data"];
    title = extractTitle(data.markdown);
    html$1 = processMarkdown(data.markdown, data.filePath, data.lang, base);
    status = data.topicId ? store_get($$store_subs ??= {}, "$progress", progress)[data.topicId]?.status || "unread" : null;
    head("1n2o4oz", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)} - AP1 Lernen</title>`);
      });
    });
    $$renderer2.push(`<div class="content-page svelte-1n2o4oz"><nav class="page-nav top svelte-1n2o4oz">`);
    if (data.navigation.prev) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `${stringify(base)}/${stringify(data.lang)}/${stringify(data.navigation.prev.slug)}`)} class="nav-link prev svelte-1n2o4oz"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1n2o4oz"><polyline points="15 18 9 12 15 6"></polyline></svg> <div class="nav-content svelte-1n2o4oz"><span class="nav-label svelte-1n2o4oz">Zurück</span> <span class="nav-title svelte-1n2o4oz">${escape_html(data.navigation.prev.title)}</span></div></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (data.navigation.next) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `${stringify(base)}/${stringify(data.lang)}/${stringify(data.navigation.next.slug)}`)} class="nav-link next svelte-1n2o4oz"><div class="nav-content svelte-1n2o4oz"><span class="nav-label svelte-1n2o4oz">Weiter</span> <span class="nav-title svelte-1n2o4oz">${escape_html(data.navigation.next.title)}</span></div> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1n2o4oz"><polyline points="9 18 15 12 9 6"></polyline></svg></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div></div>`);
    }
    $$renderer2.push(`<!--]--></nav> <article class="prose">${html(html$1)}</article> `);
    if (data.topicId) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="topic-actions svelte-1n2o4oz"><div class="status-buttons svelte-1n2o4oz"><button${attr_class("status-btn svelte-1n2o4oz", void 0, { "active": status === "read" })}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Gelesen</span></button> <button${attr_class("status-btn review svelte-1n2o4oz", void 0, { "active": status === "review" })}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg> <span>Wiederholen</span></button></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <nav class="page-nav svelte-1n2o4oz">`);
    if (data.navigation.prev) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `${stringify(base)}/${stringify(data.lang)}/${stringify(data.navigation.prev.slug)}`)} class="nav-link prev svelte-1n2o4oz"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1n2o4oz"><polyline points="15 18 9 12 15 6"></polyline></svg> <div class="nav-content svelte-1n2o4oz"><span class="nav-label svelte-1n2o4oz">Zurück</span> <span class="nav-title svelte-1n2o4oz">${escape_html(data.navigation.prev.title)}</span></div></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (data.navigation.next) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `${stringify(base)}/${stringify(data.lang)}/${stringify(data.navigation.next.slug)}`)} class="nav-link next svelte-1n2o4oz"><div class="nav-content svelte-1n2o4oz"><span class="nav-label svelte-1n2o4oz">Weiter</span> <span class="nav-title svelte-1n2o4oz">${escape_html(data.navigation.next.title)}</span></div> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1n2o4oz"><polyline points="9 18 15 12 9 6"></polyline></svg></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div></div>`);
    }
    $$renderer2.push(`<!--]--></nav></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
