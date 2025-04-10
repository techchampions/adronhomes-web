import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import FeaturedProperties from "@/components/FeaturedProperties";
import PropertyLocations from "@/components/PropertyLocation";
import TestimonialsSection from "@/components/TestimonialSection";
import AboutUsSection from "@/components/HomeAboutSection";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="  w-full rounded-2xl overflow-hidden">
        <Image
          src="/images/treasure-park.png"
          alt="Treasure park"
          width={800}
          height={461}
          className="w-full object-cover"
          priority
        />
      </div>
      <AboutUsSection />
      <FeaturedProperties />
      <PropertyLocations />
      <TestimonialsSection />
    </div>
  );
}
