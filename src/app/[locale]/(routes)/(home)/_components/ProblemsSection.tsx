import { Clock, HelpCircle, Puzzle } from "lucide-react";

export default function ProblemsSection() {
  const problemsData = [
    {
      icon: Clock,
      title: "Hours Wasted Searching",
      description:
        "Calling 20+ vendors, scrolling Instagram endlessly, coordinating across WhatsApp groups—event planning consumes 10+ hours per event",
      bgColor: "#EF4444",
    },
    {
      icon: HelpCircle,
      title: "No Quality Assurance",
      description:
        "Unreliable vendors, hidden costs, last-minute cancellations—finding trustworthy partners feels like gambling",
      bgColor: "#F59E0B",
    },
    {
      icon: Puzzle,
      title: "Fragmented Process",
      description:
        "Juggling multiple tools, spreadsheets, and platforms makes coordination chaotic and error-prone",
      bgColor: "#6366F1",
    },
  ];

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-[40px] text-[#111827] text-center mb-4">
          The Challenge HR Managers Face
        </h2>
        <p className="text-lg text-[#6B7280] text-center mb-16">
          Event planning shouldn't consume your entire week
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {problemsData.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div
                className="w-12 h-12 bg-opacity-10 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${problem.bgColor}1A` }}
              >
                <problem.icon
                  className="w-8 h-8"
                  style={{ color: problem.bgColor }}
                />
              </div>
              <h3 className="text-[22px] text-[#111827] mb-4">
                {problem.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
