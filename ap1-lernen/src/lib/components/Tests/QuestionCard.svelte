<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { marked } from 'marked';
	import type { Question, UserAnswer, QuestionResult, SelfGrade } from '$lib/types/test';

	export let question: Question;
	export let answer: UserAnswer | undefined = undefined;
	export let result: QuestionResult | null = null; // set once submitted
	export let assetBase = ''; // e.g. `${base}/tests/ap2/ap2-sommer-2026`
	export let t: (de: string, en: string, es: string) => string;

	const dispatch = createEventDispatcher<{
		answer: { id: string; answer: UserAnswer };
		selfgrade: { id: string; grade: SelfGrade };
	}>();

	$: locked = result !== null;

	function md(s?: string): string {
		if (!s) return '';
		return marked.parse(s, { breaks: true }) as string;
	}

	// ---- choice ----
	$: selected = answer?.kind === 'choice' ? answer.selected : [];
	function toggleChoice(key: string) {
		if (locked) return;
		let next: string[];
		if (question.type === 'single-choice') {
			next = [key];
		} else if (selected.includes(key)) {
			next = selected.filter((k) => k !== key);
		} else {
			// Cap at the required number of picks (mirrors the fixed answer boxes on the
			// IHK Lösungsbogen). At the limit, ignore further selections.
			const max = question.selectCount ?? Infinity;
			if (selected.length >= max) return;
			next = [...selected, key];
		}
		dispatch('answer', { id: question.id, answer: { kind: 'choice', selected: next } });
	}

	// ---- matching / ordering ----
	$: pairs = answer?.kind === 'pairs' ? answer.pairs : {};
	function setPair(leftKey: string, rightKey: string) {
		if (locked) return;
		dispatch('answer', {
			id: question.id,
			answer: { kind: 'pairs', pairs: { ...pairs, [leftKey]: rightKey } }
		});
	}

	// ---- numeric ----
	$: numericRaw = answer?.kind === 'numeric' ? answer.raw : '';
	function onNumeric(e: Event) {
		if (locked) return;
		dispatch('answer', {
			id: question.id,
			answer: { kind: 'numeric', raw: (e.target as HTMLInputElement).value }
		});
	}

	// ---- open ----
	$: openText = answer?.kind === 'open' ? answer.text : '';
	function onOpen(e: Event) {
		if (locked) return;
		dispatch('answer', {
			id: question.id,
			answer: { kind: 'open', text: (e.target as HTMLTextAreaElement).value }
		});
	}

	function pickSelf(grade: SelfGrade) {
		dispatch('selfgrade', { id: question.id, grade });
	}

	// review helpers
	$: correctSet = new Set(question.correct ?? []);
	function optionState(key: string): 'correct' | 'wrong' | 'neutral' {
		if (!locked) return 'neutral';
		const isCorrect = correctSet.has(key);
		const isSelected = selected.includes(key);
		if (isCorrect) return 'correct';
		if (isSelected && !isCorrect) return 'wrong';
		return 'neutral';
	}
	function rightLabel(key: string): string {
		return question.right?.find((r) => r.key === key)?.text ?? '–';
	}
</script>

<div
	class="q-card"
	class:correct={result?.correct === true}
	class:wrong={result?.correct === false && !result?.partial}
	class:partial={result?.partial === true}
