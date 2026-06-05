import Link from 'next/link';

const SERVICES = [
  {
    emoji: '👥',
    title: 'PRACTICE RECRUITMENT',
    desc: 'Audit, Accounts, Advisory & Practice Management.',
  },
  {
    emoji: '🔍',
    title: 'TAX RECRUITMENT',
    desc: 'Corporate Tax, Personal Tax, VAT, Employment Tax & In-House Tax.',
  },
  {
    emoji: '🎯',
    title: 'SEARCH & SELECTION',
    desc: 'Specialist, Senior & Hard-to-Fill Appointments.',
  },
];

const VALUES = [
  { emoji: '🎯', title: 'Precision', desc: 'Focused on quality, relevance and long-term fit.' },
  { emoji: '🏅', title: 'Specialism', desc: 'Deep knowledge of practice and tax markets.' },
  { emoji: '🔒', title: 'Discretion', desc: 'Confidential, professional and trustworthy.' },
  { emoji: '🤝', title: 'Partnership', desc: 'Building long-term relationships that create value.' },
];

const ROLES_TOP = ['Auditor', 'Accounts Manager', 'Client Senior Manager', 'Practice Manager'];
const ROLES_BOT = ['Corporate Tax', 'VAT Manager', 'Employment Tax', 'In-House Tax'];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy" />
        <div className="relative container-page pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24">

          {/* Tagline */}
          <p className="font-heading italic text-gold text-base sm:text-lg text-center mb-4 sm:mb-6">
            &mdash; Practice & Tax Talent, Precisely Found &mdash;
          </p>

          {/* Headline */}
          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white
                         text-center max-w-4xl mx-auto leading-tight mb-3 sm:mb-4">
            Specialist search for accountancy practices and in-house{' '}
            <span className="text-gold">tax</span> teams.
          </h1>

          <p className="text-white/60 text-center max-w-xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
            Specialist recruitment for accountancy practices and in-house tax teams.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-16 sm:mb-20">
            <Link href="/jobs" className="btn-gold text-center">Find Practice & Tax Talent</Link>
            <Link href="/jobs" className="btn-outline text-center">Explore Opportunities</Link>
          </div>

          {/* Service pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            {SERVICES.map(s => (
              <div key={s.title} className="text-center">
                <div className="icon-circle-lg mx-auto mb-4 sm:mb-5 text-gold">{s.emoji}</div>
                <h3 className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Work With ── */}
      <section className="bg-navy section">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left: dark card */}
            <div className="card-dark">
              <h4 className="text-[10px] sm:text-xs tracking-widest text-gold font-semibold mb-6 sm:mb-8">
                WHO WE WORK WITH
              </h4>

              <div className="space-y-6 sm:space-y-8">
                {[
                  { emoji: '🏛', title: 'ACCOUNTANCY PRACTICES', desc: 'Boutique, independent and top 100 firms.' },
                  { emoji: '🏢', title: 'IN-HOUSE TAX TEAMS', desc: 'Owner-managed businesses, PE-backed businesses and large corporates.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 sm:gap-4">
                    <div className="icon-circle-sm text-gold">{item.emoji}</div>
                    <div>
                      <h3 className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gold/10 mt-8 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { emoji: '👥', title: 'FOR PRACTICES', desc: 'We connect accountancy practices with the right talent — from newly qualified to partner level.' },
                  { emoji: '👤', title: 'FOR TAX TEAMS', desc: 'We help tax professionals find their next role in practices or in-house teams.' },
                ].map(item => (
                  <div key={item.title}>
                    <div className="icon-circle-sm text-gold mb-3 sm:mb-4">{item.emoji}</div>
                    <h4 className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: white card + stats */}
            <div className="space-y-6 sm:space-y-8">
              <div className="card-white shadow-card-lg overflow-hidden">
                <p className="font-heading italic text-gold text-lg sm:text-xl mb-2">
                  Practice & tax talent, <span className="text-navy italic">precisely found.</span>
                </p>
                <p className="text-gray-500 text-sm mb-6 sm:mb-8">
                  Specialist recruitment for accountancy practices and in-house tax teams.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/jobs" className="btn-gold-dark text-center flex-1 min-w-0 whitespace-normal">Find Practice & Tax Talent</Link>
                  <Link href="/jobs" className="btn-outline-dark text-center flex-1 min-w-0 whitespace-normal">Explore Opportunities</Link>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
                {[
                  ['SPECIALIST', 'Practice & Tax'],
                  ['100+', 'Firms Supported'],
                  ['1,000+', 'Placed'],
                  ['20+ Years', 'Experience'],
                ].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-[10px] sm:text-xs tracking-wider text-gold font-semibold mb-1">{num}</div>
                    <div className="text-[9px] sm:text-[10px] tracking-wide text-gray-400">{label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="card-dark">
                <p className="font-heading italic text-gold text-base sm:text-lg mb-3 leading-relaxed">
                  &ldquo;BC Financial understood our practice culture and delivered candidates who actually stayed. The precision is real.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold text-xs font-semibold">MP</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold tracking-wider">Mark Peters</p>
                    <p className="text-white/40 text-[10px]">Managing Partner, Top 50 Firm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="bg-navy section">
        <div className="container-page">
          <h2 className="font-heading text-2xl sm:text-3xl text-gold text-center mb-10 sm:mb-16">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {VALUES.map(v => (
              <div key={v.title} className="text-center">
                <div className="icon-circle-lg mx-auto mb-4 sm:mb-5 text-gold">{v.emoji}</div>
                <h3 className="font-heading text-lg sm:text-xl text-white mb-2 sm:mb-3">{v.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">{v.desc}</p>
              </div>
            ))}
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
            Ready to Make Your Next Great Hire?
          </h2>
          <p className="text-white/60 text-sm mb-6 sm:mb-8 max-w-md mx-auto">
            Tell us what you need and we'll have a shortlist of qualified candidates within 48 hours.
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
