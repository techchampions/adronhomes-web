import Button from "@/components/Button";
import { Property } from "@/data/types/homepageTypes";
import { Form, Formik } from "formik";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import * as Yup from "yup";
import { useModal } from "../../../store/modal.store";
import InputMarketerId from "@/components/SubscribeComponents/InputMarketerID";
import InputPersonalInfo from "@/components/SubscribeComponents/PersonalInfo";
import RadioGroup from "@/components/FormComponents/RadioGroup";
import { useGetPropertyByID } from "@/data/hooks";

const validationSchema = Yup.object({
  // For string values
  referred: Yup.string()
    .required("Please select an answer")
    .oneOf(["no", "yes"], "Invalid selection"),
});

const options = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];
interface Props {
  property: Property;
}
const initialValues = {
  referred: "",
};
const Start: React.FC<Props> = ({ property }) => {
  const modal = useModal();
  const { data, isLoading } = useGetPropertyByID(String(property.id));
  if (isLoading) {
    return (
      <div className="w-xs h-80 flex justify-center items-center">
        <div className="w-10 h-10 border-b-2 rounded-full border-adron-green animate-spin"></div>
      </div>
    );
  }
  const handleSubmit = (values: typeof initialValues) => {
    if (values.referred === "yes") {
      modal.openModal(
        <InputMarketerId property={data?.data.properties ?? property} />
      );
    } else
      modal.openModal(
        <InputPersonalInfo property={data?.data.properties ?? property} />
      );
  };
  return (
    <div className="max-w-xs">
      <div className="flex items-center gap-2 cursor-pointer absolute top-4 left-4">
        <ArrowLeft /> Back
      </div>

      <h4 className="font-bold text-2xl mt-5">Subscribe to {property.name}</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isValid, dirty }) => (
          <Form className="mt-5 space-y-8">
            <div className=" space-y-4">
              <div className="">Were you referred by a Marketer?</div>
              <RadioGroup name="referred" options={options} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Button
                label="Cancel"
                className="bg-gray-700 hover:bg-adron-black rounded-lg"
                onClick={() => modal.closeModal()}
              />
              <Button
                label="Proceed"
                disabled={!isValid || !dirty}
                rightIcon={<ArrowRight />}
                type="submit"
                className="bg-adron-green hover:bg-adron-green/90 rounded-lg"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Start;
