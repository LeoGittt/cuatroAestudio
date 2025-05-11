import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Clients } from "@/components/clients";
import { CTA } from "@/components/cta";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
