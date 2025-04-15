import SwiperPropertyCard from "./SwiperPropertyCard";

export default function SwiperPropertyList({ properties }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-12 px-0 md:px-10">
      {properties.map((property) => (
        <SwiperPropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
