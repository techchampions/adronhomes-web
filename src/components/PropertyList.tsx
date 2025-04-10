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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          onViewTour={() => alert(`Viewing ${property.title}`)}
        />
      ))}
    </div>
  );
};

export default PropertyList;
