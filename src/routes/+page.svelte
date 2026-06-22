<script lang="ts">
	import { base } from '$app/paths';
	import { subjects, getModules, getModuleCards } from '$lib/data';
	import SubjectCard from '$lib/components/dashboard/SubjectCard.svelte';
	import StreakCounter from '$lib/components/progress/StreakCounter.svelte';
	import { progressStore } from '$lib/stores/progress.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		// Seed flashcard totals for every module across every subject.
		for (const subject of subjects) {
			for (const m of getModules(subject.slug)) {
				progressStore.setModuleTotal(subject.slug, m.num, getModuleCards(subject.slug, m.num).length);
			}
		}
	});

	let dueCount = $derived(progressStore.getDueCards().length);
</script>

<div class="dashboard">
	<div class="hero">
		<h1>Study Buddy</h1>
		<p class="subtitle">Your accessible study companion for the Associate Degree in Engineering Technology.</p>
		<StreakCounter />
	</div>

	{#if dueCount > 0}
		<a href="{base}/review" class="review-banner card">
			<span class="review-count">{dueCount}</span>
			<span class="review-text">card{dueCount === 1 ? '' : 's'} due for review across your subjects</span>
			<span class="review-action">Review Now</span>
		</a>
	{/if}

	<h2>Your Subjects</h2>
	<div class="subject-grid">
		{#each subjects as subject}
			<SubjectCard {subject} />
		{/each}
	</div>
</div>

<style>
	.dashboard {
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
		max-width: 540px;
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

	.subject-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--space-lg);
	}
</style>
