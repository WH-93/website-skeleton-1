import type { Metadata } from 'next';
import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';

export const metadata: Metadata = {
  description: 'Specialist accountancy practice and tax recruitment across the UK. Personal, proactive, relationship-driven.',
};

const stats = [
  { icon: 'person' as const, value: '12 YEARS', label: 'Specialist market experience' },
  { icon: 'people' as const, value: '200+', label: 'Successful placements' },
  { icon: 'location' as const, value: 'UK-WIDE', label: 'A trusted network across the UK' },
  { icon: 'star' as const, value: 'LONG-TERM RELATIONSHIPS', label: 'Built beyond a single placement' },
];

const features = [
  { icon: 'target' as const, title: 'Specialist Market Knowledge', desc: 'Twelve years of experience recruiting across accountancy practice and tax markets throughout the UK.' },
  { icon: 'person' as const, title: 'Personal, Not Transactional', desc: 'Every search begins with a proper conversation about the person, business and priorities behind the move.' },
  { icon: 'search' as const, title: 'Proactive Search', desc: 'I go beyond advertised vacancies and active applicants, approaching the market directly to uncover the strongest opportunities and talent.' },
  { icon: 'shield' as const, title: 'Honest Guidance', desc: 'Clear communication, realistic advice and straightforward feedback at every stage.' },
  { icon: 'star' as const, title: 'Long-Term Relationships', desc: 'I focus on appointments that work for the long term, building relationships that continue beyond a single hire.' },
];

const contacts = [
  { icon: 'mail' as const, label: 'Email', value: 'ben@bcfinancialsearch.co.uk', href: 'mailto:ben@bcfinancialsearch.co.uk' },
  { icon: 'phone' as const, label: 'Phone', value: '07522996561', href: 'tel:07522996561' },
  { icon: 'location' as const, label: 'Location', value: 'Manchester, United Kingdom', href: null },
];

