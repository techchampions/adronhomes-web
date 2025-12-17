import React, { useState } from "react";
import Button from "../Button";
import { useModal } from "../../../store/modal.store";
import { Property } from "@/data/types/homepageTypes";
import { formatPrice } from "@/utils/formater";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
// import PropertySpecifications from "@/components/SubscribeComponents/PropertySpecifications";
import { usePaystackPayment } from "@/hooks/usePaystack";
import { useSubscribeFormData } from "../../../store/subscribeFormData.state";
import PaymentStatus from "@/components/SubscribeComponents/PaymentStatus";
import { useInterswitchPayment } from "@/hooks/useInterswitch";
import PropertyTerms from "@/components/SubscribeComponents/PropertyTerms";
import { useSubscribe } from "@/hooks/useSubcribe";
import { subscribePayload } from "@/data/api";
import StartingPayment from "@/components/SubscribeComponents/StartingPayment";

interface Props {
  property: Property;
}
const SelectPaymentMethod: React.FC<Props> = ({ property }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const { openModal } = useModal();
  const {
    contract_email,
    contract_business_type,
    contract_marital_status,
    contract_gender,
    contract_date_of_birth,
    start_date,
    end_date,
    contract_nationality,
    contract_next_of_kin,
    contract_next_of_kin_relationship,
    contract_residential_address,
    contract_subscriber_name_1,
    contract_subscriber_name_2,
    contract_subscriber_name_3,
    total_amount,
    marketID,
    payment_type,
    payment_duration,
    payment_schedule,
    units,
    property_purpose,
    contract_town,
    contract_state,
    contract_country,
    contract_occupation,
    contract_employer,
    contract_sms,
    contract_employer_address,
    contract_next_of_kin_phone,
    contract_profile_picture,
    contract_profile_picture2,
    contract_idFiles,
  } = useSubscribeFormData();
  const paystack = usePaystackPayment();
  const interswitch = useInterswitchPayment();
  const { mutate: subscribe, isPending } = useSubscribe();
  const handleContinue = () => {
    interface PaymentResponse {
      success: boolean;
      message: string;
      payment_method: string;
      reference: string;
      payable_code: string;
      merchant_code: string;
    }
    const payload: subscribePayload = {
      marketID: marketID,
      contract_business_type: contract_business_type,
      contract_subscriber_name_1: contract_subscriber_name_1,
      contract_subscriber_name_2: contract_subscriber_name_2,
      contract_subscriber_name_3: contract_subscriber_name_3,
      // contract_additional_name: contract_additional_name,
      contract_marital_status: contract_marital_status,
      contract_gender: contract_gender,
      contract_date_of_birth: contract_date_of_birth,
      contract_nationality: contract_nationality,
      contract_residential_address: contract_residential_address,
      contract_town: contract_town,
      contract_state: contract_state,
      contract_country: contract_country,
      contract_email: contract_email,
      contract_sms: contract_sms,
      contract_employer_address: contract_employer_address,
      contract_occupation: contract_occupation,
      contract_employer: contract_employer,
      contract_next_of_kin_phone: contract_next_of_kin_phone,
      // contract_next_of_kin_address: contract_next_of_kin_address,
      contract_next_of_kin: contract_next_of_kin,
      contract_next_of_kin_relationship: contract_next_of_kin_relationship,
      contract_profile_picture: contract_profile_picture,
      contract_profile_picture_2: contract_profile_picture2,
      means_of_ids: contract_idFiles,
      payment_method: "interswitch",
      payment_type: payment_type == "One Time" ? 1 : 2,
      monthly_duration: Number(payment_duration),
      property_id: Number(property?.id),
      start_date: start_date,
      end_date: end_date,
      repayment_schedule: payment_schedule,
      paid_amount: total_amount,
      marketer_code: marketID,
      number_of_unit: units,
      purpose: property_purpose,
    };
    if (selectedPaymentMethod == "Interswitch") {
      subscribe(payload, {
        onSuccess(data: PaymentResponse) {
          interswitch({
            email: contract_email || "",
            customerName: contract_subscriber_name_1 || "",
            amount: Number(total_amount), // in Naira
            reference: data.reference,
            merchant_code: data.merchant_code,
            payment_item_id: data.payable_code,
            onSuccess: () => {
              openModal(
                <PaymentStatus
                  status="success"
                  text="Payment received successfully."
                />
              );
            },
            onClose: () => {
              openModal(
                <PaymentStatus status="failed" text="Payment canceled." />
              );
            },
          });
        },
      });
    } else if (selectedPaymentMethod == "Paystack") {
      subscribe(payload, {
        onSuccess(data: PaymentResponse) {
          paystack({
            email: contract_email || "",
            amount: Number(total_amount), // in Naira
            reference: data.reference,
            onSuccess: () => {
              openModal(
                <PaymentStatus
                  status="success"
                  text="Payment received successfully."
                />
              );

              // TODO: call your backend API to confirm payment
            },
            onClose: () => {
              // openModal(<PaymentStatus status="failed" text="Payment canceled." />);
            },
          });
        },
      });
    } else if (selectedPaymentMethod == "Virtual Wallet") {
      console.log("virtual wallet");
    }
  };
  const goBack = () => {
    openModal(<PropertyTerms property={property} />);
  };
  if (isPending) {
    return <StartingPayment paymentMethod={selectedPaymentMethod || ""} />;
  }
  return (
    <div className="flex flex-col w-sm max-w-sm">
      <div
        className="flex items-center gap-2 cursor-pointer absolute top-4 left-4"
        onClick={goBack}
      >
        <ArrowLeft /> Back
      </div>

      <div className="flex flex-col mt-7">
        <div className="text-2xl font-bold">Select Payment Method</div>
        <p className="text-gray-400 text-xs">
          Select your preferred payment method for your plan{" "}
          {/* <b className="text-black">({formatPrice(Number(total_amount))})</b>. */}
        </p>
        <div className="grid grid-cols-2 text-sm border mt-2 border-adron-green rounded-lg p-2 bg-[#e2f7c9]">
          <div className="">Total payable:</div>
          <div className="text-right text-bold">
            {formatPrice(Number(total_amount))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4 min-h-[300px] justify-between">
        <div className="flex flex-col gap-2">
          <div
            className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all ${
              selectedPaymentMethod === "Interswitch"
                ? "bg-adron-green text-white border-none "
                : "bg-transparent border  border-gray-300"
            }`}
            onClick={() => setSelectedPaymentMethod("Interswitch")}
          >
            <Image
              height={100}
              width={100}
              src="/Interswitch.svg"
              alt="bank transfer"
              className="h-10 w-10 rounded-full border border-green-200 p-2 bg-white"
            />
            <div>
              <p className="font-adron-mid text-sm">Interswitch</p>
              <p
                className={`text-xs ${
                  selectedPaymentMethod == "Interswitch"
                    ? `text-white`
                    : `text-gray-500`
                } `}
              >
                Pay with Interswitch
              </p>
            </div>
          </div>

          <div
            className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all ${
              selectedPaymentMethod === "Paystack"
                ? "bg-adron-green text-white border-none "
                : "bg-transparent border  border-gray-300"
            }`}
            onClick={() => setSelectedPaymentMethod("Paystack")}
          >
            <Image
              height={100}
              width={100}
              src="/paystack-icon.svg"
              alt="paystack"
              className="h-10 w-10 rounded-full border border-green-200"
            />
            <div>
              <p className="font-adron-mid text-sm">Paystack</p>
              <p
                className={`text-xs ${
                  selectedPaymentMethod == "Paystack"
                    ? `text-white`
                    : `text-gray-500`
                } `}
              >
                Pay with Paystack
              </p>
            </div>
          </div>
        </div>
        <div className="">
          {/* <div className="flex items-center gap-2">
            <div className="cursor-pointer" onClick={() => setagreed(!agreed)}>
              <CheckSquare2
                size={20}
                className={`${agreed ? "text-adron-green" : "text-gray-500"}`}
              />
            </div>
            <div className="text-xs">
              Yes, I agree with the property{" "}
              <a href="" className="text-blue-500 underline">
                terms and policies
              </a>
              .
            </div>
          </div> */}

          <div className="flex justify-between w-full gap-4 mt-4">
            <Button
              label="Make Payment"
              // isLoading={isPaying}
              className="rounded-lg bg-black text-white"
              onClick={handleContinue}
              disabled={!selectedPaymentMethod}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
