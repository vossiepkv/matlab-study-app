export type { CardData, QuizData } from './week1';
export { weeks, getWeek } from './weeks';
export type { WeekMeta } from './weeks';
export { getWeekTranslations, getAllTranslations } from './translations';
export type { TranslationData, BreakdownPart } from './translations';
export { getWeekLabs } from './labs';
export type { LabExercise, LabStep } from './labs';

import { week1Cards, week1Quiz } from './week1';
import { week2Cards, week2Quiz } from './week2';
import { week3Cards, week3Quiz } from './week3';
import { week4Cards, week4Quiz } from './week4';
import { week5Cards, week5Quiz } from './week5';
import { week6Cards, week6Quiz } from './week6';
import { week7Cards, week7Quiz } from './week7';

import type { CardData, QuizData } from './week1';

const allCards: Record<number, CardData[]> = {
	1: week1Cards,
	2: week2Cards,
	3: week3Cards,
	4: week4Cards,
	5: week5Cards,
	6: week6Cards,
	7: week7Cards
};

const allQuizzes: Record<number, QuizData[]> = {
	1: week1Quiz,
	2: week2Quiz,
	3: week3Quiz,
	4: week4Quiz,
	5: week5Quiz,
	6: week6Quiz,
	7: week7Quiz
};

export function getWeekCards(weekNum: number): CardData[] {
	return allCards[weekNum] ?? [];
}

export function getWeekQuiz(weekNum: number): QuizData[] {
	return allQuizzes[weekNum] ?? [];
}

export function getAllCards(): CardData[] {
	return Object.values(allCards).flat();
}
