# Together Legal + Micro-Interactions Spec

Status: Approved
Date: 2026-02-19

## Problem Statement
Landing experience needs richer interaction polish, stronger concrete Trust/Safety framing, and complete legal pages for Terms and Privacy aligned to actual data tooling and PII collection.

## In Scope
- Add polished micro-interactions across landing UI components.
- Upgrade Trust/Safety content with explicit privacy and moderation framing.
- Implement full Terms and Conditions page.
- Implement full Privacy Policy page covering Firebase, Google Analytics, and email PII collection.
- Link footer/legal navigation to new pages.

## Out of Scope
- Backend enforcement logic.
- Legal counsel review and jurisdiction-specific attorney guidance.

## Constraints
- Keep existing SvelteKit 2 + Svelte 5 + TypeScript architecture.
- Preserve accessibility (focus states, reduced motion support, semantic structure).
- Keep landing section order unchanged.

## Acceptance Criteria
1. Landing page includes purposeful micro-interactions without harming readability/accessibility.
2. Trust/Safety section includes specific, credible statements about data handling and respectful communication.
3. `/privacy` renders a complete policy covering data categories, legal basis/uses, Firebase + Google Analytics, user rights, retention, and contact.
4. `/terms` renders complete terms covering eligibility, acceptable use, subscriptions/billing placeholder terms, disclaimers, limitation of liability, and termination.
5. Footer legal links navigate to the new legal pages.
6. `npm run check` and `npm run test` pass.

## File Impact Plan
- `src/app.css`
- `src/lib/components/Hero.svelte`
- `src/lib/components/FeatureGrid.svelte`
- `src/lib/components/HowItWorks.svelte`
- `src/lib/components/TrustSafety.svelte`
- `src/lib/components/Testimonials.svelte`
- `src/lib/components/SiteFooter.svelte`
- `src/lib/__tests__/landing-page.test.ts`
- `src/routes/privacy/+page.svelte`
- `src/routes/terms/+page.svelte`
- `README.md`

## Test Plan
- Run `npm run check`
- Run `npm run test`
- Verify legal route render + footer links in tests.

## Risks
- Legal text should still be reviewed by counsel before production launch.

## Verification Evidence
- `npm run check` (2026-02-19): passed with 0 errors and 0 warnings.
- `npm run test` (2026-02-19): passed (`src/lib/__tests__/landing-page.test.ts`, 1 test).

Acceptance Criteria evidence map:
1. AC1 (micro-interactions): implemented shared interaction primitives (`interactive-card`, `link-animated`, button hover polish, pulse status dots) in `src/app.css` and applied across hero/features/steps/testimonials/trust cards.
2. AC2 (Trust/Safety strengthened): replaced trust copy with concrete data/security/communication framing in `src/lib/components/TrustSafety.svelte`.
3. AC3 (`/privacy` complete policy): implemented full page in `src/routes/privacy/+page.svelte`, including Firebase, Google Analytics, email PII, retention, rights, and contact.
4. AC4 (`/terms` complete terms): implemented full page in `src/routes/terms/+page.svelte`, including acceptable use, billing terms, disclaimers, limitation of liability, and termination.
5. AC5 (legal links): footer now routes to `/privacy`, `/terms`, and `/privacy#cookies` in `src/lib/components/SiteFooter.svelte`.
6. AC6 (validation): `npm run check` and `npm run test` pass.
