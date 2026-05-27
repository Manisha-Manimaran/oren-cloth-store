"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { products } from "@/lib/mockData";

const ITEMS_PER_PAGE = 9;

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedSleeves, setSelectedSleeves] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceMax, setPriceMax] = useState(1000);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((p) =>
        p.sizes.some((s) => selectedSizes.includes(s))
      );
    }
    if (selectedSleeves.length > 0) {
      filtered = filtered.filter((p) =>
        selectedSleeves.includes(p.sleeve)
      );
    }
    if (selectedColors.length > 0) {
      filtered = filtered.filter((p) =>
        selectedColors.includes(p.color)
      );
    }
    filtered = filtered.filter((p) => p.price <= priceMax);

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategories, selectedSizes, selectedSleeves, selectedColors, priceMax, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const activeFilterPills: { label: string; onRemove: () => void }[] = [];
  selectedCategories.forEach((cat) =>
    activeFilterPills.push({
      label: cat,
      onRemove: () =>
        setSelectedCategories((prev) => prev.filter((c) => c !== cat)),
    })
  );
  selectedSizes.forEach((size) =>
    activeFilterPills.push({
      label: `Size: ${size}`,
      onRemove: () =>
        setSelectedSizes((prev) => prev.filter((s) => s !== size)),
    })
  );

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedSleeves([]);
    setSelectedColors([]);
    setPriceMax(1000);
    setCurrentPage(1);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-oren">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl tracking-tight">
            Shop All
          </h1>
          <p className="text-sm text-gray-text mt-2">
            {filteredProducts.length} products
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-6 min-h-[2rem]">
          {activeFilterPills.map((pill, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-xs font-medium border border-border-light"
            >
              {pill.label}
              <button onClick={pill.onRemove} className="hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </span>
          ))}
          {activeFilterPills.length > 0 && (
            <button
              onClick={clearAll}
              className="text-xs text-gray-text hover:text-primary underline ml-2"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="flex items-center justify-between mb-6 gap-4">
          <button
            className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2.5 border border-border-light hover:border-primary transition-colors"
            onClick={() => setMobileFilterOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="12" y1="18" x2="20" y2="18" />
            </svg>
            Filters
            {activeFilterPills.length > 0 && (
              <span className="w-4 h-4 rounded-full bg-primary text-white text-[10px] flex items-center justify-center">{activeFilterPills.length}</span>
            )}
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-border-light px-4 py-2 bg-white focus:outline-none focus:border-primary"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedSizes={selectedSizes}
              setSelectedSizes={setSelectedSizes}
              selectedSleeves={selectedSleeves}
              setSelectedSleeves={setSelectedSleeves}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
            />
          </aside>

          <div className="flex-1">
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 text-sm border border-border-light hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 text-sm border transition-colors ${
                          page === currentPage
                            ? "bg-primary text-white border-primary"
                            : "border-border-light hover:border-primary"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 text-sm border border-border-light hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-text">No products match your filters.</p>
                <button onClick={clearAll} className="mt-4 btn-outline text-sm">Clear Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Bottom Sheet */}
      {mobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
          <div className="relative w-full bg-white rounded-t-2xl shadow-xl max-h-[85vh] flex flex-col animate-slide-up">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border-light">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 rounded-full bg-border-medium mx-auto" />
              </div>
              <h2 className="text-sm font-medium tracking-widest uppercase">Filters</h2>
              <button onClick={() => setMobileFilterOpen(false)} className="p-1 hover:opacity-70">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <FilterSidebar
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedSizes={selectedSizes}
                setSelectedSizes={setSelectedSizes}
                selectedSleeves={selectedSleeves}
                setSelectedSleeves={setSelectedSleeves}
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
                priceMax={priceMax}
                setPriceMax={setPriceMax}
              />
            </div>
            <div className="px-5 py-4 border-t border-border-light">
              <button onClick={() => setMobileFilterOpen(false)} className="w-full btn-primary">
                Show Results ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
