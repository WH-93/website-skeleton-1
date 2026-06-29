// Story-map tests for the reusable public marketing skeleton.
// Run: npx tsx --test src/__tests__/story-maps.test.ts
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import publicPagesJson from '../site/story-maps/public-pages.json';
import { RenderPageMap } from '../components/page-renderer/render-page-map';
import { bcFinancialProfile } from '../site/profiles/bc-financial';
import { publicPageMaps, serialisePublicPageMaps } from '../site/story-maps/public-pages';

describe('public marketing story maps', () => {
  it('cover every public marketing page in a JSON-shaped map', () => {
    assert.deepEqual(
      Object.keys(publicPageMaps),
      ['home', 'about', 'services', 'candidates', 'clients', 'contact'],
    );

    for (const [page, map] of Object.entries(publicPageMaps)) {
      assert.equal(map.page, page);
      assert.ok(map.sections.length > 0, `${page} should have at least one section`);
      for (const section of map.sections) {
        assert.equal(typeof section.id, 'string');
        assert.equal(typeof section.type, 'string');
        assert.equal(typeof section.variant, 'string');
      }
    }
  });

  it('keeps the checked-in JSON story-map mirror in sync with the typed maps', () => {
    assert.deepEqual(publicPagesJson, serialisePublicPageMaps(publicPageMaps));
  });

  it('renders the preserved BC Financial homepage through the story-map renderer', () => {
    const html = renderToStaticMarkup(
      createElement(RenderPageMap, { map: publicPageMaps.home, profile: bcFinancialProfile }),
    );

    assert.ok(html.includes('Specialist Search'), 'home hero headline should be preserved');
    assert.ok(html.includes('A career move built around what matters to you'), 'home audience split should render');
    assert.ok(html.includes('Your priorities shape the search'), 'home contact section should render');
  });

  it('renders all public marketing pages from profile content rather than hardcoded page JSX', () => {
    const expectations = {
      about: 'I listen. I search. I stay involved.',
      services: 'Focused coverage. Considered delivery.',
      candidates: 'Specialist knowledge. Wider market access.',
      clients: 'A considered approach to every search.',
      contact: 'Start with a',
    } as const;

    for (const [page, expectedText] of Object.entries(expectations)) {
      const html = renderToStaticMarkup(
        createElement(RenderPageMap, { map: publicPageMaps[page as keyof typeof publicPageMaps], profile: bcFinancialProfile }),
      );
      assert.ok(html.includes(expectedText), `${page} should render expected content`);
    }
  });
});
