// /app/layout.tsx
import "./globals.css"

export const metadata = {
  title: "Pollería pollito Pio",
  description: "El mejor pollo a la brasa en Lima 🔥",
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