import { loadFromStorage, saveToStorage } from '$lib/utils/localStorage';

export type FontOption = 'system' | 'opendyslexic' | 'atkinson';
export type ThemeOption = 'light' | 'dark' | 'high-contrast';

export interface Settings {
	font: FontOption;
	fontSize: number;
	lineSpacing: number;
	letterSpacing: number;
	theme: ThemeOption;
	ttsEnabled: boolean;
	ttsRate: number;
	reducedMotion: boolean;
}

const STORAGE_KEY = 'matlab-study-settings';

const defaults: Settings = {
	font: 'system',
	fontSize: 18,
	lineSpacing: 1.8,
	letterSpacing: 0.02,
	theme: 'light',
	ttsEnabled: false,
	ttsRate: 0.9,
	reducedMotion: true
};

function createSettingsStore() {
	let settings = $state<Settings>({ ...defaults });
	let initialized = false;

	function init() {
		if (initialized) return;
		initialized = true;
		const saved = loadFromStorage<Partial<Settings>>(STORAGE_KEY, {});
		settings = { ...defaults, ...saved };

		// Respect OS preference for reduced motion
		if (!saved.reducedMotion && typeof window !== 'undefined') {
			settings.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		}

		applyToDOM();
	}

	function applyToDOM() {
		if (typeof document === 'undefined') return;
		const html = document.documentElement;
		html.setAttribute('data-theme', settings.theme);
		html.setAttribute('data-font', settings.font);
		html.style.setProperty('--font-size-base', `${settings.fontSize}px`);
		html.style.setProperty('--line-height', `${settings.lineSpacing}`);
		html.style.setProperty('--letter-spacing', `${settings.letterSpacing}em`);
	}

	function update(partial: Partial<Settings>) {
		settings = { ...settings, ...partial };
		saveToStorage(STORAGE_KEY, settings);
		applyToDOM();
	}

	function reset() {
		settings = { ...defaults };
		saveToStorage(STORAGE_KEY, settings);
		applyToDOM();
	}

	return {
		get current() { return settings; },
		init,
		update,
		reset
	};
}

export const settingsStore = createSettingsStore();
