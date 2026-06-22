<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { getSubject, getModules, getModuleCards } from '$lib/data';
	import ModuleProgress from '$lib/components/progress/ModuleProgress.svelte';
	import { progressStore } from '$lib/stores/progress.svelte';
	import { onMount } from 'svelte';

	let slug = $derived(page.params.subject);
	let subject = $derived(getSubject(slug));
	let modules = $derived(getModules(slug));

	onMount(() => {
		for (const m of getModules(slug)) {
			progressStore.setModuleTotal(slug, m.num, getModuleCards(slug, m.num).length);
		}
	});
</script>

{#if subject}
	<div class="subject-home">
		<header class="subject-header">
			<a href="{base}/" class="back-link">Dashboard</a>
			<div class="subject-title">
				<span class="subject-icon" aria-hidden="true">{subject.icon}</span>
				<div>
					<h1>{subject.title}</h1>
					{#if subject.courseCode}
						<span class="course-code">{subject.courseCode}</span>
					{/if}
				</div>
			</div>
			<p class="subject-desc">{subject.description}</p>
		</header>

		{#if modules.length > 0}
			<h2>Modules</h2>
			<div class="module-grid">
				{#each modules as m}
					<ModuleProgress subjectSlug={slug} moduleNum={m.num} title={m.title} />
				{/each}
			</div>
		{:else}
			<div class="empty-state card">
				<div class="empty-icon" aria-hidden="true">{subject.icon}</div>
				<h2>Content coming soon</h2>
				<p>
					This subject is set up and ready — modules, flashcards, quizzes and cheat sheets
					will appear here once the content is added.
				</p>
				<a href="{base}/" class="btn-primary">Back to Dashboard</a>
			</div>
		{/if}
	</div>
{:else}
	<div class="not-found">
		<h1>Subject not found</h1>
		<p>No subject matches "{slug}".</p>
		<a href="{base}/" class="btn-primary">Back to Dashboard</a>
	</div>
{/if}

<style>
	.subject-home {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.subject-header {
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

	.subject-title {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		margin-top: var(--space-sm);
	}

	.subject-icon {
		font-size: 2.5rem;
		line-height: 1;
	}

	.course-code {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	.subject-desc {
		color: var(--color-text-secondary);
		margin-top: var(--space-sm);
	}

	.module-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--space-lg);
	}

	.empty-state {
		text-align: center;
		padding: var(--space-2xl);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
	}

	.empty-icon {
		font-size: 3rem;
	}

	.empty-state p {
		color: var(--color-text-secondary);
		max-width: 460px;
	}

	.empty-state .btn-primary,
	.not-found .btn-primary {
		display: inline-block;
		margin-top: var(--space-md);
		padding: var(--space-sm) var(--space-xl);
		text-decoration: none;
	}

	.not-found {
		text-align: center;
		padding: var(--space-2xl);
	}
</style>
