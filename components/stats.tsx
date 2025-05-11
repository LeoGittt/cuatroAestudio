"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"

const stats = [
  { value: "15+", label: "Años de experiencia", color: "#003850" },
  { value: "200+", label: "Clientes satisfechos", color: "#99A8BA" },
  { value: "50+", label: "Profesionales", color: "#002139" },
  { value: "1000+", label: "Proyectos completados", color: "#ABB9C6" },
]

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#003850]/5 z-0"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#99A8BA]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#003850]/10 rounded-full blur-3xl -z-10"></div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center justify-center p-8 rounded-2xl bg-white shadow-lg border border-[#ABB9C6]/10 transform transition-all duration-700 opacity-0 translate-y-8",
                isInView && "opacity-100 translate-y-0",
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
                background: "linear-gradient(135deg, white, #f8f9fa)",
              }}
            >
              <div className="text-5xl font-satoshi font-bold mb-2 relative" style={{ color: stat.color }}>
                <span className="relative z-10">{stat.value}</span>
                <span
                  className="absolute -bottom-1 left-0 w-full h-3 opacity-20 -z-10"
                  style={{ backgroundColor: stat.color }}
                ></span>
              </div>
              <p className="text-[#002139] font-montserrat text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
