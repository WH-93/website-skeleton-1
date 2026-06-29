import React from 'react';
import { SplitHeroSection, type SplitHeroContent } from '@/components/sections/marketing-sections';
import { activeProfile } from '@/site/active-profile';

export function HomeHero() {
  return <SplitHeroSection content={activeProfile.pages.home.hero as SplitHeroContent} profile={activeProfile} />;
}
