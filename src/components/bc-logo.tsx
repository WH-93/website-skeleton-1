import Image from 'next/image';
import { siteConfig } from '@/config/site';

type LogoVariant = 'full' | 'white' | 'compact';

interface BcLogoProps {
  variant?: LogoVariant;
  height?: number;
  className?: string;
}

const sources: Record<LogoVariant, string> = {
  full: siteConfig.logo.full,
  white: siteConfig.logo.white,
  compact: siteConfig.logo.compact,
};

const heights: Record<LogoVariant, number> = siteConfig.logo.heights;

export function BcLogo({ variant = 'full', height, className }: BcLogoProps) {
  const h = height ?? heights[variant];

  return (
    <Image
      src={sources[variant]}
      alt={siteConfig.logo.alt}
      width={0}
      height={0}
      sizes="220px"
      style={{ height: h, width: 'auto' }}
      className={className}
      priority
    />
  );
}
