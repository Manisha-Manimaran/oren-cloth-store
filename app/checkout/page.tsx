"use client";

import Link from "next/link";
import CheckoutForm from "@/components/CheckoutForm";
import { products } from "@/lib/mockData";

const cartItems = [
  { product: products[0], size: "M", quantity: 2 },
  { product: products[4], size: "L", quantity: 1 },
];

export default function CheckoutPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 49;
  const total = subtotal + shipping;

  return (
    <div className="pt-20 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/cart" className="text-xs text-gray-text hover:text-primary transition-colors inline-flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Cart
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl tracking-tight">Checkout</h1>
          <p className="text-sm text-gray-text mt-1">Complete your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="bg-white border border-border-light p-6 md:p-8">
              <h2 className="text-sm font-medium tracking-wider uppercase mb-6">Shipping Details</h2>
              <CheckoutForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-accent border border-border-light p-6 md:p-8 sticky top-28">
              <h2 className="text-sm font-medium tracking-wider uppercase mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/5 border border-border-light flex-shrink-0 flex items-center justify-center text-xs text-gray-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.product.name}</p>
                      <p className="text-xs text-gray-text">{item.product.color} / {item.size} × {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium">₹{item.product.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border-light pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-text">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-text">Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-medium text-base pt-2 border-t border-border-light">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white border border-border-light text-xs text-gray-text">
                <p className="font-medium text-primary mb-1">Free Shipping</p>
                <p>Orders above ₹999 qualify for free shipping across India.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
