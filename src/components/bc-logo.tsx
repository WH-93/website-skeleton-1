import Image from 'next/image';

type LogoVariant = 'full' | 'white' | 'compact';

interface BcLogoProps {
  variant?: LogoVariant;
  height?: number;
  className?: string;
}

const heights: Record<LogoVariant, number> = {
  full: 40,
  white: 40,
  compact: 28,
};

const sources: Record<LogoVariant, string> = {
  full: '/bc-financial-logo-full.svg',
  white: '/bc-financial-logo-white.png',
  compact: '/bc-financial-logo-full.svg',
};

export function BcLogo({ variant = 'full', height, className }: BcLogoProps) {
  const h = height ?? heights[variant];

  return (
    <Image
      src={sources[variant]}
      alt="BC Financial Search"
      width={0}
      height={0}
      sizes="220px"
      style={{ height: h, width: 'auto' }}
      className={className}
      priority
    />
  );
}
