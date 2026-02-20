# Together Light Theme Refresh Spec

Status: Approved
Date: 2026-02-19

## Problem Statement
The current visual theme feels too dark/gloomy for the intended warm, trustworthy brand tone.

## In Scope
- Convert the landing and legal pages to a light, warm premium theme.
- Preserve structure, content hierarchy, and micro-interactions.
- Maintain accessibility contrast and focus visibility.

## Out of Scope
- Content rewrite beyond minor tone-preserving color-context adjustments.
- Structural layout changes.

## Constraints
- Keep SvelteKit/Svelte component architecture intact.
- Keep responsive behavior and reduced-motion handling.

## Acceptance Criteria
1. Site no longer presents as dark-themed; primary surfaces are light.
2. Cards/sections remain visually distinct and polished.
3. Trust, legal, and CTA sections remain readable with strong contrast.
4. Existing tests continue to pass.

## File Impact Plan
- `src/app.css`
- `src/lib/components/Hero.svelte`
- `src/lib/components/FeatureGrid.svelte`
- `src/lib/components/HowItWorks.svelte`
- `src/lib/components/ProblemSolution.svelte`
- `src/lib/components/TrustSafety.svelte`
- `src/lib/components/Testimonials.svelte`
- `src/lib/components/FinalCtaBand.svelte`
- `src/lib/components/SiteHeader.svelte`
- `src/lib/components/SiteFooter.svelte`
- `src/routes/privacy/+page.svelte`
- `src/routes/terms/+page.svelte`

## Test Plan
- Run `npm run check`
- Run `npm run test`

## Risks
- Fine-grained color preference may require one additional iteration.

## Verification Evidence
- `npm run check` (2026-02-20): passed with 0 errors and 0 warnings.
- `npm run test` (2026-02-20): passed (`src/lib/__tests__/landing-page.test.ts`, 1 test).

Acceptance Criteria evidence map:
1. AC1 (site is no longer dark): global tokens/background/surfaces switched to light warm palette in `src/app.css`.
2. AC2 (distinct polished sections): hero preview, feature/problem/steps/testimonial/trust cards, CTA band, and footer all moved to light-surface gradients with clear contrast.
3. AC3 (trust/legal readability): updated trust cards and legal page heading dividers/text colors for light-mode readability.
4. AC4 (tests): static checks and tests remain green.
