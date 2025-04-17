import HeroBanner from "@/components/HeroBanner";
import FeaturedProperties from "@/components/FeaturedProperties";
import PropertyLocations from "@/components/PropertyLocation";
import TestimonialsSection from "@/components/TestimonialSection";
import AboutUsSection from "@/components/HomeAboutSection";
import LatestOfferSection from "@/components/LatestOfferSection";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <LatestOfferSection />
      <AboutUsSection />
      <FeaturedProperties />
      <PropertyLocations />
      <TestimonialsSection />
    </div>
  );
}
