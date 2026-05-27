"use client";

import { useState } from "react";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import { products } from "@/lib/mockData";

interface CartEntry {
  product: (typeof products)[0];
  size: string;
  quantity: number;
}

const initialCart: CartEntry[] = [
  { product: products[0], size: "M", quantity: 2 },
  { product: products[4], size: "L", quantity: 1 },
  { product: products[8], size: "XL", quantity: 1 },
];

export default function CartPage() {
  const [cart, setCart] = useState<CartEntry[]>(initialCart);
  const [discountCode, setDiscountCode] = useState("");

  const updateQuantity = (slug: string, size: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.slug === slug && item.size === size
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (slug: string, size: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.slug === slug && item.size === size)
      )
    );
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="pt-24 pb-16">
      <div className="container-oren">
        <h1 className="font-serif text-3xl md:text-4xl tracking-tight mb-2">
          Shopping Cart
        </h1>
        <p className="text-sm text-gray-text mb-10">
          {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
        </p>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="border-t border-border-light">
                {cart.map((item) => (
                  <CartItem
                    key={`${item.product.slug}-${item.size}`}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="bg-accent p-6 border border-border-light">
                <h2 className="text-sm font-medium tracking-widest uppercase mb-6">
                  Order Summary
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-text">Subtotal</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-text">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-green-600 text-xs">FREE</span>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>
                  {subtotal < 999 && (
                    <p className="text-[11px] text-gray-text">
                      Add ₹{999 - subtotal} more for free shipping
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-5 border-t border-border-light">
                  <div className="flex gap-2 mb-5">
                    <input
                      type="text"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      placeholder="Discount code"
                      className="flex-1 input-oren text-xs"
                    />
                    <button className="btn-primary text-xs px-5 py-2.5 whitespace-nowrap">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border-light">
                  <span className="text-sm font-medium tracking-wider uppercase">
                    Total
                  </span>
                  <span className="text-xl font-semibold">₹{total}</span>
                </div>

                <button className="w-full btn-primary mt-6">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-gray-text mb-4"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <p className="text-gray-text mb-4">Your cart is empty</p>
            <Link href="/shop" className="btn-outline">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
