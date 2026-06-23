import type { Metadata } from 'next';
import { BcIcon } from '@/components/bc-icon';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation. All enquiries handled personally and in confidence.',
};

const contacts = [
  { icon: 'mail' as const, label: 'Email', value: 'ben@bcfinancialsearch.co.uk', href: 'mailto:ben@bcfinancialsearch.co.uk' },
  { icon: 'phone' as const, label: 'Phone', value: '07522996561', href: 'tel:07522996561' },
  { icon: 'location' as const, label: 'Location', value: 'Manchester, United Kingdom', href: null },
];

export default function ContactPage() {
  return (
    <>
      <section className="split-hero">
        <div className="split-hero-grid">
          <div className="split-hero-copy">
            <p className="eyebrow mb-5">Contact</p>
            <h1 className="hero-title">Start with a <span className="text-gold">conversation.</span></h1>
            <span className="gold-rule" />
            <div className="space-y-5 body-copy max-w-xl">
              <p>Whether you are considering your next career move, planning an important hire or simply looking for a clearer view of the market, I would be happy to hear from you.</p>
              <p>Every enquiry is handled personally, discreetly and in confidence.</p>
            </div>
          </div>
          <div className="split-hero-media">
            <img src="/hero-about.png" alt="Confidential recruitment conversation in Manchester" />
          </div>
        </div>
      </section>

      <section className="section bg-warm-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div>
            <p className="eyebrow mb-4">Get In Touch</p>
            <h2 className="section-title text-3xl sm:text-4xl">Your priorities shape the search.</h2>
            <span className="gold-rule" />
            <p className="body-copy max-w-xl">
              Tell me what you are looking to achieve: a better career move, an important hire or simply a clearer view of the market.
            </p>
            <p className="body-copy max-w-xl mt-4">
              Every enquiry is handled personally and in confidence.
            </p>
          </div>

          <div className="bg-white border border-navy/10 rounded-card shadow-card p-7 sm:p-10">
            <div className="space-y-7">
              {contacts.map(item => (
                <div key={item.label} className="flex items-center gap-5">
                  <div className="icon-circle-sm text-gold shrink-0">
                    <BcIcon name={item.icon} size={18} strokeWidth={1.4} />
                  </div>
                  <div>
                    <p className="eyebrow mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-navy text-base hover:text-gold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-navy text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-navy/10">
              <p className="text-sm leading-7 text-navy/65">
                I aim to respond to all enquiries within one business day. Career conversations and hiring discussions are treated in confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
