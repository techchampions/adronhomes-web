import Button from "@/components/Button";
import RadioGroup from "@/components/FormComponents/RadioGroup";
import RadioGroupSkeleton from "@/components/FormComponents/RadioGroupSkeleton";
import CoOwnerInfo from "@/components/SubscribeComponents/CoOwnerInfo";
import OccupationInfo from "@/components/SubscribeComponents/OcupationInfo";
import InputPersonalInfo from "@/components/SubscribeComponents/PersonalInfo";
import { useGetBusinessType } from "@/data/hooks";
import { Property } from "@/data/types/GetPropertyByIdResponse";
import { Form, Formik } from "formik";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import * as Yup from "yup";
import { useModal } from "../../../store/modal.store";
import { useSubscribeFormData } from "../../../store/subscribeFormData.state";

const ownerOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];
interface Props {
  property: Property;
}
const OwnershipInfo: React.FC<Props> = ({ property }) => {
  const modal = useModal();
  const { setSubscribeFormData, contract_business_type, soleOwner } =
    useSubscribeFormData();
  const {
    data: businessTypeResponse,
    isLoading,
    isError,
  } = useGetBusinessType();
  const contractBusinessTypes = businessTypeResponse?.data.map((item) => ({
    value: item.pName,
    label: item.pName,
  }));

  const initialValues = {
    purpose: contract_business_type || "",
    soleOwner: soleOwner || "",
  };
  const goBack = () => {
    modal.openModal(<InputPersonalInfo property={property} />);
  };

  const validationSchema = Yup.object({
    // For string values
    soleOwner: Yup.string()
      .required("Please select an answer")
      .oneOf(["no", "yes"], "Invalid selection"),
    purpose: Yup.string().required("Please select an answer"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    if (values.soleOwner === "yes") {
      setSubscribeFormData({
        contract_business_type: values.purpose,
        soleOwner: values.soleOwner,
      });
    } else {
      setSubscribeFormData({
        contract_business_type: values.purpose,
        soleOwner: values.soleOwner,
        contract_subscriber_name_2: "",
        contract_subscriber_name_3: "",
      });
    }
    if (values.soleOwner === "yes") {
      modal.openModal(<OccupationInfo property={property} />);
    } else modal.openModal(<CoOwnerInfo property={property} />);
  };
  return (
    <div className="w-sm max-w-xs sm:max-w-md max-h-[65vh] overflow-y-scroll scrollbar-hide">
      <div
        className="flex items-center gap-2 cursor-pointer absolute top-4 left-4"
        onClick={goBack}
      >
        <ArrowLeft /> Back
      </div>

      {/* <h4 className="font-bold text-2xl mt-5">Subscribe to {property.name}</h4> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnMount
      >
        {({ isValid }) => (
          <Form className="mt-5 space-y-8">
            <div className=" space-y-8">
              <div className="">
                {isLoading || isError || !contractBusinessTypes ? (
                  <RadioGroupSkeleton
                    label={true}
                    optionsCount={4}
                    orientation="vertical"
                    className="my-4"
                  />
                ) : (
                  <RadioGroup
                    label="What is the business type for this property"
                    name="purpose"
                    options={contractBusinessTypes}
                  />
                )}
              </div>
              <div className="">
                <RadioGroup
                  label="Are you the only owner of this property?"
                  name="soleOwner"
                  options={ownerOptions}
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              {/* <Button
                label="Cancel"
                className="bg-gray-700 hover:bg-adron-black rounded-lg"
                onClick={() => modal.closeModal()}
              /> */}
              <Button
                label="Proceed"
                rightIcon={<ArrowRight />}
                type="submit"
                disabled={!isValid}
                className="bg-adron-green hover:bg-adron-green/90 rounded-lg"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OwnershipInfo;
