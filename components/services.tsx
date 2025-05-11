"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Users,
  FileText,
  TrendingUp,
  Handshake,
  CheckCircle,
  AlertTriangle,
  FileCheck,
  Calculator,
  Calendar,
  Clock,
  Landmark,
  FileSpreadsheet,
  PieChart,
  BarChart,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    icon: <BarChart3 className="h-6 w-6 text-[#003850]" />,
    title: "Diagnóstico contable-financiero",
    description:
      "Auditoría mensual, evaluación de consistencia y acompañamiento estratégico para decisiones financieras y fiscales.",
    items: [
      "Auditoría mensual de registros contables y administrativos",
      "Evaluación de consistencia entre operaciones y estados contables",
      "Informes ejecutivos con observaciones clave y recomendaciones",
      "Acompañamiento estratégico para decisiones financieras",
    ],
    benefits: [
      "Detección temprana de inconsistencias y errores contables",
      "Optimización de procesos administrativos y financieros",
      "Reducción de riesgos fiscales y financieros",
      "Mejora en la toma de decisiones estratégicas",
    ],
    process: [
      "Análisis inicial de la situación contable actual",
      "Revisión detallada de registros y documentación",
      "Elaboración de informes con hallazgos y recomendaciones",
      "Implementación de mejoras y seguimiento continuo",
    ],
    tools: [
      "Sistema FLEXUS",
      "Software de auditoría especializado",
      "Plataformas de análisis financiero",
      "Dashboards personalizados",
    ],
    faqs: [
      {
        question: "¿Con qué frecuencia se realiza el diagnóstico?",
        answer:
          "Realizamos diagnósticos mensuales para mantener un control constante, aunque la frecuencia puede adaptarse según las necesidades específicas de cada cliente.",
      },
      {
        question: "¿Qué información necesitan para realizar el diagnóstico?",
        answer:
          "Necesitamos acceso a los registros contables, estados financieros, comprobantes fiscales y cualquier otra documentación relevante para el análisis.",
      },
      {
        question: "¿Cuánto tiempo lleva implementar las recomendaciones?",
        answer:
          "El tiempo de implementación varía según la complejidad de las recomendaciones, pero generalmente establecemos un plan de acción con plazos específicos adaptados a cada cliente.",
      },
    ],
    color: "#003850",
    bgColor: "from-[#003850]/10 to-[#003850]/5",
    icons: [
      <CheckCircle key="1" className="h-5 w-5" />,
      <AlertTriangle key="2" className="h-5 w-5" />,
      <FileCheck key="3" className="h-5 w-5" />,
    ],
    stats: [
      { value: "30%", label: "Reducción de errores contables" },
      { value: "25%", label: "Mejora en eficiencia administrativa" },
      { value: "40%", label: "Reducción de riesgos fiscales" },
    ],
    image: "/placeholder.svg?height=600&width=800",
    testimonial: {
      quote:
        "El diagnóstico contable-financiero de Cuatro A nos permitió identificar áreas de mejora que no habíamos detectado y optimizar significativamente nuestros procesos.",
      author: "María Fernández",
      position: "CFO, Innovatech S.A.",
      image: "/placeholder.svg?height=200&width=200",
    },
    featured: true,
  },
  {
    icon: <BookOpen className="h-6 w-6 text-[#003850]" />,
    title: "Asesoramiento contable",
    description:
      "Supervisión de cierres contables, preparación de estados contables y coordinación con auditores externos.",
    items: [
      "Supervisión de cierres contables mensuales, trimestrales y anuales",
      "Preparación de estados contables anuales",
      "Confección de informes contables para inversores y bancos",
      "Coordinación con auditores externos",
    ],
    benefits: [
      "Estados contables precisos y conformes a la normativa vigente",
      "Información financiera confiable para la toma de decisiones",
      "Cumplimiento de plazos legales y fiscales",
      "Relación fluida con entidades financieras y organismos de control",
    ],
    process: [
      "Recopilación y análisis de información contable",
      "Elaboración de estados financieros según normativas aplicables",
      "Revisión y validación de la información",
      "Presentación y explicación de resultados",
    ],
    tools: [
      "Software contable especializado",
      "Plataformas de gestión documental",
      "Herramientas de reporting financiero",
    ],
    faqs: [
      {
        question: "¿Qué normativas contables aplican?",
        answer:
          "Aplicamos las Normas Contables Profesionales argentinas (Resoluciones Técnicas de la FACPCE) y, cuando corresponde, las Normas Internacionales de Información Financiera (NIIF/IFRS).",
      },
      {
        question:
          "¿Pueden adaptar sus informes a nuestras necesidades específicas?",
        answer:
          "Absolutamente. Personalizamos los informes según los requerimientos específicos de cada cliente, ya sea para uso interno, presentación a inversores o entidades financieras.",
      },
      {
        question:
          "¿Cómo garantizan la confidencialidad de nuestra información?",
        answer:
          "Implementamos estrictos protocolos de seguridad y confidencialidad. Toda la información es tratada con absoluta reserva y nuestro personal está sujeto a acuerdos de confidencialidad.",
      },
    ],
    color: "#003850",
    bgColor: "from-[#99A8BA]/10 to-[#99A8BA]/5",
    icons: [
      <Calculator key="1" className="h-5 w-5" />,
      <Calendar key="2" className="h-5 w-5" />,
      <Clock key="3" className="h-5 w-5" />,
    ],
    stats: [
      { value: "100%", label: "Cumplimiento normativo" },
      { value: "98%", label: "Precisión en informes" },
      { value: "0", label: "Rechazos por organismos oficiales" },
    ],
    image: "/placeholder.svg?height=600&width=800",
    testimonial: {
      quote:
        "El asesoramiento contable de Cuatro A ha sido fundamental para mantener nuestras finanzas en orden y cumplir con todas las obligaciones legales sin contratiempos.",
      author: "Carlos Rodríguez",
      position: "Director Financiero, Grupo Constructor",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    icon: <Briefcase className="h-6 w-6 text-[#003850]" />,
    title: "Servicios impositivos",
    description:
      "Liquidación y presentación de impuestos, revisión técnica y asistencia ante inspecciones fiscales.",
    items: [
      "Liquidación y presentación mensual de IVA, IIBB, retenciones",
      "Declaraciones juradas anuales de Ganancias, Bienes Personales",
      "Revisión técnica de carga tributaria y optimización fiscal",
      "Asistencia ante inspecciones o fiscalizaciones",
    ],
    benefits: [
      "Cumplimiento oportuno de obligaciones fiscales",
      "Minimización de la carga impositiva dentro del marco legal",
      "Prevención de sanciones y multas",
      "Representación profesional ante organismos fiscales",
    ],
    process: [
      "Análisis de la situación fiscal del cliente",
      "Planificación tributaria estratégica",
      "Preparación y presentación de declaraciones",
      "Seguimiento de vencimientos y obligaciones",
    ],
    tools: [
      "Software de gestión tributaria",
      "Plataformas de AFIP y organismos provinciales",
      "Bases de datos de normativa fiscal actualizada",
    ],
    faqs: [
      {
        question: "¿Cómo pueden ayudarnos a reducir nuestra carga impositiva?",
        answer:
          "Identificamos oportunidades de optimización fiscal dentro del marco legal, analizando beneficios impositivos, exenciones aplicables y planificando estratégicamente las operaciones de su empresa.",
      },
      {
        question: "¿Qué hacen en caso de una inspección fiscal?",
        answer:
          "Brindamos acompañamiento completo durante todo el proceso, desde la preparación de la documentación requerida hasta la representación ante los organismos fiscales, defendiendo los intereses del cliente.",
      },
      {
        question:
          "¿Con qué frecuencia actualizan sus conocimientos sobre normativa fiscal?",
        answer:
          "Nuestro equipo se actualiza constantemente mediante capacitaciones periódicas, suscripciones a bases de datos especializadas y participación en foros profesionales, garantizando el conocimiento de las últimas modificaciones normativas.",
      },
    ],
    color: "#003850",
    bgColor: "from-[#002139]/10 to-[#002139]/5",
    icons: [
      <Landmark key="1" className="h-5 w-5" />,
      <FileSpreadsheet key="2" className="h-5 w-5" />,
      <Calculator key="3" className="h-5 w-5" />,
    ],
    stats: [
      { value: "15%", label: "Reducción promedio de carga fiscal" },
      { value: "100%", label: "Tasa de éxito en fiscalizaciones" },
      { value: "0", label: "Multas por presentaciones tardías" },
    ],
    image: "/placeholder.svg?height=600&width=800",
    testimonial: {
      quote:
        "Gracias a los servicios impositivos de Cuatro A, hemos logrado optimizar nuestra carga tributaria de manera legal y segura, generando ahorros significativos para nuestra empresa.",
      author: "Laura Martínez",
      position: "Gerente General, Distribuidora Nacional",
      image: "/placeholder.svg?height=200&width=200",
    },
    featured: true,
  },
  {
    icon: <Users className="h-6 w-6 text-[#003850]" />,
    title: "Gestión laboral",
    description:
      "Liquidación de sueldos, asesoramiento en normativa laboral y acompañamiento en conflictos laborales.",
    items: [
      "Liquidación de sueldos, cargas sociales y obligaciones sindicales",
      "Revisión técnica de recibos de sueldo emitidos",
      "Asesoramiento en convenios colectivos y normativa vigente",
      "Acompañamiento en desvinculaciones y conflictos laborales",
    ],
    benefits: [
      "Cumplimiento de la normativa laboral vigente",
      "Reducción de conflictos laborales",
      "Optimización de costos laborales",
      "Gestión eficiente del capital humano",
    ],
    process: [
      "Relevamiento de información del personal",
      "Procesamiento de novedades mensuales",
      "Liquidación de haberes según convenio aplicable",
      "Generación de documentación y presentaciones oficiales",
    ],
    tools: [
      "Software de liquidación de sueldos",
      "Plataformas de AFIP y ANSES",
      "Bases de datos de convenios colectivos",
    ],
    faqs: [
      {
        question: "¿Cómo manejan los diferentes convenios colectivos?",
        answer:
          "Contamos con especialistas en los principales convenios colectivos y nos mantenemos actualizados sobre sus modificaciones, asegurando una correcta aplicación de escalas salariales y condiciones particulares.",
      },
      {
        question: "¿Qué apoyo brindan en caso de conflictos laborales?",
        answer:
          "Ofrecemos asesoramiento integral, desde la evaluación inicial del caso hasta la representación en instancias de mediación, buscando siempre la resolución más favorable y menos costosa para la empresa.",
      },
      {
        question: "¿Pueden integrarse con nuestro sistema de gestión actual?",
        answer:
          "Sí, trabajamos con los principales sistemas de gestión del mercado y podemos adaptar nuestros procesos para integrarnos eficientemente con su infraestructura tecnológica actual.",
      },
    ],
    color: "#003850",
    bgColor: "from-[#ABB9C6]/10 to-[#ABB9C6]/5",
    icons: [
      <Users key="1" className="h-5 w-5" />,
      <FileCheck key="2" className="h-5 w-5" />,
      <Calendar key="3" className="h-5 w-5" />,
    ],
    stats: [
      { value: "99%", label: "Precisión en liquidaciones" },
      { value: "85%", label: "Reducción de conflictos laborales" },
      { value: "12h", label: "Tiempo promedio de respuesta" },
    ],
    image: "/placeholder.svg?height=600&width=800",
    testimonial: {
      quote:
        "La gestión laboral de Cuatro A nos ha permitido mantener una relación armoniosa con nuestros empleados y cumplir con todas las obligaciones legales sin complicaciones.",
      author: "Javier Méndez",
      position: "Director de RRHH, Tecnología Aplicada S.A.",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    icon: <FileText className="h-6 w-6 text-[#003850]" />,
    title: "Gestión legal-contable",
    description:
      "Redacción de actas societarias, actualización de autoridades y asesoramiento en fideicomisos.",
    items: [
      "Redacción y legalización de actas societarias y de fideicomiso",
      "Actualización de autoridades, reformas estatutarias",
      "Coordinación con escribanía y organismos",
      "Asesoramiento en fideicomisos y creación de sociedades",
    ],
    benefits: [
      "Cumplimiento de requisitos legales societarios",
      "Prevención de contingencias legales",
      "Estructura societaria optimizada",
      "Gestión eficiente de trámites y documentación",
    ],
    process: [
      "Análisis de la situación societaria actual",
      "Elaboración de documentación legal requerida",
      "Gestión de trámites ante organismos correspondientes",
      "Seguimiento y actualización periódica",
    ],
    tools: [
      "Plataformas de IGJ y Registro Público",
      "Sistemas de gestión documental",
      "Bases de datos jurídicas",
    ],
    faqs: [
      {
        question: "¿Qué tipos de sociedades pueden ayudarnos a constituir?",
        answer:
          "Asesoramos en la constitución de todo tipo de sociedades (SA, SRL, SAS, etc.) y fideicomisos, recomendando la estructura más adecuada según los objetivos y necesidades específicas de cada cliente.",
      },
      {
        question: "¿Cuánto tiempo lleva constituir una sociedad?",
        answer:
          "Los tiempos varían según el tipo de sociedad y jurisdicción, pero generalmente una SAS puede constituirse en aproximadamente 20 días, mientras que una SA o SRL puede llevar entre 30 y 45 días.",
      },
      {
        question: "¿Ofrecen servicio de domicilio legal?",
        answer:
          "Sí, podemos proporcionar domicilio legal para su sociedad, incluyendo la recepción y gestión de notificaciones oficiales y correspondencia relevante.",
      },
    ],
    color: "#003850",
    bgColor: "from-[#003850]/10 to-[#003850]/5",
    icons: [
      <FileText key="1" className="h-5 w-5" />,
      <Landmark key="2" className="h-5 w-5" />,
      <FileCheck key="3" className="h-5 w-5" />,
    ],
    stats: [
      { value: "100%", label: "Tasa de aprobación en trámites" },
      { value: "48h", label: "Tiempo de respuesta" },
      { value: "+500", label: "Sociedades constituidas" },
    ],
    image: "/placeholder.svg?height=600&width=800",
    testimonial: {
      quote:
        "La gestión legal-contable de Cuatro A nos ha permitido estructurar nuestro negocio de manera óptima, minimizando riesgos y maximizando oportunidades.",
      author: "Roberto Sánchez",
      position: "CEO, Desarrollos Inmobiliarios S.A.",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-[#003850]" />,
    title: "Análisis económico-financiero",
    description:
      "Lectura crítica de balances, informes financieros y proyecciones para decisiones estratégicas.",
    items: [
      "Lectura crítica de balances y evolución de unidades",
      "Informes de situación financiera",
      "Proyecciones de flujo de fondos y alertas presupuestarias",
      "Reportes comparativos entre proyectos para decisiones estratégicas",
    ],
    benefits: [
      "Visión clara del desempeño financiero",
      "Identificación de oportunidades de mejora",
      "Anticipación a problemas de liquidez",
      "Soporte para decisiones de inversión y financiamiento",
    ],
    process: [
      "Recopilación y análisis de datos financieros",
      "Elaboración de indicadores clave de desempeño",
      "Desarrollo de proyecciones y escenarios",
      "Presentación de informes y recomendaciones",
    ],
    tools: [
      "Software de análisis financiero",
      "Herramientas de Business Intelligence",
      "Plataformas de visualización de datos",
    ],
    faqs: [
      {
        question: "¿Qué indicadores financieros analizan?",
        answer:
          "Analizamos indicadores de liquidez, solvencia, rentabilidad, eficiencia operativa y otros KPIs específicos según el sector y las necesidades particulares de cada empresa.",
      },
      {
        question: "¿Con qué frecuencia se realizan los informes financieros?",
        answer:
          "Ofrecemos informes mensuales, trimestrales o personalizados según las necesidades del cliente, con la posibilidad de reportes especiales ante situaciones particulares o decisiones estratégicas.",
      },
      {
        question:
          "¿Cómo presentan la información para facilitar la toma de decisiones?",
        answer:
          "Utilizamos dashboards interactivos, gráficos comparativos y resúmenes ejecutivos que destacan los puntos clave, facilitando la comprensión y la toma de decisiones basada en datos.",
      },
    ],
    color: "#003850",
    bgColor: "from-[#99A8BA]/10 to-[#99A8BA]/5",
    icons: [
      <PieChart key="1" className="h-5 w-5" />,
      <BarChart key="2" className="h-5 w-5" />,
      <LineChart key="3" className="h-5 w-5" />,
    ],
    stats: [
      { value: "28%", label: "Mejora en rentabilidad" },
      { value: "35%", label: "Reducción de costos operativos" },
      { value: "3x", label: "ROI promedio de nuestros clientes" },
    ],
    image: "/placeholder.svg?height=600&width=800",
    testimonial: {
      quote:
        "El análisis económico-financiero de Cuatro A nos ha proporcionado insights valiosos que nos han permitido tomar decisiones estratégicas acertadas para el crecimiento de nuestro negocio.",
      author: "Alejandro Gómez",
      position: "Director General, Inversiones Estratégicas S.A.",
      image: "/placeholder.svg?height=200&width=200",
    },
    featured: true,
  },
  {
    icon: <Handshake className="h-6 w-6 text-[#003850]" />,
    title: "Acompañamiento directo",
    description:
      "Reuniones periódicas, disponibilidad permanente y visión integral del negocio.",
    items: [
      "Reuniones periódicas para informes y planificación fiscal",
      "Disponibilidad permanente para consultas y urgencias",
      "Visión integral del negocio, con acompañamiento profesional",
      "Relación de confianza a largo plazo",
    ],
    benefits: [
      "Atención personalizada y continua",
      "Respuesta rápida ante consultas y emergencias",
      "Enfoque integral del negocio",
      "Relación de confianza a largo plazo",
    ],
    process: [
      "Asignación de un asesor personal dedicado",
      "Establecimiento de calendario de reuniones periódicas",
      "Canales de comunicación directa para consultas",
      "Seguimiento continuo de la evolución del negocio",
    ],
    tools: [
      "Plataformas de comunicación segura",
      "Sistemas de gestión de relaciones con clientes",
      "Herramientas colaborativas",
    ],
    faqs: [
      {
        question: "¿Cómo se asignan los asesores a cada cliente?",
        answer:
          "Asignamos asesores según la industria, tamaño y necesidades específicas de cada cliente, buscando la mejor compatibilidad en términos de experiencia y especialización.",
      },
      {
        question: "¿Cuál es el tiempo de respuesta ante consultas urgentes?",
        answer:
          "Nuestro compromiso es responder consultas urgentes en un plazo máximo de 4 horas hábiles, con disponibilidad extendida para situaciones críticas.",
      },
      {
        question:
          "¿Cómo se mantiene la continuidad del servicio durante ausencias o vacaciones?",
        answer:
          "Implementamos un sistema de respaldo donde cada cliente cuenta con un asesor principal y uno secundario que está al tanto de su situación, garantizando la continuidad del servicio en todo momento.",
      },
    ],
    color: "#003850",
    bgColor: "from-[#002139]/10 to-[#002139]/5",
    icons: [
      <Handshake key="1" className="h-5 w-5" />,
      <Clock key="2" className="h-5 w-5" />,
      <CheckCircle key="3" className="h-5 w-5" />,
    ],
    stats: [
      { value: "97%", label: "Satisfacción de clientes" },
      { value: "4h", label: "Tiempo máximo de respuesta" },
      { value: "92%", label: "Tasa de retención de clientes" },
    ],
    image: "/placeholder.svg?height=600&width=800",
    testimonial: {
      quote:
        "El acompañamiento directo de Cuatro A ha sido fundamental para el crecimiento de nuestra empresa. Su disponibilidad y compromiso con nuestro negocio los convierte en verdaderos socios estratégicos.",
      author: "Patricia Vega",
      position: "Directora General, Soluciones Tecnológicas S.A.",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "contables", name: "Contables", services: [0, 1, 5] },
    { id: "fiscales", name: "Fiscales", services: [2] },
    { id: "legales", name: "Legales", services: [3, 4, 6] },
  ];

  const filteredServices =
    selectedCategory === "todos"
      ? services
      : services.filter((_, index) => {
          const category = categories.find((c) => c.id === selectedCategory);
          return category?.services?.includes(index);
        });

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % services.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex(
      (prev) => (prev - 1 + services.length) % services.length
    );
  };

  // Featured services for the hero section
  const featuredServices = services.filter((service) => service.featured);

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-[#002139] mb-6 relative inline-block">
            Nuestros Servicios
          </h2>
          <p className="text-[#99A8BA] max-w-2xl mx-auto">
            Soluciones integrales para necesidades contables, impositivas y
            financieras.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedCategory === category.id
                  ? "bg-[#003850] text-white"
                  : "bg-gray-100 text-[#003850] hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="border border-gray-200 hover:border-[#003850]/20 hover:shadow-sm transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {service.icon}
                      <h3 className="text-lg font-medium text-[#002139]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#99A8BA] mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center text-xs text-[#003850]">
                      <span>Ver detalles</span>
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {service.icon}
                    <DialogTitle className="text-xl text-[#003850]">
                      {service.title}
                    </DialogTitle>
                  </div>
                  <p className="text-sm text-[#99A8BA]">
                    {service.description}
                  </p>
                </DialogHeader>

                <Tabs defaultValue="details" className="mt-6">
                  <TabsList className="grid grid-cols-2 mb-4">
                    <TabsTrigger value="details">Detalles</TabsTrigger>
                    <TabsTrigger value="contact">Contacto</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <h4 className="font-medium text-[#002139] mb-4">
                        Servicios incluidos
                      </h4>
                      <ul className="space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="text-[#003850] mr-2">•</span>
                            <span className="text-[#002139]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="contact">
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <h4 className="font-medium text-[#002139] mb-4">
                        Solicitar información
                      </h4>
                      <p className="text-sm text-[#99A8BA] mb-4">
                        Contáctanos para obtener más detalles sobre este
                        servicio y cómo puede beneficiar a tu empresa.
                      </p>
                      <Button className="w-full bg-[#003850] hover:bg-[#002139] text-white">
                        Contactar ahora
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
