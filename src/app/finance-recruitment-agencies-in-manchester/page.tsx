import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Finance Recruitment Agencies in Manchester' },
  description:
    'A practical directory of finance and accountancy recruiters in Manchester. Corporate firms and specialist. The right one depends on what kind of search you need.',
  openGraph: { title: 'Finance Recruitment Agencies in Manchester' },
};

interface AgencyEntry {
  name: string;
  founded: string;
  location: string;
  story: string;
  recruits: string;
}

const agencies: AgencyEntry[] = [
  {
    name: 'Hays',
    founded: '1867',
    location: 'The Thames, London',
    story:
      'Started as a shipping company. Moved into recruitment in the 1960s. Now places someone into a new job every 30 seconds. Listed on the LSE. 33 countries.',
    recruits:
      'Every sector and level. Finance is one desk among many. You might get a specialist. You might get whoever is available.',
  },
  {
    name: 'Robert Half',
    founded: '1948',
    location: 'San Francisco',
    story:
      'Bob Half started it with $500 from his mother-in-law and a single desk. Invented the financial recruitment specialism as a category. Now NYSE-listed. 300+ offices worldwide.',
    recruits:
      'Qualified accountants, financial services, and senior interim. Corporate finance focus. Practice and tax are not their main desk.',
  },
  {
    name: 'Michael Page',
    founded: '1976',
    location: 'London',
    story:
      'Michael Page was 30 when he co-founded it. He thought he could do recruitment better. Took it public in 1988. Left the business in 1995. Now FTSE 250. The name stayed. The person didn\u2019t.',
    recruits:
      'Qualified finance, treasury, audit, and tax. Mainly into commerce and industry. Some practice coverage but it is not their focus. Broad remit. Brand-driven.',
  },
  {
    name: 'Marks Sattin',
    founded: '1988',
    location: 'London',
    story:
      'One of the first UK firms to go specialist-only in finance rather than running a finance desk inside a generalist agency. Acquired. Founders have long since moved on. The brand outlasted them.',
    recruits:
      'Accountancy, audit, tax, and financial services from newly qualified to director. Specialist name, corporate ownership. Finance-only, but broad within it.',
  },
  {
    name: 'Sellick Partnership',
    founded: '2002',
    location: 'Manchester',
    story:
      'Jo Sellick started it from a spare bedroom in Manchester. Still headquartered here. Won multiple Best Place to Work awards. Around 60\u201380 staff.',
    recruits:
      'Finance, legal, and actuarial across the North West. Finance is a major desk, but one of several.',
  },
  {
    name: 'Axon Moore',
    founded: '2007',
    location: 'Manchester',
    story:
      'Deliberately built as mid-market: not too big, not too small. A decent firm. But built to be a team, not a person.',
    recruits:
      'Accountants from transactional through to FD. Covers practice, industry, and public sector across the North West. Finance-only, but covers everything within it.',
  },
];

export default function FinanceRecruitmentAgenciesManchesterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="container-page py-16 sm:py-20 lg:py-24">
          <p className="eyebrow mb-5">Manchester</p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight text-white max-w-3xl">
            Finance Recruitment Agencies in Manchester
          </h1>
          <span className="gold-rule" />
          <p className="text-base sm:text-lg leading-7 text-white/75 max-w-2xl">
            A practical directory of finance and accountancy recruiters in
            Manchester. Large corporate firms alongside smaller specialists.
            The right one depends on what kind of search you need.
          </p>
        </div>
      </section>

      {/* Agency listings */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="max-w-3xl space-y-14">
            {agencies.map((agency) => (
              <div key={agency.name}>
                <div className="flex items-baseline gap-3 mb-1">
                  <h2 className="font-heading text-2xl sm:text-3xl text-navy">
                    {agency.name}
                  </h2>
                  <span className="text-xs uppercase tracking-wider text-navy/40">
                    Est. {agency.founded}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-4">
                  Founded in {agency.location}
                </p>
                <p className="body-copy mb-3">{agency.story}</p>
                <p className="body-copy">{agency.recruits}</p>
              </div>
            ))}

            {/* BC Financial Search */}
            <div className="border-t-2 border-gold pt-14">
              <div className="flex items-baseline gap-3 mb-1">
                <h2 className="font-heading text-2xl sm:text-3xl text-navy">
                  BC Financial Search
                </h2>
                <span className="text-xs uppercase tracking-wider text-navy/40">
                  Est. 2026
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-4">
                Founded in Manchester. Based on Deansgate.
              </p>
              <div className="body-copy space-y-4">
                <p>
                  One person. 12 years in this market. Built to stay personal.
                </p>
                <p>
                  Accountancy practice and in-house tax. Nothing else. Every
                  candidate. Every client. Every search. That is what this
                  person does.
                </p>
                <p>
                  One point of contact from first conversation to start date and
                  beyond. That matters or it doesn&rsquo;t, depending on the
                  hire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="section bg-warm-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">How to choose</p>
            <h2 className="section-title mb-6">
              The right recruiter depends on the hire
            </h2>
            <span className="gold-rule" />
            <div className="body-copy space-y-3 mb-10">
              <p>Some hires need reach. Others need attention.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/clients" className="btn-gold">
                I&rsquo;m hiring. Discuss your brief.
              </Link>
              <Link href="/candidates" className="btn-outline">
                I&rsquo;m a candidate. Start a conversation.
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section bg-navy text-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">Get in touch</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mb-6">
              Start with a conversation
            </h2>
            <span className="gold-rule" />
            <div className="body-copy text-white/75 space-y-3 mb-8">
              <p>Ben Copsey. BC Financial Search.</p>
              <p>Centurion House, 129 Deansgate, Manchester, M3 3WR.</p>
              <p>
                <a
                  href="tel:07522996561"
                  className="text-gold hover:text-gold-500 transition-colors"
                >
                  07522 996561
                </a>
              </p>
              <p>
                <a
                  href="mailto:ben@bcfinancialsearch.co.uk"
                  className="text-gold hover:text-gold-500 transition-colors"
                >
                  ben@bcfinancialsearch.co.uk
                </a>
              </p>
            </div>
            <p className="text-sm text-white/50">
              No cost. No pressure. Confidential.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
