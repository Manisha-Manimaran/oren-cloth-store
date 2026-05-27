"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-accent flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white border border-border-light p-8 md:p-10">
        <div className="text-center mb-8">
          <Link href="/" className="font-serif text-3xl tracking-wider block">
            OREN
          </Link>
          <p className="text-xs text-gray-text mt-2 tracking-wider uppercase">
            Admin Login
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-medium tracking-wider uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-oren"
              placeholder="admin@oren.in"
            />
          </div>
          <div>
            <label className="block text-xs font-medium tracking-wider uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-oren"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full btn-primary">
            Sign In
          </button>
        </form>
        <Link
          href="/"
          className="block text-center text-xs text-gray-text mt-6 hover:text-primary transition-colors"
        >
          Back to site
        </Link>
      </div>
    </div>
  );
}
