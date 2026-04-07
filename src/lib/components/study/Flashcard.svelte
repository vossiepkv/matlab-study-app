<script lang="ts">
	import { settingsStore } from '$lib/stores/settings.svelte';
	import CodeBlock from './CodeBlock.svelte';
	import TextToSpeech from '../accessibility/TextToSpeech.svelte';

	interface Props {
		front: string;
		back: string | string[];
		code?: string;
		hint?: string;
		type?: 'concept' | 'code' | 'list';
		onrate?: (quality: 'again' | 'hard' | 'good' | 'easy') => void;
	}

	let { front, back, code, hint, type = 'concept', onrate }: Props = $props();
	let flipped = $state(false);
	let showHint = $state(false);
	let reduced = $derived(settingsStore.current.reducedMotion);

	function flip() {
		flipped = !flipped;
		showHint = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			flip();
		}
	}

	function rate(quality: 'again' | 'hard' | 'good' | 'easy') {
		onrate?.(quality);
	}

	let backText = $derived(Array.isArray(back) ? back.join(', ') : back);
</script>

<div class="flashcard-container">
	<div
		class="flashcard"
		class:flipped
		class:reduced
		role="button"
		tabindex="0"
		onclick={flip}
		onkeydown={handleKeydown}
		aria-label={flipped ? 'Answer side. Click to see question.' : 'Question side. Click to see answer.'}
	>
		{#if !reduced}
			<div class="card-face card-front">
				<div class="card-type-badge">{type}</div>
				<div class="card-content">
					<p class="card-text">{front}</p>
					<TextToSpeech text={front} />
				</div>
				{#if hint && !showHint}
					<button class="hint-btn" onclick={(e) => { e.stopPropagation(); showHint = true; }}>
						Show Hint
					</button>
				{/if}
				{#if hint && showHint}
					<p class="hint-text">{hint}</p>
				{/if}
			</div>

			<div class="card-face card-back">
				<div class="card-content">
					{#if Array.isArray(back)}
						<ul class="back-list">
							{#each back as item}
								<li>{item}</li>
							{/each}
						</ul>
					{:else}
						<p class="card-text">{back}</p>
					{/if}
					<TextToSpeech text={backText} />
				</div>
				{#if code}
					<CodeBlock {code} />
				{/if}
			</div>
		{:else}
			<!-- Reduced motion: no flip, just swap content -->
			{#if !flipped}
				<div class="card-face card-static">
					<div class="card-type-badge">{type}</div>
					<div class="card-content">
						<p class="card-text">{front}</p>
						<TextToSpeech text={front} />
					</div>
					{#if hint && !showHint}
						<button class="hint-btn" onclick={(e) => { e.stopPropagation(); showHint = true; }}>
							Show Hint
						</button>
					{/if}
					{#if hint && showHint}
						<p class="hint-text">{hint}</p>
					{/if}
				</div>
			{:else}
				<div class="card-face card-static">
					<div class="card-content">
						{#if Array.isArray(back)}
							<ul class="back-list">
								{#each back as item}
									<li>{item}</li>
								{/each}
							</ul>
						{:else}
							<p class="card-text">{back}</p>
						{/if}
						<TextToSpeech text={backText} />
					</div>
					{#if code}
						<CodeBlock {code} />
					{/if}
				</div>
			{/if}
		{/if}
	</div>

	<p class="flip-hint">{flipped ? 'Click to see question' : 'Click to reveal answer'}</p>

	{#if flipped && onrate}
		<div class="rating-buttons" role="group" aria-label="Rate your recall">
			<button class="rate-btn rate-again" onclick={() => rate('again')}>Again</button>
			<button class="rate-btn rate-hard" onclick={() => rate('hard')}>Hard</button>
			<button class="rate-btn rate-good" onclick={() => rate('good')}>Good</button>
			<button class="rate-btn rate-easy" onclick={() => rate('easy')}>Easy</button>
		</div>
	{/if}
</div>

<style>
	.flashcard-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
		width: 100%;
	}

	.flashcard {
		width: 100%;
		min-height: 250px;
		perspective: 1000px;
		cursor: pointer;
		position: relative;
	}

	.flashcard:not(.reduced) {
		transform-style: preserve-3d;
	}

	.card-face {
		background: var(--color-surface);
		border: 2px solid var(--color-border-light);
		border-radius: var(--card-radius);
		padding: var(--card-padding);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	/* 3D flip mode */
	.flashcard:not(.reduced) .card-face {
		position: absolute;
		inset: 0;
		backface-visibility: hidden;
		transition: transform 0.5s ease;
	}

	.flashcard:not(.reduced) .card-front {
		transform: rotateY(0deg);
	}

	.flashcard:not(.reduced) .card-back {
		transform: rotateY(180deg);
	}

	.flashcard:not(.reduced).flipped .card-front {
		transform: rotateY(-180deg);
	}

	.flashcard:not(.reduced).flipped .card-back {
		transform: rotateY(0deg);
	}

	/* Static mode (reduced motion) */
	.card-static {
		min-height: 250px;
	}

	.card-type-badge {
		display: inline-block;
		align-self: flex-start;
		padding: 2px 10px;
		border-radius: 12px;
		font-size: var(--font-size-sm);
		font-weight: 500;
		background: var(--color-primary-light);
		color: var(--color-primary);
		text-transform: capitalize;
	}

	.card-content {
		display: flex;
		align-items: flex-start;
		gap: var(--space-sm);
		flex: 1;
	}

	.card-text {
		flex: 1;
		font-size: 1.1rem;
	}

	.back-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		flex: 1;
	}

	.back-list li {
		padding-left: var(--space-md);
		position: relative;
	}

	.back-list li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--color-primary);
		font-weight: 700;
	}

	.hint-btn {
		align-self: flex-start;
		background: var(--color-warning-light);
		color: var(--color-warning);
		border: 1px solid var(--color-warning);
		font-size: var(--font-size-sm);
		padding: var(--space-xs) var(--space-md);
		min-height: 36px;
	}

	.hint-text {
		font-size: var(--font-size-sm);
		color: var(--color-warning);
		font-style: italic;
	}

	.flip-hint {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	.rating-buttons {
		display: flex;
		gap: var(--space-sm);
		flex-wrap: wrap;
		justify-content: center;
	}

	.rate-btn {
		padding: var(--space-sm) var(--space-lg);
		font-weight: 600;
		font-size: var(--font-size-sm);
		min-height: var(--min-tap-target);
		border-radius: 8px;
	}

	.rate-again {
		background: var(--color-error-light);
		color: var(--color-error);
		border: 1px solid var(--color-error);
	}

	.rate-hard {
		background: var(--color-warning-light);
		color: var(--color-warning);
		border: 1px solid var(--color-warning);
	}

	.rate-good {
		background: var(--color-success-light);
		color: var(--color-success);
		border: 1px solid var(--color-success);
	}

	.rate-easy {
		background: var(--color-primary-light);
		color: var(--color-primary);
		border: 1px solid var(--color-primary);
	}
</style>
