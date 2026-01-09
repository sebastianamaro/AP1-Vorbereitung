import type { LayoutLoad } from './$types';
import type { ContentManifest } from '$lib/types/content';
import { base } from '$app/paths';

export const prerender = true;
export const ssr = false;

export const load: LayoutLoad = async ({ fetch }) => {
	try {
		const response = await fetch(`${base}/manifest.json`);
		const manifest: ContentManifest = await response.json();
		return { manifest };
	} catch (error) {
		console.error('Failed to load manifest:', error);
		return {
			manifest: {
				version: '0.0.0',
				buildDate: new Date().toISOString(),
				languages: ['de', 'en', 'es'],
				chapters: []
			}
		};
	}
};
