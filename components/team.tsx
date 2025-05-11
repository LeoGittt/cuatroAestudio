"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail, Phone, ArrowRight, X, Award, BookOpen, Calendar, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalTrigger, ModalClose } from "@/components/ui/modal"

const teamMembers = [
  {
    name: "C.P. Alexis Fernandez",
    position: "Socio Fundador",
    matricula: "Matrícula C-3148",
    bio: "Datos complementarios utilizados con fines demostrativos. Información sujeta a confirmación.",
    longBio:
      "La información detallada (experiencia, educación, certificaciones y logros) ha sido generada con fines ilustrativos para la maqueta del sitio. No representa datos reales del profesional.",
    image: "/c1.jpg",
    expertise: ["Planificación Fiscal", "Auditoría", "Gestión Financiera"],
    education: [
      {
        title: "Contador Público",
        institution: "Universidad Nacional de San Juan",
        year: "XXXX",
      },
    ],
    certifications: [],
    achievements: [],
    linkedin: "#",
    email: "info@estudiocontable.com.ar",
    phone: "—",
    featured: true,
    color: "#003850",
  },
  {
    name: "C.P. Santiago Fernandez",
    position: "Socio Fundador",
    matricula: "Matrícula C-3379",
    bio: "Datos complementarios utilizados con fines demostrativos. Información sujeta a confirmación.",
    longBio:
      "La información detallada (experiencia, educación, certificaciones y logros) ha sido generada con fines ilustrativos para la maqueta del sitio. No representa datos reales del profesional.",
    image: "/c2.jpg",
    expertise: ["Asesoramiento Impositivo", "Gestión Financiera"],
    education: [
      {
        title: "Contador Público",
        institution: "Universidad Nacional de San Juan",
        year: "XXXX",
      },
    ],
    certifications: [],
    achievements: [],
    linkedin: "#",
    email: "info@estudiocontable.com.ar",
    phone: "—",
    featured: true,
    color: "#002139",
  },
];


