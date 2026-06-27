import type { Metadata } from 'next';
import './globals.css';
import { PublicLayout } from '@/components/public-layout';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    template: siteConfig.seo.template,
    default: siteConfig.seo.defaultTitle,
  },
  description: siteConfig.seo.defaultDescription,
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { fonts, schema, url, name, legalName, tagline, contact, founder, company } = siteConfig;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${url}/#organization`,
        name,
        legalName,
        url,
        logo: schema.logo,
        image: schema.image,
        description: tagline,
        email: contact.email,
        telephone: `+44 ${contact.phone.replace(/^0/, '').replace(/\s/g, '')}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.address.split(',')[0],
          addressLocality: contact.location.split(',')[0],
          postalCode: company.address.split(', ').pop() || '',
          addressCountry: 'GB',
        },
        foundingDate: schema.foundingDate,
        founder: {
          '@type': 'Person',
          name: founder.name,
          jobTitle: founder.title,
          sameAs: founder.linkedin,
        },
        sameAs: [founder.linkedin],
        vatID: company.number,
      },
      {
        '@type': 'EmploymentAgency',
        '@id': `${url}/#agency`,
        name,
        url,
        logo: schema.logo,
        image: schema.image,
        description: tagline,
        areaServed: { '@type': 'Country', name: 'GB' },
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.address.split(',')[0],
          addressLocality: contact.location.split(',')[0],
          postalCode: company.address.split(', ').pop() || '',
          addressCountry: 'GB',
        },
        telephone: `+44 ${contact.phone.replace(/^0/, '').replace(/\s/g, '')}`,
        email: contact.email,
        sameAs: [founder.linkedin],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Recruitment Services',
          itemListElement: schema.services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.name, description: s.description },
          })),
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {fonts.googlePreconnect.map((href) => (
          <link key={href} rel="preconnect" href={href} crossOrigin="anonymous" />
        ))}
        <link href={fonts.googleFontsUrl} rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
