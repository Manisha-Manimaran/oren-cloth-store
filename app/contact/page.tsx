"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-white/60 mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight">
            Contact Us
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a question about our products, wholesale pricing, or anything
            else? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-6">
                  Reach Out to OREN
                </h2>
                <p className="text-sm text-gray-text leading-relaxed">
                  We typically respond within 24 hours. For urgent wholesale
                  inquiries, please call or WhatsApp us directly.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-xs text-gray-text mt-1">
                      OREN Clothing, Sirkazhi,<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone / WhatsApp</p>
                    <p className="text-xs text-gray-text mt-1">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-xs text-gray-text mt-1">hello@oren.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Business Hours</p>
                    <p className="text-xs text-gray-text mt-1">
                      Mon – Sat: 9:00 AM – 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent border border-border-light p-6">
                <h3 className="text-sm font-medium mb-2">Wholesale Inquiry?</h3>
                <p className="text-xs text-gray-text mb-4">
                  For bulk orders and B2B partnerships, use our dedicated
                  wholesale form for faster processing.
                </p>
                <Link href="/b2b" className="text-xs font-medium tracking-wider uppercase text-primary hover:underline">
                  B2B Booking Form →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-border-light p-6 md:p-8">
                <h2 className="text-sm font-medium tracking-wider uppercase mb-6">
                  Send Us a Message
                </h2>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl mb-2">Message Sent!</h3>
                    <p className="text-gray-text text-sm">
                      Thank you, {form.name}. We will get back to you within 24 hours.
                    </p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }} className="btn-primary mt-6">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium tracking-wider uppercase mb-2">
                          Your Name <span className="text-primary">*</span>
                        </label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange} className="input-oren" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium tracking-wider uppercase mb-2">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange} className="input-oren" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium tracking-wider uppercase mb-2">
                          Phone
                        </label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="input-oren" placeholder="Your phone number" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium tracking-wider uppercase mb-2">
                          Subject
                        </label>
                        <select name="subject" value={form.subject} onChange={handleChange} className="input-oren">
                          <option value="">Select subject...</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Order Issue">Order Issue</option>
                          <option value="Wholesale">Wholesale / B2B</option>
                          <option value="Returns">Returns & Exchange</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase mb-2">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea name="message" required value={form.message} onChange={handleChange} rows={5} className="input-oren resize-none" placeholder="Tell us how we can help..." />
                    </div>
                    <button type="submit" className="w-full btn-primary">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-64 md:h-80 bg-accent border-t border-border-light flex items-center justify-center text-gray-text">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="text-xs">Sirkazhi, Tamil Nadu — Map Integration</p>
        </div>
      </section>
    </div>
  );
}
