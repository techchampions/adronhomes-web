import TestimonalContainer from "@/components/TestimonalContainer";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="p-10 space-y-10">
      <div className="text-left pt-8 md:pt-20 p-5 md:ml-[20px]  md:px-[200px] md:mx-auto md:pb-2 bg-adron-gray">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 w-full leading-0">
          Testimonials
        </h1>
        <p className="text-adron-black font-bold text-left text-[14px] md:text-[15px] leading-relaxed">
          Our clients are always happy with our services. Check out some of the
          testimonies below{" "}
        </p>
      </div>

      <TestimonalContainer />
    </div>
  );
};

export default page;
