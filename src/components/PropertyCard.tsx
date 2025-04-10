"use client";

import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaFlag,
  FaDumbbell,
} from "react-icons/fa";

interface PropertyCardProps {
  imageUrl: string;
  title: string;
  address: string;
  price: string;
  size: string;
  hasStreetLights?: boolean;
  hasGym?: boolean;
  onViewTour?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  title,
  address,
  price,
  size,
  hasStreetLights = true,
  hasGym = true,
  onViewTour,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 bg-transparent rounded-3xl p-4 w-full max-w-3xl">
      <div className="relative w-full md:w-1/2 h-48 md:h-50 rounded-2xl overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col space-y-2 justify-between w-full md:w-1/2">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="flex items-center text-xs text-gray-600 mb-2">
            <FaMapMarkerAlt className="mr-1 text-gray-500" /> {address}
          </p>
          <p className="text-sm font-bold text-gray-800 mb-3">{price}</p>

          <div className="flex items-center gap-4 text-xs text-gray-700">
            <span className="flex items-center gap-1">
              <FaRulerCombined /> {size}
            </span>
            {hasStreetLights && (
              <span className="flex items-center gap-1">
                <FaFlag /> Str Lights
              </span>
            )}
            {hasGym && (
              <span className="flex items-center gap-1">
                <FaDumbbell /> Gym
              </span>
            )}
          </div>
        </div>

        <button
          onClick={onViewTour}
          className="mt-4 bg-lime-600 text-white px-6 py-2 rounded-full hover:bg-lime-700 transition"
        >
          View Tour
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
