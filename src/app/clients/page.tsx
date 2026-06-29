import type { Metadata } from 'next';
import { RenderPageMap } from '@/components/page-renderer/render-page-map';
import { activeProfile } from '@/site/active-profile';
import { publicPageMaps } from '@/site/story-maps/public-pages';

export const metadata: Metadata = {
  title: 'Accountancy & Tax Hiring',
  description: 'Proactive search and headhunting for accountancy practices and in-house tax teams across the UK.',
};

export default function ClientsPage() {
  return <RenderPageMap map={publicPageMaps.clients} profile={activeProfile} />;
}
