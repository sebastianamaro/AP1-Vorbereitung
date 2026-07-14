import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';
import type { ProgressState, ContentManifest, Chapter, Exam } from '$lib/types/content';

// Progress is namespaced per exam because topic IDs collide between AP1 and AP2
// (e.g. both have "01-01-01"). Shape: { ap1: {...}, ap2: {...} }.
type AllProgress = Record<Exam, ProgressState>;

const STORAGE_KEY = 'ap-progress';
const LEGACY_AP1_KEY = 'ap1-progress';

function emptyAll(): AllProgress {
	return { ap1: {}, ap2: {} };
}

function getStored(): AllProgress {
	if (!browser) return emptyAll();
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			return { ...emptyAll(), ...JSON.parse(stored) };
		}
		// One-time migration from the old single-exam key.
		const legacy = localStorage.getItem(LEGACY_AP1_KEY);
		if (legacy) {
			const migrated: AllProgress = { ap1: JSON.parse(legacy), ap2: {} };
			localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
			return migrated;
		}
		return emptyAll();
	} catch {
		return emptyAll();
	}
}

function save(state: AllProgress): void {
	if (browser) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createProgressStore() {
	const { subscribe, set, update } = writable<AllProgress>(getStored());

	const setStatus = (exam: Exam, topicId: string, status: 'read' | 'review' | 'unread') => {
		update((state) => {
			const examState = { ...(state[exam] || {}) };
			if (status === 'unread') {
				delete examState[topicId];
			} else {
				examState[topicId] = {
					status,
					lastRead: examState[topicId]?.lastRead || new Date().toISOString()
				};
				if (status === 'read') examState[topicId].lastRead = new Date().toISOString();
			}
			const newState = { ...state, [exam]: examState };
			save(newState);
			return newState;
		});
	};

	return {
		subscribe,
		markRead: (exam: Exam, topicId: string) => setStatus(exam, topicId, 'read'),
		markReview: (exam: Exam, topicId: string) => setStatus(exam, topicId, 'review'),
		markUnread: (exam: Exam, topicId: string) => setStatus(exam, topicId, 'unread'),

		toggleStatus: (exam: Exam, topicId: string) => {
			const current = get({ subscribe })[exam]?.[topicId]?.status;
			const next = !current ? 'read' : current === 'read' ? 'review' : 'unread';
			setStatus(exam, topicId, next);
		},

		getStatus: (exam: Exam, topicId: string) => {
			return get({ subscribe })[exam]?.[topicId]?.status || 'unread';
		},

		reset: (exam: Exam) => {
			update((state) => {
				const newState = { ...state, [exam]: {} };
				save(newState);
				return newState;
			});
		}
	};
}

export const progress = createProgressStore();

export function getChapterProgress(manifest: ContentManifest | null, progressState: ProgressState) {
	if (!manifest) return { total: 0, read: 0, review: 0 };
	let total = 0, read = 0, review = 0;

	function countTopics(topics: { id: string }[]) {
		for (const topic of topics) {
			total++;
			const status = progressState[topic.id]?.status;
			if (status === 'read') read++;
			else if (status === 'review') review++;
		}
	}

	for (const chapter of manifest.chapters) {
		countTopics(chapter.topics);
		for (const sub of chapter.subchapters) countTopics(sub.topics);
	}
	return { total, read, review };
}

export function getReviewTopics(manifest: ContentManifest | null, progressState: ProgressState) {
	if (!manifest) return [];
	const reviewTopics: {
		id: string;
		title: Record<string, string>;
		path: string;
		chapterTitle: Record<string, string>;
	}[] = [];

	function find(topics: { id: string; title: Record<string, string>; path: string }[], chapterTitle: Record<string, string>) {
		for (const topic of topics) {
			if (progressState[topic.id]?.status === 'review') reviewTopics.push({ ...topic, chapterTitle });
		}
	}

	for (const chapter of manifest.chapters) {
		find(chapter.topics, chapter.title);
		for (const sub of chapter.subchapters) find(sub.topics, chapter.title);
	}
	return reviewTopics;
}
