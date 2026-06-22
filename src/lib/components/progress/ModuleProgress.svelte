<script lang="ts">
	import { base } from '$app/paths';
	import { progressStore } from '$lib/stores/progress.svelte';
	import ProgressBar from './ProgressBar.svelte';

	interface Props {
		subjectSlug: string;
		moduleNum: number;
		title: string;
	}

	let { subjectSlug, moduleNum, title }: Props = $props();
	let stats = $derived(progressStore.getModuleStats(subjectSlug, moduleNum));
	let pct = $derived(stats.flashcardsTotal > 0 ? (stats.flashcardsViewed / stats.flashcardsTotal) * 100 : 0);
</script>

<div class="module-progress card">
	<h3>Module {moduleNum}: {title}</h3>
	<ProgressBar value={pct} label="Flashcards" />
	{#if stats.quizBestScore !== null}
		<p class="quiz-score">Best quiz score: <strong>{stats.quizBestScore}%</strong></p>
	{/if}
	<div class="module-actions">
		<a href="{base}/{subjectSlug}/module/{moduleNum}/flashcards" class="btn-primary action-btn">Flashcards</a>
		<a href="{base}/{subjectSlug}/module/{moduleNum}/quiz" class="btn-secondary action-btn">Quiz</a>
		<a href="{base}/{subjectSlug}/module/{moduleNum}/cheatsheet" class="btn-secondary action-btn">Cheat Sheet</a>
	</div>
</div>

<style>
	.module-progress h3 {
		margin-bottom: var(--space-sm);
	}

	.quiz-score {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		margin-top: var(--space-sm);
	}

	.module-actions {
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
