# Together Landing (SvelteKit)

Marketing landing page for Together, an accountability app for couples.

## Requirements
- Node.js 20+
- npm 10+

## Setup
```bash
npm install
npm run dev
```

If you switch dependency versions or see SvelteKit runtime import errors, run a clean reinstall:
```bash
rm -rf node_modules package-lock.json .svelte-kit
npm install
```

## Scripts
- `npm run dev` start local dev server
- `npm run build` build production bundle
- `npm run preview` preview production build locally
- `npm run check` run Svelte/TypeScript checks
- `npm run test` run component test suite

## Publish to GitHub Pages
1. Push this project to a GitHub repository.
2. In GitHub: `Settings -> Pages -> Build and deployment -> Source`, select `GitHub Actions`.
3. Ensure your default branch is `main`.
4. Push to `main` and the workflow at `.github/workflows/deploy-pages.yml` will deploy automatically.

Notes:
- Project Pages (`username.github.io/repo`) and User/Org Pages (`username.github.io`) are both supported.
- Static output is generated to `build/` via SvelteKit `adapter-static`.

## Project structure
- `src/routes/+page.svelte` page composition and section order
- `src/routes/privacy/+page.svelte` privacy policy
- `src/routes/terms/+page.svelte` terms and conditions
- `src/lib/components/*` reusable section components
- `src/lib/data/content.ts` centralized landing copy/content model
- `src/app.css` global design tokens, layout utilities, accessibility behavior

## Compliance note
Legal pages are comprehensive production-style drafts tailored to the described stack (Firebase, Google Analytics, email PII), but should still be reviewed by qualified counsel before launch.
