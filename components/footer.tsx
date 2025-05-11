import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#002139] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-5 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/logo-white.png" alt="Cuatro A Logo" width={150} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-[#ABB9C6] font-montserrat mb-8 leading-relaxed">
              Soluciones contables integrales para el crecimiento y éxito de tu empresa. Nuestro compromiso es ser un
              verdadero aliado estratégico en tu negocio.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-[#ABB9C6] hover:text-white transition-colors bg-white/10 p-2.5 rounded-full hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-[#ABB9C6] hover:text-white transition-colors bg-white/10 p-2.5 rounded-full hover:bg-white/20"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-[#ABB9C6] hover:text-white transition-colors bg-white/10 p-2.5 rounded-full hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-[#ABB9C6] hover:text-white transition-colors bg-white/10 p-2.5 rounded-full hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-satoshi font-bold text-xl mb-6 relative inline-block">
              Servicios
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#003850]"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-[#ABB9C6] hover:text-white transition-colors font-montserrat flex items-center"
                >
                  <span className="h-1.5 w-1.5 bg-[#003850] rounded-full mr-2"></span>
                  Diagnóstico contable-financiero
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#ABB9C6] hover:text-white transition-colors font-montserrat flex items-center"
                >
                  <span className="h-1.5 w-1.5 bg-[#003850] rounded-full mr-2"></span>
                  Asesoramiento contable
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#ABB9C6] hover:text-white transition-colors font-montserrat flex items-center"
                >
                  <span className="h-1.5 w-1.5 bg-[#003850] rounded-full mr-2"></span>
                  Servicios impositivos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#ABB9C6] hover:text-white transition-colors font-montserrat flex items-center"
                >
                  <span className="h-1.5 w-1.5 bg-[#003850] rounded-full mr-2"></span>
                  Gestión laboral
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#ABB9C6] hover:text-white transition-colors font-montserrat flex items-center"
                >
                  <span className="h-1.5 w-1.5 bg-[#003850] rounded-full mr-2"></span>
                  Análisis económico-financiero
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-satoshi font-bold text-xl mb-6 relative inline-block">
              Enlaces rápidos
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#003850]"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-[#ABB9C6] hover:text-white transition-colors font-montserrat flex items-center"
                >
                  <span className="h-1.5 w-1.5 bg-[#003850] rounded-full mr-2"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-[#ABB9C6] hover:text-white transition-colors font-montserrat flex items-center"
                >
                  <span className="h-1.5 w-1.5 bg-[#003850] rounded-full mr-2"></span>
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#nosotros"
                  className="text-[#ABB9C6] hover:text-white transition-colors font-montserrat flex items-center"
                >
                  <span className="h-1.5 w-1.5 bg-[#003850] rounded-full mr-2"></span>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonios"
                  className="text-[#ABB9C6] hover:text-white transition-colors font-montserrat flex items-center"
                >
                  <span className="h-1.5 w-1.5 bg-[#003850] rounded-full mr-2"></span>
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-[#ABB9C6] hover:text-white transition-colors font-montserrat flex items-center"
                >
                  <span className="h-1.5 w-1.5 bg-[#003850] rounded-full mr-2"></span>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-satoshi font-bold text-xl mb-6 relative inline-block">
              Contacto
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#003850]"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#003850] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[#ABB9C6] font-montserrat">Av. Corrientes 1234, Piso 5, CABA</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#003850] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[#ABB9C6] font-montserrat">+54 11 4567-8900</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#003850] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[#ABB9C6] font-montserrat">contacto@cuatroa.com.ar</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-[#003850] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[#ABB9C6] font-montserrat">Lunes a Viernes: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#ABB9C6]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#ABB9C6] font-montserrat text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Cuatro A. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-[#ABB9C6] hover:text-white transition-colors text-sm font-montserrat">
              Política de privacidad
            </Link>
            <Link href="#" className="text-[#ABB9C6] hover:text-white transition-colors text-sm font-montserrat">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
