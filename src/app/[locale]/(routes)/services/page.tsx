"use client";

import { useState, useMemo } from "react";
import {
  Building,
  Globe,
  Users,
  Music,
  Search,
  ChevronDown,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PackageCard, MobileFilters } from "./_components";
import Navbar from "@/components/Navbar";

type PackageType = "venue" | "tourism" | "teambuilding" | "entertainment";

interface Package {
  id: string;
  name: string;
  category: string;
  packageType: PackageType;
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

const packageTypes = [
  {
    id: "venue" as PackageType,
    label: "Venue Packages",
    description: "Restaurants, Hotels, Palaces",
    icon: Building,
  },
  {
    id: "tourism" as PackageType,
    label: "Tourism Packages",
    description: "Local & Global Tours",
    icon: Globe,
  },
  {
    id: "teambuilding" as PackageType,
    label: "Team Building",
    description: "Games & Activities",
    icon: Users,
  },
  {
    id: "entertainment" as PackageType,
    label: "Entertainment",
    description: "Music & Studios",
    icon: Music,
  },
];

const packagesData: Package[] = [
  {
    id: "1",
    name: "Corporate Lunch Package",
    category: "Restaurant",
    packageType: "venue",
    originalPrice: 2000,
    discountPercent: 20,
    finalPrice: 1600,
    priceUnit: "/package",
    amenities: ["WiFi", "Parking", "Indoor", "Catering"],
    includedServices: [
      "Venue rental (4 hours)",
      "3-course business lunch",
      "Tables & chairs setup",
      "Basic sound system",
      "Event coordinator",
      "Cleanup included",
    ],
    duration: "4 hours",
    minGuests: 20,
    advanceBooking: "Book 7 days ahead",
  },
  {
    id: "2",
    name: "Executive Dinner Package",
    category: "Restaurant",
    packageType: "venue",
    finalPrice: 3500,
    priceUnit: "/package",
    amenities: ["WiFi", "Parking", "Indoor", "Outdoor", "Catering", "Alcohol"],
    includedServices: [
      "Venue rental (6 hours)",
      "4-course premium dinner",
      "Bar service included",
      "Professional waitstaff",
      "Premium decorations",
      "Valet parking",
    ],
    duration: "6 hours",
    minGuests: 30,
    advanceBooking: "Book 10 days ahead",
  },
  {
    id: "3",
    name: "Team Celebration Package",
    category: "Restaurant",
    packageType: "venue",
    originalPrice: 2500,
    discountPercent: 15,
    finalPrice: 2125,
    priceUnit: "/package",
    amenities: ["WiFi", "Indoor", "Catering", "Alcohol"],
    includedServices: [
      "Venue rental (5 hours)",
      "Buffet-style dinner",
      "2 drink tickets per person",
      "DJ service (3 hours)",
      "Projector & screen",
    ],
    duration: "5 hours",
    minGuests: 25,
    advanceBooking: "Book 5 days ahead",
  },
  {
    id: "4",
    name: "Business Breakfast Package",
    category: "Restaurant",
    packageType: "venue",
    finalPrice: 1200,
    priceUnit: "/package",
    amenities: ["WiFi", "Indoor", "Catering"],
    includedServices: [
      "Venue rental (3 hours)",
      "Continental breakfast",
      "Coffee & tea service",
      "Projector for presentations",
    ],
    duration: "3 hours",
    minGuests: 15,
    advanceBooking: "Book 3 days ahead",
  },
  {
    id: "5",
    name: "Networking Mixer Package",
    category: "Restaurant",
    packageType: "venue",
    finalPrice: 2800,
    priceUnit: "/package",
    amenities: ["WiFi", "Parking", "Indoor", "Outdoor", "Alcohol"],
    includedServices: [
      "Venue rental (4 hours)",
      "Cocktail hour setup",
      "Hors d'oeuvres",
      "Bar service",
      "Lounge seating",
    ],
    duration: "4 hours",
    minGuests: 40,
    advanceBooking: "Book 14 days ahead",
  },
  {
    id: "6",
    name: "Quick Meeting Package",
    category: "Restaurant",
    packageType: "venue",
    finalPrice: 800,
    priceUnit: "/package",
    amenities: ["WiFi", "Indoor"],
    includedServices: [
      "Private room (2 hours)",
      "Coffee & snacks",
      "Whiteboard",
    ],
    duration: "2 hours",
    minGuests: 10,
    advanceBooking: "Book 2 days ahead",
  },
  {
    id: "7",
    name: "Conference Day Package",
    category: "Hotel",
    packageType: "venue",
    originalPrice: 5000,
    discountPercent: 25,
    finalPrice: 3750,
    priceUnit: "/package",
    amenities: ["WiFi", "Parking", "Indoor", "Catering"],
    includedServices: [
      "Conference room (8 hours)",
      "2 coffee breaks",
      "Business lunch",
      "AV equipment",
      "Projector & screen",
      "Breakout rooms",
      "Dedicated support staff",
    ],
    duration: "8 hours",
    minGuests: 50,
    advanceBooking: "Book 14 days ahead",
  },
  {
    id: "8",
    name: "Executive Retreat Package",
    category: "Hotel",
    packageType: "venue",
    finalPrice: 8000,
    priceUnit: "/package",
    amenities: ["WiFi", "Parking", "Indoor", "Outdoor", "Catering"],
    includedServices: [
      "Full-day venue access",
      "3 meals included",
      "Spa access for attendees",
      "Team building activities",
      "Meeting rooms",
    ],
    duration: "10 hours",
    minGuests: 30,
    advanceBooking: "Book 21 days ahead",
  },
  {
    id: "9",
    name: "Product Launch Package",
    category: "Hotel",
    packageType: "venue",
    originalPrice: 6500,
    discountPercent: 10,
    finalPrice: 5850,
    priceUnit: "/package",
    amenities: ["WiFi", "Parking", "Indoor", "Catering", "Alcohol"],
    includedServices: [
      "Ballroom rental (6 hours)",
      "Stage & lighting",
      "Premium AV setup",
      "Reception with catering",
      "Press area",
    ],
    duration: "6 hours",
    minGuests: 80,
    advanceBooking: "Book 30 days ahead",
  },
  {
    id: "10",
    name: "Training Workshop Package",
    category: "Hotel",
    packageType: "venue",
    finalPrice: 3200,
    priceUnit: "/package",
    amenities: ["WiFi", "Parking", "Indoor", "Catering"],
    includedServices: [
      "Training room (6 hours)",
      "Lunch & 2 breaks",
      "Projector & whiteboard",
      "Training materials setup",
    ],
    duration: "6 hours",
    minGuests: 25,
    advanceBooking: "Book 10 days ahead",
  },
  {
    id: "11",
    name: "Grand Gala Package",
    category: "Palace",
    packageType: "venue",
    originalPrice: 10000,
    discountPercent: 20,
    finalPrice: 8000,
    priceUnit: "/package",
    amenities: ["WiFi", "Parking", "Indoor", "Outdoor", "Catering", "Alcohol"],
    includedServices: [
      "Full palace access (8 hours)",
      "5-course gourmet dinner",
      "Live orchestra (4 hours)",
      "Premium decorations",
      "Valet parking",
      "Professional photography",
      "Red carpet entrance",
    ],
    duration: "8 hours",
    minGuests: 100,
    advanceBooking: "Book 45 days ahead",
  },
  {
    id: "12",
    name: "Corporate Anniversary Package",
    category: "Palace",
    packageType: "venue",
    finalPrice: 7500,
    priceUnit: "/package",
    amenities: ["WiFi", "Parking", "Indoor", "Catering", "Alcohol"],
    includedServices: [
      "Ballroom rental (6 hours)",
      "Elegant dinner setup",
      "Live music ensemble",
      "Professional staff",
    ],
    duration: "6 hours",
    minGuests: 80,
    advanceBooking: "Book 30 days ahead",
  },
  {
    id: "13",
    name: "VIP Client Event Package",
    category: "Palace",
    packageType: "venue",
    originalPrice: 12000,
    discountPercent: 15,
    finalPrice: 10200,
    priceUnit: "/package",
    amenities: ["WiFi", "Parking", "Indoor", "Outdoor", "Catering", "Alcohol"],
    includedServices: [
      "Exclusive palace access",
      "Custom menu design",
      "Celebrity chef",
      "Wine sommelier",
      "Entertainment coordinator",
    ],
    duration: "8 hours",
    minGuests: 50,
    advanceBooking: "Book 60 days ahead",
  },
  {
    id: "14",
    name: "Awards Ceremony Package",
    category: "Palace",
    packageType: "venue",
    finalPrice: 9000,
    priceUnit: "/package",
    amenities: ["WiFi", "Parking", "Indoor", "Catering"],
    includedServices: [
      "Theater-style seating",
      "Stage & lighting",
      "Trophy display area",
      "Reception catering",
      "MC services",
    ],
    duration: "5 hours",
    minGuests: 120,
    advanceBooking: "Book 30 days ahead",
  },
  {
    id: "15",
    name: "Baku City Explorer",
    category: "Local Tour",
    packageType: "tourism",
    originalPrice: 1200,
    discountPercent: 15,
    finalPrice: 1020,
    priceUnit: "/package",
    amenities: ["WiFi", "Outdoor"],
    includedServices: [
      "Private bus (4 hours)",
      "Professional guide",
      "Old City walking tour",
      "Highland Park visit",
      "Lunch at local restaurant",
    ],
    duration: "4 hours",
    minGuests: 15,
    advanceBooking: "Book 5 days ahead",
  },
  {
    id: "16",
    name: "Gobustan & Mud Volcanoes",
    category: "Local Tour",
    packageType: "tourism",
    finalPrice: 1800,
    priceUnit: "/package",
    amenities: ["Outdoor"],
    includedServices: [
      "Transportation (6 hours)",
      "Gobustan entrance fees",
      "Expert guide",
      "Picnic lunch",
    ],
    duration: "6 hours",
    minGuests: 10,
    advanceBooking: "Book 7 days ahead",
  },
  {
    id: "17",
    name: "Wine Tasting Tour",
    category: "Local Tour",
    packageType: "tourism",
    finalPrice: 2200,
    priceUnit: "/package",
    amenities: ["Outdoor", "Alcohol"],
    includedServices: [
      "Vineyard tour",
      "Wine tasting session",
      "Gourmet lunch",
      "Transportation included",
    ],
    duration: "5 hours",
    minGuests: 12,
    advanceBooking: "Book 10 days ahead",
  },
  {
    id: "18",
    name: "Outdoor Adventure Challenge",
    category: "Outdoor Activity",
    packageType: "teambuilding",
    originalPrice: 2500,
    discountPercent: 10,
    finalPrice: 2250,
    priceUnit: "/package",
    amenities: ["Outdoor"],
    includedServices: [
      "Obstacle course activities",
      "Professional facilitator",
      "Safety equipment",
      "Team building exercises",
      "Lunch provided",
    ],
    duration: "6 hours",
    minGuests: 20,
    advanceBooking: "Book 14 days ahead",
  },
  {
    id: "19",
    name: "Indoor Games Tournament",
    category: "Indoor Activity",
    packageType: "teambuilding",
    finalPrice: 1500,
    priceUnit: "/package",
    amenities: ["WiFi", "Indoor"],
    includedServices: [
      "Game room rental",
      "Multiple game stations",
      "Tournament coordination",
      "Prizes & awards",
    ],
    duration: "4 hours",
    minGuests: 15,
    advanceBooking: "Book 7 days ahead",
  },
  {
    id: "20",
    name: "Corporate Challenge Series",
    category: "Mixed Activity",
    packageType: "teambuilding",
    originalPrice: 3000,
    discountPercent: 15,
    finalPrice: 2550,
    priceUnit: "/package",
    amenities: ["Indoor", "Outdoor", "Catering"],
    includedServices: [
      "Multi-activity challenges",
      "Team scoring system",
      "Professional coaching",
      "Lunch & refreshments",
      "Award ceremony",
    ],
    duration: "8 hours",
    minGuests: 30,
    advanceBooking: "Book 21 days ahead",
  },
  {
    id: "21",
    name: "Problem Solving Workshop",
    category: "Indoor Activity",
    packageType: "teambuilding",
    finalPrice: 1800,
    priceUnit: "/package",
    amenities: ["WiFi", "Indoor", "Catering"],
    includedServices: [
      "Escape room challenges",
      "Puzzle solving activities",
      "Facilitator guidance",
      "Coffee & snacks",
    ],
    duration: "3 hours",
    minGuests: 12,
    advanceBooking: "Book 5 days ahead",
  },
  {
    id: "22",
    name: "Live Band Performance",
    category: "Live Music",
    packageType: "entertainment",
    finalPrice: 2500,
    priceUnit: "/package",
    amenities: ["Indoor", "Outdoor"],
    includedServices: [
      "Professional band (3 hours)",
      "Sound system setup",
      "Lighting effects",
      "Sound technician",
    ],
    duration: "3 hours",
    minGuests: 50,
    advanceBooking: "Book 30 days ahead",
  },
  {
    id: "23",
    name: "DJ & Dance Party",
    category: "DJ Service",
    packageType: "entertainment",
    originalPrice: 1500,
    discountPercent: 20,
    finalPrice: 1200,
    priceUnit: "/package",
    amenities: ["Indoor"],
    includedServices: [
      "Professional DJ (4 hours)",
      "Premium sound system",
      "LED lighting",
      "Music curation",
    ],
    duration: "4 hours",
    minGuests: 30,
    advanceBooking: "Book 14 days ahead",
  },
  {
    id: "24",
    name: "Recording Studio Session",
    category: "Studio Service",
    packageType: "entertainment",
    finalPrice: 1000,
    priceUnit: "/package",
    amenities: ["WiFi", "Indoor"],
    includedServices: [
      "Studio rental (4 hours)",
      "Sound engineer",
      "Recording equipment",
      "Basic editing included",
    ],
    duration: "4 hours",
    minGuests: 5,
    advanceBooking: "Book 7 days ahead",
  },
];

const categoryOptions: Record<PackageType, string[]> = {
  venue: ["All Venues", "Restaurant", "Hotel", "Palace"],
  tourism: ["All Tours", "Local Tour", "Global Tour"],
  teambuilding: [
    "All Activities",
    "Outdoor Activity",
    "Indoor Activity",
    "Mixed Activity",
  ],
  entertainment: [
    "All Entertainment",
    "Live Music",
    "DJ Service",
    "Studio Service",
  ],
};

export default function ServicesPage() {
  const [activePackageType, setActivePackageType] =
    useState<PackageType>("venue");
  const [selectedCategory, setSelectedCategory] = useState("All Venues");
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minCapacity, setMinCapacity] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [showAmenitiesDropdown, setShowAmenitiesDropdown] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");

