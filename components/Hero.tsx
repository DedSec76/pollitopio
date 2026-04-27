// /components/Hero.tsx
export default function Hero() {
  const phone = "51936950012"

  return (
    <section className="relative bg-[var(--chicken-brown)] h-[80vh] flex items-center justify-center text-white">
      <img
        src="images/banner-pollo.webp"
        className="absolute w-full h-full object-cover"
        alt="pollo"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative text-center">
        <h1 className="text-5xl font-bold mb-4">
          Pollo a la brasa jugoso 🔥
        </h1>
        <p className="mb-6 text-lg">
          Sabor auténtico que te hace volver
        </p>

        <a
          href={`https://wa.me/${phone}?text=Quiero%20pedir`}
          className="bg-green-500 px-6 py-3 rounded-lg text-lg hover:bg-green-600"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </section>
  )
}