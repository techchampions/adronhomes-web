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

interface Props {
  property: Property;
}
const SelectPaymentMethod: React.FC<Props> = ({ property }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const { openModal } = useModal();
  const { contract_email, contract_subscriber_name_1 } = useSubscribeFormData();
  const paystack = usePaystackPayment();
  const interswitch = useInterswitchPayment();
  const handleContinue = () => {
    if (selectedPaymentMethod == "Interswitch") {
      interswitch({
        email: contract_email || "",
        customerName: contract_subscriber_name_1 || "",
        amount: 1000000, // in Naira
        reference: "dgdgdg",
        merchant_code: "merchant_code",
        payment_item_id: "payable_code",
        onSuccess: () => {
          openModal(
            <PaymentStatus
              status="success"
              text="Payment received successfully."
            />
          );
        },
        onClose: () => {
          openModal(<PaymentStatus status="failed" text="Payment canceled." />);
        },
      });
    } else if (selectedPaymentMethod == "Paystack") {
      paystack({
        email: contract_email || "",
        amount: 10000000, // in Naira
        reference: "sfusfui",
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
          openModal(<PaymentStatus status="failed" text="Payment canceled." />);
        },
      });
    } else if (selectedPaymentMethod == "Virtual Wallet") {
      console.log("virtual wallet");
    }
  };
  const goBack = () => {
    openModal(<PropertyTerms property={property} />);
  };

  return (
    <div className="flex flex-col">
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
          <b className="text-black">({formatPrice(100000)})</b>.
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-4 min-h-[300px] justify-between">
        <div className="flex flex-col gap-2">
          <div
            className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all ${
              selectedPaymentMethod === "Bank Transfer"
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
                  selectedPaymentMethod == "Bank Transfer"
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
