import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BcIcon } from '@/components/bc-icon';
import { LineBreakTitle } from './shared';
import type {
  AboutMosaicContent,
  AreasOverviewContent,
  AudienceSplitContent,
  FeatureGridContent,
  SectionProps,
} from './types';

export function AudienceSplitSection({ content }: SectionProps<AudienceSplitContent>) {
  return (
    <section className="section bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:divide-x lg:divide-navy/15 items-stretch">
        {content.columns.map((column, index) => (
          <div key={column.eyebrow} className={`${index === 0 ? 'lg:pr-14' : 'lg:pl-14'} flex flex-col`}>
            <BcIcon name={column.icon} size={42} className="text-gold mb-5" strokeWidth={1.3} />
            <p className="eyebrow mb-5">{column.eyebrow}</p>
            <h2 className="section-title text-3xl sm:text-4xl">{column.title}</h2>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy">
              {column.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {column.emphasis && <p className="font-bold text-navy">{column.emphasis}</p>}
            </div>
            <Link href={column.cta.href} className="btn-gold mt-auto self-start translate-y-4">{column.cta.label}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeatureGridSection({ content }: SectionProps<FeatureGridContent>) {
  if (content.theme === 'dark') {
    return (
      <section className="bg-navy text-white section">
        <div className="container-page">
          <h2 className="font-sans text-xl sm:text-2xl tracking-widest uppercase text-white text-center">{content.title}</h2>
          <span className="gold-rule mx-auto" />
          <div className="feature-grid">
            {content.items.map((item) => (
              <div key={item.title} className="feature-card border-white/15">
                <BcIcon name={item.icon} size={38} className="text-gold mx-auto mb-5" strokeWidth={1.35} />
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-white mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm leading-6 text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-white">
      <div className="text-center mb-10">
        <h2 className="section-title text-3xl sm:text-4xl">{content.title}</h2>
        <span className="gold-rule mx-auto" />
      </div>
      <div className="container-page feature-grid">
        {content.items.map((item) => (
          <div key={item.title} className="feature-card">
            <BcIcon name={item.icon} size={36} className="text-gold mx-auto mb-4" strokeWidth={1.35} />
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-3">{item.title}</h3>
            <p className="text-sm leading-6 text-navy/65">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutMosaicSection({ content }: SectionProps<AboutMosaicContent>) {
  return (
    <section className="grid lg:grid-cols-[37%_28%_35%] bg-white">
      <div className="section px-5 sm:px-8 lg:pl-16 xl:pl-20 lg:pr-10">
        <p className="eyebrow mb-5">{content.eyebrow}</p>
        <LineBreakTitle lines={content.titleLines} className="section-title" />
        <span className="gold-rule" />
        <div className="body-copy space-y-5">{content.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <p className="mt-6 font-heading italic text-3xl text-navy">{content.signature}</p>
        <p className="text-xs uppercase tracking-wider font-bold text-navy">{content.role}</p>
        <Link href={content.cta.href} className="btn-gold mt-8">{content.cta.label}</Link>
      </div>
      <div className="min-h-[380px] lg:min-h-0 relative">
        <Image src={content.image.src} alt={content.image.alt} fill sizes="(max-width: 1023px) 100vw, 28vw" style={{ objectFit: 'cover', objectPosition: 'top' }} />
      </div>
      <div className="bg-navy text-white section px-5 sm:px-8 lg:px-14 flex items-center">
        <div>
          <div className="text-gold font-heading text-7xl leading-none mb-4">{'"'}</div>
          <p className="eyebrow mb-4">{content.quote.eyebrow}</p>
          <p className="font-heading text-3xl sm:text-4xl leading-tight max-w-md">{content.quote.text}</p>
          <span className="gold-rule" />
          <p className="text-sm leading-7 text-white/70 max-w-md">{content.quote.body}</p>
        </div>
      </div>
    </section>
  );
}

export function AreasOverviewSection({ content }: SectionProps<AreasOverviewContent>) {
  return (
    <section className="bg-warm-white border-t border-navy/10">
      <div className="px-5 sm:px-8 lg:pl-16 xl:pl-20 lg:pr-10 pt-10 pb-8 text-center">
        <p className="eyebrow mb-3">{content.eyebrow}</p>
        <h2 className="section-title text-3xl sm:text-4xl">{content.title}</h2>
        <span className="gold-rule mx-auto" />
        <div className="grid gap-10 sm:grid-cols-2 mt-8 max-w-2xl mx-auto text-left">
          {content.groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-4">{group.title}</h3>
              <ul className="space-y-1.5 text-sm leading-6 text-navy/65">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
