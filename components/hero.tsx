"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white mt-8 md:mt-12 lg:mt-16">
      {/* Top gradient line with enhanced glow effect */}
      {/* <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#003850] via-[#002139] to-[#99A8BA] shadow-lg"></div> */}

      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-[#f8fafc] -z-10 rounded-bl-[100px] hidden md:block"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#003850]/8 blur-[80px] -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#002139]/8 blur-[80px] -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-[#99A8BA]/10 blur-[50px] -z-10 hidden md:block"></div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Content area - takes full width on mobile, 7/12 on larger screens */}
          <div className="md:col-span-7 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#003850]/15 to-[#003850]/5 text-[#003850] mb-8 shadow-sm"
              >
                <span className="text-sm font-medium">
                  Soluciones financieras integrales
                </span>
                <ChevronRight className="ml-1 h-4 w-4 text-[#003850]/70" />
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#002139] leading-tight mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Potenciando Finanzas,{" "}
                <span className="relative inline-block text-[#003850]">
                  Creando Futuro
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
                    className="absolute bottom-2 left-0 h-4 bg-[#99A8BA]/30 -z-10 rounded-sm"
                  ></motion.div>
                </span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-[#536b7d] mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                A través de asesoramiento experto, planificación estratégica y
                soluciones personalizadas, estamos comprometidos a crear
                oportunidades financieras para empresas que buscan un futuro más
                próspero y sostenible.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-5 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Button className="bg-gradient-to-r from-[#003850] to-[#002139] hover:from-[#002139] hover:to-[#003850] text-white rounded-xl px-7 py-7 w-full sm:w-auto shadow-md transition-all duration-300 hover:shadow-lg">
                  Solicitar consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  className="border-[#99A8BA] text-[#003850] hover:bg-[#99A8BA]/10 rounded-xl px-7 py-7 w-full sm:w-auto shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Conocer servicios
                </Button>
              </motion.div>

              {/* Stats row - enhanced with better spacing and animations */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                {[
                  { label: "Clientes satisfechos", value: "10+" },
                  { label: "Años de experiencia", value: "3+" },
                  { label: "Compromiso", value: "100%" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 + i * 0.15 }}
                    className={cn(
                      "bg-white rounded-xl p-5 shadow-md border border-[#99A8BA]/10 hover:shadow-lg transition-all duration-300 hover:border-[#99A8BA]/20",
                      i === 2 && "hidden md:block" // Hide the third stat on mobile
                    )}
                  >
                    <div className="text-2xl font-bold text-[#003850] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#536b7d]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image area - enhanced with better animations and effects */}
          <div className="md:col-span-5 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-md md:max-w-none"
            >
              {/* Main image with enhanced aspect ratio */}
              <div className="aspect-[16/9] max-h-[420px] relative">
                <Image
                  src="/lh.jpg?height=600&width=800&text=Servicios+Financieros"
                  alt="Servicios Financieros"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />

                {/* Enhanced overlay gradient */}
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#002139]/50 via-[#002139]/30 to-transparent"></div> */}
              </div>

              {/* Enhanced floating card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute top-4 right-4 md:top-5 md:right-5 bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-3 md:p-4 max-w-[130px] md:max-w-[160px] border border-[#99A8BA]/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#002139] text-sm md:text-base">
                    3+
                  </span>
                  <span className="text-[10px] md:text-xs text-[#99A8BA]">
                    Experiencia
                  </span>
                </div>
                <div className="w-full h-1.5 md:h-2 bg-[#99A8BA]/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{
                      duration: 1.5,
                      delay: 1.2,
                      ease: "easeInOut",
                    }}
                    className="h-full bg-gradient-to-r from-[#003850] to-[#002139] rounded-full"
                  ></motion.div>
                </div>
              </motion.div>

              {/* Enhanced client avatars */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="absolute bottom-4 left-4 md:bottom-5 md:left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 shadow-md border border-[#99A8BA]/10"
              >
                <div className="flex -space-x-1.5 md:-space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white overflow-hidden shadow-sm"
                    >
                      <Image
                        src={`/placeholder.svg?height=28&width=28&text=${i}`}
                        alt={`Cliente ${i}`}
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs md:text-sm text-[#002139] font-medium">
                  10+ Clientes
                </span>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[40px] md:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#f8fafc]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
