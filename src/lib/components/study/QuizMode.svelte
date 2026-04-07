<script lang="ts">
	import { base } from '$app/paths';
	import QuizQuestion from './QuizQuestion.svelte';
	import ProgressBar from '../progress/ProgressBar.svelte';
	import { progressStore } from '$lib/stores/progress.svelte';

	interface QuizData {
		id: string;
		type: 'multiple-choice' | 'fill-blank' | 'code-output';
		question: string;
		options?: string[];
		correctIndex?: number;
		answer?: string;
		acceptableAnswers?: string[];
		code?: string;
		explanation: string;
	}

	interface Props {
		questions: QuizData[];
		weekNum: number;
	}

	let { questions, weekNum }: Props = $props();
	let currentIndex = $state(0);
	let correctCount = $state(0);
	let answeredCount = $state(0);
	let finished = $state(false);
	let showNext = $state(false);

	let progress = $derived(((currentIndex) / questions.length) * 100);
	let score = $derived(questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0);

	function handleAnswer(correct: boolean) {
		if (correct) correctCount++;
		answeredCount++;
		showNext = true;
	}

	function next() {
		if (currentIndex < questions.length - 1) {
			currentIndex++;
			showNext = false;
		} else {
			finished = true;
			progressStore.recordQuizScore(weekNum, score);
		}
	}

	function retry() {
		currentIndex = 0;
		correctCount = 0;
		answeredCount = 0;
		finished = false;
		showNext = false;
	}
</script>

<div class="quiz">
	{#if !finished}
		<ProgressBar value={progress} label="Question {currentIndex + 1} of {questions.length}" />

		{#key questions[currentIndex].id}
			<QuizQuestion data={questions[currentIndex]} onanswer={handleAnswer} />
		{/key}

		{#if showNext}
			<button class="btn-primary next-btn" onclick={next}>
				{currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
			</button>
		{/if}
	{:else}
		<div class="results card">
			<h2>Quiz Complete!</h2>
			<div class="score-display">
				<span class="score-number" class:good={score >= 70} class:needs-work={score < 70}>
					{score}%
				</span>
				<p class="score-detail">{correctCount} out of {questions.length} correct</p>
			</div>
			{#if score >= 90}
				<p class="score-message">Excellent work! You really know this material.</p>
			{:else if score >= 70}
				<p class="score-message">Good job! Review the ones you missed and try again.</p>
			{:else}
				<p class="score-message">Keep studying! Review the flashcards and try again.</p>
			{/if}
			<div class="result-actions">
				<button class="btn-primary" onclick={retry}>Try Again</button>
				<a href="{base}/week/{weekNum}/flashcards" class="btn-secondary result-link">Review Flashcards</a>
			</div>
		</div>
	{/if}
</div>

<style>
	.quiz {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
		width: 100%;
	}

	.next-btn {
		align-self: center;
		padding: var(--space-sm) var(--space-xl);
		background: var(--color-primary);
		color: white;
		font-size: 1rem;
	}

	.results {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
	}

	.score-display {
		margin: var(--space-md) 0;
	}

	.score-number {
		font-size: 3rem;
		font-weight: 700;
	}

	.score-number.good { color: var(--color-success); }
	.score-number.needs-work { color: var(--color-warning); }

	.score-detail {
		color: var(--color-text-secondary);
		margin-top: var(--space-xs);
	}

	.score-message {
		font-size: 1.1rem;
		color: var(--color-text-secondary);
	}

	.result-actions {
		display: flex;
		gap: var(--space-md);
		margin-top: var(--space-md);
		flex-wrap: wrap;
		justify-content: center;
	}

	.result-link {
		display: inline-flex;
		align-items: center;
		padding: var(--space-sm) var(--space-lg);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		text-decoration: none;
		min-height: var(--min-tap-target);
	}
</style>
