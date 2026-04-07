<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { getWeek, getWeekQuiz } from '$lib/data';
	import QuizMode from '$lib/components/study/QuizMode.svelte';

	let weekNum = $derived(Number(page.params.weekNum));
	let week = $derived(getWeek(weekNum));
	let questions = $derived(getWeekQuiz(weekNum));
</script>

{#if week && questions.length > 0}
	<div class="quiz-page">
		<header class="page-header">
			<a href="{base}/week/{weekNum}" class="back-link">Week {weekNum}</a>
			<h1>Quiz: {week.title}</h1>
		</header>

		<QuizMode {questions} {weekNum} />
	</div>
{:else}
	<div class="not-found">
		<h1>No quiz found</h1>
		<p>No quiz data available for Week {weekNum}.</p>
		<a href="{base}/" class="btn-primary">Back to Home</a>
	</div>
{/if}

<style>
	.quiz-page {
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
