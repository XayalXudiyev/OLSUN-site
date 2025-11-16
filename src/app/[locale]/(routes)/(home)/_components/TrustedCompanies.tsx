import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TrustedCompanies() {
  const t = useTranslations("landing");
  const supportedBy = [
    {
      name: "Mədəniyyət Nazirliyi",
      logo: "/images/supported/Mədəniyyət_Nazirliyi.png",
      alt: "Azerbaijan Ministry of Culture",
    },
    {
      name: "Yaradıcı Mərkəz",
      logo: "/images/supported/yardıcı-mərkəz.png",
      alt: "Creative Center",
    },
    {
      name: "CulTech İnkubasiya Mərkəzi",
      logo: "/images/supported/cultech.webp",
      alt: "CulTech Incubation Center",
    },
  ];

  return (
    <section className="mx-4 my-12 md:mx-10 lg:mx-20 md:my-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary font-semibold mb-6 flex items-center justify-center gap-2 text-[13px] md:text-2xl rounded-lg w-max mx-auto px-3 md:px-4 py-2 shadow-sm">
          {t("partnering-text")}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
          {supportedBy.map((supporter) => (
            <div
              key={supporter.name}
              className="flex flex-col items-center gap-2 p-4 hover:scale-105 transition-transform"
            >
              <div className="relative h-12 w-24 sm:h-16 sm:w-32 md:h-20 md:w-40 lg:h-28 lg:w-48 flex items-center justify-center">
                <Image
                  src={supporter.logo}
                  alt={supporter.alt}
                  fill
                  className="object-contain filter hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-xs sm:text-sm text-[#6B7280] text-center font-medium">
                {supporter.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
