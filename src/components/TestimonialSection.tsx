// "use client"
// import Image from 'next/image';
// import { HiChevronLeft, HiChevronRight, HiChatAlt2 } from 'react-icons/hi';
// import Slider from 'react-slick';
// import { useRef, useState } from 'react';

// interface Testimonial {
//   id: number;
//   name: string;
//   image: string;
//   text: string;
//   country: string;
// }

// const TestimonialsSection = () => {
//   const [activeSlide, setActiveSlide] = useState(3); // Start with the highlighted one in the UI

//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       name: "John Smith",
//       image: "/images/testimonial-image.png",
//       text: "The entire process was smooth from start to finish. I'm extremely satisfied with my investment and would definitely work with Adron Homes again.",
//       country: "Nigeria"
//     },
//     {
//       id: 2,
//       name: "Sarah Johnson",
//       image: "/images/testimonial-image.png",
//       text: "I was hesitant at first, but the team at Adron Homes made everything clear and straightforward. My family now has our dream property thanks to them.",
//       country: "Nigeria"
//     },
//     {
//       id: 3,
//       name: "Michael Brown",
//       image: "/images/testimonial-image.png",
//       text: "The payment plans were flexible enough to accommodate my budget. The customer service was exceptional throughout my journey.",
//       country: "Nigeria"
//     },
//     {
//       id: 4,
//       name: "Gafar Olalekan",
//       image: "/images/testimonial-image.png",
//       text: "Buying land with Adron Homes was seamless and stress-free. Their team provided clear guidance, flexible payment options, and excellent service. The process was transparent, and I received my property as promised. Highly recommend for anyone seeking reliable real estate investment!",
//       country: "Nigeria"
//     },
//     {
//       id: 5,
//       name: "Daniel Harris",
//       image: "/images/testimonial-image.png",
//       text: "What impressed me the most was how Adron Homes handled all the documentation and legal aspects. It saved me a lot of time and worry.",
//       country: "Nigeria"
//     },
//     {
//       id: 6,
//       name: "Christopher Wilson",
//       image: "/images/testimonial-image.png",
//       text: "The location options they provided were excellent. I found exactly what I was looking for in terms of both price and accessibility.",
//       country: "Nigeria"
//     },
//   ];

//   const sliderRef = useRef<Slider>(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0px',
//     focusOnSelect: true,
//     arrows: false,
//     beforeChange: (current: number, next: number) => setActiveSlide(next),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 5,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           centerPadding: '60px',
//         }
//       }
//     ]
//   };

//   const goToPrev = () => {
//     sliderRef.current?.slickPrev();
//   };

//   const goToNext = () => {
//     sliderRef.current?.slickNext();
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="flex justify-center mb-6">
//           <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
//             <HiChatAlt2 className="mr-2" size={22}/>
//             <span className="font-medium text-[#272727]">Testimonials</span>
//           </div>
//         </div>

//         {/* Section Title */}
//         <h2 className="text-5xl font-serif font-medium text-center text-gray-800 mb-12">
//           What Our Clients Have to Say
//         </h2>

//         {/* Avatar Slider */}
//         <div className="relative mb-12">
//           <button
//             onClick={goToPrev}
//             className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
//             aria-label="Previous testimonial"
//           >
//             <HiChevronLeft size={24} />
//           </button>

//           <Slider ref={sliderRef} {...settings} className="testimonial-avatar-slider">
//             {testimonials.map((testimonial, index) => (
//               <div key={testimonial.id} className="px-2 outline-none flex justify-center">
//                 <div
//                   className={`relative w-16 h-16 rounded-full overflow-hidden cursor-pointer mt-6
//                     ${index === activeSlide ? "ring-4 ring-green-500 ring-offset-2" : "opacity-60"}`}
//                 >
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </Slider>

//           <button
//             onClick={goToNext}
//             className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
//             aria-label="Next testimonial"
//           >
//             <HiChevronRight size={24} />
//           </button>
//         </div>

//         {/* Testimonial Content */}
//         <div className="bg-white rounded-3xl shadow-lg p-8 text-center relative">
//           <p className="text-gray-700 text-base leading-relaxed font-bold test-[#272727] max-w-3xl mx-auto">
//             {testimonials[activeSlide]?.text}
//           </p>

//           <div className="mt-8">
//             <p className="font-medium text-gray-800 text-sm">{testimonials[activeSlide]?.name}</p>

//             {/* Nigerian Flag */}
//             <div className="flex justify-center mt-2">
//               <div className="w-8 h-6 relative ">
//                 <div className="absolute inset-0 flex rounded-full">
//                   <div className="bg-green-600 w-1/3 h-full"></div>
//                   <div className="bg-white w-1/3 h-full"></div>
//                   <div className="bg-green-600 w-1/3 h-full"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CSS for better slider experience */}
//       <style jsx global>{`
//         .testimonial-avatar-slider .slick-track {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .testimonial-avatar-slider .slick-slide {
//           transition: all 0.3s ease;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TestimonialsSection;

"use client";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight, HiChatAlt2 } from "react-icons/hi";
import Slider from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillChatSquareTextFill } from "react-icons/bs";

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
    <section className="py-16 bg-adron-gray-50 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full ">
            <BsFillChatSquareTextFill className="mr-2 " size={22} />
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
        <div className="relative mb-8 sm:mb-12 px-8 sm:px-0">
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
              <div key={testimonial.id} className="px-1 sm:px-2 outline-none">
                <div
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full overflow-hidden transition-all duration-300 cursor-pointer
                    ${
                      index === activeSlide
                        ? "ring-4 ring-green-500 scale-110"
                        : "grayscale-75 scale-90 ring-1 ring-white ring-offset-2"
                    }`}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 60px, 80px"
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
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center mx-auto max-w-3xl">
          <p className="text-gray-700 text-base font-bold sm:text-base leading-relaxed mb-6">
            {testimonials[activeSlide]?.text}
          </p>

          <div>
            <p className="font-medium text-gray-800 text-sm sm:text-sm">
              {testimonials[activeSlide]?.name}
            </p>

            {/* Nigerian Flag */}
            <div className="flex justify-center items-center mt-3">
              <div className="w-6 h-4 sm:w-8 sm:h-6 relative">
                <div className="absolute inset-0 flex">
                  <div className="bg-green-600 w-1/3 h-full"></div>
                  <div className="bg-white w-1/3 h-full"></div>
                  <div className="bg-green-600 w-1/3 h-full"></div>
                </div>
              </div>
              <span className="ml-2 text-xs sm:text-sm text-gray-600">
                {testimonials[activeSlide]?.country}
              </span>
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
