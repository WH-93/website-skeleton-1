// Component tests for extracted components
// Run: npx tsx --test src/__tests__/components.test.ts
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { siteConfig } from '../config/site';

describe('HomeHero', () => {
  it('renders hero headline with three lines', async () => {
    const { HomeHero } = await import('../components/home-hero');
    const { renderToStaticMarkup } = await import('react-dom/server');
    const { createElement } = await import('react');

    const html = renderToStaticMarkup(createElement(HomeHero));
    assert.ok(html.includes('Specialist Search'), 'should contain headline line 1');
    assert.ok(html.includes('Personal Service'), 'should contain headline line 2');
    assert.ok(html.includes('Lasting Fit'), 'should contain headline line 3');
  });

  it('renders hero CTAs', async () => {
    const { HomeHero } = await import('../components/home-hero');
    const { renderToStaticMarkup } = await import('react-dom/server');
    const { createElement } = await import('react');

    const html = renderToStaticMarkup(createElement(HomeHero));
    assert.ok(html.includes('View current roles'), 'should have jobs CTA');
    assert.ok(html.includes('Start a career conversation'), 'should have contact CTA');
    assert.ok(html.includes('Discuss your hiring plans'), 'should have clients CTA');
  });

  it('renders hero image', async () => {
    const { HomeHero } = await import('../components/home-hero');
    const { renderToStaticMarkup } = await import('react-dom/server');
    const { createElement } = await import('react');

    const html = renderToStaticMarkup(createElement(HomeHero));
    assert.ok(html.includes('placeholder-manchester-cityscape'), 'should include hero image');
  });
});

describe('ContactCard', () => {
  it('renders email contact', async () => {
    const { ContactCard } = await import('../components/contact-card');
    const { renderToStaticMarkup } = await import('react-dom/server');
    const { createElement } = await import('react');

    const contacts = [
      { icon: 'mail' as const, label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
      { icon: 'phone' as const, label: 'Phone', value: siteConfig.contact.phoneCompact, href: `tel:${siteConfig.contact.phoneCompact}` },
      { icon: 'location' as const, label: 'Location', value: siteConfig.contact.location, href: null },
    ];

    const html = renderToStaticMarkup(createElement(ContactCard, { contacts }));
    assert.ok(html.includes(siteConfig.contact.email), 'should render email');
  });

  it('renders phone contact', async () => {
    const { ContactCard } = await import('../components/contact-card');
    const { renderToStaticMarkup } = await import('react-dom/server');
    const { createElement } = await import('react');

    const contacts = [
      { icon: 'phone' as const, label: 'Phone', value: siteConfig.contact.phoneCompact, href: `tel:${siteConfig.contact.phoneCompact}` },
    ];

    const html = renderToStaticMarkup(createElement(ContactCard, { contacts }));
    assert.ok(html.includes(siteConfig.contact.phoneCompact), 'should render phone');
  });
});
