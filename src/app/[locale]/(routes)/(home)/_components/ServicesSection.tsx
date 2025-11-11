import Image from "next/image";

export default function ServicesSection() {
  const servicesData = [
    {
      icon: "/icons/HR.svg",
      title: "HR Managers",
      description:
        "Organize team buildings, corporate parties, and company events without the headache",
      color: "#6366F1",
    },
    {
      icon: "/icons/HR.svg",
      title: "Office Managers",
      description:
        "Coordinate quarterly meetings, training workshops, and client entertainment seamlessly",
      color: "#3B82F6",
    },
    {
      icon: "/icons/Rocket.svg",
      title: "Startup Founders",
      description:
        "Plan company milestones, offsites, and team celebrations with ease",
      color: "#10B981",
    },
    {
      icon: "/icons/Enterprise.svg",
      title: "Enterprise Teams",
      description:
        "Scale event management across departments and locations effortlessly",
      color: "#6366F1",
    },
  ];

  return (
    <section className="p-20 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-16">
          Who We Serve
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="bg-[#332B66] rounded-2xl py-10 px-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all text-white"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={56}
                  height={56}
                />
              </div>
              <h3 className="text-2xl my-7">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
