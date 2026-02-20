# Together Landing Page Spec

Status: Approved
Date: 2026-02-19
Mode: build/fix/refactor (spec-executor requested by process, unavailable in current skill list; proceeding with equivalent manual workflow)

## Problem Statement
Together needs a complete, production-ready marketing landing page that clearly communicates the accountability value for couples: shared commitments, transparent progress, and respectful in-task communication.

## In Scope
- Fresh Svelte 5 + SvelteKit 2 + TypeScript project structure.
- Single-page landing implementation with these ordered sections:
  - Hero
  - Problem/Solution
  - Features
  - How it works (3 steps)
  - Trust/Safety
  - Testimonials
  - Final CTA band
  - Footer links
- Reusable Svelte components and centralized content model.
- Responsive layout (mobile/tablet/desktop).
- Accessibility baseline: semantic structure, focus visibility, color contrast, reduced-motion handling.
- Setup documentation and runnable scripts.

## Out of Scope
- Backend/authentication/data persistence.
- Real customer logos/testimonials beyond realistic placeholder copy.
- Localization/i18n.
- Analytics and A/B framework integration.

## Constraints
- Use idiomatic Svelte 5 + SvelteKit 2 patterns.
- Keep dependencies intentional and minimal.
- Maintainability-first file organization.
- Avoid heavy assets or overlapping design systems.

## Acceptance Criteria
1. Project runs in a fresh environment using documented commands.
2. Landing page contains all required sections in the requested order.
3. Design is responsive and polished across viewport sizes.
4. Accessibility baseline is implemented:
   - semantic sectioning
   - visible keyboard focus states
   - sufficient foreground/background contrast in default theme
   - `prefers-reduced-motion` fallback
5. Code is modular via reusable components and central content definitions.
6. At least one automated UI regression-oriented test validates key content rendering.

## File Impact Plan
- `package.json`
- `svelte.config.js`
- `vite.config.ts`
- `tsconfig.json`
- `.gitignore`
- `README.md`
- `src/app.html`
- `src/app.css`
- `src/routes/+layout.svelte`
- `src/routes/+page.svelte`
- `src/lib/__tests__/landing-page.test.ts`
- `src/lib/data/content.ts`
- `src/lib/components/SectionShell.svelte`
- `src/lib/components/SiteHeader.svelte`
- `src/lib/components/Hero.svelte`
- `src/lib/components/ProblemSolution.svelte`
- `src/lib/components/FeatureGrid.svelte`
- `src/lib/components/HowItWorks.svelte`
- `src/lib/components/TrustSafety.svelte`
- `src/lib/components/Testimonials.svelte`
- `src/lib/components/FinalCtaBand.svelte`
- `src/lib/components/SiteFooter.svelte`
- `static/favicon.svg`

## Test Plan
- Run `npm run check` for static/type checks.
- Run `npm run test` for component rendering regression test.
- Validate AC mapping in this document under Verification Evidence.

## Risks
- Dependency installation may be restricted in sandbox/network-limited environment.
- Visual fidelity on uncommon browsers may need follow-up QA.

## Verification Evidence
- Updated dependency matrix on 2026-02-19 to current compatible versions: `@sveltejs/kit@2.52.2`, `@sveltejs/adapter-auto@3.3.1`, `vite@6.3.5`, `vitest@3.2.4`, `svelte-check@4.1.6` to avoid runtime module alias failures such as `Cannot find module '__SERVER__/internal.js'`.
- Updated `package.json` on 2026-02-19 to pin all SvelteKit toolchain versions (removed caret ranges) so npm does not float to newer incompatible major/minor combinations.
- `npm install --verbose` attempted on 2026-02-19; failed due restricted network DNS resolution to npm registry (`ENOTFOUND registry.npmjs.org`).
- `npm run check` attempted on 2026-02-19; failed because dependencies are not installed (`svelte-kit: command not found`).
- `npm run test` attempted on 2026-02-19; failed because dependencies are not installed (`vitest: command not found`).

Acceptance Criteria evidence map:
1. AC1 (fresh run via documented commands): setup commands documented in `README.md`; runtime validation blocked by dependency install restriction in environment.
2. AC2 (required sections/order): implemented in ordered composition at `src/routes/+page.svelte`.
3. AC3 (responsive/polished): responsive grids/media queries and premium visual system in `src/app.css` plus component styles.
4. AC4 (a11y baseline): semantic sections/nav/landmarks, focus-visible outlines, contrast-conscious palette, and `prefers-reduced-motion` rules in `src/app.css` and section components.
5. AC5 (modular components/content model): reusable components in `src/lib/components` and centralized content in `src/lib/data/content.ts`.
6. AC6 (automated regression-oriented test): landing render regression test added at `src/lib/__tests__/landing-page.test.ts` (execution blocked by install restriction).
7. Post-implementation fix on 2026-02-19: moved test file out of routes from `src/routes/+page.test.ts` to `src/lib/__tests__/landing-page.test.ts` to comply with SvelteKit reserved `+` route file naming.
