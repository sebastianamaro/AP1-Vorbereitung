import type { PageLoad } from './$types';
import type { TestsManifest, TestSummary } from '$lib/types/test';
import type { Exam } from '$lib/types/content';
import { base } from '$app/paths';

export const load: PageLoad = async ({ params, fetch }) => {
	const exam = params.exam as Exam;
	let tests: TestSummary[] = [];
	try {
		const res = await fetch(`${base}/tests-manifest.json`);
		if (res.ok) {
			const manifest: TestsManifest = await res.json();
			tests = manifest.tests.filter((t) => t.exam === exam);
		}
	} catch (e) {
		console.error('Failed to load tests manifest:', e);
	}
	return { exam, tests };
};
