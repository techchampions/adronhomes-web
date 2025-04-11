


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
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const HeroBanner = () => {
  return (
    <div className="relative w-full px-4 sm:px-6 md:px-8 py-8 mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Social Icons - Mobile (Horizontal) */}
        <div className="flex md:hidden justify-center gap-6 mb-6">
          {[FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Social Icons - Desktop (Vertical) */}
        <div className="hidden md:flex flex-col gap-6 mr-8 lg:mr-12 mt-16">
          {[FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </div>

        {/* Banner Content */}
        <div className="flex-1">
          {/* Hero Banner Image */}
          <div className="w-full aspect-[16/9] md:w-[1485px] md:h-[800px] rounded-3xl md:rounded-[50px] overflow-hidden relative mx-auto">
            <Image
              src="/images/hero-image.png"
              alt="Lemon Friday Promo - Become A Property Owner This Season"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1485px"
            />
          </div>

          {/* Company Stats */}
          <div className="mt-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 text-center">
              {[
                { value: "100+", label: "Satisfied clients" },
                { value: "150+", label: "Properties" },
                { value: "30", label: "Locations" },
                { value: "500+", label: "Team Members" },
                { value: "20+", label: "Yrs of exp." },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-2 md:p-0">
                  <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-600 font-Gotham">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 font-Gotham">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;