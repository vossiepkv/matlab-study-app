<script lang="ts">
	import type { LabExercise } from '$lib/data/labs';
	import CodeBlock from './CodeBlock.svelte';
	import TextToSpeech from '../accessibility/TextToSpeech.svelte';

	interface Props {
		exercises: LabExercise[];
		weekNum: number;
	}

	let { exercises, weekNum }: Props = $props();

	let index = $state(0);
	let stepsRevealed = $state(0);
	let solutionRevealed = $state(false);
	let approachRevealed = $state(false);

	let current = $derived(exercises[index]);
	let total = $derived(exercises.length);

	function reset() {
		stepsRevealed = 0;
		solutionRevealed = false;
		approachRevealed = false;
	}

	function next() {
		if (index < total - 1) {
			index += 1;
			reset();
		}
	}

	function prev() {
		if (index > 0) {
			index -= 1;
			reset();
		}
	}

	function revealNextStep() {
		if (stepsRevealed < current.steps.length) stepsRevealed += 1;
	}

	function revealAllSteps() {
		stepsRevealed = current.steps.length;
	}

	function jumpTo(i: number) {
		index = i;
		reset();
	}
</script>

{#if current}
	<div class="walkthrough">
		<header class="walk-header">
			<div class="meta">
				<span class="counter">Exercise {index + 1} / {total}</span>
				<span class="week-tag">Week {weekNum}</span>
			</div>
			<div class="exercise-picker" role="tablist" aria-label="Jump to exercise">
				{#each exercises as ex, i}
					<button
						class="picker-btn"
						class:active={i === index}
						onclick={() => jumpTo(i)}
						role="tab"
						aria-selected={i === index}
						title={ex.title}
					>
						{i + 1}
					</button>
				{/each}
			</div>
		</header>

		<section class="problem-card card">
			<h2 class="exercise-title">{current.title}</h2>
			<div class="problem-row">
				<p class="problem-text">{current.problem}</p>
				<TextToSpeech text={current.problem} />
			</div>
		</section>

		{#if current.approach}
			<section class="approach-card card">
				<button
					type="button"
					class="approach-toggle"
					onclick={() => (approachRevealed = !approachRevealed)}
					aria-expanded={approachRevealed}
				>
					{approachRevealed ? '▾' : '▸'} Overall approach
				</button>
				{#if approachRevealed}
					<p class="approach-text">{current.approach}</p>
				{/if}
			</section>
		{/if}

		<section class="steps-section">
			<div class="steps-header">
				<h3>Steps ({stepsRevealed}/{current.steps.length} revealed)</h3>
				<div class="step-actions">
					<button
						class="btn-primary"
						onclick={revealNextStep}
						disabled={stepsRevealed >= current.steps.length}
					>
						{stepsRevealed === 0 ? 'Show first step' : 'Show next step'}
					</button>
					<button
						class="btn-ghost"
						onclick={revealAllSteps}
						disabled={stepsRevealed >= current.steps.length}
					>
						Show all
					</button>
				</div>
			</div>

			{#if stepsRevealed === 0}
				<p class="hint-empty">
					Try the exercise yourself first. Reveal steps one at a time when you get stuck.
				</p>
			{/if}

			<ol class="steps-list">
				{#each current.steps.slice(0, stepsRevealed) as step, i}
					<li class="step-card card">
						<div class="step-head">
							<span class="step-num" aria-hidden="true">{i + 1}</span>
							<p class="step-desc">{step.description}</p>
						</div>
						{#if step.code}
							<CodeBlock code={step.code} />
						{/if}
						{#if step.note}
							<p class="step-note">💡 {step.note}</p>
						{/if}
					</li>
				{/each}
			</ol>
		</section>

		{#if current.fullSolution || current.expectedOutput}
			<section class="solution-section">
				{#if !solutionRevealed}
					<button class="btn-ghost reveal-solution" onclick={() => (solutionRevealed = true)}>
						Show full solution
					</button>
				{:else}
					{#if current.fullSolution}
						<div class="solution-card card">
							<h3>Full solution</h3>
							<CodeBlock code={current.fullSolution} />
						</div>
					{/if}
					{#if current.expectedOutput}
						<div class="output-card card">
							<h3>Expected output</h3>
							<pre class="expected-output">{current.expectedOutput}</pre>
						</div>
					{/if}
				{/if}
			</section>
		{/if}

		<nav class="nav-row">
			<button class="btn-ghost" onclick={prev} disabled={index === 0}>← Previous exercise</button>
			<span class="nav-info">{index + 1} of {total}</span>
			<button class="btn-ghost" onclick={next} disabled={index >= total - 1}>Next exercise →</button>
		</nav>
	</div>
{:else}
	<p>No lab exercises available.</p>
{/if}

<style>
	.walkthrough {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.walk-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.meta {
		display: flex;
		justify-content: space-between;
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	.week-tag {
		color: var(--color-primary);
		font-weight: 600;
	}

	.exercise-picker {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
	}

	.picker-btn {
		min-width: var(--min-tap-target);
		min-height: var(--min-tap-target);
		padding: var(--space-xs) var(--space-sm);
		border: 2px solid var(--color-border);
		background: var(--color-surface);
		color: var(--color-text);
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
	}

	.picker-btn:hover {
		border-color: var(--color-primary);
	}

	.picker-btn.active {
		background: var(--color-primary);
		color: white;
		border-color: var(--color-primary);
	}

	.problem-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.exercise-title {
		color: var(--color-primary);
		margin: 0;
	}

	.problem-row {
		display: flex;
		align-items: flex-start;
		gap: var(--space-sm);
	}

	.problem-text {
		flex: 1;
		white-space: pre-wrap;
		line-height: 1.6;
		margin: 0;
	}

	.approach-card {
		padding: var(--space-md);
	}

	.approach-toggle {
		background: transparent;
		border: none;
		color: var(--color-primary);
		font-size: var(--font-size-md);
		font-weight: 600;
		padding: 0;
		cursor: pointer;
		text-align: left;
		min-height: var(--min-tap-target);
	}

	.approach-toggle:hover {
		text-decoration: underline;
	}

	.approach-text {
		margin-top: var(--space-sm);
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	.steps-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.steps-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	.steps-header h3 {
		margin: 0;
	}

	.step-actions {
		display: flex;
		gap: var(--space-sm);
		flex-wrap: wrap;
	}

	.btn-primary,
	.btn-ghost {
		min-height: var(--min-tap-target);
		padding: var(--space-sm) var(--space-lg);
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		border: 2px solid transparent;
	}

	.btn-primary {
		background: var(--color-primary);
		color: white;
	}

	.btn-primary:hover:not(:disabled) {
		filter: brightness(0.95);
	}

	.btn-ghost {
		background: transparent;
		border-color: var(--color-border);
		color: var(--color-text);
	}

	.btn-ghost:hover:not(:disabled) {
		border-color: var(--color-primary);
		color: var(--color-primary);
	}

	.btn-primary:disabled,
	.btn-ghost:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.hint-empty {
		color: var(--color-text-secondary);
		font-style: italic;
		padding: var(--space-md);
		background: var(--color-surface);
		border-left: 3px solid var(--color-primary);
		border-radius: 4px;
		margin: 0;
	}

	.steps-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		counter-reset: step-counter;
	}

	.step-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.step-head {
		display: flex;
		gap: var(--space-md);
		align-items: flex-start;
	}

	.step-num {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: var(--color-primary);
		color: white;
		font-weight: 700;
		flex-shrink: 0;
	}

	.step-desc {
		flex: 1;
		margin: 0;
		line-height: 1.5;
	}

	.step-note {
		background: var(--color-surface);
		padding: var(--space-sm) var(--space-md);
		border-left: 3px solid var(--color-primary);
		border-radius: 4px;
		color: var(--color-text-secondary);
		margin: 0;
		font-size: var(--font-size-sm);
	}

	.solution-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.reveal-solution {
		align-self: flex-start;
	}

	.solution-card,
	.output-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.solution-card h3,
	.output-card h3 {
		margin: 0;
		color: var(--color-primary);
	}

	.expected-output {
		font-family: var(--code-font, 'Menlo', monospace);
		background: var(--color-code-bg, var(--color-surface));
		padding: var(--space-md);
		border-radius: 6px;
		white-space: pre-wrap;
		margin: 0;
		font-size: 0.95em;
	}

	.nav-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-sm);
	}

	.nav-info {
		color: var(--color-text-muted);
		font-size: var(--font-size-sm);
	}
</style>
