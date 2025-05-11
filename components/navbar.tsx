"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConsultaClick = () => {
    toast({
      title: "Consulta agendada",
      description:
        "Nos pondremos en contacto contigo a la brevedad para coordinar una reunión.",
      duration: 5000,
    });
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const logoTextVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt="Logo de Cuatro A Estudio"
                width={200}
                height={50}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="flex flex-col">
                <motion.span
                  variants={logoTextVariants}
                  className="text-[#003850] font-bold text-xl tracking-tight leading-none"
                >
                  Cuatro A
                </motion.span>
                <motion.span
                  variants={logoTextVariants}
                  className="text-[#003850]/90 font-medium text-lg tracking-wide"
                >
                  Estudio
                </motion.span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="h-[2px] bg-gradient-to-r from-[#003850] to-[#99A8BA] mt-0.5"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["servicios", "nosotros", "testimonios", "contacto"].map(
              (item, i) => (
                <motion.div key={item} custom={i} variants={menuItemVariants}>
                  <Link
                    href={`#${item}`}
                    className="font-montserrat text-[#003850] hover:text-[#99A8BA] transition-colors relative group"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003850] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              )
            )}
            <motion.div custom={4} variants={menuItemVariants}>
              <Button
                onClick={handleConsultaClick}
                className="bg-[#003850] hover:bg-[#002139] text-white font-montserrat rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Consultar
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="text-[#003850]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute w-full"
        >
          <div className="container mx-auto px-4 py-6 space-y-6">
            {["servicios", "nosotros", "testimonios", "contacto"].map(
              (item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={`#${item}`}
                    className="block font-montserrat text-[#003850] hover:text-[#99A8BA] transition-colors py-2 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.div>
              )
            )}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleConsultaClick();
                }}
                className="w-full bg-[#003850] hover:bg-[#002139] text-white font-montserrat rounded-full py-6 shadow-lg"
              >
                Consultar
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
