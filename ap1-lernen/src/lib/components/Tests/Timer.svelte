<script lang="ts">
	import { onDestroy } from 'svelte';

	export let durationMin: number;
	export let running = true;
	export let t: (de: string, en: string, es: string) => string;

	let remaining = durationMin * 60;
	export let elapsed = 0;
	let expired = false;
	let interval: ReturnType<typeof setInterval> | null = null;

	function tick() {
		elapsed += 1;
		remaining -= 1;
		if (remaining <= 0) {
			remaining = 0;
			expired = true;
			stop();
		}
	}

	function start() {
		if (interval) return;
		interval = setInterval(tick, 1000);
	}
	function stop() {
		if (interval) {
			clearInterval(interval);
			interval = null;
		}
	}

	$: if (running) start();
	else stop();

	onDestroy(stop);

	function fmt(s: number): string {
		const m = Math.floor(s / 60);
		const sec = s % 60;
		return `${m}:${sec.toString().padStart(2, '0')}`;
	}
</script>

<div class="timer" class:warn={remaining <= 300 && remaining > 0} class:expired>
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<circle cx="12" cy="12" r="9"></circle>
		<polyline points="12 7 12 12 15 14"></polyline>
	</svg>
	<span class="time">{fmt(remaining)}</span>
	{#if expired}
		<span class="msg">{t('Zeit abgelaufen', "Time's up", 'Tiempo agotado')}</span>
	{/if}
</div>

<style>
	.timer {
		display: inline-flex; align-items: center; gap: 0.4rem;
		padding: 0.35rem 0.75rem; border-radius: var(--radius-md);
		background: var(--color-bg-tertiary); color: var(--color-text-muted);
		font-variant-numeric: tabular-nums; font-weight: 700;
	}
	.timer.warn { color: var(--color-warning, #d97706); background: color-mix(in srgb, var(--color-warning, #d97706) 15%, transparent); }
	.timer.expired { color: var(--color-error); background: color-mix(in srgb, var(--color-error) 15%, transparent); }
	.msg { font-size: var(--text-xs); font-weight: 600; }
</style>
