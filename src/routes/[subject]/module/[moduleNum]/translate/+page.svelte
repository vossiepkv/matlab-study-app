<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { getSubject, getModule, getModuleTranslations } from '$lib/data';
	import MathTranslator from '$lib/components/study/MathTranslator.svelte';

	let slug = $derived(page.params.subject);
	let moduleNum = $derived(Number(page.params.moduleNum));
	let subject = $derived(getSubject(slug));
	let mod = $derived(getModule(slug, moduleNum));
	let items = $derived(getModuleTranslations(slug, moduleNum));
</script>

{#if subject && mod && items.length > 0}
	<div class="translate-page">
		<header class="page-header">
			<a href="{base}/{slug}/module/{moduleNum}" class="back-link">Module {moduleNum}</a>
			<h1>Translate: {mod.title}</h1>
			<p class="subtitle">Turn math expressions into MATLAB code, one piece at a time.</p>
		</header>

		<MathTranslator {items} {moduleNum} topicName={mod.title} />
	</div>
{:else}
	<div class="not-found">
		<h1>No translation exercises yet</h1>
		<p>No translation drills are available for this module.</p>
		<a href="{base}/" class="btn-primary">Back to Dashboard</a>
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
