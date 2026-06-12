import Link from 'next/link';
import { BcLogo } from '@/components/bc-logo';

export function Footer() {
  return (
    <footer>
      {/* Gold strip */}
      <div className="bg-gold py-5 sm:py-6">
        <div className="container-page text-center">
          <p className="text-[10px] sm:text-xs tracking-widest text-navy font-semibold">
            Specialist Search. Personal Service. Lasting Fit.
          </p>
          <p className="text-[10px] sm:text-xs tracking-wider text-navy/70 mt-2">
            BC FINANCIAL SEARCH LIMITED &mdash; Specialising in Practice &amp; Tax
          </p>
        </div>
      </div>

      {/* Dark footer */}
      <div className="bg-navy py-12 sm:py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <BcLogo height={28} />
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
                links: [
                  'ben@bcfinancialsearch.co.uk',
                  'Manchester, United Kingdom',
                  'Company No. 15459835',
                ],
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
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/privacy" className="text-[10px] text-white/30 hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[10px] text-white/30 hover:text-gold transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
