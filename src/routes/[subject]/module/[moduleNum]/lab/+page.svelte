<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { getSubject, getModule, getModuleLabs } from '$lib/data';
	import LabWalkthrough from '$lib/components/study/LabWalkthrough.svelte';

	let slug = $derived(page.params.subject);
	let moduleNum = $derived(Number(page.params.moduleNum));
	let subject = $derived(getSubject(slug));
	let mod = $derived(getModule(slug, moduleNum));
	let exercises = $derived(getModuleLabs(slug, moduleNum));
</script>

{#if subject && mod && exercises.length > 0}
	<div class="lab-page">
		<header class="page-header">
			<a href="{base}/{slug}/module/{moduleNum}" class="back-link">Module {moduleNum}</a>
			<h1>{slug === 'matlab' ? 'Simulation Lab: ' : ''}{mod.title}</h1>
			<p class="subtitle">Work through each exercise. Reveal hints and steps at your own pace.</p>
		</header>

		<LabWalkthrough {exercises} {moduleNum} />
	</div>
{:else}
	<div class="not-found">
		<h1>No lab walkthrough yet</h1>
		<p>No simulation-lab exercises are available for this module.</p>
		<a href="{base}/" class="btn-primary">Back to Dashboard</a>
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
