export interface ContentManifest {
	version: string;
	buildDate: string;
	languages: string[];
	chapters: Chapter[];
}

export interface Chapter {
	id: string;
	slug: string;
	title: Record<string, string>;
	overviewPath: string | null;
	subchapters: Subchapter[];
	topics: Topic[];
}

export interface Subchapter {
	id: string;
	slug: string;
	title: Record<string, string>;
	topics: Topic[];
}

export interface Topic {
	id: string;
	slug: string;
	fileName: string;
	title: Record<string, string>;
	path: string;
}

export interface ProgressState {
	[topicId: string]: {
		status: 'read' | 'review';
		lastRead?: string;
	};
}

export interface SearchResult {
	id: string;
	title: string;
	path: string;
	chapterTitle: string;
	score: number;
}

export type Language = 'de' | 'en' | 'es';

export interface NavigationItem {
	prev: { slug: string; title: string } | null;
	next: { slug: string; title: string } | null;
}
