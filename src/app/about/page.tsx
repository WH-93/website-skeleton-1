import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';

const stats = [
  { icon: 'person' as const, value: '12 YEARS', label: 'Specialist recruitment experience' },
  { icon: 'people' as const, value: '200+', label: 'Successful placements' },
  { icon: 'location' as const, value: 'UK WIDE', label: 'Established network across the UK' },
  { icon: 'handshake' as const, value: 'LONG-TERM RELATIONSHIPS', label: 'Candidates and clients who return' },
  { icon: 'target' as const, value: 'PROVEN RESULTS', label: 'Helping people and businesses succeed' },
];

const process = [
  { icon: 'person' as const, title: '1. Listen', desc: 'I start with the detail behind the brief or career move — the team, motivations, culture and what success needs to look like.' },
  { icon: 'search' as const, title: '2. Search Beyond', desc: 'I map the market and use my personal network to reach people and roles that are not sitting on job boards.' },
  { icon: 'people' as const, title: '3. Curate', desc: 'Quality over volume. I personally qualify each introduction so you are not flooded with hopeful CVs or irrelevant options.' },
  { icon: 'handshake' as const, title: '4. Stay Involved', desc: 'I stay close through interviews, offer, notice, onboarding and beyond. That is where lasting fit is proven.' },
];

const values = [
  { icon: 'target' as const, title: 'Specialist Expertise', desc: 'Deep knowledge of the practice and tax market.' },
  { icon: 'person' as const, title: 'Personal Accountability', desc: 'You deal directly with an experienced specialist.' },
  { icon: 'search' as const, title: 'Proactive Search', desc: 'I go beyond adverts to find the right fit.' },
  { icon: 'handshake' as const, title: 'Honest Communication', desc: 'Clear advice and support throughout.' },
  { icon: 'people' as const, title: 'Lasting Relationships', desc: 'Built on trust, delivering long-term value.' },
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
              <span className="hero-title-line">Focused on <span className="text-gold">people.</span></span>
            </h1>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy max-w-xl">
              <p>BC Financial Search is a specialist recruitment partner for accountancy practices and in-house tax teams across the UK.</p>
              <p>With 12 years of experience in practice and tax recruitment, I take a personal, proactive and consultative approach to helping professionals and businesses achieve long-term success.</p>
              <p>I combine deep market knowledge, an extensive network and a genuine commitment to understanding what matters most to both candidates and clients.</p>
            </div>
          </div>
          <div className="split-hero-media">
            <img src="/hero-about.png" alt="Founder-led recruitment conversation in Manchester" />
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container-page">
          <div className="stats-grid">
            {stats.map(item => (
              <div key={item.value} className={`stat-item ${item.value === 'PROVEN RESULTS' ? 'hidden md:block' : ''}`}>
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
          <p className="eyebrow mb-5">Founder</p>
          <h2 className="section-title text-3xl sm:text-4xl">A personal approach, built on results.</h2>
          <span className="gold-rule" />
          <div className="body-copy space-y-4">
            <p>BC Financial Search was founded after 12 years working exclusively within specialist finance recruitment.</p>
            <p>Having successfully placed more than 200 professionals, the business was created to offer a more personal and considered recruitment experience; one based on listening carefully, searching proactively and building relationships that continue beyond a single placement.</p>
          </div>
          <p className="mt-6 font-heading italic text-3xl text-navy">Ben Copsey</p>
          <p className="text-xs uppercase tracking-wider font-bold text-navy">Director</p>
        </div>
        <div className="bg-navy text-white m-5 sm:m-8 lg:m-12 p-8 sm:p-10 rounded-card flex items-center order-3">
          <div>
            <div className="text-gold font-heading text-7xl leading-none mb-4">“</div>
            <p className="eyebrow mb-4">One brand. One person. One promise.</p>
            <p className="font-heading text-3xl leading-tight">Personal service only matters if the same specialist stays accountable throughout.</p>
            <span className="gold-rule" />
            <p className="text-sm leading-7 text-white/70">Ben takes the brief, maps the market, qualifies the fit and stays close after the placement — no handoffs, no diluted accountability.</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
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
          <Link href="/contact" className="btn-gold">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
