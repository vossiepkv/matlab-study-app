<script lang="ts">
	import { settingsStore, type FontOption, type ThemeOption } from '$lib/stores/settings.svelte';

	interface Props {
		open: boolean;
		onclose: () => void;
	}

	let { open, onclose }: Props = $props();

	function setFont(font: FontOption) {
		settingsStore.update({ font });
	}

	function setTheme(theme: ThemeOption) {
		settingsStore.update({ theme });
	}
</script>

{#if open}
	<div class="panel-backdrop" onclick={onclose} role="presentation"></div>
	<aside class="settings-panel" role="dialog" aria-label="Accessibility Settings">
		<div class="panel-header">
			<h2>Settings</h2>
			<button class="close-btn" onclick={onclose} aria-label="Close settings">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
				</svg>
			</button>
		</div>

		<div class="panel-body">
			<!-- Font & Reading -->
			<section class="setting-group">
				<h3>Font &amp; Reading</h3>

				<label class="setting-label">Font Family</label>
				<div class="btn-group">
					<button class:active={settingsStore.current.font === 'system'} onclick={() => setFont('system')}>System</button>
					<button class:active={settingsStore.current.font === 'opendyslexic'} onclick={() => setFont('opendyslexic')}>OpenDyslexic</button>
					<button class:active={settingsStore.current.font === 'atkinson'} onclick={() => setFont('atkinson')}>Atkinson</button>
				</div>

				<label class="setting-label" for="fontSize">
					Font Size: {settingsStore.current.fontSize}px
				</label>
				<input
					id="fontSize"
					type="range"
					min="14"
					max="28"
					step="1"
					value={settingsStore.current.fontSize}
					oninput={(e) => settingsStore.update({ fontSize: Number(e.currentTarget.value) })}
				/>

				<label class="setting-label" for="lineSpacing">
					Line Spacing: {settingsStore.current.lineSpacing.toFixed(1)}
				</label>
				<input
					id="lineSpacing"
					type="range"
					min="1.4"
					max="2.5"
					step="0.1"
					value={settingsStore.current.lineSpacing}
					oninput={(e) => settingsStore.update({ lineSpacing: Number(e.currentTarget.value) })}
				/>

				<label class="setting-label" for="letterSpacing">
					Letter Spacing: {settingsStore.current.letterSpacing.toFixed(2)}em
				</label>
				<input
					id="letterSpacing"
					type="range"
					min="0"
					max="0.15"
					step="0.01"
					value={settingsStore.current.letterSpacing}
					oninput={(e) => settingsStore.update({ letterSpacing: Number(e.currentTarget.value) })}
				/>
			</section>

			<!-- Theme -->
			<section class="setting-group">
				<h3>Colours &amp; Contrast</h3>
				<div class="btn-group">
					<button class:active={settingsStore.current.theme === 'light'} onclick={() => setTheme('light')}>Light</button>
					<button class:active={settingsStore.current.theme === 'dark'} onclick={() => setTheme('dark')}>Dark</button>
					<button class:active={settingsStore.current.theme === 'high-contrast'} onclick={() => setTheme('high-contrast')}>High Contrast</button>
				</div>
			</section>

			<!-- Motion -->
			<section class="setting-group">
				<h3>Motion</h3>
				<label class="toggle-label">
					<input
						type="checkbox"
						checked={settingsStore.current.reducedMotion}
						onchange={(e) => settingsStore.update({ reducedMotion: e.currentTarget.checked })}
					/>
					Reduce animations
				</label>
			</section>

			<!-- Speech -->
			<section class="setting-group">
				<h3>Text-to-Speech</h3>
				<label class="toggle-label">
					<input
						type="checkbox"
						checked={settingsStore.current.ttsEnabled}
						onchange={(e) => settingsStore.update({ ttsEnabled: e.currentTarget.checked })}
					/>
					Enable read-aloud buttons
				</label>

				{#if settingsStore.current.ttsEnabled}
					<label class="setting-label" for="ttsRate">
						Speed: {settingsStore.current.ttsRate.toFixed(1)}x
					</label>
					<input
						id="ttsRate"
						type="range"
						min="0.5"
						max="1.5"
						step="0.1"
						value={settingsStore.current.ttsRate}
						oninput={(e) => settingsStore.update({ ttsRate: Number(e.currentTarget.value) })}
					/>
				{/if}
			</section>

			<button class="reset-btn" onclick={() => settingsStore.reset()}>
				Reset to Defaults
			</button>
		</div>
	</aside>
{/if}

<style>
	.panel-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 90;
	}

	.settings-panel {
		position: fixed;
		right: 0;
		top: 0;
		bottom: 0;
		width: min(380px, 90vw);
		background: var(--color-surface);
		border-left: 1px solid var(--color-border);
		z-index: 100;
		overflow-y: auto;
		box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
	}

	.panel-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-lg);
		border-bottom: 1px solid var(--color-border-light);
		position: sticky;
		top: 0;
		background: var(--color-surface);
	}

	.panel-header h2 {
		font-size: var(--font-size-lg);
	}

	.close-btn {
		background: none;
		color: var(--color-text-secondary);
		padding: var(--space-xs);
		min-height: var(--min-tap-target);
		min-width: var(--min-tap-target);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.close-btn:hover {
		color: var(--color-text);
	}

	.panel-body {
		padding: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.setting-group h3 {
		font-size: 1rem;
		color: var(--color-text);
		margin-bottom: var(--space-sm);
	}

	.setting-label {
		display: block;
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		margin-top: var(--space-sm);
		margin-bottom: var(--space-xs);
	}

	.btn-group {
		display: flex;
		gap: var(--space-xs);
		flex-wrap: wrap;
	}

	.btn-group button {
		padding: var(--space-sm) var(--space-md);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		color: var(--color-text);
		font-size: var(--font-size-sm);
		border-radius: 6px;
		min-height: var(--min-tap-target);
	}

	.btn-group button:hover {
		background: var(--color-surface-hover);
	}

	.btn-group button.active {
		background: var(--color-primary);
		color: white;
		border-color: var(--color-primary);
	}

	input[type='range'] {
		width: 100%;
		accent-color: var(--color-primary);
		height: 24px;
	}

	.toggle-label {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--font-size-sm);
		cursor: pointer;
		min-height: var(--min-tap-target);
	}

	.toggle-label input[type='checkbox'] {
		width: 20px;
		height: 20px;
		accent-color: var(--color-primary);
	}

	.reset-btn {
		background: var(--color-error-light);
		color: var(--color-error);
		border: 1px solid var(--color-error);
		font-size: var(--font-size-sm);
		padding: var(--space-sm) var(--space-md);
		margin-top: var(--space-md);
	}

	.reset-btn:hover {
		background: var(--color-error);
		color: white;
	}
</style>
