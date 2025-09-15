// "use client";

// import Image from "next/image";
// import { FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
// import { GiStreetLight } from "react-icons/gi";

// interface PropertyCardProps {
//   imageUrl: string;
//   title: string;
//   address: string;
//   price: string;
//   size: string;
//   hasStreetLights?: boolean;
//   hasGym?: boolean;
//   onViewTour?: () => void;
// }

// const PropertyCard: React.FC<PropertyCardProps> = ({
//   imageUrl,
//   title,
//   address,
//   price,
//   size,
//   hasStreetLights = true,
//   hasGym = true,
//   onViewTour,
// }) => {
//   return (
//     <div className="flex flex-col md:flex-row items-center gap-10 bg-transparent rounded-3xl p-4 w-full md:w-[48%]">
//       <div className="relative w-full md:w-1/2 h-48 md:h-50 rounded-3xl overflow-hidden">
//         <Image src={imageUrl} alt={title} fill className="object-cover" />
//       </div>

//       <div className="flex flex-col space-y-2 justify-between w-full md:w-1/2">
//         <div className="flex flex-col gap-1">
//           <div className="text-md font-bold text-gray-800 mb-2">{title}</div>
//           <p className="flex items-center text-xs text-gray-600 mb-2">
//             <FaMapMarkerAlt className="mr-1 text-adron-gray-500" /> {address}
//           </p>
//           <p className="text-md font-bold text-gray-800 mb-3 flex items-center justify-between w-full pr-5">
//             {price}
//             <FaRegHeart className="ml-1 text-gray-800 " />
//           </p>

//           <div className="flex items-center gap-4 text-xs text-gray-500">
//             <span className="flex items-center gap-1">
//               {/* <TfiRulerAlt2 />  */}
//               <Image src="/ruler.svg" width={14} height={14} alt="ruler" />
//               {size}
//             </span>
//             {hasStreetLights && (
//               <span className="flex items-center gap-1">
//                 <GiStreetLight className="h-4 w-4" /> Str Lights
//               </span>
//             )}
//             {hasGym && (
//               <span className="flex items-center gap-1">
//                 {/* <FaDumbbell /> */}
//                 <Image
//                   src="/dumbbell.svg"
//                   width={16}
//                   height={16}
//                   alt="dumbbell"
//                 />
//                 Gym
//               </span>
//             )}
//           </div>
//         </div>

//         <button
//           onClick={onViewTour}
//           className="mt-4 bg-adron-green text-sm text-white px-7 py-2.5 w-fit rounded-full transition"
//         >
//           View Tour
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;

"use client";

import { formatPrice } from "@/utils/formater";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
import { GiStreetLight } from "react-icons/gi";

interface PropertyCardProps {
  id: string | number; // add this to uniquely identify the property
  imageUrl: string;
  title: string;
  address: string;
  price: number;
  size: string;
  hasStreetLights?: boolean;
  hasGym?: boolean;
  virtual_tour?: string | null;
  property_map?: string | null;
  property_video?: string | null;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  imageUrl,
  title,
  address,
  price,
  size,
  virtual_tour,
  property_map,
  property_video,
  hasStreetLights = true,
  hasGym = true,
}) => {
  const router = useRouter();

  const handleViewTour = () => {
    router.push(
      `/virtual-tour/${id}?title=${encodeURIComponent(
        title
      )}&imageUrl=${encodeURIComponent(
        imageUrl
      )}&price=${price}&address=${encodeURIComponent(
        address
      )}&size=${size}&hasStreetLights=${hasStreetLights}&hasGym=${hasGym}&vTourView=${virtual_tour}&video=${property_video}&map=${property_map}`
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 bg-transparent rounded-3xl p-4 w-full md:w-[48%]">
      <div className="relative w-full md:w-1/2 h-48 md:h-50 rounded-3xl overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col space-y-2 justify-between w-full md:w-1/2">
        <div className="flex flex-col gap-1">
          <div
            className="text-md font-bold text-gray-800 mb-2 cursor-pointer hover:text-gray-500 hover:underline underline-offset-3"
            onClick={handleViewTour}
          >
            {title}
          </div>
          <p className="flex items-center text-xs text-gray-600 mb-2">
            <FaMapMarkerAlt className="mr-1 text-adron-gray-500" /> {address}
          </p>
          <p className="text-md font-bold text-gray-800 mb-3 flex items-center justify-between w-full pr-5">
            {formatPrice(price || 0)}
            <FaRegHeart className="ml-1 text-gray-800 " />
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Image src="/ruler.svg" width={14} height={14} alt="ruler" />
              {size} Sqm
            </span>
            {hasStreetLights && (
              <span className="flex items-center gap-1">
                <GiStreetLight className="h-4 w-4" /> Str Lights
              </span>
            )}
            {hasGym && (
              <span className="flex items-center gap-1">
                <Image
                  src="/dumbbell.svg"
                  width={16}
                  height={16}
                  alt="dumbbell"
                />
                Gym
              </span>
            )}
          </div>
        </div>

        <button
          onClick={handleViewTour}
          className="mt-4 bg-adron-green text-sm text-white px-7 py-2.5 w-fit rounded-full transition"
        >
          View Tour
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
