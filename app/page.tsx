import About from "@/components/About";
import { CtaWithAnimation } from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Works from "@/components/Works";

export default function Home() {

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Works />
      <Testimonials />
      <Pricing/>
      <CtaWithAnimation />
      <Footer />
    </main>
  )
}
