<script lang="ts">
	import Flashcard from './Flashcard.svelte';
	import ProgressBar from '../progress/ProgressBar.svelte';
	import { progressStore } from '$lib/stores/progress.svelte';

	interface CardData {
		id: string;
		type: 'concept' | 'code' | 'list';
		front: string;
		back: string | string[];
		code?: string;
		hint?: string;
	}

	interface Props {
		cards: CardData[];
		weekNum: number;
		topicName?: string;
	}

	let { cards, weekNum, topicName }: Props = $props();
	let currentIndex = $state(0);
	let shuffled = $state(false);
	let displayCards = $state([...cards]);

	$effect(() => {
		// Reset when cards prop changes
		displayCards = [...cards];
		currentIndex = 0;
		shuffled = false;
	});

	let current = $derived(displayCards[currentIndex]);
	let progress = $derived(((currentIndex + 1) / displayCards.length) * 100);

	function next() {
		if (currentIndex < displayCards.length - 1) {
			currentIndex++;
		}
	}

	function prev() {
		if (currentIndex > 0) {
			currentIndex--;
		}
	}

	function shuffle() {
		const arr = [...displayCards];
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		displayCards = arr;
		currentIndex = 0;
		shuffled = true;
	}

	function handleRate(quality: 'again' | 'hard' | 'good' | 'easy') {
		progressStore.recordCardReview(current.id, quality);
		progressStore.markCardViewed(current.id, weekNum);
		// Auto-advance on rating
		if (currentIndex < displayCards.length - 1) {
			setTimeout(() => next(), 300);
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="deck">
	{#if topicName}
		<h3 class="topic-name">{topicName}</h3>
	{/if}

	<ProgressBar value={progress} label="Card {currentIndex + 1} of {displayCards.length}" />

	<div class="deck-controls">
		<button class="btn-secondary nav-btn" onclick={prev} disabled={currentIndex === 0}>
			Previous
		</button>
		<button class="btn-secondary shuffle-btn" onclick={shuffle}>
			{shuffled ? 'Re-shuffle' : 'Shuffle'}
		</button>
		<button class="btn-secondary nav-btn" onclick={next} disabled={currentIndex === displayCards.length - 1}>
			Next
		</button>
	</div>

	{#if current}
		{#key current.id}
			<Flashcard
				front={current.front}
				back={current.back}
				code={current.code}
				hint={current.hint}
				type={current.type}
				onrate={handleRate}
			/>
		{/key}
	{/if}

	<p class="nav-hint">Use left/right arrow keys to navigate</p>
</div>

<style>
	.deck {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		width: 100%;
	}

	.topic-name {
		color: var(--color-text-secondary);
		font-size: 1rem;
	}

	.deck-controls {
		display: flex;
		gap: var(--space-sm);
		justify-content: center;
		flex-wrap: wrap;
	}

	.nav-btn, .shuffle-btn {
		padding: var(--space-sm) var(--space-lg);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		color: var(--color-text);
		font-size: var(--font-size-sm);
		min-height: var(--min-tap-target);
	}

	.nav-btn:hover:not(:disabled), .shuffle-btn:hover {
		background: var(--color-surface-hover);
	}

	.nav-btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.nav-hint {
		text-align: center;
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}
</style>
