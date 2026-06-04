import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      {/* Gold strip */}
      <div className="bg-gold py-5 sm:py-6">
        <div className="container-page text-center">
          <p className="text-[10px] sm:text-xs tracking-widest text-navy font-semibold">
            SPECIALIST SEARCH. MARKET KNOWLEDGE. LASTING IMPACT.
          </p>
          <p className="text-[10px] sm:text-xs tracking-wider text-navy/70 mt-2">
            BCFINANCIALSEARCH.CO.UK
          </p>
        </div>
      </div>

      {/* Dark footer */}
      <div className="bg-navy py-12 sm:py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <span className="font-sans text-lg font-bold text-white">B</span>
                  <span className="absolute font-sans text-lg font-bold text-gold"
                        style={{ top: '2px', left: '11px' }}>C</span>
                </div>
                <div className="hidden sm:block w-px h-8 bg-gold/30" />
                <div className="leading-tight">
                  <div className="text-[10px] tracking-wider text-white font-semibold">BC FINANCIAL</div>
                  <div className="text-[8px] tracking-widest text-gold">SEARCH</div>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed mt-4">
                Specialist recruitment for accountancy practices and in-house tax teams.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: 'SERVICES',
                links: ['Practice Recruitment', 'Tax Recruitment', 'Search & Selection'],
              },
              {
                title: 'COMPANY',
                links: ['About', 'Candidates', 'Clients', 'Contact'],
              },
              {
                title: 'CONTACT',
                links: ['ben@bcfinancialsearch.co.uk', '+44 7700 900123', 'London, UK'],
              },
            ].map(col => (
              <div key={col.title}>
                <h4 className="text-[10px] sm:text-xs tracking-wider text-gold mb-3 sm:mb-4 font-semibold">
                  {col.title}
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {col.links.map(link => (
                    <li key={link}>
                      <Link href="#"
                            className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 pt-8 border-t border-gold/10 text-center">
            <p className="text-[10px] sm:text-xs text-white/30">
              © {new Date().getFullYear()} BC Financial Search. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
