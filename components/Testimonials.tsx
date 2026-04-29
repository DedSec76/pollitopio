import Image from "next/image";


// /components/Testimonials.tsx
export default function Testimonials() {
  return (
    <section id="testimonios" className="p-10 bg-[#3B1F0F] text-center">
      <h2 className="text-3xl font-bold mb-6">Clientes satisfechos 😍</h2>

      <div className="flex md:flex-row gap-6 max-w-[900px] m-auto">
        <div className="text-[var(--chicken-brown)] bg-white p-4 rounded-xl shadow">
          <Image className="rounded-[100%] float-left" 
               src="/images/testimonials/testimonialgirl1.webp" 
               alt="testimonio de una cliente satisfecha por el buen pollo a la brasa"
               width={50}
               height={20} 
          />
          <div className="ml-4">
            <h3 className="font-bold text-left"> - Zulenka Gomez</h3>
            <p>"El mejor pollo de Lima 🔥"</p>
          </div>       
        </div>
        <div className="text-[var(--chicken-brown)] bg-white p-4 rounded-xl shadow">
          <Image className="rounded-[100%] float-left" 
               src="images/testimonials/testimonialgirl3.webp" 
               alt="testimonio de una clienta satisfecha"
               width={50}
               height={20} 
          />
          <div className="ml-4">
            <h3 className="font-bold text-left"> - Damaris Vargas</h3>
            <p>"No le tenia fé, pero me encanto 😋"</p>
          </div>
        </div>
        <div className="text-[var(--chicken-brown)] bg-white p-4 rounded-xl shadow">
          
          <Image className="rounded-full object-cover" 
               src="/images/testimonials/testimonialboy1.webp" 
               alt="Cliente satisfecho"
               width={50}
               height={50} 
               quality={100}
               priority
          />
          <div className="ml-4">
            <h3 className="font-bold text-left"> - Flavio Josefo</h3>
            <p>"Buen ambiente para comer sin ruido."</p>
          </div>
        </div>
      </div>
    </section>
  )
}