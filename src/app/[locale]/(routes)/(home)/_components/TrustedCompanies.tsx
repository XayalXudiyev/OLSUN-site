import Image from "next/image";

export default function TrustedCompanies() {
  const supportedBy = [
    {
      name: "Mədəniyyət Nazirliyi",
      logo: "/supported/Mədəniyyət_Nazirliyi.png",
      alt: "Azerbaijan Ministry of Culture",
    },
    {
      name: "Yaradıcı Mərkəz",
      logo: "/supported/yardıcı-mərkəz.png",
      alt: "Creative Center",
    },
    {
      name: "CulTech İnkubasiya Mərkəzi",
      logo: "/supported/cultech.webp",
      alt: "CulTech Incubation Center",
    },
  ];

  return (
    <section className="mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary font-semibold mb-6 flex items-center justify-center gap-2 text-2xl  rounded-lg w-max mx-auto px-4 py-2 shadow-sm">
          Partnering with leading institutions in Azerbaijan
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {supportedBy.map((supporter) => (
            <div
              key={supporter.name}
              className="flex flex-col items-center gap-2 p-4 hover:scale-105 transition-transform"
            >
              <div className="relative h-16 w-32 md:h-28 md:w-48 flex items-center justify-center">
                <Image
                  src={supporter.logo}
                  alt={supporter.alt}
                  fill
                  className="object-contain filter  hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-xs text-[#6B7280] text-center font-medium">
                {supporter.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
