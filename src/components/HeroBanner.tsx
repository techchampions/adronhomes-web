import SocialIcons from "./SocialIcons";
import { AutoCarousel, MobileAutoCarousel } from "./HomeCarousel";

const HeroBanner = ({ data, settings }) => {
  console.log("HeroBanner data", settings.social_link);
  return (
    <div className="relative w-full px-0 md:px-8 pb-0 md:pb-8 pt-0 mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Social Icons - Mobile (Horizontal) */}
        <SocialIcons
          className="hidden md:block"
          social_link={settings.social_link}
        />

        {/* Banner Content */}
        <div className="aspect-[4/5] md:aspect-[16/9] overflow-hidden relative hidden md:block">
          <AutoCarousel slides={data} />
        </div>
        <div className="block md:hidden">
          <MobileAutoCarousel slides={data} />
        </div>
        {/* {window.innerWidth >= 765 ? (
          <AutoCarousel slides={data} />
        ) : (
          <MobileAutoCarousel slides={data} />
        )} */}
      </div>
      <div className="flex-1">
        {/* Company Stats */}
        <div className="mb-0 -mt-4 md:mb-6 md:mt-6 w-full md:w-[75%] mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 text-center">
            {settings.digital_count
              // .filter((_, index) => index < 3 || typeof window === "undefined") // fallback for SSR
              .map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center md:p-0 gap-1 md:gap-6
        ${index >= 3 ? "hidden md:flex" : ""}
      `}
                >
                  <p className="text-5xl md:text-7xl font-bold text-adron-gray-400 font-adron-title">
                    {stat.value}
                  </p>
                  <p className="text-[11px] md:text-[14px] text-adron-gray-500 font-Gotham">
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
