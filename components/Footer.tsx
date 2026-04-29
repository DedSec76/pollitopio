'use client'

import Image from "next/image"
import { useState } from "react"

const trustPoints = [
  {
    title: "Salubridad garantizada",
    description:
      "Trabajamos bajo normas de salubridad y buenas practicas de manipulacion de alimentos.",
  },
  {
    title: "Ingredientes seleccionados",
    description:
      "Trabajamos con productos organicos y materia prima elegida para cuidar el sabor y la calidad.",
  },
  {
    title: "Empresa formal",
    description:
      "Contamos con RUC y operamos como negocio formal para darte mayor seguridad en cada compra.",
  },
  {
    title: "Libro de reclamaciones",
    description:
      "Disponemos de libro de reclamaciones porque valoramos la transparencia y la atencion responsable.",
  },
  {
    title: "Experiencia real",
    description:
      "Llevamos mas de 5 anos en el rubro de la alimentacion atendiendo a familias y clientes frecuentes.",
  },
  {
    title: "Atencion confiable",
    description:
      "Preparamos cada pedido con procesos consistentes, tiempos claros y enfoque en la satisfaccion del cliente.",
  },
] as const

export default function Footer() {
  const [showMap, setShowMap] = useState(false)
  const year = new Date().getFullYear()
  const phone = "51936950012"

  return (
    <footer className="bg-[var(--chicken-brown)] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-7">
        <div className="border-b border-white/15 pb-12">
          <div className="mb-10">
            <h3 className="mb-4 text-3xl font-bold sm:text-4xl">Nuestra Información</h3>
            <div className="mb-10 rounded-xl border border-white/12 bg-white/6 p-5 shadow-lg backdrop-blur-sm">
              <p className="mb-4 letter-lg">📍Dirección: Av. Principal cdr. 23 los aviadores</p>
              <p>🧑‍🍳Atención: Lunes a Sábado de 6:00 am - 10:00 pm</p>
            </div>

            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd6a5]">
                Confianza que se nota
              </p>
              <h3 className="text-3xl font-bold sm:text-4xl">
                Información clara para que elijas con tranquilidad
              </h3>
              <p className="my-4 text-sm leading-7 text-white/75 sm:text-base">
                No solo vendemos comida rica. Tambien cuidamos la higiene, la
                formalidad del negocio y la calidad de cada insumo para que tu
                experiencia sea segura, consistente y deliciosa.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-white/12 bg-white/6 p-4 backdrop-blur-sm"
                >
                  <h4 className="text-lg font-bold text-[#ffd6a5]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/12 bg-white/6 p-5 shadow-lg backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd6a5]">
              Nuestra ubicación
            </p>
            <h3 className="mt-3 text-2xl text-center font-bold">Visitanos o ubicanos fácil</h3>

            <div
              onClick={() => setShowMap(true)}
              className="relative mt-5 h-[340px] cursor-pointer overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1557683316-973673baf926)] bg-cover bg-center shadow-lg transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                {showMap ? (
                  <iframe
                    src="https://www.google.com/maps?q=Av+Principal+123+Lima+Peru&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicacion de Pollito Pio"
                  />
                ) : (
                  <span className="rounded-lg bg-[#e63946] px-5 py-2 text-lg font-bold transition-colors hover:bg-[#cf2f3d]">
                    Ver mapa
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4 text-sm text-white/80">
              <a
                className="block text-center font-semibold text-[#ffcad4] transition-colors hover:text-[var(--chicken-white)]"
                href="https://www.google.com/maps?q=Av+Principal+123+Lima+Peru"
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>

        <p className="pt-4 text-center text-sm text-white/65">
          &copy; {year} Informacion e imagenes - Pollito Pio
        </p>
      </div>
    </footer>
  )
}
