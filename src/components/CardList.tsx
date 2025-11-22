"use client"

import { useDeferredValue, useEffect, useMemo, useState } from "react"
import ProductCard from "./ProductCard"
import Pagination from "./Pagination"

export type Product = {
  id: number
  title: string
  snippet: string
  price: number
  brand: string
  category: string
  imageUrl: string
}

type CardListProps = {
  records: Product[]
}

const PAGE_SIZE = 12

export default function CardList({ records = [] }: CardListProps) {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const deferredSearch = useDeferredValue(search)

  const filtered = useMemo(() => {
    const q = deferredSearch.trim().toLowerCase()
    if (!q) return records

    return records?.filter((item) => {
      const title = item.title?.toLowerCase() ?? ""
      const brand = item.brand?.toLowerCase() ?? ""
      const category = item.category?.toLowerCase() ?? ""
      const snippet = item.snippet?.toLowerCase() ?? ""

      return (
        title.includes(q) ||
        brand.includes(q) ||
        category.includes(q) ||
        snippet.includes(q)
      )
    })
  }, [records, deferredSearch])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))

  // reset page when search changes
  useEffect(() => {
    setPage(1)
  }, [deferredSearch])

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages)
    }
  }, [page, totalPages])

  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return filtered?.slice(start, start + PAGE_SIZE)
  }, [filtered, page])

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-4">
      <div className="sticky top-0 z-10 bg-background/90 pb-3 pt-3 backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold">
            Products{" "}
            <span className="text-sm text-muted-foreground">
              ({filtered.length})
            </span>
          </h2>

          <input
            type="text"
            placeholder="Search by title, brand, or category..."
            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-foreground/80 sm:w-72"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Grid area */}
      <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginated?.map((item) => (
          <div key={item.id} className="flex justify-center">
            <ProductCard item={item} />
          </div>
        ))}
      </div>

      {filtered?.length === 0 && (
        <p className="mt-4 text-center">
          No products match your search.
        </p>
      )}

      {/* Sticky footer (pagination) */}
      {filtered?.length > 0 && (
        <div className="sticky bottom-0 z-10 bg-background/90 pb-2 backdrop-blur">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  )
}
