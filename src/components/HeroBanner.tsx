import SocialIcons from "./SocialIcons";
import AutoCarousel from "./HomeCarousel";

const HeroBanner = ({ data, settings }) => {
  console.log("HeroBanner data", settings.social_link);
  return (
    <div className="relative w-full px-0 md:px-8 pb-8 pt-0 mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Social Icons - Mobile (Horizontal) */}
        <SocialIcons
          className="hidden md:block"
          social_link={settings.social_link}
        />

        {/* Banner Content */}
        <div className="aspect-[4/5] md:aspect-[16/9] overflow-hidden relative">
          <AutoCarousel slides={data} />
        </div>
      </div>
      <div className="flex-1">
        {/* Company Stats */}
        <div className="my-6 w-full md:w-[75%] mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 text-center">
            {settings.digital_count
              // .filter((_, index) => index < 3 || typeof window === "undefined") // fallback for SSR
              .map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-2 md:p-0 gap-6
        ${index >= 3 ? "hidden md:flex" : ""}
      `}
                >
                  <p className="text-xl md:text-7xl font-bold text-adron-gray-400 font-adron-title">
                    {stat.numeric}
                  </p>
                  <p className="text-[11px] text-adron-gray-500 font-Gotham">
                    {stat.name}
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
