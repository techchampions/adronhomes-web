// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaTiktok,
//   FaWhatsapp,
// } from "react-icons/fa";

// interface SocialIconsProps {
//   className?: string;
// }

// const SocialIcons: React.FC<SocialIconsProps> = ({
//   className = "",
//   social_link,
// }) => {
//   return (
//     <div className={`social-media ${className}`}>
//       {/* Social Icons - Mobile (Horizontal) */}
//       <div className="flex md:hidden justify-center gap-6 mb-6">
//         {[FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp].map(
//           (Icon, index) => (
//             <a
//               key={index}
//               href="#"
//               className="text-gray-500 hover:text-gray-700 transition-colors"
//             >
//               <Icon size={24} />
//             </a>
//           )
//         )}
//       </div>

//       {/* Social Icons - Desktop (Vertical) */}
//       <div className="hidden md:flex flex-col gap-6 mr-0 mt-20 pl-12 pr-4">
//         {[FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp].map(
//           (Icon, index) => (
//             <a
//               key={index}
//               href="#"
//               className="text-adron-gray-500 hover:text-gray-700 transition-colors"
//             >
//               <Icon size={20} />
//             </a>
//           )
//         )}
//       </div>
//     </div>
//   );
// };
// export default SocialIcons;
import { SocialLink } from "@/data/types/homepageTypes";
import { JSX } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

interface SocialIconsProps {
  className?: string;
  social_link: SocialLink[] | undefined;
}

const platformIcons: Record<string, JSX.Element> = {
  Facebook: <FaFacebook size={20} />,
  Instagram: <FaInstagram size={20} />,
  X: <FaTwitter size={20} />,
  Tiktok: <FaTiktok size={20} />,
  Whatsapp: <FaWhatsapp size={20} />,
  Linkedin: <FaLinkedin size={20} />,
  Location: <FaMapMarkerAlt size={20} />,
  Email: <FaEnvelope size={20} />,
  "Phone Number": <FaPhone size={20} />,
};

const buildHref = (name: string, string: string) => {
  if (name === "Whatsapp") return `https://wa.me/${string.replace(/\D/g, "")}`;
  if (name === "Email") return `mailto:${string}`;
  if (name === "Phone Number") return `tel:${string}`;
  if (name === "Location" || name === "Address") return "#";
  return string.startsWith("http") ? string : `https://${string}`;
};

const SocialIcons: React.FC<SocialIconsProps> = ({
  className = "",
  social_link,
}) => {
  const filteredLinks = social_link?.filter((link) => platformIcons[link.name]);

  return (
    <div className={`social-media ${className}`}>
      {/* Mobile (Horizontal) */}
      <div className="flex md:hidden justify-center gap-6 mb-6">
        {filteredLinks?.map((link, index) => (
          <a
            key={index}
            href={buildHref(link.name, link.string)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            {platformIcons[link.name]}
          </a>
        ))}
      </div>

      {/* Desktop (Vertical) */}
      <div className="hidden md:flex flex-col gap-6 mr-0 mt-20 pl-12 pr-4">
        {filteredLinks?.map((link, index) => (
          <a
            key={index}
            href={buildHref(link.name, link.string)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-adron-gray-500 hover:text-gray-700 transition-colors"
          >
            {platformIcons[link.name]}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
