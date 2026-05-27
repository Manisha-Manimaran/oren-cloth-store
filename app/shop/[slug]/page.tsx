"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products, sizeGuide } from "@/lib/mockData";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find((p) => p.slug === slug);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<string>("description");
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!product) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-oren text-center py-20">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link href="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  return (
    <div className="pt-24 pb-16">
      <div className="container-oren">
        <nav className="flex items-center gap-2 text-xs text-gray-text mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-primary transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-primary truncate max-w-[150px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <div className="aspect-[3/4] bg-accent overflow-hidden relative mb-4">
              {product.images[0] && !imgError ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-accent to-gray-200 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
                    <path d="M12 4C8 4 4 6 4 10v4c0 2.5 2 4 4 4h8c2 0 4-1.5 4-4v-4c0-4-4-6-8-6z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button key={i} className={`w-16 h-20 bg-accent overflow-hidden relative border-2 transition-colors ${i === 0 ? "border-primary" : "border-transparent hover:border-border-medium"}`}>
                  <Image src={img} alt={`${product.name} ${i + 1}`} fill sizes="80px" className="object-cover object-center" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="inline-block text-[10px] font-medium tracking-wider bg-accent text-gray-dark px-3 py-1.5 border border-border-light mb-4">
              {product.gsm} GSM &middot; 100% Cotton
            </span>
            <h1 className="font-serif text-3xl md:text-4xl tracking-tight">
              {product.name}
            </h1>
            <p className="text-sm text-gray-text mt-2 capitalize">
              {product.color} &middot; {product.sleeve}
            </p>

            <div className="flex items-baseline gap-3 mt-6">
              <span className="text-2xl font-semibold">₹{product.price}</span>
              <span className="strike text-base">₹{product.mrp}</span>
              <span className="text-xs font-medium text-primary bg-accent px-2 py-0.5">Save {discount}%</span>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium tracking-wider uppercase">Size</span>
                <button onClick={() => setShowSizeGuide(!showSizeGuide)} className="text-xs text-gray-text hover:text-primary underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 text-sm font-medium border transition-colors ${
                      selectedSize === size
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-primary border-border-light hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {showSizeGuide && (
              <div className="mt-4 p-4 bg-accent border border-border-light">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium tracking-wider uppercase">Size Guide (in inches)</h4>
                  <button onClick={() => setShowSizeGuide(false)} className="text-gray-text hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border-light">
                      <th className="py-2 text-left font-medium">Size</th>
                      <th className="py-2 text-left font-medium">Chest</th>
                      <th className="py-2 text-left font-medium">Length</th>
                      <th className="py-2 text-left font-medium">Shoulder</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeGuide.map((row) => (
                      <tr key={row.size} className="border-b border-border-light/50">
                        <td className="py-2 font-medium">{row.size}</td>
                        <td className="py-2 text-gray-text">{row.chest}</td>
                        <td className="py-2 text-gray-text">{row.length}</td>
                        <td className="py-2 text-gray-text">{row.shoulder}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-6">
              <span className="text-sm font-medium tracking-wider uppercase block mb-3">Quantity</span>
              <div className="flex items-center border border-border-light w-fit">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-4 py-2.5 text-sm hover:bg-accent transition-colors">-</button>
                <span className="px-5 py-2.5 text-sm font-medium border-x border-border-light">{quantity}</span>
                <button onClick={() => setQuantity((q) => Math.min(10, q + 1))} className="px-4 py-2.5 text-sm hover:bg-accent transition-colors">+</button>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full btn-primary">Add to Cart &mdash; ₹{product.price * quantity}</button>
              <button className="w-full btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Add to Wishlist
              </button>
            </div>

            <div className="mt-8 border-t border-border-light">
              <button onClick={() => setActiveTab(activeTab === "description" ? "" : "description")} className="w-full flex items-center justify-between py-4 border-b border-border-light text-sm font-medium tracking-wider uppercase">
                Description
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${activeTab === "description" ? "rotate-180" : ""}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {activeTab === "description" && (
                <div className="py-4 text-sm text-gray-text leading-relaxed">
                  <p>{product.description}</p>
                  <ul className="mt-3 space-y-1">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button onClick={() => setActiveTab(activeTab === "shipping" ? "" : "shipping")} className="w-full flex items-center justify-between py-4 border-b border-border-light text-sm font-medium tracking-wider uppercase">
                Shipping Info
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${activeTab === "shipping" ? "rotate-180" : ""}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {activeTab === "shipping" && (
                <div className="py-4 text-sm text-gray-text leading-relaxed">
                  <p>Free shipping on orders above ₹999. Standard delivery takes 5-7 business days. We ship to all pin codes across India.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-border-light">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
