import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';

const SERVICES = [
  { icon: 'people', title: 'PRACTICE RECRUITMENT', desc: 'Audit, Accounts, Advisory & Practice Management.' },
  { icon: 'search', title: 'TAX RECRUITMENT', desc: 'Corporate Tax, Personal Tax, VAT, Employment Tax & In-House Tax.' },
  { icon: 'target', title: 'SEARCH & SELECTION', desc: 'Specialist, Senior & Hard-to-Fill Appointments.' },
] as const;

const ROLES_TOP = ['Auditor', 'Accounts Manager', 'Client Senior Manager', 'Practice Manager'];
const ROLES_BOT = ['Corporate Tax', 'VAT Manager', 'Employment Tax', 'In-House Tax'];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy overflow-hidden">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-16 sm:py-24 lg:py-32">
            {/* Left: text + CTAs — ~40% */}
            <div className="lg:w-[38%] text-center lg:text-left">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Specialist Search.<br />
                Personal Service.<br />
                <span className="text-gold italic">Lasting Fit.</span>
              </h1>
              <p className="text-white/60 text-sm sm:text-base max-w-lg mb-8 lg:mb-10">
                Specialist recruitment for accountancy practices and in-house tax teams
                across the UK. 12 years. 200+ placements. One point of contact.
              </p>
              <div className="flex flex-col gap-3 justify-center lg:justify-start">
                <Link href="/jobs" className="btn-outline text-center text-sm sm:text-base">
                  Discuss Your Next Move
                </Link>
                <Link href="/contact" className="btn-gold text-center text-sm sm:text-base">
                  Hire Specialist Talent
                </Link>
              </div>
            </div>

            {/* Right: headshot */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] bg-navy-800 rounded-card overflow-hidden">
                <img
                  src="/placeholder-headshot-ben.png"
                  alt="BC Financial Search"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-[10px] text-white/40 tracking-wider">
                  Professional photography coming soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service pillars ── */}
      <section className="bg-warm-white section">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            {SERVICES.map(s => (
              <div key={s.title} className="text-center">
                <div className="icon-circle-lg mx-auto mb-4 sm:mb-5 text-gold">
                  <BcIcon name={s.icon} size={24} />
                </div>
                <h3 className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-navy mb-2">
                  {s.title}
                </h3>
                <p className="text-navy/60 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-navy border-t border-gold/10">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 py-10 sm:py-14 text-center">
            {([
              { value: '12', label: 'Years specialist experience', icon: 'person' as const },
              { value: '200+', label: 'Successful placements', icon: 'people' as const },
              { value: 'UK WIDE', label: 'Established network', icon: 'location' as const },
              { value: 'LONG-TERM', label: 'Relationships that last', icon: 'handshake' as const },
              { value: 'PROVEN', label: 'Results that speak', icon: 'star' as const },
            ] as const).map(({ value, label, icon }) => (
              <div key={label}>
                <div className="text-white/40 mb-2 flex justify-center">
                  <BcIcon name={icon} size={20} strokeWidth={1.5} />
                </div>
                <div className="text-gold text-lg sm:text-2xl font-heading font-bold mb-1">{value}</div>
                <div className="text-white/50 text-[9px] sm:text-[10px] tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Candidates · For Clients ── */}
      <section className="bg-white section">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gold/10 gap-0">
            {/* For Candidates */}
            <div className="py-8 lg:py-12 lg:pr-12">
              <div className="text-gold mb-4 flex justify-center lg:justify-start">
                <BcIcon name="person" size={28} strokeWidth={1.5} />
              </div>
              <div className="text-[10px] tracking-widest text-gold font-semibold mb-3">FOR CANDIDATES</div>
              <h3 className="font-heading text-2xl sm:text-3xl text-navy mb-4">
                A career move built around what matters to you.
              </h3>
              <p className="text-navy/60 text-sm leading-relaxed mb-6">
                We take the time to understand your goals, your experience, and what you're looking for next. 
                Whether you're actively exploring or just curious about the market, we'll give you honest, 
                confidential advice — no pressure, no hard sell.
              </p>
              <Link href="/candidates" className="btn-gold-dark text-sm">
                Start a Career Conversation
              </Link>
            </div>

            {/* For Clients */}
            <div className="py-8 lg:py-12 lg:pl-12">
              <div className="text-gold mb-4 flex justify-center lg:justify-start">
                <BcIcon name="building" size={28} strokeWidth={1.5} />
              </div>
              <div className="text-[10px] tracking-widest text-gold font-semibold mb-3">FOR CLIENTS</div>
              <h3 className="font-heading text-2xl sm:text-3xl text-navy mb-4">
                The right experience matters. So does the right fit.
              </h3>
              <p className="text-navy/60 text-sm leading-relaxed mb-6">
                We work with accountancy practices and in-house tax teams who value genuine expertise 
                over transactional recruitment. Our approach is personal, proactive, and built on 
                long-term relationships.
              </p>
              <Link href="/clients" className="btn-gold-dark text-sm">
                Discuss Your Hiring Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why BC Financial Search? ── */}
      <section className="bg-warm-white section">
        <div className="container-page">
          <h2 className="font-heading text-2xl sm:text-3xl text-navy text-center mb-3">Why BC Financial Search?</h2>
          <p className="text-navy/50 text-sm text-center mb-10 sm:mb-14 max-w-lg mx-auto">
            Specialist recruitment built on experience, personal accountability, and lasting relationships.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {([
              { icon: 'target' as const, title: 'Specialist Market Knowledge', desc: 'Deep knowledge of the practice and tax market.' },
              { icon: 'person' as const, title: 'Personal Accountability', desc: 'You deal directly with an experienced specialist.' },
              { icon: 'search' as const, title: 'Proactive Search', desc: 'We go beyond adverts to find the right fit.' },
              { icon: 'handshake' as const, title: 'Honest Guidance', desc: 'Clear advice and support throughout the process.' },
              { icon: 'star' as const, title: 'Lasting Relationships', desc: 'Built on trust, delivering long-term value.' },
            ] as const).map(v => (
              <div key={v.title} className="text-center">
                <div className="text-gold mb-3 flex justify-center">
                  <BcIcon name={v.icon} size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-navy mb-2">
                  {v.title.toUpperCase()}
                </h3>
                <p className="text-navy/50 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach — 4-Step Process ── */}
      <section className="bg-warm-white section">
        <div className="container-page">
          <h2 className="font-heading text-2xl sm:text-3xl text-navy text-center mb-3">
            We listen. We search. <span className="text-gold italic">We stay involved.</span>
          </h2>
          <p className="text-navy/50 text-sm text-center mb-12 sm:mb-16 max-w-lg mx-auto">
            Every recruiter says "listen, search, connect, support." Here's how BC Financial says it differently.
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Dotted connecting line — desktop */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 border-t-2 border-dotted border-gold/20" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
              {([
                { num: '1', icon: 'search' as const, title: 'UNDERSTAND', desc: "We start with a proper conversation. Not a checklist — the culture, the team, the unwritten expectations that make a placement work." },
                { num: '2', icon: 'target' as const, title: 'SEARCH', desc: "Proactive market mapping. Our personal network. People who aren't on job boards. The best candidates often aren't actively looking." },
                { num: '3', icon: 'people' as const, title: 'CURATE', desc: "3–4 genuine matches, not 20 CVs. Every candidate personally qualified before they reach your desk. No flooding. No hoping something sticks." },
                { num: '4', icon: 'handshake' as const, title: 'STAY INVOLVED', desc: "Through offer, notice, onboarding, and beyond. The relationship doesn't end at placement. That's what lasting fit means in practice." },
              ] as const).map(step => (
                <div key={step.num} className="text-center relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white border-2 border-gold flex items-center justify-center relative z-10">
                    <span className="font-heading text-lg font-bold text-gold">{step.num}</span>
                  </div>
                  <h4 className="font-sans text-sm font-semibold tracking-wider text-navy mb-2">{step.title}</h4>
                  <p className="text-navy/50 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Roles We Recruit ── */}
      <section className="bg-white section">
        <div className="container-page">
          <h2 className="font-heading text-2xl sm:text-3xl text-navy text-center mb-3">Roles We Recruit</h2>
          <p className="text-gray-500 text-sm text-center mb-10 sm:mb-12 max-w-md mx-auto">
            Specialist coverage across practice and tax disciplines.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[...ROLES_TOP, ...ROLES_BOT].map(role => (
              <div key={role} className="flex flex-col items-center gap-2 sm:gap-3 w-24 sm:w-28">
                <div className="icon-circle-md text-gold">◆</div>
                <span className="text-[9px] sm:text-[10px] tracking-wider text-navy/70 text-center leading-tight">
                  {role.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-navy py-12 sm:py-16">
        <div className="container-page text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-white mb-3 sm:mb-4">
            Start with a conversation.
          </h2>
          <p className="text-white/60 text-sm mb-6 sm:mb-8 max-w-md mx-auto">
            Speak directly with a specialist. No handoffs. No scripts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="btn-gold text-center">Start a Conversation</Link>
            <Link href="/jobs" className="btn-outline text-center">Browse All Roles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
