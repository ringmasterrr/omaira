import Process from "@/components/Mines/Process";
import Hero from "@/components/Mines/Hero";
import Advantages from "@/components/Mines/Advantages";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Trends from "@/components/Mines/Trends";


export default function Home() {
  return (
    <main className="flex flex-col gap-12 items-center justify-center ">
      <Hero />
      <Process/>
      <HorizontalLine/>
      <Advantages/>
      <HorizontalLine/>
      <Trends/>

    </main>
  );
}
