import Footer from "@/components/Footer";
import About from "@/components/Homepage/About";
import CTA from "@/components/Homepage/CTA";
import FAQ from "@/components/Homepage/FAQ";
import Hero from "@/components/Homepage/Hero";
import HorizontalLine from "@/components/Homepage/HorizontalLine";
import Process from "@/components/Homepage/Process";
import Roadmap from "@/components/Homepage/Roadmap";
import Size from "@/components/Homepage/Size";
import Tokenization from "@/components/Homepage/Tokenization";
import Why from "@/components/Homepage/Why";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 ">
      <Hero />
      <HorizontalLine />
      <About />
      <HorizontalLine />
      <Why />
      <HorizontalLine />
      <Roadmap />
      <HorizontalLine />
      <Tokenization />
      <HorizontalLine />
      <Size />
      <HorizontalLine />
      <Process />
      <HorizontalLine />
      <CTA />
      <HorizontalLine />
      <FAQ />

      <Footer />
    </main>
  );
}
