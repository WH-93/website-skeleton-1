import React from 'react';
import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';
import { ButtonLink } from './shared';
import type {
  AreasCardsContent,
  CenterCtaContent,
  ClientTestimonialSplitContent,
  FounderInsightContent,
  ProcessStepsContent,
  SectionProps,
  ServicesCardsContent,
  StepImageSplitContent,
  TestimonialsContent,
} from './types';

export function ProcessStepsSection({ content }: SectionProps<ProcessStepsContent>) {
  return (
    <section className={`section bg-white text-center ${content.border ? 'border-b border-navy/10' : ''}`.trim()}>
      <div className="container-page">
        <p className="eyebrow mb-3">{content.eyebrow}</p>
        <h2 className="section-title text-3xl sm:text-4xl">{content.title}</h2>
        <span className="gold-rule mx-auto" />
        <div className="relative mt-12">
          <div className="process-line" />
          <div className="grid gap-9 lg:grid-cols-4">
            {content.steps.map((step) => (
              <div key={step.title} className="relative text-center">
                <div className="icon-circle-lg mx-auto mb-5 text-navy relative z-10"><BcIcon name={step.icon} size={30} strokeWidth={1.3} /></div>
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-navy mb-3">{step.title}</h3>
                <p className="text-sm leading-6 text-navy/65 max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {content.cta && <Link href={content.cta.href} className="btn-outline mt-10">{content.cta.label}</Link>}
      </div>
    </section>
  );
}

export function FounderInsightSection({ content }: SectionProps<FounderInsightContent>) {
  return (
    <section className="grid lg:grid-cols-[34%_36%_30%] bg-warm-white border-y border-navy/10">
      <div className="min-h-[380px] relative order-2 lg:order-1"><img src={content.image.src} alt={content.image.alt} className="absolute inset-0 h-full w-full object-cover object-top" /></div>
      <div className="section px-5 sm:px-8 lg:px-12 order-1 lg:order-2">
        <p className="eyebrow mb-5">{content.eyebrow}</p>
        <h2 className="section-title text-3xl sm:text-4xl">{content.title}</h2>
        <span className="gold-rule" />
        <div className="body-copy space-y-4">{content.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <p className="mt-6 font-heading italic text-3xl text-navy">{content.signature}</p>
        <p className="text-xs uppercase tracking-wider font-bold text-navy">{content.role}</p>
      </div>
      <div className="bg-navy text-white m-5 sm:m-8 lg:m-12 p-8 sm:p-10 rounded-card flex items-center order-3">
        <div><div className="text-gold font-heading text-7xl leading-none mb-4">{'"'}</div><p className="eyebrow mb-4">{content.quote.eyebrow}</p><p className="font-heading text-3xl leading-tight">{content.quote.text}</p><span className="gold-rule" /><p className="text-sm leading-7 text-white/70">{content.quote.body}</p></div>
      </div>
    </section>
  );
}

export function ServicesCardsSection({ content }: SectionProps<ServicesCardsContent>) {
  return (
    <section className="section bg-warm-white">
      <div className="container-page">
        <p className="eyebrow text-center mb-3">{content.eyebrow}</p>
        <h2 className="section-title text-3xl sm:text-4xl text-center">{content.title}</h2>
        <span className="gold-rule mx-auto" />
        <div className="grid gap-8 lg:grid-cols-3 mt-12">
          {content.items.map((service) => (
            <div key={service.title} className="bg-white border border-navy/10 p-8 sm:p-10 rounded-card shadow-card">
              <div className="icon-circle-lg text-gold mb-6"><BcIcon name={service.icon} size={30} strokeWidth={1.35} /></div>
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-navy mb-4">{service.title}</h3>
              <p className="text-sm leading-7 text-navy/70 mb-7">{service.desc}</p>
              <div className="border-t border-navy/10 pt-5"><p className="eyebrow mb-3">{service.roleLabel}</p><ul className="space-y-2 text-sm text-navy/65">{service.roles.map((role) => <li key={role}>{role}</li>)}</ul></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CenterCtaSection({ content }: SectionProps<CenterCtaContent>) {
  return (
    <section className="section bg-white text-center">
      <div className="container-page max-w-4xl">
        <p className="eyebrow mb-3">{content.eyebrow}</p>
        <h2 className="section-title text-3xl sm:text-4xl">{content.title}</h2>
        <span className="gold-rule mx-auto" />
        <p className="body-copy max-w-2xl mx-auto">{content.body}</p>
        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">{content.actions.map((cta) => <ButtonLink key={cta.label} cta={cta} />)}</div>
      </div>
    </section>
  );
}

export function StepImageSplitSection({ content }: SectionProps<StepImageSplitContent>) {
  return (
    <section className="grid lg:grid-cols-[40%_60%] bg-white">
      <div className="section px-5 sm:px-8 lg:pl-16 xl:pl-20 lg:pr-12">
        <p className="eyebrow mb-4">{content.eyebrow}</p><h2 className="section-title text-3xl sm:text-4xl">{content.title}</h2><span className="gold-rule" />
        <div className="space-y-7">{content.steps.map((step) => <div key={step.title} className="flex gap-4"><div className="icon-circle-sm text-navy"><BcIcon name={step.icon} size={19} strokeWidth={1.4} /></div><div><h3 className="font-sans text-sm font-bold uppercase tracking-wider text-navy mb-1">{step.title}</h3><p className="text-sm leading-6 text-navy/70">{step.desc}</p></div></div>)}</div>
        <Link href={content.cta.href} className="btn-outline mt-8">{content.cta.label}</Link>
      </div>
      <div className="relative min-h-[420px]"><img src={content.image.src} alt={content.image.alt} className="absolute inset-0 h-full w-full object-cover" /></div>
    </section>
  );
}

export function TestimonialsSection({ content }: SectionProps<TestimonialsContent>) {
  return (
    <section className="bg-navy text-white section">
      <div className="container-page">
        <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-wide text-center mb-4">{content.title}</h2><p className="text-center text-white/50 text-sm mb-12">{content.subtitle}</p>
        <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-white/15">{content.items.map((item) => <div key={item.quote} className="md:px-8"><div className="text-gold font-heading text-5xl leading-none mb-2">{'"'}</div><p className="font-heading text-xl leading-relaxed">{item.quote}</p><p className="eyebrow mt-6">{item.role}</p><p className="text-xs uppercase tracking-wider text-white/60">{item.label}</p></div>)}</div>
      </div>
    </section>
  );
}

export function AreasCardsSection({ content }: SectionProps<AreasCardsContent>) {
  return (
    <section className="section bg-warm-white text-center">
      <div className="container-page">
        <p className="eyebrow mb-3">{content.eyebrow}</p><h2 className="section-title text-3xl sm:text-4xl">{content.title}</h2><span className="gold-rule mx-auto" />
        <div className="grid gap-8 sm:grid-cols-2 mt-10">{content.groups.map((group) => <div key={group.title} className="feature-card"><h3 className="font-sans text-xs font-bold uppercase tracking-wider text-navy mb-3">{group.title}</h3><p className="text-xs leading-5 text-navy/65">{group.desc}</p></div>)}</div>
        {content.cta && <Link href={content.cta.href} className="btn-gold mt-10">{content.cta.label}</Link>}
      </div>
    </section>
  );
}

export function ClientTestimonialSplitSection({ content }: SectionProps<ClientTestimonialSplitContent>) {
  return (
    <section className="grid lg:grid-cols-2 bg-white border-t border-navy/10">
      <div className="section px-5 sm:px-8 lg:pl-16 xl:pl-20 lg:pr-12"><p className="eyebrow mb-5">{content.eyebrow}</p><p className="text-sm text-navy/50 mb-6">{content.subtitle}</p><div className="text-gold font-heading text-7xl leading-none mb-2">{'"'}</div><p className="font-heading text-2xl sm:text-3xl leading-tight text-navy max-w-2xl">{content.quote}</p><p className="eyebrow mt-8">{content.role}</p><p className="text-xs uppercase tracking-wider font-bold text-navy">{content.meta}</p><p className="text-xs text-navy/50 mt-1">{content.label}</p></div>
      <div className="relative min-h-[360px]"><img src={content.image.src} alt={content.image.alt} className="absolute inset-0 h-full w-full object-cover" /></div>
    </section>
  );
}
