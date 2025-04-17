"use client";
import { usePropertiespage } from "@/data/hooks";
import FilterBar from "./FilterBar";
import SwiperPropertyList from "./SwiperPropertyList";

export default function PropertiesPageGroup() {
  const { data, isLoading, isError } = usePropertiespage();

  if (isLoading) return <div className="text-center p-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500 p-10">
        Failed to load About Page data.
      </div>
    );
  if (!isError) {
    console.log("image", data);
  }
  const properties = data?.data.properties;

  return (
    <div className="max-w-7xl mx-auto p-2 md:p-6">
      <div className="bg-transparent w-full mt-6 mb-10">
        <div className="flex flex-col justify-center mx-auto text-center space-y-2">
          <h1 className="text-4xl md:text-6xl text-black font-bold">
            Properties
          </h1>
          <p className="text-sm w-[70%] font-bold md:w-full mx-auto">
            Discover affordable properties within your budget
          </p>
          <div className="bg-white flex w-fit mx-auto mt-2 shadow rounded-full px-4 text-xs justify-between items-center gap-2">
            <span>28 Properties</span>
            <span className="text-lg">•</span>
            <span>16 Locations</span>
          </div>
        </div>
      </div>

      <FilterBar />
      <div className="bg-white rounded-3xl px-4 md-px-10 py-6 md:py-10 w-full mx-auto">
        <SwiperPropertyList properties={properties} />
      </div>
    </div>
  );
}
