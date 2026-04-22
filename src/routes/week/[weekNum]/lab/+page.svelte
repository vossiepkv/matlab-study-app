<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { getWeek, getWeekLabs } from '$lib/data';
	import LabWalkthrough from '$lib/components/study/LabWalkthrough.svelte';

	let weekNum = $derived(Number(page.params.weekNum));
	let week = $derived(getWeek(weekNum));
	let exercises = $derived(getWeekLabs(weekNum));
</script>

{#if week && exercises.length > 0}
	<div class="lab-page">
		<header class="page-header">
			<a href="{base}/week/{weekNum}" class="back-link">Week {weekNum}</a>
			<h1>Simulation Lab: {week.title}</h1>
			<p class="subtitle">Work through each exercise. Reveal hints and steps at your own pace.</p>
		</header>

		<LabWalkthrough {exercises} {weekNum} />
	</div>
{:else}
	<div class="not-found">
		<h1>No lab walkthrough yet</h1>
		<p>No simulation-lab exercises are available for Week {weekNum}.</p>
		<a href="{base}/" class="btn-primary">Back to Home</a>
	</div>
{/if}

<style>
	.lab-page {
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

	.subtitle {
		color: var(--color-text-secondary);
		margin-top: var(--space-xs);
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
