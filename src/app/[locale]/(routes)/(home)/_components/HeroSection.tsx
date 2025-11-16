import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HeroSectionProps {
  onExploreServices: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function HeroSection({
  onExploreServices,
  onScrollToSection,
}: HeroSectionProps) {
  const t = useTranslations("landing");

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden px-4 md:px-10 lg:px-20 pt-8 md:py-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs sm:text-sm text-[#6366F1] uppercase tracking-wider mb-3 font-bold bg-[#F1EFFF] px-3 py-1 rounded-md inline-block text-center md:text-left">
            {t("first-corporate-event-marketplace")}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#111827] mb-4 font-normal text-center md:text-left">
            {t("facilitating-corporate-events")}
          </h1>
          <h2 className="text-lg sm:text-xl text-[#6B7280] leading-normal mb-6 max-w-full md:max-w-[540px] text-center md:text-left">
            {t("we-connect")}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 h-auto sm:h-14">
            <Button
              type="button"
              onClick={onExploreServices}
              className="bg-primary h-12 sm:h-full text-white text-base sm:text-lg rounded-xl flex items-center justify-center gap-1.5 transition-all hover:bg-primary/90 hover:shadow-lg hover:cursor-pointer w-full sm:w-auto"
            >
              {t("explore-services")}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onScrollToSection("#about")}
              className="border-[1.5px] border-primary h-12 sm:h-full text-primary text-base sm:text-lg rounded-xl transition-all hover:bg-transparent hover:text-primary w-full sm:w-auto"
            >
              {t("learn-more")}
            </Button>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <Image
            src="/images/Landing/hero-photo.webp"
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
