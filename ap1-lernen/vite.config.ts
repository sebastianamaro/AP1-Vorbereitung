import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.svg', 'icon-192.svg', 'icon-512.svg'],
			manifest: {
				name: 'AP1 Lernen',
				short_name: 'AP1',
				description: 'IHK AP1 Prüfungsvorbereitung - Fachinformatiker',
				theme_color: '#1e40af',
				background_color: '#0f172a',
				display: 'standalone',
				start_url: '/',
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
				globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
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
