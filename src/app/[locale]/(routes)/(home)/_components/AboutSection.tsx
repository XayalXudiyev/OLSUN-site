import { Handshake, Clock, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutSection() {
  const t = useTranslations("landing");

  const statsData = [
    {
      icon: Handshake,
      value: "20+",
      label: "Trusted Partners",
      color: "#6366F1",
    },
    {
      icon: Clock,
      value: t("time-is-saved-value"),
      label: t("time-is-saved"),
      color: "#10B981",
    },
    {
      icon: Shield,
      value: t("verified-value"),
      label: t("verified"),
      color: "#3B82F6",
    },
  ];

  return (
    <section
      id="about"
      className="px-4 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-28 items-center">
        <div className="w-full lg:w-7/12 order-2 lg:order-1">
          <p className="text-xs text-primary font-bold px-3 py-2 flex items-center justify-center bg-[#F1EFFF] uppercase tracking-widest mb-4 rounded-4xl w-fit mx-auto lg:mx-0">
            <Image
              src="/icons/Man.svg"
              alt="Olsun Logo"
              width={20}
              height={24}
              className="inline-block mr-2"
            />
            {t("who-we-are")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 font-semibold text-center lg:text-left">
            {t("building-first-event-ecosystem")}
          </h2>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed mb-8 text-center lg:text-left">
            {t("building-first-event-ecosystem-text")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-6 hover:shadow-lg hover:-translate-y-1 transition-all text-center"
              >
                <stat.icon
                  className="w-8 h-8 md:w-9 md:h-9 mb-3 mx-auto"
                  style={{ color: stat.color }}
                />
                <p className="text-2xl md:text-4xl mb-1 font-bold">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-5/12 order-1 lg:order-2">
          <Image
            src="/images/Landing/hero-photo.webp"
            alt="Corporate event celebration"
            width={700}
            height={500}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
