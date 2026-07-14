import { glob } from 'glob';
import { readFile, writeFile, cp, mkdir, rm } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import MiniSearch from 'minisearch';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const REPO_ROOT = join(PROJECT_ROOT, '..');
const STATIC_DIR = join(PROJECT_ROOT, 'static');
const CONTENT_DEST = join(STATIC_DIR, 'content');

const LANGUAGES = ['de', 'en', 'es'];

// Content sets = the two exams. Each is built independently into its own
// manifest / search index / content folder under static/.
const CONTENT_SETS = [
	{
		id: 'ap1',
		title: { de: 'AP1', en: 'AP1', es: 'AP1' },
		subtitle: {
			de: 'Abschlussprüfung Teil 1',
			en: 'Final Exam Part 1',
			es: 'Examen Final Parte 1'
		},
		source: join(REPO_ROOT, 'learning-material'),
		assets: null
	},
	{
		id: 'ap2',
		title: { de: 'AP2', en: 'AP2', es: 'AP2' },
		subtitle: {
			de: 'Abschlussprüfung Teil 2 – Anwendungsentwicklung',
			en: 'Final Exam Part 2 – Application Development',
			es: 'Examen Final Parte 2 – Desarrollo de Aplicaciones'
		},
		source: join(REPO_ROOT, 'learning-material-ap2'),
		// language-neutral assets (diagrams) shared across de/en/es
		assets: 'assets'
	}
];

