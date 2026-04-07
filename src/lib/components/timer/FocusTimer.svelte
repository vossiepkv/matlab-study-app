<script lang="ts">
	import { timerStore } from '$lib/stores/timer.svelte';

	let expanded = $state(false);
</script>

<div class="timer-wrapper" class:expanded>
	{#if !expanded}
		<button class="timer-toggle" onclick={() => { expanded = true; }} aria-label="Open focus timer">
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
				<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
			</svg>
			{#if timerStore.state !== 'idle'}
				<span class="timer-mini">{timerStore.display}</span>
			{/if}
		</button>
	{:else}
		<div class="timer-panel card">
			<div class="timer-header">
				<h3>{timerStore.state === 'break' ? 'Break Time' : timerStore.state === 'studying' ? 'Study Time' : 'Focus Timer'}</h3>
				<button class="close-btn" onclick={() => { expanded = false; }} aria-label="Minimize timer">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
					</svg>
				</button>
			</div>

			<div class="timer-display" role="timer" aria-live="polite">
				<svg class="timer-ring" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-border-light)" stroke-width="6"/>
					<circle
						cx="50" cy="50" r="45"
						fill="none"
						stroke={timerStore.state === 'break' ? 'var(--color-success)' : 'var(--color-primary)'}
						stroke-width="6"
						stroke-dasharray={2 * Math.PI * 45}
						stroke-dashoffset={2 * Math.PI * 45 * (1 - timerStore.progress)}
						stroke-linecap="round"
						transform="rotate(-90 50 50)"
					/>
				</svg>
				<span class="timer-time">{timerStore.display}</span>
			</div>

			<div class="timer-controls">
				{#if timerStore.state === 'idle'}
					<button class="btn-primary" onclick={() => timerStore.start()}>Start Studying</button>
				{:else if timerStore.isRunning}
					<button class="btn-secondary" onclick={() => timerStore.pause()}>Pause</button>
				{:else}
					<button class="btn-primary" onclick={() => timerStore.resume()}>Resume</button>
				{/if}
				{#if timerStore.state !== 'idle'}
					<button class="btn-secondary" onclick={() => timerStore.reset()}>Reset</button>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.timer-wrapper {
		position: fixed;
		bottom: var(--space-lg);
		right: var(--space-lg);
		z-index: 50;
	}

	.timer-toggle {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 24px;
		padding: var(--space-sm) var(--space-md);
		box-shadow: var(--card-shadow);
		color: var(--color-text);
		min-height: var(--min-tap-target);
	}

	.timer-toggle:hover {
		background: var(--color-surface-hover);
	}

	.timer-mini {
		font-weight: 600;
		font-size: var(--font-size-sm);
		font-family: var(--font-family-mono);
	}

	.timer-panel {
		width: 220px;
		text-align: center;
	}

	.timer-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-md);
	}

	.timer-header h3 {
		font-size: var(--font-size-sm);
		font-weight: 600;
	}

	.close-btn {
		background: none;
		color: var(--color-text-secondary);
		padding: 4px;
		min-height: 32px;
		min-width: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.timer-display {
		position: relative;
		width: 140px;
		height: 140px;
		margin: 0 auto var(--space-md);
	}

	.timer-ring {
		width: 100%;
		height: 100%;
	}

	.timer-time {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: var(--font-size-xl);
		font-weight: 700;
		font-family: var(--font-family-mono);
	}

	.timer-controls {
		display: flex;
		gap: var(--space-sm);
		justify-content: center;
	}

	.timer-controls button {
		font-size: var(--font-size-sm);
		padding: var(--space-xs) var(--space-md);
	}
</style>
