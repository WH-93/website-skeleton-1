import React from 'react';
import Link from 'next/link';
import type { CtaLink, RichHeadingLine } from '@/site/types';

export function ButtonLink({ cta, className = '' }: { cta: CtaLink; className?: string }) {
  const style = cta.style === 'outlineLight' ? 'btn-outline-light' : cta.style === 'outline' ? 'btn-outline' : 'btn-gold';
  return <Link href={cta.href} className={`${style} ${className}`.trim()}>{cta.label}</Link>;
}

export function RichHeading({ headline, plain = false }: { headline: RichHeadingLine[]; plain?: boolean }) {
  const lines = headline.map((line, index) => (
    <span key={index} className={plain ? undefined : 'hero-title-line'}>
      {line.map((segment, segmentIndex) => (
        <span key={segmentIndex} className={segment.accent ? 'text-gold' : undefined}>{segment.text}</span>
      ))}
    </span>
  ));

  if (plain) {
    return <h1 className="hero-title">{lines}</h1>;
  }

  return <h1 className="hero-title hero-title-reveal">{lines}</h1>;
}

export function LineBreakTitle({ lines, className }: { lines: string[]; className: string }) {
  return (
    <h2 className={className}>
      {lines.map((line, index) => (
        <React.Fragment key={line}>
          {line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </h2>
  );
}
