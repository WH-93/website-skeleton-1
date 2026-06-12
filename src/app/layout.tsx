import type { Metadata } from 'next';
import './globals.css';
import { PublicLayout } from '@/components/public-layout';

export const metadata: Metadata = {
  title: 'BC Financial Search — Practice & Tax Recruitment',
  description: 'Specialist recruitment for accountancy practices and in-house tax teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
