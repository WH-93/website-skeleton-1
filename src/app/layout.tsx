import type { Metadata } from 'next';
import './globals.css';
import { PublicLayout } from '@/components/public-layout';

export const metadata: Metadata = {
  title: {
    template: '%s | BC Financial Search',
    default: 'Accountancy Practice & Tax Recruitment UK | BC Financial Search',
  },
  description: 'Specialist accountancy practice and tax recruitment across the UK. Personal, proactive, relationship-driven.',
  icons: { icon: '/favicon.png' },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://bcfinancialsearch.co.uk/#organization',
                  name: 'BC Financial Search',
                  legalName: 'BC FINANCIAL SEARCH LTD',
                  url: 'https://bcfinancialsearch.co.uk',
                  logo: 'https://bcfinancialsearch.co.uk/bc-financial-logo-transparent.png',
                  image: 'https://bcfinancialsearch.co.uk/ben-about-headshot.jpeg',
                  description:
                    'Specialist accountancy practice and tax recruitment across the UK. Personal, proactive, relationship-driven.',
                  email: 'ben@bcfinancialsearch.co.uk',
                  telephone: '+44 7522 996561',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Centurion House, 129 Deansgate',
                    addressLocality: 'Manchester',
                    postalCode: 'M3 3WR',
                    addressCountry: 'GB',
                  },
                  foundingDate: '2026-06-19',
                  founder: {
                    '@type': 'Person',
                    name: 'Ben Copsey',
                    jobTitle: 'Founder and Director',
                    sameAs: 'https://uk.linkedin.com/in/ben-copsey-826177a3',
                  },
                  sameAs: ['https://uk.linkedin.com/in/ben-copsey-826177a3'],
                  vatID: '17287274',
                },
                {
                  '@type': 'EmploymentAgency',
                  '@id': 'https://bcfinancialsearch.co.uk/#agency',
                  name: 'BC Financial Search',
                  url: 'https://bcfinancialsearch.co.uk',
                  logo: 'https://bcfinancialsearch.co.uk/bc-financial-logo-transparent.png',
                  image: 'https://bcfinancialsearch.co.uk/ben-about-headshot.jpeg',
                  description:
                    'Specialist accountancy practice and tax recruitment across the UK. 12 years specialist market experience, 200+ successful placements.',
                  areaServed: { '@type': 'Country', name: 'GB' },
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Centurion House, 129 Deansgate',
                    addressLocality: 'Manchester',
                    postalCode: 'M3 3WR',
                    addressCountry: 'GB',
                  },
                  telephone: '+44 7522 996561',
                  email: 'ben@bcfinancialsearch.co.uk',
                  sameAs: ['https://uk.linkedin.com/in/ben-copsey-826177a3'],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Recruitment Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Accountancy Practice Recruitment',
                          description:
                            'Specialist recruitment for accountancy practices: Tax, Audit & Assurance, Accounts & Business Services, Advisory, Payroll and Bookkeeping.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'In-House Tax Recruitment',
                          description:
                            'Specialist recruitment for in-house tax teams: Corporate Tax, Indirect Tax, International Tax, Transfer Pricing, and Employment Tax.',
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
