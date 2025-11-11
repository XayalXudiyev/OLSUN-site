import { Handshake, Clock, Shield } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const statsData = [
    {
      icon: Handshake,
      value: "20+",
      label: "Trusted Partners",
      color: "#6366F1",
    },
    {
      icon: Clock,
      value: "10 Hours",
      label: "Time Saved Per Event",
      color: "#10B981",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Verified Vendors",
      color: "#3B82F6",
    },
  ];

  return (
    <section id="about" className="p-20 ">
      <div className="max-w-7xl mx-auto flex gap-28 items-center">
        <div className="w-7/12">
          <p className="text-xs text-primary font-bold px-3 py-2 flex items-center justify-center bg-[#F1EFFF] uppercase tracking-widest mb-4 rounded-4xl w-fit">
            <Image
              src="/icons/Man.svg"
              alt="Olsun Logo"
              width={20}
              height={24}
              className="inline-block mr-2"
            />
            Who We Are
          </p>
          <h2 className="text-4xl  leading-tight mb-6 font-semibold">
            Building Azerbaijan's Event Ecosystem
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
            Olsun Events is Azerbaijan's first corporate event marketplace,
            connecting HR managers and office coordinators with pre-vetted
            venues, service providers, and vendors. Born from the need to
            simplify event planning, we're backed by the CulTech Incubation
            Program and supported by Azerbaijan's Ministry of Culture.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <stat.icon
                  className="w-9 h-9 mb-3"
                  style={{ color: stat.color }}
                />
                <p className="text-4xl  mb-1">{stat.value}</p>
                <p className="text-sm text-[#6B7280]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-5/12">
          <Image
            src="/images/Landing/hero-photo.webp"
            alt="Corporate event celebration"
            width={700}
            height={500}
            className="w-full h-[500px] rounded-2xl shadow-2xl "
          />
        </div>
      </div>
    </section>
  );
}
