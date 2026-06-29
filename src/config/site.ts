// ── Site Configuration ──
// Single source of truth for all configurable values.
// To rebrand: clone this skeleton, edit this file, rebuild.
// Everything else — components, pages, layout — reads from here.

export const siteConfig = {
  // ── Identity ──
  name: 'BC Financial Search',
  legalName: 'BC FINANCIAL SEARCH LTD',
  tagline: 'Specialist accountancy practice and tax recruitment across the UK.',
  domain: 'bcfinancialsearch.co.uk',
  url: 'https://bcfinancialsearch.co.uk',

  // ── Colors (hex values — drives tailwind.config.ts) ──
  colors: {
    navy: '#0B1120',
    navy800: '#141c2e',
    navy700: '#1d273d',
    gold: '#B08D57',
    gold500: '#9a7846',
    gold600: '#7d6139',
    warmWhite: '#F5F0EB',
  },

  // ── Fonts ──
  fonts: {
    heading: '"Playfair Display", Garamond, serif',
    body: 'Inter, system-ui, -apple-system, sans-serif',
  },

  // ── Logo ──
  logo: {
    full: '/bc-financial-logo-full.svg',
    white: '/bc-financial-logo-white.webp',
    compact: '/bc-financial-logo-full.svg',
    alt: 'BC Financial Search',
    heights: { full: 40, white: 40, compact: 28 } as Record<string, number>,
  },

  // ── Contact ──
  contact: {
    email: 'ben@bcfinancialsearch.co.uk',
    phone: '07522 996561',
    phoneCompact: '07522996561',
    location: 'Manchester, United Kingdom',
  },

  // ── Company ──
  company: {
    number: '17287274',
    address: 'Centurion House, 129 Deansgate, Manchester, M3 3WR',
  },

  // ── Founder ──
  founder: {
    name: 'Ben Copsey',
    title: 'Founder and Director',
    linkedin: 'https://uk.linkedin.com/in/ben-copsey-826177a3',
  },

  // ── Navigation ──
  nav: [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'CANDIDATES', href: '/candidates' },
    { label: 'CLIENTS', href: '/clients' },
    { label: 'JOBS', href: '/jobs' },
  ],

  // ── Footer ──
  footer: {
    ctaHeadline: 'Start with a conversation.',
    ctaSubtext:
      'Whether you are considering your next career move or planning an important hire, speak directly with a specialist.',
    ctaButton: 'Get in touch',
    description:
      'Specialist recruitment for accountancy practices and in-house tax teams across the UK.',
    quickLinks: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Candidates', href: '/candidates' },
      { label: 'Clients', href: '/clients' },
      { label: 'Contact', href: '/contact' },
      { label: 'Manchester Finance Recruiters', href: '/finance-recruitment-agencies-manchester' },
    ],
    services: [
      'Audit & Assurance',
      'Accounts & Business Services',
      'Practice Tax',
      'Advisory',
      'Payroll & Bookkeeping',
      'In-House Tax',
    ],
  },

  // ── SEO / Metadata ──
  seo: {
    template: '%s | BC Financial Search',
    defaultTitle: 'Accountancy Practice & Tax Recruitment UK | BC Financial Search',
    defaultDescription:
      'Specialist accountancy practice and tax recruitment across the UK. Personal, proactive, relationship-driven.',
  },

  // ── JSON-LD Schema ──
  schema: {
    logo: 'https://bcfinancialsearch.co.uk/bc-financial-logo-transparent.webp',
    image: 'https://bcfinancialsearch.co.uk/ben-about-headshot.webp',
    foundingDate: '2026-06-19',
    services: [
      {
        name: 'Accountancy Practice Recruitment',
        description:
          'Specialist recruitment for accountancy practices: Tax, Audit & Assurance, Accounts & Business Services, Advisory, Payroll and Bookkeeping.',
      },
      {
        name: 'In-House Tax Recruitment',
        description:
          'Specialist recruitment for in-house tax teams: Corporate Tax, Indirect Tax, International Tax, Transfer Pricing, and Employment Tax.',
      },
    ],
  },

  // ── Admin ──
  admin: {
    loginLabel: 'BC Financial Search - Admin',
  },
} as const;
