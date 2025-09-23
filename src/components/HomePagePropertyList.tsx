import { Property } from "@/data/types/homepageTypes";
import HomePropertyCard from "./HomePropertyCard";
import NoPropertyFound from "./NoPropertyFound";

export default function HomePropertyList({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <>
      {properties.length < 1 ? (
        <NoPropertyFound />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-18 justify-center">
          {properties?.map((property) => (
            <HomePropertyCard property={property} key={property.id} />
          ))}
        </div>
      )}
    </>
  );
}
