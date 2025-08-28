import LatestOfferContainer from "@/components/LatestOfferContainer";
import Loader from "@/components/Loader";
import React, { Suspense } from "react";

const page: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LatestOfferContainer />;
    </Suspense>
  );
};

export default page;
