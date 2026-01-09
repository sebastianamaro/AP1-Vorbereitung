const prerender = true;
const ssr = false;
const load = async ({ fetch }) => {
  try {
    const response = await fetch("/manifest.json");
    const manifest = await response.json();
    return { manifest };
  } catch (error) {
    console.error("Failed to load manifest:", error);
    return {
      manifest: {
        version: "0.0.0",
        buildDate: (/* @__PURE__ */ new Date()).toISOString(),
        languages: ["de", "en", "es"],
        chapters: []
      }
    };
  }
};
export {
  load,
  prerender,
  ssr
};
