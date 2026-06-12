import Image from 'next/image';

type LogoVariant = 'full' | 'compact';

interface BcLogoProps {
  variant?: LogoVariant;
  height?: number;
  className?: string;
}

const heights: Record<LogoVariant, number> = {
  full: 40,
  compact: 28,
};

export function BcLogo({ variant = 'full', height, className }: BcLogoProps) {
  const h = height ?? heights[variant];

  return (
    <Image
      src="/bc-financial-logo-full.svg"
      alt="BC Financial Search"
      width={0}
      height={0}
      style={{ height: h, width: 'auto' }}
      className={className}
      priority
    />
  );
}
