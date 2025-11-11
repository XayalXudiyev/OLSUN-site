import { CheckCircle, Zap, Puzzle } from "lucide-react";
import Image from "next/image";

const solutionsData = [
  {
    icon: CheckCircle,
    title: "Curated Marketplace",
    description:
      "Browse 20+ pre-vetted venues, service providers, and vendors in one platform. Filter by budget, capacity, location, and availability instantly.",
    image: "/Landing/Curated-marketplace.webp",
    iconColor: "#10B981",
    reverse: false,
  },
  {
    icon: Zap,
    title: "Streamlined Booking",
    description:
      "Submit one request, get responses from multiple vendors. Compare prices transparently, book with confidence, and track everything in your dashboard.",
    image: "/Landing/Curated-marketplace.webp",
    iconColor: "#3B82F6",
    reverse: true,
  },
  {
    icon: Puzzle,
    title: "All-in-One Coordination",
    description:
      "Manage RSVPs, track budgets, communicate with vendors, and coordinate logistics—all from one simple interface.",
    image: "/Landing/Curated-marketplace.webp",
    iconColor: "#6366F1",
    reverse: false,
  },
];
export default function SolutionsSection() {
  return (
    <section className="p-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-16">
          How Olsun Events Solves It
        </h2>

        <div className="space-y-14">
          {solutionsData.map((solution) => (
            <div
              key={solution.title}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div
                className={
                  solution.reverse ? "order-1 md:order-2" : "order-2 md:order-1"
                }
              >
                <Image
                  src={solution.image}
                  alt="Corporate event celebration"
                  width={600}
                  height={300}
                  className="w-full h-[300px] rounded-2xl"
                  priority
                />
              </div>
              <div
                className={
                  solution.reverse ? "order-2 md:order-1" : "order-1 md:order-2"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <solution.icon
                    className="w-8 h-8"
                    style={{ color: solution.iconColor }}
                  />
                  <h3 className="text-[28px] text-[#111827]">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-lg text-[#6B7280] leading-relaxed">
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
