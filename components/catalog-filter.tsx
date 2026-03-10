"use client"

import { useMemo, useState } from "react"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product-card"

export function CatalogFilter() {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const value = query.toLowerCase().trim()
    if (!value) return products
    return products.filter((item) => item.name.toLowerCase().includes(value) || item.shortDescription.toLowerCase().includes(value))
  }, [query])

  return (
    <div className="space-y-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск по каталогу..."
        className="w-full rounded-md border bg-background px-3 py-2"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
