export default function ContactPage() {
  return (
    <main className="min-h-screen bg-navy">
      <section className="section container-page">
        <p className="font-heading italic text-gold text-lg text-center mb-4">&mdash; Get in Touch &mdash;</p>
        <h1 className="font-sans text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Let&apos;s start a <span className="text-gold">conversation</span>
        </h1>
        <p className="text-white/50 text-sm text-center max-w-xl mx-auto mb-12">
          Whether you&apos;re hiring or looking for your next role, we&apos;d love to hear from you.
        </p>

        <div className="max-w-lg mx-auto">
          <div className="bg-navy-800 border border-gold/10 rounded-card p-6 sm:p-8 space-y-6">
            {[
              { emoji: '📧', label: 'Email', value: 'ben@bcfinancialsearch.co.uk', href: 'mailto:ben@bcfinancialsearch.co.uk' },
              { emoji: '📞', label: 'Phone', value: '+44 7700 900123', href: 'tel:+447700900123' },
              { emoji: '📍', label: 'Location', value: 'London, UK', href: null },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="icon-circle-sm text-gold shrink-0">{item.emoji}</div>
                <div>
                  <p className="text-[10px] tracking-wider text-gold font-semibold mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-white/80 text-sm hover:text-gold transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/80 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/40 text-xs mt-8">
            We aim to respond to all enquiries within 24 hours.
          </p>
        </div>
      </section>
    </main>
  );
}
