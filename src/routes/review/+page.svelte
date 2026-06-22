<script lang="ts">
	import { base } from '$app/paths';
	import { progressStore } from '$lib/stores/progress.svelte';
	import { getAllDeckCards, cardKey, type DeckCard } from '$lib/data';
	import FlashcardDeck from '$lib/components/study/FlashcardDeck.svelte';

	let allCards = $derived(getAllDeckCards());
	let dueKeys = $derived(new Set(progressStore.getDueCards()));
	let dueCards = $derived(
		allCards.filter((c): c is DeckCard => dueKeys.has(cardKey(c.subjectSlug, c.id)))
	);
</script>

<div class="review-page">
	<header class="page-header">
		<a href="{base}/" class="back-link">Dashboard</a>
		<h1>Spaced Repetition Review</h1>
		<p class="page-description">
			Cards that are due for review across all your subjects, based on how well you know them.
			Cards you find harder come back sooner.
		</p>
	</header>

	{#if dueCards.length > 0}
		<div class="due-info">
			<span class="due-count">{dueCards.length}</span>
			<span>card{dueCards.length === 1 ? '' : 's'} due for review</span>
		</div>

		<FlashcardDeck cards={dueCards} topicName="Review — Mixed Topics" />
	{:else}
		<div class="all-caught-up card">
			<div class="caught-up-icon">&#x2705;</div>
			<h2>All caught up!</h2>
			<p>No cards are due for review right now. Come back later or study some new cards.</p>
			<div class="caught-up-actions">
				<a href="{base}/" class="btn-primary">Browse Subjects</a>
			</div>
		</div>
	{/if}
</div>

<style>
	.review-page {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
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

	.due-info {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--font-size-lg);
		color: var(--color-text-secondary);
	}

	.due-count {
		background: var(--color-primary);
		color: white;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: var(--font-size-base);
	}

	.all-caught-up {
		text-align: center;
		padding: var(--space-2xl);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
	}

	.caught-up-icon {
		font-size: 3rem;
	}

	.all-caught-up p {
		color: var(--color-text-secondary);
		max-width: 400px;
	}

	.caught-up-actions {
		margin-top: var(--space-md);
	}

	.caught-up-actions a {
		display: inline-block;
		padding: var(--space-sm) var(--space-xl);
		text-decoration: none;
	}
</style>
