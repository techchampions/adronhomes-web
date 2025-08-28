import Link from "next/link";
import { FaHome } from "react-icons/fa";
import HomePropertyList from "./HomePagePropertyList";
import { FeaturedPropertiesT } from "@/data/types/homepageTypes";

const FeaturedProperties = ({
  data,
}: {
  data: FeaturedPropertiesT | undefined;
}) => {
  const properties = data?.handpackProperty || [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1240px] mx-auto px-[1rem] md:px-0">
        <div className="text-center flex flex-col justify-center">
          <div className="flex items-center text-sm w-fit mx-auto px-4 py-2 text-black bg-white rounded-full mb-3 space-x-1">
            <FaHome className="text-base" />
            {/* <span>Handpick Specifically for You</span> */}
            <span>{data?.handpackText[0].header}</span>
          </div>

          <h2 className="text-3xl md:text-6xl -mt-3 md:-mt-4 font-bold mb-8 md:mb-10">
            {/* Discover Our <br />
            Featured Properties */}
            {data?.handpackText[0].description}
          </h2>
        </div>

        {/* Property Grid */}
        <HomePropertyList properties={properties} />
        <div className="flex w-full justify-center mt-16">
          <Link
            href="/featured-properties"
            className="inline-block px-6 py-2 bg-adron-green text-white rounded-full text-sm transition-colors"
          >
            View All Properties
          </Link>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-18 justify-center">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.display_image}
              title={property.name}
              price={property.price}
              location={address}
              squareFeet={property.size}
              hasLights={property.hasLights}
              hasGym={property.hasGym}
              isLand={property.isLand}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProperties;
