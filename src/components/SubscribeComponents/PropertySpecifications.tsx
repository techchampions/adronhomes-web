import Button from "../Button";
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import { useModal } from "../../../store/modal.store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { Property } from "@/data/types/homepageTypes";
import SelectInput from "@/components/FormComponents/SelectInput";
import DatePickerInput from "@/components/FormComponents/CustomDateInput";
import InputIdentityInfo from "@/components/SubscribeComponents/InputIdentity";
// import SelectPaymentMethod from "@/components/SubscribeComponents/SelectPaymentMethod";
import { addMonths } from "date-fns";
import { useSubscribeFormData } from "../../../store/subscribeFormData.state";
import PropertyTerms from "@/components/SubscribeComponents/PropertyTerms";

const validationSchema = Yup.object().shape({
  property_size: Yup.string().required("required"),
  payment_duration: Yup.string().required("required"),
  payment_schedule: Yup.string().required("required"),
  start_date: Yup.string().required("required"),
  end_date: Yup.string().required("required"),
});
interface Props {
  property: Property;
}

const PropertySpecifications: React.FC<Props> = ({ property }) => {
  const {
    setSubscribeFormData,
    land_size,
    payment_duration,
    payment_schedule,
  } = useSubscribeFormData();
  const action = useModal();
  const initialValues = {
    property_size: land_size,
    payment_duration: payment_duration,
    payment_schedule: payment_schedule,
    start_date: new Date(),
    end_date: "",
  };
  const SCHEDULE_OPTIONS = property.payment_schedule.map((option) => ({
    label: option,
    value: option,
  }));
  const SIZE_OPTIONS = property.land_sizes.map((option) => ({
    label: `${option.size} ${option.measurement_unit}`,
    value: option.id,
  }));
  const goBack = () => {
    action.openModal(<InputIdentityInfo property={property} />);
  };

  // Component to auto-calculate endDate
  const AutoEndDateUpdater = () => {
    const { values, setFieldValue } = useFormikContext<typeof initialValues>();

    useEffect(() => {
      // const { paymentDuration, startDate } = values;

      // Only calculate if both are available
      if (values.payment_duration && values.start_date) {
        const months = parseInt(String(values.payment_duration));
        if (!isNaN(months)) {
          const newEndDate = addMonths(new Date(values.start_date), months);
          setFieldValue("end_date", newEndDate);
        }
      }
    }, [values.start_date, values.payment_duration, setFieldValue]);

    return null; // no UI
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
          onSubmit={(values) => {
            setSubscribeFormData({
              land_size: values.property_size,
              payment_duration: values.payment_duration,
              payment_schedule: values.payment_schedule,
              start_date: values.start_date.toISOString(),
              end_date: values.end_date,
            });
            action.openModal(<PropertyTerms property={property} />);
          }}
        >
          {({ isValid, dirty, values }) => {
            const selectedSize = values.property_size
              ? property.land_sizes.find(
                  (item) => item.id.toString() === values.property_size
                )
              : null;

            const DURATION_OPTIONS =
              selectedSize?.durations?.map((option) => ({
                value: option.id.toString(),
                label: `${option.duration} months`,
              })) || [];

            return (
              <Form className="flex flex-col gap-8 justify-between min-h-[220px]">
                <AutoEndDateUpdater />
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
                    <DatePickerInput
                      name="end_date"
                      placeholder="DD-MM-YYYY"
                      readOnly
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
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default PropertySpecifications;
