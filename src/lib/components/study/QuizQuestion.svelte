<script lang="ts">
	import CodeBlock from './CodeBlock.svelte';
	import TextToSpeech from '../accessibility/TextToSpeech.svelte';
	import { settingsStore } from '$lib/stores/settings.svelte';

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
		data: QuizData;
		onanswer: (correct: boolean) => void;
	}

	let { data, onanswer }: Props = $props();
	let selectedOption = $state<number | null>(null);
	let textAnswer = $state('');
	let submitted = $state(false);
	let isCorrect = $state(false);

	function submitMC(index: number) {
		if (submitted) return;
		selectedOption = index;
		submitted = true;
		isCorrect = index === data.correctIndex;
		onanswer(isCorrect);
	}

	function submitText() {
		if (submitted || !textAnswer.trim()) return;
		submitted = true;
		const normalized = textAnswer.trim().toLowerCase();
		const acceptable = [data.answer, ...(data.acceptableAnswers || [])].map(a => a?.toLowerCase().trim() ?? '');
		isCorrect = acceptable.includes(normalized);
		onanswer(isCorrect);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && (data.type === 'fill-blank' || data.type === 'code-output')) {
			submitText();
		}
	}
</script>

<div class="quiz-question card">
	<div class="question-header">
		<p class="question-text">{data.question}</p>
		<TextToSpeech text={data.question} />
	</div>

	{#if data.code}
		<CodeBlock code={data.code} />
	{/if}

	{#if data.type === 'multiple-choice' && data.options}
		<div class="options" role="radiogroup" aria-label="Answer options">
			{#each data.options as option, i}
				<button
					class="option-btn"
					class:selected={selectedOption === i}
					class:correct={submitted && i === data.correctIndex}
					class:incorrect={submitted && selectedOption === i && i !== data.correctIndex}
					onclick={() => submitMC(i)}
					disabled={submitted}
					role="radio"
					aria-checked={selectedOption === i}
				>
					<span class="option-letter">{String.fromCharCode(65 + i)}</span>
					<span class="option-text">{option}</span>
				</button>
			{/each}
		</div>
	{:else}
		<div class="text-input-area">
			<input
				type="text"
				class="text-answer"
				class:correct={submitted && isCorrect}
				class:incorrect={submitted && !isCorrect}
				bind:value={textAnswer}
				onkeydown={handleKeydown}
				placeholder="Type your answer..."
				disabled={submitted}
				aria-label="Your answer"
			/>
			{#if !submitted}
				<button class="btn-primary submit-btn" onclick={submitText} disabled={!textAnswer.trim()}>
					Submit
				</button>
			{/if}
		</div>
	{/if}

	{#if submitted}
		<div class="feedback" class:feedback-correct={isCorrect} class:feedback-incorrect={!isCorrect}>
			<p class="feedback-result">
				{isCorrect ? 'Correct!' : 'Not quite.'}
				{#if !isCorrect && data.answer}
					The answer is: <strong>{data.answer}</strong>
				{/if}
			</p>
			<p class="feedback-explanation">{data.explanation}</p>
		</div>
	{/if}
</div>

<style>
	.quiz-question {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.question-header {
		display: flex;
		align-items: flex-start;
		gap: var(--space-sm);
	}

	.question-text {
		flex: 1;
		font-size: 1.1rem;
		font-weight: 500;
	}

	.options {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.option-btn {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-md);
		background: var(--color-surface);
		border: 2px solid var(--color-border);
		border-radius: 8px;
		text-align: left;
		min-height: var(--min-tap-target);
		transition: border-color var(--transition-fast), background-color var(--transition-fast);
	}

	.option-btn:hover:not(:disabled) {
		border-color: var(--color-primary);
		background: var(--color-primary-light);
	}

	.option-btn.selected {
		border-color: var(--color-primary);
	}

	.option-btn.correct {
		border-color: var(--color-success);
		background: var(--color-success-light);
	}

	.option-btn.incorrect {
		border-color: var(--color-error);
		background: var(--color-error-light);
	}

	.option-letter {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: var(--color-border-light);
		font-weight: 600;
		font-size: var(--font-size-sm);
		flex-shrink: 0;
	}

	.option-text {
		flex: 1;
	}

	.text-input-area {
		display: flex;
		gap: var(--space-sm);
		align-items: center;
	}

	.text-answer {
		flex: 1;
		padding: var(--space-sm) var(--space-md);
		border: 2px solid var(--color-border);
		border-radius: 8px;
		font-family: inherit;
		font-size: 1rem;
		background: var(--color-surface);
		color: var(--color-text);
		min-height: var(--min-tap-target);
	}

	.text-answer:focus {
		border-color: var(--color-primary);
		outline: none;
	}

	.text-answer.correct {
		border-color: var(--color-success);
	}

	.text-answer.incorrect {
		border-color: var(--color-error);
	}

	.submit-btn {
		background: var(--color-primary);
		color: white;
		min-height: var(--min-tap-target);
		padding: var(--space-sm) var(--space-lg);
	}

	.submit-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.feedback {
		padding: var(--space-md);
		border-radius: 8px;
		border-left: 4px solid;
	}

	.feedback-correct {
		background: var(--color-success-light);
		border-color: var(--color-success);
	}

	.feedback-incorrect {
		background: var(--color-error-light);
		border-color: var(--color-error);
	}

	.feedback-result {
		font-weight: 600;
		margin-bottom: var(--space-xs);
	}

	.feedback-correct .feedback-result { color: var(--color-success); }
	.feedback-incorrect .feedback-result { color: var(--color-error); }

	.feedback-explanation {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
	}
</style>
