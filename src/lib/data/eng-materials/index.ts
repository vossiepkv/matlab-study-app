import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

import { m0Meta, m0Cards, m0Quiz } from './module0';
import { m1Meta, m1Cards, m1Quiz } from './module1';
import { m2Meta, m2Cards, m2Quiz } from './module2';

export { engMaterialsLabs } from './labs';

/**
 * Module metadata for the Engineering Materials subject (PROC2097).
 * Module 0 is the Lab 1 practical guide and deliberately sits above the lecture modules.
 */
export const engMaterialsModules: ModuleMeta[] = [m0Meta, m1Meta, m2Meta];

/** Flashcards keyed by module number. */
export const engMaterialsCards: Record<number, CardData[]> = {
	0: m0Cards,
	1: m1Cards,
	2: m2Cards
};

/** Quiz questions keyed by module number. */
export const engMaterialsQuiz: Record<number, QuizData[]> = {
	0: m0Quiz,
	1: m1Quiz,
	2: m2Quiz
};
