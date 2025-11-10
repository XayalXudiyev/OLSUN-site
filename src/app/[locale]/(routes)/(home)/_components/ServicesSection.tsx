import { Briefcase, Calendar, Rocket, Building } from "lucide-react";

export default function ServicesSection() {
  const servicesData = [
    {
      icon: Briefcase,
      title: "HR Managers",
      description:
        "Organize team buildings, corporate parties, and company events without the headache",
      color: "#6366F1",
    },
    {
      icon: Calendar,
      title: "Office Managers",
      description:
        "Coordinate quarterly meetings, training workshops, and client entertainment seamlessly",
      color: "#3B82F6",
    },
    {
      icon: Rocket,
      title: "Startup Founders",
      description:
        "Plan company milestones, offsites, and team celebrations with ease",
      color: "#10B981",
    },
    {
      icon: Building,
      title: "Enterprise Teams",
      description:
        "Scale event management across departments and locations effortlessly",
      color: "#6366F1",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-[40px] text-[#111827] text-center mb-16">
          Who We Serve
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-10 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <service.icon
                className="w-16 h-16 mx-auto mb-4"
                style={{ color: service.color }}
              />
              <h3 className="text-[24px] text-[#111827] mb-3">
                {service.title}
              </h3>
              <p className="text-[#6B7280]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
