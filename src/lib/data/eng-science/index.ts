import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

import { m1Meta, m1Cards, m1Quiz } from './module1';
import { m2Meta, m2Cards, m2Quiz } from './module2';

/** Module metadata for the Engineering Sciences subject (MANU 2112). */
export const engScienceModules: ModuleMeta[] = [m1Meta, m2Meta];

/** Flashcards keyed by module number. */
export const engScienceCards: Record<number, CardData[]> = {
	1: m1Cards,
	2: m2Cards
};

/** Quiz questions keyed by module number. */
export const engScienceQuiz: Record<number, QuizData[]> = {
	1: m1Quiz,
	2: m2Quiz
};
