# LEARNINGS

Issue: Module format conflict and Tailwind v4 PostCSS error.

Root Cause: 
1. `npm init -y` defaults to `"type": "commonjs"`, but Next.js and the modern source code used ESM (`import`/`export`).
2. Tailwind CSS v4 requires `@tailwindcss/postcss` instead of the standard `tailwindcss` plugin in `postcss.config.js`.

Solution: 
1. Set `"type": "module"` in `package.json`.
2. Installed `@tailwindcss/postcss` and updated `postcss.config.js`.
3. Updated `globals.css` to use `@import "tailwindcss";`.

Date: 2026-03-22

Universal Rule: When manually initializing a Next.js project with Tailwind CSS, always explicitly set `"type": "module"` in `package.json` and ensure Tailwind v4 compatibility by using `@tailwindcss/postcss` and the new CSS import syntax.
