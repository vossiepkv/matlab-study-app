<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { getWeek, getWeekTranslations } from '$lib/data';
	import MathTranslator from '$lib/components/study/MathTranslator.svelte';

	let weekNum = $derived(Number(page.params.weekNum));
	let week = $derived(getWeek(weekNum));
	let items = $derived(getWeekTranslations(weekNum));
</script>

{#if week && items.length > 0}
	<div class="translate-page">
		<header class="page-header">
			<a href="{base}/week/{weekNum}" class="back-link">Week {weekNum}</a>
			<h1>Translate: {week.title}</h1>
			<p class="subtitle">Turn math expressions into MATLAB code, one piece at a time.</p>
		</header>

		<MathTranslator {items} {weekNum} topicName={week.title} />
	</div>
{:else}
	<div class="not-found">
		<h1>No translation exercises yet</h1>
		<p>No translation drills are available for Week {weekNum}.</p>
		<a href="{base}/" class="btn-primary">Back to Home</a>
	</div>
{/if}

<style>
	.translate-page {
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
