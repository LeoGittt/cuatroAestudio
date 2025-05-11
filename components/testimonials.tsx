"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    content:
      "Cuatro A ha sido fundamental para el crecimiento de nuestra empresa. Su asesoramiento estratégico y su visión integral del negocio nos han permitido tomar decisiones más acertadas y optimizar nuestra gestión financiera.",
    author: "María Fernández",
    position: "CEO, Innovatech S.A.",
    image: "/images/testimonial-1.png",
  },
  {
    id: 2,
    content:
      "Trabajar con el equipo de Cuatro A ha sido una experiencia excepcional. Su profesionalismo, conocimiento y dedicación son incomparables. Han simplificado nuestros procesos contables y nos han ayudado a reducir significativamente nuestra carga impositiva.",
    author: "Carlos Rodríguez",
    position: "Director Financiero, Grupo Constructor",
    image: "/images/testimonial-2.png",
  },
  {
    id: 3,
    content:
      "Desde que contratamos los servicios de Cuatro A, hemos experimentado una mejora notable en nuestra gestión contable y financiera. Su enfoque personalizado y su disponibilidad constante para resolver nuestras dudas han sido clave para nuestro éxito.",
    author: "Laura Martínez",
    position: "Gerente General, Distribuidora Nacional",
    image: "/images/testimonial-3.png",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonios"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-[#ABB9C6]/5 to-white"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#003850]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#99A8BA]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-[#002139] mb-6 relative inline-block">
            Lo que dicen nuestros clientes
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-[#003850]/20 rounded-full"></div>
          </h2>
          <p className="text-xl text-[#99A8BA] font-montserrat max-w-2xl mx-auto">
            Descubre por qué empresas de todos los tamaños confían en nuestros servicios contables y financieros.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            "max-w-5xl mx-auto transition-all duration-1000 opacity-0 translate-y-12",
            isInView && "opacity-100 translate-y-0",
          )}
        >
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-[#003850]/10">
              <Quote className="h-24 w-24" />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#ABB9C6]/20 relative">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#003850]/20 h-64 md:h-80">
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <p className="text-xl text-[#002139] font-montserrat mb-8 italic leading-relaxed">
                    "{testimonials[activeIndex].content}"
                  </p>

                  <div className="flex items-center">
                    <div className="h-12 w-1 bg-[#003850] rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-satoshi font-bold text-xl text-[#003850]">
                        {testimonials[activeIndex].author}
                      </h4>
                      <p className="text-[#99A8BA] font-montserrat">{testimonials[activeIndex].position}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#ABB9C6] text-[#003850] hover:bg-[#ABB9C6]/10 hover:text-[#003850]"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Anterior</span>
                </Button>

                <div className="flex items-center gap-1.5 mx-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "w-6 bg-[#003850]" : "w-2 bg-[#ABB9C6]"
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Ver testimonio ${index + 1}`}
                    ></button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#ABB9C6] text-[#003850] hover:bg-[#ABB9C6]/10 hover:text-[#003850]"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Siguiente</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
