import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "./Button";
import { LatestOffer } from "@/data/types/homepageTypes";

export default function LatestOfferSection({ data }: { data: LatestOffer[] }) {
  console.log("Latest Offer Section", data);
  return (
    <div className="w-full overflow-hidden mt-5 relative">
      {/* Background image */}
      <div className="w-full h-[450px] md:h-[600px]">
        <Image
          // src="/treasure-park-bg.png"
          src={data[0].image}
          alt="Treasure park"
          fill
          // width={800}
          // height={461}
          className="w-full object-cover"
          priority
        />
      </div>

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
            {data[0].name}
            {/* Latest Offers */}
          </div>
          <h2 className="text-white text-4xl md:text-6xl w-[80%] mb-2 font-bold">
            {data[0].header}
            {/* Treasure Parks and <br /> Gardens */}
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
              label="View all lastest offers"
              className="bg-adron-green w-fit text-sm py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
