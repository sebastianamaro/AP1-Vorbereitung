

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "load": null
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DwxyX1rl.js","_app/immutable/chunks/D-NNtcC2.js","_app/immutable/chunks/jBwWl7xB.js","_app/immutable/chunks/BMxztsR7.js","_app/immutable/chunks/CFZsfB7k.js","_app/immutable/chunks/Cm27TbpX.js","_app/immutable/chunks/DmCeWRjx.js","_app/immutable/chunks/DygwzPAM.js","_app/immutable/chunks/qGIymKRy.js","_app/immutable/chunks/D7JlT1V7.js","_app/immutable/chunks/CJKjsTp3.js","_app/immutable/chunks/YRf6eFZU.js"];
export const stylesheets = ["_app/immutable/assets/0.FqBlUiwz.css"];
export const fonts = [];
