export interface CardProgress {
	ease: number;
	interval: number;
	repetitions: number;
	nextReview: string; // ISO date string
	lastResult: 'again' | 'hard' | 'good' | 'easy';
}

export function createDefaultProgress(): CardProgress {
	return {
		ease: 2.5,
		interval: 0,
		repetitions: 0,
		nextReview: new Date().toISOString().split('T')[0],
		lastResult: 'again'
	};
}

export function reviewCard(
	progress: CardProgress,
	quality: 'again' | 'hard' | 'good' | 'easy'
): CardProgress {
	const qualityMap = { again: 0, hard: 1, good: 2, easy: 3 };
	const q = qualityMap[quality];

	let { ease, interval, repetitions } = progress;

	if (q < 1) {
		// Failed - reset
		repetitions = 0;
		interval = 0;
	} else {
		if (repetitions === 0) {
			interval = 1;
		} else if (repetitions === 1) {
			interval = 3;
		} else {
			interval = Math.round(interval * ease);
		}
		repetitions++;
	}

	// Update ease factor
	ease = ease + (0.1 - (3 - q) * (0.08 + (3 - q) * 0.02));
	if (ease < 1.3) ease = 1.3;

	const nextDate = new Date();
	nextDate.setDate(nextDate.getDate() + interval);

	return {
		ease,
		interval,
		repetitions,
		nextReview: nextDate.toISOString().split('T')[0],
		lastResult: quality
	};
}

export function isDueForReview(progress: CardProgress): boolean {
	const today = new Date().toISOString().split('T')[0];
	return progress.nextReview <= today;
}
