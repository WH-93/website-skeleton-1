import Link from 'next/link';

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-navy">
      <section className="section container-page">
        <p className="font-heading italic text-gold text-lg text-center mb-4">&mdash; For Clients &mdash;</p>
        <h1 className="font-sans text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Find the <span className="text-gold">right talent</span> for your firm
        </h1>
        <p className="text-white/50 text-sm text-center max-w-xl mx-auto mb-12">
          We work with boutique firms, independent practices, and in-house tax teams.
        </p>

        <div className="max-w-3xl mx-auto space-y-8">
          {[
            { emoji: '🏛', title: 'Accountancy Practices', desc: 'From boutique independents to top 100 firms — we understand the practice landscape and the talent it demands.' },
            { emoji: '🏢', title: 'In-House Tax Teams', desc: 'Owner-managed businesses, PE-backed groups, and large corporates — we find tax professionals who deliver from day one.' },
            { emoji: '⏱', title: '48-Hour Shortlists', desc: 'Tell us what you need and we\'ll have a shortlist of qualified, vetted candidates within 48 hours.' },
            { emoji: '🤝', title: 'Retained & Contingency', desc: 'Flexible engagement models built around your requirements and timeline.' },
          ].map(item => (
            <div key={item.title} className="flex gap-4 sm:gap-6 items-start">
              <div className="icon-circle-sm text-gold shrink-0">{item.emoji}</div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="btn-gold">Start a Conversation</Link>
        </div>
      </section>
    </main>
  );
}
