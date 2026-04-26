// /app/layout.tsx
import "./globals.css"

export const metadata = {
  title: "Pollería El Sabor",
  description: "El mejor pollo a la brasa en Lima 🔥",
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