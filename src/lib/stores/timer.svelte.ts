const STUDY_DURATION = 25 * 60; // 25 minutes in seconds
const BREAK_DURATION = 5 * 60;  // 5 minutes in seconds

type TimerState = 'idle' | 'studying' | 'break';

function createTimerStore() {
	let state = $state<TimerState>('idle');
	let secondsLeft = $state(STUDY_DURATION);
	let intervalId: ReturnType<typeof setInterval> | null = null;

	function start() {
		if (state === 'idle') {
			state = 'studying';
			secondsLeft = STUDY_DURATION;
		}
		resume();
	}

	function resume() {
		if (intervalId) return;
		intervalId = setInterval(() => {
			secondsLeft--;
			if (secondsLeft <= 0) {
				pause();
				if (state === 'studying') {
					state = 'break';
					secondsLeft = BREAK_DURATION;
				} else {
					state = 'idle';
					secondsLeft = STUDY_DURATION;
				}
			}
		}, 1000);
	}

	function pause() {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}

	function reset() {
		pause();
		state = 'idle';
		secondsLeft = STUDY_DURATION;
	}

	function formatTime(secs: number): string {
		const m = Math.floor(secs / 60);
		const s = secs % 60;
		return `${m}:${s.toString().padStart(2, '0')}`;
	}

	return {
		get state() { return state; },
		get secondsLeft() { return secondsLeft; },
		get display() { return formatTime(secondsLeft); },
		get isRunning() { return intervalId !== null; },
		get progress() {
			const total = state === 'break' ? BREAK_DURATION : STUDY_DURATION;
			return 1 - (secondsLeft / total);
		},
		start,
		resume,
		pause,
		reset
	};
}

export const timerStore = createTimerStore();
