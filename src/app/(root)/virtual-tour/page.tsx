// app/properties/page.tsx

import PropertyList from "@/components/PropertyList";
import Image from "next/image";

const sampleProperties = [
  {
    id: "1",
    imageUrl: "/images/property.png",
    title: "Treasure Parks and Gardens",
    address: "34, Shimawa, Ogun State, Nigeria",
    price: "₦56,000,000",
    size: "648 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
  {
    id: "2",
    imageUrl: "/images/property.png",
    title: "Treasure Parks and Gardens",
    address: "Abeokuta, Ogun State, Nigeria",
    price: "₦38,000,000",
    size: "500 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
  {
    id: "3",
    imageUrl: "/images/property.png",
    title: "Royal City Estate",
    address: "Abeokuta, Ogun State, Nigeria",
    price: "₦38,000,000",
    size: "500 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
  {
    id: "4",
    imageUrl: "/images/property.png",
    title: "Royal City Estate",
    address: "Abeokuta, Ogun State, Nigeria",
    price: "₦38,000,000",
    size: "500 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
  {
    id: "5",
    imageUrl: "/images/property.png",
    title: "Treasure Parks and Gardens",
    address: "Abeokuta, Ogun State, Nigeria",
    price: "₦38,000,000",
    size: "500 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
  {
    id: "6",
    imageUrl: "/images/property.png",
    title: "Treasure Parks and Gardens",
    address: "Abeokuta, Ogun State, Nigeria",
    price: "₦38,000,000",
    size: "500 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
  {
    id: "7",
    imageUrl: "/images/property.png",
    title: "Treasure Parks and Gardens",
    address: "Abeokuta, Ogun State, Nigeria",
    price: "₦38,000,000",
    size: "500 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
  {
    id: "8",
    imageUrl: "/images/property.png",
    title: "Treasure Parks and Gardens",
    address: "Abeokuta, Ogun State, Nigeria",
    price: "₦38,000,000",
    size: "500 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
  {
    id: "9",
    imageUrl: "/images/property.png",
    title: "Royal City Estate",
    address: "Abeokuta, Ogun State, Nigeria",
    price: "₦38,000,000",
    size: "500 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
  {
    id: "10",
    imageUrl: "/images/property.png",
    title: "Royal City Estate",
    address: "Abeokuta, Ogun State, Nigeria",
    price: "₦38,000,000",
    size: "500 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
  {
    id: "12",
    imageUrl: "/images/property.png",
    title: "Royal City Estate",
    address: "Abeokuta, Ogun State, Nigeria",
    price: "₦38,000,000",
    size: "500 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
  {
    id: "13",
    imageUrl: "/images/property.png",
    title: "Royal City Estate",
    address: "Abeokuta, Ogun State, Nigeria",
    price: "₦38,000,000",
    size: "500 Sq M",
    hasStreetLights: true,
    hasGym: true,
  },
];

export default function VirtualTourPage() {
  return (
    <div className="p-2 md:pt-12 w-full mx-auto">
      <div className="bg-transparent w-full">
        <div className="flex flex-col justify-center mx-auto text-center space-y-2">
          <h1 className="text-6xl text-black font-bold">Virtual Tour</h1>
          <p className="text-md font-medium">
            3d tours of our real estates via google maps
          </p>
          <div className="bg-white flex w-fit mx-auto shadow rounded-full px-4 my-1 text-xs justify-between items-center gap-2">
            <span>24 Tours</span>
            <span className="text-lg">•</span>
            <span>16 Locations</span>
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
