import Button from "../Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useModal } from "../../../store/modal.store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Property } from "@/data/types/homepageTypes";
import ImageInput from "@/components/FormComponents/ImageInput";
import PropertySpecifications from "@/components/SubscribeComponents/PropertySpecifications";
import NextOfKin from "@/components/SubscribeComponents/NextOfKin";

const validationSchema = Yup.object().shape({
  passport: Yup.mixed().required("required"),
  id: Yup.mixed().required("required"),
});
interface Props {
  property: Property;
}
const initialValues = {
  passport: "",
  passport2: "",
  id: "",
};

const InputIdentityInfo: React.FC<Props> = ({ property }) => {
  const action = useModal();
  const goBack = () => {
    action.openModal(<NextOfKin property={property} />);
  };
  return (
    <div className="flex flex-col w-sm max-w-sm max-h-[75vh] overflow-y-scroll scrollbar-hide">
      <div
        className="flex items-center gap-2 cursor-pointer absolute top-4 left-4"
        onClick={goBack}
      >
        <ArrowLeft /> Back
      </div>

      <div className="flex flex-col mt-5">
        <div className="text-2xl font-bold">
          Provide means of identification
        </div>
      </div>
      <div className="flex flex-col justify-between mt-7">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {
            action.openModal(<PropertySpecifications property={property} />);
          }}
        >
          {({ isValid, dirty }) => (
            <Form className="flex flex-col gap-8 justify-between min-h-[220px]">
              <div className="space-y-7">
                <div className="space-y-1 grid grid-cols-2 gap-2">
                  {/* <div className="text-lg">What`s your email address?</div> */}
                  <ImageInput
                    name="passport"
                    label="Owner's Photo"
                    infoText="Upload a clear photo of face"
                    width={175}
                    height={200}
                    className="!w-fit"
                  />
                  <ImageInput
                    name="passport2"
                    label="Co-owner's Photo"
                    infoText="Upload a clear photo of face"
                    width={175}
                    height={200}
                    className="!w-fit"
                  />
                </div>
                <div className="space-y-1">
                  {/* <div className="text-lg">What`s your phone No.?</div> */}
                  <ImageInput
                    label="National ID / Int'l Passport / Voter's card"
                    infoText="upload means of identification."
                    name="id"
                    className="!w-full"
                    width={360}
                    height={140}
                  />
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

export default InputIdentityInfo;
