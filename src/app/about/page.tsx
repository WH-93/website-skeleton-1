import type { Metadata } from 'next';
import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';

export const metadata: Metadata = {
  title: 'About Ben Copsey',
  description: '12 years of specialist recruitment experience. Founded on listening, searching proactively, and lasting relationships.',
};

const stats = [
  { icon: 'person' as const, value: '12 YEARS', label: 'Specialist market experience' },
  { icon: 'people' as const, value: '200+', label: 'Successful placements' },
  { icon: 'location' as const, value: 'UK-WIDE', label: 'A trusted network across the UK' },
  { icon: 'star' as const, value: 'LONG-TERM RELATIONSHIPS', label: 'Built beyond a single placement' },
];

const process = [
  { icon: 'person' as const, title: '1. Listen', desc: 'I begin with the detail behind the brief or career move: the team, ambitions, motivations, culture and what a successful outcome needs to look like.' },
  { icon: 'search' as const, title: '2. Search the Market', desc: 'I map the market and draw on my specialist network to uncover people and opportunities that may never appear on a job board.' },
  { icon: 'people' as const, title: '3. Curate', desc: 'Quality matters more than volume. I personally assess every introduction, ensuring each opportunity or candidate is relevant and carefully considered.' },
  { icon: 'clock' as const, title: '4. Stay Involved', desc: 'I remain closely involved throughout interviews, offers, notice periods and onboarding, providing support well beyond the placement.' },
];

const values = [
  { icon: 'target' as const, title: 'Specialist Expertise', desc: 'Detailed knowledge of accountancy practice and tax.' },
  { icon: 'person' as const, title: 'Personal Accountability', desc: 'Direct access to me throughout.' },
  { icon: 'search' as const, title: 'Proactive Search', desc: 'Targeted access beyond advertised vacancies.' },
  { icon: 'shield' as const, title: 'Honest Communication', desc: 'Clear advice and regular feedback.' },
  { icon: 'people' as const, title: 'Lasting Relationships', desc: 'Support beyond a single appointment.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="split-hero">
        <div className="split-hero-grid">
          <div className="split-hero-copy">
            <p className="eyebrow mb-5">About Us</p>
            <h1 className="hero-title hero-title-reveal">
              <span className="hero-title-line">Built on experience.</span>
              {' '}
              <span className="hero-title-line">Focused on <span className="text-gold">people.</span></span>
            </h1>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy max-w-xl">
              <p>BC Financial Search is a specialist recruitment partner for accountancy practices and in-house tax teams across the UK.</p>
              <p>With 12 years of experience and more than 200 successful placements, I provide a personal, proactive and considered approach to recruitment.</p>
              <p>By combining detailed market knowledge with an established network, I help professionals make better career moves and businesses secure people who can contribute for the long term.</p>
            </div>
          </div>
          <div className="split-hero-media">
            <img src="/hero-about.png" alt="Founder-led recruitment conversation in Manchester" />
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

      <section className="section bg-white text-center">
        <div className="container-page">
          <p className="eyebrow mb-3">My Approach</p>
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

      <section className="grid lg:grid-cols-[34%_36%_30%] bg-warm-white border-y border-navy/10">
        <div className="min-h-[380px] relative order-2 lg:order-1">
          <img src="/ben-about-headshot.jpeg" alt="BC Financial Search founder" className="absolute inset-0 h-full w-full object-cover object-top" />
        </div>
        <div className="section px-5 sm:px-8 lg:px-12 order-1 lg:order-2">
          <p className="eyebrow mb-5">Experience. Relationships. Results.</p>
          <h2 className="section-title text-3xl sm:text-4xl">The person behind the CV matters</h2>
          <span className="gold-rule" />
          <div className="body-copy space-y-4">
            <p>Technology can improve a search, but it should never replace personal knowledge, direct conversations and human understanding.</p>
            <p>While AI can make recruitment faster, the best career move or appointment is not always the most obvious one.</p>
            <p>A CV cannot always capture someone&apos;s motivations, potential or the environment in which they will perform at their best. Equally, a job description rarely tells the full story of a business, its culture or what a successful appointment truly requires.</p>
            <p>I use modern search tools where they add value, while keeping real conversations at the centre of every introduction. By understanding both the person and the business, I can uncover opportunities and talent that a standard search may overlook.</p>
            <p>Every introduction is carefully considered, with a clear understanding of why the person, opportunity and business could work well together.</p>
          </div>
          <p className="mt-6 font-heading italic text-3xl text-navy">Ben Copsey</p>
          <p className="text-xs uppercase tracking-wider font-bold text-navy">Founder and Director</p>
        </div>
        <div className="bg-navy text-white m-5 sm:m-8 lg:m-12 p-8 sm:p-10 rounded-card flex items-center order-3">
          <div>
            <div className="text-gold font-heading text-7xl leading-none mb-4">{'"'}</div>
            <p className="eyebrow mb-4">One specialist. One point of contact. One consistent approach.</p>
            <p className="font-heading text-3xl leading-tight">You work directly with me throughout the search, from understanding the brief to supporting a successful appointment and beyond.</p>
            <span className="gold-rule" />
            <p className="text-sm leading-7 text-white/70">I map the market, approach candidates, manage the process and remain personally accountable throughout.</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="text-center mb-10">
          <h2 className="section-title text-3xl sm:text-4xl">What You Can Expect</h2>
          <span className="gold-rule mx-auto" />
        </div>
        <div className="container-page feature-grid">
          {values.map(item => (
            <div key={item.title} className="feature-card">
              <BcIcon name={item.icon} size={36} className="text-gold mx-auto mb-4" strokeWidth={1.35} />
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-3">{item.title}</h3>
              <p className="text-sm leading-6 text-navy/65">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-2">
          <Link href="/#contact" className="btn-gold">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
