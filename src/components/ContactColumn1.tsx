"use client";
import { useGetEquiryInfo, useGetMainAddress } from "@/data/hooks";
import React from "react";
import { LuMail, LuPhone } from "react-icons/lu";

const ContactColumn1 = () => {
  const { data: mainAddressData, isLoading: loadingMainAdd } =
    useGetMainAddress();
  const { data: equiryData, isLoading: loadingEnq } = useGetEquiryInfo();
  const mainAdd = mainAddressData?.data.data ?? [];
  const enq = equiryData?.data.data ?? [];
  const address = mainAdd.find((item) => item.name === "Address");
  const email = enq.find((item) => item.name === "Email");
  const phone = enq.find((item) => item.name === "Phone Number");

  return (
    <div className="flex flex-col space-y-2">
      <h4 className="text-sm font-bold text-black">Corporate Headquarters</h4>
      {loadingMainAdd ? <p>Loading...</p> : <p>{address?.value}</p>}
      <div className="flex gap-1 items-center">
        <LuPhone />
        {loadingEnq ? <p>Loading...</p> : <span>{phone?.value}</span>}
      </div>
      <div className="flex gap-1 items-center">
        <LuMail />
        {loadingEnq ? <p>Loading...</p> : <span>{email?.value}</span>}
      </div>
    </div>
  );
};

export default ContactColumn1;
