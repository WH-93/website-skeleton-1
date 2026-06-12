import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';

const benefits = [
  { icon: 'target' as const, title: 'Specialist Expertise', desc: 'Deep knowledge of practice and tax recruitment across the UK.' },
  { icon: 'people' as const, title: 'Targeted Search', desc: 'Proactive headhunting to access the best talent, not just active jobseekers.' },
  { icon: 'handshake' as const, title: 'Culture Focused', desc: 'I assess cultural fit to ensure long-term success for your team.' },
  { icon: 'clock' as const, title: 'Time Saving', desc: 'I manage the process efficiently, saving you valuable time.' },
  { icon: 'target' as const, title: 'Proven Results', desc: 'A track record of successful placements and long-term partnerships.' },
];

const process = [
  { icon: 'person' as const, title: '1. Understand', desc: 'I start with the business problem: the team, culture, expectations and the impact the right hire needs to make.' },
  { icon: 'search' as const, title: '2. Search Beyond', desc: 'I map the market and use my network to reach people who are not on job boards — often before they are actively looking.' },
  { icon: 'target' as const, title: '3. Curate', desc: 'I qualify every candidate personally. No flooding. No hopeful CV send. Just a considered shortlist with a reason behind each introduction.' },
  { icon: 'handshake' as const, title: '4. Stay Involved', desc: 'I stay close through interviews, offer, notice, onboarding and beyond — because lasting fit is proven after the placement.' },
];

const areas = [
  { title: 'Tax', roles: ['Corporate Tax', 'Personal Tax', 'VAT', 'Employment Tax', 'International Tax', 'R&D Tax'] },
  { title: 'Audit', roles: ['Audit Senior', 'Audit Manager', 'Audit Director', 'Partner'] },
  { title: 'Accounts', roles: ['Financial Accountant', 'Management Accountant', 'Part Qualified', 'Qualified by Experience'] },
  { title: 'Advisory', roles: ['Business Advisory', 'Corporate Finance', 'Commercial Finance', 'Transaction Services'] },
];

export default function ClientsPage() {
  return (
    <>
      <section className="split-hero">
        <div className="split-hero-grid">
          <div className="split-hero-copy">
            <p className="eyebrow mb-5">For Clients</p>
            <h1 className="hero-title hero-title-reveal">
              <span className="hero-title-line">The right hire.</span>
              <span className="hero-title-line">The right fit.</span>
              <span className="hero-title-line">The right <span className="text-gold">impact.</span></span>
            </h1>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy max-w-xl">
              <p>I partner with accountancy practices and in-house tax teams across the UK to find exceptional talent that fits your role, your culture and your ambitions.</p>
              <p>My expertise, network and proactive approach ensure you have access to the people who can make a real difference to your business.</p>
            </div>
            <div className="hero-actions">
              <Link href="/contact" className="btn-gold">Discuss Your Hiring Needs</Link>
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
            <div key={item.title} className={`stat-item ${item.title === 'Proven Results' ? 'hidden md:block' : ''}`}>
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
          <h2 className="section-title text-3xl sm:text-4xl">A consultative approach to every search.</h2>
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
          <Link href="/contact" className="btn-outline mt-10">Discuss Your Hiring Needs</Link>
        </div>
      </section>

      <section className="section bg-warm-white text-center">
        <div className="container-page">
          <p className="eyebrow mb-3">Specialist Areas</p>
          <h2 className="section-title text-3xl sm:text-4xl">Connecting you with talent across practice and tax.</h2>
          <span className="gold-rule mx-auto" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-10">
            {areas.map((area, i) => (
              <div key={area.title} className="feature-card">
                <BcIcon name={i === 0 ? 'shield' : i === 1 ? 'search' : i === 2 ? 'target' : 'handshake'} size={34} className="text-gold mx-auto mb-4" />
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
          <p className="eyebrow mb-5">What our clients value</p>
          <div className="text-gold font-heading text-7xl leading-none mb-2">“</div>
          <p className="font-heading text-2xl sm:text-3xl leading-tight text-navy max-w-2xl">
            BC Financial Search took the time to truly understand our business and the type of person who would thrive in our team.
          </p>
          <p className="eyebrow mt-8">Managing Partner</p>
          <p className="text-xs uppercase tracking-wider font-bold text-navy">Accountancy Practice, Manchester</p>
        </div>
        <div className="relative min-h-[360px]">
          <img src="/hero-services.png" alt="Specialist search desk overlooking Manchester" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      <section className="bg-navy text-white py-12">
        <div className="container-page flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div>
            <h2 className="font-sans text-2xl sm:text-3xl uppercase tracking-wide">Let&apos;s find the right person for your team.</h2>
            <p className="text-white/70 mt-2">Get in touch for a confidential conversation about your hiring needs.</p>
          </div>
          <Link href="/contact" className="btn-gold">Discuss Your Hiring Needs</Link>
        </div>
      </section>
    </>
  );
}
