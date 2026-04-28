// /app/layout.tsx
import "./globals.css"

export const metadata = {
  title: "Pollería pollito Pio",
  author: "Aldair Rutte Bazán",
  description: "El mejor pollo a la brasa en Lima San Juan de Lurigancho 🔥",
  icons: {
    icon: [
      { url: "/images/icons/favicon.ico"},
      { url: "/images/icons/favicon.png", type:"image/png"},
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-[#a04b1c]">
        {children}
      </body>
    </html>
  )
}