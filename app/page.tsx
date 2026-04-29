// /app/page.tsx
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ProductSection from "@/components/ProductSection"
import Testimonials from "@/components/Testimonials"
import Hygiene from "@/components/Hygiene"
import Footer from "@/components/Footer"
import Offers from "@/components/Offers"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Offers />
      <ProductSection />
      <Testimonials />
      <Hygiene />
      <Footer />
    </main>
  )
}