<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';

	interface Props {
		onSettingsClick: () => void;
	}

	let { onSettingsClick }: Props = $props();

	const weeks = [
		{ num: 1, title: 'MATLAB Basics' },
		{ num: 2, title: 'Vectors & Matrices' },
		{ num: 3, title: 'Math Operations' },
		{ num: 4, title: '2D Plotting' },
		{ num: 5, title: 'Programming' },
		{ num: 6, title: 'Data I/O & Functions' }
	];

	let menuOpen = $state(false);
</script>

<header class="site-header">
	<div class="header-inner container">
		<a href="{base}/" class="logo">
			<span class="logo-text">MATLAB Study Buddy</span>
		</a>

		<nav class="nav-main" aria-label="Main navigation">
			<button
				class="menu-toggle"
				onclick={() => { menuOpen = !menuOpen; }}
				aria-expanded={menuOpen}
				aria-label="Toggle navigation menu"
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					{#if menuOpen}
						<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
					{:else}
						<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
					{/if}
				</svg>
			</button>

			<ul class="nav-links" class:open={menuOpen}>
				<li><a href="{base}/" class:active={page.url.pathname === (base || '/')} onclick={() => { menuOpen = false; }}>Home</a></li>
				{#each weeks as week}
					<li>
						<a
							href="{base}/week/{week.num}"
							class:active={page.url.pathname.startsWith(`${base}/week/${week.num}`)}
							onclick={() => { menuOpen = false; }}
						>
							W{week.num}
						</a>
					</li>
				{/each}
				<li>
					<a href="{base}/review" class:active={page.url.pathname === `${base}/review`} onclick={() => { menuOpen = false; }}>
						Review
					</a>
				</li>
			</ul>
		</nav>

		<button class="settings-btn" onclick={onSettingsClick} aria-label="Open accessibility settings">
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
				<circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
			</svg>
		</button>
	</div>
</header>

<style>
	.site-header {
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border-light);
		position: sticky;
		top: 0;
		z-index: 80;
	}

	.header-inner {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		height: 60px;
	}

	.logo {
		text-decoration: none;
		flex-shrink: 0;
	}

	.logo-text {
		font-weight: 700;
		font-size: var(--font-size-lg);
		color: var(--color-primary);
	}

	.nav-main {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.menu-toggle {
		display: none;
		background: none;
		color: var(--color-text);
		padding: var(--space-xs);
		min-height: var(--min-tap-target);
		min-width: var(--min-tap-target);
		align-items: center;
		justify-content: center;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: var(--space-xs);
		align-items: center;
	}

	.nav-links a {
		display: flex;
		align-items: center;
		padding: var(--space-xs) var(--space-sm);
		border-radius: 6px;
		font-size: var(--font-size-sm);
		font-weight: 500;
		color: var(--color-text-secondary);
		text-decoration: none;
		min-height: 36px;
		white-space: nowrap;
	}

	.nav-links a:hover {
		background: var(--color-surface-hover);
		color: var(--color-text);
	}

	.nav-links a.active {
		background: var(--color-primary-light);
		color: var(--color-primary);
		font-weight: 600;
	}

	.settings-btn {
		background: none;
		color: var(--color-text-secondary);
		padding: var(--space-xs);
		min-height: var(--min-tap-target);
		min-width: var(--min-tap-target);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.settings-btn:hover {
		color: var(--color-primary);
	}

	@media (max-width: 768px) {
		.menu-toggle {
			display: flex;
		}

		.nav-links {
			display: none;
			position: absolute;
			top: 60px;
			left: 0;
			right: 0;
			background: var(--color-surface);
			border-bottom: 1px solid var(--color-border);
			flex-direction: column;
			padding: var(--space-md);
			gap: var(--space-xs);
			box-shadow: 0 4px 12px var(--color-card-shadow);
		}

		.nav-links.open {
			display: flex;
		}

		.nav-links a {
			width: 100%;
			padding: var(--space-sm) var(--space-md);
		}
	}
</style>
