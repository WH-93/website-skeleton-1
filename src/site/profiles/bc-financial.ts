import { siteConfig } from '@/config/site';
import type { SiteProfile } from '@/site/types';

const contacts = [
  { icon: 'mail' as const, label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: 'phone' as const, label: 'Phone', value: siteConfig.contact.phoneCompact, href: `tel:${siteConfig.contact.phoneCompact}` },
  { icon: 'location' as const, label: 'Location', value: siteConfig.contact.location, href: null },
];

const stats = [
  { icon: 'person' as const, value: '12 YEARS', label: 'Specialist market experience' },
  { icon: 'people' as const, value: '200+', label: 'Successful placements' },
  { icon: 'location' as const, value: 'UK-WIDE', label: 'A trusted network across the UK' },
  { icon: 'star' as const, value: 'LONG-TERM RELATIONSHIPS', label: 'Built beyond a single placement' },
];

const approachSteps = [
  { icon: 'person' as const, title: '1. Listen', desc: 'I begin with the detail behind the brief or career move: the team, ambitions, motivations, culture and what a successful outcome needs to look like.' },
  { icon: 'search' as const, title: '2. Search the Market', desc: 'I map the market and draw on my specialist network to uncover people and opportunities that may never appear on a job board.' },
  { icon: 'people' as const, title: '3. Curate', desc: 'Quality matters more than volume. I personally assess every introduction, ensuring each opportunity or candidate is relevant and carefully considered.' },
  { icon: 'clock' as const, title: '4. Stay Involved', desc: 'I remain closely involved throughout interviews, offers, notice periods and onboarding, providing support well beyond the placement.' },
];

const areas = [
  { title: 'Accountancy Practice', items: ['Tax', 'Audit & Assurance', 'Accounts & Business Services', 'Advisory', 'Payroll', 'Bookkeeping'] },
  { title: 'In-House Tax', items: ['Corporate Tax', 'Indirect Tax', 'International Tax', 'Transfer Pricing', 'Employment Tax'] },
];

const roleGroups = [
  { title: 'Accountancy Practice', desc: 'Opportunities across audit, accounts and business services, practice tax, advisory, payroll and bookkeeping, from early career through to partner level.' },
  { title: 'In-House Tax', desc: 'Opportunities across corporate tax, indirect tax and VAT, international tax, transfer pricing and employment tax, from Tax Manager through to Head of Tax and Tax Director.' },
];

