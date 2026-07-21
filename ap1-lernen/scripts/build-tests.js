import { glob } from 'glob';
import { readFile, writeFile, cp, mkdir, rm } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const REPO_ROOT = join(PROJECT_ROOT, '..');
const TESTS_SRC = join(REPO_ROOT, 'tests');
const STATIC_DIR = join(PROJECT_ROOT, 'static');
const TESTS_DEST = join(STATIC_DIR, 'tests');

const CLOSED_TYPES = ['single-choice', 'multiple-choice', 'matching', 'ordering', 'numeric', 'open'];

/** Lightweight per-question validation so authoring mistakes fail the build loudly. */
function validateQuestion(q, where) {
	const errs = [];
	if (!q.id) errs.push(`${where}: missing id`);
	if (!CLOSED_TYPES.includes(q.type)) errs.push(`${where} (${q.id}): unknown type "${q.type}"`);
	if (!q.prompt) errs.push(`${where} (${q.id}): missing prompt`);
	switch (q.type) {
		case 'single-choice':
			if (!Array.isArray(q.options) || q.options.length < 2) errs.push(`${q.id}: needs options`);
			if (!Array.isArray(q.correct) || q.correct.length !== 1) errs.push(`${q.id}: single-choice needs exactly 1 correct`);
			break;
		case 'multiple-choice':
			if (!Array.isArray(q.options) || q.options.length < 2) errs.push(`${q.id}: needs options`);
			if (!Array.isArray(q.correct) || q.correct.length < 2) errs.push(`${q.id}: multiple-choice needs >=2 correct`);
			break;
		case 'matching':
		case 'ordering':
			if (!Array.isArray(q.left) || !Array.isArray(q.right)) errs.push(`${q.id}: needs left[] and right[]`);
			if (!q.correctPairs || typeof q.correctPairs !== 'object') errs.push(`${q.id}: needs correctPairs`);
			break;
		case 'numeric':
			if (!q.answer || typeof q.answer.value !== 'number') errs.push(`${q.id}: numeric needs answer.value`);
			break;
		case 'open':
			if (!q.solution) errs.push(`${q.id}: open question needs a solution`);
			break;
	}
	return errs;
}

function validateTest(test, file) {
	const errs = [];
	if (!test.id) errs.push(`${file}: missing test id`);
	if (!test.exam) errs.push(`${file}: missing exam`);
	if (!Array.isArray(test.parts) || test.parts.length === 0) errs.push(`${file}: no parts`);
	for (const part of test.parts || []) {
		if (!part.id) errs.push(`${file}: part missing id`);
		if (!Array.isArray(part.questions) || part.questions.length === 0)
			errs.push(`${file}: part ${part.id} has no questions`);
		for (const q of part.questions || []) errs.push(...validateQuestion(q, `${test.id}/${part.id}`));
	}
	return errs;
}

export async function buildTests() {
	console.log('\n' + '='.repeat(50));
	console.log('Building test simulator content');
	console.log('='.repeat(50));

	await rm(TESTS_DEST, { recursive: true, force: true });

	if (!existsSync(TESTS_SRC)) {
		console.warn(`  No tests/ directory at ${TESTS_SRC} — skipping.`);
		await writeFile(join(STATIC_DIR, 'tests-manifest.json'), JSON.stringify({ tests: [] }, null, 2));
		return;
	}

	const files = (await glob('**/test.json', { cwd: TESTS_SRC }))
		.map((f) => f.replace(/\\/g, '/'))
		.sort();

	const registry = [];
	let totalErrs = 0;

	for (const rel of files) {
		const abs = join(TESTS_SRC, rel);
		const dir = dirname(rel); // e.g. "ap2/ap2-sommer-2026"
		const test = JSON.parse(await readFile(abs, 'utf-8'));

		const errs = validateTest(test, rel);
		if (errs.length) {
			totalErrs += errs.length;
			errs.forEach((e) => console.error('  ✗ ' + e));
			continue;
		}

		// Copy the whole test folder (test.json + assets) to static/tests/<dir>
		const destDir = join(TESTS_DEST, dir);
		await mkdir(destDir, { recursive: true });
		await cp(join(TESTS_SRC, dir), destDir, { recursive: true });

		registry.push({
			id: test.id,
			exam: test.exam,
			title: test.title,
			source: test.source || null,
			disclaimer: test.disclaimer || null,
			path: `${dir}/test.json`,
			parts: test.parts.map((p) => ({
				id: p.id,
				title: p.title,
				fullTitle: p.fullTitle || p.title,
				durationMin: p.durationMin || null,
				questionCount: p.questions.length
			}))
		});
		console.log(`  ✓ ${test.id} (${test.parts.length} part(s), ${test.parts.reduce((n, p) => n + p.questions.length, 0)} questions)`);
	}

	if (totalErrs > 0) throw new Error(`Test validation failed with ${totalErrs} error(s).`);

	await writeFile(join(STATIC_DIR, 'tests-manifest.json'), JSON.stringify({ tests: registry }, null, 2));
	console.log(`  Registry: ${registry.length} test(s) -> tests-manifest.json`);
}

// Allow running standalone: `node scripts/build-tests.js`
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	buildTests().catch((e) => {
		console.error(e);
		process.exit(1);
	});
}
