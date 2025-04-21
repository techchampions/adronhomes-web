"use client";

import { useHomepage } from "@/data/hooks";
import Loader from "./Loader";
import HeroBanner from "./HeroBanner";
import LatestOfferSection from "./LatestOfferSection";
import AboutUsSection from "./HomeAboutSection";
import FeaturedProperties from "./FeaturedProperties";
import PropertyLocations from "./PropertyLocation";
import TestimonialsSection from "./TestimonialSection";

export default function HomePageGroup() {
  const { data, isLoading, isError } = useHomepage();

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div className="text-center text-red-500 p-10">
        Failed to load About Page data.
      </div>
    );
  if (!isError) {
    console.log("image", data);
  }

  return (
    <div>
      <HeroBanner data={data?.data.sliders} settings={data?.data.settings} />
      <LatestOfferSection data={data?.data.latestOffer} />
      <AboutUsSection data={data?.data.about_us} />
      <FeaturedProperties data={data?.data.featured_properties} />
      <PropertyLocations data={data?.data.locations} />
      <TestimonialsSection data={data?.data.testimonials} />
    </div>
  );
}
