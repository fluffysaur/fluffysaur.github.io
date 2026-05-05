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
- `src/components/Nav.tsx` handles tab chrome, search, and theme toggle
- `src/components/StatusBar.tsx` renders the fixed bottom status bar

### Routing

- `/` -> Home
- `/work` -> Work listing
- `/work/:id` -> Work detail case study
- `/about` -> About

### Theming

- Theme state lives in `src/contexts/ThemeContext.tsx`
- Design tokens and utility overrides live in `src/index.css`
- Theme is applied via `data-theme` on `html`

### Project data

- `src/data/projects.ts` is the source of truth for portfolio cards
- `hasCase: true` controls whether a work item opens a case study page

## Case Study Authoring (Important)

Case studies were refactored for easier manual editing.

### Where to edit content

- Edit repeated content arrays in `src/case-studies/data/*.data.ts`
- Edit narrative paragraphs and section order in `src/case-studies/*.tsx`

### Reusable case-study building blocks

- Shared components: `src/case-studies/components/`
- Shared tokens/styles: `src/case-studies/styles.ts`
- Shared types: `src/case-studies/types.ts`
- Case registry: `src/case-studies/registry.ts`

### Existing case files

- `src/case-studies/interseed.tsx`
- `src/case-studies/staffany.tsx`
- `src/case-studies/launchpad.tsx`
- `src/case-studies/rn-migration.tsx`

## How To Add A New Case Study

1. Add the case content file in `src/case-studies/your-case.tsx`
2. Add optional repeatable content data in `src/case-studies/data/your-case.data.ts`
3. Export `meta` and `YourCaseContent` from the case file
4. Register it in `src/case-studies/registry.ts`
5. Add `hasCase: true` and matching `id` in `src/data/projects.ts`

## Validation Checklist

Before pushing:

```bash
npm run format:check
npm run build
```
