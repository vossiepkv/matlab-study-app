<script lang="ts">
	import type { TranslationData } from '$lib/data/translations';
	import CodeBlock from './CodeBlock.svelte';
	import TextToSpeech from '../accessibility/TextToSpeech.svelte';

	interface Props {
		items: TranslationData[];
		weekNum: number;
		topicName?: string;
	}

	let { items, weekNum, topicName }: Props = $props();

	let index = $state(0);
	let userAnswer = $state('');
	let submitted = $state(false);
	let isCorrect = $state(false);
	let hintsShown = $state(0);
	let breakdownOpen = $state(false);

	let current = $derived(items[index]);
	let total = $derived(items.length);
	let progress = $derived(total > 0 ? ((index + 1) / total) * 100 : 0);

	function normalize(s: string): string {
		return s.replace(/\s+/g, '').replace(/\r\n/g, '\n');
	}

	function check() {
		if (submitted || !userAnswer.trim()) return;
		const attempt = normalize(userAnswer);
		const candidates = [current.matlab, ...(current.accept ?? [])].map(normalize);
		isCorrect = candidates.includes(attempt);
		submitted = true;
	}

	function showNextHint() {
		if (hintsShown < current.hints.length) hintsShown += 1;
	}

	function reveal() {
		submitted = true;
		isCorrect = false;
	}

	function next() {
		if (index < total - 1) {
			index += 1;
			resetCard();
		}
	}

	function prev() {
		if (index > 0) {
			index -= 1;
			resetCard();
		}
	}

	function resetCard() {
		userAnswer = '';
		submitted = false;
		isCorrect = false;
		hintsShown = 0;
		breakdownOpen = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			if (!submitted) check();
			else next();
		}
	}
</script>

