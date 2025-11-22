'use client'

import Image from "next/image";
import type { Product } from "./CardList"

interface ProductCardProps {
  item: Product;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="group w-full max-w-sm rounded-2xl border border-gray-300 overflow-hidden flex flex-col transition-all duration-200 hover:shadow-lg hover:shadow-foreground hover:-translate-y-1">
      <div className="relative w-full">
        <Image
          width={200}
          height={200}
          src={item.imageUrl}
          alt={item.title}
          className="w-[80%] mx-auto object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-3">
        <h3 className="mb-2 text-center text-lg font-semibold text-card-foreground">
          {item.title}
        </h3>

        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-foreground/70 px-3 py-1 text-sm font-medium text-background">
            {item.category}
          </span>
          <span className="text-sm font-bold text-white border-2 bg-primary px-2 py-1 rounded-full border-background">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="mb-3 flex-1 text-sm text-muted-foreground line-clamp-2 text-center leading-relaxed">
          {item.snippet}
        </p>

        <button className="w-full rounded-full bg-foreground px-4 py-2.5 text-md font-medium text-background transition-colors hover:bg-primary/90 active:bg-primary/80 hover:text-white">
          View Details
        </button>
      </div>
    </div>
  );
}
