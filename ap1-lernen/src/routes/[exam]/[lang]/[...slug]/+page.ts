import type { PageLoad } from './$types';
import type { ContentManifest, Chapter, Subchapter, Topic, Language, Exam } from '$lib/types/content';
import { error } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load: PageLoad = async ({ params, fetch, parent }) => {
	const { exam, manifest } = (await parent()) as { exam: Exam; manifest: ContentManifest };
	const { lang, slug } = params;

	if (!['de', 'en', 'es'].includes(lang)) {
		throw error(404, 'Language not found');
	}

	const slugParts = slug ? slug.split('/') : [];
	if (slugParts.length === 0) throw error(404, 'Content not found');

	const chapterSlug = slugParts[0];
	const chapter = manifest.chapters.find((ch: Chapter) => `${ch.id}-${ch.slug}` === chapterSlug);
	if (!chapter) throw error(404, 'Chapter not found');

	let filePath: string;
	let currentTopic: Topic | null = null;
	let topicId: string | null = null;

	if (slugParts.length === 1) {
		if (chapter.overviewPath) filePath = chapter.overviewPath;
		else throw error(404, 'Chapter overview not found');
	} else if (slugParts.length === 2) {
		const topic = chapter.topics.find((t: Topic) => t.slug === slugParts[1]);
		if (topic) {
			filePath = topic.path;
			currentTopic = topic;
			topicId = topic.id;
		} else throw error(404, 'Topic not found');
	} else if (slugParts.length === 3) {
		const subchapter = chapter.subchapters.find((s: Subchapter) => `${s.id}-${s.slug}` === slugParts[1]);
		if (!subchapter) throw error(404, 'Subchapter not found');
		const topic = subchapter.topics.find((t: Topic) => t.slug === slugParts[2]);
		if (!topic) throw error(404, 'Topic not found');
		filePath = topic.path;
		currentTopic = topic;
		topicId = topic.id;
	} else {
		throw error(404, 'Invalid path');
	}

	try {
		const response = await fetch(`${base}/content/${exam}/${lang}/${filePath}`);
		if (!response.ok) throw error(404, 'Content file not found');
		const markdown = await response.text();
		const navigation = findNavigation(manifest, currentTopic, lang as Language);
		return { exam, markdown, filePath, chapter, topic: currentTopic, topicId, lang: lang as Language, navigation };
	} catch (e) {
		console.error('Error loading content:', e);
		throw error(500, 'Failed to load content');
	}
};

interface NavItem {
	slug: string;
	title: string;
}

function findNavigation(manifest: ContentManifest, currentTopic: Topic | null, lang: Language): { prev: NavItem | null; next: NavItem | null } {
	const allTopics: { chapter: Chapter; subchapter?: Subchapter; topic: Topic }[] = [];
	for (const chapter of manifest.chapters) {
		for (const subchapter of chapter.subchapters) {
			for (const topic of subchapter.topics) allTopics.push({ chapter, subchapter, topic });
		}
		for (const topic of chapter.topics) allTopics.push({ chapter, topic });
	}
	if (!currentTopic) return { prev: null, next: null };

	const currentIndex = allTopics.findIndex((t) => t.topic.id === currentTopic.id);
	let prev: NavItem | null = null;
	let next: NavItem | null = null;

	if (currentIndex > 0) {
		const p = allTopics[currentIndex - 1];
		const subPath = p.subchapter ? `/${p.subchapter.id}-${p.subchapter.slug}` : '';
		prev = { slug: `${p.chapter.id}-${p.chapter.slug}${subPath}/${p.topic.slug}`, title: p.topic.title[lang] || p.topic.slug };
	}
	if (currentIndex < allTopics.length - 1) {
		const n = allTopics[currentIndex + 1];
		const subPath = n.subchapter ? `/${n.subchapter.id}-${n.subchapter.slug}` : '';
		next = { slug: `${n.chapter.id}-${n.chapter.slug}${subPath}/${n.topic.slug}`, title: n.topic.title[lang] || n.topic.slug };
	}
	return { prev, next };
}
