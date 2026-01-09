// @ts-nocheck
import type { LayoutLoad } from './$types';
import type { ContentManifest } from '$lib/types/content';

export const prerender = true;
export const ssr = false;

export const load = async ({ fetch }: Parameters<LayoutLoad>[0]) => {
	try {
		const response = await fetch('/manifest.json');
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
