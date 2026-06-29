import type { Metadata } from 'next';
import { RenderPageMap } from '@/components/page-renderer/render-page-map';
import { activeProfile } from '@/site/active-profile';
import { publicPageMaps } from '@/site/story-maps/public-pages';

export const metadata: Metadata = {
  title: 'Career Conversations',
  description: 'Confidential career conversations for accountancy practice and tax professionals. No cost, no pressure.',
};

export default function CandidatesPage() {
  return <RenderPageMap map={publicPageMaps.candidates} profile={activeProfile} />;
}
