"use client";
import Image from "next/image";
import { HiUsers } from "react-icons/hi";

const AboutUsSection = () => {
  return (
    <section className="py-16 px-10 w-full mx-auto bg-white">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Container */}
        <div className="w-full md:w-[45%]">
          <div className="relative w-full h-96 md:h-[350px] overflow-hidden">
            <Image
              src="/images/home-about-us.png"
              alt="Modern skyscrapers viewed from below"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full md:w-[45%] lg:pl-8">
          {/* Badge */}
          <div className="mb-1">
            <div className="inline-flex items-center px-4 py-2 text-xs gap-2 bg-white rounded-full">
              {/* <HiUsers className="mr-2 text-gray-700" /> */}
              <Image
                src="/people-icon.svg"
                alt="people"
                width={16}
                height={16}
              />
              <span className="font-bold">About Us</span>
            </div>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl md:text-6xl font-bold text-adron-black mb-6">
            Learn About Our <br /> History
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-xs leading-relaxed">
            We are driven to keep our promise, expand our land bank, and provide{" "}
            <br />
            excellent services with affordable housing solutions. Our singular
            mission <br /> is to exceed expectations.
          </p>

          {/* CTA Button */}
          <a
            href="/about"
            className="inline-block bg-adron-green text-white font-medium py-3 px-8 text-sm rounded-full transition-colors"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
