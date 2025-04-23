import HomePropertyCard from "./HomePropertyCard";

export default function HomePropertyList({ properties }) {
  //   const address = `${properties[0].street_address}, ${properties[0].lga}, ${properties[0].state} ${properties[0].country}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-18 justify-center">
      {properties.map((property) => (
        <HomePropertyCard
          key={property.id}
          id={property.id}
          image={property.display_image}
          title={property.name}
          price={property.price}
          streetAddress={property.street_address}
          state={property.state}
          lga={property.lga}
          country={property.country}
          //   location={address}
          squareFeet={property.size}
          hasLights={property.hasLights}
          hasGym={property.hasGym}
          isLand={property.isLand}
        />
      ))}
    </div>
  );
}
