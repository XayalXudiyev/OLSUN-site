import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ServicesSection() {
  const t = useTranslations("landing");

  const servicesData = [
    {
      icon: "/icons/HR.svg",
      title: t("hr-managers"),
      description: t("ht-managers-text"),
      color: "#6366F1",
    },
    {
      icon: "/icons/HR.svg",
      title: t("office-managers"),
      description: t("office-managers-text"),
      color: "#3B82F6",
    },
    {
      icon: "/icons/Rocket.svg",
      title: t("organizational-developers"),
      description: t("organizational-developers-text"),
      color: "#10B981",
    },
    {
      icon: "/icons/Enterprise.svg",
      title: t("enterprise-teams"),
      description: t("enterprise-teams-text"),
      color: "#6366F1",
    },
  ];

  return (
    <section className="px-4 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center mb-8 md:mb-16">
          {t("who-we-serve")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="bg-[#332B66] rounded-2xl py-8 md:py-10 px-4 md:px-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all text-white"
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
              </div>
              <h3 className="text-xl md:text-2xl mb-4 md:mb-7">
                {service.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
