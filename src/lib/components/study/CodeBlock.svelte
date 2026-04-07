<script lang="ts">
	interface Props {
		code: string;
	}

	let { code }: Props = $props();

	const KEYWORDS = /\b(for|end|if|else|elseif|while|switch|case|otherwise|function|return|break|continue|do)\b/g;
	const BUILTINS = /\b(clc|clear|close|disp|plot|subplot|xlabel|ylabel|title|legend|hold|grid|linspace|zeros|ones|eye|rand|floor|rem|mod|sqrt|abs|sin|cos|exp|log|load|save|xlsread|xlswrite|fprintf|input|find|all|any|sum|length|size|inv|det|transpose|fplot|bar|stairs|stem|axis|text|gtext|figure|mesh|surf|contour|polar)\b/g;
	const COMMENTS = /(%.*)$/gm;
	const STRINGS = /('[^']*')/g;
	const NUMBERS = /\b(\d+\.?\d*)\b/g;
	const PROMPT = /(^>>)/gm;

	function highlight(src: string): string {
		// Escape HTML first
		let html = src
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');

		// Replace in order: comments first (they take priority), then strings, keywords, etc.
		// Use placeholder approach to avoid double-replacing
		const placeholders: string[] = [];
		function placeholder(match: string, cls: string): string {
			const idx = placeholders.length;
			placeholders.push(`<span class="${cls}">${match}</span>`);
			return `\x00${idx}\x00`;
		}

		// Comments
		html = html.replace(COMMENTS, (m) => placeholder(m, 'code-comment'));
		// Strings
		html = html.replace(STRINGS, (m) => placeholder(m, 'code-string'));
		// Prompt
		html = html.replace(PROMPT, (m) => placeholder(m, 'code-prompt'));
		// Keywords
		html = html.replace(KEYWORDS, (m) => placeholder(m, 'code-keyword'));
		// Builtins
		html = html.replace(BUILTINS, (m) => placeholder(m, 'code-builtin'));
		// Numbers (avoid matching inside placeholders)
		html = html.replace(NUMBERS, (m) => placeholder(m, 'code-number'));

		// Restore placeholders
		html = html.replace(/\x00(\d+)\x00/g, (_, idx) => placeholders[parseInt(idx)]);

		return html;
	}
</script>

<pre class="code-block" aria-label="MATLAB code"><code>{@html highlight(code)}</code></pre>

<style>
	.code-block {
		background: var(--code-bg);
		border: 1px solid var(--code-border);
		border-radius: 8px;
		padding: var(--space-md);
		overflow-x: auto;
		font-family: var(--font-family-mono);
		font-size: 0.9rem;
		line-height: 1.6;
		white-space: pre;
		tab-size: 4;
	}

	.code-block :global(.code-keyword) { color: var(--code-keyword); font-weight: 600; }
	.code-block :global(.code-builtin) { color: var(--code-builtin); }
	.code-block :global(.code-string) { color: var(--code-string); }
	.code-block :global(.code-comment) { color: var(--code-comment); font-style: italic; }
	.code-block :global(.code-number) { color: var(--code-number); }
	.code-block :global(.code-prompt) { color: var(--color-primary); font-weight: 700; }
</style>
