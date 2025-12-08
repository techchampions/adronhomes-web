import Button from "../Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useModal } from "../../../store/modal.store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Property } from "@/data/types/homepageTypes";
import SelectInput from "@/components/FormComponents/SelectInput";
import DatePickerInput from "@/components/FormComponents/CustomDateInput";
import InputIdentityInfo from "@/components/SubscribeComponents/InputIdentity";
import SelectPaymentMethod from "@/components/SubscribeComponents/SelectPaymentMethod";

const validationSchema = Yup.object().shape({
  property_size: Yup.string().required("required"),
  payment_duration: Yup.string().required("required"),
  payment_schedule: Yup.string().required("required"),
});
interface Props {
  property: Property;
}
const initialValues = {
  property_size: "",
  payment_duration: "",
  payment_schedule: "",
};
const SIZE_OPTIONS = [
  { label: "200 sqm", value: "200 sqm" },
  { label: "400 sqm", value: "400 sqm" },
  { label: "700 sqm", value: "700 sqm" },
];
const DURATION_OPTIONS = [
  { label: "2 Months", value: "2 Months" },
  { label: "4 Months", value: "4 Months" },
  { label: "7 Months", value: "7 Months" },
];
const SCHEDULE_OPTIONS = [
  { label: "Monthly", value: "Monthly" },
  { label: "Quaterly", value: "Quaterly" },
  { label: "Yearly", value: "Yearly" },
];

const PropertySpecifications: React.FC<Props> = ({ property }) => {
  const action = useModal();
  const goBack = () => {
    action.openModal(<InputIdentityInfo property={property} />);
  };
  return (
    <div className="flex flex-col max-w-sm max-h-[70vh] overflow-y-scroll scrollbar-hide">
      <div
        className="flex items-center gap-2 cursor-pointer absolute top-4 left-4"
        onClick={goBack}
      >
        <ArrowLeft /> Back
      </div>

      <div className="flex flex-col mt-5">
        <div className="text-2xl font-bold">Subscribe to {property.name}</div>
      </div>
      <div className="flex flex-col justify-between mt-7">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {
            action.openModal(<SelectPaymentMethod property={property} />);
          }}
        >
          {({ isValid, dirty }) => (
            <Form className="flex flex-col gap-8 justify-between min-h-[220px]">
              <div className="space-y-7">
                <div className="space-y-1">
                  <div className="text-lg">Select your property size</div>
                  <SelectInput
                    name="property_size"
                    options={SIZE_OPTIONS}
                    className="py-3 bg-adron-body"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-lg">Select payment duration</div>
                  <SelectInput
                    name="payment_duration"
                    options={DURATION_OPTIONS}
                    className="py-3 bg-adron-body"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-lg">Select Payment schedule</div>
                  <SelectInput
                    name="payment_schedule"
                    options={SCHEDULE_OPTIONS}
                    className="py-3 bg-adron-body"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="">
                  <div className="">Start Date</div>
                  <DatePickerInput
                    name="start_date"
                    minDate={new Date()}
                    placeholder={`DD-MM-YYYY`}
                  />
                </div>
                <div className="">
                  <div className="">End Date</div>
                  <DatePickerInput name="end_date" placeholder="DD-MM-YYYY" />
                </div>
              </div>
              <div className="flex justify-center w-full gap-4 mt-4">
                {/* <Button
                  div="Back"
                  icon={<ArrowLeft />}
                  className="bg-black rounded-lg"
                  onClick={goBack}
                /> */}
                <Button
                  label="Proceed"
                  className="bg-adron-green rounded-lg"
                  type="submit"
                  disabled={!isValid || !dirty}
                  rightIcon={<ArrowRight />}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PropertySpecifications;
