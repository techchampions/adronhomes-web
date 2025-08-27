import HomeListingContainer from "@/components/HomeListingContainer";
import Loader from "@/components/Loader";
import React, { Suspense } from "react";

const page: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HomeListingContainer />;
    </Suspense>
  );
};

export default page;