  const allAmenities = [
    "Parking",
    "WiFi",
    "Indoor",
    "Outdoor",
    "Catering",
    "Alcohol",
  ];

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    );
  };

  const handlePackageTypeChange = (type: PackageType) => {
    setActivePackageType(type);
    setSelectedCategory(categoryOptions[type][0]);
  };

  const filteredPackages = useMemo(() => {
    return packagesData.filter((pkg) => {
      if (pkg.packageType !== activePackageType) return false;

      if (
        !selectedCategory.startsWith("All") &&
        pkg.category !== selectedCategory
      )
        return false;

      if (
        searchQuery &&
        !pkg.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;

      if (minPrice && pkg.finalPrice < parseInt(minPrice)) return false;
      if (maxPrice && pkg.finalPrice > parseInt(maxPrice)) return false;

      if (minCapacity && pkg.minGuests < parseInt(minCapacity)) return false;
      if (maxCapacity && pkg.minGuests > parseInt(maxCapacity)) return false;

      if (
        selectedAmenities.length > 0 &&
        !selectedAmenities.every((amenity) => pkg.amenities.includes(amenity))
      )
        return false;

      return true;
    });
  }, [
    activePackageType,
    selectedCategory,
    searchQuery,
    minPrice,
    maxPrice,
    minCapacity,
    maxCapacity,
    selectedAmenities,
  ]);

  const sortedPackages = useMemo(() => {
    const packages = [...filteredPackages];
    switch (sortBy) {
      case "price-low":
        return packages.sort((a, b) => a.finalPrice - b.finalPrice);
      case "price-high":
        return packages.sort((a, b) => b.finalPrice - a.finalPrice);
      case "newest":
        return packages.reverse();
      case "popular":
        return packages;
      default:
        return packages;
    }
  }, [filteredPackages, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setMinPrice("");
    setMaxPrice("");
    setMinCapacity("");
    setMaxCapacity("");
    setSelectedAmenities([]);
  };

  const activeFilterCount = [
    searchQuery,
    minPrice,
    maxPrice,
    minCapacity,
    maxCapacity,
    selectedAmenities.length > 0,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative min-h-[200px] md:min-h-[220px] flex items-center overflow-hidden py-6 md:py-8"
        style={{
          background: "linear-gradient(90deg, #484174 0%, #6E679E 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-[44px] text-white font-semibold">
              Service Packages
            </h1>
            <p className="text-sm md:text-base text-white/85 font-normal mt-1 mb-4 md:mb-6">
              Browse curated packages for your corporate events
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-[900px] mx-auto">
            {packageTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handlePackageTypeChange(type.id)}
                className={cn(
                  "shrink-0 rounded-xl md:rounded-2xl px-3 md:px-5 py-2 mb-2 hover:cursor-pointer flex flex-col items-center justify-center gap-1 border-2 transition-all duration-300 min-w-[80px] md:min-w-[120px]",
                  activePackageType === type.id
                    ? "bg-white border-[#6E679E] shadow-lg hover:cursor-pointer"
                    : "bg-transparent border-[#6E679E] hover:bg-[#6E679E]/10",
                )}
                style={{ boxSizing: "border-box" }}
              >
                <type.icon
                  className={cn(
                    "w-5 h-5 md:w-6 md:h-6 mb-1",
                    activePackageType === type.id
                      ? "text-[#484174]"
                      : "text-white",
                  )}
                />
                <div
                  className={cn(
                    "font-bold text-xs md:text-sm",
                    activePackageType === type.id
                      ? "text-[#484174]"
                      : "text-white",
                  )}
                >
                  {type.label}
                </div>
                <div
                  className={cn(
                    "text-xs md:text-sm font-normal hidden sm:block",
                    activePackageType === type.id
                      ? "text-[#6E679E]"
                      : "text-white/80",
                  )}
                >
                  {type.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="border-b-2 border-primary/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5">
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <div className="shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-[200px] px-3 py-2.5 border border-primary/30 rounded-lg text-sm text-[#111827] bg-white focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20"
              >
                {categoryOptions[activePackageType].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="grow max-w-[280px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#6B7280]" />
                <input
                  type="text"
                  placeholder="Search packages by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <input
                type="number"
                placeholder="Min AZN"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-[110px] px-3 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:border-[#6366F1] focus:outline-none"
              />
              <span className="text-sm text-[#6B7280]">–</span>
              <input
                type="number"
                placeholder="Max AZN"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-[110px] px-3 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:border-[#6366F1] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <input
                type="number"
                placeholder="Min"
                value={minCapacity}
                onChange={(e) => setMinCapacity(e.target.value)}
                className="w-[90px] px-3 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:border-[#6366F1] focus:outline-none"
              />
              <span className="text-sm text-[#6B7280]">–</span>
              <input
                type="number"
                placeholder="Max"
                value={maxCapacity}
                onChange={(e) => setMaxCapacity(e.target.value)}
                className="w-[90px] px-3 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:border-[#6366F1] focus:outline-none"
              />
            </div>

            <div className="relative shrink-0">
              <button
                onClick={() => setShowAmenitiesDropdown(!showAmenitiesDropdown)}
                className="w-[180px] px-3 py-2.5 border border-[#E5E7EB] rounded-lg text-sm text-[#111827] bg-white flex items-center justify-between hover:border-[#6366F1] transition-colors"
              >
                <span>
                  {selectedAmenities.length > 0
                    ? `${selectedAmenities.length} selected`
                    : "Amenities"}
                </span>
                <ChevronDown className="w-4 h-4 text-[#6B7280]" />
              </button>

              {showAmenitiesDropdown && (
                <div className="absolute top-full mt-2 w-60 bg-white border border-[#E5E7EB] rounded-lg shadow-lg p-3 z-50">
                  <div className="space-y-2 max-h-80 overflow-y-auto">
                    {allAmenities.map((amenity) => (
                      <label
                        key={amenity}
                        className="flex items-center gap-2 p-2 hover:bg-[#F9FAFB] rounded cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedAmenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="w-[18px] h-[18px] border-[1.5px] border-[#E5E7EB] rounded accent-[#6366F1]"
                        />
                        <span className="text-sm text-[#111827]">
                          {amenity} Available
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#E5E7EB]">
                    <button
                      onClick={() => setSelectedAmenities([])}
                      className="text-sm text-[#6B7280] hover:text-[#6366F1]"
                    >
                      Clear
                    </button>
                    <button
                      onClick={() => setShowAmenitiesDropdown(false)}
                      className="text-sm text-[#6366F1] font-semibold"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={clearFilters}
              className="text-sm text-[#6B7280] hover:text-[#6366F1] underline ml-auto"
            >
              Clear
            </button>
          </div>

          <div className="lg:hidden space-y-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-11 md:h-12 px-3 border border-[#E5E7EB] rounded-lg text-sm md:text-base text-[#111827] bg-white focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20"
            >
              {categoryOptions[activePackageType].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 md:h-12 pl-9 md:pl-10 pr-3 border border-[#E5E7EB] rounded-lg text-sm md:text-base focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20"
              />
            </div>

            <button
              onClick={() => setShowMobileFilters(true)}
              className="w-full h-11 md:h-12 px-4 border border-[#E5E7EB] rounded-lg text-sm text-[#111827] bg-white flex items-center justify-between hover:border-[#6366F1] transition-colors"
            >
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5" />
                <span>
                  More Filters{" "}
                  {activeFilterCount > 0 && `(${activeFilterCount})`}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-[#6B7280]" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-sm md:text-base text-[#6B7280]">
              {sortedPackages.length} packages found
            </p>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label className="text-xs md:text-sm text-[#6B7280] whitespace-nowrap">
                Sort by:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 sm:w-[160px] md:w-[180px] px-3 py-2 border border-[#E5E7EB] rounded-lg text-xs md:text-sm focus:border-[#6366F1] focus:outline-none bg-white"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {sortedPackages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {sortedPackages.length === 0 && (
          <div className="text-center py-12 col-span-full">
            <p className="text-base md:text-lg text-[#6B7280] mb-4">
              No packages found matching your criteria
            </p>
            <button
              onClick={clearFilters}
              className="px-4 md:px-6 py-2 md:py-3 bg-[#6366F1] text-white text-sm md:text-base rounded-lg hover:bg-[#5B5BD6] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <MobileFilters
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        minCapacity={minCapacity}
        setMinCapacity={setMinCapacity}
        maxCapacity={maxCapacity}
        setMaxCapacity={setMaxCapacity}
        selectedAmenities={selectedAmenities}
        allAmenities={allAmenities}
        toggleAmenity={toggleAmenity}
        clearFilters={clearFilters}
        activeFilterCount={activeFilterCount}
      />
    </div>
  );
}
