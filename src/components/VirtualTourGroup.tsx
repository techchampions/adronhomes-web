"use client";

import Image from "next/image";
import PropertyList from "./PropertyList";
import { useVirtualTourpage } from "@/data/hooks";
import Loader from "./Loader";

export default function VirtualTourGroup() {
  const { data, isLoading, isError } = useVirtualTourpage();

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div className="text-center text-red-500 p-10">
        Failed to load About Page data.
      </div>
    );
  if (!isError) {
    console.log("image", data);
  }
  const sampleProperties = data?.data.virtual_properties;

  return (
    <div className="p-2 md:pt-12 w-full mx-auto">
      <div className="bg-transparent w-full">
        <div className="flex flex-col justify-center mx-auto text-center space-y-2">
          <h1 className="text-4xl md:text-6xl text-black font-bold">
            {data?.data.virtual_header[0].header}
            {/* Virtual Tour */}
          </h1>
          <p className="text-sm md:text-md w-[65%] md:w-full mx-auto font-bold mb-5">
            {data?.data.virtual_header[0].description}
            {/* 3d tours of our real estates via google maps */}
          </p>
          <div className="bg-white flex w-fit mx-auto shadow rounded-full px-4 my-1 text-xs justify-between items-center gap-2 mb-4 md:mb-0">
            <span>
              {/* 24 Tours */}
              {data?.data.virtual_header[0].list_description[0]}
            </span>
            <span className="text-lg">•</span>
            <span>
              {data?.data.virtual_header[0].list_description[1]}
              {/* 16 Locations */}
            </span>
          </div>
        </div>
      </div>
      <Image
        src="/half-globe.png"
        alt="globe"
        width={800}
        height={800}
        // className="relative bottom-[-170px] -z-50 mx-auto"
        className="mx-auto mt-6 "
      />
      <div className="bg-white rounded-[50px] px-8 py-10 md:py-12 w-full relative -top-[100px] md:-top-[170px]">
        <h1 className="text-[44px] font-bold mb-14 text-center">Properties</h1>
        <PropertyList properties={sampleProperties} />
      </div>
    </div>
  );
}
