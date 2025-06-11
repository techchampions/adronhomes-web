"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { GiStreetLight } from "react-icons/gi";

const ViewTourPage = () => {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const address = searchParams.get("address");
  const size = searchParams.get("size");
  const hasStreetLights = searchParams.get("hasStreetLights") === "true";
  const hasGym = searchParams.get("hasGym") === "true";
  //   const isLand = searchParams.get("isLand") === "true";

  return (
    <div className="w-full mx-auto py-10 px-4 md:px-10 text-center">
      <div className="flex flex-col w-full md:w-[60%] mx-auto mb-18">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-md font-bold text-adron-black mb-2">{address}</p>
        <div className="flex items-center justify-between gap-4 text-[11px] text-gray-600 max-w-[400px] mx-auto">
          <div className="flex items-center gap-1">
            <Image src="/ruler.svg" width={14} height={14} alt="ruler" />

            <span className="mr-1">{size} Sq M</span>
          </div>

          {hasStreetLights && (
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

          <div className="flex items-center">
            <span>Land</span>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[360px] md:h-[500px] rounded-[50px] overflow-hidden mb-6">
        {/* <StreetView lat={40.748817} lng={-73.985428} /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1745830402699!6m8!1m7!1sTxUjNDgs93KgD-tb31s3xA!2m2!1d6.593729879025251!2d3.360477920009057!3f52.29!4f0!5f0.7820865974627469"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* {imageUrl && (
        <div className="relative w-full h-[360px] md:h-[500px] rounded-[50px] overflow-hidden mb-6">
          <Image
            src={imageUrl}
            alt={title ?? ""}
            fill
            className="object-cover"
          />
        </div>
      )} */}
    </div>
  );
};

export default ViewTourPage;
