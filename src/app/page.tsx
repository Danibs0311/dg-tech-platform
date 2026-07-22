import { Hero } from "@/components/sections/Hero";
import { PortfolioMarquee } from "@/components/sections/PortfolioMarquee";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-slate-950 min-h-screen">
      <Hero />
      <PortfolioMarquee />
      <ServicesBento />
      <ProcessTimeline />
      <Testimonials />
    </main>
  );
}
