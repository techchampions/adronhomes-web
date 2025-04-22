// // components/AutoCarousel.tsx
// "use client";

// import Slider from "react-slick";
// import Image from "next/image";

// const AutoCarousel = ({ slides }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     autoplay: true,
//     autoplaySpeed: 3000, // 3 seconds
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     pauseOnHover: false,
//     arrows: false,
//     variableWidth: true,
//   };

//   return (
//     <Slider {...settings}>
//       {slides.map((img, index) => (
//         <div
//           key={index}
//           className="w-full h-[450px] aspect-[16/9] md:h-[580px] rounded-3xl md:rounded-[50px] overflow-hidden relative"
//         >
//           <Image
//             src={img.image}
//             alt={`Slide ${index}`}
//             fill
//             className="object-cover rounded-xl"
//           />
//         </div>
//       ))}
//       <style jsx global>
//         {`
//           .slick-slide {
//             padding: 10px;
//           }
//         `}
//       </style>
//     </Slider>
//   );
// };

// export default AutoCarousel;

// "use client";

// import Slider from "react-slick";
// import Image from "next/image";

// const AutoCarousel = ({ slides }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     pauseOnHover: false,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024, // screens < 1024px
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 768, // screens < 768px
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 480, // screens < 480px
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="w-full">
//       <Slider {...settings}>
//         {slides.map((img, index) => (
//           <div
//             key={index}
//             className="relative w-full aspect-[4/5] md:aspect-[16/9] rounded-2xl md:rounded-[40px] overflow-hidden"
//           >
//             <Image
//               src={img.image}
//               alt={`Slide ${index}`}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         ))}
//       </Slider>

//       <style jsx global>{`
//         .slick-slide {
//           padding: 10px;
//         }

//         .slick-dots li button:before {
//           color: white;
//           opacity: 0.7;
//         }

//         .slick-dots li.slick-active button:before {
//           color: #ffffff;
//           opacity: 1;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AutoCarousel;

import Image from "next/image";
import Slider from "react-slick";

const AutoCarousel = ({ slides }) => {
  const isSingleSlide = slides.length === 1;

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full relative">
      {isSingleSlide ? (
        <div className="relative w-full aspect-[4/5] md:aspect-[16/9] rounded-2xl md:rounded-[40px] overflow-hidden">
          <Image
            src={slides[0].image}
            alt="Slide 1"
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <Slider {...settings}>
          {slides.map((img, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/5] md:aspect-[16/9] rounded-2xl md:rounded-[40px] overflow-hidden"
            >
              <Image
                src={img.image}
                alt={`Slide ${index}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </Slider>
      )}

      {/* <style jsx global>{`
        .slick-slide {
          padding: 10px;
        }

        .slick-dots li button:before {
          color: white;
          opacity: 0.7;
        }

        .slick-dots li.slick-active button:before {
          color: #ffffff;
          opacity: 1;
        }
      `}</style> */}
      <style jsx global>{`
        .slick-slide {
          padding: 10px;
        }

        .slick-dots {
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex !important;
          justify-content: center;
          padding: 0;
          margin: 0;
          list-style: none;
          z-index: 10;
        }

        .slick-dots li {
          margin: 0 4px;
        }

        .slick-dots li button:before {
          font-size: 10px;
          color: white;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          color: #fff;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default AutoCarousel;