{#if current}
	<div class="translator">
		<header class="translator-header">
			<div class="meta">
				<span class="counter">Card {index + 1} / {total}</span>
				{#if topicName}<span class="topic">{topicName}</span>{/if}
			</div>
			<div class="progress-track" aria-hidden="true">
				<div class="progress-fill" style="width: {progress}%"></div>
			</div>
		</header>

		<div class="math-card card">
			<div class="math-row">
				<div class="math-expression" aria-label="Math expression">{current.math}</div>
				<TextToSpeech text={current.spoken} />
			</div>
			{#if current.context}
				<p class="context">{current.context}</p>
			{/if}

			<button
				type="button"
				class="breakdown-toggle"
				onclick={() => (breakdownOpen = !breakdownOpen)}
				aria-expanded={breakdownOpen}
			>
				{breakdownOpen ? '▾' : '▸'} Break it down ({current.breakdown.length} parts)
			</button>

			{#if breakdownOpen}
				<ul class="breakdown">
					{#each current.breakdown as part}
						<li>
							<span class="bd-symbol">{part.symbol}</span>
							<span class="bd-arrow" aria-hidden="true">→</span>
							<code class="bd-matlab">{part.matlab}</code>
							{#if part.note}
								<span class="bd-note">{part.note}</span>
							{/if}
						</li>
					{/each}
				</ul>
			{/if}
		</div>

		<div class="answer-card card">
			<label class="answer-label" for="matlab-input">Write the MATLAB code:</label>
			<textarea
				id="matlab-input"
				class="matlab-input"
				class:correct={submitted && isCorrect}
				class:incorrect={submitted && !isCorrect}
				bind:value={userAnswer}
				onkeydown={handleKeydown}
				placeholder="Type the MATLAB translation here…"
				disabled={submitted}
				spellcheck="false"
				autocomplete="off"
				autocapitalize="off"
				rows="3"
			></textarea>

			<div class="actions">
				{#if !submitted}
					<button class="btn-primary" onclick={check} disabled={!userAnswer.trim()}>
						Check
					</button>
					<button class="btn-ghost" onclick={showNextHint} disabled={hintsShown >= current.hints.length}>
						Hint ({hintsShown}/{current.hints.length})
					</button>
					<button class="btn-ghost" onclick={reveal}>Show answer</button>
				{:else}
					<button class="btn-primary" onclick={next} disabled={index >= total - 1}>
						Next →
					</button>
				{/if}
			</div>

			{#if hintsShown > 0 && !submitted}
				<ol class="hints">
					{#each current.hints.slice(0, hintsShown) as hint}
						<li>{hint}</li>
					{/each}
				</ol>
			{/if}

			{#if submitted}
				<div class="feedback" class:feedback-correct={isCorrect} class:feedback-incorrect={!isCorrect}>
					<p class="feedback-result">
						{isCorrect ? 'Correct! 🎉' : "That's not quite right — here's the answer:"}
					</p>
					<div class="answer-reveal">
						<CodeBlock code={current.matlab} />
					</div>
					<p class="explanation">{current.explanation}</p>
					{#if current.gotchas && current.gotchas.length > 0}
						<div class="gotchas">
							<p class="gotchas-title">Watch out for:</p>
							<ul>
								{#each current.gotchas as g}
									<li>{g}</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			{/if}
		</div>

		<nav class="nav-row">
			<button class="btn-ghost" onclick={prev} disabled={index === 0}>← Previous</button>
			<span class="nav-info">Week {weekNum}</span>
			<button class="btn-ghost" onclick={next} disabled={index >= total - 1}>Next →</button>
		</nav>
	</div>
{:else}
	<p>No translation exercises available.</p>
{/if}

<style>
	.translator {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.translator-header {
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

	.topic {
		color: var(--color-primary);
		font-weight: 600;
	}

	.progress-track {
		height: 6px;
		background: var(--color-border-light);
		border-radius: 3px;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: var(--color-primary);
		transition: width var(--transition-fast);
	}

	.math-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.math-row {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.math-expression {
		flex: 1;
		font-size: 1.6rem;
		font-weight: 500;
		line-height: 1.5;
		padding: var(--space-md);
		background: var(--color-surface-alt, var(--color-surface));
		border-radius: 8px;
		border: 1px solid var(--color-border-light);
		font-family: 'Cambria Math', 'Latin Modern Math', Georgia, serif;
		white-space: pre-wrap;
	}

	.context {
		color: var(--color-text-secondary);
		font-size: var(--font-size-sm);
		font-style: italic;
	}

	.breakdown-toggle {
		align-self: flex-start;
		background: transparent;
		border: none;
		color: var(--color-primary);
		font-size: var(--font-size-sm);
		font-weight: 600;
		padding: var(--space-xs) 0;
		cursor: pointer;
		min-height: var(--min-tap-target);
	}

	.breakdown-toggle:hover {
		text-decoration: underline;
	}

	.breakdown {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.breakdown li {
		display: grid;
		grid-template-columns: auto auto auto 1fr;
		gap: var(--space-sm);
		align-items: center;
		padding: var(--space-sm);
		background: var(--color-surface);
		border-radius: 6px;
		border-left: 3px solid var(--color-primary);
	}

	.bd-symbol {
		font-family: 'Cambria Math', Georgia, serif;
		font-weight: 600;
	}

	.bd-arrow {
		color: var(--color-text-muted);
	}

	.bd-matlab {
		font-family: var(--code-font, 'Menlo', monospace);
		background: var(--color-code-bg, var(--color-border-light));
		padding: 2px 6px;
		border-radius: 4px;
		font-size: 0.95em;
	}

	.bd-note {
		color: var(--color-text-secondary);
		font-size: var(--font-size-sm);
	}

	.answer-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.answer-label {
		font-weight: 600;
	}

	.matlab-input {
		width: 100%;
		padding: var(--space-sm) var(--space-md);
		border: 2px solid var(--color-border);
		border-radius: 8px;
		font-family: var(--code-font, 'Menlo', monospace);
		font-size: 1rem;
		background: var(--color-surface);
		color: var(--color-text);
		resize: vertical;
		min-height: calc(var(--min-tap-target) * 1.5);
	}

	.matlab-input:focus {
		border-color: var(--color-primary);
		outline: none;
	}

	.matlab-input.correct {
		border-color: var(--color-success);
		background: var(--color-success-light);
	}

	.matlab-input.incorrect {
		border-color: var(--color-error);
		background: var(--color-error-light);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
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

	.hints {
		margin: 0;
		padding-left: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		background: var(--color-surface);
		border-left: 3px solid var(--color-primary);
		padding: var(--space-sm) var(--space-md) var(--space-sm) var(--space-xl);
		border-radius: 4px;
	}

	.hints li {
		color: var(--color-text-secondary);
	}

	.feedback {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
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
		margin: 0;
	}

	.feedback-correct .feedback-result { color: var(--color-success); }
	.feedback-incorrect .feedback-result { color: var(--color-error); }

	.explanation {
		color: var(--color-text);
		margin: 0;
	}

	.gotchas {
		margin-top: var(--space-sm);
		padding-top: var(--space-sm);
		border-top: 1px solid var(--color-border-light);
	}

	.gotchas-title {
		font-weight: 600;
		margin: 0 0 var(--space-xs) 0;
		color: var(--color-warning, var(--color-error));
	}

	.gotchas ul {
		margin: 0;
		padding-left: var(--space-lg);
		color: var(--color-text-secondary);
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.nav-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-info {
		color: var(--color-text-muted);
		font-size: var(--font-size-sm);
	}

	@media (max-width: 600px) {
		.math-expression {
			font-size: 1.3rem;
		}

		.breakdown li {
			grid-template-columns: 1fr;
		}

		.bd-arrow {
			display: none;
		}
	}
</style>
