"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Instagram, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { toast } = useToast()

  const handleContactClick = (method: string) => {
    let message = ""

    switch (method) {
      case "email":
        window.location.href = "mailto:contacto@cuatroa.com.ar"
        message = "Abriendo cliente de correo..."
        break
      case "whatsapp":
        window.open(
          "https://wa.me/5491145678900?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20sus%20servicios",
          "_blank",
        )
        message = "Abriendo WhatsApp..."
        break
      case "instagram":
        window.open("https://instagram.com/cuatroa", "_blank")
        message = "Abriendo Instagram..."
        break
      default:
        break
    }

    toast({
      title: "Contacto",
      description: message,
      duration: 3000,
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#003850]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#99A8BA]/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-[#002139] mb-6 relative inline-block">
            Contáctanos
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-3 left-0 h-1 bg-[#003850]/20 rounded-full"
            ></motion.div>
          </h2>
          <p className="text-xl text-[#99A8BA] font-montserrat max-w-2xl mx-auto">
            Estamos listos para ayudarte. Elige el método de contacto que
            prefieras y nos pondremos en contacto contigo a la brevedad.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Email Card */}
          <motion.div
            variants={itemVariants}
            className={cn(
              "bg-white rounded-2xl shadow-xl overflow-hidden border border-[#ABB9C6]/20 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            )}
            onClick={() => handleContactClick("email")}
          >
            <div className="h-40 bg-gradient-to-br from-[#003850] to-[#002139] relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-10"></div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"
              ></motion.div>
              <div className="absolute top-6 left-6">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-satoshi font-bold text-2xl text-[#003850] mb-2">
                Correo Electrónico
              </h3>
              <p className="text-[#99A8BA] font-montserrat mb-6">
                Envíanos un correo y te responderemos a la brevedad posible.
              </p>

              <div className="text-[#002139] font-montserrat font-medium mb-6">
                contacto@cuatroa.com.ar
              </div>

              <Button className="w-full bg-[#003850] hover:bg-[#002139] text-white font-montserrat rounded-full group-hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                Enviar correo
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            variants={itemVariants}
            className={cn(
              "bg-white rounded-2xl shadow-xl overflow-hidden border border-[#ABB9C6]/20 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            )}
            onClick={() => handleContactClick("whatsapp")}
          >
            <div className="h-40 bg-gradient-to-br from-[#99A8BA] to-[#ABB9C6] relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-10"></div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"
              ></motion.div>
              <div className="absolute top-6 left-6">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-satoshi font-bold text-2xl text-[#003850] mb-2">
                WhatsApp
              </h3>
              <p className="text-[#99A8BA] font-montserrat mb-6">
                Contáctanos por WhatsApp para una respuesta inmediata.
              </p>

              <div className="text-[#002139] font-montserrat font-medium mb-6">
                +54 11 4567-8900
              </div>

              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-montserrat rounded-full group-hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                Chatear por WhatsApp
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Button>
            </div>
          </motion.div>

          {/* Instagram Card */}
          <motion.div
            variants={itemVariants}
            className={cn(
              "bg-white rounded-2xl shadow-xl overflow-hidden border border-[#ABB9C6]/20 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            )}
            onClick={() => handleContactClick("instagram")}
          >
            <div className="h-40 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-10"></div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"
              ></motion.div>
              <div className="absolute top-6 left-6">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-satoshi font-bold text-2xl text-[#003850] mb-2">
                Instagram
              </h3>
              <p className="text-[#99A8BA] font-montserrat mb-6">
                Síguenos en Instagram y envíanos un mensaje directo.
              </p>

              <div className="text-[#002139] font-montserrat font-medium mb-6">
                @cuatroa
              </div>

              <Button className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:from-[#833AB4]/90 hover:via-[#FD1D1D]/90 hover:to-[#FCAF45]/90 text-white font-montserrat rounded-full group-hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                Seguir en Instagram
                <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={cn(
            "bg-white rounded-2xl shadow-xl overflow-hidden border border-[#ABB9C6]/20 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          )}
        >
          <div className="h-40 bg-gradient-to-br mt-9 from-[#FFB347] to-[#FFCC33] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-10"></div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 0.8, 0.5] }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"
            ></motion.div>
            <div className="absolute top-6 left-6">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="font-satoshi font-bold text-2xl text-[#003850] mb-2">
              Ubicación
            </h3>
            <p className="text-[#99A8BA] font-montserrat mb-6">
              Nuestra oficina se encuentra en San Juan, Argentina. ¡Te
              esperamos!
            </p>

            <div className="text-[#002139] font-montserrat font-medium mb-6">
              San Juan, Cuyo, Argentina
            </div>

            <Button
              className="w-full bg-[#003850] hover:bg-[#002139] text-white font-montserrat rounded-full group-hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/San+Juan,+Argentina",
                  "_blank"
                )
              }
            >
              Ver en el mapa
              <MapPin className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
