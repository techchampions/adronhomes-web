import Image from "next/image";
import { useRouter } from "next/navigation";
import { GiStreetLight } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlinePower } from "react-icons/md";
import Button from "./Button";
import { Property } from "@/data/types/homepageTypes";
import { formatPrice } from "@/utils/formater";

const HomePropertyCard = ({
  property,
}: // id,
// image,
// title,
// price,
// state,
// lga,
// country,
// streetAddress,
// squareFeet,
// features,
{
  property: Property;
}) => {
  let address = "All Adron locations.";
  if (property.street_address && property.state && property.country) {
    address = `${property.street_address}, ${property.state} ${property.country}`;
  }
  const isRented =
    property.purpose?.includes("rent") ||
    property.purpose?.includes("Rent") ||
    false;

  // const hasLights = features.includes("Street Lighting") || features.includes("Good Road Network");
  // const hasGym = features.some((f) => f.toLowerCase().includes("gym"));
  // const hasWater = features.some((f) => f.toLowerCase().includes("water"));
  // const hasPool = features.some((f) => f.toLowerCase().includes("pool"));
  // const isLand = true; // assume it's land unless you have a field saying otherwise
  const router = useRouter();
  const handleViewProperty = () => {
    router.push(`/properties/${property.slug}`);
  };

  return (
    <div className="w-full max-w-[472px] mx-auto rounded-[30px] overflow-hidden">
      <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
        <Image
          src={property.display_image}
          alt={property.name}
          fill
          className="object-cover"
        />
        {property.is_discount && property.discount_percentage && (
          <div className="absolute top-4 right-4 bg-red-500 rounded-lg text-xs text-white px-4 py-1">
            {property.discount_percentage}% off
          </div>
        )}
      </div>

      <div className="w-full bg-white p-6 space-y-5 flex flex-col h-auto">
        <div className="flex-grow space-y-4">
          <h4
            onClick={handleViewProperty}
            className="text-lg font-semibold text-gray-800 hover:text-gray-500 line-clamp-1 cursor-pointer hover:underline underline-offset-3"
          >
            {property.name}
          </h4>
          <div className="flex items-center text-gray-500 text-sm">
            <HiOutlineLocationMarker className="mr-2 flex-shrink-0" />
            <p className="truncate">{address}</p>
          </div>
          <div className="flex items-center justify-between gap-4 text-[10px] text-gray-600">
            <div className="flex items-center gap-1">
              <Image src="/ruler.svg" width={14} height={14} alt="ruler" />

              <span className="mr-1">{property.size} SqM</span>
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
          <div className="flex justify-between gap-4 w-full mt-6 items-center">
            <Button
              onClick={handleViewProperty}
              label="View Property"
              className="bg-adron-green text-xs px-4 !w-fit"
            />
            {/* <Link
              href="#"
              className="inline-block px-6 py-2 bg-[#79B833] text-white rounded-full text-sm hover:bg-green-600 transition-colors"
            >
              View Details
            </Link> */}
            <div className="text 4xl font-bold truncate max-w-[150px]">
              {isRented ? "For Rent" : formatPrice(property.price)}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePropertyCard;
