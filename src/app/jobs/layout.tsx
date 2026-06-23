import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accountancy Practice & Tax Jobs',
  description: 'Current opportunities across accountancy practice and in-house tax.',
};

export default function JobsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
