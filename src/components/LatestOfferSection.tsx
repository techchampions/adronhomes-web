import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "./Button";

export default function LatestOfferSection() {
  return (
    <div className="w-full overflow-hidden mt-5 relative">
      {/* Background image */}
      <Image
        src="/treasure-park-bg.png"
        alt="Treasure park"
        width={800}
        height={461}
        className="w-full object-cover"
        priority
      />

      {/* Gradient overlay on the left side */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />

      {/* Text content over the image */}
      <div className="absolute inset-0 flex items-center z-20 px-6 md:px-12">
        <div className="flex flex-col space-y-0">
          <div className="flex flex-row items-center w-fit text-[11px] bg-white rounded-full px-3 py-1.5 gap-1.5">
            <Image
              src="/percent-icon.svg"
              alt="percent"
              height={18}
              width={18}
              className=""
            />
            Latest Offers
          </div>
          <h2 className="text-white text-6xl w-[700px] mb-2 font-bold">
            Treasure Parks and <br /> Gardens
          </h2>
          <div className="flex flex-row gap-3 items-center mb-4 text-xs">
            <div className="flex flex-row w-fit bg-white/30 text-white rounded-full px-4 py-1.5">
              Property Type: Land
            </div>
            <div className="flex flex-row w-fit bg-white/30 text-white rounded-full px-4 py-1.5">
              Property Size: 648 Sq M
            </div>
          </div>
          <div className="flex flex-row text-white items-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-white" /> Shimawa, Ogun State,
            Nigeria
          </div>
          <div className="w-[170px] mt-14">
            <Button
              label="View Property"
              className="bg-adron-green w-fit text-sm py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
