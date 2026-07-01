import type { Metadata } from 'next';
import { RenderPageMap } from '@/components/page-renderer/render-page-map';
import { activeProfile } from '@/site/active-profile';
import { publicPageMaps } from '@/site/story-maps/public-pages';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  description: activeProfile.config.seo.defaultDescription,
};

export default function HomePage() {
  return <RenderPageMap map={publicPageMaps.home} profile={activeProfile} />;
}
