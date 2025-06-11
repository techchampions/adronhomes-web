"use client";

import { VirtualProperty } from "@/data/types/virtualTourPageTypes";
import PropertyCard from "./PropertyCard";

// interface Property {
//   id: string;
//   imageUrl: string;
//   title: string;
//   address: string;
//   price: string;
//   size: string;
//   hasStreetLights?: boolean;
//   hasGym?: boolean;
// }

interface PropertyListProps {
  properties: VirtualProperty[] | undefined;
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="flex flex-wrap justify-between gap-y-10 md:px-[10px] mx-auto">
      {properties?.map((property) => (
        <PropertyCard
          id={property.id}
          key={property.id}
          imageUrl={property.display_image}
          title={property.name}
          address={`${property.street_address}, ${property.lga}, ${property.state} ${property.country}`}
          price={property.price}
          size={property.size}
          hasStreetLights={property.hasStreetLights}
          hasGym={property.hasGym}
        />
      ))}
    </div>
  );
};

export default PropertyList;
