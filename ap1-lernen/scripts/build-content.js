import { glob } from 'glob';
import { readFile, writeFile, cp, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname, basename, relative } from 'path';
import { fileURLToPath } from 'url';
import MiniSearch from 'minisearch';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const CONTENT_SOURCE = join(PROJECT_ROOT, '..', 'learning-material');
const STATIC_DIR = join(PROJECT_ROOT, 'static');
const CONTENT_DEST = join(STATIC_DIR, 'content');

const LANGUAGES = ['de', 'en', 'es'];

/**
 * Extract title from markdown content (first H1 heading)
 */
function extractTitle(content) {
	const match = content.match(/^#\s+(.+)$/m);
	return match ? match[1].trim() : 'Untitled';
}

/**
 * Extract sections (H2 headings) from markdown
 */
function extractSections(content) {
	const matches = content.matchAll(/^##\s+(.+)$/gm);
	return Array.from(matches, m => m[1].trim());
}

/**
 * Parse file path to extract chapter/subchapter/topic IDs
 * Example: "01-project-management/01-01-fundamentals/01-01-01-project-definition.md"
 */
function parseFilePath(relativePath) {
	const parts = relativePath.split('/');
	const fileName = parts[parts.length - 1];
	const fileNameWithoutExt = fileName.replace('.md', '');
	
	// Extract ID from filename (e.g., "01-01-01" from "01-01-01-project-definition")
	const idMatch = fileNameWithoutExt.match(/^(\d+-\d+(?:-\d+)?)/);
	const id = idMatch ? idMatch[1] : fileNameWithoutExt;
	
	// Extract slug (everything after the ID)
	const slugMatch = fileNameWithoutExt.match(/^\d+-\d+(?:-\d+)?-(.+)$/);
	const slug = slugMatch ? slugMatch[1] : fileNameWithoutExt;
	
	return { id, slug, fileName };
}

/**
 * Build the content manifest by scanning all languages
 */
async function buildManifest() {
	console.log('Building content manifest...');
	
	// Use the first language (de) to determine structure
	const baseLang = 'de';
	const basePath = join(CONTENT_SOURCE, baseLang);
	
	// Find all markdown files
	const files = await glob('**/*.md', { cwd: basePath });
	files.sort();
	
	// Group files by chapter
	const chapterMap = new Map();
	
	for (const file of files) {
		const parts = file.split('/');
		const chapterDir = parts[0];
		
		// Extract chapter ID and slug
		const chapterMatch = chapterDir.match(/^(\d+)-(.+)$/);
		if (!chapterMatch) continue;
		
		const chapterId = chapterMatch[1];
		const chapterSlug = chapterMatch[2];
		
		if (!chapterMap.has(chapterId)) {
			chapterMap.set(chapterId, {
				id: chapterId,
				slug: chapterSlug,
				title: {},
				overviewPath: null,
				subchapters: new Map(),
				topics: []
			});
		}
		
		const chapter = chapterMap.get(chapterId);
		const { id, slug, fileName } = parseFilePath(file);
		
		// Check if this is an overview file
		if (fileName.match(/^\d+-00-/)) {
			chapter.overviewPath = file;
			continue;
		}
		
		// Check if file is in a subchapter
		if (parts.length === 3) {
			const subchapterDir = parts[1];
			const subMatch = subchapterDir.match(/^(\d+-\d+)-(.+)$/);
			
			if (subMatch) {
				const subId = subMatch[1];
				const subSlug = subMatch[2];
				
				if (!chapter.subchapters.has(subId)) {
					chapter.subchapters.set(subId, {
						id: subId,
						slug: subSlug,
						title: {},
						topics: []
					});
				}
				
				chapter.subchapters.get(subId).topics.push({
					id,
					slug,
					fileName,
					title: {},
					path: file
				});
			}
		} else if (parts.length === 2) {
			// Direct topic under chapter
			chapter.topics.push({
				id,
				slug,
				fileName,
				title: {},
				path: file
			});
		}
	}
	
	// Extract titles from each language
	for (const lang of LANGUAGES) {
		const langPath = join(CONTENT_SOURCE, lang);
		if (!existsSync(langPath)) {
			console.warn(`Warning: Language folder not found: ${lang}`);
			continue;
		}
		
		for (const [_, chapter] of chapterMap) {
			// Get chapter title from overview or first topic
			if (chapter.overviewPath) {
				try {
					const content = await readFile(join(langPath, chapter.overviewPath), 'utf-8');
					chapter.title[lang] = extractTitle(content);
				} catch (e) {
					chapter.title[lang] = chapter.slug;
				}
			} else {
				chapter.title[lang] = chapter.slug;
			}
			
			// Get subchapter titles
			for (const [_, sub] of chapter.subchapters) {
				// Try to get title from first topic
				if (sub.topics.length > 0) {
					// Use the subchapter slug as title for now
					sub.title[lang] = sub.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
				}
				
				// Get topic titles
				for (const topic of sub.topics) {
					try {
						const content = await readFile(join(langPath, topic.path), 'utf-8');
						topic.title[lang] = extractTitle(content);
					} catch (e) {
						topic.title[lang] = topic.slug;
					}
				}
			}
			
			// Get direct topic titles
			for (const topic of chapter.topics) {
				try {
					const content = await readFile(join(langPath, topic.path), 'utf-8');
					topic.title[lang] = extractTitle(content);
				} catch (e) {
					topic.title[lang] = topic.slug;
				}
			}
		}
	}
	
	// Convert maps to arrays and sort
	const chapters = Array.from(chapterMap.values())
		.map(ch => ({
			...ch,
			subchapters: Array.from(ch.subchapters.values())
				.sort((a, b) => a.id.localeCompare(b.id))
		}))
		.sort((a, b) => a.id.localeCompare(b.id));
	
	return {
		version: '1.0.0',
		buildDate: new Date().toISOString(),
		languages: LANGUAGES,
		chapters
	};
}

/**
 * Build search index for a specific language
 */
async function buildSearchIndex(manifest, lang) {
	console.log(`Building search index for ${lang}...`);
	
	const miniSearch = new MiniSearch({
		fields: ['title', 'content', 'sections'],
		storeFields: ['title', 'path', 'chapterTitle', 'snippet'],
		searchOptions: {
			boost: { title: 3, sections: 2 },
			fuzzy: 0.2,
			prefix: true
		}
	});
	
	const documents = [];
	let docId = 0;
	
	const langPath = join(CONTENT_SOURCE, lang);
	
	for (const chapter of manifest.chapters) {
		const chapterTitle = chapter.title[lang] || chapter.slug;
		
		// Index chapter overview
		if (chapter.overviewPath) {
			try {
				const rawContent = await readFile(join(langPath, chapter.overviewPath), 'utf-8');
				const content = rawContent.replace(/[#*`_\[\]]/g, ' ');
				documents.push({
					id: docId++,
					title: chapterTitle,
					content: content,
					snippet: content.slice(0, 500),
					sections: extractSections(rawContent).join(' '),
					path: `${chapter.id}-${chapter.slug}`,
					chapterTitle
				});
			} catch (e) {}
		}
		
		// Index subchapter topics
		for (const sub of chapter.subchapters) {
			for (const topic of sub.topics) {
				try {
					const rawContent = await readFile(join(langPath, topic.path), 'utf-8');
					const content = rawContent.replace(/[#*`_\[\]]/g, ' ');
					const title = topic.title[lang] || topic.slug;
					documents.push({
						id: docId++,
						title,
						content: content,
						snippet: content.slice(0, 500),
						sections: extractSections(rawContent).join(' '),
						path: `${chapter.id}-${chapter.slug}/${sub.id}-${sub.slug}/${topic.slug}`,
						chapterTitle
					});
				} catch (e) {}
			}
		}
		
		// Index direct topics
		for (const topic of chapter.topics) {
			try {
				const rawContent = await readFile(join(langPath, topic.path), 'utf-8');
				const content = rawContent.replace(/[#*`_\[\]]/g, ' ');
				const title = topic.title[lang] || topic.slug;
				documents.push({
					id: docId++,
					title,
					content: content,
					snippet: content.slice(0, 500),
					sections: extractSections(rawContent).join(' '),
					path: `${chapter.id}-${chapter.slug}/${topic.slug}`,
					chapterTitle
				});
			} catch (e) {}
		}
	}
	
	miniSearch.addAll(documents);
	return JSON.stringify(miniSearch.toJSON());
}

/**
 * Copy content files to static folder
 */
async function copyContent() {
	console.log('Copying content files...');
	
	for (const lang of LANGUAGES) {
		const src = join(CONTENT_SOURCE, lang);
		const dest = join(CONTENT_DEST, lang);
		
		if (!existsSync(src)) {
			console.warn(`Warning: Source not found: ${src}`);
			continue;
		}
		
		await mkdir(dest, { recursive: true });
		await cp(src, dest, { recursive: true });
		console.log(`  Copied ${lang}/`);
	}
}

/**
 * Main build function
 */
async function main() {
	console.log('='.repeat(50));
	console.log('AP1 Learning App - Content Build');
	console.log('='.repeat(50));
	
	// Ensure static directory exists
	await mkdir(STATIC_DIR, { recursive: true });
	
	// Build manifest
	const manifest = await buildManifest();
	await writeFile(
		join(STATIC_DIR, 'manifest.json'),
		JSON.stringify(manifest, null, 2)
	);
	console.log(`Manifest written with ${manifest.chapters.length} chapters`);
	
	// Build search indices
	for (const lang of LANGUAGES) {
		const langPath = join(CONTENT_SOURCE, lang);
		if (!existsSync(langPath)) continue;
		
		const index = await buildSearchIndex(manifest, lang);
		await writeFile(join(STATIC_DIR, `search-index-${lang}.json`), index);
		console.log(`Search index written for ${lang}`);
	}
	
	// Copy content files
	await copyContent();
	
	console.log('='.repeat(50));
	console.log('Build complete!');
	console.log('='.repeat(50));
}

main().catch(console.error);
