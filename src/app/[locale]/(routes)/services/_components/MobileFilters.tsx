"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MobileFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  maxPrice: string;
  setMaxPrice: (value: string) => void;
  minCapacity: string;
  setMinCapacity: (value: string) => void;
  maxCapacity: string;
  setMaxCapacity: (value: string) => void;
  selectedAmenities: string[];
  allAmenities: string[];
  toggleAmenity: (amenity: string) => void;
  clearFilters: () => void;
  activeFilterCount: number;
}

export const MobileFilters = ({
  isOpen,
  onClose,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minCapacity,
  setMinCapacity,
  maxCapacity,
  setMaxCapacity,
  selectedAmenities,
  allAmenities,
  toggleAmenity,
  clearFilters,
  activeFilterCount,
}: MobileFiltersProps) => {
  if (!isOpen) return null;

  const handleApplyFilters = () => {
    onClose();
  };

  const handleClearFilters = () => {
    clearFilters();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <Button className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
          <h2 className="text-lg font-semibold text-[#111827]">
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </h2>
          <Button
            onClick={onClose}
            className="p-2 hover:bg-[#F3F4F6] rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </Button>
        </div>

        <div className="p-4 space-y-6 overflow-y-auto max-h-[calc(80vh-120px)]">
          <div>
            <h3 className="font-semibold text-[#111827] mb-3">
              Price Range (AZN)
            </h3>
            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="flex-1 h-12 px-3 border border-[#E5E7EB] rounded-lg text-base focus:border-[#6366F1] focus:outline-none"
              />
              <span className="text-[#6B7280]">–</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="flex-1 h-12 px-3 border border-[#E5E7EB] rounded-lg text-base focus:border-[#6366F1] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#111827] mb-3">
              Guest Capacity
            </h3>
            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="Min"
                value={minCapacity}
                onChange={(e) => setMinCapacity(e.target.value)}
                className="flex-1 h-12 px-3 border border-[#E5E7EB] rounded-lg text-base focus:border-[#6366F1] focus:outline-none"
              />
              <span className="text-[#6B7280]">–</span>
              <input
                type="number"
                placeholder="Max"
                value={maxCapacity}
                onChange={(e) => setMaxCapacity(e.target.value)}
                className="flex-1 h-12 px-3 border border-[#E5E7EB] rounded-lg text-base focus:border-[#6366F1] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#111827] mb-3">Amenities</h3>
            <div className="space-y-3">
              {allAmenities.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center gap-3 p-3 hover:bg-[#F9FAFB] rounded-lg cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="w-5 h-5 border-2 border-[#E5E7EB] rounded accent-[#6366F1]"
                  />
                  <span className="text-base text-[#111827]">
                    {amenity} Available
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[#E5E7EB] bg-white">
          <div className="flex gap-3">
            <Button
              onClick={handleClearFilters}
              className="flex-1 h-12 border border-[#E5E7EB] text-[#6B7280] rounded-lg font-semibold hover:bg-[#F9FAFB] transition-colors"
            >
              Clear All
            </Button>
            <Button
              onClick={handleApplyFilters}
              className="flex-1 h-12 bg-[#6366F1] text-white rounded-lg font-semibold hover:bg-[#5B5BD6] transition-colors"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
