import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';
import type {
	Question,
	TestPart,
	UserAnswer,
	SelfGrade,
	QuestionResult,
	Attempt
} from '$lib/types/test';

// ---------------------------------------------------------------------------
// Grading
// ---------------------------------------------------------------------------

/** Parse a German-formatted number: strip unit/spaces, comma → decimal point. */
export function parseGermanNumber(raw: string): number | null {
	if (!raw) return null;
	const cleaned = raw
		.replace(/[^\d,.\-]/g, '') // drop unit letters, %, spaces
		.replace(/\.(?=\d{3}\b)/g, '') // remove thousands separators like 4.200
		.replace(',', '.');
	if (cleaned === '' || cleaned === '-' || cleaned === '.') return null;
	const n = Number(cleaned);
	return Number.isFinite(n) ? n : null;
}

function sameSet(a: string[], b: string[]): boolean {
	if (a.length !== b.length) return false;
	const sb = new Set(b);
	return a.every((x) => sb.has(x));
}

/**
 * Grade a single closed question; open questions return correct=null (self-assessed).
 *
 * Scoring mirrors the IHK's Teil-/Globalbewertung as closely as we can without the
 * official Punkteschlüssel (which marks each question Global vs. Teil):
 *  - single-choice & numeric → Globalbewertung (all-or-nothing)
 *  - multiple-choice, matching, ordering → Teilbewertung (fraction of correct entries)
 * The multi-select UI is capped at the required number of picks, mirroring the fixed
 * number of answer boxes on the real Lösungsbogen, so "select everything" can't game it.
 */
export function gradeQuestion(
	q: Question,
	answer: UserAnswer | undefined,
	selfGrade?: SelfGrade
): QuestionResult {
	const possible = q.points ?? 1;
	const base = { questionId: q.id, possible };

	if (q.type === 'open') {
		const earned = selfGrade === 'correct' ? possible : selfGrade === 'partial' ? possible / 2 : 0;
		return { ...base, autoGraded: false, correct: null, selfGrade, earned };
	}

	// Returns a graded result from a 0..1 fraction, deriving correct/partial flags.
	const fromFraction = (fraction: number): QuestionResult => {
		const f = Math.max(0, Math.min(1, fraction));
		const correct = f >= 1 - 1e-9;
		const partial = f > 1e-9 && !correct;
		return { ...base, autoGraded: true, correct, partial, earned: possible * f };
	};

	if (q.type === 'single-choice') {
		const selected = answer?.kind === 'choice' ? answer.selected : [];
		return fromFraction(sameSet(selected, q.correct ?? []) ? 1 : 0);
	}

	if (q.type === 'multiple-choice') {
		const selected = answer?.kind === 'choice' ? answer.selected : [];
		const correctSet = new Set(q.correct ?? []);
		const required = q.correct?.length ?? 0;
		if (required === 0) return fromFraction(0);
		const correctPicked = selected.filter((s) => correctSet.has(s)).length;
		// Teilbewertung: share of the required correct answers found.
		return fromFraction(correctPicked / required);
	}

	if (q.type === 'matching' || q.type === 'ordering') {
		const pairs = answer?.kind === 'pairs' ? answer.pairs : {};
		const want = q.correctPairs ?? {};
		const keys = Object.keys(want);
		if (keys.length === 0) return fromFraction(0);
		const rightCount = keys.filter((k) => pairs[k] === want[k]).length;
		return fromFraction(rightCount / keys.length);
	}

	if (q.type === 'numeric') {
		const raw = answer?.kind === 'numeric' ? answer.raw : '';
		const acc = q.answer;
		let correct = false;
		if (acc) {
			const normRaw = raw.trim().replace(/\s+/g, ' ');
			const inAccepted = (acc.accepted ?? []).some(
				(a) => a.trim().toLowerCase() === normRaw.toLowerCase()
			);
			const num = parseGermanNumber(raw);
			const tol = acc.tolerance ?? 0;
			const inTol = num !== null && Math.abs(num - acc.value) <= tol + 1e-9;
			correct = inAccepted || inTol;
		}
		return fromFraction(correct ? 1 : 0);
	}

	return fromFraction(0);
}

/** IHK 100-point grade scale (Notenschlüssel). */
export function ihkGrade(percent: number): number {
	if (percent >= 92) return 1;
	if (percent >= 81) return 2;
	if (percent >= 67) return 3;
	if (percent >= 50) return 4;
	if (percent >= 30) return 5;
	return 6;
}

export function gradePart(
	part: TestPart,
	answers: Record<string, UserAnswer>,
	selfGrades: Record<string, SelfGrade>
) {
	const results = part.questions.map((q) => gradeQuestion(q, answers[q.id], selfGrades[q.id]));
	const earned = results.reduce((s, r) => s + r.earned, 0);
	const possible = results.reduce((s, r) => s + r.possible, 0);
	const percent = possible > 0 ? (earned / possible) * 100 : 0;
	return { results, earned, possible, percent, grade: ihkGrade(percent) };
}

// ---------------------------------------------------------------------------
// Attempt persistence (localStorage)
// ---------------------------------------------------------------------------

type AllAttempts = Record<string, Record<string, Attempt>>; // testId -> partId -> Attempt

const STORAGE_KEY = 'ap-test-attempts';

function getStored(): AllAttempts {
	if (!browser) return {};
	try {
		return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
	} catch {
		return {};
	}
}

function save(state: AllAttempts) {
	if (browser) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function emptyAttempt(testId: string, partId: string): Attempt {
	return { testId, partId, answers: {}, selfGrades: {}, submitted: false };
}

function createAttemptStore() {
	const { subscribe, update } = writable<AllAttempts>(getStored());

	const write = (testId: string, partId: string, mut: (a: Attempt) => Attempt) => {
		update((state) => {
			const forTest = { ...(state[testId] || {}) };
			const current = forTest[partId] || emptyAttempt(testId, partId);
			forTest[partId] = mut({ ...current });
			const next = { ...state, [testId]: forTest };
			save(next);
			return next;
		});
	};

	return {
		subscribe,
		get: (testId: string, partId: string): Attempt =>
			get({ subscribe })[testId]?.[partId] || emptyAttempt(testId, partId),

		setAnswer: (testId: string, partId: string, qId: string, answer: UserAnswer) =>
			write(testId, partId, (a) => ({ ...a, answers: { ...a.answers, [qId]: answer } })),

		setSelfGrade: (testId: string, partId: string, qId: string, g: SelfGrade) =>
			write(testId, partId, (a) => ({ ...a, selfGrades: { ...a.selfGrades, [qId]: g } })),

		submit: (
			testId: string,
			partId: string,
			score: Attempt['score'],
			durationUsedSec?: number
		) =>
			write(testId, partId, (a) => ({
				...a,
				submitted: true,
				submittedAt: new Date().toISOString(),
				durationUsedSec,
				score
			})),

		reset: (testId: string, partId: string) =>
			write(testId, partId, () => emptyAttempt(testId, partId))
	};
}

export const attempts = createAttemptStore();
