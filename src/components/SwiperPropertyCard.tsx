"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaRegHeart,
} from "react-icons/fa";
import Image from "next/image";
import { GiStreetLight } from "react-icons/gi";
import Button from "./Button";

interface Props {
  property: {
    id: string;
    name: string;
    location: string;
    price: string;
    features: string[];
    images: string[];
    type: string;
  };
}

export default function SwiperPropertyCard({ property }: Props) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className=" rounded-2xl p-4">
      <div className="relative w-full h-[250px] md:h-[500px] rounded-xl overflow-hidden">
        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // attach navigation buttons
            //@ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            //@ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          className="w-full h-full"
        >
          {property.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                alt={`Image ${idx + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 bg-opacity-60 rounded-full p-2 shadow hover:bg-opacity-90"
        >
          <FaChevronLeft size={30} />
        </button>
        <button
          ref={nextRef}
          className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 bg-opacity-60 rounded-full p-2 shadow hover:bg-opacity-90"
        >
          <FaChevronRight size={30} />
        </button>
      </div>

      {/* Property Info */}
      <div className="mt-4 space-y-2">
        <h4 className="text-[25px] font-adron-text-body font-semibold">
          {property.name}
        </h4>
        <p className="text-md text-adron-black flex items-center mt-1">
          <FaMapMarkerAlt className="mr-1" /> {property.location}
        </p>

        <p className="text-[20px] font-black text-adron-black mt-2 flex justify-between">
          {property.price} <FaRegHeart className="mr-2" />
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-[10px] font-bold text-gray-500 gap-4">
            <span className="flex items-center gap-1">
              {/* <TfiRulerAlt2 />  */}
              <Image src="/ruler.svg" width={14} height={14} alt="dumbbell" />

              {property.features[0]}
            </span>
            <span className="flex items-center gap-1">
              <GiStreetLight /> {property.features[1]}
            </span>
            <span className="flex items-center gap-1">
              {/* <FaDumbbell /> */}
              <Image
                src="/dumbbell.svg"
                width={24}
                height={24}
                alt="dumbbell"
              />
              {property.features[2]}
            </span>
          </div>
          <div className="text-gray-400 flex items-center gap-1 text-sm">
            {property.type}
          </div>
        </div>

        <div className="flex items-center justify-between mt-[50px]">
          <Button
            label="View Property"
            className="bg-adron-green max-w-fit text-xs px-10 py-3"
          />
        </div>
      </div>
    </div>
  );
}