export function Team() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="equipo" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#ABB9C6]/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#ABB9C6]/10 to-transparent"></div>

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#003850]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#99A8BA]/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-[#002139] mb-6 relative inline-block">
            Nuestro Equipo
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-3 left-0 h-1 bg-[#003850]/20 rounded-full"
            ></motion.div>
          </h2>
          <p className="text-xl text-[#99A8BA] font-montserrat max-w-2xl mx-auto">
            Profesionales altamente calificados con amplia experiencia en sus áreas de especialización, comprometidos
            con el éxito de tu empresa.
          </p>
        </motion.div>

        {/* Socios Fundadores - Destacados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-satoshi font-bold text-[#003850] mb-8 text-center">
            <span className="relative inline-block">
              Socios Fundadores
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#003850]/30"></div>
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers
              .filter((member) => member.featured)
              .map((member, index) => (
                <Modal key={index}>
                  <ModalTrigger asChild>
                    <motion.div
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#ABB9C6]/20 group hover:border-[#003850]/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                        <div className="relative h-80 md:h-full overflow-hidden md:col-span-1">
                          <Image
                            src={member.image || "/placeholder.svg?height=400&width=300"}
                            alt={member.name}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70"
                            style={{
                              background: `linear-gradient(to top, ${member.color}CC, ${member.color}66, transparent)`,
                            }}
                          ></div>

                          <div className="absolute bottom-0 left-0 w-full p-6 md:hidden">
                            <h3 className="text-white font-satoshi font-bold text-2xl">{member.name}</h3>
                            <p className="text-white/80 font-montserrat">{member.position}</p>
                            <p className="text-white/70 font-montserrat text-sm">{member.matricula}</p>
                          </div>
                        </div>

                        <div className="p-6 md:p-8 md:col-span-2 flex flex-col justify-between">
                          <div>
                            <div className="hidden md:block mb-4">
                              <h3 className="text-[#002139] font-satoshi font-bold text-2xl">{member.name}</h3>
                              <p className="text-[#003850] font-montserrat">{member.position}</p>
                              <p className="text-[#99A8BA] font-montserrat text-sm">{member.matricula}</p>
                            </div>

                            <p className="text-[#002139] font-montserrat mb-6">{member.bio}</p>

                            <div className="mb-6">
                              <h4 className="text-[#003850] font-satoshi font-bold text-sm uppercase tracking-wider mb-3">
                                Especialización
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {member.expertise.map((skill, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-[#003850]/10 text-[#003850] rounded-full text-sm font-montserrat"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex space-x-2">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <a
                                      href={member.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="bg-[#003850]/10 p-2 rounded-full text-[#003850] hover:bg-[#003850]/20 transition-colors duration-300"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <Linkedin className="h-5 w-5" />
                                    </a>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>LinkedIn</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <a
                                      href={`mailto:${member.email}`}
                                      className="bg-[#003850]/10 p-2 rounded-full text-[#003850] hover:bg-[#003850]/20 transition-colors duration-300"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <Mail className="h-5 w-5" />
                                    </a>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Email</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <a
                                      href={`tel:${member.phone}`}
                                      className="bg-[#003850]/10 p-2 rounded-full text-[#003850] hover:bg-[#003850]/20 transition-colors duration-300"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <Phone className="h-5 w-5" />
                                    </a>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Teléfono</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>

                            <Button
                              variant="ghost"
                              className="text-[#003850] hover:text-[#002139] hover:bg-[#ABB9C6]/10 p-0 h-auto font-montserrat text-sm flex items-center gap-1 group"
                            >
                              Ver perfil completo
                              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </ModalTrigger>

                  <ModalContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                    <ModalHeader className="border-b border-[#ABB9C6]/20 pb-4">
                      <div className="flex justify-between items-start">
                        <ModalTitle className="text-3xl text-[#002139]">{member.name}</ModalTitle>
                        <ModalClose className="opacity-70 hover:opacity-100 transition-opacity">
                          <X className="h-5 w-5" />
                        </ModalClose>
                      </div>
                      <div className="text-[#003850] font-montserrat">{member.position}</div>
                      <div className="text-[#99A8BA] font-montserrat text-sm">{member.matricula}</div>
                    </ModalHeader>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                      <div className="md:col-span-1">
                        <div className="relative rounded-xl overflow-hidden shadow-lg mb-6 aspect-[3/4]">
                          <Image
                            src={member.image || "/placeholder.svg?height=400&width=300"}
                            alt={member.name}
                            fill
                            className="object-cover object-center"
                          />
                        </div>

                        <div className="bg-[#003850]/5 rounded-xl p-5 mb-6">
                          <h4 className="font-satoshi font-bold text-[#002139] mb-3 flex items-center">
                            <Award className="h-5 w-5 mr-2 text-[#003850]" /> Certificaciones
                          </h4>
                          <ul className="space-y-2">
                            {member.certifications?.map((cert, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-[#003850] mt-2 mr-2"></div>
                                <span className="text-[#002139] font-montserrat text-sm">{cert}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-satoshi font-bold text-[#002139] mb-3 flex items-center">
                            <BookOpen className="h-5 w-5 mr-2 text-[#003850]" /> Formación Académica
                          </h4>
                          <ul className="space-y-4">
                            {member.education?.map((edu, idx) => (
                              <li key={idx} className="border-l-2 border-[#003850]/30 pl-4 py-1">
                                <div className="text-[#002139] font-montserrat font-medium">{edu.title}</div>
                                <div className="text-[#99A8BA] font-montserrat text-sm">{edu.institution}</div>
                                <div className="text-[#99A8BA] font-montserrat text-xs flex items-center mt-1">
                                  <Calendar className="h-3 w-3 mr-1" /> {edu.year}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 flex flex-col space-y-2">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-[#003850] hover:text-[#002139] font-montserrat text-sm"
                          >
                            <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                          </a>
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center text-[#003850] hover:text-[#002139] font-montserrat text-sm"
                          >
                            <Mail className="h-4 w-4 mr-2" /> {member.email}
                          </a>
                          <a
                            href={`tel:${member.phone}`}
                            className="flex items-center text-[#003850] hover:text-[#002139] font-montserrat text-sm"
                          >
                            <Phone className="h-4 w-4 mr-2" /> {member.phone}
                          </a>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <div className="mb-8">
                          <h4 className="font-satoshi font-bold text-xl text-[#002139] mb-4 flex items-center">
                            <Users className="h-5 w-5 mr-2 text-[#003850]" /> Perfil Profesional
                          </h4>
                          <p className="text-[#002139] font-montserrat leading-relaxed whitespace-pre-line">
                            {member.longBio}
                          </p>
                        </div>

                        <div className="mb-8">
                          <h4 className="font-satoshi font-bold text-xl text-[#002139] mb-4 flex items-center">
                            <Award className="h-5 w-5 mr-2 text-[#003850]" /> Logros Destacados
                          </h4>
                          <ul className="space-y-4">
                            {member.achievements?.map((achievement, idx) => (
                              <li key={idx} className="flex items-start bg-[#003850]/5 p-4 rounded-lg">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003850] text-white flex items-center justify-center mr-3">
                                  {idx + 1}
                                </div>
                                <p className="text-[#002139] font-montserrat">{achievement}</p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-8">
                          <h4 className="font-satoshi font-bold text-xl text-[#002139] mb-4 flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-[#003850]" /> Áreas de Especialización
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {member.expertise.map((skill, idx) => (
                              <div key={idx} className="bg-white border border-[#ABB9C6]/30 rounded-lg p-4 shadow-sm">
                                <h5 className="font-satoshi font-bold text-[#003850] mb-2">{skill}</h5>
                                <p className="text-[#99A8BA] font-montserrat text-sm">
                                  {idx === 0
                                    ? "Diseño de estrategias fiscales eficientes y conformes a la normativa vigente."
                                    : idx === 1
                                      ? "Revisión exhaustiva de registros contables y detección de áreas de mejora."
                                      : "Análisis financiero integral para la toma de decisiones estratégicas."}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#003850] to-[#002139] rounded-xl p-6 text-white">
                          <h4 className="font-satoshi font-bold text-xl mb-4">Mensaje del Socio</h4>
                          <p className="font-montserrat italic mb-4">
                            "En Cuatro A, nuestro compromiso es brindar un servicio de excelencia, combinando
                            experiencia técnica con un profundo entendimiento del negocio de nuestros clientes.
                            Trabajamos para ser verdaderos aliados estratégicos, acompañándolos en cada etapa de su
                            crecimiento."
                          </p>
                          <div className="text-right text-white/80 font-montserrat">— {member.name}</div>
                        </div>
                      </div>
                    </div>
                  </ModalContent>
                </Modal>
              ))}
          </div>
        </motion.div>

       
      </div>
    </section>
  )
}
