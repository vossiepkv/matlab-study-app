<script lang="ts">
	import { settingsStore } from '$lib/stores/settings.svelte';
	import { speak, stopSpeaking, isSpeechSupported } from '$lib/utils/speech';

	interface Props {
		text: string;
	}

	let { text }: Props = $props();
	let speaking = $state(false);

	function toggle() {
		if (speaking) {
			stopSpeaking();
			speaking = false;
		} else {
			speak(text, settingsStore.current.ttsRate);
			speaking = true;
			// Reset speaking state when done (approximate)
			const words = text.split(/\s+/).length;
			const duration = (words / 2.5) * (1 / settingsStore.current.ttsRate) * 1000;
			setTimeout(() => { speaking = false; }, duration);
		}
	}
</script>

{#if settingsStore.current.ttsEnabled && isSpeechSupported()}
	<button
		class="tts-btn"
		onclick={toggle}
		aria-label={speaking ? 'Stop reading aloud' : 'Read aloud'}
		title={speaking ? 'Stop' : 'Read aloud'}
	>
		{#if speaking}
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<rect x="6" y="4" width="4" height="16" rx="1"/>
				<rect x="14" y="4" width="4" height="16" rx="1"/>
			</svg>
		{:else}
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round"/>
			</svg>
		{/if}
	</button>
{/if}

<style>
	.tts-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--color-surface-hover);
		color: var(--color-text-secondary);
		border: 1px solid var(--color-border-light);
		border-radius: 50%;
		width: 36px;
		height: 36px;
		min-height: 36px;
		min-width: 36px;
		padding: 0;
		cursor: pointer;
		transition: background-color var(--transition-fast);
	}

	.tts-btn:hover {
		background: var(--color-primary-light);
		color: var(--color-primary);
	}
</style>
