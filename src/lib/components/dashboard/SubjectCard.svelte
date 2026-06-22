<script lang="ts">
	import { base } from '$app/paths';
	import { getModules, getModuleCards, type SubjectMeta } from '$lib/data';
	import { progressStore } from '$lib/stores/progress.svelte';
	import ProgressBar from '../progress/ProgressBar.svelte';

	interface Props {
		subject: SubjectMeta;
	}

	let { subject }: Props = $props();

	let modules = $derived(getModules(subject.slug));
	let available = $derived(modules.length > 0);

	// Aggregate flashcard progress across all modules in this subject.
	let totals = $derived.by(() => {
		let viewed = 0;
		let total = 0;
		for (const m of modules) {
			const stats = progressStore.getModuleStats(subject.slug, m.num);
			viewed += stats.flashcardsViewed;
			total += stats.flashcardsTotal || getModuleCards(subject.slug, m.num).length;
		}
		return { viewed, total };
	});
	let pct = $derived(totals.total > 0 ? (totals.viewed / totals.total) * 100 : 0);
</script>

{#if available}
	<a href="{base}/{subject.slug}" class="subject-card card">
		<div class="subject-head">
			<span class="subject-icon" aria-hidden="true">{subject.icon}</span>
			<div class="subject-title">
				<h3>{subject.title}</h3>
				{#if subject.courseCode}
					<span class="course-code">{subject.courseCode}</span>
				{/if}
			</div>
		</div>
		<p class="subject-desc">{subject.description}</p>
		<div class="subject-meta">
			<span>{modules.length} module{modules.length === 1 ? '' : 's'}</span>
		</div>
		<ProgressBar value={pct} label="Overall progress" size="sm" />
	</a>
{:else}
	<div class="subject-card card is-empty">
		<div class="subject-head">
			<span class="subject-icon" aria-hidden="true">{subject.icon}</span>
			<div class="subject-title">
				<h3>{subject.title}</h3>
				{#if subject.courseCode}
					<span class="course-code">{subject.courseCode}</span>
				{/if}
			</div>
		</div>
		<p class="subject-desc">{subject.description}</p>
		<span class="coming-soon">Content coming soon</span>
	</div>
{/if}

<style>
	.subject-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		text-decoration: none;
		color: var(--color-text);
		transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
	}

	a.subject-card:hover {
		border-color: var(--color-primary);
		box-shadow: 0 4px 16px var(--color-card-shadow);
		text-decoration: none;
	}

	.subject-card.is-empty {
		opacity: 0.7;
	}

	.subject-head {
		display: flex;
		align-items: center;
		gap: var(--space-md);
	}

	.subject-icon {
		font-size: 2.25rem;
		line-height: 1;
		flex-shrink: 0;
	}

	.subject-title h3 {
		color: var(--color-primary);
		margin: 0;
	}

	.course-code {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	.subject-desc {
		color: var(--color-text-secondary);
		font-size: var(--font-size-sm);
		flex: 1;
	}

	.subject-meta {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
		font-weight: 500;
	}

	.coming-soon {
		font-size: var(--font-size-sm);
		font-weight: 600;
		color: var(--color-text-muted);
		font-style: italic;
	}
</style>
