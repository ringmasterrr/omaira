import Process from "@/components/RealEstate/Process";
import Hero from "@/components/RealEstate/Hero";
import Advantages from "@/components/RealEstate/Advantages";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Trends from "@/components/RealEstate/Trends";


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
