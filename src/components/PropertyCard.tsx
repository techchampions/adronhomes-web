"use client";

import Image from "next/image";
import { FaMapMarkerAlt, FaDumbbell, FaRegHeart } from "react-icons/fa";
import { GiStreetLight } from "react-icons/gi";
import { TfiRulerAlt2 } from "react-icons/tfi";
import Button from "./Button";

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
    <div className="flex flex-col md:flex-row items-center gap-10 bg-transparent rounded-3xl p-4 w-full md:w-[500px] max-w-3xl">
      <div className="relative w-full md:w-1/2 h-48 md:h-50 rounded-2xl overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col space-y-2 justify-between w-full md:w-1/2">
        <div className="space-y-4">
          <div className="text-sm font-semibold text-gray-800 mb-2">
            {title}
          </div>
          <p className="flex items-center text-xs text-gray-600 mb-2">
            <FaMapMarkerAlt className="mr-1 text-gray-500" /> {address}
          </p>
          <p className="text-sm font-bold text-gray-800 mb-3 flex items-center justify-between w-full md:w-[180px]">
            {price}
            <FaRegHeart className="ml-1 text-gray-800 " />
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <TfiRulerAlt2 /> {size}
            </span>
            {hasStreetLights && (
              <span className="flex items-center gap-1">
                <GiStreetLight /> Str Lights
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
          className="mt-4 bg-adron-green text-sm text-white px-6 py-2 w-fit rounded-full hover:bg-lime-700 transition"
        >
          View Tour
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
