"use client";

import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative h-[90vh] min-h-[600px] bg-primary overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=1600&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-man-wearing-a-black-t-shirt-and-leather-jacket-40318-large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)]" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.3em] uppercase text-white/60 mb-6">
            Premium Cotton Essentials
          </p>
          <h1 className="font-serif text-hero-sm md:text-hero-md lg:text-hero text-white leading-tight">
            Wear the
            <br />
            difference.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed">
            Premium cotton essentials. Wholesale &amp; retail. Made in Tamil
            Nadu, India.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/shop"
              className="bg-white text-primary px-10 py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
            <a
              href="/wholesale"
              className="border-2 border-white text-white px-10 py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-primary transition-colors"
            >
              Wholesale Inquiry
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