export default function HomePage() {
  return (
    <>
      <section className="split-hero">
        <div className="split-hero-grid">
          <div className="split-hero-copy">
            <h1 className="hero-title hero-title-reveal">
              <span className="hero-title-line">Specialist Search.</span>
              {' '}
              <span className="hero-title-line">Personal Service.</span>
              {' '}
              <span className="hero-title-line text-gold">Lasting Fit.</span>
            </h1>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy max-w-xl">
              <p>
                Specialist accountancy practice and tax recruitment across the UK.
              </p>
              <p>
                With 12 years of experience in the market, I connect ambitious professionals with accountancy practices and in-house tax teams where they can thrive, while helping employers secure talent that supports their long-term growth.
              </p>
            </div>
            <div className="hero-actions">
              <Link href="/jobs" className="btn-gold">View current roles</Link>
              <Link href="/#contact" className="btn-outline">Start a career conversation</Link>
              <Link href="/clients" className="btn-outline">Discuss your hiring plans</Link>
            </div>
          </div>
          <div className="split-hero-media">
            <img src="/placeholder-manchester-cityscape.png" alt="Manchester business district at sunset" />
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map(item => (
              <div key={item.value} className="stat-item">
                <div className="stat-icon"><BcIcon name={item.icon} size={38} strokeWidth={1.5} /></div>
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:divide-x lg:divide-navy/15 items-stretch">
          <div className="lg:pr-14 flex flex-col">
            <BcIcon name="person" size={42} className="text-gold mb-5" strokeWidth={1.3} />
            <p className="eyebrow mb-5">For Candidates</p>
            <h2 className="section-title text-3xl sm:text-4xl">A career move built around what matters to you.</h2>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy">
              <p>I take the time to understand your ambitions, preferred working arrangements, salary expectations and what is motivating your next move.</p>
              <p>I then proactively search the market and approach relevant businesses to uncover opportunities that genuinely align with your goals.</p>
              <p className="font-bold text-navy">No cost. No pressure. Just a confidential conversation about your career.</p>
            </div>
            <Link href="/candidates" className="btn-gold mt-auto self-start translate-y-4">Start a Career Conversation</Link>
          </div>

          <div className="lg:pl-14 flex flex-col">
            <BcIcon name="building" size={42} className="text-gold mb-5" strokeWidth={1.3} />
            <p className="eyebrow mb-5">For Clients</p>
            <h2 className="section-title text-3xl sm:text-4xl">The right experience matters. So does the right fit.</h2>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy">
              <p>A successful appointment needs to work technically, commercially and culturally.</p>
              <p>Every search begins with understanding your business, your team and the challenge behind the hire.</p>
              <p>Through targeted search and proactive headhunting, I identify professionals who can perform the role, strengthen your team and contribute for the long term.</p>
            </div>
            <Link href="/clients" className="btn-gold mt-auto self-start translate-y-4">Discuss Your Hiring Plans</Link>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white section">
        <div className="container-page">
          <h2 className="font-sans text-xl sm:text-2xl tracking-widest uppercase text-white text-center">Why BC Financial Search?</h2>
          <span className="gold-rule mx-auto" />
          <div className="feature-grid">
            {features.map(item => (
              <div key={item.title} className="feature-card border-white/15">
                <BcIcon name={item.icon} size={38} className="text-gold mx-auto mb-5" strokeWidth={1.35} />
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-white mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm leading-6 text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-[37%_28%_35%] bg-white">
        <div className="section px-5 sm:px-8 lg:pl-16 xl:pl-20 lg:pr-10">
          <p className="eyebrow mb-5">About BC Financial Search</p>
          <h2 className="section-title">Experience.<br />Relationships.<br />Results.</h2>
          <span className="gold-rule" />
          <div className="body-copy space-y-5">
            <p>I founded BC Financial Search after 12 years specialising in accountancy practice and tax recruitment across the UK.</p>
            <p>Having placed more than 200 professionals, I wanted to offer a more personal and considered approach to recruitment: one built on listening carefully, searching proactively and developing relationships that continue well beyond a single placement.</p>
          </div>
          <Link href="/about" className="btn-gold mt-8">About BC Financial Search</Link>
        </div>
        <div className="min-h-[380px] lg:min-h-0 relative">
          <img src="/ben-headshot.jpeg" alt="BC Financial Search founder" className="absolute inset-0 h-full w-full object-cover object-top" />
        </div>
        <div className="bg-navy text-white section px-5 sm:px-8 lg:px-14 flex items-center">
          <div>
            <div className="text-gold font-heading text-7xl leading-none mb-4">{'"'}</div>
            <p className="eyebrow mb-4">One specialist. One point of contact. One consistent approach.</p>
            <p className="font-heading text-3xl sm:text-4xl leading-tight max-w-md">
              You work directly with me throughout the search, from understanding the brief to supporting a successful appointment and beyond.
            </p>
            <span className="gold-rule" />
            <p className="text-sm leading-7 text-white/70 max-w-md">
              I map the market, approach candidates, manage the process and remain involved after the placement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-warm-white border-t border-navy/10">
        <div className="px-5 sm:px-8 lg:pl-16 xl:pl-20 lg:pr-10 pt-10 pb-8 text-center">
          <p className="eyebrow mb-3">Areas I Recruit</p>
          <h2 className="section-title text-3xl sm:text-4xl">Specialist roles across practice and tax.</h2>
          <span className="gold-rule mx-auto" />
          <div className="grid gap-10 sm:grid-cols-2 mt-8 max-w-2xl mx-auto text-left">
            <div>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-4">Accountancy Practice</h3>
              <ul className="space-y-1.5 text-sm leading-6 text-navy/65">
                <li>Tax</li>
                <li>Audit &amp; Assurance</li>
                <li>Accounts &amp; Business Services</li>
                <li>Advisory</li>
                <li>Payroll</li>
                <li>Bookkeeping</li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-4">In-House Tax</h3>
              <ul className="space-y-1.5 text-sm leading-6 text-navy/65">
                <li>Corporate Tax</li>
                <li>Indirect Tax</li>
                <li>International Tax</li>
                <li>Transfer Pricing</li>
                <li>Employment Tax</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy lg:bg-warm-white scroll-mt-24 pt-4 pb-16 sm:pb-20 lg:pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div>
            <p className="eyebrow mb-4">Get in Touch - Start with a conversation.</p>
            <h2 className="section-title text-white lg:text-navy text-3xl sm:text-4xl">Your priorities shape the search.</h2>
            <span className="gold-rule" />
            <p className="body-copy text-white/70 lg:text-navy/75 max-w-xl">
              Whether you are considering your next career move, planning an important hire or simply looking for a clearer view of the market, I would be happy to hear from you.
            </p>
            <p className="body-copy text-white/70 lg:text-navy/75 max-w-xl mt-4">
              Every enquiry is handled personally and in confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/candidates" className="btn-gold">Start a Career Conversation</Link>
              <Link href="/clients" className="inline-flex items-center justify-center font-bold rounded uppercase tracking-wider text-[10px] sm:text-xs px-6 py-3 sm:px-7 sm:py-3.5 transition-colors whitespace-nowrap text-white border border-white/30 hover:bg-white hover:text-navy lg:text-navy lg:border-navy/70 lg:hover:bg-navy lg:hover:text-white">Discuss Your Hiring Plans</Link>
            </div>
          </div>

          <div className="bg-white border border-navy/10 rounded-card shadow-card p-7 sm:p-10">
            <div className="space-y-7">
              {contacts.map(item => (
                <div key={item.label} className="flex items-center gap-5">
                  <div className="icon-circle-sm text-gold shrink-0">
                    <BcIcon name={item.icon} size={18} strokeWidth={1.4} />
                  </div>
                  <div>
                    <p className="eyebrow mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-navy text-base hover:text-gold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-navy text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-navy/10">
              <p className="text-sm leading-7 text-navy/65">
                I aim to respond to all enquiries within one business day. Career conversations and hiring discussions are treated in confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

