import Link from 'next/link';
import { BcIcon } from '@/components/bc-icon';

const items = [
  { icon: 'clipboard' as const, title: 'Register Your Interest', desc: "Send us your CV and we'll match you with roles that fit your expertise and career goals." },
  { icon: 'shield' as const, title: 'Complete Discretion', desc: 'Your search is confidential. We never share your details without your explicit permission.' },
  { icon: 'target' as const, title: 'Quality Over Volume', desc: 'We focus on finding the right long-term fit — not just filling a vacancy.' },
  { icon: 'phone' as const, title: 'Partner-Led Approach', desc: "You'll deal directly with a senior consultant who knows the market inside out." },
];

export default function CandidatesPage() {
  return (
    <main className="min-h-screen bg-navy">
      <section className="section container-page">
        <p className="font-heading italic text-gold text-lg text-center mb-4">&mdash; For Candidates &mdash;</p>
        <h1 className="font-sans text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Your next role in <span className="text-gold">practice & tax</span>
        </h1>
        <p className="text-white/50 text-sm text-center max-w-xl mx-auto mb-12">
          We represent talented professionals at every level across practice and in-house tax.
        </p>
        <div className="max-w-3xl mx-auto space-y-8">
          {items.map(item => (
            <div key={item.title} className="flex gap-4 sm:gap-6 items-start">
              <div className="icon-circle-sm text-gold shrink-0">
                <BcIcon name={item.icon} size={16} />
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/jobs" className="btn-gold">Browse Current Opportunities</Link>
        </div>
      </section>
    </main>
  );
}
