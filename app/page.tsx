import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { categories, newArrivals } from "@/lib/mockData";

export default function Home() {
  return (
    <div>
      <HeroBanner />

      <section className="bg-accent py-3 overflow-hidden border-y border-border-light">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-8 px-4">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              FREE SHIPPING ABOVE ₹999
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              NEW ARRIVALS
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              BULK ORDERS WELCOME
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              MADE IN INDIA
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              100% COTTON
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              FREE SHIPPING ABOVE ₹999
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              NEW ARRIVALS
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              BULK ORDERS WELCOME
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              MADE IN INDIA
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              100% COTTON
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-oren">
          <div className="text-center mb-12">
            <h2 className="section-title">Shop by Category</h2>
            <p className="mt-3 text-sm text-gray-text">
              Premium cotton essentials crafted for comfort
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.name}
                name={cat.name}
                slug={cat.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent">
        <div className="container-oren">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="section-title">New Arrivals</h2>
              <p className="mt-3 text-sm text-gray-text">
                Fresh drops from our latest collection
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium tracking-wider uppercase hover:opacity-70 transition-opacity"
            >
              View All
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-1 text-sm font-medium tracking-wider uppercase"
            >
              View All
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-oren">
          <div className="text-center mb-14">
            <h2 className="section-title">Why OREN</h2>
            <p className="mt-3 text-sm text-gray-text">
              Built different. Made better.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-sm font-medium tracking-wider uppercase mb-2">
                100% Cotton
              </h3>
              <p className="text-xs text-gray-text leading-relaxed">
                Premium cotton with GSM certification. Soft, breathable, and
                durable.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-sm font-medium tracking-wider uppercase mb-2">
                Pan India Shipping
              </h3>
              <p className="text-xs text-gray-text leading-relaxed">
                We deliver across all states in India. Fast and reliable
                logistics.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-sm font-medium tracking-wider uppercase mb-2">
                Bulk Orders from 50 pcs
              </h3>
              <p className="text-xs text-gray-text leading-relaxed">
                Low MOQ for wholesale partners. Mix sizes within same style.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-sm font-medium tracking-wider uppercase mb-2">
                Manufacturer Direct Price
              </h3>
              <p className="text-xs text-gray-text leading-relaxed">
                No middlemen. Get the best prices straight from the
                manufacturer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
