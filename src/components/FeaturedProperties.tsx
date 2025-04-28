import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineLocationMarker,
  HiOutlineLightBulb,
  HiOutlineHome,
} from "react-icons/hi";
import { GiGymBag, GiStreetLight } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdOutlinePower, MdPower } from "react-icons/md";
import HomePropertyList from "./HomePagePropertyList";

interface PropertyProps {
  image: string;
  title: string;
  price: number;
  location: string;
  squareFeet: string;
  features: string[];
}

// const PropertyCard = ({
//   image,
//   title,
//   price,
//   location,
//   squareFeet,
//   hasLights,
//   hasGym,
//   isLand,
// }: PropertyProps) => {
//   // Format the price using Intl.NumberFormat
//   const formattedPrice = new Intl.NumberFormat("en-NG", {
//     style: "currency",
//     currency: "NGN",
//   }).format(price);
const PropertyCard = ({
  image,
  title,
  price,
  location,
  squareFeet,
  features,
}: PropertyProps) => {
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price);

  // const hasLights = features.includes("Street Lighting") || features.includes("Good Road Network");
  // const hasGym = features.some((f) => f.toLowerCase().includes("gym"));
  // const hasWater = features.some((f) => f.toLowerCase().includes("water"));
  // const hasPool = features.some((f) => f.toLowerCase().includes("pool"));
  // const isLand = true; // assume it's land unless you have a field saying otherwise

  return (
    <div className="w-full max-w-[472px] mx-auto rounded-[30px] overflow-hidden">
      <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="w-full bg-white p-6 space-y-5 flex flex-col h-auto">
        <div className="flex-grow space-y-4">
          <h4 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {title}
          </h4>
          <div className="flex items-center text-gray-500 text-sm">
            <HiOutlineLocationMarker className="mr-2 flex-shrink-0" />
            <p className="truncate">{location}</p>
          </div>
          <div className="flex items-center justify-between gap-4 text-[10px] text-gray-600">
            <div className="flex items-center gap-1">
              <Image src="/ruler.svg" width={14} height={14} alt="ruler" />

              <span className="mr-1">{squareFeet}</span>
            </div>

            {/* {!hasLights && (
              <div className="flex items-center">
                <GiStreetLight className="h-4 w-4" />
                <span>Str Lights</span>
              </div>
            )}

            {hasGym && (
              <div className="flex gap-1 items-center">
                <Image
                  src="/dumbbell.svg"
                  width={16}
                  height={16}
                  alt="dumbbell"
                />
                <span>Gym</span>
              </div>
            )}

            {isLand && (
              <div className="flex items-center">
                <span>Land</span>
              </div>
            )} */}
            <div className="flex items-center">
              <GiStreetLight className="h-4 w-4" />
              <span>Str Lights</span>
            </div>
            <div className="flex items-center">
              <MdOutlinePower className="h-4 w-4" />
              <span>Electricity</span>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="/dumbbell.svg"
                width={16}
                height={16}
                alt="dumbbell"
              />
              <span>Gym</span>
            </div>
          </div>
          <div className="flex justify-between w-full mt-6 items-center">
            <Link
              href="#"
              className="inline-block px-6 py-2 bg-[#79B833] text-white rounded-full text-sm hover:bg-green-600 transition-colors"
            >
              View Details
            </Link>
            <div className="text 4xl font-bold">{formattedPrice} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Property extends PropertyProps {
  id: number;
}

const FeaturedProperties = ({ data }) => {
  const properties = data.handpackProperty;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1240px] mx-auto px-[1rem] md:px-0">
        <div className="text-center flex flex-col justify-center">
          <div className="flex items-center text-sm w-fit mx-auto px-4 py-2 text-black bg-white rounded-full mb-3 space-x-1">
            <FaHome className="text-base" />
            {/* <span>Handpick Specifically for You</span> */}
            <span>{data.handpackText[0].header}</span>
          </div>

          <h2 className="text-3xl md:text-6xl -mt-3 md:-mt-4 font-bold mb-8 md:mb-10">
            {/* Discover Our <br />
            Featured Properties */}
            {data.handpackText[0].description}
          </h2>
        </div>

        {/* Property Grid */}
        <HomePropertyList properties={properties} />
        <div className="flex w-full justify-center mt-16">
          <Link
            href="/properties"
            className="inline-block px-6 py-2 bg-adron-green text-white rounded-full text-sm transition-colors"
          >
            View All Properties
          </Link>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-18 justify-center">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.display_image}
              title={property.name}
              price={property.price}
              location={address}
              squareFeet={property.size}
              hasLights={property.hasLights}
              hasGym={property.hasGym}
              isLand={property.isLand}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProperties;
