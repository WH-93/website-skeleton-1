import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';

const benefits = [
  { icon: 'target' as const, title: 'Specialist Expertise', desc: 'Detailed knowledge of accountancy practice and tax recruitment across the UK.' },
  { icon: 'search' as const, title: 'Proactive Search', desc: 'Targeted headhunting that reaches beyond active applicants and traditional job advertising.' },
  { icon: 'star' as const, title: 'Considered Assessment', desc: 'I assess technical experience, career motivations and alignment with your team and working environment.' },
  { icon: 'clock' as const, title: 'Efficient Process', desc: 'I manage communication, interviews and feedback throughout, allowing you to focus on running your business.' },
  { icon: 'people' as const, title: 'Established Track Record', desc: 'More than 200 successful placements and relationships that continue beyond a single appointment.' },
];

const process = [
  { icon: 'person' as const, title: '1. Listen', desc: 'I begin by understanding the detail behind the hire: your business, team, working environment, expectations and what a successful appointment needs to achieve.' },
  { icon: 'search' as const, title: '2. Search the Market', desc: 'I map the market and draw on my specialist network to reach professionals who may not be actively looking or visible through traditional advertising.' },
  { icon: 'target' as const, title: '3. Curate', desc: 'Quality matters more than volume. I personally assess every candidate and present a carefully considered shortlist, with clear reasoning behind each introduction.' },
  { icon: 'clock' as const, title: '4. Stay Involved', desc: 'I remain closely involved throughout interviews, offers, notice periods and onboarding, providing support beyond the placement.' },
];

const areas = [
  { title: 'Audit & Assurance', roles: ['Audit Semi-Senior', 'Audit Senior', 'Audit Manager', 'Audit Director', 'Partner'] },
  { title: 'Accounts & Business Services', roles: ['Accounts Semi-Senior', 'Accounts Senior', 'Client Manager', 'Accounts Manager', 'Client Director'] },
  { title: 'Practice Tax', roles: ['Personal Tax', 'Corporate Tax', 'Mixed Tax', 'VAT', 'Employment Tax', 'R&D Tax'] },
  { title: 'Advisory', roles: ['Business Advisory', 'Corporate Finance', 'Transaction Services'] },
  { title: 'Payroll & Bookkeeping', roles: ['Payroll Assistant', 'Payroll Senior', 'Payroll Manager', 'Bookkeeper'] },
  { title: 'In-House Tax', roles: ['Corporate Tax', 'Indirect Tax and VAT', 'International Tax', 'Transfer Pricing', 'Employment Tax', 'Tax Manager', 'Senior Tax Manager', 'Head of Tax', 'Tax Director'] },
];

export default function ClientsPage() {
  return (
    <>
      <section className="split-hero">
        <div className="split-hero-grid">
          <div className="split-hero-copy">
            <p className="eyebrow mb-5">For Clients</p>
            <h1 className="hero-title hero-title-reveal">
              <span className="hero-title-line">Technical fit.</span>
              <span className="hero-title-line">Cultural fit.</span>
              <span className="hero-title-line">Long-term <span className="text-gold">value.</span></span>
            </h1>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy max-w-xl">
              <p>I work with accountancy practices and in-house tax teams across the UK to identify professionals who match the requirements of the role, complement the team and contribute for the long term.</p>
              <p>Through specialist market knowledge, an established network and proactive search, I help you reach candidates who may not be actively looking or visible through traditional advertising.</p>
            </div>
            <div className="hero-actions">
              <Link href="/#contact" className="btn-gold">Discuss Your Hiring Plans</Link>
              <Link href="/services" className="btn-outline">View Search Services</Link>
            </div>
          </div>
          <div className="split-hero-media">
            <img src="/hero-clients.png" alt="Senior hiring conversation overlooking Manchester" />
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container-page stats-grid">
          {benefits.map(item => (
            <div key={item.title} className="stat-item">
              <div className="stat-icon"><BcIcon name={item.icon} size={36} strokeWidth={1.5} /></div>
              <div className="stat-value">{item.title}</div>
              <div className="stat-label">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white text-center border-b border-navy/10">
        <div className="container-page">
          <p className="eyebrow mb-3">My Approach</p>
          <h2 className="section-title text-3xl sm:text-4xl">A considered approach to every search.</h2>
          <span className="gold-rule mx-auto" />
          <div className="relative mt-12">
            <div className="process-line" />
            <div className="grid gap-9 lg:grid-cols-4">
              {process.map(step => (
                <div key={step.title} className="relative text-center">
                  <div className="icon-circle-lg mx-auto mb-5 text-navy relative z-10">
                    <BcIcon name={step.icon} size={30} strokeWidth={1.3} />
                  </div>
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-navy mb-3">{step.title}</h3>
                  <p className="text-sm leading-6 text-navy/65 max-w-xs mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <Link href="/#contact" className="btn-outline mt-10">Discuss Your Hiring Plans</Link>
        </div>
      </section>

      <section className="section bg-warm-white text-center">
        <div className="container-page">
          <p className="eyebrow mb-3">Specialist Areas</p>
          <h2 className="section-title text-3xl sm:text-4xl">Connecting accountancy practices and in-house tax teams with carefully selected professionals across the UK.</h2>
          <span className="gold-rule mx-auto" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {areas.map((area) => (
              <div key={area.title} className="feature-card">
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-3">{area.title}</h3>
                <ul className="space-y-1 text-xs leading-5 text-navy/65">
                  {area.roles.map(role => <li key={role}>{role}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 bg-white border-t border-navy/10">
        <div className="section px-5 sm:px-8 lg:pl-16 xl:pl-20 lg:pr-12">
          <p className="eyebrow mb-5">What Clients Value</p>
          <p className="text-sm text-navy/50 mb-6">Relationships built on understanding, trust and considered delivery.</p>
          <div className="text-gold font-heading text-7xl leading-none mb-2">{'"'}</div>
          <p className="font-heading text-2xl sm:text-3xl leading-tight text-navy max-w-2xl">
            Ben took the time to understand our business, the requirements of the role and the type of person who would thrive within our team.
          </p>
          <p className="eyebrow mt-8">Managing Partner</p>
          <p className="text-xs uppercase tracking-wider font-bold text-navy">Accountancy Practice, Manchester</p>
          <p className="text-xs text-navy/50 mt-1">Client previously supported by Ben</p>
        </div>
        <div className="relative min-h-[360px]">
          <img src="/hero-services.png" alt="Specialist search desk overlooking Manchester" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>
    </>
  );
}
