import { BcIcon } from '@/components/bc-icon';

const VALUES = [
  { icon: 'target' as const, label: 'Precision', desc: 'Quality over volume in every search.' },
  { icon: 'star' as const, label: 'Specialism', desc: 'Deep domain expertise you can trust.' },
  { icon: 'handshake' as const, label: 'Partnership', desc: 'Long-term relationships, not transactions.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy">
      <section className="section container-page">
        <p className="font-heading italic text-gold text-lg text-center mb-4">&mdash; About BC Financial Search &mdash;</p>
        <h1 className="font-sans text-3xl sm:text-4xl font-bold text-white text-center mb-8">
          Specialist recruitment for <span className="text-gold">practice & tax</span>
        </h1>
        <div className="max-w-3xl mx-auto text-white/70 text-sm sm:text-base leading-relaxed space-y-6">
          <p>
            BC Financial Search is a specialist recruitment consultancy focused exclusively on 
            accountancy practices and in-house tax teams. We combine deep market knowledge with 
            a personal, partner-led approach.
          </p>
          <p>
            Founded by Ben Copsey, a former practice director with 20+ years in the sector, 
            we understand what makes a great hire &mdash; not just on paper, but in practice.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gold/10">
            {VALUES.map(v => (
              <div key={v.label} className="text-center">
                <div className="text-gold mb-3 flex justify-center">
                  <BcIcon name={v.icon} size={28} />
                </div>
                <h3 className="font-sans text-sm font-semibold text-white mb-2">{v.label}</h3>
                <p className="text-white/50 text-xs">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
