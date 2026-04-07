<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { getWeek, getWeekCards } from '$lib/data';
	import CodeBlock from '$lib/components/study/CodeBlock.svelte';
	import TextToSpeech from '$lib/components/accessibility/TextToSpeech.svelte';
	import { settingsStore } from '$lib/stores/settings.svelte';

	let weekNum = $derived(Number(page.params.weekNum));
	let week = $derived(getWeek(weekNum));
	let cards = $derived(getWeekCards(weekNum));

	let conceptCards = $derived(cards.filter(c => c.type === 'concept'));
	let codeCards = $derived(cards.filter(c => c.type === 'code'));
	let listCards = $derived(cards.filter(c => c.type === 'list'));
</script>

{#if week && cards.length > 0}
	<div class="cheatsheet-page">
		<header class="page-header">
			<a href="{base}/week/{weekNum}" class="back-link">Week {weekNum}</a>
			<h1>Cheat Sheet: {week.title}</h1>
			<p class="page-description">Quick reference for all Week {weekNum} concepts</p>
		</header>

		{#if conceptCards.length > 0}
			<section class="cheat-section">
				<h2>Key Concepts</h2>
				<div class="cheat-grid">
					{#each conceptCards as card}
						<div class="cheat-item card">
							<div class="cheat-header">
								<h3>{card.front}</h3>
								{#if settingsStore.current.ttsEnabled}
									<TextToSpeech text="{card.front}. {typeof card.back === 'string' ? card.back : card.back.join('. ')}" />
								{/if}
							</div>
							<p class="cheat-answer">
								{#if typeof card.back === 'string'}
									{card.back}
								{:else}
									{card.back.join('; ')}
								{/if}
							</p>
							{#if card.code}
								<CodeBlock code={card.code} />
							{/if}
						</div>
					{/each}
				</div>
			</section>
		{/if}

		{#if codeCards.length > 0}
			<section class="cheat-section">
				<h2>Code Examples</h2>
				<div class="cheat-grid">
					{#each codeCards as card}
						<div class="cheat-item card">
							<div class="cheat-header">
								<h3>{card.front}</h3>
								{#if settingsStore.current.ttsEnabled}
									<TextToSpeech text="{card.front}. {typeof card.back === 'string' ? card.back : card.back.join('. ')}" />
								{/if}
							</div>
							<p class="cheat-answer">
								{#if typeof card.back === 'string'}
									{card.back}
								{:else}
									{card.back.join('; ')}
								{/if}
							</p>
							{#if card.code}
								<CodeBlock code={card.code} />
							{/if}
						</div>
					{/each}
				</div>
			</section>
		{/if}

		{#if listCards.length > 0}
			<section class="cheat-section">
				<h2>Reference Lists</h2>
				<div class="cheat-grid">
					{#each listCards as card}
						<div class="cheat-item card">
							<div class="cheat-header">
								<h3>{card.front}</h3>
								{#if settingsStore.current.ttsEnabled}
									<TextToSpeech text="{card.front}. {typeof card.back === 'string' ? card.back : card.back.join('. ')}" />
								{/if}
							</div>
							{#if Array.isArray(card.back)}
								<ul class="cheat-list">
									{#each card.back as item}
										<li>{item}</li>
									{/each}
								</ul>
							{:else}
								<p class="cheat-answer">{card.back}</p>
							{/if}
							{#if card.code}
								<CodeBlock code={card.code} />
							{/if}
						</div>
					{/each}
				</div>
			</section>
		{/if}

		<div class="cheat-footer">
			<a href="{base}/week/{weekNum}/flashcards" class="btn-secondary">Practice Flashcards</a>
			<a href="{base}/week/{weekNum}/quiz" class="btn-secondary">Take Quiz</a>
		</div>
	</div>
{:else}
	<div class="not-found">
		<h1>No cheat sheet found</h1>
		<p>No content available for Week {weekNum}.</p>
		<a href="{base}/" class="btn-primary">Back to Home</a>
	</div>
{/if}

<style>
	.cheatsheet-page {
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

	.cheat-section h2 {
		margin-bottom: var(--space-md);
		padding-bottom: var(--space-xs);
		border-bottom: 2px solid var(--color-primary);
	}

	.cheat-grid {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.cheat-item {
		padding: var(--space-lg);
	}

	.cheat-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--space-sm);
	}

	.cheat-item h3 {
		color: var(--color-primary);
		font-size: var(--font-size-base);
		margin-bottom: var(--space-sm);
	}

	.cheat-answer {
		color: var(--color-text-secondary);
		margin-bottom: var(--space-sm);
	}

	.cheat-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		margin-bottom: var(--space-sm);
	}

	.cheat-list li {
		padding-left: var(--space-md);
		position: relative;
		color: var(--color-text-secondary);
	}

	.cheat-list li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.6em;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--color-primary);
	}

	.cheat-footer {
		display: flex;
		gap: var(--space-md);
		justify-content: center;
		flex-wrap: wrap;
		padding-top: var(--space-lg);
		border-top: 1px solid var(--color-border-light);
	}

	.cheat-footer a {
		display: inline-flex;
		align-items: center;
		padding: var(--space-sm) var(--space-xl);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		text-decoration: none;
		min-height: var(--min-tap-target);
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
