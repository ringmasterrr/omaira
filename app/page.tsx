import About from "@/components/Homepage/About";
import Hero from "@/components/Homepage/Hero";
import Size from "@/components/Homepage/Size";
import Why from "@/components/Homepage/Why";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Why />
      <Size />
    </main>
  );
}
