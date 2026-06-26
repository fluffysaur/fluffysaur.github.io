# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start Vite dev server
npm run build    # tsc type-check + Vite production build
npm run preview  # preview production build locally
```

There is no lint script and no test suite. TypeScript strict mode (`noUnusedLocals`, `noUnusedParameters`) acts as the primary correctness gate — `npm run build` will fail on type errors.

## Stack

React 19 · TypeScript 6 · Tailwind v4 (via `@tailwindcss/vite` plugin, no `tailwind.config` file) · React Router v7 · Vite 8

## Architecture

### Design metaphor — VS Code Terminal

The UI deliberately mimics a VS Code / IDE shell. The chrome components are:

- **`ActivityBar`** — fixed left sidebar (56 px wide) with icon nav and the YJ logo mark
- **`Nav`** — top breadcrumb-style navigation bar
- **`StatusBar`** — fixed bottom bar
- **`Layout`** — wraps all routes with `ActivityBar` + `Nav` + `StatusBar`, renders `<Outlet />` for page content

`Layout` also registers a global `Cmd/Ctrl+L` shortcut that toggles light/dark theme.

### Routing (`src/main.tsx`)

```bash
/               → Home
/experience     → Experience (career history)
/projects       → Projects (project grid)
/projects/:id   → ProjectDetail (case study or film detail)
/about          → About
*               → redirect to /
```

All routes are children of `<Layout>`.

### Theming (`src/contexts/ThemeContext.tsx`)

Theme is `dark` (default) or `light`, stored in `localStorage` and applied as a `data-theme` attribute on `<html>`. **Do not use Tailwind's built-in dark mode.** All colour tokens are CSS custom properties defined in `src/index.css` under `:root` (dark) and `[data-theme="light"]`. The accent colour is `#f2cb05` (yellow), available as `var(--pv-accent)` / Tailwind's `bg-accent` / `text-accent`.

Light mode overrides for white-based Tailwind utility classes (e.g. `text-white/85`) are handled with explicit `[data-theme="light"]` selectors in `index.css` — add any new white utilities there if needed.

### Data sources

- **`src/data/projects.ts`** — source of truth for portfolio items. Each `Project` entry (typed in `src/types/index.ts`) has `cat: 'dev' | 'film'`, `highlight`, `live`, and optional `link`. Internal `link` values such as `/projects/interseed` open case studies; external URLs open in a new tab. Pre-filtered exports: `FEATURED_PROJECTS`, `STACK`.
- **`src/data/experience.ts`** — work history entries rendered on the Experience page.
- **`src/data/social.ts`** — social links consumed by footer and About page.
- **`src/data/testimonials.ts`** — testimonial entries for the home page strip.

### Case studies (`src/case-studies/`)

Each case study is a PascalCase `.tsx` file that exports:

1. `meta` — a `CaseMeta` object (id, title, subtitle, dates, role, team, tags, toc, prev/next links)
2. A named content component (e.g. `InterseedContent`) that renders the article body as JSX

The registry at `src/case-studies/registry.ts` maps all case IDs to their `{ meta, Content }` pairs and is imported by `ProjectDetail.tsx`. To add a new case study: create the file, add it to `registry.ts`, and set `link: "/projects/<id>"` on the project in `projects.ts`.

Shared case-study building blocks live in `src/components/ProjectDetail/` (not inside `src/case-studies/`).

### Fonts

`GothamSSm` (custom woff2, loaded in `index.css`) is the primary sans-serif. `SFMono-Regular` / Menlo is the monospace stack, used for terminal-flavoured UI elements.
