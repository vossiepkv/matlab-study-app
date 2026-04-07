<script lang="ts">
	import { page } from '$app/state';
	import { getWeek, getWeekCards } from '$lib/data';
	import FlashcardDeck from '$lib/components/study/FlashcardDeck.svelte';

	let weekNum = $derived(Number(page.params.weekNum));
	let week = $derived(getWeek(weekNum));
	let cards = $derived(getWeekCards(weekNum));
</script>

{#if week && cards.length > 0}
	<div class="flashcards-page">
		<header class="page-header">
			<a href="/week/{weekNum}" class="back-link">Week {weekNum}</a>
			<h1>Flashcards: {week.title}</h1>
		</header>

		<FlashcardDeck {cards} {weekNum} topicName={week.title} />
	</div>
{:else}
	<div class="not-found">
		<h1>No flashcards found</h1>
		<p>No flashcard data available for Week {weekNum}.</p>
		<a href="/" class="btn-primary">Back to Home</a>
	</div>
{/if}

<style>
	.flashcards-page {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
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

	.not-found {
		text-align: center;
		padding: var(--space-2xl);
	}

	.not-found .btn-primary {
		display: inline-block;
		margin-top: var(--space-lg);
		padding: var(--space-sm) var(--space-xl);
		text-decoration: none;
	}
</style>
