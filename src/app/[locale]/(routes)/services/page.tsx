import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Event Planning",
      description:
        "Comprehensive event planning services tailored to your needs.",
    },
    {
      title: "Venue Selection",
      description: "Help finding the perfect venue for your special occasion.",
    },
    {
      title: "Catering",
      description: "Delicious catering options for all types of events.",
    },
    {
      title: "Entertainment",
      description: "Live music, DJs, and entertainment solutions.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
