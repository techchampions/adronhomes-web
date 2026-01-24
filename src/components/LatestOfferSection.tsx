import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "./Button";
import { LatestOffer } from "@/data/types/homepageTypes";
import Link from "next/link";

export default function LatestOfferSection({ data }: { data: LatestOffer[] }) {
  const listDescription: string[] = (() => {
    const raw = data?.[0]?.list_description;

    if (!raw) return [];

    if (Array.isArray(raw)) return raw;

    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  })();

  function getAllExceptLast(arr: string[]) {
    return arr.slice(0, -1);
  }

  function getLastOnly(arr: string[]) {
    return arr.length ? arr[arr.length - 1] : null;
  }
  const lastItem = getLastOnly(listDescription);
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
            <div className="flex flex-row gap-3 items-center mb-4 text-xs">
              {getAllExceptLast(listDescription).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row w-fit bg-white/30 text-white rounded-full px-4 py-1.5"
                >
                  {item.replace(/[*"]/g, "").trim()}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row text-white items-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-white" />{" "}
            {lastItem && <div>{lastItem.replace(/[*"]/g, "").trim()}</div>}
          </div>
          <div className="w-[170px] mt-14">
            <Link href="/latest-offers">
              <Button
                label="View All Latest Offers"
                className="bg-adron-green w-fit text-sm py-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
