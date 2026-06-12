import { BcIcon } from '@/components/bc-icon';

const services = [
  { icon: 'people' as const, title: 'Practice Recruitment', desc: 'Audit, Accounts, Advisory & Practice Management — from newly qualified to partner level.', roles: ['Audit Senior/Manager', 'Accounts Manager', 'Client Director', 'Practice Manager'] },
  { icon: 'search' as const, title: 'Tax Recruitment', desc: 'Corporate Tax, Personal Tax, VAT, Employment Tax & In-House Tax specialists.', roles: ['Corporate Tax Director', 'Personal Tax Senior', 'VAT Manager', 'Employment Tax Lead', 'In-House Tax Manager'] },
  { icon: 'target' as const, title: 'Search & Selection', desc: 'Specialist, senior and hard-to-fill appointments requiring discretion and market insight.', roles: ['Partner-Level', 'Heads of Tax', 'Senior Directors', 'Confidential Searches'] },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-navy">
      <section className="section container-page">
        <p className="font-heading italic text-gold text-lg text-center mb-4">&mdash; Our Services &mdash;</p>
        <h1 className="font-sans text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Specialist <span className="text-gold">recruitment</span> services
        </h1>
        <p className="text-white/50 text-sm text-center max-w-xl mx-auto mb-12">
          Focused coverage across practice and tax disciplines.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map(s => (
            <div key={s.title} className="bg-navy-800 border border-gold/10 rounded-card p-6 sm:p-8">
              <div className="icon-circle-sm text-gold mb-4">
                <BcIcon name={s.icon} size={16} />
              </div>
              <h3 className="font-sans text-sm font-semibold tracking-wider text-white mb-3">{s.title.toUpperCase()}</h3>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="border-t border-gold/10 pt-4">
                <p className="text-[9px] tracking-wider text-gold font-semibold mb-2">TYPICAL ROLES</p>
                <ul className="space-y-1">
                  {s.roles.map(r => (
                    <li key={r} className="text-white/50 text-[10px]">{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
