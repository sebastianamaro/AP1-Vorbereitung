import type { PageLoad } from './$types';
import type { Test, TestsManifest } from '$lib/types/test';
import type { Exam } from '$lib/types/content';
import { base } from '$app/paths';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const exam = params.exam as Exam;
	const { testId } = params;

	// Find the test's path from the registry, then load its full definition.
	const manRes = await fetch(`${base}/tests-manifest.json`);
	if (!manRes.ok) throw error(500, 'Tests manifest not available');
	const manifest: TestsManifest = await manRes.json();
	const summary = manifest.tests.find((t) => t.id === testId && t.exam === exam);
	if (!summary) throw error(404, 'Test not found');

	const res = await fetch(`${base}/tests/${summary.path}`);
	if (!res.ok) throw error(404, 'Test content not found');
	const test: Test = await res.json();

	return { exam, test, assetBase: `${base}/tests/${summary.path.replace(/\/test\.json$/, '')}` };
};
