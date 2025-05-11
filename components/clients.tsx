"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const clients = [
  { name: "Empresa 1", logo: "/images/client-1.png" },
  { name: "Empresa 2", logo: "/images/client-2.png" },
  { name: "Empresa 3", logo: "/images/client-3.png" },
  { name: "Empresa 4", logo: "/images/client-4.png" },
  { name: "Empresa 5", logo: "/images/client-5.png" },
  { name: "Empresa 6", logo: "/images/client-6.png" },
]

export function Clients() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#003850]/5 z-0"></div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-satoshi font-bold text-[#002139] mb-4">
            Empresas que confían en nosotros
          </h3>
          <p className="text-lg text-[#99A8BA] font-montserrat max-w-2xl mx-auto">
            Trabajamos con empresas de diversos sectores, brindando soluciones contables y financieras a medida.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-xl p-6 flex items-center justify-center shadow-md border border-[#ABB9C6]/20 transition-all duration-700 opacity-0 translate-y-8",
                isInView && "opacity-100 translate-y-0",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={60}
                className="w-full h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
