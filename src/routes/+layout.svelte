<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import SettingsPanel from '$lib/components/accessibility/SettingsPanel.svelte';
	import FocusTimer from '$lib/components/timer/FocusTimer.svelte';
	import { settingsStore } from '$lib/stores/settings.svelte';
	import { progressStore } from '$lib/stores/progress.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();
	let settingsOpen = $state(false);

	onMount(() => {
		settingsStore.init();
		progressStore.init();
	});
</script>

<div class="app-shell">
	<Header onSettingsClick={() => { settingsOpen = true; }} />

	<main class="main-content container">
		{@render children()}
	</main>

	<SettingsPanel open={settingsOpen} onclose={() => { settingsOpen = false; }} />
	<FocusTimer />
</div>

<style>
	.app-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.main-content {
		flex: 1;
		padding-top: var(--space-xl);
		padding-bottom: var(--space-2xl);
	}
</style>
