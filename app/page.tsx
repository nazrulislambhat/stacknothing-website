import { Hero } from "@/components/home/hero";
import { AboutSummary } from "@/components/home/about-summary";
import { ServicesSummary } from "@/components/home/services-summary";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSummary />
      <ServicesSummary />
      {/* Call to Action Section can be added here or inside footer/sections */}
    </div>
  );
}
