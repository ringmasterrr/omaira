import Process from "@/components/AgroFarm/Process";
import Hero from "@/components/AgroFarm/Hero";
import Advantages from "@/components/AgroFarm/Advantages";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Trends from "@/components/AgroFarm/Trends";


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
