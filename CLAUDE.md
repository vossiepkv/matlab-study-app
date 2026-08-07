# Study Buddy - Project Context

## Purpose

Accessible **multi-subject** study app for a friend with ADHD, dyslexia, and autism studying an Associate Degree in Engineering Technology at RMIT University.

The app is a dashboard over four subjects, each following the **same structure and features** (modules → flashcards / quiz / cheat sheet, plus optional translate / lab):

| Subject | Slug | Status |
|---------|------|--------|
| Mathematics | `maths` | populated (Modules 0–15) |
| Digital Fundamentals (MATLAB) — **OENG1298** | `matlab` | fully populated (Modules 1–7) |
| Engineering Sciences | `eng-science` | placeholder |
| Engineering Materials — **PROC2097** | `eng-materials` | in progress (Modules 1–2) |

**Terminology:** a unit of study within a subject is a **Module** (the UI says "Module N"). The MATLAB content was originally authored as "weeks", so some internal data files (`weekN.ts`, `weeks.ts`) and translation/lab getters still use the `week` name — these are the MATLAB module data.

To add content for a placeholder subject, populate its entry in `src/lib/data/subjects.ts` (`content` map) with `modules` metadata + per-module `cards`/`quiz` (and optionally wire translations/labs).

## Course Content (from PDFs in /Desktop/RMIT/Week 1-6/)

Each week has 3 PDFs: Tutorial Note, Simulation Lab Note, and Solution.

