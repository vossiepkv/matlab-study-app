<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { getSubject, getModule, getModuleCards, toDeckCards } from '$lib/data';
	import FlashcardDeck from '$lib/components/study/FlashcardDeck.svelte';

	let slug = $derived(page.params.subject);
	let moduleNum = $derived(Number(page.params.moduleNum));
	let subject = $derived(getSubject(slug));
	let mod = $derived(getModule(slug, moduleNum));
	let cards = $derived(toDeckCards(slug, moduleNum, getModuleCards(slug, moduleNum)));
</script>

{#if subject && mod && cards.length > 0}
	<div class="flashcards-page">
		<header class="page-header">
			<a href="{base}/{slug}/module/{moduleNum}" class="back-link">Module {moduleNum}</a>
			<h1>Flashcards: {mod.title}</h1>
		</header>

		<FlashcardDeck {cards} topicName={mod.title} />
	</div>
{:else}
	<div class="not-found">
		<h1>No flashcards found</h1>
		<p>No flashcard data available for this module.</p>
		<a href="{base}/" class="btn-primary">Back to Dashboard</a>
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
