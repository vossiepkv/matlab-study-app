import { loadFromStorage, saveToStorage } from '$lib/utils/localStorage';
import { type CardProgress, createDefaultProgress, reviewCard, isDueForReview } from '$lib/utils/spacedRepetition';

export interface ModuleStats {
	flashcardsViewed: number;
	flashcardsTotal: number;
	quizBestScore: number | null;
}

export interface ProgressData {
	/** Keyed by namespaced card key: "{subject}:{cardId}" e.g. "matlab:w1-c01". */
	cards: Record<string, CardProgress>;
	/** Keyed by module key: "{subject}:{moduleNum}" e.g. "matlab:1". */
	modules: Record<string, ModuleStats>;
	streak: number;
	lastStudyDate: string;
}

// v2: keys are namespaced by subject (multi-subject restructure). Old data is intentionally reset.
const STORAGE_KEY = 'matlab-study-progress-v2';

const defaults: ProgressData = {
	cards: {},
	modules: {},
	streak: 0,
	lastStudyDate: ''
};

const moduleKey = (subject: string, moduleNum: number) => `${subject}:${moduleNum}`;

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

	/** key must be a namespaced card key from cardKey(subject, cardId). */
	function recordCardReview(key: string, quality: 'again' | 'hard' | 'good' | 'easy') {
		const existing = data.cards[key] || createDefaultProgress();
		data.cards[key] = reviewCard(existing, quality);
		markStudyToday();
		save();
	}

	/** key must be a namespaced card key; subject + moduleNum identify the module bucket. */
	function markCardViewed(key: string, subject: string, moduleNum: number) {
		if (!data.cards[key]) {
			data.cards[key] = createDefaultProgress();
		}

		const mk = moduleKey(subject, moduleNum);
		if (!data.modules[mk]) {
			data.modules[mk] = { flashcardsViewed: 0, flashcardsTotal: 0, quizBestScore: null };
		}

		// Count unique cards viewed for this subject + module.
		const prefix = `${subject}:w${moduleNum}-c`;
		const viewed = Object.keys(data.cards).filter((id) => id.startsWith(prefix));
		data.modules[mk].flashcardsViewed = viewed.length;

		markStudyToday();
		save();
	}

	function setModuleTotal(subject: string, moduleNum: number, total: number) {
		const mk = moduleKey(subject, moduleNum);
		if (!data.modules[mk]) {
			data.modules[mk] = { flashcardsViewed: 0, flashcardsTotal: total, quizBestScore: null };
		} else {
			data.modules[mk].flashcardsTotal = total;
		}
		save();
	}

	function recordQuizScore(subject: string, moduleNum: number, score: number) {
		const mk = moduleKey(subject, moduleNum);
		if (!data.modules[mk]) {
			data.modules[mk] = { flashcardsViewed: 0, flashcardsTotal: 0, quizBestScore: score };
		} else {
			const current = data.modules[mk].quizBestScore;
			if (current === null || score > current) {
				data.modules[mk].quizBestScore = score;
			}
		}
		markStudyToday();
		save();
	}

	/** Returns namespaced card keys that are due for review (across all subjects). */
	function getDueCards(): string[] {
		return Object.entries(data.cards)
			.filter(([, progress]) => isDueForReview(progress))
			.map(([id]) => id);
	}

	function getModuleStats(subject: string, moduleNum: number): ModuleStats {
		return (
			data.modules[moduleKey(subject, moduleNum)] || {
				flashcardsViewed: 0,
				flashcardsTotal: 0,
				quizBestScore: null
			}
		);
	}

	return {
		get data() {
			return data;
		},
		init,
		recordCardReview,
		markCardViewed,
		setModuleTotal,
		recordQuizScore,
		getDueCards,
		getModuleStats
	};
}

export const progressStore = createProgressStore();
