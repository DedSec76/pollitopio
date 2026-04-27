import Image from "next/image"

const hygieneCards = [
  {
    title: "Utensilios impecables",
    slogan: "Cada herramienta limpia protege el sabor y tu confianza.",
    description:
      "Desinfectamos utensilios y superficies de cocina con constancia para evitar contaminacion cruzada y mantener una preparacion segura.",
    image:
      "/images/hygiene/utensiClean.webp",
    alt: "Limpieza de utensilios de cocina",
  },
  {
    title: "Equipo bien preparado",
    slogan: "La buena cocina empieza con disciplina y presentacion pulcra.",
    description:
      "Nuestro personal trabaja con uniforme limpio y buenas practicas de manipulación para cuidar cada pedido desde el origen.",
    image:
      "/images/hygiene/personalClean.webp",
    alt: "Cocinero con ropa limpia demostrando profesionalismo",
  },
  {
    title: "Orden en cada estacion",
    slogan: "Un espacio limpio habla bien de todo lo que servimos.",
    description:
      "Mantenemos el area de trabajo organizada, ventilada y lista para operar con agilidad, higiene y atencion al detalle.",
    image:
      "/images/hygiene/cocinaLimpia.webp",
    alt: "Espacio de trabajo de cocina ordenado y pulcro",
  },
] as const

export default function Hygiene() {
  return (
    <section
      id="higiene"
      className="bg-[linear-gradient(180deg,#fff7ef_0%,#f7e5d1_100%)] px-6 py-16 text-[var(--chicken-brown)]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chicken-darkred)]">
            Compromiso con la limpieza
          </p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Cuidamos la higiene para que disfrutes con total confianza
          </h2>
          <p className="mt-5 text-base leading-7 text-[color:rgb(59_31_15_/_0.82)]">
            Queremos que cada persona vea que la limpieza forma parte de nuestra
            manera de trabajar. Por eso mostramos procesos, equipo y espacios
            cuidados con el mismo rigor con el que preparamos nuestros platos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {hygieneCards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-xl border border-[color:rgb(139_0_0_/_0.12)] bg-white shadow-[0_16px_40px_rgba(59,31,15,0.12)]
                         transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={card.image}
                  alt={card.alt}
                  loading="eager"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(59,31,15,0.1)_0%,rgba(59,31,15,0.58)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd6a5]">
                    Aseando ando
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{card.title}</h3>
                </div>
              </div>

              <div className="space-y-4 p-5">
                <p className="rounded-lg bg-[#fff1e4] px-4 py-3 text-sm font-semibold leading-6 text-[var(--chicken-darkred)]">
                  {card.slogan}
                </p>
                <p className="text-sm leading-7 text-[color:rgb(59_31_15_/_0.8)]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
