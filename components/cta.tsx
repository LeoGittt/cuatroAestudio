"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function CTA() {
  const { toast } = useToast()

  const handleConsultaClick = () => {
    toast({
      title: "Consulta agendada",
      description: "Nos pondremos en contacto contigo a la brevedad para coordinar una reunión.",
      duration: 5000,
    })
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#003850] to-[#002139] z-0"></div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-10 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-6">
            ¿Listo para optimizar la gestión financiera de tu empresa?
          </h2>

          <p className="text-xl text-white/80 font-montserrat mb-10 max-w-2xl mx-auto">
            Agenda una consulta gratuita con nuestros expertos y descubre cómo podemos ayudarte a potenciar el
            crecimiento de tu negocio.
          </p>

          <Button
            onClick={handleConsultaClick}
            className="bg-white hover:bg-white/90 text-[#003850] font-montserrat text-lg px-8 py-7 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            consultar
          </Button>
        </div>
      </div>
    </section>
  )
}
