import FeaturedPropertiesContainer from "@/components/FeaturedPropertiesContainer";
import Loader from "@/components/Loader";
import React, { Suspense } from "react";
export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <FeaturedPropertiesContainer />;
    </Suspense>
  );
}
