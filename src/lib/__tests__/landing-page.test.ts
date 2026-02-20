import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Page from '../../routes/+page.svelte';

describe('landing page', () => {
  it('renders required conversion, trust, and legal links', () => {
    render(Page);

    expect(screen.getByRole('heading', { level: 1, name: /clarity in commitments/i })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: /three steps to cleaner follow-through/i })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: /built for private coordination/i })).toBeTruthy();
    expect(screen.getAllByRole('link', { name: /start free trial/i }).length).toBeGreaterThanOrEqual(1);

    expect(screen.getByRole('link', { name: 'Privacy' }).getAttribute('href')).toBe('/privacy');
    expect(screen.getByRole('link', { name: 'Terms' }).getAttribute('href')).toBe('/terms');
    expect(screen.getByRole('link', { name: 'Help center' }).getAttribute('href')).toBe('/support');
  });
});
