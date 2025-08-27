import ClientPartnershipForm from "@/components/ClientPartnershipForm";
import ClientPartnershipHeader from "@/components/ClientPartnershipHerader";
import React from "react";

const page: React.FC = () => {
  return (
    <div>
      <ClientPartnershipHeader />
      <ClientPartnershipForm />
    </div>
  );
};

export default page;
