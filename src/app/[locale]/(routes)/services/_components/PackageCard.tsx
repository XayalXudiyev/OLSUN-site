"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter, useParams } from "next/navigation";
import {
  Wifi,
  Car,
  Home as HomeIcon,
  Utensils,
  Wine,
  TreePine,
  Clock,
  Calendar,
  CheckCircle,
  Users,
  MoveRight,
} from "lucide-react";

interface Package {
  id: string;
  name: string;
  category: string;
  packageType: string;
  originalPrice?: number;
  discountPercent?: number;
  finalPrice: number;
  priceUnit: string;
  amenities: string[];
  includedServices: string[];
  duration: string;
  minGuests: number;
  advanceBooking: string;
}

interface PackageCardProps {
  package: Package;
}

const amenityIcons: Record<string, any> = {
  WiFi: Wifi,
  Parking: Car,
  Indoor: HomeIcon,
  Outdoor: TreePine,
  Catering: Utensils,
  Alcohol: Wine,
};

export const PackageCard = ({ package: pkg }: PackageCardProps) => {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const handleCardClick = () => {
    router.push(`/${locale}/services/${pkg.id}`);
  };

  return (
    <button
      type="button"
      onClick={handleCardClick}
      className="group bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative flex flex-col h-full text-left w-full"
    >
      <div className="absolute top-3 left-0 right-0 px-3 flex items-start justify-between z-10">
        <div className="bg-white/95 backdrop-blur-sm border border-[#E5E7EB] px-2.5 py-1 rounded-md shadow-sm">
          <span
            className="text-[11px] text-primary uppercase"
            style={{ fontWeight: 700 }}
          >
            {pkg.category}
          </span>
        </div>
        {pkg.discountPercent && (
          <div className="bg-[#EF4444] px-2.5 py-1 rounded-md shadow-md">
            <span
              className="text-[12px] text-white"
              style={{ fontWeight: 700 }}
            >
              -{pkg.discountPercent}%
            </span>
          </div>
        )}
      </div>

      <div className="relative h-[160px] sm:h-[180px] bg-linear-to-br from-primary/5 to-[#3B82F6]/5 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1756397481872-ed981ef72a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGRpbmluZ3xlbnwxfHx8fDE3NjIwMTAzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-4 md:p-5 flex flex-col flex-1">
        <h3
          className="text-base md:text-[18px] text-[#111827] mb-3 line-clamp-2 leading-snug"
          style={{ fontWeight: 600 }}
        >
          {pkg.name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
          {pkg.amenities.slice(0, 6).map((amenity, idx) => {
            const Icon = amenityIcons[amenity];
            return Icon ? (
              <div
                key={idx}
                className="text-[#6B7280] hover:text-primary transition-colors"
                title={amenity}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            ) : null;
          })}
        </div>

        <div className="mb-3 md:mb-4">
          <h4
            className="text-xs md:text-[13px] text-[#111827] mb-2"
            style={{ fontWeight: 600 }}
          >
            Included Services
          </h4>
          <div className="space-y-1.5">
            {pkg.includedServices.slice(0, 3).map((service, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                <span className="text-xs md:text-[13px] text-[#6B7280] line-clamp-1 leading-tight">
                  {service}
                </span>
              </div>
            ))}
            {pkg.includedServices.length > 3 && (
              <Button
                className="text-xs md:text-[12px] text-primary mt-1 hover:underline hover:bg-transparent p-0 h-auto"
                variant={"ghost"}
                style={{ fontWeight: 600 }}
              >
                + {pkg.includedServices.length - 3} more
              </Button>
            )}
          </div>
        </div>

        <div className="border-t border-[#E5E7EB] my-4" />

        <div className="mb-3 md:mb-4">
          <p className="text-xs md:text-[12px] text-[#6B7280] mb-1.5">
            Starting from
          </p>
          <div className="flex items-baseline flex-wrap gap-2">
            {pkg.originalPrice && pkg.discountPercent ? (
              <>
                <span className="text-sm md:text-base text-[#6B7280] line-through decoration-[#EF4444] decoration-2">
                  {pkg.originalPrice.toLocaleString()} AZN
                </span>
                <div className="bg-[#FEF3C7] px-1.5 md:px-2 py-0.5 md:py-1 rounded-md">
                  <span
                    className="text-[10px] md:text-[11px] text-[#F59E0B]"
                    style={{ fontWeight: 700 }}
                  >
                    Save AZN
                  </span>
                </div>
              </>
            ) : null}
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span
              className={cn(
                "text-lg md:text-[22px]",
                pkg.originalPrice ? "text-[#10B981]" : "text-[#111827]",
              )}
              style={{ fontWeight: 700 }}
            >
              {pkg.finalPrice.toLocaleString()} AZN
            </span>
            <span className="text-xs md:text-sm text-[#6B7280]">
              {pkg.priceUnit}
            </span>
          </div>
        </div>

        <div className="mt-auto w-full min-h-10 md:min-h-11 py-2 md:py-2.5 px-3 md:px-4 border-2 border-primary text-primary rounded-lg text-xs md:text-[14px] hover:shadow-md transition-all flex items-center justify-center group-hover:hidden group-hover:text-white font-semibold">
          View Details
        </div>
      </div>

      <div className="absolute bottom-0 w-full left-0 right-0 bg-linear-to-t from-primary via-primary/95 to-transparent text-white p-4 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex">
        <div className="space-y-1.5 md:space-y-2 w-full">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm">Duration: {pkg.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm">
              Min Guests: {pkg.minGuests}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm">{pkg.advanceBooking}</span>
          </div>
        </div>
        <div className="h-full flex items-center w-full justify-center">
          <MoveRight
            className="w-6 h-6 md:w-8 md:h-8 ml-12 md:ml-20 mt-3 md:mt-5 text-white animate-[slideX_1.6s_ease-in-out_infinite]"
            aria-hidden
          />
          <style>{`
                        @keyframes slideX {
                            0% { transform: translateX(-6px); }
                            50% { transform: translateX(6px); }
                            100% { transform: translateX(-6px); }
                        }
                    `}</style>
        </div>
      </div>
    </button>
  );
};
