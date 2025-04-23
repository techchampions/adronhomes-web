import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiStreetLight } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlinePower } from "react-icons/md";
import Button from "./Button";

const HomePropertyCard = ({
  id,
  image,
  title,
  price,
  state,
  lga,
  country,
  streetAddress,
  squareFeet,
  features,
}: PropertyProps) => {
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price);
  const address = `${streetAddress}, ${lga}, ${state} ${country}`;

  // const hasLights = features.includes("Street Lighting") || features.includes("Good Road Network");
  // const hasGym = features.some((f) => f.toLowerCase().includes("gym"));
  // const hasWater = features.some((f) => f.toLowerCase().includes("water"));
  // const hasPool = features.some((f) => f.toLowerCase().includes("pool"));
  // const isLand = true; // assume it's land unless you have a field saying otherwise
  const router = useRouter();
  const handleViewProperty = () => {
    router.push(
      `/properties/${id}?title=${encodeURIComponent(title)}&price=${price}`
    );
  };

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
            <p className="truncate">{address}</p>
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
            <div className="text 4xl font-bold">{formattedPrice} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePropertyCard;
