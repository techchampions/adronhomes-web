import Button from "../Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../InputField";
import { useModal } from "../../../store/modal.store";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Property } from "@/data/types/homepageTypes";
import InputMarketerId from "@/components/SubscribeComponents/InputMarketerID";
import OwnershipInfo from "@/components/SubscribeComponents/OwnershipInfo";
import { useSubscribeFormData } from "../../../store/subscribeFormData.state";
import Start from "@/components/SubscribeComponents/Start";
import { useIsUserExist } from "@/data/hooks";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("required"),
  email: Yup.string().required("required"),
  phone: Yup.string().required("required"),
});
interface Props {
  property: Property;
}

const InputPersonalInfo: React.FC<Props> = ({ property }) => {
  const action = useModal();
  const [emailToCheck, setEmailToCheck] = useState("");
  const { data, isLoading, isError } = useIsUserExist(emailToCheck);
  const {
    setSubscribeFormData,
    marketID,
    contract_subscriber_name_1,
    contract_email,
    contract_sms,
  } = useSubscribeFormData();
  const initialValues = {
    fullName: contract_subscriber_name_1 || "",
    email: contract_email || "",
    phone: contract_sms || "",
  };
  const goBack = () => {
    if (marketID) {
      action.openModal(<InputMarketerId property={property} />);
    } else {
      action.openModal(<Start property={property} />);
    }
  };
  const CheckEmail = ({ email }: { email: string }) => {
    useEffect(() => {
      if (email && email !== emailToCheck) {
        setEmailToCheck(email);
      }
    }, [email]);

    return null;
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
        <div className="text-2xl font-bold">Subscribe to {property.name}</div>
      </div>
      <div className="flex flex-col justify-between mt-7">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnMount
          onSubmit={(values) => {
            if (isError) {
              setSubscribeFormData({
                contract_subscriber_name_1: values.fullName,
                contract_email: values.email,
                contract_sms: values.phone,
              });
              action.openModal(<OwnershipInfo property={property} />);
            }
          }}
        >
          {({ isValid, values }) => {
            return (
              <Form className="flex flex-col gap-8 justify-between min-h-[220px]">
                <CheckEmail email={values.email} />
                <div className="space-y-7">
                  <div className="space-y-1">
                    <div className="text-lg">What is your name?</div>
                    <InputField
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      className="text-2xl font-bold rounded-xl py-3"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg">What is your Email address?</div>
                    <InputField
                      name="email"
                      type="text"
                      placeholder="Email address"
                      className="text-2xl font-bold rounded-xl py-3"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg">What is your Phone Number?</div>
                    <InputField
                      name="phone"
                      type="text"
                      placeholder="Phone number"
                      className="text-2xl font-bold rounded-xl py-3"
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
                    label={`${
                      data?.success
                        ? "User with email already exist"
                        : "Proceed"
                    }`}
                    className={`${
                      data?.success ? "bg-red-700" : "bg-adron-green"
                    } rounded-lg`}
                    type="submit"
                    isLoading={isLoading}
                    loadingText="Checking email..."
                    disabled={!isValid || isLoading || data?.success}
                    icon={data?.success ? <Info /> : null}
                    rightIcon={data?.success ? null : <ArrowRight />}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default InputPersonalInfo;
