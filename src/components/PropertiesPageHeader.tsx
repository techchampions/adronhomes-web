"use client";
import { usePropertiespage } from "@/data/hooks";
import { useSearchParams } from "next/navigation";

const PropertiesPageHeader = () => {
  const searchParams = useSearchParams();

  const { data, isLoading, isError } = usePropertiespage(1);
  const location = searchParams.get("location") || "";

  return (
    <div className="bg-transparent w-full mt-6 mb-10">
      <div className="flex flex-col justify-center mx-auto text-center space-y-2">
        <h1 className="text-4xl md:text-6xl text-black font-bold">
          {location ? `Properties in ${location}` : "Properties"}
        </h1>
        <p className="text-sm w-[70%] font-bold md:w-full mx-auto">
          {data?.properties_header[0].description}
        </p>
        <div className="bg-white flex w-fit mx-auto mt-2 shadow rounded-full px-4 text-xs justify-between items-center gap-2">
          <span>{data?.properties_header[0].list_description[0]}</span>
          <span className="text-lg">•</span>
          <span>{data?.properties_header[0].list_description[1]}</span>
        </div>
      </div>
    </div>
  );
};
export default PropertiesPageHeader;
