"use client";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Slider from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClientFeedback, Testimonials } from "@/data/types/homepageTypes";

// interface Testimonial {
//   id: number;
//   client_name: string;
//   client_image: string;
//   client_comment: string;
//   country: string;
//   client_country: string;
// }

const TestimonialsSection = ({ data }: { data: Testimonials | undefined }) => {
  const [activeSlide, setActiveSlide] = useState(3);

  const testimonials: ClientFeedback[] = data?.clientsFeedback || [];

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <section className="py-16 overflow-x-hidden" id="testimonials">
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
              {data?.testimonialsText[0].name}
            </span>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          {data?.testimonialsText[0].header}{" "}
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
              // <div key={testimonial.id} className=" outline-none h-14 w-14">
              //   <div
              //     className={`relative w-14 h-14 mx-auto rounded-full overflow-hidden transition-all duration-300 cursor-pointer
              //       ${
              //         index === activeSlide
              //           ? "ring-3 ring-green-500 scale-100"
              //           : "grayscale-75 scale-90 ring-1 ring-white"
              //       }`}
              //   >
              //     <Image
              //       src={testimonial.client_image}
              //       alt={testimonial.client_name}
              //       fill
              //       className="object-cover"
              //       // sizes="(max-width: 640px) 60px, 80px"
              //     />
              //   </div>
              // </div>
              <div key={testimonial.id} className="outline-none px-2">
                <div
                  className={`relative !w-20 h-20 rounded-full overflow-hidden mx-auto transition-all duration-300 cursor-pointer ${
                    index === activeSlide
                      ? "ring-4 ring-green-500 scale-100"
                      : "grayscale scale-90 ring-1 ring-white"
                  }`}
                >
                  <Image
                    src={testimonial.client_image}
                    alt={testimonial.client_name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, 80px"
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
        <div className="bg-white rounded-4xl p-2 md:p-4 text-center mx-auto max-w-3xl">
          {/* <p className="text-adron-black font-black leading-relaxed mb-6">
            {testimonials[activeSlide]?.client_comment}
          </p>

          <div>
            <p className="font-medium text-adron-black text-[10px]">
              {testimonials[activeSlide]?.client_name}
            </p>

            <div className="flex justify-center items-center mt-3 mx-auto">
              <Image
                src={
                  testimonials[activeSlide]?.client_country || "/ng-flag.svg"
                }
                alt="Nigerian Flag"
                height={24}
                width={24}
              />
            </div>
          </div> */}
          <iframe
            className="w-full h-[300px] rounded-2xl"
            src={testimonials[activeSlide].video_link}
            title={testimonials[activeSlide].client_comment}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
