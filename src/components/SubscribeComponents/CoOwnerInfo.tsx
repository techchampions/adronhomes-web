import Button from "../Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../InputField";
import { useModal } from "../../../store/modal.store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Property } from "@/data/types/homepageTypes";
import OwnershipInfo from "@/components/SubscribeComponents/OwnershipInfo";
import OccupationInfo from "@/components/SubscribeComponents/OcupationInfo";
import { useSubscribeFormData } from "../../../store/subscribeFormData.state";

const validationSchema = Yup.object().shape({
  co_Owner1: Yup.string().required("required"),
  //   co_Owner2: Yup.string().required("required"),
});
interface Props {
  property: Property;
}

const CoOwnerInfo: React.FC<Props> = ({ property }) => {
  const modal = useModal();
  const {
    setSubscribeFormData,
    contract_subscriber_name_2,
    contract_subscriber_name_3,
  } = useSubscribeFormData();
  const initialValues = {
    co_Owner1: contract_subscriber_name_2 || "",
    co_Owner2: contract_subscriber_name_3 || "",
  };
  const goBack = () => {
    modal.openModal(<OwnershipInfo property={property} />);
  };
  return (
    <div className="flex flex-col max-w-sm mx-h-[65vh]">
      <div
        className="flex items-center gap-2 cursor-pointer absolute top-4 left-4"
        onClick={goBack}
      >
        <ArrowLeft /> Back
      </div>

      <div className="flex flex-col mt-5">
        <div className="text-2xl font-bold">
          Enter the names of the co-owners
        </div>
      </div>
      <div className="flex flex-col justify-between mt-7">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnMount
          onSubmit={(values) => {
            setSubscribeFormData({
              contract_subscriber_name_2: values.co_Owner1,
              contract_subscriber_name_3: values.co_Owner2,
            });
            modal.openModal(<OccupationInfo property={property} />);
          }}
        >
          {({ isValid }) => (
            <Form className="flex flex-col gap-8 justify-between min-h-[220px]">
              <div className="space-y-7">
                <div className="space-y-1">
                  <label htmlFor="" className="text-lg">
                    What`s the name of co-owner1?
                  </label>
                  <InputField
                    name="co_Owner1"
                    type="text"
                    placeholder="Full Name"
                    className="text-2xl font-bold rounded-xl py-3"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="" className="text-lg">
                    What`s the name of co-owner2?
                  </label>
                  <InputField
                    name="co_Owner2"
                    type="text"
                    placeholder="Full Name (Optional)"
                    className="text-2xl font-bold rounded-xl py-3"
                  />
                </div>
              </div>
              <div className="flex justify-center w-full gap-4 mt-4">
                {/* <Button
                  label="Back"
                  icon={<ArrowLeft />}
                  className="bg-black rounded-lg"
                  onClick={goBack}
                /> */}
                <Button
                  label="Proceed"
                  className="bg-adron-green rounded-lg"
                  type="submit"
                  disabled={!isValid}
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

export default CoOwnerInfo;
