# GitHub Pages Publish Spec

Status: Approved
Date: 2026-02-20

## Problem Statement
Project needs a reliable GitHub Pages publish path with correct SvelteKit static output and repository base-path compatibility.

## In Scope
- Configure SvelteKit for static output suitable for GitHub Pages.
- Add GitHub Actions workflow to build and deploy.
- Ensure key internal links and favicon are base-path safe.
- Document publish steps in README.

## Out of Scope
- Custom domain/DNS setup.
- CI for non-pages targets.

## Constraints
- Keep existing app behavior and tests.
- Use GitHub Actions Pages deployment flow.

## Acceptance Criteria
1. Project builds with `adapter-static`.
2. Workflow deploys `build/` artifact to GitHub Pages.
3. App works both for `username.github.io` and `username.github.io/repo` styles.
4. README contains clear publish instructions.
5. `npm run check` and `npm run test` pass.

## File Impact Plan
- `package.json`
- `svelte.config.js`
- `src/routes/+layout.svelte`
- `src/lib/components/SiteFooter.svelte`
- `src/lib/components/FinalCtaBand.svelte`
- `src/routes/terms/+page.svelte`
- `.github/workflows/deploy-pages.yml`
- `static/.nojekyll`
- `README.md`

## Test Plan
- Run `npm run check`
- Run `npm run test`
- Run `npm run build`

## Risks
- Repo Pages setting must be configured to use GitHub Actions.

## Verification Evidence
- `npm run check` (2026-02-20): passed (0 errors, 0 warnings).
- `npm run test` (2026-02-20): passed (`src/lib/__tests__/landing-page.test.ts`, 1 test).
- `npm run build` (2026-02-20): passed with `@sveltejs/adapter-static`, output written to `build/`.

Acceptance criteria mapping:
1. AC1 (static build): `svelte.config.js` now uses `@sveltejs/adapter-static` with output to `build/`.
2. AC2 (deploy workflow): `.github/workflows/deploy-pages.yml` builds and deploys Pages artifact from `build/`.
3. AC3 (base-path support): `svelte.config.js` uses environment-driven `BASE_PATH` in production and key links/favicon use `$app/paths`.
4. AC4 (README): publish instructions added under “Publish to GitHub Pages”.
5. AC5 (validation): `check`, `test`, and `build` completed successfully.
