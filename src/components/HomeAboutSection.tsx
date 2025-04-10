"use client"
import Image from 'next/image';
import { HiUsers } from 'react-icons/hi';

const AboutUsSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Container */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/images/home-about-us.png" 
              alt="Modern skyscrapers viewed from below"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          {/* Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
              <HiUsers className="mr-2 text-gray-700" />
              <span className="font-medium">About Us</span>
            </div>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-800 mb-6">
            Learn About Our History
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            We are driven to keep our promise, expand our land bank, and provide
            excellent services with affordable housing solutions. Our singular mission
            is to exceed expectations.
          </p>

          {/* CTA Button */}
          <a 
            href="/about" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;