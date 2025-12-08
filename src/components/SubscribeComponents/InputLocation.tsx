import Button from "../Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import InputField from "../InputField";
import { useModal } from "../../../store/modal.store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Property } from "@/data/types/homepageTypes";
import InputAdditionalPersonalInfo from "@/components/SubscribeComponents/AdditionalPersonalInfo";
import NextOfKin from "@/components/SubscribeComponents/NextOfKin";
import LocationAutocomplete2 from "@/components/FormComponents/LocationInput2";
import { useSubscribeFormData } from "../../../store/subscribeFormData.state";
// import LocationAutocomplete from "@/components/FormComponents/LocationInput";

const validationSchema = Yup.object().shape({
  location: Yup.string().required("required"),
  locationDetails: Yup.object()
    .shape({
      address: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
      country: Yup.string(),
      lat: Yup.number(),
      lng: Yup.number(),
    })
    .required("required"),
});
interface Props {
  property: Property;
}

const InputLocation: React.FC<Props> = ({ property }) => {
  const action = useModal();
  const {
    setSubscribeFormData,
    contract_residential_address,
    contract_state,
    contract_country,
    contract_town,
  } = useSubscribeFormData();
  const initialValues = {
    location: contract_residential_address || "",
    locationDetails: {
      address: contract_residential_address || "",
      city: contract_town || "",
      state: contract_state || "",
      country: contract_country || "",
      lat: 0,
      lng: 0,
    },
  };
  const goBack = () => {
    action.openModal(<InputAdditionalPersonalInfo property={property} />);
  };
  return (
    <div className="flex flex-col w-sm max-w-sm mx-h-[65vh]">
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
              contract_residential_address: values.locationDetails.address,
              contract_country: values.locationDetails.country,
              contract_state: values.locationDetails.state,
              contract_town: values.locationDetails.city,
            });
            action.openModal(<NextOfKin property={property} />);
          }}
        >
          {({ isValid, values, setFieldValue }) => (
            <Form className="flex flex-col gap-8 justify-between min-h-[220px]">
              <div className="space-y-7">
                <div className="space-y-1">
                  <div className="text-lg">Where are you located?</div>
                  {/* <LocationAutocomplete
                    value={values.location}
                    onChange={(value) => setFieldValue("location", value)}
                    onLocationSelect={(locationData) => {
                      setFieldValue("addressDetails", {
                        address: locationData.address,
                        city: locationData.city || "",
                        state: locationData.state || "",
                        country: locationData.country || "",
                        lat: locationData.lat,
                        lng: locationData.lng,
                      });
                    }}
                    placeholder="Type your address..."
                    label="Location"
                    required
                    error={touched.location && (errors.location as string)}
                    countryRestrictions={["us", "ca"]} // Optional: restrict to specific countries
                  />{" "} */}

                  <LocationAutocomplete2
                    value={values.location}
                    onChange={(value) => setFieldValue("location", value)}
                    onSelect={(locationData) => {
                      setFieldValue("locationDetails", {
                        address:
                          locationData.formattedAddress || locationData.address,
                        city: locationData.city || "",
                        state: locationData.state || "",
                        country: locationData.country || "",
                        lat: locationData.lat,
                        lng: locationData.lng,
                      });
                    }}
                    onError={(error) => {
                      console.error("Location error:", error);
                    }}
                    placeholder="Enter your address"
                    // label="Your Location"
                    helperText="Start typing to see suggestions"
                    required
                    // error={touched.location && (errors.location as string)}
                    searchOptions={{
                      // componentRestrictions: { country: "ng" }, // Restrict to US
                      types: ["address"], // Search for addresses only
                    }}
                    debounce={400}
                    clearOnBlur={false}
                  />

                  {/* <InputField
                    name="location"
                    type="text"
                    placeholder="Enter your Address"
                    className="text-2xl font-bold rounded-xl py-3"
                  /> */}
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

export default InputLocation;
