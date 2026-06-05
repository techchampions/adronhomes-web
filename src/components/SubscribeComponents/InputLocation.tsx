import SelectInput from "@/components/FormComponents/SelectInput";
import InlineLoading from "@/components/InlineLoading";
import InputField from "@/components/InputField";
import InputAdditionalPersonalInfo from "@/components/SubscribeComponents/AdditionalPersonalInfo";
import NextOfKin from "@/components/SubscribeComponents/NextOfKin";
import { useGetCittaCountries } from "@/data/hooks";
import { Property } from "@/data/types/GetPropertyByIdResponse";
import { Form, Formik } from "formik";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import * as Yup from "yup";
import { useModal } from "../../../store/modal.store";
import { useSubscribeFormData } from "../../../store/subscribeFormData.state";
import Button from "../Button";

const validationSchema = Yup.object().shape({
  address: Yup.string().required("required"),
  nationality: Yup.string().required("required"),
  city: Yup.string().required(),
  state: Yup.string().required(),
  country: Yup.string().required(),
});
interface Props {
  property: Property;
}

const InputLocation: React.FC<Props> = ({ property }) => {
  const action = useModal();
  const {
    data: countriesDataResponse,
    isLoading,
    isError,
  } = useGetCittaCountries();
  const COUNTRIES =
    countriesDataResponse?.data.map((item) => ({
      value: item.pName,
      label: item.pName,
    })) || [];

  const {
    setSubscribeFormData,
    contract_residential_address,
    contract_state,
    contract_country,
    contract_town,
    contract_nationality,
  } = useSubscribeFormData();
  const initialValues = {
    nationality: contract_nationality || "",
    address: contract_residential_address || "",
    state: contract_state || "",
    city: contract_town || "",
    country: contract_country || "",
  };
  const goBack = () => {
    action.openModal(<InputAdditionalPersonalInfo property={property} />);
  };
  return (
    <div className="flex flex-col w-sm max-w-xs md:max-w-md max-h-[85vh] md:max-h-[75vh]">
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
              contract_residential_address: values.address,
              contract_country: values.country,
              contract_state: values.state,
              contract_town: values.city,
              contract_nationality: values.nationality,
            });
            action.openModal(<NextOfKin property={property} />);
          }}
        >
          {({ isValid }) => (
            <Form className="flex flex-col gap-8 justify-between min-h-[220px]">
              <div className="space-y-7">
                <div className="space-y-4 ">
                  <div className="text-lg font-adron-bold">
                    What is your location and Nationality?
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {isLoading || isError ? (
                      <div className="">
                        <div className="text-sm text-gray-700 font-bold mb-2">
                          Country
                        </div>
                        <div className="bg-gray-100 rounded-xl p-3">
                          <InlineLoading
                            size="sm"
                            text="Loading countries..."
                            className="text-gray-500"
                          />
                        </div>
                      </div>
                    ) : (
                      <SelectInput
                        label="Country"
                        name="country"
                        placeholder="Select country"
                        options={COUNTRIES}
                      />
                    )}
                    <InputField
                      name="state"
                      label="State"
                      placeholder="Enter your state"
                      className="text-2xl font-bold rounded-xl py-3"
                    />
                    {isLoading || isError ? (
                      <div className="">
                        <div className="text-sm text-gray-700 font-bold mb-2">
                          Country
                        </div>
                        <div className="bg-gray-100 rounded-xl p-3">
                          <InlineLoading
                            size="sm"
                            text="Loading countries..."
                            className="text-gray-500"
                          />
                        </div>
                      </div>
                    ) : (
                      <SelectInput
                        name="nationality"
                        label="Nationality"
                        options={COUNTRIES}
                        placeholder="Select country"
                        // className="text-2xl font-bold rounded-xl py-3"
                      />
                    )}
                    <InputField
                      name="city"
                      label="Town"
                      className="text-2xl font-bold rounded-xl py-3"
                    />
                    <div className="col-span-2">
                      <InputField
                        name="address"
                        label="Address"
                        className="text-2xl font-bold rounded-xl py-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full gap-2 mt-4">
                <Button
                  label="Back"
                  icon={<ArrowLeft />}
                  className="bg-gray-800 rounded-lg hidden sm:block"
                  onClick={goBack}
                />
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

export default InputLocation;
