import type { Metadata } from 'next';
import { RenderPageMap } from '@/components/page-renderer/render-page-map';
import { activeProfile } from '@/site/active-profile';
import { publicPageMaps } from '@/site/story-maps/public-pages';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation. All enquiries handled personally and in confidence.',
};

export default function ContactPage() {
  return <RenderPageMap map={publicPageMaps.contact} profile={activeProfile} />;
}
