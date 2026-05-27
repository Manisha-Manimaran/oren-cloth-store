"use client";

import type { Product } from "@/lib/mockData";

interface CartItemProps {
  item: {
    product: Product;
    size: string;
    quantity: number;
  };
  onUpdateQuantity: (slug: string, size: string, delta: number) => void;
  onRemove: (slug: string, size: string) => void;
}

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex gap-4 py-5 border-b border-border-light last:border-b-0">
      <div className="w-20 h-24 sm:w-24 sm:h-28 bg-accent flex-shrink-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-accent to-gray-200" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-primary">
              {item.product.name}
            </h3>
            <p className="text-xs text-gray-text mt-0.5">
              Size: {item.size} &middot; {item.product.color}
            </p>
          </div>
          <button
            onClick={() => onRemove(item.product.slug, item.size)}
            className="text-gray-text hover:text-primary transition-colors p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-border-light">
            <button
              onClick={() =>
                onUpdateQuantity(item.product.slug, item.size, -1)
              }
              className="px-3 py-1.5 text-sm hover:bg-accent transition-colors"
            >
              -
            </button>
            <span className="px-3 py-1.5 text-sm font-medium border-x border-border-light min-w-[2rem] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() =>
                onUpdateQuantity(item.product.slug, item.size, 1)
              }
              className="px-3 py-1.5 text-sm hover:bg-accent transition-colors"
            >
              +
            </button>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">
              ₹{item.product.price * item.quantity}
            </p>
            <p className="text-xs text-gray-text">
              ₹{item.product.price} each
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
