// import Image from "next/image";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaTiktok,
//   FaWhatsapp,
// } from "react-icons/fa";

// const HeroBanner = () => {
//   return (
//     <div className="relative w-full px-8 sm:px-6 md:px-8 py-8 mx-auto">
//       <div className="flex">
//         <div className="hidden md:flex flex-col gap-6 mr-8 lg:mr-12 mt-16">
//           <a
//             href="#"
//             className="text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             <FaFacebook size={30} />
//           </a>
//           <a
//             href="#"
//             className="text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             <FaInstagram size={30} />
//           </a>
//           <a
//             href="#"
//             className="text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             <FaTwitter size={30} />
//           </a>
//           <a
//             href="#"
//             className="text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             <FaTiktok size={30} />
//           </a>
//           <a
//             href="#"
//             className="text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             <FaWhatsapp size={30} />
//           </a>
//         </div>

//         {/* Banner Content */}
//         <div className="flex-1">
//           {/* Hero Banner Image with exact dimensions */}
//           <div className="w-[1485px] h-[800px] rounded-[50px] overflow-hidden relative">
//             <Image
//               src="/images/hero-image.png"
//               alt="Lemon Friday Promo - Become A Property Owner This Season"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Company Stats */}
//           <div className="mt-6 max-w-4xl mx-auto">
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
//               <div className="flex flex-col items-center">
//                 <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">
//                   100+
//                 </p>
//                 <p className="text-xs text-gray-500">Satisfied clients</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">
//                   150+
//                 </p>
//                 <p className="text-xs text-gray-500">Properties</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">
//                   30
//                 </p>
//                 <p className="text-xs text-gray-500">Locations</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">
//                   500+
//                 </p>
//                 <p className="text-xs text-gray-500">Team Members</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">
//                   20+
//                 </p>
//                 <p className="text-xs text-gray-500">Yrs of exp.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;

import Image from "next/image";
import SocialIcons from "./SocialIcons";

const HeroBanner = () => {
  return (
    <div className="relative w-full px-4 sm:px-6 md:px-8 py-8 mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Social Icons - Mobile (Horizontal) */}
        <SocialIcons className="hidden md:block" />

        {/* Banner Content */}
        {/* Hero Banner Image */}
        <div className="w-full aspect-[16/9] md:h-[700px] rounded-3xl md:rounded-[50px] overflow-hidden relative mx-auto">
          <Image
            src="/images/hero-image.png"
            alt="Lemon Friday Promo - Become A Property Owner This Season"
            fill
            className="object-cover"
            priority
            // sizes="(max-width: 768px) 100vw, 1485px"
          />
        </div>
      </div>
      <div className="flex-1">
        {/* Company Stats */}
        <div className="my-6 w-full md:w-[75%] mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 text-center">
            {[
              { value: "100+", label: "Satisfied clients" },
              { value: "150+", label: "Properties" },
              { value: "30", label: "Locations" },
              { value: "500+", label: "Team Members" },
              { value: "20+", label: "Yrs of exp." },
            ]
              .filter((_, index) => index < 3 || typeof window === "undefined") // fallback for SSR
              .map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-2 md:p-0 gap-6
        ${index >= 3 ? "hidden md:flex" : ""}
      `}
                >
                  <p className="text-xl md:text-7xl font-bold text-adron-gray-400 font-adron-title">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-adron-gray-500 font-Gotham">
                    {stat.label}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
