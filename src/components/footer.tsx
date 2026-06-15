import Link from 'next/link';
import { BcLogo } from '@/components/bc-logo';
import { BcIcon } from '@/components/bc-icon';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Candidates', href: '/candidates' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

const areas = ['Audit & Assurance', 'Accounts & Business Services', 'Practice Tax', 'Advisory', 'Payroll & Bookkeeping', 'In-House Tax'];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="border-b border-white/10 py-9 sm:py-11">
        <div className="container-page grid gap-8 lg:grid-cols-[1.25fr_1fr_auto] items-center">
          <div>
            <h2 className="font-sans text-2xl sm:text-3xl uppercase tracking-wide text-white">
              Start with a conversation.
            </h2>
            <p className="mt-2 text-sm text-white/70 max-w-2xl">
              Whether you are considering your next career move or planning an important hire, speak directly with a specialist.
            </p>
          </div>
          <Link href="/#contact" className="btn-gold justify-self-start lg:justify-self-end">
            Get in touch
          </Link>
        </div>
      </div>

      <div className="container-page py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 lg:gap-12">
          <div>
            <BcLogo variant="white" height={45} />
            <p className="text-sm text-white/60 leading-relaxed mt-5">
              Specialist recruitment for accountancy practices and in-house tax teams across the UK.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-gold mb-4 font-bold uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-gold mb-4 font-bold uppercase">Areas I Recruit</h4>
            <ul className="space-y-2">
              {areas.map(area => (
                <li key={area} className="text-sm text-white/65">{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-gold mb-4 font-bold uppercase">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex gap-3"><BcIcon name="mail" size={16} className="text-gold mt-1" /> ben@bcfinancialsearch.co.uk</li>
              <li className="flex gap-3"><BcIcon name="location" size={16} className="text-gold mt-1" /> Manchester<br />United Kingdom</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="container-page flex flex-col sm:flex-row justify-between gap-3 text-[10px] text-white/45 uppercase tracking-wide">
          <p>© {new Date().getFullYear()} BC Financial Search Limited</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold">Terms</Link>
          </div>
          <p>Company Number: 15459835</p>
        </div>
      </div>
    </footer>
  );
}
