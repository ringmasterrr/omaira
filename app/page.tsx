import Footer from "@/components/Footer";
import About from "@/components/Homepage/About";
import CTA from "@/components/Homepage/CTA";
import FAQ from "@/components/Homepage/FAQ";
import Hero from "@/components/Homepage/Hero";
import Process from "@/components/Homepage/Process";
import Roadmap from "@/components/Homepage/Roadmap";
import Size from "@/components/Homepage/Size";
import Why from "@/components/Homepage/Why";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <Hero />
      <About />
      <Why />
      <Roadmap />
      <Size />
      <Process />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
