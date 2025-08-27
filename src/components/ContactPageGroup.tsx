"use client";
import { useContactpage } from "@/data/hooks";
import { LuPhone } from "react-icons/lu";
import dynamic from "next/dynamic";

// import Map from "./Map";
import Loader from "./Loader";
import ApiErrorBlock from "./ApiErrorBlock";
import ContactColumn1 from "@/components/ContactColumn1";
import ContactColumn2 from "@/components/ContactColumn2";
const Map = dynamic(() => import("./Map"), { ssr: false });

export default function ContactPageGroup() {
  const { data, isLoading, isError } = useContactpage();

  if (isLoading) return <Loader />;
  if (isError) return <ApiErrorBlock />;
  if (!isError) {
    console.log("image", data);
  }
  const branches = data?.data.contact.office_info;

  return (
    <div className="py-5 px-4 md:px-10 space-y-10">
      <div className="py-0">
        <h1 className="contact-title text-center text-6xl mt-2 font-bold">
          {data?.data.contact.office_header[0].header}
        </h1>
        <p className=" text-center font-bold text-sm">
          {data?.data.contact.office_header[0].description}
        </p>
      </div>
      <Map lat={6.6213} lng={3.3678} />
      <div className="flex flex-col w-full md:w-[80%] px-4 mx-auto">
        <h4 className="text-sm font-bold text-black mb-3">
          For Inquiries, contact
        </h4>
        <div className="flex flex-col md:flex-row justify-between w-full text-xs mx-auto gap-10 text-gray-500">
          <ContactColumn1 />
          <ContactColumn2 />
          <div className="flex flex-col space-y-2">
            <h4 className="text-sm font-bold text-black">
              24 Hours Call Centre
            </h4>
            <div className="flex gap-1 items-center">
              <LuPhone />
              <span>+2348108338099</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-[50px] py-10 md:py-24 mb-8 px-4 md:px-10">
        <h1 className="text-center pb-6 md:pb-20 text-black text-2xl font-bold">
          Office Locations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-x-[400px] gap-y-10 w-full md:w-[75%] mx-auto">
          {branches?.map((branch, index) => (
            <div className="text-xs text-gray-600 w-fit space-y-1" key={index}>
              <div className="text-black font-medium text-sm">
                {branch.office_name}
              </div>
              <p>{branch.office_address}</p>
              <p>
                {branch.first_contact} {branch.second_contact}{" "}
                {branch.third_contact}
              </p>
              <p>{branch.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
