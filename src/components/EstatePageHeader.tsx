"use client";
import { PropertiesHeader } from "@/data/types/propertiesPageTypes";
import { useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  data: PropertiesHeader | undefined;
}
const EstatePageHeader: React.FC<Props> = ({ data }) => {
  const searchParams = useSearchParams();

  const location = searchParams.get("state") || "";

  return (
    <div className="bg-transparent w-full mt-6 mb-10">
      <div className="flex flex-col justify-center mx-auto text-center space-y-2">
        <h1 className="text-4xl md:text-6xl text-black font-bold">
          {location ? `Estates in ${location}` : "Our Estates"}
        </h1>
        <p className="text-sm w-[70%] font-bold md:w-full mx-auto">
          {data?.description}
        </p>
        <div className="bg-white flex w-fit mx-auto mt-2 shadow rounded-full px-4 text-xs justify-between items-center gap-2">
          <span>{data?.list_description[0]}</span>
          <span className="text-lg">•</span>
          <span>{data?.list_description[1]}</span>
        </div>
      </div>
    </div>
  );
};
export default EstatePageHeader;
