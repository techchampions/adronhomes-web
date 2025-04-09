import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";

// app/about/page.tsx or pages/about.tsx
const profiles = [
  {
    name: "Aare Adetola Emmanuelking",
    title: "Chairman/CEO Adron Group",
    imageSrc: "/images/ceo.png",
  },
  {
    name: "Olofi Adetokunbo Emmanuelking",
    title: "Executive Vice Chairman Adron Group",
    imageSrc: "/images/GED.png",
  },
  {
    name: "Adenike Ajobo",
    title: "Managing Director Adron Group / PERMA / NEPA",
    imageSrc: "/images/ajobo.png",
  },
  {
    name: "Olubunmi Akinfe",
    title: "Deputy Managing Director",
    imageSrc: "/images/akinfe.png",
  },
  {
    name: "Shola Orunmuyiwa",
    title: "Group Company Secretary",
    imageSrc: "/images/orunmuyiwa.png",
  },
  {
    name: "Azure Ihuoma",
    title: "AMD Southern Nigeria",
    imageSrc: "/images/ihuoma.png",
  },
  {
    name: "Barbie Ette",
    title: "AMD Northern Nigeria",
    imageSrc: "/images/ette.png",
  },
  {
    name: "Arinaitwe Olaniyan",
    title: "DG Customer Service",
    imageSrc: "/images/olaniyan.png",
  },
  {
    name: "Adedotun Oni",
    title: "Director of Media and Corporate Communication",
    imageSrc: "/images/oni.png",
  },
  {
    name: "Mariam Kareem",
    title: "Director of Training and Development",
    imageSrc: "/images/kareem.png",
  },
  {
    name: "Ojebisi Samson",
    title: "Director of Treasury",
    imageSrc: "/images/samson.png",
  },
  {
    name: "Ayodele Bolaji",
    title: "Director of Corporate Finance",
    imageSrc: "/images/ayodele.png",
  },
  {
    name: "Omobola Alonge",
    title: "Director, Corporate Affairs and Culture",
    imageSrc: "/images/alonge.png",
  },
  {
    name: "Sumbo Oguntoye",
    title: "AMD Marketing and Design",
    imageSrc: "/images/oguntoye.png",
  },
];

export default function AboutPage() {
  return (
    <section className="w-full space-y-12">
      <div className="text-left pt-12 md:pt-20 p-5 md:px-20 mx-auto p-6 md:pb-12 bg-adron-gray">
        <h1 className="text-4xl font-bold mb-4 w-full md:w-[550px]">
          Building Affordable Homes, Creating Endless Possibilities
        </h1>
        <p className="text-gray-600 max-w-2xl text-left">
          At Adron Homes, we are committed to delivering quality, accessible,
          and affordable housing solutions. Our mission is to make homeownership
          a reality for everyone.
        </p>
      </div>

      <div className="flex flex-col bg-white rounded-[45px] md:rounded-[90px] py-10 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center justify-between p-4 md:p-24">
          <Image
            width={545}
            height={316}
            src="/images/mission.png"
            alt="Mission"
            className="rounded-lg"
          />
          <div className="w-full md:w-[400px]">
            <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-600 text-sm">
              We are daily driven to surpass our promises, increase our land
              bank, and offer affordable housing products with a singular
              mission to exceed expectations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center p-4 md:p-24">
          <div className="w-full md:w-[400px]">
            <h2 className="text-3xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-600 text-sm">
              To be the leading PAN-AFRICAN Real Estate Development company that
              will provide the highest number of decent, accessible, comfortable
              and affordable housing while achieving global housing standards.
            </p>
          </div>
          <Image
            width={545}
            height={316}
            src="/images/vision.png"
            alt="Vision"
            className="rounded-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center p-4 md:p-24">
          <Image
            width={545}
            height={316}
            src="/images/vision.png"
            alt="Core Values"
            className="rounded-lg "
          />
          <div>
            <h2 className="text-3xl font-semibold mb-2">Core Values</h2>
            <ul className="list-disc ml-5 text-gray-600 space-y-1 text-sm">
              <li>
                <strong>A - </strong>AFFORDABLE At ADRON, affordability is a key
                value. We are committed to making homeownership accessible to
                everyone by providing cost-effective property solutions without
                compromising on quality.
              </li>
              <li>
                <strong>D - </strong>DEPENDABLE Dependability defines ADRON’s
                approach. We build trust with our clients by consistently
                delivering on our promises and providing reliable support
                throughout the real estate process.
              </li>
              <li>
                <strong>R - </strong>RELIABLE Reliability is a cornerstone of
                our operations. At ADRON, we ensure that every interaction and
                transaction is handled with the utmost care and professionalism,
                giving you peace of mind.
              </li>
              <li>
                <strong>O - </strong>OFFER Our offers reflect our dedication to
                value and excellence. ADRON is committed to presenting unique
                opportunities and solutions that align with our clients’ needs
                and aspirations.
              </li>
              <li>
                <strong>N - </strong>NOW We believe in the power of acting now.
                At ADRON, we are proactive and responsive, ensuring that our
                clients never miss out on the best opportunities available in
                the real estate market.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-transparent justify-center p-4">
        <div className="flex flex-col text-center">
          <h3 className="text-3xl">Our Leadership</h3>
          <p className="text-sm">
            Our success is intrinsically linked to the excellent quality of our
            staff and management team.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <div className="grid grid-cols-2 mx-auto gap-6">
            {profiles.slice(0, 2).map((profile, index) => (
              <ProfileCard
                key={index}
                name={profile.name}
                title={profile.title}
                imageSrc={profile.imageSrc}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 mx-auto gap-6">
            {profiles.slice(2, 14).map((profile, index) => (
              <ProfileCard
                key={index}
                name={profile.name}
                title={profile.title}
                imageSrc={profile.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
