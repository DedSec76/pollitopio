"use client"
import { useState } from "react"

// /components/Footer.tsx
export default function Footer() {
  const [showMap, setShowMap] = useState(false);
  const year = new Date

  return (
    <footer className="p-6 bg-[var(--chicken-brown)] text-white text-center">

      <div className="w-max-[1200px] mt-20 px-5">
            <h3 className="text-2xl font-bold mb-5">Nuestra Ubicación 📍</h3>

            <div onClick={() => setShowMap(true)} 
                 className="relative
                            bg-[url(https://images.unsplash.com/photo-1557683316-973673baf926)] bg-cover bg-center overflow-hidden
                            w-full h-[400px] ratio: 16/9 rounded-2xl cursor-pointer 
                            transition-transform duration-300 shadow-lg
                            hover:scale-102 hover:shadow-2xl
                            mb-4">
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]
                                flex items-center justify-center">
                  {showMap ? (
                    <iframe
                      src="https://www.google.com/maps?q=Av+Principal+123+Lima+Peru&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0}}
                      loading="lazy"
                    />
                    ) : (<span className="bg-[#e63946] py-2 px-5 rounded-lg text-lg font-bold transition-ease">Ver mapa</span>
                  )}
                </div>
            </div>

            <a className="text-[#ffcad4] hover:text-[var(--chicken-white)]"
                href="https://www.google.com/maps?q=Av+Principal+123+Lima+Peru"
                target="_blank"
            >
                Abrir en Google Maps
            </a>

            <p className="mt-4 text-sm">&copy; {year.getFullYear()} Información e imagenes - Pollito Pio</p>
        </div>  
    </footer>
  )
}