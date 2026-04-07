<script lang="ts">
	import { base } from '$app/paths';
	import { weeks } from '$lib/data';
	import WeekProgress from '$lib/components/progress/WeekProgress.svelte';
	import StreakCounter from '$lib/components/progress/StreakCounter.svelte';
	import { progressStore } from '$lib/stores/progress.svelte';
	import { getWeekCards } from '$lib/data';

	import { onMount } from 'svelte';

	onMount(() => {
		// Set totals for each week
		for (const week of weeks) {
			const cards = getWeekCards(week.num);
			progressStore.setWeekTotal(week.num, cards.length);
		}
	});

	let dueCount = $derived(progressStore.getDueCards().length);
</script>

<div class="home">
	<div class="hero">
		<h1>MATLAB Study Buddy</h1>
		<p class="subtitle">Your accessible study companion for OENG1298 — Introduction to Digital Fundamentals</p>
		<StreakCounter />
	</div>

	{#if dueCount > 0}
		<a href="{base}/review" class="review-banner card">
			<span class="review-count">{dueCount}</span>
			<span class="review-text">card{dueCount === 1 ? '' : 's'} due for review</span>
			<span class="review-action">Review Now</span>
		</a>
	{/if}

	<h2>Weekly Topics</h2>
	<div class="week-grid">
		{#each weeks as week}
			<WeekProgress weekNum={week.num} title={week.title} />
		{/each}
	</div>
</div>

<style>
	.home {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.hero {
		text-align: center;
		padding: var(--space-xl) 0;
	}

	.hero h1 {
		font-size: var(--font-size-2xl);
		color: var(--color-primary);
		margin-bottom: var(--space-sm);
	}

	.subtitle {
		color: var(--color-text-secondary);
		font-size: var(--font-size-lg);
		max-width: 500px;
		margin: 0 auto var(--space-lg);
	}

	.review-banner {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-md) var(--space-lg);
		background: var(--color-primary-light);
		border: 2px solid var(--color-primary);
		text-decoration: none;
		color: var(--color-text);
	}

	.review-banner:hover {
		background: var(--color-primary);
		color: white;
		text-decoration: none;
	}

	.review-banner:hover .review-count {
		background: white;
		color: var(--color-primary);
	}

	.review-count {
		background: var(--color-primary);
		color: white;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		flex-shrink: 0;
	}

	.review-text {
		flex: 1;
		font-weight: 500;
	}

	.review-action {
		font-weight: 600;
		color: var(--color-primary);
	}

	.review-banner:hover .review-action {
		color: white;
	}

	h2 {
		margin-bottom: var(--space-sm);
	}

	.week-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--space-lg);
	}
</style>
