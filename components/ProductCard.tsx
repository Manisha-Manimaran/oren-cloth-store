"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/mockData";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [imgError, setImgError] = useState(false);
  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  return (
    <div className="group relative bg-white">
      <div className="relative aspect-[3/4] bg-accent overflow-hidden">
        {product.images[0] && !imgError ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 mx-auto mb-2">
                <path d="M12 4C8 4 4 6 4 10v4c0 2.5 2 4 4 4h8c2 0 4-1.5 4-4v-4c0-4-4-6-8-6z" />
              </svg>
              <p className="text-[10px] text-gray-text uppercase tracking-wider">{product.category}</p>
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] font-medium tracking-wider bg-white text-primary px-2 py-1 border border-border-light shadow-sm">
            {product.gsm} GSM
          </span>
        </div>
        {discount > 0 && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[10px] font-medium tracking-wider bg-primary text-white px-2 py-1">
              {discount}% OFF
            </span>
          </div>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            setWishlisted(!wishlisted);
          }}
          className="absolute top-11 right-3 z-10 p-1.5 bg-white/80 hover:bg-white transition-colors rounded-full opacity-0 group-hover:opacity-100 shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={wishlisted ? "text-primary" : "text-primary"}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-end z-10">
          <button className="w-full bg-primary text-white text-xs font-medium tracking-wider uppercase py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
            Quick Add
          </button>
        </div>
      </div>
      <Link href={`/shop/${product.slug}`}>
        <div className="pt-4 pb-2">
          <h3 className="text-sm font-medium text-primary truncate">{product.name}</h3>
          <p className="text-xs text-gray-text mt-0.5 capitalize">{product.color}</p>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-sm font-semibold text-primary">₹{product.price}</span>
            <span className="strike text-xs">₹{product.mrp}</span>
          </div>
          <p className="text-[10px] text-gray-text mt-1 uppercase tracking-wider">{product.sleeve}</p>
        </div>
      </Link>
    </div>
  );
}
