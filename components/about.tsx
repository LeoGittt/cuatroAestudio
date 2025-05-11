"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#ABB9C6]/5 to-white z-0"></div>

      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#003850]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-[#99A8BA]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={cn(
              "transform transition-all duration-1000 opacity-0 translate-x-[-100px]",
              isInView && "opacity-100 translate-x-0",
            )}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ABB9C6]/20 text-[#003850] mb-6">
              <span className="text-sm font-montserrat">Sobre nosotros</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-[#002139] mb-8">
              Somos Cuatro A, <br />
              <span className="text-[#003850] relative">
                tu aliado estratégico
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C71.5 -0.5 228.5 -0.5 299 5.5"
                    stroke="#99A8BA"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-lg text-[#99A8BA] font-montserrat mb-10 leading-relaxed">
              En Cuatro A entendemos que cada empresa es única, con desafíos y oportunidades particulares. Por eso,
              nuestro enfoque se basa en un acompañamiento personalizado, donde combinamos experiencia técnica con una
              visión estratégica del negocio.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-7 w-7 text-[#003850] mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-satoshi text-xl font-bold text-[#002139] mb-2">Experiencia y profesionalismo</h3>
                  <p className="text-[#99A8BA] font-montserrat">
                    Nuestro equipo cuenta con amplia trayectoria en asesoramiento contable y financiero, garantizando
                    soluciones efectivas y de calidad para cada cliente.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-7 w-7 text-[#003850] mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-satoshi text-xl font-bold text-[#002139] mb-2">Enfoque personalizado</h3>
                  <p className="text-[#99A8BA] font-montserrat">
                    Desarrollamos soluciones a medida según las necesidades específicas de cada cliente, adaptándonos a
                    su realidad empresarial y objetivos de negocio.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-7 w-7 text-[#003850] mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-satoshi text-xl font-bold text-[#002139] mb-2">Visión estratégica</h3>
                  <p className="text-[#99A8BA] font-montserrat">
                    No solo nos enfocamos en cumplir con obligaciones, sino en potenciar el crecimiento de tu negocio a
                    través de un análisis integral y recomendaciones estratégicas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "relative transform transition-all duration-1000 opacity-0 translate-x-[100px]",
              isInView && "opacity-100 translate-x-0",
            )}
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#99A8BA]/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#003850]/10 rounded-full blur-3xl -z-10"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/equipo.jpg"
                alt="Equipo Cuatro A"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-t-2xl"
              />

              <div className="bg-white p-8 border-t border-[#ABB9C6]/20">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-satoshi font-bold text-2xl text-[#003850]">Equipo Cuatro A</h3>
                    <p className="text-[#99A8BA] font-montserrat">Profesionales comprometidos con tu éxito</p>
                  </div>
                  <Image src="/logo.png" alt="Cuatro A Logo" width={80} height={30} className="h-8 w-auto" />
                </div>

                <p className="text-[#002139] font-montserrat italic mb-6">
                  "Nuestro compromiso es ser más que un proveedor de servicios contables; buscamos ser un verdadero
                  aliado estratégico en el crecimiento y éxito de tu empresa."
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-[#003850]/10 text-[#003850] rounded-full text-sm font-montserrat">
                    Profesionalismo
                  </span>
                  <span className="px-3 py-1 bg-[#99A8BA]/20 text-[#002139] rounded-full text-sm font-montserrat">
                    Compromiso
                  </span>
                  <span className="px-3 py-1 bg-[#002139]/10 text-[#002139] rounded-full text-sm font-montserrat">
                    Excelencia
                  </span>
                  <span className="px-3 py-1 bg-[#ABB9C6]/20 text-[#003850] rounded-full text-sm font-montserrat">
                    Innovación
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
