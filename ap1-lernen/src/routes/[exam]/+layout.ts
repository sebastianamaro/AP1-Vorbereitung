import type { LayoutLoad } from './$types';
import type { ContentManifest, Exam } from '$lib/types/content';
import { error } from '@sveltejs/kit';
import { base } from '$app/paths';

// Exam pages are dynamic ([exam]/[lang]/[...slug]) and rendered client-side via
// the SPA fallback (404.html). The static landing page (/) is still prerendered.
export const prerender = false;
export const ssr = false;

export const load: LayoutLoad = async ({ params, fetch }) => {
	const exam = params.exam as Exam;
	if (exam !== 'ap1' && exam !== 'ap2') {
		throw error(404, 'Exam not found');
	}
	try {
		const response = await fetch(`${base}/${exam}-manifest.json`);
		if (!response.ok) throw new Error('manifest fetch failed');
		const manifest: ContentManifest = await response.json();
		return { exam, manifest };
	} catch (e) {
		console.error('Failed to load manifest:', e);
		throw error(500, 'Failed to load exam content');
	}
};
