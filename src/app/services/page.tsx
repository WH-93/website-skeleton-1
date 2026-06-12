import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';

const services = [
  {
    icon: 'building' as const,
    title: 'Practice Recruitment',
    desc: 'Audit, accounts, advisory and practice management appointments from newly qualified to partner level.',
    roles: ['Audit Senior / Manager', 'Accounts Manager', 'Client Director', 'Practice Manager'],
  },
  {
    icon: 'shield' as const,
    title: 'Tax Recruitment',
    desc: 'Corporate tax, personal tax, VAT, employment tax and in-house tax specialists across the UK.',
    roles: ['Corporate Tax Director', 'Personal Tax Senior', 'VAT Manager', 'Employment Tax Lead', 'In-House Tax Manager'],
  },
  {
    icon: 'target' as const,
    title: 'Search & Selection',
    desc: 'Specialist, senior and hard-to-fill appointments requiring discretion, market mapping and proactive search.',
    roles: ['Partner-Level', 'Heads of Tax', 'Senior Directors', 'Confidential Searches'],
  },
];

const method = [
  { icon: 'person' as const, title: 'Listen', desc: 'Your priorities shape the search from the first conversation.' },
  { icon: 'search' as const, title: 'Search Beyond', desc: 'I identify where the right people are, not just who is actively applying.' },
  { icon: 'target' as const, title: 'Curate', desc: 'I personally qualify the fit before making an introduction.' },
  { icon: 'clock' as const, title: 'Stay Involved', desc: 'I stay close through interviews, offer, notice, onboarding and beyond.' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="split-hero">
        <div className="split-hero-grid">
          <div className="split-hero-copy">
            <p className="eyebrow mb-5">Services</p>
            <h1 className="hero-title hero-title-reveal">
              <span className="hero-title-line">Specialist recruitment</span>
              <span className="hero-title-line">across <span className="text-gold">practice & tax.</span></span>
            </h1>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy max-w-xl">
              <p>I focus where I add the most value: accountancy practices, in-house tax teams and specialist finance appointments that need more than a transactional search.</p>
              <p>A targeted search, built around you — with market knowledge, discretion and personal accountability throughout.</p>
            </div>
            <div className="hero-actions">
              <Link href="/#contact" className="btn-gold">Start a Search Conversation</Link>
              <Link href="/jobs" className="btn-outline">View Current Roles</Link>
            </div>
          </div>
          <div className="split-hero-media">
            <img src="/hero-services.png" alt="Specialist search desk overlooking Manchester" />
          </div>
        </div>
      </section>

      <section className="section bg-warm-white">
        <div className="container-page">
          <p className="eyebrow text-center mb-3">What I Do</p>
          <h2 className="section-title text-3xl sm:text-4xl text-center">Focused coverage. Considered delivery.</h2>
          <span className="gold-rule mx-auto" />
          <div className="grid gap-8 lg:grid-cols-3 mt-12">
            {services.map(service => (
              <div key={service.title} className="bg-white border border-navy/10 p-8 sm:p-10 rounded-card shadow-card">
                <div className="icon-circle-lg text-gold mb-6"><BcIcon name={service.icon} size={30} strokeWidth={1.35} /></div>
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-navy mb-4">{service.title}</h3>
                <p className="text-sm leading-7 text-navy/70 mb-7">{service.desc}</p>
                <div className="border-t border-navy/10 pt-5">
                  <p className="eyebrow mb-3">Typical Roles</p>
                  <ul className="space-y-2 text-sm text-navy/65">
                    {service.roles.map(role => <li key={role}>{role}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {method.map(item => (
            <div key={item.title} className="stat-item">
              <div className="stat-icon"><BcIcon name={item.icon} size={36} strokeWidth={1.5} /></div>
              <div className="stat-value">{item.title}</div>
              <div className="stat-label">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white text-center">
        <div className="container-page max-w-4xl">
          <p className="eyebrow mb-3">Specialist Search. Personal Service. Lasting Fit.</p>
          <h2 className="section-title text-3xl sm:text-4xl">More than a vacancy. More than a CV.</h2>
          <span className="gold-rule mx-auto" />
          <p className="body-copy max-w-2xl mx-auto">
            The right appointment needs to work technically, commercially and culturally. I bring the market knowledge and the personal involvement to help make that happen.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/clients" className="btn-gold">For Clients</Link>
            <Link href="/candidates" className="btn-outline">For Candidates</Link>
          </div>
        </div>
      </section>
    </>
  );
}
