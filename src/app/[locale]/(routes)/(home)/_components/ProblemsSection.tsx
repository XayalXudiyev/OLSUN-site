import { Clock, HelpCircle, Puzzle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProblemsSection() {
  const t = useTranslations("landing");
  const problemsData = [
    {
      icon: "/icons/Clock.svg",
      title: t("problem-hours-wasted"),
      description: t("problem-hours-wasted-text"),
      bgColor: "#EF4444",
    },
    {
      icon: "/icons/Partnership.svg",
      title: t("problem-quality-assurance"),
      description: t("problem-quality-assurance-text"),
      bgColor: "#F59E0B",
    },
    {
      icon: `/icons/Chaos.svg`,
      title: t("problem-fragmented-process"),
      description: t("problem-fragmented-process-text"),
      bgColor: "#6366F1",
    },
  ];

  return (
    <section className="px-4 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white text-center mb-4">
          {t("the-challenges-faced")}
        </h2>
        <p className="text-base md:text-lg text-[#B2ADD2] text-center mb-8 md:mb-16 px-4">
          {t("event-planning-shouldnt-consume")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problemsData.map((problem) => (
            <div
              key={problem.title}
              className="bg-[#332B66] rounded-2xl p-6 md:p-7 hover:shadow-lg hover:-translate-y-1 transition-all text-white"
            >
              <Image
                src={problem.icon}
                alt={problem.title}
                width={56}
                height={56}
                className="w-12 h-12 md:w-14 md:h-14"
              />
              <h3 className="text-xl md:text-2xl mt-3 mb-4 md:mb-5">
                {problem.title}
              </h3>
              <p className="text-sm md:text-base text-[#A59FC6] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
