// components/ClientPartnershipHeader.tsx
import Image from "next/image";
import React from "react";

const ClientPartnershipHeader = () => {
  return (
    <section className="bg-[#3c3f0a] py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12">
        {/* Left Content */}
        <div>
          <div className="text-white font-adron-title text-3xl md:text-5xl font-medium mb-2">
            Client
          </div>
          <div className="text-4xl md:text-6xl font-adron-title font-bold text-white mb-6">
            Partnership
          </div>
          <p className="text-gray-200 leading-relaxed">
            We at Adron Homes, the leading Pan-African Real Estate Development
            Company are pleased to announce to our existing and prospective
            Clients;{" "}
            <span className="font-semibold">
              THE ADRON HOMES AND CLIENT PARTNERSHIP SCHEME
            </span>
            . This is in a bid to foster a better profitable relationship with
            our clients and to create Investment opportunities for them in the
            field of Real Estates.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[450px] h-[280px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/Adron@12-web.webp" // put your image inside public/images/
              alt="Client Partnership"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPartnershipHeader;
