import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onExploreServices: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function HeroSection({
  onExploreServices,
  onScrollToSection,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative mt-20 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm text-[#6366F1] uppercase tracking-wider mb-3 font-bold bg-[#F1EFFF] px-3 py-1 rounded-md inline-block">
            Azerbaijan's First Corporate Event Marketplace
          </p>
          <h1 className="text-5xl md:text-[56px] leading-tight text-[#111827] mb-4 font-normal">
            Revolutionizing Event Management in Azerbaijan
          </h1>
          <h2 className="text-xl text-[#6B7280] leading-normal mb-6 max-w-[540px]">
            The all-in-one marketplace connecting HR managers with trusted
            venues, services, and vendors for seamless corporate events
          </h2>

          <div className="flex flex-col h-14 sm:flex-row gap-4 mb-6">
            <Button
              type="button"
              onClick={onExploreServices}
              className="bg-primary h-full text-white text-lg rounded-xl flex items-center justify-center gap-1.5 transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-[1] hover:cursor-pointer"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onScrollToSection("#about")}
              className="border-[1.5px] border-primary h-full text-primary text-lg rounded-xl transition-all hover:bg-transparent hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/hero-photo.webp"
            alt="Corporate event celebration"
            width={600}
            height={500}
            className="w-full h-auto rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
