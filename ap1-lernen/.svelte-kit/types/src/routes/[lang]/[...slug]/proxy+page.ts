// @ts-nocheck
import type { PageLoad } from './$types';
import type { ContentManifest, Chapter, Subchapter, Topic, Language } from '$lib/types/content';
import { error } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async ({ params, fetch, parent }: Parameters<PageLoad>[0]) => {
	const { manifest } = await parent();
	const { lang, slug } = params;

	// Validate language
	if (!['de', 'en', 'es'].includes(lang)) {
		throw error(404, 'Language not found');
	}

	// Parse the slug to find the content
	const slugParts = slug ? slug.split('/') : [];
	
	if (slugParts.length === 0) {
		throw error(404, 'Content not found');
	}

	// Find the chapter
	const chapterSlug = slugParts[0];
	const chapter = manifest.chapters.find(
		(ch: Chapter) => `${ch.id}-${ch.slug}` === chapterSlug
	);

	if (!chapter) {
		throw error(404, 'Chapter not found');
	}

	let filePath: string;
	let currentTopic: Topic | null = null;
	let topicId: string | null = null;

	if (slugParts.length === 1) {
		// Chapter overview
		if (chapter.overviewPath) {
			filePath = chapter.overviewPath;
		} else {
			throw error(404, 'Chapter overview not found');
		}
	} else if (slugParts.length === 2) {
		// Direct topic under chapter
		const topicSlug = slugParts[1];
		const topic = chapter.topics.find((t: Topic) => t.slug === topicSlug);
		
		if (topic) {
			filePath = topic.path;
			currentTopic = topic;
			topicId = topic.id;
		} else {
			throw error(404, 'Topic not found');
		}
	} else if (slugParts.length === 3) {
		// Topic in subchapter
		const subchapterSlug = slugParts[1];
		const topicSlug = slugParts[2];
		
		const subchapter = chapter.subchapters.find(
			(s: Subchapter) => `${s.id}-${s.slug}` === subchapterSlug
		);
		
		if (!subchapter) {
			throw error(404, 'Subchapter not found');
		}

		const topic = subchapter.topics.find((t: Topic) => t.slug === topicSlug);
		
		if (!topic) {
			throw error(404, 'Topic not found');
		}

		filePath = topic.path;
		currentTopic = topic;
		topicId = topic.id;
	} else {
		throw error(404, 'Invalid path');
	}

	// Fetch the markdown content
	try {
		const response = await fetch(`${base}/content/${lang}/${filePath}`);
		if (!response.ok) {
			throw error(404, 'Content file not found');
		}
		const markdown = await response.text();

		// Find prev/next topics for navigation
		const navigation = findNavigation(manifest, chapter, currentTopic, lang as Language);

		return {
			markdown,
			filePath,
			chapter,
			topic: currentTopic,
			topicId,
			lang: lang as Language,
			navigation
		};
	} catch (e) {
		console.error('Error loading content:', e);
		throw error(500, 'Failed to load content');
	}
};

interface NavItem {
	slug: string;
	title: string;
}

function findNavigation(
	manifest: ContentManifest, 
	currentChapter: Chapter, 
	currentTopic: Topic | null,
	lang: Language
): { prev: NavItem | null; next: NavItem | null } {
	// Build a flat list of all topics
	const allTopics: { chapter: Chapter; subchapter?: Subchapter; topic: Topic }[] = [];

	for (const chapter of manifest.chapters) {
		for (const subchapter of chapter.subchapters) {
			for (const topic of subchapter.topics) {
				allTopics.push({ chapter, subchapter, topic });
			}
		}
		for (const topic of chapter.topics) {
			allTopics.push({ chapter, topic });
		}
	}

	if (!currentTopic) {
		return { prev: null, next: null };
	}

	const currentIndex = allTopics.findIndex(t => t.topic.id === currentTopic.id);
	
	let prev: NavItem | null = null;
	let next: NavItem | null = null;

	if (currentIndex > 0) {
		const p = allTopics[currentIndex - 1];
		const basePath = `${p.chapter.id}-${p.chapter.slug}`;
		const subPath = p.subchapter ? `/${p.subchapter.id}-${p.subchapter.slug}` : '';
		prev = {
			slug: `${basePath}${subPath}/${p.topic.slug}`,
			title: p.topic.title[lang] || p.topic.slug
		};
	}

	if (currentIndex < allTopics.length - 1) {
		const n = allTopics[currentIndex + 1];
		const basePath = `${n.chapter.id}-${n.chapter.slug}`;
		const subPath = n.subchapter ? `/${n.subchapter.id}-${n.subchapter.slug}` : '';
		next = {
			slug: `${basePath}${subPath}/${n.topic.slug}`,
			title: n.topic.title[lang] || n.topic.slug
		};
	}

	return { prev, next };
}
