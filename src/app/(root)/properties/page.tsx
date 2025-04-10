import PropertyList from "@/components/PropertyList";
import FilterBar from "@/components/FilterBar";
import SwiperPropertyList from "@/components/SwiperPropertyList";

export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  features: string[];
  imageUrl?: string;
  images?: string[];
  size?: string;
  type: string;
}

export const properties: Property[] = [
  {
    id: "1",
    name: "Treasure Parks and Gardens",
    location: "34, Shimawa, Ogun State, Nigeria",
    price: "₦56,000,000",
    features: ["648 Sq M", "Str Lights", "Gym"],
    images: [
      "/images/property.png",
      "/images/property.png",
      "/images/property.png",
    ],
    type: "Land",
  },
  {
    id: "2",
    name: "Treasure Parks and Gardens",
    location: "34, Shimawa, Ogun State, Nigeria",
    price: "₦56,000,000",
    features: ["648 Sq M", "Str Lights", "Gym"],
    images: [
      "/images/property.png",
      "/images/property.png",
      "/images/property.png",
    ],
    type: "Land",
  },
  {
    id: "3",
    name: "Treasure Parks and Gardens",
    location: "34, Shimawa, Ogun State, Nigeria",
    price: "₦56,000,000",
    features: ["648 Sq M", "Str Lights", "Gym"],
    images: [
      "/images/property.png",
      "/images/property.png",
      "/images/property.png",
    ],
    type: "Land",
  },
  {
    id: "4",
    name: "Treasure Parks and Gardens",
    location: "34, Shimawa, Ogun State, Nigeria",
    price: "₦56,000,000",
    features: ["648 Sq M", "Str Lights", "Gym"],
    images: [
      "/images/property.png",
      "/images/property.png",
      "/images/property.png",
    ],
    type: "Land",
  },
  {
    id: "5",
    name: "Treasure Parks and Gardens",
    location: "34, Shimawa, Ogun State, Nigeria",
    price: "₦56,000,000",
    features: ["648 Sq M", "Str Lights", "Gym"],
    images: [
      "/images/property.png",
      "/images/property.png",
      "/images/property.png",
    ],
    type: "Land",
  },
  {
    id: "6",
    name: "Treasure Parks and Gardens",
    location: "34, Shimawa, Ogun State, Nigeria",
    price: "₦56,000,000",
    features: ["648 Sq M", "Str Lights", "Gym"],
    images: [
      "/images/property.png",
      "/images/property.png",
      "/images/property.png",
    ],
    type: "Land",
  },
  {
    id: "7",
    name: "Treasure Parks and Gardens",
    location: "34, Shimawa, Ogun State, Nigeria",
    price: "₦56,000,000",
    features: ["648 Sq M", "Str Lights", "Gym"],
    images: [
      "/images/property.png",
      "/images/property.png",
      "/images/property.png",
    ],
    type: "Land",
  },
  {
    id: "8",
    name: "Treasure Parks and Gardens",
    location: "34, Shimawa, Ogun State, Nigeria",
    price: "₦56,000,000",
    features: ["648 Sq M", "Str Lights", "Gym"],
    images: [
      "/images/property.png",
      "/images/property.png",
      "/images/property.png",
    ],
    type: "Land",
  },
  // Add more items...
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto p-2 md:p-6">
      <div className="bg-transparent w-full mb-10">
        <div className="flex flex-col justify-center mx-auto text-center space-y-2">
          <h1 className="text-4xl text-black font-bold">Properties</h1>
          <p className="text-sm">
            Discover affordable properties within your budget
          </p>
          <div className="bg-white flex w-fit mx-auto shadow rounded-full px-4 text-xs justify-between items-center gap-2">
            <span>28 Properties</span>
            <span className="text-lg">•</span>
            <span>16 Locations</span>
          </div>
        </div>
      </div>

      <FilterBar />
      <div className="bg-white rounded-2xl px-4 md-px-8 py-6 md:py-2 w-full mx-auto">
        <SwiperPropertyList properties={properties} />
      </div>
    </div>
  );
}
