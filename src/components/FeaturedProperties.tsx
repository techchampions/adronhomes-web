import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineLocationMarker,
  HiOutlineLightBulb,
  HiOutlineHome,
} from "react-icons/hi";
import { GiGymBag } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

interface PropertyProps {
  image: string;
  title: string;
  location: string;
  squareFeet: string;
  hasLights: boolean;
  hasGym: boolean;
  isLand: boolean;
}

const PropertyCard = ({
  image,
  title,
  location,
  squareFeet,
  hasLights,
  hasGym,
  isLand,
}: PropertyProps) => {
  return (
    <div className="w-full max-w-[472px] space-y-6 mx-auto">
      <div className="relative w-full h-[300px] sm:h-[400px] rounded-[30px] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="w-full bg-white rounded-[30px] shadow-md p-6 sm:p-8 space-y-5 flex flex-col h-auto sm:h-[280px]">
        <div className="flex-grow space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center text-gray-500 text-sm">
            <HiOutlineLocationMarker className="mr-2 flex-shrink-0" />
            <p className="truncate">{location}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="mr-1">{squareFeet} Sq M</span>
            </div>

            {hasLights && (
              <div className="flex items-center">
                <HiOutlineLightBulb className="mr-2" />
                <span>24h Lights</span>
              </div>
            )}

            {hasGym && (
              <div className="flex items-center">
                <GiGymBag className="mr-2" />
                <span>Gym</span>
              </div>
            )}

            {isLand && (
              <div className="flex items-center">
                <HiOutlineHome className="mr-2" />
                <span>Land</span>
              </div>
            )}
          </div>
          <Link
            href="#"
            className="inline-block mt-4 px-6 py-2 bg-[#79B833] text-white rounded-full text-sm hover:bg-green-600 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

interface Property extends PropertyProps {
  id: number;
}

const FeaturedProperties = () => {
  const properties: Property[] = [
    {
      id: 1,
      image: "/images/tresure-park-3.png",
      title: "Treasure Park and Gardens phase 3",
      location: "Shimawa Ogun State, Nigeria",
      squareFeet: "648",
      hasLights: true,
      hasGym: true,
      isLand: true,
    },
    {
      id: 2,
      image: "/images/treasure-park-homes.png",
      title: "Treasure Park and Gardens",
      location: "Shimawa Ogun State, Nigeria",
      squareFeet: "648",
      hasLights: true,
      hasGym: true,
      isLand: true,
    },
    {
      id: 3,
      image: "/images/glass-house.png",
      title: "Glass House Estate",
      location: "Shimawa Ogun State, Nigeria",
      squareFeet: "648",
      hasLights: true,
      hasGym: true,
      isLand: true,
    },
    {
      id: 4,
      image: "/images/rehobot-park.png",
      title: "Rehoboth Park Gardens",
      location: "Ibeju, Ibeju Lekki, Nigeria",
      squareFeet: "648",
      hasLights: true,
      hasGym: true,
      isLand: true,
    },
    {
      id: 5,
      image: "/images/treasure-park-city-of-david.png",
      title: "Treasure Park and Gardens Phase 2 Extension",
      location: "Shimawa Ogun State, Nigeria",
      squareFeet: "648",
      hasLights: true,
      hasGym: true,
      isLand: true,
    },
    {
      id: 6,
      image: "/images/tressure-park-phase2.png",
      title: "Treasure Park and Gardens Phase 2",
      location: "Shimawa Ogun State, Nigeria",
      squareFeet: "648",
      hasLights: true,
      hasGym: true,
      isLand: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-8">
        <div className="mb-12 ml-4 sm:ml-50">
          <div className="flex items-center text-sm text-gray-500 mb-3 space-x-1">
            <Link
              href="/"
              className="flex items-center hover:text-gray-700 space-x-1"
            >
              <FaHome className="text-base" />
              <span>Hand picked </span>
            </Link>
            <span>Specifically for You</span>
          </div>

          <h2 className="text-4xl font-serif font-medium text-[#272727]">
            Discover Our <br />
            Featured Properties
          </h2>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              squareFeet={property.squareFeet}
              hasLights={property.hasLights}
              hasGym={property.hasGym}
              isLand={property.isLand}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
