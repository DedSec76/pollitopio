"use client"

import { useState } from "react"
import { products } from "@/data/products"
import ProductCard from "./ProductCard"

export default function ProductSection() {
  const [filter, setFilter] = useState("all")

  const filtered =
    filter === "all"
      ? products
      : products.filter(p => p.category === filter)

  return (
    <section id="menu" className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Nuestro Menú 🍗
      </h2>

      <div className="flex justify-center gap-4 mb-8">
        {["all", "pollo", "chaufa", "combo"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-4 py-2 border rounded-lg hover:bg-orange-500 hover:text-white"
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}