| Week | Topic | Key Concepts |
|------|-------|-------------|
| 1 | MATLAB Basics | Environment (command window, workspace, editor), variables, arithmetic operators (+,-,*,/,^), operator precedence, semicolon suppression, elementary functions (sin, cos, sqrt, log, abs, etc.), error messages |
| 2 | Vectors & Matrices | Row vectors (comma/space), column vectors (semicolon), colon notation (start:step:end), linspace(start,stop,n), transpose ('), indexing with parentheses, extracting subsets, creating matrices |
| 3 | Array Operations | Array addition/subtraction (same dimensions), matrix multiplication (* follows linear algebra rules, inner dimensions must match, A*B != B*A), element-wise operations (.* ./ .^), identity matrix (eye), inverse (inv/^-1), determinant (det), left division (\), right division (/), solving AX=B |
| 4 | 2D Plotting | plot(x,y), line specifiers (style: - -- : -.), color specifiers (r g b c m y k w), marker types (+ o * . x ^ v s d p h), property name/value (LineWidth, MarkerSize, MarkerEdgeColor, MarkerFaceColor), fplot('function', limits), xlabel, ylabel, title, legend, grid, hold on/off, subplot |
| 5 | Programming | Relational operators (< > <= >= == ~=), logical operators (& \| ~ && \|\|), if/elseif/else/end, switch/case/otherwise/end, for loops, while loops, break/continue, nested loops |
| 6 | Data Import/Export & Functions | load command (.mat, .txt), save command, xlsread/xlswrite, csvread/csvwrite, user-defined functions (function [outputs] = name(inputs)), local vs global variables, subfunctions |

## Tech Stack

- **SvelteKit** with static adapter (SPA mode with fallback: 'index.html')
- **Svelte 5** (runes: $state, $derived, $effect, $props)
- **TypeScript**
- **Vite 8**
- No external UI libraries - custom CSS with design tokens

## Architecture

### Routing Structure

```
src/routes/
  +page.svelte                              # Dashboard - subject grid + global streak/due
  +layout.svelte                            # App shell with Header, SettingsPanel, FocusTimer
  [subject]/
    +page.svelte                            # Subject home - module grid (empty-state for placeholders)
    module/[moduleNum]/
      +page.svelte                          # Module overview (links to study modes)
      flashcards/+page.svelte               # FlashcardDeck for the module
      quiz/+page.svelte                      # QuizMode for the module
      cheatsheet/+page.svelte                # Quick reference sheet
      translate/+page.svelte                 # MathTranslator (MATLAB only)
      lab/+page.svelte                       # LabWalkthrough (MATLAB only)
  review/+page.svelte                       # Spaced repetition review (due cards across ALL subjects)
  settings/+page.svelte                     # Full settings page
```

Pure SPA (`fallback: 'index.html'`), so `[subject]`/`[moduleNum]` are client-rendered — no prerender entries. Invalid subject/module slugs render a not-found state.

### Data Layer

`src/lib/data/subjects.ts` is the multi-subject registry + central API:
- `subjects: SubjectMeta[]` (slug, title, shortTitle, icon, description, courseCode?) and `getSubject(slug)`
- `content: Record<slug, { modules, cards, quiz }>` — MATLAB is populated from the existing `weekN.ts`/`weeks.ts` files; other subjects are empty placeholders
- Subject-aware getters: `getModules(subject)`, `getModule(subject, num)`, `getModuleCards(subject, num)`, `getModuleQuiz(subject, num)`, `getModuleTranslations(subject, num)`, `getModuleLabs(subject, num)` (translations/labs return `[]` for non-MATLAB)
- `DeckCard` = `CardData & { subjectSlug, moduleNum }`; `toDeckCards(subject, num, cards)` tags cards so a deck can record progress; `getAllDeckCards()` (global review); `cardKey(subject, cardId)` → namespaced progress key like `"matlab:w1-c01"`
- `ModuleMeta` is an alias of the original `WeekMeta`

`src/lib/data/index.ts` is the barrel — import everything from `$lib/data`.

The per-week data files (`weekN.ts`, `weeks.ts`, `translations.ts`, `labs.ts`) are the MATLAB module content and keep their original `week` naming/IDs (`w{n}-c{nn}`).

**Flashcard data shape:**
```typescript
interface CardData {
  id: string;       // Format: "w{weekNum}-c{cardNum}" e.g. "w1-c01"
  type: 'concept' | 'code' | 'list';
  front: string;    // Question
  back: string | string[];  // Answer (string[] for list type)
  code?: string;    // MATLAB code snippet
  hint?: string;    // Optional hint
}
```

**Quiz data shape:**
```typescript
interface QuizData {
  id: string;       // Format: "w{weekNum}-q{num}"
  type: 'multiple-choice' | 'fill-blank' | 'code-output';
  question: string;
  options?: string[];        // For multiple-choice
  correctIndex?: number;     // For multiple-choice (0-based)
  answer?: string;           // For fill-blank/code-output
  acceptableAnswers?: string[];  // Alternative correct answers
  code?: string;             // Code snippet shown with question
  explanation: string;       // Shown after answering
}
```

**Week metadata shape:**
```typescript
interface WeekMeta {
  num: number;
  title: string;
  description: string;
  topics: string[];
}
```

### Existing Components (all working, do not modify unless needed)

**Layout:**
- `Header.svelte` - Sticky nav: Dashboard, one link per subject (from `subjects` registry), Review. Mobile hamburger menu.

**Study:**
- `Flashcard.svelte` - Flip card with 3D animation (reduced-motion fallback), TTS, hints, code blocks, spaced-repetition rating (again/hard/good/easy)
- `FlashcardDeck.svelte` - Card navigation, shuffle, progress bar, arrow key nav. Props: `cards: DeckCard[], topicName?: string` (each `DeckCard` carries its own `subjectSlug`/`moduleNum`, so a mixed-subject review deck records progress correctly)
- `QuizMode.svelte` - Quiz flow with progress, scoring, results screen. Props: `questions: QuizData[], subject: string, moduleNum: number`
- `QuizQuestion.svelte` - Handles multiple-choice (radio buttons), fill-blank, code-output question types
- `CodeBlock.svelte` - MATLAB syntax highlighter (keywords, builtins, comments, strings, numbers, >>)

**Accessibility:**
- `SettingsPanel.svelte` - Right sidebar modal. Font (system/OpenDyslexic/Atkinson), size (14-28px), line spacing (1.4-2.5), letter spacing (0-0.15em), theme (light/dark/high-contrast), reduced motion toggle, TTS enable + rate
- `TextToSpeech.svelte` - Speaker button, appears when TTS enabled. Uses Web Speech API with en-AU locale.

**Progress:**
- `ProgressBar.svelte` - Props: value (0-100), label?, size? ('sm'|'md')
- `StreakCounter.svelte` - Shows flame + streak days from progressStore
- `ModuleProgress.svelte` - Card with flashcard progress bar, quiz best score, links to flashcards/quiz/cheatsheet. Props: `subjectSlug, moduleNum, title`. (Used on the subject home page; replaced the old `WeekProgress`.)

**Dashboard:**
- `SubjectCard.svelte` - Dashboard tile per subject: icon, title, course code, aggregated progress bar, module count. Renders a "Content coming soon" state for placeholder subjects. Props: `subject: SubjectMeta`

**Timer:**
- `FocusTimer.svelte` - Pomodoro timer (25min study / 5min break), floating bottom-right, expandable with SVG progress ring

### Stores (Svelte 5 runes-based)

**settingsStore** (`settings.svelte.ts`):
- Persists to localStorage key `'matlab-study-settings'`
- `init()`, `update(partial)`, `reset()`, `current` (getter)
- Applies theme/font/spacing to document.documentElement via data attributes + CSS custom properties

**progressStore** (`progress.svelte.ts`):
- Persists to localStorage key `'matlab-study-progress-v2'` (v2 = subject-namespaced; old un-namespaced data is intentionally reset)
- All keys are namespaced by subject: card keys `"{subject}:{cardId}"` (use `cardKey()`), module-stats keys `"{subject}:{moduleNum}"`
- `init()`, `recordCardReview(cardKey, quality)`, `markCardViewed(cardKey, subject, moduleNum)`, `setModuleTotal(subject, moduleNum, total)`, `recordQuizScore(subject, moduleNum, score)`, `getDueCards()` (returns namespaced keys), `getModuleStats(subject, moduleNum)`
- Streak tracking (consecutive study days)

**timerStore** (`timer.svelte.ts`):
- States: idle -> studying (25min) -> break (5min) -> idle
- `start()`, `resume()`, `pause()`, `reset()`
- Getters: state, secondsLeft, display, isRunning, progress

### Utils

- `localStorage.ts` - `loadFromStorage<T>(key, fallback)`, `saveToStorage(key, value)` - SSR-safe
- `spacedRepetition.ts` - SM-2 algorithm adapted. `createDefaultProgress()`, `reviewCard(progress, quality)`, `isDueForReview(progress)`
- `speech.ts` - `speak(text, rate)`, `stopSpeaking()`, `isSpeechSupported()` - Web Speech API wrapper, en-AU

### CSS / Theming

Global styles in `src/app.css`:
- **3 themes**: light (default), dark, high-contrast (pure black/white + gold primary)
- **3 font options**: system (Segoe UI), OpenDyslexic (needs woff2 in /static/fonts/), Atkinson Hyperlegible
- **Design tokens**: --color-*, --font-size-*, --space-*, --card-*, --code-*, --min-tap-target (44px)
- **Accessibility**: 3px focus-visible outline, .sr-only utility, prefers-reduced-motion media query, 18px base font, 1.8 line-height
- **Responsive**: 768px breakpoint for mobile

### Build

```bash
npm run dev      # Vite dev server
npm run build    # Static build to /build
npm run preview  # Preview built site
```

Static adapter with `fallback: 'index.html'` for SPA client-side routing.

## Status & Remaining Work

**Done:** Multi-subject restructure (dashboard → subjects → modules → study modes), MATLAB content (Modules 1–7: flashcards, quiz, cheat sheet, translate, lab), subject-namespaced progress, all route pages, settings.

**Remaining:**
- [ ] Author remaining `eng-materials` modules (source PDFs live in `/Desktop/U/Eng-Mat/<week>/`; Modules 1–2 done in `src/lib/data/eng-materials/`) and all of `eng-science`.
- [ ] Download OpenDyslexic + Atkinson Hyperlegible woff2 fonts to /static/fonts/
- [ ] Full accessibility pass (keyboard nav, screen reader, TTS, themes) across the new dashboard/subject pages
- [ ] Build a **learning pathway for maths**: a continuous progression from the basics (Module 0 "Algebra Foundations" — variables, like terms, BODMAS, expanding brackets, index laws, solving/rearranging simple equations) up to the level assumed by the actual maths class (vectors, complex numbers, differentiation, integration, functions of several variables). Fill the gap between Module 0 basics and Module 1+ course content with intermediate revision (e.g. quadratics, surds, rationalising, algebraic fractions, trig/log basics) so a student can start from Module 0 and be prepared for the course modules. Sequence the modules so each builds on the previous.

### Adding content to a placeholder subject
1. Create per-module data (cards/quiz) following the `CardData`/`QuizData` shapes; reuse the `w{n}-c{nn}` ID convention.
2. In `subjects.ts`, replace that subject's `emptyContent()` with a `SubjectContent` containing `modules` (`ModuleMeta[]`) + `cards`/`quiz` records keyed by module number.
3. No routing/store changes needed — the generic `[subject]/module/[moduleNum]` routes pick it up automatically.

## Accessibility Design Principles

1. **Dyslexia support**: OpenDyslexic font option, adjustable letter/line spacing, larger default font (18px)
2. **ADHD support**: Pomodoro timer, progress tracking, streaks for motivation, chunked content (flashcards)
3. **Autism support**: Predictable layout, reduced motion option, high contrast theme, clear visual hierarchy
4. **General**: WCAG AA compliance, 44px minimum tap targets, keyboard navigation, screen reader labels, text-to-speech
