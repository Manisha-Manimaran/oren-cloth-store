"use client";

import { allSizes, allSleeves, allColors } from "@/lib/mockData";

interface FilterSidebarProps {
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;
  selectedSizes: string[];
  setSelectedSizes: (val: string[]) => void;
  selectedSleeves: string[];
  setSelectedSleeves: (val: string[]) => void;
  selectedColors: string[];
  setSelectedColors: (val: string[]) => void;
  priceMax: number;
  setPriceMax: (val: number) => void;
}

const categories = [
  "Round Neck Tees",
  "Rib Neck Tees",
  "Oversized Tees",
  "Trunks",
  "Briefs",
];

export default function FilterSidebar({
  selectedCategories,
  setSelectedCategories,
  selectedSizes,
  setSelectedSizes,
  selectedSleeves,
  setSelectedSleeves,
  selectedColors,
  setSelectedColors,
  priceMax,
  setPriceMax,
}: FilterSidebarProps) {
  const toggleFilter = (
    value: string,
    current: string[],
    setter: (val: string[]) => void
  ) => {
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setter(updated);
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedSleeves([]);
    setSelectedColors([]);
    setPriceMax(1000);
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedSizes.length > 0 ||
    selectedSleeves.length > 0 ||
    selectedColors.length > 0 ||
    priceMax < 1000;

  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium tracking-widest uppercase">Category</h3>
          {hasActiveFilters && (
            <button onClick={clearAll} className="text-xs text-gray-text hover:text-primary underline">Clear all</button>
          )}
        </div>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleFilter(cat, selectedCategories, setSelectedCategories)}
                className="w-4 h-4 border-border-medium accent-primary"
              />
              <span className="text-sm text-gray-text group-hover:text-primary transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="text-sm font-medium tracking-widest uppercase mb-4">Size</h3>
        <div className="flex flex-wrap gap-2">
          {allSizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
              className={`w-10 h-10 text-sm border transition-colors ${
                selectedSizes.includes(size)
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border-border-light hover:border-primary"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Sleeve */}
      <div>
        <h3 className="text-sm font-medium tracking-widest uppercase mb-4">Sleeve</h3>
        <div className="space-y-2">
          {allSleeves.map((sleeve) => (
            <label key={sleeve} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedSleeves.includes(sleeve)}
                onChange={() => toggleFilter(sleeve, selectedSleeves, setSelectedSleeves)}
                className="w-4 h-4 border-border-medium accent-primary"
              />
              <span className="text-sm text-gray-text group-hover:text-primary transition-colors">{sleeve}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="text-sm font-medium tracking-widest uppercase mb-4">Color</h3>
        <div className="flex flex-wrap gap-3">
          {allColors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleFilter(color.name, selectedColors, setSelectedColors)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColors.includes(color.name)
                  ? "border-primary scale-110"
                  : "border-border-medium hover:border-primary"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-medium tracking-widest uppercase mb-4">Price Range</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceMax}
            onChange={(e) => setPriceMax(parseInt(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-gray-text">
            <span>₹0</span>
            <span>₹{priceMax}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
