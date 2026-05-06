# Tan Yi Jia Portfolio

Version 2 of my portfolio website, built with a VS Code terminal-inspired UI metaphor.

## Stack

- React 19
- TypeScript 6
- React Router 7
- Tailwind CSS v4 (via @tailwindcss/vite)
- Vite 8

## Scripts

- `npm run dev` - start the Vite dev server
- `npm run build` - run TypeScript checks and create production build
- `npm run preview` - preview the production build locally
- `npm run format` - format the repository with Prettier
- `npm run format:check` - validate formatting without changing files

## Formatting Rules

This repo now standardizes on 4-space indentation for code editing.

- Editor settings are committed in `.vscode/settings.json`
- Cross-editor defaults are in `.editorconfig`
- Prettier config is in `.prettierrc.json`

If formatting drifts, run:

```bash
npm run format
```

## Architecture

### Layout shell

- `src/components/Layout.tsx` wraps all routes
- `src/components/ActivityBar/ActivityBar.tsx` handles sidebar tabs and mobile drawer
- `src/components/Nav/Nav.tsx` handles tab chrome, search (desktop + mobile), and theme toggle
- `src/components/StatusBar.tsx` renders the fixed bottom status bar

### Routing

- `/` → Home
- `/experience` → Experience (full career history)
- `/projects` → Projects listing
- `/projects/:id` → ProjectDetail case study
- `/about` → About

### Theming

- Theme state lives in `src/contexts/ThemeContext.tsx`
- Design tokens and utility overrides live in `src/index.css`
- Theme is applied via `data-theme` on `html`

### Data sources

- `src/data/projects.ts` — source of truth for portfolio cards; `hasCase: true` enables a case study page
- `src/data/experience.ts` — work history rendered on the Experience page
- `src/data/social.ts` — social links for footer and About
- `src/data/testimonials.ts` — testimonials for the home page strip

## Case Study Authoring

### Where to edit content

- Narrative paragraphs and section order: `src/case-studies/*.tsx`
- Shared styles/tokens: `src/case-studies/styles.ts`
- Shared types: `src/case-studies/types.ts`
- Case registry: `src/case-studies/registry.ts`

### Reusable case-study building blocks

All shared UI components (headings, callouts, stats grids, TOC, prev/next nav, etc.) live in `src/components/ProjectDetail/`.

### Existing case files

- `src/case-studies/interseed.tsx`
- `src/case-studies/staffany.tsx`
- `src/case-studies/launchpad.tsx`
- `src/case-studies/rn-migration.tsx`

## How To Add A New Case Study

1. Add the case content file at `src/case-studies/your-case.tsx`
2. Export `meta` (a `CaseMeta` object) and `YourCaseContent` from it
3. Register it in `src/case-studies/registry.ts`
4. Add `hasCase: true` and matching `id` in `src/data/projects.ts`

## Validation Checklist

Before pushing:

```bash
npm run format:check
npm run build
```