export const bcFinancialProfile = {
  config: siteConfig,
  contacts,
  pages: {
    home: {
      hero: {
        headline: [[{ text: 'Specialist Search.' }], [{ text: 'Personal Service.' }], [{ text: 'Lasting Fit.', accent: true }]],
        body: [
          'Specialist accountancy practice and tax recruitment across the UK.',
          'With 12 years of specialist experience, I help professionals make better career moves and businesses secure carefully selected talent across accountancy practice and in-house tax.',
        ],
        actions: [
          { href: '/jobs', label: 'View current roles', style: 'primary' },
          { href: '/#contact', label: 'Start a career conversation', style: 'outline' },
          { href: '/clients', label: 'Discuss your hiring plans', style: 'outline' },
        ],
        image: { src: '/placeholder-manchester-cityscape.webp', alt: 'Manchester business district at sunset' },
      },
      stats: { items: stats, gridClass: 'grid grid-cols-2 md:grid-cols-4' },
      audiences: {
        columns: [
          { icon: 'person' as const, eyebrow: 'For Candidates', title: 'A career move built around what matters to you.', body: ['I take the time to understand your ambitions, preferred working arrangements, salary expectations and what is motivating your next move.', 'I then proactively search the market and approach relevant businesses to uncover opportunities that genuinely align with your goals.'], emphasis: 'No cost. No pressure. Just a confidential conversation about your career.', cta: { href: '/candidates', label: 'Start a Career Conversation' } },
          { icon: 'building' as const, eyebrow: 'For Clients', title: 'The right experience matters. So does the right fit.', body: ['A successful appointment needs to work technically, commercially and culturally.', 'Every search begins with understanding your business, your team and the challenge behind the hire.', 'Through targeted search and proactive headhunting, I identify professionals who can perform the role, strengthen your team and contribute for the long term.'], cta: { href: '/clients', label: 'Discuss Your Hiring Plans' } },
        ],
      },
      why: {
        theme: 'dark', eyebrow: null, title: `Why ${siteConfig.name}?`,
        items: [
          { icon: 'target' as const, title: 'Specialist Market Knowledge', desc: 'Twelve years of experience recruiting across accountancy practice and tax markets throughout the UK.' },
          { icon: 'person' as const, title: 'Personal Service', desc: 'Every search begins with a proper conversation about the person, business and priorities behind the move.' },
          { icon: 'search' as const, title: 'Proactive Search', desc: 'I go beyond advertised vacancies and active applicants, approaching the market directly to uncover the strongest opportunities and talent.' },
          { icon: 'shield' as const, title: 'Honest Guidance', desc: 'Clear communication, realistic advice and straightforward feedback at every stage.' },
          { icon: 'star' as const, title: 'Long-Term Relationships', desc: 'I focus on appointments that work for the long term, building relationships that continue beyond a single hire.' },
        ],
      },
      about: {
        eyebrow: `About ${siteConfig.name}`,
        titleLines: ['Experience.', 'Relationships.', 'Results.'],
        body: [`I founded ${siteConfig.name} after 12 years specialising in accountancy practice and tax recruitment across the UK.`, 'Having placed more than 200 professionals, I wanted to offer a more personal and considered approach to recruitment: one built on listening carefully, searching proactively and developing relationships that continue well beyond a single placement.'],
        signature: siteConfig.founder.name,
        role: siteConfig.founder.title,
        cta: { href: '/about', label: `About ${siteConfig.name}` },
        image: { src: '/ben-headshot.webp', alt: `${siteConfig.name} founder` },
        quote: { eyebrow: 'One specialist. One point of contact. One consistent approach.', text: 'You work directly with me throughout the search, from understanding the brief to supporting a successful appointment and beyond.', body: 'I map the market, approach candidates, manage the process and remain involved after the placement.' },
      },
      areas: { eyebrow: 'Areas I Recruit', title: 'Specialist roles across practice and tax.', groups: areas },
      contact: { theme: 'home', eyebrow: 'Get in Touch - Start with a conversation.', title: 'Your priorities shape the search.', body: ['Whether you are considering your next career move, planning an important hire or simply looking for a clearer view of the market, I would be happy to hear from you.', 'Every enquiry is handled personally and in confidence.'] },
    },
    about: {
      hero: { eyebrow: 'About Us', headline: [[{ text: 'Built on experience.' }], [{ text: 'Focused on ' }, { text: 'people.', accent: true }]], body: ['BC Financial Search is a specialist recruitment partner for accountancy practices and in-house tax teams across the UK.', 'With 12 years of experience and more than 200 successful placements, I provide a personal, proactive and considered approach to recruitment.', 'By combining detailed market knowledge with an established network, I help professionals make better career moves and businesses secure people who can contribute for the long term.'], image: { src: '/hero-about.webp', alt: 'Founder-led recruitment conversation in Manchester' } },
      stats: { items: stats, gridClass: 'grid grid-cols-2 md:grid-cols-4' },
      approach: { eyebrow: 'My Approach', title: 'I listen. I search. I stay involved.', steps: approachSteps, border: false },
      founder: { image: { src: '/ben-about-headshot.webp', alt: 'BC Financial Search founder' }, eyebrow: 'Experience. Relationships. Results.', title: 'The person behind the CV matters', body: ['Technology can improve a search, but it should never replace personal knowledge, direct conversations and human understanding.', 'While AI can make recruitment faster, the best career move or appointment is not always the most obvious one.', 'A CV cannot always capture someone\'s motivations, potential or the environment in which they will perform at their best. Equally, a job description rarely tells the full story of a business, its culture or what a successful appointment truly requires.', 'I use modern search tools where they add value, while keeping real conversations at the centre of every introduction. By understanding both the person and the business, I can uncover opportunities and talent that a standard search may overlook.', 'Every introduction is carefully considered, with a clear understanding of why the person, opportunity and business could work well together.'], signature: 'Ben Copsey', role: 'Founder and Director', quote: { eyebrow: 'One specialist. One point of contact. One consistent approach.', text: 'You work directly with me throughout the search, from understanding the brief to supporting a successful appointment and beyond.', body: 'I map the market, approach candidates, manage the process and remain personally accountable throughout.' } },
      values: { theme: 'light', title: 'What You Can Expect', items: [
        { icon: 'target' as const, title: 'Specialist Expertise', desc: 'Detailed knowledge of accountancy practice and tax.' },
        { icon: 'person' as const, title: 'Personal Accountability', desc: 'Direct access to me throughout.' },
        { icon: 'search' as const, title: 'Proactive Search', desc: 'Targeted access beyond advertised vacancies.' },
        { icon: 'shield' as const, title: 'Honest Communication', desc: 'Clear advice and regular feedback.' },
        { icon: 'people' as const, title: 'Lasting Relationships', desc: 'Support beyond a single appointment.' },
      ] },
    },
    services: {
      hero: { eyebrow: 'Services', headline: [[{ text: 'Specialist recruitment' }], [{ text: 'across ' }, { text: 'accountancy practice and tax.', accent: true }]], body: ['I focus on assignments where detailed market knowledge and a proactive approach can make a genuine difference.', 'Every search is shaped around your requirements, with discretion, clear communication and personal accountability throughout the process.'], actions: [{ href: '/#contact', label: 'Discuss Your Hiring Plans', style: 'primary' }, { href: '/jobs', label: 'View Current Roles', style: 'outline' }], image: { src: '/hero-services.webp', alt: 'Specialist search desk overlooking Manchester' } },
      services: { eyebrow: 'What I Do', title: 'Focused coverage. Considered delivery.', items: [
        { icon: 'building' as const, title: 'Accountancy Practice Recruitment', desc: 'Audit, accounts, advisory, payroll and practice management appointments, from newly qualified professionals through to partner level.', roles: ['Audit Senior and Audit Manager', 'Accounts Senior and Accounts Manager', 'Client Manager and Client Director', 'Practice Manager', 'Payroll Manager', 'Partner'], roleLabel: 'Typical Roles' },
        { icon: 'shield' as const, title: 'Tax Recruitment', desc: 'Practice and in-house tax appointments across corporate tax, personal tax, VAT, employment tax, international tax and transfer pricing.', roles: ['Corporate Tax Manager and Director', 'Personal Tax Senior and Manager', 'VAT Manager', 'Employment Tax Manager', 'In-House Tax Manager', 'Head of Tax'], roleLabel: 'Typical Roles' },
        { icon: 'target' as const, title: 'Senior & Confidential Search', desc: 'Senior, specialist and hard-to-fill appointments requiring discretion, detailed market mapping and proactive headhunting.', roles: ['Partner and Director appointments', 'Heads of Tax', 'Senior leadership roles', 'Confidential searches', 'Market mapping and succession-led searches'], roleLabel: 'Typical Assignments' },
      ] },
      method: { items: [
        { icon: 'person' as const, title: 'Listen', desc: 'Your priorities shape the search from the first conversation.' },
        { icon: 'search' as const, title: 'Search the Market', desc: 'I identify where the right people are, not just who is actively applying.' },
        { icon: 'target' as const, title: 'Curate', desc: 'I personally qualify the fit before making an introduction.' },
        { icon: 'clock' as const, title: 'Stay Involved', desc: 'I stay close through interviews, offer, notice, onboarding and beyond.' },
      ], gridClass: 'container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' },
      cta: { eyebrow: 'Specialist Search. Personal Service. Lasting Fit.', title: 'More than a vacancy. More than a CV.', body: 'The right appointment needs to work technically, commercially and culturally. I bring the market knowledge and the personal involvement to help make that happen.', actions: [{ href: '/clients', label: 'For Clients', style: 'primary' }, { href: '/candidates', label: 'For Candidates', style: 'outline' }] },
    },
    candidates: {
      hero: { eyebrow: 'For Candidates', headline: [[{ text: 'Specialist knowledge,' }], [{ text: 'applied ' }, { text: 'personally.', accent: true }]], body: ['Your career. Your priorities. Your next move.', 'I take the time to understand your skills, ambitions, preferred working arrangements and what is motivating your next career move.', 'With specialist knowledge of the accountancy practice and tax markets across the UK, I proactively identify opportunities that align with your goals, including roles that may not yet be advertised.'], actions: [{ href: '/jobs', label: 'Browse Current Opportunities', style: 'primary' }, { href: '/#contact', label: 'Start a Career Conversation', style: 'outline' }], image: { src: '/hero-candidates.webp', alt: 'Professional considering a career move in Manchester' } },
      benefits: { items: [
        { icon: 'person' as const, title: 'Personal Service', desc: 'You deal directly with an experienced specialist who listens carefully and understands what matters to you.' },
        { icon: 'search' as const, title: 'Exclusive Opportunities', desc: 'Access opportunities that may not appear on job boards, supported by an established network of employers across the UK.' },
        { icon: 'shield' as const, title: 'Expert Guidance', desc: 'Honest advice, market insight and practical support to help you make an informed career decision.' },
        { icon: 'shield' as const, title: 'Confidential and Discreet', desc: 'Your career conversations and personal information are handled carefully, discreetly and in confidence.' },
      ], gridClass: 'container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' },
      steps: { eyebrow: 'How I Help You', title: 'Specialist knowledge. Wider market access.', steps: [
        { icon: 'person' as const, title: '1. Listen', desc: 'I begin by understanding what matters to you: your ambitions, motivations, preferred working pattern, salary expectations and timing.' },
        { icon: 'search' as const, title: '2. Search the Market', desc: 'I use my market knowledge and specialist network to uncover opportunities that may never appear on a job board.' },
        { icon: 'people' as const, title: '3. Curate', desc: 'I only introduce opportunities that align with your goals. There is no pressure, no irrelevant roles and your CV is never shared without your permission.' },
        { icon: 'clock' as const, title: '4. Stay Involved', desc: 'I support you throughout interviews, offers, notice periods and onboarding, remaining available beyond your start date.' },
      ], cta: { href: '/#contact', label: 'Start a confidential conversation' }, image: { src: '/hero-candidates-section.webp', alt: 'Confidential recruitment conversation' } },
      testimonials: { title: 'What candidates value', subtitle: 'Relationships that last beyond the placement.', items: [
        { quote: 'Ben took the time to understand exactly what I was looking for and introduced me to an opportunity that proved to be the ideal next step in my career.', role: 'Senior Tax Manager', label: 'Candidate previously supported by Ben' },
        { quote: 'Professional, supportive and consistently honest. I would not hesitate to recommend Ben to anyone considering their next career move.', role: 'Audit Manager', label: 'Candidate previously supported by Ben' },
        { quote: 'Excellent market knowledge, clear advice and a process that felt genuinely personal from beginning to end.', role: 'Tax Director', label: 'Candidate previously supported by Ben' },
      ] },
      areas: { eyebrow: 'Areas I Recruit', title: 'Specialist opportunities across accountancy practice and in-house tax.', groups: roleGroups, cta: { href: '/jobs', label: 'Browse Current Opportunities' } },
    },
    clients: {
      hero: { eyebrow: 'For Clients', headline: [[{ text: 'Technical fit.' }], [{ text: 'Cultural fit.' }], [{ text: 'Long-term ' }, { text: 'value.', accent: true }]], body: ['I work with accountancy practices and in-house tax teams across the UK to identify professionals who match the requirements of the role, complement the team and contribute for the long term.', 'Through specialist market knowledge, an established network and proactive search, I help you reach candidates who may not be actively looking or visible through traditional advertising.'], actions: [{ href: '/#contact', label: 'Discuss Your Hiring Plans', style: 'primary' }, { href: '/services', label: 'View Search Services', style: 'outline' }], image: { src: '/hero-clients.webp', alt: 'Senior hiring conversation overlooking Manchester' } },
      benefits: { items: [
        { icon: 'target' as const, title: 'Specialist Expertise', desc: 'Detailed knowledge of accountancy practice and tax recruitment across the UK.' },
        { icon: 'search' as const, title: 'Proactive Search', desc: 'Targeted headhunting that reaches beyond active applicants and traditional job advertising.' },
        { icon: 'star' as const, title: 'Considered Assessment', desc: 'I assess technical experience, career motivations and alignment with your team and working environment.', className: 'hidden sm:block' },
        { icon: 'clock' as const, title: 'Efficient Process', desc: 'I manage communication, interviews and feedback throughout, allowing you to focus on running your business.' },
        { icon: 'people' as const, title: 'Established Track Record', desc: 'More than 200 successful placements and relationships that continue beyond a single appointment.' },
      ], gridClass: 'container-page stats-grid' },
      approach: { eyebrow: 'My Approach', title: 'A considered approach to every search.', steps: [
        { icon: 'person' as const, title: '1. Listen', desc: 'I begin by understanding the detail behind the hire: your business, team, working environment, expectations and what a successful appointment needs to achieve.' },
        { icon: 'search' as const, title: '2. Search the Market', desc: 'I map the market and draw on my specialist network to reach professionals who may not be actively looking or visible through traditional advertising.' },
        { icon: 'target' as const, title: '3. Curate', desc: 'Quality matters more than volume. I personally assess every candidate and present a carefully considered shortlist, with clear reasoning behind each introduction.' },
        { icon: 'clock' as const, title: '4. Stay Involved', desc: 'I remain closely involved throughout interviews, offers, notice periods and onboarding, providing support beyond the placement.' },
      ], cta: { href: '/#contact', label: 'Discuss Your Hiring Plans' }, border: true },
      areas: { eyebrow: 'Specialist Areas', title: 'Connecting accountancy practices and in-house tax teams with carefully selected professionals across the UK.', groups: [
        { title: 'Accountancy Practice', desc: 'I recruit across audit and assurance, accounts and business services, practice tax, advisory, payroll and bookkeeping, covering appointments from part-qualified professionals through to senior leadership and partner level.' },
        { title: 'In-House Tax', desc: 'I support hiring across corporate tax, indirect tax and VAT, international tax, transfer pricing and employment tax, including Tax Manager, Head of Tax and Tax Director appointments.' },
      ] },
      testimonial: { eyebrow: 'What Clients Value', subtitle: 'Relationships built on understanding, trust and considered delivery.', quote: 'Ben took the time to understand our business, the requirements of the role and the type of person who would thrive within our team.', role: 'Managing Partner', meta: 'Accountancy Practice, Manchester', label: 'Client previously supported by Ben', image: { src: '/hero-services.webp', alt: 'Specialist search desk overlooking Manchester' } },
    },
    contact: {
      hero: { eyebrow: 'Contact', headline: [[{ text: 'Start with a ' }, { text: 'conversation.', accent: true }]], body: ['Whether you are considering your next career move, planning an important hire or simply looking for a clearer view of the market, I would be happy to hear from you.', 'Every enquiry is handled personally, discreetly and in confidence.'], image: { src: '/hero-about.webp', alt: 'Confidential recruitment conversation in Manchester' }, plainHeroTitle: true },
      contact: { theme: 'warm', eyebrow: 'Get In Touch', title: 'Your priorities shape the search.', body: ['Tell me what you are looking to achieve: a better career move, an important hire or simply a clearer view of the market.', 'Every enquiry is handled personally and in confidence.'] },
    },
  },
} satisfies SiteProfile;
