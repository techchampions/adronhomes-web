"use client";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import { useAboutpage } from "@/data/hooks";
import Loader from "./Loader";
import ApiErrorBlock from "./ApiErrorBlock";

export default function AboutPageGroup() {
  const { data, isLoading, isError } = useAboutpage();

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <ApiErrorBlock />
      // <div className="text-center text-red-500 p-10">
      //   Failed to load About Page data.
      // </div>
    );
  if (!isError) {
    console.log("image", data?.data.mission[0].image);
  }
  return (
    <section className="w-full space-y-12">
      <div className="text-left pt-8 md:pt-20 p-5 md:ml-[20px]  md:px-[200px] md:mx-auto md:pb-2 bg-adron-gray">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 w-full leading-0">
          {/* Building Affordable Homes,
          <br /> Creating Endless Possibilities */}
          {data?.data.aboutUs[0].header}
        </h1>
        <p className="text-adron-black font-bold text-left text-[14px] md:text-[15px] leading-relaxed">
          {/* At Adron Homes, we are committed to delivering quality, accessible,
          and affordable housing solutions. Our mission is to <br /> make
          homeownership a reality for everyone. */}
          {data?.data.aboutUs[0].description}
        </p>
      </div>

      <div className="flex flex-col bg-white rounded-[45px] md:rounded-[90px] py-10 md:py-14 w-full space-y-10 md:space-y-32 md:px-18">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between px-4 md:px-18">
          <div className="h-[350px] w-full md:h-[430px] md:w-[500px] relative rounded-[50px] overflow-hidden">
            <Image
              fill
              // src="/images/mission.png"
              src={data?.data.mission[0].image || ""}
              alt="Mission"
              className="rounded-[50px] object-cover"
            />
          </div>
          <div className="w-full md:w-[500px]">
            <h2 className="text-[28px] md:text-5xl font-bold mb-2">
              {/* Our Mission */}
              {data?.data.mission[0].header}
            </h2>
            <p className="text-adron-black text-[14px]">
              {/* We are daily driven to keep our promise, increase our land bank,
              expand our client base offering excellent services and affordable
              housing products with a singular mission to exceed expectations.{" "} */}
              {data?.data.mission[0].description}
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between md:flex-row gap-10 items-center px-4 md:px-18">
          <div className="w-full md:w-[500px]">
            <h2 className="text-[28px] md:text-5xl font-semibold mb-2">
              {/* Our Vision */}
              {data?.data.vision[0].header}
            </h2>
            <p className="text-adron-black text-[14px]">
              {data?.data.vision[0].description}
              {/* To be the leading PAN-AFRICAN Real Estate Development company that
              will provide the highest number of decent, accessible, comfortable
              and affordable housing while achieving global housing standards. */}
            </p>
          </div>
          <div className="h-[350px] w-full md:h-[430px] md:w-[500px] relative rounded-[50px] overflow-hidden">
            <Image
              fill
              // src="/images/mission.png"
              src={data?.data.vision[0].image || ""}
              alt="Vision"
              className="rounded-[50px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 items-center px-4 md:px-24">
          <div className="h-[350px] w-full md:h-[430px] md:w-[500px] relative rounded-[50px] overflow-hidden">
            <Image
              fill
              // src="/images/mission.png"
              src={data?.data.values[0].image || ""}
              alt="values"
              className="rounded-[50px] object-cover"
            />
          </div>
          <div className="w-full md:w-[43%]">
            <h2 className="text-[28px] md:text-5xl font-bold mb-2">
              {/* Core Values */}
              {data?.data.values[0].header}
            </h2>
            <ul className="list-disc text-adron-black space-y-1 text-xs leading-relaxed pl-3">
              {data?.data.values[0].list_description.map((list) => (
                <li key={list}>
                  {list}
                  {/* <strong className="text-black">A </strong>- AFFORDABLE At ADRON,
                affordability is a key value. We are committed to making
                homeownership accessible to everyone by providing cost-effective
                property solutions without compromising on quality. */}
                </li>
              ))}
              {/* <li>
                <strong className="text-black">A </strong>- AFFORDABLE At ADRON,
                affordability is a key value. We are committed to making
                homeownership accessible to everyone by providing cost-effective
                property solutions without compromising on quality.
              </li>
              <li>
                <strong className="text-black">D </strong>- DEPENDABLE
                Dependability defines ADRON’s approach. We build trust with our
                clients by consistently delivering on our promises and providing
                reliable support throughout the real estate process.
              </li>
              <li>
                <strong className="text-black">R </strong>- RELIABLE Reliability
                is a cornerstone of our operations. At ADRON, we ensure that
                every interaction and transaction is handled with the utmost
                care and professionalism, giving you peace of mind.
              </li>
              <li>
                <strong className="text-black">O </strong>- OFFER Our offers
                reflect our dedication to value and excellence. ADRON is
                committed to presenting unique opportunities and solutions that
                align with our clients’ needs and aspirations.
              </li>
              <li>
                <strong className="text-black">N </strong>- NOW We believe in
                the power of acting now. At ADRON, we are proactive and
                responsive, ensuring that our clients never miss out on the best
                opportunities available in the real estate market.
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <section id="leadership">
        <div className="flex flex-col bg-transparent justify-center p-4">
          <div className="flex flex-col text-center py-6">
            <h3 className="text-[28px] md:text-4xl font-bold mb-2">
              {data?.data.leadershipText[0].header}
              {/* Our Leadership */}
            </h3>
            <p className="text-xs text-adron-black w-[360px] mx-auto">
              {data?.data.leadershipText[0].description}
              {/* Our success is intrinsically linked to the excellent quality of our
            staff and management team. */}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="grid grid-cols-2 mx-auto gap-10">
              {data?.data.leaderships.slice(0, 2).map((profile, index) => (
                <ProfileCard
                  key={index}
                  name={profile.name}
                  title={profile.position}
                  imageSrc={profile.picture}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 mx-auto gap-10">
              {data?.data.leaderships
                .slice(2, data.data.leaderships.length)
                .map((profile, index) => (
                  <ProfileCard
                    key={index}
                    name={profile.name}
                    title={profile.position}
                    imageSrc={profile.picture}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
