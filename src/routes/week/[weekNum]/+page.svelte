<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { getWeek, getWeekCards, getWeekQuiz, getWeekTranslations } from '$lib/data';
	import { progressStore } from '$lib/stores/progress.svelte';

	let weekNum = $derived(Number(page.params.weekNum));
	let week = $derived(getWeek(weekNum));
	let cards = $derived(getWeekCards(weekNum));
	let quiz = $derived(getWeekQuiz(weekNum));
	let translations = $derived(getWeekTranslations(weekNum));
	let stats = $derived(progressStore.getWeekStats(weekNum));
</script>

{#if week}
	<div class="week-overview">
		<header class="week-header">
			<a href="{base}/" class="back-link">Home</a>
			<h1>Week {week.num}: {week.title}</h1>
			<p class="week-description">{week.description}</p>
		</header>

		<div class="topics-card card">
			<h2>Topics Covered</h2>
			<ul class="topic-list">
				{#each week.topics as topic}
					<li>{topic}</li>
				{/each}
			</ul>
		</div>

		<div class="study-modes">
			<a href="{base}/week/{weekNum}/flashcards" class="mode-card card">
				<div class="mode-icon">&#x1F4C7;</div>
				<h3>Flashcards</h3>
				<p>{cards.length} cards</p>
				{#if stats.flashcardsViewed > 0}
					<p class="mode-stat">{stats.flashcardsViewed} reviewed</p>
				{/if}
			</a>

			<a href="{base}/week/{weekNum}/quiz" class="mode-card card">
				<div class="mode-icon">&#x2753;</div>
				<h3>Quiz</h3>
				<p>{quiz.length} questions</p>
				{#if stats.quizBestScore !== null}
					<p class="mode-stat">Best: {stats.quizBestScore}%</p>
				{/if}
			</a>

			{#if translations.length > 0}
				<a href="{base}/week/{weekNum}/translate" class="mode-card card">
					<div class="mode-icon">&#x1F524;</div>
					<h3>Translate</h3>
					<p>{translations.length} math → code</p>
				</a>
			{/if}

			<a href="{base}/week/{weekNum}/cheatsheet" class="mode-card card">
				<div class="mode-icon">&#x1F4CB;</div>
				<h3>Cheat Sheet</h3>
				<p>Quick reference</p>
			</a>
		</div>
	</div>
{:else}
	<div class="not-found">
		<h1>Week not found</h1>
		<p>No content available for Week {weekNum}.</p>
		<a href="{base}/" class="btn-primary">Back to Home</a>
	</div>
{/if}

<style>
	.week-overview {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.week-header {
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

	.week-header h1 {
		margin-top: var(--space-sm);
	}

	.week-description {
		color: var(--color-text-secondary);
		margin-top: var(--space-xs);
	}

	.topic-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		margin-top: var(--space-md);
	}

	.topic-list li {
		padding-left: var(--space-lg);
		position: relative;
	}

	.topic-list li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.6em;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--color-primary);
	}

	.study-modes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: var(--space-lg);
	}

	.mode-card {
		text-align: center;
		text-decoration: none;
		color: var(--color-text);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-xl) var(--space-lg);
		transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
	}

	.mode-card:hover {
		border-color: var(--color-primary);
		box-shadow: 0 4px 16px var(--color-card-shadow);
		text-decoration: none;
	}

	.mode-icon {
		font-size: 2.5rem;
	}

	.mode-card h3 {
		color: var(--color-primary);
	}

	.mode-card p {
		color: var(--color-text-secondary);
		font-size: var(--font-size-sm);
	}

	.mode-stat {
		color: var(--color-success) !important;
		font-weight: 600;
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
