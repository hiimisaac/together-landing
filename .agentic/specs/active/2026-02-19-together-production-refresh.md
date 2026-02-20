# Together Production Refresh Spec

Status: Approved
Date: 2026-02-19

## Problem Statement
Current landing page is functionally complete but does not yet meet a high-production visual and interaction bar comparable to top-tier SaaS marketing sites.

## In Scope
- Visual redesign across all existing landing sections while preserving required section order.
- Upgraded typographic system, spacing system, color system, and component styling.
- Improved hero composition with realistic product preview feel.
- Consistent premium section treatments and CTA hierarchy.
- Motion polish with `prefers-reduced-motion` fallback.
- Resolve install/runtime drift risk by adding a dependency override for modern Svelte Vite plugin compatibility.

## Out of Scope
- New routes/pages beyond landing page.
- Backend functionality.
- Real customer assets.

## Constraints
- Keep SvelteKit 2 + Svelte 5 + TypeScript.
- Maintain accessibility baseline and responsive behavior.
- Keep reusable component structure.

## Acceptance Criteria
1. Visual quality is substantially elevated with a cohesive premium design language.
2. All required sections remain in requested order and have distinct, polished layouts.
3. Mobile/tablet/desktop layouts are responsive and readable.
4. Focus-visible states, semantic landmarks, and reduced-motion handling remain intact.
5. Dependency configuration includes guardrail against old vite-plugin-svelte resolution.

## File Impact Plan
- `src/app.css`
- `src/lib/components/SiteHeader.svelte`
- `src/lib/components/Hero.svelte`
- `src/lib/components/ProblemSolution.svelte`
- `src/lib/components/FeatureGrid.svelte`
- `src/lib/components/HowItWorks.svelte`
- `src/lib/components/TrustSafety.svelte`
- `src/lib/components/Testimonials.svelte`
- `src/lib/components/FinalCtaBand.svelte`
- `src/lib/components/SiteFooter.svelte`
- `src/lib/components/SectionShell.svelte`
- `package.json`
- `README.md`

## Test Plan
- Run `npm run check`
- Run `npm run test`
- Run `npm run dev` and verify runtime starts without route-file or server-internal module errors.

## Risks
- Local environment cache/lockfile drift can retain stale transitive dependencies.

## Verification Evidence
- `npm run check` (2026-02-19): passed with 0 errors and 0 warnings.
- `npm run test` (2026-02-19): passed (`src/lib/__tests__/landing-page.test.ts`, 1 test).
- `npm run dev` (2026-02-19): sandbox blocked local port bind with `listen EPERM ::1:5173`; requires local machine run for runtime smoke check.

Acceptance Criteria evidence map:
1. AC1 (elevated visual quality): implemented new premium visual system, typography, gradient depth, and refined component composition in `src/app.css` and section components.
2. AC2 (required sections/order preserved): section composition remains intact in `src/routes/+page.svelte` with redesigned internals.
3. AC3 (responsive): media-query behavior retained/improved across all major section components and global container sizing.
4. AC4 (a11y baseline): focus-visible styles, semantic structure, and `prefers-reduced-motion` handling preserved in `src/app.css` and components.
5. AC5 (dependency guardrail): added `overrides` for `@sveltejs/vite-plugin-svelte` in `package.json` and moved tests out of route-reserved filenames.
