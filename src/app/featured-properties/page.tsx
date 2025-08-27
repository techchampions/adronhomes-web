import FeaturedPropertiesContainer from "@/components/FeaturedPropertiesContainer";
import Loader from "@/components/Loader";
import React, { Suspense } from "react";

const page: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <FeaturedPropertiesContainer />;
    </Suspense>
  );
};

export default page;
