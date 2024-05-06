import Assets from "@/components/Omaira-Protocol/Assets";
import Hero from "@/components/Omaira-Protocol/Hero";
import Process from "@/components/Omaira-Protocol/Process";
import Roadmap from "@/components/Omaira-Protocol/Roadmap";
import Conclusion from "@/components/Omaira-Protocol/Conclusion";


export default function OmairaProtocol() {
  return (
    <main className="flex flex-col gap-12 items-center justify-center ">
      <Hero />
      <Process/>
      <Assets/>
      <Roadmap/>
      <Conclusion/>
    </main>
  );
}
