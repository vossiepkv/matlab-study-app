import type { CardData, QuizData } from './week1';
import type { WeekMeta } from './weeks';
import type { TranslationData } from './translations';
import type { LabExercise } from './labs';

import { weeks as matlabModules } from './weeks';
import { week1Cards, week1Quiz } from './week1';
import { week2Cards, week2Quiz } from './week2';
import { week3Cards, week3Quiz } from './week3';
import { week4Cards, week4Quiz } from './week4';
import { week5Cards, week5Quiz } from './week5';
import { week6Cards, week6Quiz } from './week6';
import { week7Cards, week7Quiz } from './week7';
import { getWeekTranslations } from './translations';
import { getWeekLabs } from './labs';
import { mathsModules, mathsCards, mathsQuiz } from './maths';
import { engMaterialsModules, engMaterialsCards, engMaterialsQuiz } from './eng-materials';
import { engScienceModules, engScienceCards, engScienceQuiz } from './eng-science';

/**
 * A "module" is one unit of study within a subject (formerly "week").
 * The underlying metadata shape is shared with the original MATLAB course.
 */
export type ModuleMeta = WeekMeta;

export interface SubjectMeta {
	slug: string;
	title: string;
	shortTitle: string;
	description: string;
	icon: string;
	courseCode?: string;
}

export const subjects: SubjectMeta[] = [
	{
		slug: 'maths',
		title: 'Mathematics',
		shortTitle: 'Maths',
		icon: '\u{1F4D0}',
		description: 'Core mathematics for engineering — algebra, functions, calculus, and problem solving.'
	},
	{
		slug: 'matlab',
		title: 'Digital Fundamentals',
		shortTitle: 'MATLAB',
		courseCode: 'OENG1298',
		icon: '\u{1F4BB}',
		description: 'Introduction to Digital Fundamentals — programming and problem solving with MATLAB.'
	},
	{
		slug: 'eng-science',
		title: 'Engineering Sciences',
		shortTitle: 'Eng Science',
		courseCode: 'MANU 2112',
		icon: '⚙️',
		description: 'Physical principles behind engineering — mechanics, energy, and systems.'
	},
	{
		slug: 'eng-materials',
		title: 'Engineering Materials',
		shortTitle: 'Materials',
		courseCode: 'PROC2097',
		icon: '\u{1F9F1}',
		description: 'Properties, structure, processing, and selection of engineering materials.'
	}
];

export function getSubject(slug: string): SubjectMeta | undefined {
	return subjects.find((s) => s.slug === slug);
}

interface SubjectContent {
	modules: ModuleMeta[];
	cards: Record<number, CardData[]>;
	quiz: Record<number, QuizData[]>;
}

const matlabContent: SubjectContent = {
	modules: matlabModules,
	cards: {
		1: week1Cards,
		2: week2Cards,
		3: week3Cards,
		4: week4Cards,
		5: week5Cards,
		6: week6Cards,
		7: week7Cards
	},
	quiz: {
		1: week1Quiz,
		2: week2Quiz,
		3: week3Quiz,
		4: week4Quiz,
		5: week5Quiz,
		6: week6Quiz,
		7: week7Quiz
	}
};

const emptyContent = (): SubjectContent => ({ modules: [], cards: {}, quiz: {} });

const mathsContent: SubjectContent = {
	modules: mathsModules,
	cards: mathsCards,
	quiz: mathsQuiz
};

const engMaterialsContent: SubjectContent = {
	modules: engMaterialsModules,
	cards: engMaterialsCards,
	quiz: engMaterialsQuiz
};

const engScienceContent: SubjectContent = {
	modules: engScienceModules,
	cards: engScienceCards,
	quiz: engScienceQuiz
};

const content: Record<string, SubjectContent> = {
	maths: mathsContent,
	matlab: matlabContent,
	'eng-science': engScienceContent,
	'eng-materials': engMaterialsContent
};

export function getModules(subject: string): ModuleMeta[] {
	return content[subject]?.modules ?? [];
}

export function getModule(subject: string, num: number): ModuleMeta | undefined {
	return getModules(subject).find((m) => m.num === num);
}

export function getModuleCards(subject: string, num: number): CardData[] {
	return content[subject]?.cards[num] ?? [];
}

export function getModuleQuiz(subject: string, num: number): QuizData[] {
	return content[subject]?.quiz[num] ?? [];
}

export function getModuleTranslations(subject: string, num: number): TranslationData[] {
	// Translation drills are MATLAB-specific (math → code).
	return subject === 'matlab' ? getWeekTranslations(num) : [];
}

export function getModuleLabs(subject: string, num: number): LabExercise[] {
	// Simulation-lab walkthroughs are MATLAB-specific.
	return subject === 'matlab' ? getWeekLabs(num) : [];
}

/** A flashcard tagged with its owning subject + module so decks can record progress. */
export interface DeckCard extends CardData {
	subjectSlug: string;
	moduleNum: number;
}

export function toDeckCards(subject: string, moduleNum: number, cards: CardData[]): DeckCard[] {
	return cards.map((c) => ({ ...c, subjectSlug: subject, moduleNum }));
}

/** Namespaced progress key for a card, e.g. "matlab:w1-c01". */
export function cardKey(subjectSlug: string, cardId: string): string {
	return `${subjectSlug}:${cardId}`;
}

/** All flashcards across every subject, tagged with subject + module (for global review). */
export function getAllDeckCards(): DeckCard[] {
	const out: DeckCard[] = [];
	for (const s of subjects) {
		const c = content[s.slug];
		if (!c) continue;
		for (const [num, arr] of Object.entries(c.cards)) {
			for (const card of arr) {
				out.push({ ...card, subjectSlug: s.slug, moduleNum: Number(num) });
			}
		}
	}
	return out;
}
