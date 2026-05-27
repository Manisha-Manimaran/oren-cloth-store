import Link from "next/link";

export default function WholesalePage() {
  return (
    <div>
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-white/60 mb-4">
            Wholesale
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight">
            Partner with OREN
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Manufacturer direct. Minimum 50 pieces per style. Unbeatable prices
            for bulk orders across India.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 bg-white text-primary px-10 py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Why Wholesale with OREN?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Factory Direct", desc: "No middlemen. Best prices straight from the manufacturer." },
              { title: "100% Premium Cotton", desc: "GSM-certified fabrics. Consistent quality every batch." },
              { title: "Pan India Delivery", desc: "Reliable shipping to all states. Timely dispatch." },
              { title: "Custom Branding", desc: "Logo tags, custom packaging, neck labels available." },
              { title: "Sample Before Bulk", desc: "Request samples before placing your bulk order." },
              { title: "Flexible MOQ", desc: "Start from 50 pieces per style. Mix sizes within same style." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-border-light p-6 text-center hover:border-primary transition-colors">
                <h3 className="text-sm font-medium mb-2">{item.title}</h3>
                <p className="text-xs text-gray-text leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Pricing Tiers</h2>
            <p className="mt-3 text-sm text-gray-text">Higher volume, bigger discounts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: "50 – 99 pcs", discount: "30%", min: "50+" },
              { label: "100 – 499 pcs", discount: "40%", min: "100+" },
              { label: "500+ pcs", discount: "50%", min: "500+" },
            ].map((tier) => (
              <div key={tier.label} className="bg-white border border-border-light p-8 text-center">
                <p className="text-sm text-gray-text uppercase tracking-wider mb-2">{tier.label}</p>
                <p className="font-serif text-5xl text-primary mb-2">{tier.discount}</p>
                <p className="text-sm text-gray-text">off retail price</p>
                <div className="mt-4 pt-4 border-t border-border-light">
                  <p className="text-xs text-gray-text">{tier.min} pieces per style</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-text mt-6">* MOQ: 50 pieces per style. Sizes can be mixed within the same style.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">Ready to Start?</h2>
          <p className="text-sm text-gray-text mb-8 max-w-lg mx-auto">
            Contact us for a custom quote. Our team responds within 24 hours.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
