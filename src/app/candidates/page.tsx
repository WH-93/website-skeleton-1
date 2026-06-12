import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';

const benefits = [
  { icon: 'person' as const, title: 'Personal Service', desc: 'You deal directly with an experienced specialist who takes the time to listen.' },
  { icon: 'search' as const, title: 'Exclusive Opportunities', desc: 'Access to roles that are not always advertised and a wider network of employers.' },
  { icon: 'shield' as const, title: 'Expert Guidance', desc: 'Honest advice and market insight to help you make the right move.' },
  { icon: 'shield' as const, title: 'Confidential & Discreet', desc: 'Your career conversations are always in the strictest confidence.' },
];

const steps = [
  { icon: 'person' as const, title: '1. Listen', desc: 'I start with what matters to you — ambitions, motivations, working pattern, salary expectations and timing.' },
  { icon: 'search' as const, title: '2. Search Beyond', desc: 'I use my market knowledge and personal network to uncover roles that may never reach a jobs board.' },
  { icon: 'people' as const, title: '3. Curate', desc: 'I only introduce opportunities that make sense for your goals. No pressure, no irrelevant roles, no CV sent without permission.' },
  { icon: 'clock' as const, title: '4. Stay Involved', desc: 'I stay with you through interviews, offer, notice period and beyond — because the right move has to last.' },
];

const roleGroups = [
  { title: 'Tax', roles: ['Corporate Tax', 'Personal Tax', 'VAT', 'Employment Tax', 'International Tax', 'R&D Tax'] },
  { title: 'Audit', roles: ['Audit Senior', 'Audit Manager', 'Audit Director', 'Partner'] },
  { title: 'Accounts', roles: ['Financial Accountant', 'Management Accountant', 'Part Qualified', 'Qualified by Experience'] },
  { title: 'Advisory', roles: ['Business Advisory', 'Corporate Finance', 'Commercial Finance', 'Transaction Services'] },
  { title: 'Practice Support', roles: ['Practice Management', 'HR & People', 'Operations', 'Marketing'] },
];

export default function CandidatesPage() {
  return (
    <>
      <section className="split-hero">
        <div className="split-hero-grid">
          <div className="split-hero-copy">
            <p className="eyebrow mb-5">For Candidates</p>
            <h1 className="hero-title hero-title-reveal">
              <span className="hero-title-line">A personal approach</span>
              <span className="hero-title-line">to your next <span className="text-gold">career move.</span></span>
            </h1>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy max-w-xl">
              <p>I take the time to understand what is important to you and proactively find opportunities that match your skills, ambitions and lifestyle.</p>
              <p>With specialist knowledge of the practice and tax market across the UK, I open doors to the right opportunities — often before they are advertised.</p>
            </div>
            <div className="hero-actions">
              <Link href="/jobs" className="btn-gold">Browse Current Opportunities</Link>
              <Link href="/#contact" className="btn-outline">Talk to BC</Link>
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
          <h2 className="section-title text-3xl sm:text-4xl">Your career goals, my priority.</h2>
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
          <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-wide text-center mb-12">What candidates value</h2>
          <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-white/15">
            {[
              'Ben took the time to understand what I was looking for. He found me a fantastic opportunity that was the perfect next step in my career.',
              'Professional, supportive and always honest. I would not hesitate to recommend BC Financial Search to anyone looking for their next move.',
              'Market knowledge, clear advice and a process that felt genuinely personal from start to finish.',
            ].map((quote, idx) => (
              <div key={quote} className="md:px-8">
                <div className="text-gold font-heading text-5xl leading-none mb-2">“</div>
                <p className="font-heading text-xl leading-relaxed">{quote}</p>
                <p className="eyebrow mt-6">{idx === 1 ? 'Audit Manager' : idx === 2 ? 'Tax Director' : 'Senior Tax Manager'}</p>
                <p className="text-xs uppercase tracking-wider text-white/60">Placed Candidate</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-warm-white text-center">
        <div className="container-page">
          <p className="eyebrow mb-3">Areas I Recruit</p>
          <h2 className="section-title text-3xl sm:text-4xl">Specialist roles across practice and tax.</h2>
          <span className="gold-rule mx-auto" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 mt-10">
            {roleGroups.map((group, i) => (
              <div key={group.title} className="feature-card">
                <BcIcon name={i === 0 ? 'shield' : i === 1 ? 'search' : i === 2 ? 'target' : i === 3 ? 'clipboard' : 'people'} size={34} className="text-gold mx-auto mb-4" />
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
