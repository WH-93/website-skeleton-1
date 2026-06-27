import Link from 'next/link';
import { BcLogo } from '@/components/bc-logo';
import { BcIcon } from '@/components/bc-icon';
import { siteConfig } from '@/config/site';

const { footer, contact, company } = siteConfig;

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="border-b border-white/10 py-9 sm:py-11">
        <div className="container-page grid gap-8 lg:grid-cols-[1.25fr_1fr_auto] items-center">
          <div>
            <h2 className="font-sans text-2xl sm:text-3xl uppercase tracking-wide text-white">
              {footer.ctaHeadline}
            </h2>
            <p className="mt-2 text-sm text-white/70 max-w-2xl">
              {footer.ctaSubtext}
            </p>
          </div>
          <Link href="/#contact" className="btn-gold justify-self-start lg:justify-self-end">
            {footer.ctaButton}
          </Link>
        </div>
      </div>

      <div className="container-page py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 lg:gap-12">
          <div>
            <BcLogo variant="white" height={45} />
            <p className="text-sm text-white/60 leading-relaxed mt-5">
              {footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-gold mb-4 font-bold uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {footer.quickLinks.map(link => (
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
              {footer.services.map(area => (
                <li key={area} className="text-sm text-white/65">{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-gold mb-4 font-bold uppercase">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex gap-3"><BcIcon name="phone" size={16} className="text-gold mt-1" /> {contact.phone}</li>
              <li className="flex gap-3"><BcIcon name="mail" size={16} className="text-gold mt-1" /> {contact.email}</li>
              <li className="flex gap-3"><BcIcon name="location" size={16} className="text-gold mt-1" /> {contact.location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="container-page text-2xs text-white/45 uppercase tracking-wide leading-relaxed">
          <p>{siteConfig.legalName}. Registered in England and Wales. Company number {company.number}.</p>
          <p>Registered office: {company.address}.</p>
        </div>
      </div>
    </footer>
  );
}
