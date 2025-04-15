// components/AutoCarousel.tsx
"use client";

import Slider from "react-slick";
import Image from "next/image";

const images = [
  "/images/hero-image.png",
  "/images/hero-image.png",
  "/images/hero-image.png",
];

const AutoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    variableWidth: true,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div
          key={index}
          className="w-full aspect-[16/9] md:h-[700px] rounded-3xl md:rounded-[50px] overflow-hidden relative mx-auto"
        >
          <Image
            src={img}
            alt={`Slide ${index}`}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      ))}
      <style jsx global>
        {`
          .slick-slide {
            padding: 10px;
          }
        `}
      </style>
    </Slider>
  );
};

export default AutoCarousel;
