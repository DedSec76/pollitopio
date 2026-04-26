// /components/ProductCard.tsx
export default function ProductCard({ product }) {
  const phone = "51936950012"

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg text-black">{product.name}</h3>
        <p className="text-[var(--chicken-orange)] text-xl font-semibold"><span className="text-[#989898] line-through text-lg">s/{product.priceB} </span>
          s/.{(product.price).toFixed(2)}
        </p>

        <a
          href={`https://wa.me/${phone}?text=Quiero%20${product.name}`}
          className="block mt-3 bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600"
        >
          Pedir ahora
        </a>
      </div>
    </div>
  )
}