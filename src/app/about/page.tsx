import type { Metadata } from 'next';
import { RenderPageMap } from '@/components/page-renderer/render-page-map';
import { activeProfile } from '@/site/active-profile';
import { publicPageMaps } from '@/site/story-maps/public-pages';

export const metadata: Metadata = {
  title: 'About Ben Copsey',
  description: '12 years of specialist recruitment experience. Founded on listening, searching proactively, and lasting relationships.',
};

export default function AboutPage() {
  return <RenderPageMap map={publicPageMaps.about} profile={activeProfile} />;
}
