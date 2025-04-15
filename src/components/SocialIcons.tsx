import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className = "" }) => {
  return (
    <div className={`social-media ${className}`}>
      {/* Social Icons - Mobile (Horizontal) */}
      <div className="flex md:hidden justify-center gap-6 mb-6">
        {[FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp].map(
          (Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Icon size={24} />
            </a>
          )
        )}
      </div>

      {/* Social Icons - Desktop (Vertical) */}
      <div className="hidden md:flex flex-col gap-6 mr-8 lg:mr-12 mt-16">
        {[FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp].map(
          (Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Icon size={30} />
            </a>
          )
        )}
      </div>
    </div>
  );
};
export default SocialIcons;
