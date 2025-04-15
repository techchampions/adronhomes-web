"use client";

import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  imageUrl: string;
  title: string;
  address: string;
  price: string;
  size: string;
  hasStreetLights?: boolean;
  hasGym?: boolean;
}

interface PropertyListProps {
  properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="flex flex-wrap justify-between gap-y-10 md:px-[10px] mx-auto">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          imageUrl={property.imageUrl}
          title={property.title}
          address={property.address}
          price={property.price}
          size={property.size}
          hasStreetLights={property.hasStreetLights}
          hasGym={property.hasGym}
          onViewTour={() => alert(`Viewing at ${property.title}`)}
        />
      ))}
    </div>
  );
};

export default PropertyList;
