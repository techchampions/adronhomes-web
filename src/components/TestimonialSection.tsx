"use client";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  country: string;
}

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(3);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Smith",
      image: "/images/testimonial-image.png",
      text: "The entire process was smooth from start to finish. I'm extremely satisfied with my investment and would definitely work with Adron Homes again.",
      country: "Nigeria",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      image: "/images/testimonial-image.png",
      text: "I was hesitant at first, but the team at Adron Homes made everything clear and straightforward. My family now has our dream property thanks to them.",
      country: "Nigeria",
    },
    {
      id: 3,
      name: "Michael Brown",
      image: "/images/testimonial-image.png",
      text: "The payment plans were flexible enough to accommodate my budget. The customer service was exceptional throughout my journey.",
      country: "Nigeria",
    },
    {
      id: 4,
      name: "Gafar Olalekan",
      image: "/images/testimonial-image.png",
      text: "Buying land with Adron Homes was seamless and stress-free. Their team provided clear guidance, flexible payment options, and excellent service. The process was transparent, and I received my property as promised. Highly recommend for anyone seeking reliable real estate investment!",
      country: "Nigeria",
    },
    {
      id: 5,
      name: "Daniel Harris",
      image: "/images/testimonial-image.png",
      text: "What impressed me the most was how Adron Homes handled all the documentation and legal aspects. It saved me a lot of time and worry.",
      country: "Nigeria",
    },
    {
      id: 6,
      name: "Christopher Wilson",
      image: "/images/testimonial-image.png",
      text: "The location options they provided were excellent. I found exactly what I was looking for in terms of both price and accessibility.",
      country: "Nigeria",
    },
  ];

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    arrows: false,
    initialSlide: 3,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "80px",
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="py-16 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 gap-2 bg-white rounded-full ">
            {/* <BsFillChatSquareTextFill className="mr-2 " size={22} /> */}
            <Image
              src="/chat-icon.svg"
              alt="testemonial"
              width={20}
              height={20}
            />
            <span className="font-medium text-xs text-gray-800">
              Testimonials
            </span>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          What Our Clients Have to Say
        </h2>

        {/* Avatar Slider */}
        <div className="relative mb-6 px-8 sm:px-0">
          <button
            onClick={goToPrev}
            className="absolute left-2 sm:-left-12 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full z-10 hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft size={24} className="text-gray-700" />
          </button>

          <Slider
            ref={sliderRef}
            {...settings}
            className="testimonial-avatar-slider w-full md:w-[80%] mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className=" outline-none">
                <div
                  className={`relative w-14 h-14 mx-auto rounded-full overflow-hidden transition-all duration-300 cursor-pointer
                    ${
                      index === activeSlide
                        ? "ring-3 ring-green-500 scale-100"
                        : "grayscale-75 scale-90 ring-1 ring-white"
                    }`}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    // sizes="(max-width: 640px) 60px, 80px"
                  />
                </div>
              </div>
            ))}
          </Slider>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:-right-12 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full z-10 hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <HiChevronRight size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Testimonial Content */}
        <div className="bg-white rounded-[55px] p-6 md:p-10 text-center mx-auto max-w-3xl">
          <p className="text-adron-black font-black leading-relaxed mb-6">
            {testimonials[activeSlide]?.text}
          </p>

          <div>
            <p className="font-medium text-adron-black text-[10px]">
              {testimonials[activeSlide]?.name}
            </p>

            {/* Nigerian Flag */}
            <div className="flex justify-center items-center mt-3 mx-auto">
              <Image
                src="/ng-flag.svg"
                alt="Nigerian Flag"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-avatar-slider .slick-track {
          display: flex;
          align-items: center;
          padding: 10px 0;
        }
        .testimonial-avatar-slider .slick-slide {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        @media (max-width: 640px) {
          .testimonial-avatar-slider .slick-slide {
            padding: 0 4px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
