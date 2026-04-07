# MATLAB Study Buddy - Project Context

## Purpose

Accessible study app for a friend with ADHD, dyslexia, and autism studying an Associate Degree in Engineering Technology at RMIT University. The course is **OENG1298 - Introduction to Digital Fundamentals**, which teaches MATLAB programming.

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

All routes need `+page.svelte` files created:

```
src/routes/
  +page.svelte              # Home - week selector with progress overview
  +layout.svelte            # EXISTS - app shell with Header, SettingsPanel, FocusTimer
  week/[weekNum]/
    +page.svelte            # Week overview (links to flashcards/quiz/cheatsheet)
    flashcards/+page.svelte # FlashcardDeck for the week
    quiz/+page.svelte       # QuizMode for the week
    cheatsheet/+page.svelte # Quick reference sheet
  review/+page.svelte       # Spaced repetition review (due cards across all weeks)
  settings/+page.svelte     # Full settings page
```

### Data Layer

Data files go in `src/lib/data/` as TypeScript modules exporting typed arrays.

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
- `Header.svelte` - Sticky nav with week links (W1-W6), Home, Review. Mobile hamburger menu. Hardcoded 6 weeks.

**Study:**
- `Flashcard.svelte` - Flip card with 3D animation (reduced-motion fallback), TTS, hints, code blocks, spaced-repetition rating (again/hard/good/easy)
- `FlashcardDeck.svelte` - Card navigation, shuffle, progress bar, arrow key nav. Props: `cards: CardData[], weekNum: number, topicName?: string`
- `QuizMode.svelte` - Quiz flow with progress, scoring, results screen. Props: `questions: QuizData[], weekNum: number`
- `QuizQuestion.svelte` - Handles multiple-choice (radio buttons), fill-blank, code-output question types
- `CodeBlock.svelte` - MATLAB syntax highlighter (keywords, builtins, comments, strings, numbers, >>)

**Accessibility:**
- `SettingsPanel.svelte` - Right sidebar modal. Font (system/OpenDyslexic/Atkinson), size (14-28px), line spacing (1.4-2.5), letter spacing (0-0.15em), theme (light/dark/high-contrast), reduced motion toggle, TTS enable + rate
- `TextToSpeech.svelte` - Speaker button, appears when TTS enabled. Uses Web Speech API with en-AU locale.

**Progress:**
- `ProgressBar.svelte` - Props: value (0-100), label?, size? ('sm'|'md')
- `StreakCounter.svelte` - Shows flame + streak days from progressStore
- `WeekProgress.svelte` - Card with flashcard progress bar, quiz best score, links to flashcards/quiz/cheatsheet. Props: weekNum, title

**Timer:**
- `FocusTimer.svelte` - Pomodoro timer (25min study / 5min break), floating bottom-right, expandable with SVG progress ring

### Stores (Svelte 5 runes-based)

**settingsStore** (`settings.svelte.ts`):
- Persists to localStorage key `'matlab-study-settings'`
- `init()`, `update(partial)`, `reset()`, `current` (getter)
- Applies theme/font/spacing to document.documentElement via data attributes + CSS custom properties

**progressStore** (`progress.svelte.ts`):
- Persists to localStorage key `'matlab-study-progress'`
- `init()`, `recordCardReview(cardId, quality)`, `markCardViewed(cardId, weekNum)`, `setWeekTotal(weekNum, total)`, `recordQuizScore(weekNum, score)`, `getDueCards()`, `getWeekStats(weekNum)`
- Card IDs follow format `w{weekNum}-c{cardNum}` for flashcard tracking
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

## Remaining Work

### Phase 1: Data Files (create in src/lib/data/)
- [ ] `weeks.ts` - Week metadata (titles, descriptions, topics)
- [ ] `week1.ts` - Flashcards + quiz questions for MATLAB Basics
- [ ] `week2.ts` - Flashcards + quiz for Vectors & Matrices
- [ ] `week3.ts` - Flashcards + quiz for Array Operations
- [ ] `week4.ts` - Flashcards + quiz for 2D Plotting
- [ ] `week5.ts` - Flashcards + quiz for Programming
- [ ] `week6.ts` - Flashcards + quiz for Data I/O & Functions

### Phase 2: Route Pages (create +page.svelte files)
- [ ] Home page (`/`) - Week grid with WeekProgress cards, StreakCounter, due cards summary
- [ ] Week overview (`/week/[weekNum]`) - Week details with study mode links
- [ ] Flashcards page (`/week/[weekNum]/flashcards`) - FlashcardDeck with week data
- [ ] Quiz page (`/week/[weekNum]/quiz`) - QuizMode with week questions
- [ ] Cheatsheet page (`/week/[weekNum]/cheatsheet`) - Quick reference for the week
- [ ] Review page (`/review`) - Spaced repetition review of due cards across all weeks
- [ ] Settings page (`/settings`) - Full settings (reuse SettingsPanel content)

### Phase 3: Polish
- [ ] Download OpenDyslexic + Atkinson Hyperlegible woff2 fonts to /static/fonts/
- [ ] Add +page.ts with prerender = true for static generation
- [ ] Test all accessibility features (keyboard nav, screen reader, TTS, themes)

## Accessibility Design Principles

1. **Dyslexia support**: OpenDyslexic font option, adjustable letter/line spacing, larger default font (18px)
2. **ADHD support**: Pomodoro timer, progress tracking, streaks for motivation, chunked content (flashcards)
3. **Autism support**: Predictable layout, reduced motion option, high contrast theme, clear visual hierarchy
4. **General**: WCAG AA compliance, 44px minimum tap targets, keyboard navigation, screen reader labels, text-to-speech
