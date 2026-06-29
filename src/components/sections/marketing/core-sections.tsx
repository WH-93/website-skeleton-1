import React from 'react';
import Image from 'next/image';
import { BcIcon } from '@/components/bc-icon';
import { ContactCard } from '@/components/contact-card';
import { ButtonLink, RichHeading } from './shared';
import type { ContactSectionContent, ProofBandContent, SectionProps, SplitHeroContent } from './types';

export function SplitHeroSection({ content }: SectionProps<SplitHeroContent>) {
  return (
    <section className="split-hero">
      <div className="split-hero-grid">
        <div className="split-hero-copy">
          {content.eyebrow && <p className="eyebrow mb-5">{content.eyebrow}</p>}
          <RichHeading headline={content.headline} plain={content.plainHeroTitle} />
          <span className="gold-rule" />
          <div className="space-y-5 body-copy max-w-xl">
            {content.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {content.actions && (
            <div className="hero-actions">
              {content.actions.map((cta) => <ButtonLink key={cta.label} cta={cta} />)}
            </div>
          )}
        </div>
        <div className="split-hero-media">
          <Image src={content.image.src} alt={content.image.alt} fill sizes="(max-width: 1023px) 100vw, 50vw" style={{ objectFit: 'cover' }} priority />
        </div>
      </div>
    </section>
  );
}

export function ProofBandSection({ content }: SectionProps<ProofBandContent>) {
  const innerClass = content.gridClass || 'container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
  const wrapped = innerClass.startsWith('container-page');
  const grid = (
    <div className={innerClass}>
      {content.items.map((item) => (
        <div key={item.value || item.title} className={`stat-item ${item.className || ''}`.trim()}>
          <div className="stat-icon"><BcIcon name={item.icon} size={item.value ? 38 : 36} strokeWidth={1.5} /></div>
          <div className="stat-value">{item.value || item.title}</div>
          <div className="stat-label">{item.label || item.desc}</div>
        </div>
      ))}
    </div>
  );

  return <section className="stats-band">{wrapped ? grid : <div className="container-page">{grid}</div>}</section>;
}

export function ContactSection({ content, profile }: SectionProps<ContactSectionContent>) {
  const home = content.theme === 'home';
  return (
    <section id="contact" className={home ? 'bg-navy lg:bg-warm-white scroll-mt-24 pt-4 pb-16 sm:pb-20 lg:pb-24' : 'section bg-warm-white'}>
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <div>
          <p className="eyebrow mb-4">{content.eyebrow}</p>
          <h2 className={`section-title ${home ? 'text-white lg:text-navy ' : ''}text-3xl sm:text-4xl`}>{content.title}</h2>
          <span className="gold-rule" />
          {content.body.map((paragraph, index) => (
            <p key={paragraph} className={`body-copy ${home ? 'text-white/70 lg:text-navy/75 ' : ''}max-w-xl ${index > 0 ? 'mt-4' : ''}`}>{paragraph}</p>
          ))}
        </div>
        <ContactCard contacts={profile.contacts} />
      </div>
    </section>
  );
}
