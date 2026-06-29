import type { PublicPageMaps } from '@/site/types';

export const publicPageMaps = {
  home: {
    page: 'home',
    sections: [
      { id: 'hero', type: 'splitHero', variant: 'splitImage' },
      { id: 'stats', type: 'proofBand', variant: 'stats' },
      { id: 'audiences', type: 'audienceSplit', variant: 'twoColumn' },
      { id: 'why', type: 'featureGrid', variant: 'dark' },
      { id: 'about', type: 'aboutMosaic', variant: 'founderQuote' },
      { id: 'areas', type: 'areasOverview', variant: 'twoColumnList' },
      { id: 'contact', type: 'contactSection', variant: 'homeCard' },
    ],
  },
  about: {
    page: 'about',
    sections: [
      { id: 'hero', type: 'splitHero', variant: 'splitImage' },
      { id: 'stats', type: 'proofBand', variant: 'stats' },
      { id: 'approach', type: 'processSteps', variant: 'dottedLine' },
      { id: 'founder', type: 'founderInsight', variant: 'imageCopyQuote' },
      { id: 'values', type: 'featureGrid', variant: 'light' },
    ],
  },
  services: {
    page: 'services',
    sections: [
      { id: 'hero', type: 'splitHero', variant: 'splitImage' },
      { id: 'services', type: 'servicesCards', variant: 'roleCards' },
      { id: 'method', type: 'proofBand', variant: 'method' },
      { id: 'cta', type: 'centerCta', variant: 'white' },
    ],
  },
  candidates: {
    page: 'candidates',
    sections: [
      { id: 'hero', type: 'splitHero', variant: 'splitImage' },
      { id: 'benefits', type: 'proofBand', variant: 'benefits' },
      { id: 'steps', type: 'stepImageSplit', variant: 'copyImage' },
      { id: 'testimonials', type: 'testimonials', variant: 'darkThreeColumn' },
      { id: 'areas', type: 'areasCards', variant: 'warmCentered' },
    ],
  },
  clients: {
    page: 'clients',
    sections: [
      { id: 'hero', type: 'splitHero', variant: 'splitImage' },
      { id: 'benefits', type: 'proofBand', variant: 'benefits' },
      { id: 'approach', type: 'processSteps', variant: 'dottedLine' },
      { id: 'areas', type: 'areasCards', variant: 'warmCentered' },
      { id: 'testimonial', type: 'clientTestimonialSplit', variant: 'imageSplit' },
    ],
  },
  contact: {
    page: 'contact',
    sections: [
      { id: 'hero', type: 'splitHero', variant: 'splitImage' },
      { id: 'contact', type: 'contactSection', variant: 'warmCard' },
    ],
  },
} satisfies PublicPageMaps;

export function serialisePublicPageMaps(maps: PublicPageMaps) {
  return Object.fromEntries(
    Object.entries(maps).map(([page, map]) => [
      page,
      {
        page: map.page,
        sections: map.sections.map(({ id, type, variant }) => ({ id, type, variant })),
      },
    ]),
  );
}
