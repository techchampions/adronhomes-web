// components/AutoCarousel.tsx
"use client";

import Slider from "react-slick";
import Image from "next/image";

const images = ["/hero-banner-1.png", "/hero-banner-2.png"];

const AutoCarousel = () => {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    variableWidth: true,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div
          key={index}
          className="w-full md:max-w-[1125px] lg:max-w-[1280px] max-w-[1280px] aspect-[16/9] md:h-[580px] rounded-3xl md:rounded-[50px] overflow-hidden relative mx-auto"
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
            width: 1125px;
          }
            @media screen and (max-width: 1100px) {
            .slick-slide {
            padding:10px;
            width: 1280px;
        }
        `}
      </style>
    </Slider>
  );
};

export default AutoCarousel;
