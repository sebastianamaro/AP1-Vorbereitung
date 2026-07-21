import type { Exam } from './content';

export type QuestionType =
	| 'single-choice'
	| 'multiple-choice'
	| 'matching'
	| 'ordering'
	| 'numeric'
	| 'open';

export interface Option {
	key: string;
	text: string;
}

export interface NumericAnswer {
	value: number;
	unit?: string;
	tolerance?: number;
	accepted?: string[];
}

export interface Question {
	id: string;
	number: number;
	type: QuestionType;
	points: number;
	context?: string;
	prompt: string;
	images?: string[];
	solution?: string;
	solutionImages?: string[];
	solutionOfficial?: boolean;
	// choice types
	options?: Option[];
	correct?: string[];
	selectCount?: number;
	// matching / ordering
	left?: Option[];
	right?: Option[];
	correctPairs?: Record<string, string>;
	// numeric
	answer?: NumericAnswer;
}

export interface TestPart {
	id: string;
	title: string;
	fullTitle?: string;
	durationMin?: number | null;
	questionCount?: number;
	pointsScheme?: string;
	intro?: string;
	questions: Question[];
}

export interface Test {
	id: string;
	exam: Exam;
	title: string;
	source?: string;
	disclaimer?: string;
	parts: TestPart[];
}

/** Registry entry (from tests-manifest.json) — no questions, just metadata. */
export interface TestSummary {
	id: string;
	exam: Exam;
	title: string;
	source?: string | null;
	disclaimer?: string | null;
	path: string;
	parts: Array<{
		id: string;
		title: string;
		fullTitle?: string;
		durationMin?: number | null;
		questionCount: number;
	}>;
}

export interface TestsManifest {
	tests: TestSummary[];
}

// ---- Attempt / grading state (persisted to localStorage) ----

export type SelfGrade = 'correct' | 'partial' | 'incorrect';

/** A user's answer for one question, shape depends on the question type. */
export type UserAnswer =
	| { kind: 'choice'; selected: string[] }
	| { kind: 'pairs'; pairs: Record<string, string> }
	| { kind: 'numeric'; raw: string }
	| { kind: 'open'; text: string };

export interface QuestionResult {
	questionId: string;
	autoGraded: boolean;
	correct: boolean | null; // true = full marks, false = zero, null = self-assessed (open)
	partial?: boolean; // 0 < earned < possible (Teilbewertung)
	selfGrade?: SelfGrade;
	earned: number;
	possible: number;
}

export interface Attempt {
	testId: string;
	partId: string;
	answers: Record<string, UserAnswer>;
	selfGrades: Record<string, SelfGrade>;
	submitted: boolean;
	submittedAt?: string;
	durationUsedSec?: number;
	score?: {
		earned: number;
		possible: number;
		percent: number;
		grade: number; // IHK 1..6
	};
}