>
	<div class="q-head">
		<span class="q-num">{question.number}</span>
		<div class="q-badges">
			{#if question.type === 'multiple-choice'}
				<span class="badge">{t('Mehrfachauswahl', 'Multiple answers', 'Selección múltiple')}{question.selectCount ? ` · ${question.selectCount}` : ''}</span>
			{:else if question.type === 'matching'}
				<span class="badge">{t('Zuordnung', 'Matching', 'Asignación')}</span>
			{:else if question.type === 'ordering'}
				<span class="badge">{t('Reihenfolge', 'Ordering', 'Orden')}</span>
			{:else if question.type === 'numeric'}
				<span class="badge">{t('Rechenaufgabe', 'Calculation', 'Cálculo')}</span>
			{:else if question.type === 'open'}
				<span class="badge">{t('Offene Frage', 'Open question', 'Pregunta abierta')}</span>
			{/if}
			{#if result}
				{#if result.correct === true}
					<span class="badge ok">✓ {t('Richtig', 'Correct', 'Correcto')}</span>
				{:else if result.partial}
					<span class="badge part">◐ {t('Teilweise', 'Partial', 'Parcial')} ({result.earned.toLocaleString('de-DE', { maximumFractionDigits: 2 })}/{result.possible})</span>
				{:else if result.correct === false}
					<span class="badge bad">✗ {t('Falsch', 'Wrong', 'Incorrecto')}</span>
				{:else}
					<span class="badge self">{t('Selbstbewertung', 'Self-assessed', 'Autoevaluación')}</span>
				{/if}
			{/if}
		</div>
	</div>

	{#if question.context}
		<div class="q-context">{@html md(question.context)}</div>
	{/if}

	<div class="q-prompt">{@html md(question.prompt)}</div>

	{#if question.images}
		{#each question.images as img}
			<img class="q-img" src="{assetBase}/{img}" alt="" />
		{/each}
	{/if}

	<!-- ================= INPUT / REVIEW ================= -->
	{#if question.type === 'single-choice' || question.type === 'multiple-choice'}
		<ul class="options">
			{#each question.options ?? [] as opt}
				<li>
					<label class="option state-{optionState(opt.key)}" class:selected={selected.includes(opt.key)}>
						<input
							type={question.type === 'single-choice' ? 'radio' : 'checkbox'}
							name={question.id}
							checked={selected.includes(opt.key)}
							disabled={locked}
							on:change={() => toggleChoice(opt.key)}
						/>
						<span class="opt-key">{opt.key}</span>
						<span class="opt-text">{opt.text}</span>
						{#if locked && correctSet.has(opt.key)}<span class="opt-mark ok">✓</span>{/if}
						{#if locked && selected.includes(opt.key) && !correctSet.has(opt.key)}<span class="opt-mark bad">✗</span>{/if}
					</label>
				</li>
			{/each}
		</ul>
	{:else if question.type === 'matching' || question.type === 'ordering'}
		<div class="matching">
			{#each question.left ?? [] as item}
				<div class="match-row">
					<span class="match-left">{item.text}</span>
					<select
						class="match-select"
						disabled={locked}
						value={pairs[item.key] ?? ''}
						on:change={(e) => setPair(item.key, (e.target as HTMLSelectElement).value)}
					>
						<option value="" disabled>{t('Bitte wählen', 'Please choose', 'Elegir')}…</option>
						{#each question.right ?? [] as r}
							<option value={r.key}>{r.key}) {r.text}</option>
						{/each}
					</select>
					{#if locked}
						{#if pairs[item.key] === question.correctPairs?.[item.key]}
							<span class="opt-mark ok">✓</span>
						{:else}
							<span class="match-correct">→ {question.correctPairs?.[item.key]}) {rightLabel(question.correctPairs?.[item.key] ?? '')}</span>
						{/if}
					{/if}
				</div>
			{/each}
		</div>
	{:else if question.type === 'numeric'}
		<div class="numeric">
			<input
				type="text"
				inputmode="decimal"
				placeholder={t('Ergebnis', 'Result', 'Resultado')}
				value={numericRaw}
				disabled={locked}
				on:input={onNumeric}
				class="numeric-input state-{result ? (result.correct ? 'correct' : 'wrong') : 'neutral'}"
			/>
			{#if question.answer?.unit}<span class="unit">{question.answer.unit}</span>{/if}
			{#if locked}
				<span class="match-correct">{t('Lösung', 'Answer', 'Solución')}: {question.answer?.value.toLocaleString('de-DE')} {question.answer?.unit ?? ''}</span>
			{/if}
		</div>
	{:else if question.type === 'open'}
		<textarea
			class="open-input"
			rows="6"
			placeholder={t('Deine Antwort / Notizen…', 'Your answer / notes…', 'Tu respuesta / notas…')}
			value={openText}
			disabled={locked}
			on:input={onOpen}
		></textarea>
	{/if}

	<!-- ================= SOLUTION (review) ================= -->
	{#if locked && question.solution}
		<div class="solution">
			<div class="solution-head">
				{t('Lösung', 'Solution', 'Solución')}
				{#if question.solutionOfficial === false}
					<span class="badge proposed">{t('Vorgeschlagen – nicht offiziell', 'Proposed – not official', 'Propuesta – no oficial')}</span>
				{/if}
			</div>
			<div class="solution-body">{@html md(question.solution)}</div>
			{#if question.solutionImages}
				{#each question.solutionImages as img}
					<img class="q-img" src="{assetBase}/{img}" alt="" />
				{/each}
			{/if}
		</div>

		{#if question.type === 'open'}
			<div class="self-grade">
				<span>{t('Wie hast du abgeschnitten?', 'How did you do?', '¿Cómo te fue?')}</span>
				<div class="self-buttons">
					<button class="sg ok" class:active={result?.selfGrade === 'correct'} on:click={() => pickSelf('correct')}>{t('Richtig', 'Correct', 'Correcto')}</button>
					<button class="sg part" class:active={result?.selfGrade === 'partial'} on:click={() => pickSelf('partial')}>{t('Teilweise', 'Partial', 'Parcial')}</button>
					<button class="sg bad" class:active={result?.selfGrade === 'incorrect'} on:click={() => pickSelf('incorrect')}>{t('Falsch', 'Incorrect', 'Incorrecto')}</button>
				</div>
			</div>
		{/if}
	{/if}
</div>

<style>
	.q-card {
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-left: 4px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: 1.25rem 1.5rem;
		margin-bottom: 1.25rem;
	}
	.q-card.correct { border-left-color: var(--color-success); }
	.q-card.wrong { border-left-color: var(--color-error); }
	.q-card.partial { border-left-color: var(--color-warning, #d97706); }

	.q-head { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
	.q-num {
		display: inline-flex; align-items: center; justify-content: center;
		min-width: 2rem; height: 2rem; padding: 0 0.5rem;
		background: var(--color-primary); color: #fff; font-weight: 700;
		border-radius: var(--radius-md);
	}
	.q-badges { display: flex; flex-wrap: wrap; gap: 0.375rem; }
	.badge {
		font-size: var(--text-xs); padding: 0.15rem 0.5rem; border-radius: var(--radius-sm);
		background: var(--color-bg-tertiary); color: var(--color-text-muted); font-weight: 600;
	}
	.badge.ok { background: color-mix(in srgb, var(--color-success) 20%, transparent); color: var(--color-success); }
	.badge.bad { background: color-mix(in srgb, var(--color-error) 20%, transparent); color: var(--color-error); }
	.badge.part { background: color-mix(in srgb, var(--color-warning, #d97706) 22%, transparent); color: var(--color-warning, #d97706); }
	.badge.self, .badge.proposed { background: color-mix(in srgb, var(--color-primary) 18%, transparent); color: var(--color-primary); }

	.q-context {
		background: var(--color-bg-tertiary); border-radius: var(--radius-md);
		padding: 0.5rem 0.85rem; margin-bottom: 0.75rem;
		font-size: var(--text-sm); color: var(--color-text-muted);
	}
	.q-prompt { margin-bottom: 1rem; font-weight: 500; }
	.q-prompt :global(p), .q-context :global(p), .solution-body :global(p) { margin: 0.25rem 0; }
	.q-img { max-width: 100%; border-radius: var(--radius-md); margin: 0.5rem 0; border: 1px solid var(--color-border); }

	.options { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
	.option {
		display: flex; align-items: flex-start; gap: 0.625rem;
		padding: 0.625rem 0.85rem; border: 1px solid var(--color-border);
		border-radius: var(--radius-md); cursor: pointer;
		transition: background var(--transition-fast), border-color var(--transition-fast);
	}
	.option:hover { background: var(--color-bg-tertiary); }
	.option.selected { border-color: var(--color-primary); background: color-mix(in srgb, var(--color-primary) 8%, transparent); }
	.option.state-correct { border-color: var(--color-success); background: color-mix(in srgb, var(--color-success) 10%, transparent); }
	.option.state-wrong { border-color: var(--color-error); background: color-mix(in srgb, var(--color-error) 10%, transparent); }
	.option input { margin-top: 0.2rem; }
	.opt-key { font-weight: 700; color: var(--color-text-muted); min-width: 1.1rem; }
	.opt-text { flex: 1; }
	.opt-mark { font-weight: 700; }
	.opt-mark.ok { color: var(--color-success); }
	.opt-mark.bad { color: var(--color-error); }

	.matching { display: flex; flex-direction: column; gap: 0.5rem; }
	.match-row { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
	.match-left { flex: 1; min-width: 200px; }
	.match-select, .numeric-input, .open-input {
		padding: 0.5rem 0.65rem; border: 1px solid var(--color-border);
		border-radius: var(--radius-md); background: var(--color-bg); color: var(--color-text);
		font-size: var(--text-sm);
	}
	.match-correct { font-size: var(--text-sm); color: var(--color-success); font-weight: 600; }

	.numeric { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
	.numeric-input { width: 160px; }
	.numeric-input.state-correct { border-color: var(--color-success); }
	.numeric-input.state-wrong { border-color: var(--color-error); }
	.unit { color: var(--color-text-muted); font-weight: 600; }

	.open-input { width: 100%; resize: vertical; font-family: inherit; }

	.solution {
		margin-top: 1rem; padding: 0.85rem 1rem;
		background: color-mix(in srgb, var(--color-primary) 6%, transparent);
		border: 1px solid color-mix(in srgb, var(--color-primary) 25%, transparent);
		border-radius: var(--radius-md);
	}
	.solution-head { font-weight: 700; margin-bottom: 0.4rem; display: flex; gap: 0.5rem; align-items: center; }
	.solution-body { font-size: var(--text-sm); }
	.solution-body :global(code) { background: var(--color-bg-tertiary); padding: 0.1rem 0.3rem; border-radius: 4px; }

	.self-grade { margin-top: 0.85rem; display: flex; flex-direction: column; gap: 0.4rem; }
	.self-grade > span { font-size: var(--text-sm); color: var(--color-text-muted); }
	.self-buttons { display: flex; gap: 0.5rem; flex-wrap: wrap; }
	.sg {
		padding: 0.4rem 0.85rem; border: 1px solid var(--color-border);
		border-radius: var(--radius-md); font-weight: 600; font-size: var(--text-sm);
		background: var(--color-bg);
	}
	.sg.ok.active { background: var(--color-success); color: #fff; border-color: var(--color-success); }
	.sg.part.active { background: var(--color-warning, #d97706); color: #fff; }
	.sg.bad.active { background: var(--color-error); color: #fff; border-color: var(--color-error); }
</style>
