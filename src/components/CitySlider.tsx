"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

interface City {
  id: number;
  name: string;
  properties: number;
  image: string;
}

const cities: City[] = [
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
  {
    id: 5,
    name: "Port Harcourt",
    properties: 8,
    image: "/images/tressure-park-phase2.png",
  },
  {
    id: 7,
    name: "Enugu",
    properties: 4,
    image: "/images/tressure-park-phase2.png",
  },
  {
    id: 8,
    name: "Port Harcourt",
    properties: 8,
    image: "/images/tressure-park-phase2.png",
  },
  {
    id: 9,
    name: "Enugu",
    properties: 4,
    image: "/images/tressure-park-phase2.png",
  },
];

export default function CitySlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-10 bg-gray-50">
      <Swiper
        slidesPerView={4.5}
        centeredSlides
        spaceBetween={20}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation
        loop
        modules={[Navigation]}
        className="w-full mx-auto flex items-baseline justify-end"
      >
        {cities.map((city, index) => (
          <SwiperSlide key={city.id}>
            <div
              className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                index === activeIndex
                  ? "scale-100 grayscale-0"
                  : "scale-70 grayscale"
              }`}
            >
              <Image
                src={city.image}
                alt={city.name}
                width={400}
                height={400}
                className="w-full h-72 object-cover"
              />
              {/* <div className="bg-white py-3 text-center">
                <h3 className="text-lg font-semibold">{city.name}</h3>
                <p className="text-sm text-gray-500">
                  {city.propertiesCount} Properties
                </p>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <div className="flex justify-center mt-4 gap-4">
        <button className="swiper-button-prev bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
          ←
        </button>
        <button className="swiper-button-next bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
          →
        </button>
      </div>
    </div>
  );
}
