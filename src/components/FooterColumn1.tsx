"use client";
import { useGetEquiryInfo, useGetMainAddress } from "@/data/hooks";
import Image from "next/image";
import React from "react";
import { LuPhone } from "react-icons/lu";

const FooterColumn1 = () => {
  const { data: mainAddressData, isLoading: loadingMainAdd } =
    useGetMainAddress();
  const { data: equiryData, isLoading: loadingEnq } = useGetEquiryInfo();
  const mainAdd = mainAddressData?.data.data ?? [];
  const enq = equiryData?.data.data ?? [];
  const address = mainAdd.find((item) => item.name === "Address");
  const email = enq.find((item) => item.name === "Email");
  const phone = enq.find((item) => item.name === "Phone Number");

  return (
    <div className="space-y-4">
      <Image
        src="/logo.svg" // Replace with your actual path
        alt="Adron Homes Logo"
        width={120}
        height={50}
        className="object-contain"
      />
      <p className="">{loadingMainAdd ? "Loading..." : `${address?.value}`}</p>
      <div className="space-y-1 text-adron-black font-medium">
        <h4 className="font-bold text-black">FOR ENQUIRIES</h4>
        <div className="flex items-center gap-2">
          <LuPhone />
          {loadingEnq ? (
            <a href="tel:+2348051011951">Loading...</a>
          ) : (
            <a href={`tel:${phone?.value}`}>{phone?.value}</a>
          )}
        </div>
        <div className="flex items-center gap-2">
          {/* <IoMail className="text-adron-green h-5 w-5" /> */}
          <Image src="/mail.svg" width={14} height={14} alt="mail" />
          {loadingEnq ? (
            <a href="mailto:telesales@adronhomes.com">Loading...</a>
          ) : (
            <a href={`mailto:${email?.value}`}>{email?.value}</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterColumn1;
