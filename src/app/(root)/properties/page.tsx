import PropertyList from "@/components/PropertyList";
import FilterBar from "@/components/FilterBar";
import SwiperPropertyList from "@/components/SwiperPropertyList";
import PropertiesPageGroup from "@/components/PropertiesPageGroup";

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
      "/images/house-pty.png",
      "/images/house-pty.png",
      "/images/house-pty.png",
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
      "/images/house-pty.png",
      "/images/house-pty.png",
      "/images/house-pty.png",
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
      "/images/house-pty.png",
      "/images/house-pty.png",
      "/images/house-pty.png",
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
      "/images/house-pty.png",
      "/images/house-pty.png",
      "/images/house-pty.png",
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
      "/images/house-pty.png",
      "/images/house-pty.png",
      "/images/house-pty.png",
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
      "/images/house-pty.png",
      "/images/house-pty.png",
      "/images/house-pty.png",
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
      "/images/house-pty.png",
      "/images/house-pty.png",
      "/images/house-pty.png",
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
      "/images/house-pty.png",
      "/images/house-pty.png",
      "/images/house-pty.png",
    ],
    type: "Land",
  },
  // Add more items...
];

export default function PropertiesPage() {
  return <PropertiesPageGroup />;
}
