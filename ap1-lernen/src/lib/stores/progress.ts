import { writable, derived, get } from 'svelte/store';
import { browser } from '$app/environment';
import type { ProgressState, ContentManifest, Chapter, Subchapter } from '$lib/types/content';

const STORAGE_KEY = 'ap1-progress';

function getStoredProgress(): ProgressState {
	if (!browser) return {};
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		return stored ? JSON.parse(stored) : {};
	} catch {
		return {};
	}
}

function saveProgress(state: ProgressState): void {
	if (browser) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	}
}

function createProgressStore() {
	const { subscribe, set, update } = writable<ProgressState>(getStoredProgress());

	return {
		subscribe,

		markRead: (topicId: string) => {
			update((state) => {
				const newState = {
					...state,
					[topicId]: {
						status: 'read' as const,
						lastRead: new Date().toISOString()
					}
				};
				saveProgress(newState);
				return newState;
			});
		},

		markReview: (topicId: string) => {
			update((state) => {
				const newState = {
					...state,
					[topicId]: {
						status: 'review' as const,
						lastRead: state[topicId]?.lastRead || new Date().toISOString()
					}
				};
				saveProgress(newState);
				return newState;
			});
		},

		markUnread: (topicId: string) => {
			update((state) => {
				const { [topicId]: _, ...rest } = state;
				saveProgress(rest);
				return rest;
			});
		},

		toggleStatus: (topicId: string) => {
			update((state) => {
				const current = state[topicId]?.status || 'unread';
				let newStatus: 'unread' | 'read' | 'review';

				if (current === 'unread') newStatus = 'read';
				else if (current === 'read') newStatus = 'review';
				else newStatus = 'unread';

				let newState: ProgressState;
				if (newStatus === 'unread') {
					const { [topicId]: _, ...rest } = state;
					newState = rest;
				} else {
					newState = {
						...state,
						[topicId]: {
							status: newStatus,
							lastRead: new Date().toISOString()
						}
					};
				}
				saveProgress(newState);
				return newState;
			});
		},

		getStatus: (topicId: string) => {
			const state = get({ subscribe });
			return state[topicId]?.status || 'unread';
		},

		reset: () => {
			const newState = {};
			saveProgress(newState);
			set(newState);
		}
	};
}

export const progress = createProgressStore();

// Derived store for counting progress
export function getChapterProgress(manifest: ContentManifest | null, progressState: ProgressState) {
	if (!manifest) return { total: 0, read: 0, review: 0 };

	let total = 0;
	let read = 0;
	let review = 0;

	function countTopics(topics: { id: string }[]) {
		for (const topic of topics) {
			total++;
			const status = progressState[topic.id]?.status;
			if (status === 'read') read++;
			else if (status === 'review') review++;
		}
	}

	function processChapter(chapter: Chapter) {
		countTopics(chapter.topics);
		for (const sub of chapter.subchapters) {
			countTopics(sub.topics);
		}
	}

	for (const chapter of manifest.chapters) {
		processChapter(chapter);
	}

	return { total, read, review };
}

export function getReviewTopics(manifest: ContentManifest | null, progressState: ProgressState) {
	if (!manifest) return [];

	const reviewTopics: { id: string; title: Record<string, string>; path: string; chapterTitle: Record<string, string> }[] = [];

	function findReviewTopics(topics: { id: string; title: Record<string, string>; path: string }[], chapterTitle: Record<string, string>) {
		for (const topic of topics) {
			if (progressState[topic.id]?.status === 'review') {
				reviewTopics.push({ ...topic, chapterTitle });
			}
		}
	}

	for (const chapter of manifest.chapters) {
		findReviewTopics(chapter.topics, chapter.title);
		for (const sub of chapter.subchapters) {
			findReviewTopics(sub.topics, chapter.title);
		}
	}

	return reviewTopics;
}
