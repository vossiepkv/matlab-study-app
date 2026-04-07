<script lang="ts">
	import { progressStore } from '$lib/stores/progress.svelte';
	import ProgressBar from './ProgressBar.svelte';

	interface Props {
		weekNum: number;
		title: string;
	}

	let { weekNum, title }: Props = $props();
	let stats = $derived(progressStore.getWeekStats(weekNum));
	let pct = $derived(stats.flashcardsTotal > 0 ? (stats.flashcardsViewed / stats.flashcardsTotal) * 100 : 0);
</script>

<div class="week-progress card">
	<h3>Week {weekNum}: {title}</h3>
	<ProgressBar value={pct} label="Flashcards" />
	{#if stats.quizBestScore !== null}
		<p class="quiz-score">Best quiz score: <strong>{stats.quizBestScore}%</strong></p>
	{/if}
	<div class="week-actions">
		<a href="/week/{weekNum}/flashcards" class="btn-primary action-btn">Flashcards</a>
		<a href="/week/{weekNum}/quiz" class="btn-secondary action-btn">Quiz</a>
		<a href="/week/{weekNum}/cheatsheet" class="btn-secondary action-btn">Cheat Sheet</a>
	</div>
</div>

<style>
	.week-progress h3 {
		margin-bottom: var(--space-sm);
	}

	.quiz-score {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		margin-top: var(--space-sm);
	}

	.week-actions {
		display: flex;
		gap: var(--space-sm);
		margin-top: var(--space-md);
		flex-wrap: wrap;
	}

	.action-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-sm) var(--space-md);
		border-radius: 8px;
		font-size: var(--font-size-sm);
		font-weight: 500;
		min-height: var(--min-tap-target);
		text-decoration: none;
		transition: background-color var(--transition-fast);
	}

	.action-btn.btn-primary {
		background: var(--color-primary);
		color: white;
	}

	.action-btn.btn-primary:hover {
		background: var(--color-primary-hover);
	}

	.action-btn.btn-secondary {
		background: var(--color-surface);
		color: var(--color-text);
		border: 1px solid var(--color-border);
	}

	.action-btn.btn-secondary:hover {
		background: var(--color-surface-hover);
	}
</style>
