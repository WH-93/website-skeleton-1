import React from 'react';
import Link from 'next/link';

export function HomeHero() {
  return (
    <section className="split-hero">
      <div className="split-hero-grid">
        <div className="split-hero-copy">
          <h1 className="hero-title hero-title-reveal">
            <span className="hero-title-line">Specialist Search.</span>
            {' '}
            <span className="hero-title-line">Personal Service.</span>
            {' '}
            <span className="hero-title-line text-gold">Lasting Fit.</span>
          </h1>
          <span className="gold-rule" />
          <div className="space-y-5 body-copy max-w-xl">
            <p>
              Specialist accountancy practice and tax recruitment across the UK.
            </p>
            <p>
              With 12 years of specialist experience, I help professionals make better career moves and businesses secure carefully selected talent across accountancy practice and in-house tax.
            </p>
          </div>
          <div className="hero-actions">
            <Link href="/jobs" className="btn-gold">View current roles</Link>
            <Link href="/#contact" className="btn-outline">Start a career conversation</Link>
            <Link href="/clients" className="btn-outline">Discuss your hiring plans</Link>
          </div>
        </div>
        <div className="split-hero-media">
          <img src="/placeholder-manchester-cityscape.png" alt="Manchester business district at sunset" />
        </div>
      </div>
    </section>
  );
}
