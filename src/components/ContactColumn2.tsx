"use client";
import { useGetClientsContact } from "@/data/hooks";
import React from "react";
import { LuMail, LuPhone } from "react-icons/lu";

const ContactColumn2 = () => {
  //   const { data: complaintdata, isLoading: loadingComp } =
  //     useGetComplainsContact();
  const { data: clientData, isLoading: loadingCli } = useGetClientsContact();
  const clientContact = clientData?.data.data ?? [];
  //   const complaint = complaintdata?.data.data ?? [];
  const address = clientContact.find((item) => item.name === "Address");
  const email = clientContact.find((item) => item.name === "Email");
  const phone = clientContact.find((item) => item.name === "Phone Number");
  //   const onComplaint = complaint.find(
  //     (item) => item.name === "Online Complaint"
  //   );

  return (
    <div className="flex flex-col space-y-2">
      <h4 className="text-sm font-bold text-black">Client Services</h4>
      {loadingCli ? <p>Loading...</p> : <p>{address?.value}</p>}
      <div className="flex gap-1 items-center">
        <LuPhone />
        {loadingCli ? <p>Loading...</p> : <span>{phone?.value}</span>}
      </div>
      <div className="flex gap-1 items-center">
        <LuMail />
        {loadingCli ? <p>Loading...</p> : <span>{email?.value}</span>}
      </div>
    </div>
  );
};

export default ContactColumn2;
