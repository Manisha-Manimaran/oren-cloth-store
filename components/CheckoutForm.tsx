"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl mb-2">Order Placed!</h3>
        <p className="text-gray-text mb-6">
          Thank you for your order. We&apos;ll send a confirmation to {form.email}.
        </p>
        <button onClick={() => router.push("/shop")} className="btn-primary">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase mb-2">
            Full Name <span className="text-primary">*</span>
          </label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} className="input-oren" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase mb-2">
            Email <span className="text-primary">*</span>
          </label>
          <input type="email" name="email" required value={form.email} onChange={handleChange} className="input-oren" placeholder="your@email.com" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium tracking-wider uppercase mb-2">
          Phone <span className="text-primary">*</span>
        </label>
        <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="input-oren" placeholder="Phone number" />
      </div>
      <div>
        <label className="block text-xs font-medium tracking-wider uppercase mb-2">
          Shipping Address <span className="text-primary">*</span>
        </label>
        <textarea name="address" required value={form.address} onChange={handleChange} rows={3} className="input-oren resize-none" placeholder="Street, building, area" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase mb-2">City</label>
          <input type="text" name="city" value={form.city} onChange={handleChange} className="input-oren" placeholder="City" />
        </div>
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase mb-2">State</label>
          <input type="text" name="state" value={form.state} onChange={handleChange} className="input-oren" placeholder="State" />
        </div>
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase mb-2">Pincode</label>
          <input type="text" name="pincode" value={form.pincode} onChange={handleChange} className="input-oren" placeholder="Pincode" />
        </div>
      </div>
      <div className="bg-accent p-4 border border-border-light text-sm text-gray-text">
        <p className="font-medium text-primary mb-1">🔒 Secure Payment</p>
        <p>Payment will be processed securely via Razorpay. We do not store your card or UPI details.</p>
      </div>
      <button type="submit" className="w-full btn-primary">
        Place Order
      </button>
    </form>
  );
}
