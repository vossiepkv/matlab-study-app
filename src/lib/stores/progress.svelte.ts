import { loadFromStorage, saveToStorage } from '$lib/utils/localStorage';
import { type CardProgress, createDefaultProgress, reviewCard, isDueForReview } from '$lib/utils/spacedRepetition';

export interface WeekStats {
	flashcardsViewed: number;
	flashcardsTotal: number;
	quizBestScore: number | null;
}

export interface ProgressData {
	cards: Record<string, CardProgress>;
	weeks: Record<string, WeekStats>;
	streak: number;
	lastStudyDate: string;
}

const STORAGE_KEY = 'matlab-study-progress';

const defaults: ProgressData = {
	cards: {},
	weeks: {},
	streak: 0,
	lastStudyDate: ''
};

function createProgressStore() {
	let data = $state<ProgressData>({ ...defaults });
	let initialized = false;

	function init() {
		if (initialized) return;
		initialized = true;
		const saved = loadFromStorage<ProgressData>(STORAGE_KEY, defaults);
		data = { ...defaults, ...saved };
		updateStreak();
	}

	function save() {
		saveToStorage(STORAGE_KEY, data);
	}

	function updateStreak() {
		const today = new Date().toISOString().split('T')[0];
		const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

		if (data.lastStudyDate === today) return;
		if (data.lastStudyDate === yesterday) {
			// Continue streak
		} else if (data.lastStudyDate !== today) {
			// Reset streak unless we're about to study
			data.streak = 0;
		}
	}

	function markStudyToday() {
		const today = new Date().toISOString().split('T')[0];
		const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

		if (data.lastStudyDate !== today) {
			if (data.lastStudyDate === yesterday) {
				data.streak++;
			} else {
				data.streak = 1;
			}
			data.lastStudyDate = today;
		}
		save();
	}

	function recordCardReview(cardId: string, quality: 'again' | 'hard' | 'good' | 'easy') {
		const existing = data.cards[cardId] || createDefaultProgress();
		data.cards[cardId] = reviewCard(existing, quality);
		markStudyToday();
		save();
	}

	function markCardViewed(cardId: string, weekNum: number) {
		if (!data.cards[cardId]) {
			data.cards[cardId] = createDefaultProgress();
		}

		const weekKey = String(weekNum);
		if (!data.weeks[weekKey]) {
			data.weeks[weekKey] = { flashcardsViewed: 0, flashcardsTotal: 0, quizBestScore: null };
		}

		// Count unique cards viewed for this week
		const weekCardIds = Object.keys(data.cards).filter(id => id.startsWith(`w${weekNum}-c`));
		data.weeks[weekKey].flashcardsViewed = weekCardIds.length;

		markStudyToday();
		save();
	}

	function setWeekTotal(weekNum: number, total: number) {
		const weekKey = String(weekNum);
		if (!data.weeks[weekKey]) {
			data.weeks[weekKey] = { flashcardsViewed: 0, flashcardsTotal: total, quizBestScore: null };
		} else {
			data.weeks[weekKey].flashcardsTotal = total;
		}
		save();
	}

	function recordQuizScore(weekNum: number, score: number) {
		const weekKey = String(weekNum);
		if (!data.weeks[weekKey]) {
			data.weeks[weekKey] = { flashcardsViewed: 0, flashcardsTotal: 0, quizBestScore: score };
		} else {
			const current = data.weeks[weekKey].quizBestScore;
			if (current === null || score > current) {
				data.weeks[weekKey].quizBestScore = score;
			}
		}
		markStudyToday();
		save();
	}

	function getDueCards(): string[] {
		return Object.entries(data.cards)
			.filter(([, progress]) => isDueForReview(progress))
			.map(([id]) => id);
	}

	function getWeekStats(weekNum: number): WeekStats {
		return data.weeks[String(weekNum)] || { flashcardsViewed: 0, flashcardsTotal: 0, quizBestScore: null };
	}

	return {
		get data() { return data; },
		init,
		recordCardReview,
		markCardViewed,
		setWeekTotal,
		recordQuizScore,
		getDueCards,
		getWeekStats
	};
}

export const progressStore = createProgressStore();
