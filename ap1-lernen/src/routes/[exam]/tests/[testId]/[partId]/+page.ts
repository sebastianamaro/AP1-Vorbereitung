import type { PageLoad } from './$types';
import type { Test, TestsManifest, TestPart } from '$lib/types/test';
import type { Exam } from '$lib/types/content';
import { base } from '$app/paths';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const exam = params.exam as Exam;
	const { testId, partId } = params;

	const manRes = await fetch(`${base}/tests-manifest.json`);
	if (!manRes.ok) throw error(500, 'Tests manifest not available');
	const manifest: TestsManifest = await manRes.json();
	const summary = manifest.tests.find((t) => t.id === testId && t.exam === exam);
	if (!summary) throw error(404, 'Test not found');

	const res = await fetch(`${base}/tests/${summary.path}`);
	if (!res.ok) throw error(404, 'Test content not found');
	const test: Test = await res.json();

	const part: TestPart | undefined = test.parts.find((p) => p.id === partId);
	if (!part) throw error(404, 'Part not found');

	return {
		exam,
		test,
		part,
		assetBase: `${base}/tests/${summary.path.replace(/\/test\.json$/, '')}`
	};
};
