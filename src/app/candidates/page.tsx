import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';

const benefits = [
  { icon: 'person' as const, title: 'Personal Service', desc: 'You deal directly with an experienced specialist who listens carefully and understands what matters to you.' },
  { icon: 'search' as const, title: 'Exclusive Opportunities', desc: 'Access opportunities that may not appear on job boards, supported by an established network of employers across the UK.' },
  { icon: 'shield' as const, title: 'Expert Guidance', desc: 'Honest advice, market insight and practical support to help you make an informed career decision.' },
  { icon: 'shield' as const, title: 'Confidential and Discreet', desc: 'Your career conversations and personal information are handled carefully, discreetly and in confidence.' },
];

const steps = [
  { icon: 'person' as const, title: '1. Listen', desc: 'I begin by understanding what matters to you: your ambitions, motivations, preferred working pattern, salary expectations and timing.' },
  { icon: 'search' as const, title: '2. Search the Market', desc: 'I use my market knowledge and specialist network to uncover opportunities that may never appear on a job board.' },
  { icon: 'people' as const, title: '3. Curate', desc: 'I only introduce opportunities that align with your goals. There is no pressure, no irrelevant roles and your CV is never shared without your permission.' },
  { icon: 'clock' as const, title: '4. Stay Involved', desc: 'I support you throughout interviews, offers, notice periods and onboarding, remaining available beyond your start date.' },
];

const roleGroups = [
  {
    title: 'Audit & Assurance',
    roles: ['Audit Semi-Senior', 'Audit Senior', 'Audit Manager', 'Audit Director', 'Partner'],
  },
  {
    title: 'Accounts & Business Services',
    roles: ['Accounts Semi-Senior', 'Accounts Senior', 'Client Manager', 'Accounts Manager', 'Client Director'],
  },
  {
    title: 'Practice Tax',
    roles: ['Personal Tax', 'Corporate Tax', 'Mixed Tax', 'VAT', 'Employment Tax', 'R&D Tax'],
  },
  {
    title: 'Advisory',
    roles: ['Business Advisory', 'Corporate Finance', 'Transaction Services'],
  },
  {
    title: 'Payroll & Bookkeeping',
    roles: ['Payroll Assistant', 'Payroll Senior', 'Payroll Manager', 'Bookkeeper'],
  },
  {
    title: 'In-House Tax',
    roles: ['Corporate Tax', 'Indirect Tax and VAT', 'International Tax', 'Transfer Pricing', 'Employment Tax', 'Tax Manager', 'Senior Tax Manager', 'Head of Tax', 'Tax Director'],
  },
];

export default function CandidatesPage() {
  return (
    <>
      <section className="split-hero">
        <div className="split-hero-grid">
          <div className="split-hero-copy">
            <p className="eyebrow mb-5">For Candidates</p>
            <h1 className="hero-title hero-title-reveal">
              <span className="hero-title-line">Specialist knowledge,</span>
              <span className="hero-title-line">applied <span className="text-gold">personally.</span></span>
            </h1>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy max-w-xl">
              <p>Your career. Your priorities. Your next move.</p>
              <p>I take the time to understand your skills, ambitions, preferred working arrangements and what is motivating your next career move.</p>
              <p>With specialist knowledge of the accountancy practice and tax markets across the UK, I proactively identify opportunities that align with your goals, including roles that may not yet be advertised.</p>
            </div>
            <div className="hero-actions">
              <Link href="/jobs" className="btn-gold">Browse Current Opportunities</Link>
              <Link href="/#contact" className="btn-outline">Start a Career Conversation</Link>
            </div>
          </div>
          <div className="split-hero-media">
            <img src="/hero-candidates.png" alt="Professional considering a career move in Manchester" />
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(item => (
            <div key={item.title} className="stat-item">
              <div className="stat-icon"><BcIcon name={item.icon} size={36} strokeWidth={1.5} /></div>
              <div className="stat-value">{item.title}</div>
              <div className="stat-label">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-[40%_60%] bg-white">
        <div className="section px-5 sm:px-8 lg:pl-16 xl:pl-20 lg:pr-12">
          <p className="eyebrow mb-4">How I Help You</p>
          <h2 className="section-title text-3xl sm:text-4xl">Specialist knowledge. Wider market access.</h2>
          <span className="gold-rule" />
          <div className="space-y-7">
            {steps.map(step => (
              <div key={step.title} className="flex gap-4">
                <div className="icon-circle-sm text-navy"><BcIcon name={step.icon} size={19} strokeWidth={1.4} /></div>
                <div>
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-navy mb-1">{step.title}</h3>
                  <p className="text-sm leading-6 text-navy/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/#contact" className="btn-outline mt-8">Start a confidential conversation</Link>
        </div>
        <div className="relative min-h-[420px]">
          <img src="/hero-about.png" alt="Confidential recruitment conversation" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      <section className="bg-navy text-white section">
        <div className="container-page">
          <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-wide text-center mb-4">What candidates value</h2>
          <p className="text-center text-white/50 text-sm mb-12">Relationships that last beyond the placement.</p>
          <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-white/15">
            {[
              { quote: 'Ben took the time to understand exactly what I was looking for and introduced me to an opportunity that proved to be the ideal next step in my career.', role: 'Senior Tax Manager', label: 'Candidate previously supported by Ben' },
              { quote: 'Professional, supportive and consistently honest. I would not hesitate to recommend Ben to anyone considering their next career move.', role: 'Audit Manager', label: 'Candidate previously supported by Ben' },
              { quote: 'Excellent market knowledge, clear advice and a process that felt genuinely personal from beginning to end.', role: 'Tax Director', label: 'Candidate previously supported by Ben' },
            ].map((item) => (
              <div key={item.quote} className="md:px-8">
                <div className="text-gold font-heading text-5xl leading-none mb-2">{'"'}</div>
                <p className="font-heading text-xl leading-relaxed">{item.quote}</p>
                <p className="eyebrow mt-6">{item.role}</p>
                <p className="text-xs uppercase tracking-wider text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-warm-white text-center">
        <div className="container-page">
          <p className="eyebrow mb-3">Areas I Recruit</p>
          <h2 className="section-title text-3xl sm:text-4xl">Specialist opportunities across accountancy practice and in-house tax.</h2>
          <span className="gold-rule mx-auto" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {roleGroups.map((group) => (
              <div key={group.title} className="feature-card">
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-3">{group.title}</h3>
                <ul className="space-y-1 text-xs leading-5 text-navy/65">
                  {group.roles.map(role => <li key={role}>{role}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/jobs" className="btn-gold mt-10">Browse Current Opportunities</Link>
        </div>
      </section>
    </>
  );
}
