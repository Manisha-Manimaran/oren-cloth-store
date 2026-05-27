"use client";

import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import { products, categories } from "@/lib/mockData";

export default function AdminProductsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCategory = activeTab === "all" || p.category === activeTab;
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-accent flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-border-light px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-text"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-border-light focus:outline-none focus:border-primary bg-accent"
                />
              </div>
            </div>
            <button className="btn-primary text-xs px-5 py-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Product
            </button>
          </div>
        </header>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-serif text-2xl md:text-3xl tracking-tight">
              Products
            </h1>
            <span className="text-xs text-gray-text">{filtered.length} products</span>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs font-medium border transition-colors ${
                activeTab === "all"
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border-border-light hover:border-primary"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveTab(cat.name)}
                className={`px-4 py-2 text-xs font-medium border transition-colors ${
                  activeTab === cat.name
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-primary border-border-light hover:border-primary"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products Table */}
          <div className="bg-white border border-border-light overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-light bg-accent/50">
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text w-12">#</th>
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">Product</th>
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">Category</th>
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">Price</th>
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">MRP</th>
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">GSM</th>
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">Sizes</th>
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">Stock</th>
                    <th className="text-right px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((product, i) => (
                    <tr key={product.id} className="border-b border-border-light hover:bg-accent/30 transition-colors">
                      <td className="px-6 py-4 text-xs text-gray-text">{i + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-accent border border-border-light flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{product.name}</p>
                            <p className="text-xs text-gray-text">{product.color}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs px-2 py-1 bg-accent border border-border-light">{product.category}</span>
                      </td>
                      <td className="px-6 py-4 font-medium">₹{product.price}</td>
                      <td className="px-6 py-4 text-gray-text line-through">₹{product.mrp}</td>
                      <td className="px-6 py-4 text-xs">{product.gsm} GSM</td>
                      <td className="px-6 py-4 text-xs">{product.sizes.join(", ")}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block text-[10px] font-medium tracking-wider px-2.5 py-1 border ${
                          product.inStock
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-red-100 text-red-800 border-red-200"
                        }`}>
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 text-gray-text hover:text-primary transition-colors" title="Edit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                          </button>
                          <button className="p-1.5 text-gray-text hover:text-red-600 transition-colors" title="Delete">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-12 text-sm text-gray-text">
                No products found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
