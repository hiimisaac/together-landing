# Support Page for App Store Metadata

Status: Approved
Date: 2026-02-20

## Problem Statement
App Store Connect requires a reliable public Support URL. Current site lacks a dedicated support page suitable for review metadata.

## In Scope
- Add a first-class `/support` page with contact details and basic help guidance.
- Update footer support links to point to `/support`.
- Keep existing legal and landing behavior unchanged.

## Out of Scope
- Ticketing backend or forms.
- Knowledge base system.

## Constraints
- Must be static and prerenderable for GitHub Pages.
- Maintain existing design language/accessibility.

## Acceptance Criteria
1. `/support` route exists and renders useful support contact/help content.
2. Footer Support links route to `/support` (with optional section anchors).
3. `npm run check`, `npm run test`, and `npm run build` pass.

## File Impact Plan
- `src/routes/support/+page.svelte`
- `src/lib/components/SiteFooter.svelte`
- `src/lib/__tests__/landing-page.test.ts`

## Test Plan
- Run `npm run check`
- Run `npm run test`
- Run `npm run build`

## Risks
- None significant; static content only.

## Verification Evidence
- `npm run check` (2026-02-20): passed with 0 errors and 0 warnings.
- `npm run test` (2026-02-20): passed (`src/lib/__tests__/landing-page.test.ts`, 1 test).
- `npm run build` (2026-02-20): passed with static output written to `build/`.

Acceptance Criteria mapping:
1. AC1 (`/support` exists): implemented at `src/routes/support/+page.svelte` with contact/help/privacy sections.
2. AC2 (footer support links): updated to `/${base}/support` and section anchors in `src/lib/components/SiteFooter.svelte`.
3. AC3 (validation): check/test/build all passed.
