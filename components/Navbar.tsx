
// /components/Navbar.tsx
export default function Navbar() {

  return (
    <nav className="flex justify-between p-4 shadow-md">
      <h2 className="font-bold text-xl">Pollería Pollito Pio 🔥</h2>
      <div className="flex gap-4">
        <a href="#menu">Menú</a>
        <a href="#ofertas">Ofertas</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#higiene">Higiene</a>
      </div>
    </nav>
  )
}