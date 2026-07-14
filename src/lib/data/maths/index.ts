import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

import { m0Meta, m0Cards, m0Quiz } from './module0';
import { m1Meta, m1Cards, m1Quiz } from './module1';
import { m2Meta, m2Cards, m2Quiz } from './module2';
import { m3Meta, m3Cards, m3Quiz } from './module3';
import { m4Meta, m4Cards, m4Quiz } from './module4';
import { m5Meta, m5Cards, m5Quiz } from './module5';
import { m6Meta, m6Cards, m6Quiz } from './module6';
import { m7Meta, m7Cards, m7Quiz } from './module7';
import { m8Meta, m8Cards, m8Quiz } from './module8';
import { m9Meta, m9Cards, m9Quiz } from './module9';
import { m10Meta, m10Cards, m10Quiz } from './module10';
import { m11Meta, m11Cards, m11Quiz } from './module11';
import { m12Meta, m12Cards, m12Quiz } from './module12';
import { m13Meta, m13Cards, m13Quiz } from './module13';
import { m14Meta, m14Cards, m14Quiz } from './module14';
import { m15Meta, m15Cards, m15Quiz } from './module15';

/** Module metadata for the Mathematics subject (weeks 1–15). */
export const mathsModules: ModuleMeta[] = [
	m0Meta,
	m1Meta,
	m2Meta,
	m3Meta,
	m4Meta,
	m5Meta,
	m6Meta,
	m7Meta,
	m8Meta,
	m9Meta,
	m10Meta,
	m11Meta,
	m12Meta,
	m13Meta,
	m14Meta,
	m15Meta
];

/** Flashcards keyed by module number. */
export const mathsCards: Record<number, CardData[]> = {
	0: m0Cards,
	1: m1Cards,
	2: m2Cards,
	3: m3Cards,
	4: m4Cards,
	5: m5Cards,
	6: m6Cards,
	7: m7Cards,
	8: m8Cards,
	9: m9Cards,
	10: m10Cards,
	11: m11Cards,
	12: m12Cards,
	13: m13Cards,
	14: m14Cards,
	15: m15Cards
};

/** Quiz questions keyed by module number. */
export const mathsQuiz: Record<number, QuizData[]> = {
	0: m0Quiz,
	1: m1Quiz,
	2: m2Quiz,
	3: m3Quiz,
	4: m4Quiz,
	5: m5Quiz,
	6: m6Quiz,
	7: m7Quiz,
	8: m8Quiz,
	9: m9Quiz,
	10: m10Quiz,
	11: m11Quiz,
	12: m12Quiz,
	13: m13Quiz,
	14: m14Quiz,
	15: m15Quiz
};
