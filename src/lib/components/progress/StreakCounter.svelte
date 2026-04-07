<script lang="ts">
	import { progressStore } from '$lib/stores/progress.svelte';

	let streak = $derived(progressStore.data.streak);
</script>

<div class="streak" aria-label="Study streak: {streak} days">
	<span class="streak-flame" aria-hidden="true">&#x1F525;</span>
	<span class="streak-count">{streak}</span>
	<span class="streak-label">day{streak !== 1 ? 's' : ''}</span>
</div>

<style>
	.streak {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		font-size: var(--font-size-lg);
		font-weight: 600;
	}

	.streak-flame {
		font-size: 1.5em;
	}

	.streak-count {
		color: var(--color-primary);
	}

	.streak-label {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		font-weight: 400;
	}
</style>
