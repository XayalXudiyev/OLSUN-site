"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Star,
  Phone,
  Mail,
  MessageCircle,
  X,
  Check,
  ChevronLeft,
  ChevronRight,
  Grid as GridIcon,
  Calendar,
  Shield,
  CreditCard,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const mockService = {
  id: "1",
  name: "Corporate Lunch Package",
  category: "Restaurant",
  rating: 4.8,
  reviews: 127,
  location: "123 Nizami Street, Nizami District, Baku AZ1000",
  price: 1600,
  capacity: { min: 20, max: 100 },
  amenities: [
    "WiFi",
    "Parking",
    "Indoor",
    "Catering",
    "Sound System",
    "Event Coordinator",
  ],
  image:
    "https://images.unsplash.com/photo-1756397481872-ed981ef72a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGRpbmluZ3xlbnwxfHx8fDE3NjIwMTAzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
};

export default function ServiceDetailsPage() {
  const locale = useLocale();

  const [showGallery, setShowGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("basic");
  const [eventDate, setEventDate] = useState("");
  const [guestCount, setGuestCount] = useState("");

  const service = mockService;

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl text-[#111827] mb-4">Service not found</h1>
          <Link
            href={`/${locale}/services`}
            className="text-primary hover:underline"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    service.image,
    service.image,
    service.image,
    service.image,
    service.image,
  ];

  const handleBooking = () => {
    toast.success("Booking request sent! We'll confirm within 24 hours.");
  };

  const packages = [
    {
      id: "basic",
      name: "Basic Package",
      badge: "Basic",
      badgeColor: "bg-[#6B7280]",
      title: "Corporate Lunch Package",
      price: 1500,
      guests: 30,
      features: [
        "Venue rental (4 hours)",
        "Basic menu (3-course lunch)",
        "Tables & chairs setup",
        "Basic sound system",
        "Event coordinator",
        "Cleanup included",
      ],
      info: [
        "Duration: 4 hours",
        "Minimum guests: 20",
        "Advance booking: 7 days",
      ],
    },
    {
      id: "premium",
      name: "Premium Package",
      badge: "Premium",
      badgeColor: "bg-[#3B82F6]",
      title: "Corporate Event Package",
      price: 3000,
      guests: 50,
      features: [
        "All Basic features +",
        "Premium menu (4-course dinner)",
        "Professional AV equipment",
        "Stage & lighting",
        "Dedicated event manager",
        "Photographer (2 hours)",
        "Custom decorations",
        "Extended hours (6 hours)",
      ],
      info: [
        "Duration: 6 hours",
        "Minimum guests: 30",
        "Advance booking: 14 days",
      ],
    },
    {
      id: "deluxe",
      name: "Deluxe Package",
      badge: "Deluxe",
      badgeColor: "bg-[#F59E0B]",
      title: "Premium Corporate Experience",
      price: 5000,
      guests: 100,
      popular: true,
      features: [
        "All Premium features +",
        "Luxury menu (5-course gourmet)",
        "Live music (3 hours)",
        "Full bar service",
        "Professional photography & videography",
        "Premium decorations",
        "Valet parking",
        "All-day access (8 hours)",
      ],
      info: [
        "Duration: 8 hours",
        "Minimum guests: 50",
        "Advance booking: 21 days",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-20 py-4">
          <p className="text-sm text-[#6B7280]">
            <Link
              href={`/${locale}/`}
              className="hover:text-primary transition-colors"
            >
              Home
            </Link>
            {" > "}
            <Link
              href={`/${locale}/services`}
              className="hover:text-primary transition-colors"
            >
              Services
            </Link>
            {" > "}
            <Link
              href={`/${locale}/services`}
              className="hover:text-primary transition-colors"
            >
              {service.category}
            </Link>
            {" > "}
            <span className="text-[#111827] font-semibold">{service.name}</span>
          </p>
        </div>
      </div>

      <div className="relative h-[300px] md:h-[500px] bg-[#F9FAFB]">
        <div className="md:hidden h-full relative">
          <img
            src={images[currentImage]}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <Button
            onClick={() =>
              setCurrentImage(
                (prev) => (prev - 1 + images.length) % images.length,
              )
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={() =>
              setCurrentImage((prev) => (prev + 1) % images.length)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 text-white text-xs rounded-full">
            {currentImage + 1} / {images.length}
          </div>
        </div>

        <div className="hidden md:flex max-w-7xl mx-auto h-full gap-1.5 relative">
          <div className="w-[60%] relative group">
            <img
              src={images[0]}
              alt={service.name}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setShowGallery(true)}
            />
            <Button
              onClick={() => setShowGallery(true)}
              className="absolute bottom-4 right-4 px-5 py-2.5 bg-primary hover:bg-primary/70 backdrop-blur-sm rounded-lg flex items-center gap-2  transition-colors font-semibold"
            >
              <GridIcon className="w-5 h-5" />
              <span className="text-sm">View All Photos</span>
            </Button>
          </div>
          <div className="w-[40%] grid grid-cols-2 grid-rows-2 gap-1.5">
            {images.slice(1, 5).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${service.name} ${idx + 2}`}
                className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setShowGallery(true)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-20 py-8 md:py-16">
        <div className="grid lg:grid-cols-[65%_35%] gap-8 lg:gap-10">
          <div>
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-[#F9FAFB] border border-[#E5E7EB] text-primary text-sm rounded-full font-semibold">
                  {service.category}
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "w-5 h-5",
                          star <= service.rating
                            ? "fill-[#F59E0B] text-[#F59E0B]"
                            : "text-[#E5E7EB]",
                        )}
                      />
                    ))}
                  </div>
                  <Button className="text-[#6B7280] hover:text-primary transition-colors">
                    {service.rating} ({service.reviews} reviews)
                  </Button>
                </div>
              </div>

              <h1 className="text-[28px] md:text-[40px] text-[#111827] mb-4 font-bold">
                {service.name}
              </h1>

              <div className="flex items-center gap-2 text-[#6B7280] mb-6">
                <MapPin className="w-5 h-5" />
                <a
                  href="#location"
                  className="hover:text-primary transition-colors"
                >
                  {service.location}
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {service.amenities.slice(0, 6).map((amenity, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full flex items-center gap-2"
                  >
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-sm text-[#111827]">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-[22px] md:text-[24px] text-[#111827] mb-4 font-semibold">
                About This Venue
              </h2>
              <p className="text-[#6B7280] leading-[1.7]">
                {service.name} offers an elegant dining experience in the heart
                of Baku. With a capacity of {service.capacity.min}-
                {service.capacity.max} guests, our venue features both indoor
                and outdoor spaces, perfect for corporate events, team
                celebrations, and client dinners. Our professional team ensures
                every event runs smoothly, with customizable menu options and
                dedicated event coordination.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-[22px] md:text-[24px] text-[#111827] mb-6 font-semibold">
                Pricing Packages
              </h2>
              <div className="space-y-5">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="relative bg-white border-2 border-[#E5E7EB] rounded-xl p-5 md:p-6 hover:border-primary hover:shadow-lg transition-all"
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 right-6 px-3 py-1.5 bg-[#10B981] text-white text-xs rounded-full font-bold">
                        Most Popular
                      </div>
                    )}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                      <div>
                        <span
                          className={cn(
                            "inline-block px-3 py-1 text-white text-xs rounded-md mb-2",
                            pkg.badgeColor,
                          )}
                        >
                          {pkg.badge}
                        </span>
                        <h3 className="text-lg md:text-[20px] text-[#111827] font-semibold">
                          {pkg.title}
                        </h3>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-[28px] md:text-[32px] text-[#111827] font-bold">
                          {pkg.price.toLocaleString()} AZN
                        </p>
                        <p className="text-sm text-[#6B7280]">
                          /event for {pkg.guests} guests
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-5">
                      <div>
                        <p className="text-sm text-[#6B7280] mb-2 font-semibold">
                          Included Services:
                        </p>
                        <div className="space-y-2">
                          {pkg.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-[#111827]">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-[#6B7280] mb-2 font-semibold">
                          Additional Info:
                        </p>
                        <div className="space-y-2">
                          {pkg.info.map((info, idx) => (
                            <p key={idx} className="text-sm text-[#6B7280]">
                              {info}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        setSelectedPackage(pkg.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="w-full py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-semibold"
                    >
                      Select Package
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:block">
            <div className="lg:sticky lg:top-24 bg-white border-2 border-[#E5E7EB] rounded-2xl p-5 md:py-6 shadow-lg">
              <div className="mb-5">
                <p className="text-sm text-[#6B7280]">Starting from</p>
                <p className="text-[32px] md:text-[36px] text-[#111827] font-bold">
                  {service.price.toLocaleString()} AZN
                </p>
                <p className="text-[#6B7280]">/event</p>
              </div>

              <div className="mb-4">
                <Label className="block text-sm text-[#111827] mb-2 font-semibold">
                  Select Package
                </Label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white transition-all"
                >
                  {packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} - {pkg.price.toLocaleString()} AZN
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <Label className="block text-sm text-[#111827] mb-2 font-semibold">
                  Event Date
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <Label className="block text-sm text-[#111827] mb-2 font-semibold">
                  Number of Guests
                </Label>
                <input
                  type="number"
                  placeholder="Enter guest count"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  min={service.capacity.min}
                  max={service.capacity.max}
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <Button
                onClick={() => setShowContactModal(true)}
                className="w-full py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all mb-3 flex items-center justify-center gap-2 font-semibold"
              >
                <Phone className="w-5 h-5" />
                Contact Venue
              </Button>

              <Button
                onClick={handleBooking}
                className="w-full py-3.5 bg-[#10B981] text-white rounded-lg hover:bg-[#059669] hover:shadow-lg transition-all mb-6 flex items-center justify-center gap-2 font-semibold"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </Button>

              <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                {[
                  {
                    icon: Shield,
                    text: "Verified Partner",
                    color: "text-[#10B981]",
                  },
                  {
                    icon: Clock,
                    text: "Instant Confirmation",
                    color: "text-primary",
                  },
                  {
                    icon: CreditCard,
                    text: "Secure Payment",
                    color: "text-[#3B82F6]",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <item.icon className={cn("w-5 h-5", item.color)} />
                    <span className="text-xs text-[#6B7280]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showGallery && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={() =>
              setCurrentImage(
                (prev) => (prev - 1 + images.length) % images.length,
              )
            }
            className="absolute left-6 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() =>
              setCurrentImage((prev) => (prev + 1) % images.length)
            }
            className="absolute right-6 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[80vh]">
            <img
              src={images[currentImage]}
              alt={`Gallery ${currentImage + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
          <div className="absolute top-6 text-white">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}

      {showContactModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl text-[#111827]">
                Contact {service.name}
              </h3>
              <Button
                onClick={() => setShowContactModal(false)}
                variant={"default"}
              >
                <X className="w-6 h-6 text-[#6B7280]" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-[#F9FAFB] rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <Phone className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-[#6B7280]">Phone</p>
                  <a
                    href="tel:+994104177132"
                    className="text-primary hover:underline cursor-pointer"
                  >
                    +994 10 417 71 32
                  </a>
                </div>
              </div>

              {/* <div className="p-5 bg-[#F9FAFB] rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <MessageCircle className="w-8 h-8 text-[#10B981]" />
                <div>
                  <p className="text-sm text-[#6B7280]">WhatsApp</p>
                  <p className="text-[#111827]">Message on WhatsApp</p>
                </div>
              </div> */}

              <div className="p-5 bg-[#F9FAFB] rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <Mail className="w-8 h-8 text-[#3B82F6]" />
                <div>
                  <p className="text-sm text-[#6B7280]">Email</p>
                  <a
                    href="mailto:info@olsunevents.com"
                    className="text-primary hover:underline cursor-pointer"
                  >
                    info@olsunevents.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
