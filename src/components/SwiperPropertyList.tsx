import SwiperPropertyCard from "./SwiperPropertyCard";

export default function SwiperPropertyList({ properties }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {properties.map((property) => (
        <SwiperPropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
