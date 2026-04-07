<script lang="ts">
	interface Props {
		value: number;  // 0-100
		label?: string;
		size?: 'sm' | 'md';
	}

	let { value, label = '', size = 'md' }: Props = $props();
	let clamped = $derived(Math.min(100, Math.max(0, value)));
</script>

<div class="progress-wrapper" class:sm={size === 'sm'}>
	{#if label}
		<div class="progress-label">
			<span>{label}</span>
			<span class="progress-pct">{Math.round(clamped)}%</span>
		</div>
	{/if}
	<div class="progress-track" role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100} aria-label={label || 'Progress'}>
		<div class="progress-fill" style="width: {clamped}%"></div>
	</div>
</div>

<style>
	.progress-wrapper {
		width: 100%;
	}

	.progress-label {
		display: flex;
		justify-content: space-between;
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		margin-bottom: var(--space-xs);
	}

	.progress-pct {
		font-weight: 600;
		color: var(--color-primary);
	}

	.progress-track {
		width: 100%;
		height: 10px;
		background: var(--color-border-light);
		border-radius: 5px;
		overflow: hidden;
	}

	.sm .progress-track {
		height: 6px;
	}

	.progress-fill {
		height: 100%;
		background: var(--color-primary);
		border-radius: 5px;
		transition: width 300ms ease;
	}
</style>
