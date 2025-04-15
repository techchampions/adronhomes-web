"use client";
import Image from "next/image";
import {
  HiChevronLeft,
  HiChevronRight,
  HiLocationMarker,
} from "react-icons/hi";
import Slider from "react-slick";
import { useRef, useState } from "react";

interface Location {
  id: number;
  name: string;
  properties: number;
  image: string;
}

const PropertyLocations = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const locations: Location[] = [
    {
      id: 1,
      name: "Abuja",
      properties: 7,
      image: "/images/tressure-park-phase2.png",
    },
    {
      id: 2,
      name: "Lagos",
      properties: 12,
      image: "/images/tressure-park-phase2.png",
    },
    {
      id: 3,
      name: "Ibadan",
      properties: 5,
      image: "/images/tressure-park-phase2.png",
    },
    {
      id: 4,
      name: "Port Harcourt",
      properties: 8,
      image: "/images/tressure-park-phase2.png",
    },
    {
      id: 5,
      name: "Enugu",
      properties: 4,
      image: "/images/tressure-park-phase2.png",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4.3,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    arrows: false,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  return (
    <section className="py-16 relative overflow-hidden">
      {/* <div
        className="absolute inset-0"
        style={{
          backgroundImage: "/property-loaction-bg.png",
          // backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      /> */}
      <Image
        src="/property-location-bg.png"
        alt="bg"
        className="absolute inset-0 bg-black/20"
        fill
      />

      <div className="w-full mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
            <HiLocationMarker className="mr-2" />
            <span className="font-bold text-xs">Estate Locations</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center text-adron-black mb-16">
          Explore Our Property Locations
        </h2>

        <div className="relative mb-12">
          <Slider
            ref={sliderRef}
            {...settings}
            className="property-slider flex items-end"
          >
            {locations.map((location, index) => (
              <div key={location.id} className="px-2">
                <div
                  className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                    index === activeSlide
                      ? "w-full h-70 scale-100 brightness-100 grayscale-0 "
                      : "w-full h-70 scale-60 brightness-75 grayscale"
                  }`}
                >
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Info + Nav */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={goToPrev}
            className="bg-white/40 hover:bg-gray-100 p-3 rounded-full z-10 transition"
            aria-label="Previous"
          >
            <HiChevronLeft size={24} />
          </button>

          <div className="bg-white/40 rounded-3xl space-y-2 py-3 px-10 text-center min-w-48">
            <h4 className="text-2xl font-bold text-gray-800">
              {locations[activeSlide]?.name}
            </h4>
            <p className="text-gray-600 flex items-center text-center w-full justify-center text-xs mx-auto">
              <span className="w-3 h-3 p-3 mr-2 flex justify-center items-center rounded-full bg-white">
                {locations[activeSlide]?.properties}
              </span>
              Properties
            </p>
          </div>

          <button
            onClick={goToNext}
            className="bg-white/40 hover:bg-gray-100 p-3 rounded-full z-10 transition"
            aria-label="Next"
          >
            <HiChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Custom Slide Styling */}
      <style jsx global>{`
        .property-slider .slick-track {
          display: flex;
          align-items: center;
        }
        .property-slider .slick-slide {
          transition: transform 0.5s ease;
          transform-origin: center;
        }
        .property-slider .slick-slide:not(.slick-center) {
          z-index: 1;
        }
        .property-slider .slick-center {
          z-index: 10;
        }
      `}</style>
    </section>
  );
};

export default PropertyLocations;
