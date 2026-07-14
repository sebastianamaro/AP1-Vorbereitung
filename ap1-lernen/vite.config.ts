import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const base = process.env.LOCAL_BUILD === 'true' ? '/' : '/AP1-Vorbereitung/';

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePWA({
			registerType: 'autoUpdate',
			base: base,
			scope: base,
			includeAssets: ['favicon.svg', 'icon-192.svg', 'icon-512.svg'],
			manifest: {
				name: 'FIAE Lernen',
				short_name: 'FIAE',
				description: 'IHK Prüfungsvorbereitung Fachinformatiker/-in Anwendungsentwicklung (AP1 & AP2)',
				theme_color: '#1e40af',
				background_color: '#0f172a',
				display: 'standalone',
				start_url: '/AP1-Vorbereitung/',
				icons: [
					{
						src: 'icon-192.svg',
						sizes: '192x192',
						type: 'image/svg+xml'
					},
					{
						src: 'icon-512.svg',
						sizes: '512x512',
						type: 'image/svg+xml',
						purpose: 'any maskable'
					}
				]
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,json,md}'],
				navigateFallback: 'index.html',
				navigateFallbackDenylist: [/^\/api/],
				runtimeCaching: [
					{
						urlPattern: /^.*\/content\/.*\.md$/,
						handler: 'CacheFirst',
						options: {
							cacheName: 'content-cache',
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
