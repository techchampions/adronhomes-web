import Button from "../Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useModal } from "../../../store/modal.store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Property } from "@/data/types/homepageTypes";
import OccupationInfo from "@/components/SubscribeComponents/OcupationInfo";
import DateInput from "@/components/FormComponents/DateInput";
import InputLocation from "@/components/SubscribeComponents/InputLocation";
import RadioGroup from "@/components/FormComponents/RadioGroup";
import { useSubscribeFormData } from "../../../store/subscribeFormData.state";

const validationSchema = Yup.object().shape({
  gender: Yup.string().required("required"),
  marital_status: Yup.string().required("required"),
  dob: Yup.string().required("required"),
});
interface Props {
  property: Property;
}
const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  //   { value: "others", label: "others" },
];
const MARITAL_OPTIONS = [
  { value: "single", label: "single" },
  { value: "married", label: "married" },
  { value: "divorced", label: "divorced" },
];
const InputAdditionalPersonalInfo: React.FC<Props> = ({ property }) => {
  const action = useModal();
  const {
    setSubscribeFormData,
    contract_gender,
    contract_marital_status,
    contract_date_of_birth,
  } = useSubscribeFormData();
  const initialValues = {
    gender: contract_gender || "",
    marital_status: contract_marital_status || "",
    dob: contract_date_of_birth || "",
  };
  const goBack = () => {
    action.openModal(<OccupationInfo property={property} />);
  };
  return (
    <div className="flex flex-col max-w-sm mx-h-[65vh]">
      <div
        className="flex items-center gap-2 cursor-pointer absolute top-4 left-4"
        onClick={goBack}
      >
        <ArrowLeft /> Back
      </div>

      {/* <div className="flex flex-col mt-5">
        <div className="text-2xl font-bold">Subscribe to {property.name}</div>
      </div> */}
      <div className="flex flex-col justify-between mt-7">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnMount
          onSubmit={(values) => {
            setSubscribeFormData({
              contract_gender: values.gender,
              contract_marital_status: values.marital_status,
              contract_date_of_birth: values.dob,
            });
            action.openModal(<InputLocation property={property} />);
          }}
        >
          {({ isValid }) => (
            <Form className="flex flex-col gap-8 justify-between min-h-[220px]">
              <div className="space-y-7">
                <div className="space-y-1">
                  <div className="text-lg">What`s your gender?</div>
                  <RadioGroup
                    name="gender"
                    options={GENDER_OPTIONS}
                    orientation="horizontal"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-lg">What`s your marital status?</div>
                  <RadioGroup
                    name="marital_status"
                    options={MARITAL_OPTIONS}
                    orientation="horizontal"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-lg">What`s your date of birth?</div>
                  <DateInput name="dob" />
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

export default InputAdditionalPersonalInfo;
