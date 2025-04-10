// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import {
//   FaMapMarkerAlt,
//   FaHeart,
//   FaRulerCombined,
//   FaLightbulb,
//   FaDumbbell,
// } from "react-icons/fa";
// import Image from "next/image";

// export default function SwiperPropertyCard({ property }: Props) {
//   return (
//     <div className="bg-white rounded-2xl shadow p-4">
//       <div className="relative">
//         <Swiper spaceBetween={10} slidesPerView={1} className=" h-[300px]">
//           {property.images.map((img, idx) => (
//             <SwiperSlide key={idx}>
//               <Image
//                 fill
//                 src={img}
//                 alt="Property"
//                 className="rounded-md md:rounded-xl w-full h-56 object-cover"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="mt-4">
//         <h3 className="text-lg font-semibold">{property.name}</h3>
//         <p className="text-sm text-gray-500 flex items-center mt-1">
//           <FaMapMarkerAlt className="mr-1" /> {property.location}
//         </p>

//         <p className="text-xl font-bold text-gray-800 mt-2">{property.price}</p>

//         <div className="flex items-center text-sm text-gray-500 mt-2 gap-4">
//           <span className="flex items-center gap-1">
//             <FaRulerCombined /> {property.features[0]}
//           </span>
//           <span className="flex items-center gap-1">
//             <FaLightbulb /> {property.features[1]}
//           </span>
//           <span className="flex items-center gap-1">
//             <FaDumbbell /> {property.features[2]}
//           </span>
//         </div>

//         <div className="flex items-center justify-between mt-4">
//           <button className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm hover:bg-green-600 transition">
//             View Property
//           </button>
//           <div className="text-gray-400 flex items-center gap-1 text-sm">
//             <FaHeart /> {property.type}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  FaMapMarkerAlt,
  FaHeart,
  FaRulerCombined,
  FaLightbulb,
  FaDumbbell,
  FaChevronCircleLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";
import { GiStreetLight } from "react-icons/gi";
import { TfiRulerAlt2 } from "react-icons/tfi";
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
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
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
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 bg-opacity-60 rounded-full p-2 shadow hover:bg-opacity-90"
        >
          <FaChevronLeft />
        </button>
        <button
          ref={nextRef}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 bg-opacity-60 rounded-full p-2 shadow hover:bg-opacity-90"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Property Info */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold">{property.name}</h4>
        <p className="text-sm text-gray-500 flex items-center mt-1">
          <FaMapMarkerAlt className="mr-1" /> {property.location}
        </p>

        <p className="text-lg font-bold text-gray-800 mt-2 flex justify-between">
          {property.price} <FaHeart />
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500 mt-2 gap-4">
            <span className="flex items-center gap-1">
              <TfiRulerAlt2 /> {property.features[0]}
            </span>
            <span className="flex items-center gap-1">
              <GiStreetLight /> {property.features[1]}
            </span>
            <span className="flex items-center gap-1">
              <FaDumbbell /> {property.features[2]}
            </span>
          </div>
          <div className="text-gray-400 flex items-center gap-1 text-sm">
            {property.type}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <Button
            label="View Property"
            className="bg-adron-green max-w-fit px-6"
          />
        </div>
      </div>
    </div>
  );
}
