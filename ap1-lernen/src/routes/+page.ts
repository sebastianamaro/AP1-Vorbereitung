import type { PageLoad } from './$types';
import type { ExamInfo } from '$lib/types/content';
import { base } from '$app/paths';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const res = await fetch(`${base}/exams.json`);
		const data = await res.json();
		return { exams: data.exams as ExamInfo[] };
	} catch {
		return {
			exams: [
				{ id: 'ap1', title: { de: 'AP1', en: 'AP1', es: 'AP1' }, subtitle: { de: 'Teil 1', en: 'Part 1', es: 'Parte 1' } },
				{ id: 'ap2', title: { de: 'AP2', en: 'AP2', es: 'AP2' }, subtitle: { de: 'Teil 2', en: 'Part 2', es: 'Parte 2' } }
			] as ExamInfo[]
		};
	}
};
