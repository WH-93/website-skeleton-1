import { SVGProps } from 'react';

// Brand-aligned geometric icons - 24×24 viewBox, 2px strokes, rounded caps, gold accent
// All icons echo the logo's geometric sans-serif aesthetic with open forms

const icons = {
  people: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="9" cy="7" r="3"/>
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
      <circle cx="17" cy="7" r="2"/>
      <path d="M19 15a3 3 0 0 1 3 3v2"/>
    </svg>
  ),

  search: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="10" cy="10" r="7"/>
      <path d="M15 15L21 21"/>
    </svg>
  ),

  target: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),

  shield: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2L3 7v5c0 4.4 3.6 8.2 9 10 5.4-1.8 9-5.6 9-10V7L12 2z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),

  star: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 15 9 22 9 16 14 18 21 12 17 6 21 8 14 2 9 9 9"/>
    </svg>
  ),

  handshake: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 10h.01"/>
      <path d="M8 10h.01"/>
      <path d="M2 14l4-4h2l2 2 4-4h2l4 4"/>
      <path d="M6 16v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2"/>
    </svg>
  ),

  building: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="2" width="16" height="20" rx="1"/>
      <path d="M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M9 18h2M13 18h2"/>
    </svg>
  ),

  person: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 22v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2"/>
    </svg>
  ),

  location: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),

  mail: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="1"/>
      <path d="M22 4L12 13L2 4"/>
    </svg>
  ),

  phone: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94M17 16.5l-3.7 3.7c-1.5.5-3.1.8-4.8.8A12 12 0 0 1 3 15c-2-4 0-9 5-12l3.7 3.7c-.2 1.5.4 3 1.3 4.1a6 6 0 0 0 4 2z"/>
    </svg>
  ),

  clock: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 3"/>
    </svg>
  ),

  clipboard: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="8" y="2" width="8" height="4" rx="1"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <path d="M9 14h6M9 18h6"/>
    </svg>
  ),
};

export type BcIconName = keyof typeof icons;

interface BcIconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  name: BcIconName;
  size?: number;
}

export function BcIcon({ name, size = 24, className, ...props }: BcIconProps) {
  const Icon = icons[name];
  return <Icon width={size} height={size} className={className} {...props} />;
}
