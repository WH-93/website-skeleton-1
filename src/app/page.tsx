import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';

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

const process = [
  { icon: 'person' as const, title: '1. Listen', desc: 'I begin with the detail behind the brief or career move: the team, ambitions, motivations, culture and what a successful outcome needs to look like.' },
  { icon: 'search' as const, title: '2. Search the Market', desc: 'I map the market and draw on my specialist network to uncover people and opportunities that may never appear on a job board.' },
  { icon: 'people' as const, title: '3. Curate', desc: 'Quality matters more than volume. I personally assess every introduction, ensuring each opportunity or candidate is relevant and carefully considered.' },
  { icon: 'clock' as const, title: '4. Stay Involved', desc: 'I remain closely involved throughout interviews, offers, notice periods and onboarding, providing support well beyond the placement.' },
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
              <span className="hero-title-line">Personal Service.</span>
              <span className="hero-title-line text-gold">Lasting Fit.</span>
            </h1>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy max-w-xl">
              <p>
                Specialist accountancy practice and tax recruitment across the UK.
              </p>
              <p>
                With 12 years of experience in the market, I connect ambitious professionals with firms where they can thrive, while helping employers secure talent that supports their long-term growth.
              </p>
            </div>
            <div className="hero-actions">
              <Link href="/jobs" className="btn-gold">View Current Roles</Link>
              <Link href="/#contact" className="btn-outline">Discuss Your Next Move</Link>
              <Link href="/clients" className="btn-outline">Hire Specialist Talent</Link>
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

      <section className="section bg-warm-white border-y border-navy/10">
        <div className="container-page">
          <h2 className="font-sans text-xl sm:text-2xl tracking-widest uppercase text-navy text-center">Why BC Financial Search?</h2>
          <span className="gold-rule mx-auto" />
          <div className="feature-grid">
            {features.map(item => (
              <div key={item.title} className="feature-card">
                <BcIcon name={item.icon} size={38} className="text-gold mx-auto mb-5" strokeWidth={1.35} />
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm leading-6 text-navy/65">{item.desc}</p>
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
            <p>BC Financial Search was founded after 12 years working exclusively within specialist finance recruitment.</p>
            <p>Having successfully placed more than 200 professionals, the business was created to offer a more personal and considered recruitment experience: one based on listening carefully, searching proactively and building relationships that continue beyond a single placement.</p>
          </div>
          <Link href="/about" className="btn-gold mt-8">About BC Financial</Link>
        </div>
        <div className="min-h-[380px] lg:min-h-0 relative">
          <img src="/ben-headshot.jpeg" alt="BC Financial Search founder" className="absolute inset-0 h-full w-full object-cover object-top" />
        </div>
        <div className="bg-navy text-white section px-5 sm:px-8 lg:px-14 flex items-center">
          <div>
            <div className="text-gold font-heading text-7xl leading-none mb-4">{'"'}</div>
            <p className="eyebrow mb-4">One specialist. One market. One point of contact.</p>
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

      <section className="section bg-white border-t border-navy/10">
        <div className="container-page text-center">
          <p className="eyebrow mb-3">My approach</p>
          <h2 className="section-title text-3xl sm:text-4xl">I listen. I search. I stay involved.</h2>
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
        </div>
      </section>

      <section className="grid lg:grid-cols-[1fr_28%] bg-warm-white border-t border-navy/10">
        <div className="section px-5 sm:px-8 lg:pl-16 xl:pl-20 lg:pr-10 text-center">
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
        <div className="bg-navy text-white section px-6 sm:px-10 flex items-center">
          <div>
            <h2 className="font-sans text-2xl uppercase tracking-wide leading-tight">Ready to take the next step?</h2>
            <p className="mt-5 text-sm leading-7 text-white/70">Whether you are passively exploring or actively looking, let&apos;s have a confidential conversation about your next move.</p>
            <Link href="/#contact" className="btn-gold mt-8">Talk to BC today</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-warm-white scroll-mt-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div>
            <p className="eyebrow mb-4">Get In Touch</p>
            <h2 className="section-title text-3xl sm:text-4xl">Your priorities shape the search.</h2>
            <span className="gold-rule" />
            <p className="body-copy max-w-xl">
              Tell me what you are trying to achieve - a better career move, a key hire, or simply a clearer view of the market. I will respond personally and confidentially.
            </p>
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

