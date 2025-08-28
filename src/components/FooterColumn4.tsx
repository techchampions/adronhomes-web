"use client";
import { useGetClientsContact, useGetComplainsContact } from "@/data/hooks";
import React from "react";

const FooterColumn4 = () => {
  const { data: complaintdata, isLoading: loadingComp } =
    useGetComplainsContact();
  const { data: clientData, isLoading: loadingCli } = useGetClientsContact();
  const clientContact = clientData?.data.data ?? [];
  const complaint = complaintdata?.data.data ?? [];
  const address = clientContact.find((item) => item.name === "Address");
  const email = clientContact.find((item) => item.name === "Email");
  const phone = clientContact.find((item) => item.name === "Phone Number");
  const onComplaint = complaint.find(
    (item) => item.name === "Online Complaint"
  );

  return (
    <div className="block">
      <h4 className="font-bold mb-3 text-black">CLIENT SERVICES</h4>
      {loadingCli ? (
        <>
          <p className=" mb-4">Loading...</p>
          <p>Loading...</p>
          <p className="text-wrap break-words">Loading...</p>
        </>
      ) : (
        <>
          <p className=" mb-4">{address?.value}</p>
          <p>{phone?.value}</p>
          <p className="text-wrap break-words">{email?.value}</p>
        </>
      )}

      <h4 className="font-bold mt-3 text-black">
        Online Complaints & Resolution:
      </h4>
      {loadingComp ? (
        <p className="break-words">Loading...</p>
      ) : (
        <p className="break-words">{onComplaint?.value}</p>
      )}
    </div>
  );
};

export default FooterColumn4;
