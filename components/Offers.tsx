// /components/Offers.tsx
export default function Offers() {
  return (
    <section id="ofertas" className="p-8 bg-[var(--chicken-darkred)] text-center">
      <h2 className="text-3xl font-bold mb-4">
        🔥 Ofertas Martes y Miércoles
      </h2>

      <p className="mb-6">
        Aprovecha descuentos exclusivos en nuestros combos
      </p>

      <div className="flex justify-center gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <img width={250} src="images/1pollo.png" alt="imagen de la promocion del dia martes" />
          <h3 className="font-bold text-black">1 Pollo + papas</h3>
          <p className="text-orange-500 text-xl">S/ 49.90</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <img width={250} src="images/mostro.png" alt="imagen de la promoción de miercoles" />
          <h3 className="font-bold text-black">Mostro</h3>
          <p className="text-orange-500 text-xl">S/ 12.90</p>
        </div>
      </div>
    </section>
  )
}