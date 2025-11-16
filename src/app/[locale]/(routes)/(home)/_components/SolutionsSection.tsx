import { CheckCircle, Zap, Puzzle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SolutionsSection() {
  const t = useTranslations("landing");

  const solutionsData = [
    {
      icon: CheckCircle,
      title: t("curated-marketplace"),
      description: t("curated-marketplace-text"),
      image: "/images/Landing/Curated-marketplace.webp",
      iconColor: "#10B981",
      reverse: false,
    },
    {
      icon: Zap,
      title: t("streamlined-booking"),
      description: t("streamlined-booking-text"),
      image: "/images/Landing/Streamlined-booking.webp",
      iconColor: "#3B82F6",
      reverse: true,
    },
    {
      icon: Puzzle,
      title: t("verified-trusted"),
      description: t("verified-trusted-text"),
      image: "/images/Landing/Curated-marketplace.webp",
      iconColor: "#6366F1",
      reverse: false,
    },
  ];
  return (
    <section className="px-4 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-16">
          {t("how-olsun-solves-it")}
        </h2>

        <div className="space-y-12 md:space-y-14">
          {solutionsData.map((solution) => (
            <div
              key={solution.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div
                className={
                  solution.reverse ? "order-1 md:order-2" : "order-2 md:order-1"
                }
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={600}
                  height={300}
                  className="w-full h-48 sm:h-64 md:h-[300px] rounded-2xl object-cover"
                />
              </div>
              <div
                className={
                  solution.reverse ? "order-2 md:order-1" : "order-1 md:order-2"
                }
              >
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <solution.icon
                    className="w-6 h-6 md:w-8 md:h-8"
                    style={{ color: solution.iconColor }}
                  />
                  <h3 className="text-xl sm:text-2xl md:text-[28px] text-[#111827] text-center md:text-left">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-[#6B7280] leading-relaxed text-center md:text-left">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
