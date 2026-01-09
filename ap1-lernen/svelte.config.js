import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.LOCAL_BUILD === 'true'
				? ''
				: (process.env.NODE_ENV === 'production' ? '/AP1-Vorbereitung' : '')
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