function extractTitle(content) {
	const match = content.match(/^#\s+(.+)$/m);
	return match ? match[1].trim() : 'Untitled';
}

function extractSections(content) {
	const matches = content.matchAll(/^##\s+(.+)$/gm);
	return Array.from(matches, (m) => m[1].trim());
}

function parseFilePath(relativePath) {
	const parts = relativePath.split('/');
	const fileName = parts[parts.length - 1];
	const fileNameWithoutExt = fileName.replace('.md', '');
	const idMatch = fileNameWithoutExt.match(/^(\d+-\d+(?:-\d+)?)/);
	const id = idMatch ? idMatch[1] : fileNameWithoutExt;
	const slugMatch = fileNameWithoutExt.match(/^\d+-\d+(?:-\d+)?-(.+)$/);
	const slug = slugMatch ? slugMatch[1] : fileNameWithoutExt;
	return { id, slug, fileName };
}

/** Build the content manifest for one content set (source root with de/en/es). */
async function buildManifest(contentSource) {
	const baseLang = 'de';
	const basePath = join(contentSource, baseLang);

	// Normalize to forward slashes — glob returns backslashes on Windows,
	// which would corrupt every path/slug parsed with split('/').
	const files = (await glob('**/*.md', { cwd: basePath }))
		.map((f) => f.replace(/\\/g, '/'))
		.sort();

	const chapterMap = new Map();

	for (const file of files) {
		const parts = file.split('/');
		const chapterDir = parts[0];
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

		if (fileName.match(/^\d+-00-/)) {
			chapter.overviewPath = file;
			continue;
		}

		if (parts.length === 3) {
			const subchapterDir = parts[1];
			const subMatch = subchapterDir.match(/^(\d+-\d+)-(.+)$/);
			if (subMatch) {
				const subId = subMatch[1];
				const subSlug = subMatch[2];
				if (!chapter.subchapters.has(subId)) {
					chapter.subchapters.set(subId, { id: subId, slug: subSlug, title: {}, topics: [] });
				}
				chapter.subchapters.get(subId).topics.push({ id, slug, fileName, title: {}, path: file });
			}
		} else if (parts.length === 2) {
			chapter.topics.push({ id, slug, fileName, title: {}, path: file });
		}
	}

	for (const lang of LANGUAGES) {
		const langPath = join(contentSource, lang);
		if (!existsSync(langPath)) {
			console.warn(`  Warning: Language folder not found: ${lang}`);
			continue;
		}

		for (const [, chapter] of chapterMap) {
			if (chapter.overviewPath) {
				try {
					const content = await readFile(join(langPath, chapter.overviewPath), 'utf-8');
					chapter.title[lang] = extractTitle(content);
				} catch {
					chapter.title[lang] = chapter.slug;
				}
			} else {
				chapter.title[lang] = chapter.slug;
			}

			for (const [, sub] of chapter.subchapters) {
				if (sub.topics.length > 0) {
					sub.title[lang] = sub.slug
						.split('-')
						.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
						.join(' ');
				}
				for (const topic of sub.topics) {
					try {
						const content = await readFile(join(langPath, topic.path), 'utf-8');
						topic.title[lang] = extractTitle(content);
					} catch {
						topic.title[lang] = topic.slug;
					}
				}
			}

			for (const topic of chapter.topics) {
				try {
					const content = await readFile(join(langPath, topic.path), 'utf-8');
					topic.title[lang] = extractTitle(content);
				} catch {
					topic.title[lang] = topic.slug;
				}
			}
		}
	}

	const chapters = Array.from(chapterMap.values())
		.map((ch) => ({
			...ch,
			subchapters: Array.from(ch.subchapters.values()).sort((a, b) => a.id.localeCompare(b.id))
		}))
		.sort((a, b) => a.id.localeCompare(b.id));

	return chapters;
}

async function buildSearchIndex(chapters, contentSource, lang) {
	const miniSearch = new MiniSearch({
		fields: ['title', 'content', 'sections'],
		storeFields: ['title', 'path', 'chapterTitle', 'snippet'],
		searchOptions: { boost: { title: 3, sections: 2 }, fuzzy: 0.2, prefix: true }
	});

	const documents = [];
	let docId = 0;
	const langPath = join(contentSource, lang);

	for (const chapter of chapters) {
		const chapterTitle = chapter.title[lang] || chapter.slug;

		if (chapter.overviewPath) {
			try {
				const rawContent = await readFile(join(langPath, chapter.overviewPath), 'utf-8');
				const content = rawContent.replace(/[#*`_[\]]/g, ' ');
				documents.push({
					id: docId++,
					title: chapterTitle,
					content,
					snippet: content.slice(0, 500),
					sections: extractSections(rawContent).join(' '),
					path: `${chapter.id}-${chapter.slug}`,
					chapterTitle
				});
			} catch {}
		}

		for (const sub of chapter.subchapters) {
			for (const topic of sub.topics) {
				try {
					const rawContent = await readFile(join(langPath, topic.path), 'utf-8');
					const content = rawContent.replace(/[#*`_[\]]/g, ' ');
					documents.push({
						id: docId++,
						title: topic.title[lang] || topic.slug,
						content,
						snippet: content.slice(0, 500),
						sections: extractSections(rawContent).join(' '),
						path: `${chapter.id}-${chapter.slug}/${sub.id}-${sub.slug}/${topic.slug}`,
						chapterTitle
					});
				} catch {}
			}
		}

		for (const topic of chapter.topics) {
			try {
				const rawContent = await readFile(join(langPath, topic.path), 'utf-8');
				const content = rawContent.replace(/[#*`_[\]]/g, ' ');
				documents.push({
					id: docId++,
					title: topic.title[lang] || topic.slug,
					content,
					snippet: content.slice(0, 500),
					sections: extractSections(rawContent).join(' '),
					path: `${chapter.id}-${chapter.slug}/${topic.slug}`,
					chapterTitle
				});
			} catch {}
		}
	}

	miniSearch.addAll(documents);
	return JSON.stringify(miniSearch.toJSON());
}

async function copyContent(set) {
	const destBase = join(CONTENT_DEST, set.id);
	for (const lang of LANGUAGES) {
		const src = join(set.source, lang);
		const dest = join(destBase, lang);
		if (!existsSync(src)) {
			console.warn(`  Warning: Source not found: ${src}`);
			continue;
		}
		await mkdir(dest, { recursive: true });
		await cp(src, dest, { recursive: true });
		console.log(`  Copied ${set.id}/${lang}/`);
	}
	// Copy shared (language-neutral) assets, e.g. diagrams, to content/<exam>/assets
	if (set.assets) {
		const assetsSrc = join(set.source, set.assets);
		if (existsSync(assetsSrc)) {
			const assetsDest = join(destBase, 'assets');
			await mkdir(assetsDest, { recursive: true });
			await cp(assetsSrc, assetsDest, { recursive: true });
			console.log(`  Copied ${set.id}/assets/`);
		}
	}
}

async function main() {
	console.log('='.repeat(50));
	console.log('FIAE Learning App - Content Build (AP1 + AP2)');
	console.log('='.repeat(50));

	await mkdir(STATIC_DIR, { recursive: true });
	// Clean previous per-exam content output to avoid stale files
	await rm(CONTENT_DEST, { recursive: true, force: true });

	const examsIndex = [];

	for (const set of CONTENT_SETS) {
		console.log(`\n[${set.id}] ${set.source}`);
		if (!existsSync(join(set.source, 'de'))) {
			console.warn(`  Skipping ${set.id}: no de/ folder found.`);
			continue;
		}

		const chapters = await buildManifest(set.source);
		const manifest = {
			exam: set.id,
			title: set.title,
			subtitle: set.subtitle,
			version: '1.0.0',
			buildDate: new Date().toISOString(),
			languages: LANGUAGES,
			chapters
		};
		await writeFile(join(STATIC_DIR, `${set.id}-manifest.json`), JSON.stringify(manifest, null, 2));
		console.log(`  Manifest: ${chapters.length} chapters`);

		for (const lang of LANGUAGES) {
			if (!existsSync(join(set.source, lang))) continue;
			const index = await buildSearchIndex(chapters, set.source, lang);
			await writeFile(join(STATIC_DIR, `${set.id}-search-index-${lang}.json`), index);
		}
		console.log(`  Search indexes: ${LANGUAGES.join(', ')}`);

		await copyContent(set);

		examsIndex.push({ id: set.id, title: set.title, subtitle: set.subtitle });
	}

	// Small index of available exams for the landing page / switcher
	await writeFile(join(STATIC_DIR, 'exams.json'), JSON.stringify({ exams: examsIndex }, null, 2));

	console.log('\n' + '='.repeat(50));
	console.log(`Build complete! Exams: ${examsIndex.map((e) => e.id).join(', ')}`);
	console.log('='.repeat(50));
}

main().catch(console.error);
