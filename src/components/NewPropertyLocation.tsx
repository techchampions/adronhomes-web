"use client";

import Image from "next/image";
import {
  HiChevronLeft,
  HiChevronRight,
  HiLocationMarker,
} from "react-icons/hi";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";

interface Location {
  id: number;
  name: string;
  state_name: string;
  total_property: number;
  photo: string;
}

const PropertyLocations2 = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center", // centers the active slide
  });
  const [activeSlide, setActiveSlide] = useState(0);

  const locations: Location[] = data.locationProperty;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // set initial
  }, [emblaApi, onSelect]);

  const goPrev = () => emblaApi?.scrollPrev();
  const goNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-16 relative overflow-hidden">
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
            <span className="font-bold text-xs">
              {data.locationText[0].name}
            </span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center text-adron-black mb-16">
          {data.locationText[0].header}
        </h2>

        {/* Embla Carousel */}
        <div className="overflow-hidden mb-12" ref={emblaRef}>
          <div className="flex">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className="px-2 h-[350px] md:h-[420px] flex items-end
                  flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_20%]"
              >
                <div
                  className={`relative w-full rounded-3xl overflow-hidden transition-all duration-500 ${
                    index === activeSlide
                      ? "scale-100 brightness-100 grayscale-0 self-center"
                      : "scale-75 brightness-75 grayscale self-end"
                  }`}
                  style={{
                    height: index === activeSlide ? "100%" : "80%",
                    marginTop: index === activeSlide ? "0px" : "70px",
                  }}
                >
                  <Image
                    src={location.photo}
                    alt={location.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info + Nav */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={goPrev}
            className="bg-white/40 hover:bg-gray-100 p-3 rounded-full z-10 transition"
            aria-label="Previous"
          >
            <HiChevronLeft size={24} />
          </button>

          <div className="bg-white/40 rounded-3xl space-y-2 py-3 px-10 text-center min-w-48">
            <h4 className="text-2xl font-bold text-gray-800">
              {locations[activeSlide]?.state_name}
            </h4>
            <p className="text-gray-600 flex items-center justify-center text-xs mx-auto">
              <span className="w-3 h-3 p-3 mr-2 flex justify-center items-center rounded-full bg-white">
                {locations[activeSlide]?.total_property}
              </span>
              Properties
            </p>
          </div>

          <button
            onClick={goNext}
            className="bg-white/40 hover:bg-gray-100 p-3 rounded-full z-10 transition"
            aria-label="Next"
          >
            <HiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyLocations2;
