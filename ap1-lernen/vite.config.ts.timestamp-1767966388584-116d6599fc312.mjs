// vite.config.ts
import { sveltekit } from "file:///mnt/c/Users/SebastianAmaro/source/AP1-Vorbereitung/ap1-lernen/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig } from "file:///mnt/c/Users/SebastianAmaro/source/AP1-Vorbereitung/ap1-lernen/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///mnt/c/Users/SebastianAmaro/source/AP1-Vorbereitung/ap1-lernen/node_modules/vite-plugin-pwa/dist/index.js";
var base = process.env.LOCAL_BUILD === "true" ? "/" : "/AP1-Vorbereitung/";
var vite_config_default = defineConfig({
  plugins: [
    sveltekit(),
    VitePWA({
      registerType: "autoUpdate",
      base,
      scope: base,
      includeAssets: ["favicon.svg", "icon-192.svg", "icon-512.svg"],
      manifest: {
        name: "AP1 Lernen",
        short_name: "AP1",
        description: "IHK AP1 Pr\xFCfungsvorbereitung - Fachinformatiker",
        theme_color: "#1e40af",
        background_color: "#0f172a",
        display: "standalone",
        start_url: "/AP1-Vorbereitung/",
        icons: [
          {
            src: "icon-192.svg",
            sizes: "192x192",
            type: "image/svg+xml"
          },
          {
            src: "icon-512.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json,md}"],
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/^\/api/],
        runtimeCaching: [
          {
            urlPattern: /^.*\/content\/.*\.md$/,
            handler: "CacheFirst",
            options: {
              cacheName: "content-cache",
              expiration: {
                maxEntries: 500,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvU2ViYXN0aWFuQW1hcm8vc291cmNlL0FQMS1Wb3JiZXJlaXR1bmcvYXAxLWxlcm5lblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL1NlYmFzdGlhbkFtYXJvL3NvdXJjZS9BUDEtVm9yYmVyZWl0dW5nL2FwMS1sZXJuZW4vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL1NlYmFzdGlhbkFtYXJvL3NvdXJjZS9BUDEtVm9yYmVyZWl0dW5nL2FwMS1sZXJuZW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuY29uc3QgYmFzZSA9IHByb2Nlc3MuZW52LkxPQ0FMX0JVSUxEID09PSAndHJ1ZScgPyAnLycgOiAnL0FQMS1Wb3JiZXJlaXR1bmcvJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW1xuXHRcdHN2ZWx0ZWtpdCgpLFxuXHRcdFZpdGVQV0Eoe1xuXHRcdFx0cmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG5cdFx0XHRiYXNlOiBiYXNlLFxuXHRcdFx0c2NvcGU6IGJhc2UsXG5cdFx0XHRpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ2ljb24tMTkyLnN2ZycsICdpY29uLTUxMi5zdmcnXSxcblx0XHRcdG1hbmlmZXN0OiB7XG5cdFx0XHRcdG5hbWU6ICdBUDEgTGVybmVuJyxcblx0XHRcdFx0c2hvcnRfbmFtZTogJ0FQMScsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnSUhLIEFQMSBQclx1MDBGQ2Z1bmdzdm9yYmVyZWl0dW5nIC0gRmFjaGluZm9ybWF0aWtlcicsXG5cdFx0XHRcdHRoZW1lX2NvbG9yOiAnIzFlNDBhZicsXG5cdFx0XHRcdGJhY2tncm91bmRfY29sb3I6ICcjMGYxNzJhJyxcblx0XHRcdFx0ZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxuXHRcdFx0XHRzdGFydF91cmw6ICcvQVAxLVZvcmJlcmVpdHVuZy8nLFxuXHRcdFx0XHRpY29uczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHNyYzogJ2ljb24tMTkyLnN2ZycsXG5cdFx0XHRcdFx0XHRzaXplczogJzE5MngxOTInLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2ltYWdlL3N2Zyt4bWwnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRzcmM6ICdpY29uLTUxMi5zdmcnLFxuXHRcdFx0XHRcdFx0c2l6ZXM6ICc1MTJ4NTEyJyxcblx0XHRcdFx0XHRcdHR5cGU6ICdpbWFnZS9zdmcreG1sJyxcblx0XHRcdFx0XHRcdHB1cnBvc2U6ICdhbnkgbWFza2FibGUnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0d29ya2JveDoge1xuXHRcdFx0XHRnbG9iUGF0dGVybnM6IFsnKiovKi57anMsY3NzLGh0bWwsaWNvLHBuZyxzdmcsanNvbixtZH0nXSxcblx0XHRcdFx0bmF2aWdhdGVGYWxsYmFjazogJ2luZGV4Lmh0bWwnLFxuXHRcdFx0XHRuYXZpZ2F0ZUZhbGxiYWNrRGVueWxpc3Q6IFsvXlxcL2FwaS9dLFxuXHRcdFx0XHRydW50aW1lQ2FjaGluZzogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVybFBhdHRlcm46IC9eLipcXC9jb250ZW50XFwvLipcXC5tZCQvLFxuXHRcdFx0XHRcdFx0aGFuZGxlcjogJ0NhY2hlRmlyc3QnLFxuXHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRjYWNoZU5hbWU6ICdjb250ZW50LWNhY2hlJyxcblx0XHRcdFx0XHRcdFx0ZXhwaXJhdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdG1heEVudHJpZXM6IDUwMCxcblx0XHRcdFx0XHRcdFx0XHRtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzMFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0fSlcblx0XVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRXLFNBQVMsaUJBQWlCO0FBQ3RZLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTtBQUV4QixJQUFNLE9BQU8sUUFBUSxJQUFJLGdCQUFnQixTQUFTLE1BQU07QUFFeEQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2Q7QUFBQSxNQUNBLE9BQU87QUFBQSxNQUNQLGVBQWUsQ0FBQyxlQUFlLGdCQUFnQixjQUFjO0FBQUEsTUFDN0QsVUFBVTtBQUFBLFFBQ1QsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsU0FBUztBQUFBLFFBQ1QsV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFVBQ047QUFBQSxZQUNDLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1Y7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1IsY0FBYyxDQUFDLHdDQUF3QztBQUFBLFFBQ3ZELGtCQUFrQjtBQUFBLFFBQ2xCLDBCQUEwQixDQUFDLFFBQVE7QUFBQSxRQUNuQyxnQkFBZ0I7QUFBQSxVQUNmO0FBQUEsWUFDQyxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxTQUFTO0FBQUEsY0FDUixXQUFXO0FBQUEsY0FDWCxZQUFZO0FBQUEsZ0JBQ1gsWUFBWTtBQUFBLGdCQUNaLGVBQWUsS0FBSyxLQUFLLEtBQUs7QUFBQSxjQUMvQjtBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNELENBQUM7QUFBQSxFQUNGO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
