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
  // CONTABLE (OK)
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
    benefits: [],
    process: [],
    tools: [],
    faqs: [],
    color: "#003850",
    bgColor: "from-[#003850]/10 to-[#003850]/5",
    image: "",
    testimonial: {},
  },
  // FISCALES (Separados)
  {
    icon: <Briefcase className="h-6 w-6 text-[#003850]" />,
    title: "IVA",
    description: "Relevamiento de datos, papeles de trabajo, confecciones.",
    items: ["Relevamiento de datos", "Papeles de trabajo", "Confecciones"],
    benefits: [],
    process: [],
    tools: [],
    faqs: [],
    color: "#003850",
    bgColor: "from-[#002139]/10 to-[#002139]/5",
    image: "",
    testimonial: {},
  },
  {
    icon: <Briefcase className="h-6 w-6 text-[#003850]" />,
    title: "CM",
    description: "Relevamiento de datos, papeles de trabajo, confecciones.",
    items: ["Relevamiento de datos", "Papeles de trabajo", "Confecciones"],
    benefits: [],
    process: [],
    tools: [],
    faqs: [],
    color: "#003850",
    bgColor: "from-[#002139]/10 to-[#002139]/5",
    image: "",
    testimonial: {},
  },
  {
    icon: <Briefcase className="h-6 w-6 text-[#003850]" />,
    title: "Ingresos Brutos",
    description: "Relevamiento de datos, papeles de trabajo, confecciones.",
    items: ["Relevamiento de datos", "Papeles de trabajo", "Confecciones"],
    benefits: [],
    process: [],
    tools: [],
    faqs: [],
    color: "#003850",
    bgColor: "from-[#002139]/10 to-[#002139]/5",
    image: "",
    testimonial: {},
  },
  {
    icon: <Briefcase className="h-6 w-6 text-[#003850]" />,
    title: "Ganancias",
    description: "Relevamiento de datos, papeles de trabajo, confecciones.",
    items: ["Relevamiento de datos", "Papeles de trabajo", "Confecciones"],
    benefits: [],
    process: [],
    tools: [],
    faqs: [],
    color: "#003850",
    bgColor: "from-[#002139]/10 to-[#002139]/5",
    image: "",
    testimonial: {},
  },
  {
    icon: <Briefcase className="h-6 w-6 text-[#003850]" />,
    title: "Regímenes de Retención",
    description: "Relevamiento de datos, papeles de trabajo, confecciones.",
    items: ["Relevamiento de datos", "Papeles de trabajo", "Confecciones"],
    benefits: [],
    process: [],
    tools: [],
    faqs: [],
    color: "#003850",
    bgColor: "from-[#002139]/10 to-[#002139]/5",
    image: "",
    testimonial: {},
  },
  {
    icon: <Briefcase className="h-6 w-6 text-[#003850]" />,
    title: "Estrategia Impositiva",
    description: "Relevamiento de datos, papeles de trabajo, confecciones.",
    items: ["Relevamiento de datos", "Papeles de trabajo", "Confecciones"],
    benefits: [],
    process: [],
    tools: [],
    faqs: [],
    color: "#003850",
    bgColor: "from-[#002139]/10 to-[#002139]/5",
    image: "",
    testimonial: {},
  },
  // LABORAL
  {
    icon: <Users className="h-6 w-6 text-[#003850]" />,
    title: "Laboral",
    description: "Gestión laboral integral.",
    items: [
      "Liquidaciones de Sueldos",
      "Confección Formulario 931",
      "Sindicato (Boletas, confecciones, asesoramiento)",
      "Legajos, administración",
    ],
    benefits: [],
    process: [],
    tools: [],
    faqs: [],
    color: "#003850",
    bgColor: "from-[#ABB9C6]/10 to-[#ABB9C6]/5",
    image: "",
    testimonial: {},
  },
  // ASESORAMIENTO
  {
    icon: <BookOpen className="h-6 w-6 text-[#003850]" />,
    title: "Asesoramiento",
    description: "Gestión Legal, Gestión Contable y Acompañamiento directo.",
    items: [
      "Gestión Legal",
      "Gestión Contable",
      "Acompañamiento directo",
    ],
    benefits: [],
    process: [],
    tools: [],
    faqs: [],
    color: "#003850",
    bgColor: "from-[#99A8BA]/10 to-[#99A8BA]/5",
    image: "",
    testimonial: {},
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
    { id: "contable", name: "Contable", services: [0] },
    { id: "fiscales", name: "Fiscales", services: [1, 2, 3, 4, 5, 6] },
    { id: "laboral", name: "Laboral", services: [7] },
    { id: "asesoramiento", name: "Asesoramiento", services: [8] },
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
