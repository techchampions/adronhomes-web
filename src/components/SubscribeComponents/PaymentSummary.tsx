import { Property } from "@/data/types/homepageTypes";
import React from "react";
import { useSubscribeFormData } from "../../../store/subscribeFormData.state";
import { formatPrice } from "@/utils/formater";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { useModal } from "../../../store/modal.store";
import PropertyTerms from "@/components/SubscribeComponents/PropertyTerms";
import PropertySpecifications from "@/components/SubscribeComponents/PropertySpecifications";
import Button from "@/components/Button";

interface Props {
  property: Property;
}
const PaymentSummary: React.FC<Props> = ({ property }) => {
  const {
    property_purpose,
    payment_duration,
    payment_schedule,
    payable_amount,
  } = useSubscribeFormData();
  const modal = useModal();
  const feesList = property?.details || [];
  const otherFeesData = feesList.filter(
    (item) => item.type === "others" && item.purpose === property_purpose
  );
  const infrastructureData = feesList.filter(
    (item) =>
      item.type === "infrastructure" && item.purpose === property_purpose
  );

  const otherFees =
    otherFeesData.reduce((sum, detail) => sum + detail.value, 0) ?? 0;
  const infrastructureFees =
    infrastructureData.reduce((sum, detail) => sum + detail.value, 0) ?? 0;
  let remPrice = property.price;
  if (remPrice != Number(payable_amount)) {
    remPrice = (property?.price || 0) - Number(payable_amount);
  }
  console.log("rem", property.price);
  const scheduledPaymentAmount =
    payment_schedule === "monthly"
      ? remPrice / Number(payment_duration || 1)
      : payment_schedule === "quarterly"
      ? remPrice / (Number(payment_duration || 1) / 3)
      : 0;

  const goBack = () => {
    modal.openModal(<PropertySpecifications property={property} />);
  };

  return (
    <div className="w-sm max-w-sm space-y-5">
      <div
        className="flex items-center gap-2 cursor-pointer absolute top-4 left-4"
        onClick={goBack}
      >
        <ArrowLeft /> Back
      </div>

      <h4 className="text-2xl font-bold mt-7">Payment Summary</h4>

      <div className="">
        <div className="grid grid-cols-2 divide divide-y-1 gap-y-2 divide-gray-300">
          <div className="text-gray-700">Infrasture Fees:</div>
          <div className="text-right">{formatPrice(infrastructureFees)}</div>
          <div className="text-gray-700">Other Fees:</div>
          <div className="text-right">{formatPrice(otherFees)}</div>
          <div className="text-sm col-span-2">
            After initial deposit you will be paying{" "}
            <u className="text-adron-green font-bold">
              {formatPrice(scheduledPaymentAmount)}
            </u>{" "}
            for {payment_duration} month(s){" "}
            {Number(payment_duration) > 1 ? payment_schedule : ""}.
          </div>
        </div>

        <div className="mt-6 bg-adron-black text-white text-start px-4 md:px-6 py-2 rounded-xl font-semibold flex flex-col">
          <div className="text-xl">{formatPrice(Number(payable_amount))}</div>
          <span className=" text-white/70">Total is Inital deposit.</span>
        </div>
        <p className="text-xs text-gray-400 mt-2 flex items-center gap-2">
          <Info className="h-5 w-5" />
          You can go package to select a preferred and conformtable payment
          plan.
        </p>
      </div>
      <div className="flex justify-between w-full gap-4 mt-4">
        <Button
          label="Proceed"
          className="bg-adron-green rounded-lg"
          onClick={() => {
            modal.openModal(<PropertyTerms property={property} />);
          }}
          rightIcon={<ArrowRight />}
        />
      </div>
    </div>
  );
};

export default PaymentSummary;
