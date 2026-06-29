import type { Metadata } from 'next';
import { RenderPageMap } from '@/components/page-renderer/render-page-map';
import { activeProfile } from '@/site/active-profile';
import { publicPageMaps } from '@/site/story-maps/public-pages';

export const metadata: Metadata = {
  title: 'Accountancy & Tax Recruitment Services',
  description: 'Specialist recruitment across accountancy practice, tax, and senior confidential search.',
};

export default function ServicesPage() {
  return <RenderPageMap map={publicPageMaps.services} profile={activeProfile} />;
}
