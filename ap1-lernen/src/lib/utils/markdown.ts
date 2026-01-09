import { marked } from 'marked';
import type { Language } from '$lib/types/content';

/**
 * Transform relative markdown links to app routes
 */
export function transformLinks(markdown: string, currentPath: string, lang: Language, basePath: string = ''): string {
	// Match markdown links: [text](path.md)
	const linkRegex = /\[([^\]]+)\]\(([^)]+\.md)\)/g;

	return markdown.replace(linkRegex, (match, text, relativePath) => {
		try {
			const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
			const absolutePath = resolvePath(currentDir, relativePath);
			const appRoute = contentPathToRoute(absolutePath, lang, basePath);
			return '[' + text + '](' + appRoute + ')';
		} catch (e) {
			return match;
		}
	});
}

function resolvePath(basePath: string, relativePath: string): string {
	const baseParts = basePath.split('/').filter(Boolean);
	const relParts = relativePath.split('/');

	for (const part of relParts) {
		if (part === '..') {
			baseParts.pop();
		} else if (part !== '.') {
			baseParts.push(part);
		}
	}

	return baseParts.join('/');
}

function contentPathToRoute(contentPath: string, lang: Language, basePath: string): string {
	let path = contentPath.replace(/\.md$/, '');
	const parts = path.split('/');
	const fileName = parts[parts.length - 1];
	// Match patterns like "01-01-01-topic-name"
	const slugMatch = fileName.match(/^\d+-\d+(?:-\d+)?-(.+)$/);
	if (slugMatch) {
		parts[parts.length - 1] = slugMatch[1];
	}
	return basePath + '/' + lang + '/' + parts.join('/');
}

export function renderMarkdown(content: string): string {
	marked.setOptions({ gfm: true, breaks: false });
	return marked(content) as string;
}

export function extractTitle(markdown: string): string {
	const match = markdown.match(/^#\s+(.+)$/m);
	return match ? match[1].trim() : 'Untitled';
}

export function processMarkdown(markdown: string, currentPath: string, lang: Language, basePath: string = ''): string {
	const transformed = transformLinks(markdown, currentPath, lang, basePath);
	return renderMarkdown(transformed);
}
