<script lang="ts">
	import { base } from '$app/paths';
	import { settingsStore } from '$lib/stores/settings.svelte';
	import { progressStore } from '$lib/stores/progress.svelte';

	let settings = $derived(settingsStore.current);

	function handleFontChange(e: Event) {
		const value = (e.target as HTMLSelectElement).value as 'system' | 'opendyslexic' | 'atkinson';
		settingsStore.update({ font: value });
	}

	function handleThemeChange(e: Event) {
		const value = (e.target as HTMLSelectElement).value as 'light' | 'dark' | 'high-contrast';
		settingsStore.update({ theme: value });
	}

	function handleFontSizeChange(e: Event) {
		settingsStore.update({ fontSize: Number((e.target as HTMLInputElement).value) });
	}

	function handleLineSpacingChange(e: Event) {
		settingsStore.update({ lineSpacing: Number((e.target as HTMLInputElement).value) });
	}

	function handleLetterSpacingChange(e: Event) {
		settingsStore.update({ letterSpacing: Number((e.target as HTMLInputElement).value) });
	}

	function handleTtsToggle() {
		settingsStore.update({ ttsEnabled: !settings.ttsEnabled });
	}

	function handleTtsRateChange(e: Event) {
		settingsStore.update({ ttsRate: Number((e.target as HTMLInputElement).value) });
	}

	function handleMotionToggle() {
		settingsStore.update({ reducedMotion: !settings.reducedMotion });
	}

	function resetSettings() {
		settingsStore.reset();
	}

	function resetProgress() {
		if (confirm('This will erase all your study progress, including flashcard reviews, quiz scores, and your streak. Are you sure?')) {
			localStorage.removeItem('matlab-study-progress');
			location.reload();
		}
	}
</script>

<div class="settings-page">
	<header class="page-header">
		<a href="{base}/" class="back-link">Home</a>
		<h1>Settings</h1>
		<p class="page-description">Customise the app to suit your learning preferences</p>
	</header>

	<section class="settings-section card">
		<h2>Appearance</h2>

		<div class="setting-row">
			<label for="theme-select">Theme</label>
			<select id="theme-select" value={settings.theme} onchange={handleThemeChange}>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="high-contrast">High Contrast</option>
			</select>
		</div>

		<div class="setting-row">
			<label for="font-select">Font</label>
			<select id="font-select" value={settings.font} onchange={handleFontChange}>
				<option value="system">System Default</option>
				<option value="opendyslexic">OpenDyslexic</option>
				<option value="atkinson">Atkinson Hyperlegible</option>
			</select>
		</div>

		<div class="setting-row">
			<label for="font-size">Font Size: {settings.fontSize}px</label>
			<input
				id="font-size"
				type="range"
				min="14"
				max="28"
				step="1"
				value={settings.fontSize}
				oninput={handleFontSizeChange}
			/>
		</div>

		<div class="setting-row">
			<label for="line-spacing">Line Spacing: {settings.lineSpacing}</label>
			<input
				id="line-spacing"
				type="range"
				min="1.4"
				max="2.5"
				step="0.1"
				value={settings.lineSpacing}
				oninput={handleLineSpacingChange}
			/>
		</div>

		<div class="setting-row">
			<label for="letter-spacing">Letter Spacing: {settings.letterSpacing}em</label>
			<input
				id="letter-spacing"
				type="range"
				min="0"
				max="0.15"
				step="0.01"
				value={settings.letterSpacing}
				oninput={handleLetterSpacingChange}
			/>
		</div>
	</section>

	<section class="settings-section card">
		<h2>Accessibility</h2>

		<div class="setting-row toggle-row">
			<label for="reduced-motion">Reduced Motion</label>
			<button
				id="reduced-motion"
				class="toggle-btn"
				class:active={settings.reducedMotion}
				onclick={handleMotionToggle}
				role="switch"
				aria-checked={settings.reducedMotion}
			>
				{settings.reducedMotion ? 'On' : 'Off'}
			</button>
		</div>

		<div class="setting-row toggle-row">
			<label for="tts-toggle">Text-to-Speech</label>
			<button
				id="tts-toggle"
				class="toggle-btn"
				class:active={settings.ttsEnabled}
				onclick={handleTtsToggle}
				role="switch"
				aria-checked={settings.ttsEnabled}
			>
				{settings.ttsEnabled ? 'On' : 'Off'}
			</button>
		</div>

		{#if settings.ttsEnabled}
			<div class="setting-row">
				<label for="tts-rate">Speech Rate: {settings.ttsRate}x</label>
				<input
					id="tts-rate"
					type="range"
					min="0.5"
					max="2"
					step="0.1"
					value={settings.ttsRate}
					oninput={handleTtsRateChange}
				/>
			</div>
		{/if}
	</section>

	<section class="settings-section card">
		<h2>Data</h2>

		<div class="setting-row action-row">
			<div>
				<p class="setting-label">Reset Settings</p>
				<p class="setting-hint">Restore all settings to their defaults</p>
			</div>
			<button class="btn-secondary" onclick={resetSettings}>Reset Settings</button>
		</div>

		<div class="setting-row action-row">
			<div>
				<p class="setting-label danger">Reset Progress</p>
				<p class="setting-hint">Erase all study progress, scores, and streaks</p>
			</div>
			<button class="btn-danger" onclick={resetProgress}>Reset Progress</button>
		</div>
	</section>
</div>

<style>
	.settings-page {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		max-width: 600px;
	}

	.page-header {
		padding-bottom: var(--space-md);
		border-bottom: 1px solid var(--color-border-light);
	}

	.back-link {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
		text-decoration: none;
	}

	.back-link:hover {
		color: var(--color-primary);
	}

	.page-header h1 {
		margin-top: var(--space-sm);
	}

	.page-description {
		color: var(--color-text-secondary);
		margin-top: var(--space-xs);
	}

	.settings-section {
		padding: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.settings-section h2 {
		padding-bottom: var(--space-sm);
		border-bottom: 1px solid var(--color-border-light);
	}

	.setting-row {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.setting-row label {
		font-weight: 500;
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
	}

	.setting-row select {
		padding: var(--space-sm) var(--space-md);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		background: var(--color-surface);
		color: var(--color-text);
		font-size: var(--font-size-base);
		min-height: var(--min-tap-target);
	}

	.setting-row input[type="range"] {
		width: 100%;
		min-height: var(--min-tap-target);
		accent-color: var(--color-primary);
	}

	.toggle-row {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.toggle-btn {
		padding: var(--space-xs) var(--space-lg);
		border: 2px solid var(--color-border);
		border-radius: 20px;
		background: var(--color-surface);
		color: var(--color-text-muted);
		font-weight: 600;
		min-height: var(--min-tap-target);
		min-width: 70px;
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.toggle-btn.active {
		background: var(--color-primary);
		border-color: var(--color-primary);
		color: white;
	}

	.action-row {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
	}

	.setting-label {
		font-weight: 500;
	}

	.setting-label.danger {
		color: var(--color-error);
	}

	.setting-hint {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	.btn-danger {
		padding: var(--space-xs) var(--space-lg);
		border: 2px solid var(--color-error);
		border-radius: 8px;
		background: transparent;
		color: var(--color-error);
		font-weight: 600;
		min-height: var(--min-tap-target);
		cursor: pointer;
	}

	.btn-danger:hover {
		background: var(--color-error);
		color: white;
	}

	.btn-secondary {
		padding: var(--space-xs) var(--space-lg);
		min-height: var(--min-tap-target);
	}
</style>
