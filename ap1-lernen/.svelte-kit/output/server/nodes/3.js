

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_/_...slug_/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "load": null
};
export const universal_id = "src/routes/[lang]/[...slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.t-ASVy3q.js","_app/immutable/chunks/D-NNtcC2.js","_app/immutable/chunks/jBwWl7xB.js","_app/immutable/chunks/BMxztsR7.js","_app/immutable/chunks/CFZsfB7k.js","_app/immutable/chunks/DmCeWRjx.js","_app/immutable/chunks/DygwzPAM.js","_app/immutable/chunks/qGIymKRy.js","_app/immutable/chunks/C2tS3q3-.js"];
export const stylesheets = ["_app/immutable/assets/3.Di-Rr0PX.css"];
export const fonts = [];
