import Link from "next/link";
import { aboutStats, aboutTeam } from "@/lib/mockData";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-white/60 mb-4">
            About OREN
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
            Premium Cotton Essentials, Made in Tamil Nadu
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From a small workshop in Sirkazhi to a trusted brand across India. We
            craft 100% cotton clothing with uncompromising quality.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl md:text-5xl text-primary">{stat.value}</p>
                <p className="text-sm text-gray-text mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-accent border border-border-light flex items-center justify-center text-gray-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-gray-text mb-4">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                From Sirkazhi with Love
              </h2>
              <div className="space-y-4 text-sm text-gray-text leading-relaxed">
                <p>
                  OREN was founded in 2020 with a simple mission: create the
                  finest cotton essentials India has to offer. What started as a
                  small manufacturing unit in Sirkazhi, Tamil Nadu, has grown into
                  a trusted brand worn by thousands across the country.
                </p>
                <p>
                  We believe in the power of simplicity. No logos, no distractions.
                  Just premium cotton that feels good on your skin and lasts
                  wash after wash. Every piece is crafted in our own factory,
                  giving us complete control over quality from fiber to fabric.
                </p>
                <p>
                  Our name, OREN, draws inspiration from the notion of
                  &ldquo;organic essentials.&rdquo; We are committed to sustainable
                  practices, ethical manufacturing, and fair wages for every
                  artisan in our supply chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Our Journey</h2>
            <p className="mt-3 text-sm text-gray-text">Key milestones</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-0">
            {[
              { year: "2020", title: "Founded in Sirkazhi", desc: "Started with 5 sewing machines and a vision to make premium cotton essentials." },
              { year: "2021", title: "First 10,000 Orders", desc: "Expanded to 25 machines. Launched round neck and rib neck tees as core products." },
              { year: "2022", title: "Pan India Shipping", desc: "Began shipping to all 28 states. Built wholesale partnerships with 50+ retailers." },
              { year: "2023", title: "B2B Manufacturing Launch", desc: "Opened dedicated B2B division for bulk orders. MOQ of 50 pieces per style." },
              { year: "2024", title: "50K+ Products Sold", desc: "Crossed 50,000 products sold. Expanded into innerwear with premium trunks and briefs." },
              { year: "2025+", title: "Digital-First Expansion", desc: "Launched online store. Building toward becoming India's go-to cotton essentials brand." },
            ].map((item, i) => (
              <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  {i < 5 && <div className="w-px flex-1 bg-border-light" />}
                </div>
                <div className="flex-1 pb-2">
                  <span className="text-xs font-medium text-gray-text">{item.year}</span>
                  <h3 className="text-base font-medium mt-1">{item.title}</h3>
                  <p className="text-sm text-gray-text mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Meet the Team</h2>
            <p className="mt-3 text-sm text-gray-text">The people behind OREN</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutTeam.map((member) => (
              <div key={member.name} className="bg-white border border-border-light p-6 text-center hover:border-primary transition-colors">
                <div className="w-20 h-20 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <span className="font-serif text-2xl text-gray-text">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-medium text-sm">{member.name}</h3>
                <p className="text-xs text-gray-text mt-1">{member.role}</p>
                <p className="text-xs text-gray-text mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">What We Stand For</h2>
            <p className="mt-3 text-sm text-gray-text">Our core principles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "100% Cotton", desc: "We use only pure, premium cotton. No blends, no compromises on quality and comfort.", icon: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" },
              { title: "Made in India", desc: "Every piece is manufactured in our Sirkazhi factory, supporting local artisans and Indian textile heritage.", icon: "M12 2l-7 4v5c0 5.5 7 11 7 11s7-5.5 7-11V6l-7-4z" },
              { title: "Ethical Manufacturing", desc: "Fair wages, safe working conditions, and sustainable practices are non-negotiable for us.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-border-light p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={v.icon} />
                  </svg>
                </div>
                <h3 className="font-medium text-sm mb-2">{v.title}</h3>
                <p className="text-xs text-gray-text leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
            Ready to Experience OREN?
          </h2>
          <p className="text-sm text-gray-text mb-8 max-w-lg mx-auto">
            Whether you are shopping for yourself or looking for bulk orders, we
            are here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/shop" className="btn-primary">
              Shop Now
            </Link>
            <Link href="/b2b" className="btn-outline">
              B2B Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
