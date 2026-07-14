import { marked } from 'marked';
import type { Language, Exam } from '$lib/types/content';

/**
 * Transform relative markdown links (.md) into in-app routes:
 *   /<base>/<exam>/<lang>/<chapter>/<...>/<topic-slug>
 */
export function transformLinks(
	markdown: string,
	currentPath: string,
	exam: Exam,
	lang: Language,
	basePath: string = ''
): string {
	const linkRegex = /\[([^\]]+)\]\(([^)]+\.md)\)/g;
	return markdown.replace(linkRegex, (match, text, relativePath) => {
		try {
			const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
			const absolutePath = resolvePath(currentDir, relativePath);
			const route = contentPathToRoute(absolutePath, exam, lang, basePath);
			return '[' + text + '](' + route + ')';
		} catch {
			return match;
		}
	});
}

/**
 * Transform relative image sources (png/jpg/svg/…) into absolute static URLs:
 *   /<base>/content/<exam>/<lang>/<resolved-relative-path>
 * (shared diagrams resolve to /content/<exam>/assets/… via the ../ climbs.)
 */
export function transformImages(
	markdown: string,
	currentPath: string,
	exam: Exam,
	lang: Language,
	basePath: string = ''
): string {
	const imgRegex = /!\[([^\]]*)\]\(([^)]+\.(?:png|jpe?g|svg|gif|webp))\)/gi;
	return markdown.replace(imgRegex, (match, alt, src) => {
		if (/^(https?:)?\/\//.test(src) || src.startsWith('/') || src.startsWith('data:')) {
			return match; // leave absolute/external images alone
		}
		try {
			const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
			const resolved = resolvePath(`${exam}/${lang}/${currentDir}`, src);
			return `![${alt}](${basePath}/content/${resolved})`;
		} catch {
			return match;
		}
	});
}

function resolvePath(basePath: string, relativePath: string): string {
	const baseParts = basePath.split('/').filter(Boolean);
	const relParts = relativePath.split('/');
	for (const part of relParts) {
		if (part === '..') baseParts.pop();
		else if (part !== '.' && part !== '') baseParts.push(part);
	}
	return baseParts.join('/');
}

function contentPathToRoute(contentPath: string, exam: Exam, lang: Language, basePath: string): string {
	const path = contentPath.replace(/\.md$/, '');
	const parts = path.split('/');
	const fileName = parts[parts.length - 1];
	const slugMatch = fileName.match(/^\d+-\d+(?:-\d+)?-(.+)$/);
	if (slugMatch) parts[parts.length - 1] = slugMatch[1];
	return basePath + '/' + exam + '/' + lang + '/' + parts.join('/');
}

export function renderMarkdown(content: string): string {
	marked.setOptions({ gfm: true, breaks: false });
	return marked(content) as string;
}

export function extractTitle(markdown: string): string {
	const match = markdown.match(/^#\s+(.+)$/m);
	return match ? match[1].trim() : 'Untitled';
}

export function processMarkdown(
	markdown: string,
	currentPath: string,
	exam: Exam,
	lang: Language,
	basePath: string = ''
): string {
	let out = transformLinks(markdown, currentPath, exam, lang, basePath);
	out = transformImages(out, currentPath, exam, lang, basePath);
	return renderMarkdown(out);
}
