import Image from "next/image"

// /components/Offers.tsx
export default function Offers() {
  const phone = "+51936950012"

  return (
    <section id="ofertas" className="p-8 bg-[var(--chicken-darkred)] text-center">
      <div>
        <a
          href={`https://wa.me/${phone}?text=Quiero%20pedir%20Pollo%20Por%20Favor`}
          className="fixed right-5 bottom-15 z-9000"
          target="_blank"
        >
          <Image 
            src={"/images/icons/whatsappFixed.png"}
            alt="Logo de whatsapp"
            width={55}
            height={55}
          />
        </a>
      </div>

      <h2 className="text-4xl font-bold mb-4">
        🔥 Ofertas Martes y Miércoles
      </h2>

      <p className="mb-6">
        Aprovecha descuentos exclusivos en nuestros combos
      </p>

      <div className="flex justify-center gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md
                        transition-transform duration-300
                        hover:scale-105">
          <img width={500} src="images/1pollo.webp" alt="imagen de la promocion del dia martes" />
          <h3 className="text-2xl font-bold text-black">1 Pollo + papas</h3>
          <p className="text-orange-500 text-xl">S/ 49.90</p>
          <a
            href={`https://wa.me/${phone}?text=Quiero%201%20pollo%20%2B%20papas%20por%20favor`}
            className="text-lg block mt-3 bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600"
            target="_blank"
          >
            🔥 Aprovechar oferta hoy
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md
                        transition-transform duration-300
                        hover:scale-105">
          <img width={500} src="images/mostro.webp" alt="imagen de la promoción de miercoles" />
          <h3 className="text-2xl font-bold text-black">Mostro</h3>
          <p className="text-orange-500 text-xl">S/ 12.90</p>
          <a
            href={`https://wa.me/${phone}?text=Quiero%20mostro`}
            className="text-lg block mt-3 bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600"
            target="_blank"
          >
            🔥 Aprovechar oferta hoy
          </a>
        </div>
      </div>
    </section>
  )
}