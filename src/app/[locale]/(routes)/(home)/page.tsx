"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import HeroSection from "./_components/HeroSection";
import TrustedCompanies from "./_components/TrustedCompanies";
import AboutSection from "./_components/AboutSection";
import ProblemsSection from "./_components/ProblemsSection";
import SolutionsSection from "./_components/SolutionsSection";
import ServicesSection from "./_components/ServicesSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  const router = useRouter();
  const locale = useLocale();

  const handleExploreServices = () => {
    router.push(`/${locale}/services`);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div>
      <HeroSection
        onExploreServices={handleExploreServices}
        onScrollToSection={scrollToSection}
      />
      <TrustedCompanies />
      <AboutSection />
      <ProblemsSection />
      <SolutionsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
