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
import PaymentSummary from "@/components/SubscribeComponents/PaymentSummary";
// import RadioGroup from "@/components/FormComponents/RadioGroup";
import CurrencyInputField from "@/components/FormComponents/CurrencyInputField";
import InputField from "@/components/InputField";

interface Props {
  property: Property;
}

const PropertySpecifications: React.FC<Props> = ({ property }) => {
  // const validationSchema = Yup.object().shape({
  //   property_size: Yup.string().required("required"),
  //   property_purpose: Yup.string().required("required"),
  //   payment_plan: Yup.string().required("required"),
  //   // citta_id: Yup.number().required("required"),
  //   units: Yup.number().required("required"),
  //   initial_deposit: Yup.number().when("payment_plan", {
  //     is: "Installment",
  //     then: (schema) => schema.required("required"),
  //     otherwise: (schema) => schema.notRequired(),
  //   }),
  //   payment_duration: Yup.string().when("payment_plan", {
  //     is: "Installment",
  //     then: (schema) => schema.required("required"),
  //     otherwise: (schema) => schema.notRequired(),
  //   }),
  //   payment_schedule: Yup.string().when("payment_plan", {
  //     is: "Installment",
  //     then: (schema) => schema.required("required"),
  //     otherwise: (schema) => schema.notRequired(),
  //   }),
  //   start_date: Yup.string().when("payment_plan", {
  //     is: "Installment",
  //     then: (schema) => schema.required("required"),
  //     otherwise: (schema) => schema.notRequired(),
  //   }),
  //   end_date: Yup.string().when("payment_plan", {
  //     is: "Installment",
  //     then: (schema) => schema.required("required"),
  //     otherwise: (schema) => schema.notRequired(),
  //   }),
  // });

  const validationSchema = Yup.object().shape({
    property_size: Yup.mixed().required("required"),
    property_purpose: Yup.mixed().required("required"),
    payment_plan: Yup.mixed().required("required"),
    units: Yup.number().required("required"),
    // initial_deposit: Yup.number().required("required"),
    initial_deposit: Yup.number()
      .required("Initial deposit is required")
      .min(1, "Initial deposit must be at least ₦1")
      .test(
        "deposit-less-than-price",
        "Initial deposit cannot be greater than price",
        function (value) {
          const { duration_price } = this.parent;
          if (!duration_price || !value) return true; // Skip validation if either is empty
          return value <= duration_price;
        }
      ),
    payment_duration: Yup.mixed().required("required"),
    payment_schedule: Yup.mixed().required("required"),
    start_date: Yup.mixed().required("required"),
    end_date: Yup.mixed().required("required"),
  });

  let payableAmount = 0;
  const {
    setSubscribeFormData,
    land_size,
    payment_duration,
    payment_schedule,
    property_purpose,
    // payment_plan,
    initial_deposit,
    units,
    citta_id,
    end_date,
  } = useSubscribeFormData();
  const action = useModal();
  const initialValues = {
    property_size: land_size,
    citta_id: citta_id,
    units: units,
    property_purpose: property_purpose,
    payment_plan: "Installment",
    initial_deposit: Number(initial_deposit),
    payment_duration: payment_duration,
    duration_price: 0,
    payment_schedule: payment_schedule,
    start_date: new Date(),
    end_date: end_date,
  };
  const schedule = property.payment_schedule ?? [];
  const SCHEDULE_OPTIONS = schedule.map((option) => ({
    label: option,
    value: option,
  }));
  const land_sizes = property.land_sizes ?? [];
  const SIZE_OPTIONS = land_sizes.map((option) => ({
    label: `${option.size} ${option.measurement_unit}`,
    value: option.id,
  }));
  const purposes = property.purpose ?? [];
  const PURPOSE_OPTIONS = purposes.map((option) => ({
    label: option,
    value: option,
  }));
  // let PAYMENT_PLAN: typeof PURPOSE_OPTIONS = [];
  // if (property.payment_type === "installment") {
  //   PAYMENT_PLAN = [
  //     { label: "One Time", value: "One Time" },
  //     { label: "Installment", value: "Installment" },
  //   ];
  // }
  const goBack = () => {
    action.openModal(<InputIdentityInfo property={property} />);
  };
  // Component to auto-calculate endDate
  const AutoEndDateUpdater = () => {
    const { values, setFieldValue } = useFormikContext<typeof initialValues>();

    useEffect(() => {
      // const { paymentDuration, startDate } = values;
      if (
        values.payment_plan &&
        values.property_size &&
        values.payment_duration
      ) {
        const selectedSize = values.property_size
          ? property.land_sizes.find(
              (item) => item.id.toString() === values.property_size
            )
          : null;
        const selectedDuration = values.payment_duration
          ? selectedSize?.durations.find(
              (item) => item.id.toString() === values.payment_duration
            )
          : null;
        // console.log("d_citta", selectedDuration);
        setFieldValue("duration_price", selectedDuration?.price);
        // setFieldValue("initial_deposit", selectedDuration?.price);s
        setFieldValue("citta_id", selectedDuration?.citta_id);
      }
      if (
        values.payment_plan &&
        values.property_size &&
        values.payment_duration &&
        values.initial_deposit &&
        values.units
      ) {
        const selectedSize = values.property_size
          ? property.land_sizes.find(
              (item) => item.id.toString() === values.property_size
            )
          : null;
        const selectedDuration = values.payment_duration
          ? selectedSize?.durations.find(
              (item) => item.id.toString() === values.payment_duration
            )
          : null;

        if (values.payment_plan === "One Time") {
          //  payableAmount = property.price * values.units;
          payableAmount = (selectedDuration?.price || 0) * values.units;
        } else if (values.payment_plan === "Installment") {
          payableAmount = Number(values.initial_deposit);
        }
      }

      if (
        values.payment_plan === "Installment" &&
        values.payment_duration &&
        values.start_date
      ) {
        const months = parseInt(String(values.payment_duration));
        if (!isNaN(months)) {
          const newEndDate = addMonths(new Date(values.start_date), months);
          setFieldValue("end_date", newEndDate);
        }
      }
    }, [
      values.start_date,
      values.payment_duration,
      values.property_size,
      values.payment_plan,
      values.units,
      values.initial_deposit,
      setFieldValue,
    ]);
    // console.log("citta", values.citta_id);
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
          validateOnMount
          validateOnBlur
          validateOnChange
          onSubmit={(values) => {
            setSubscribeFormData({
              land_size: values.property_size,
              property_purpose: values.property_purpose,
              payment_duration: values.payment_duration,
              payment_schedule: values.payment_schedule,
              start_date: values.start_date.toISOString(),
              end_date: values.end_date,
              payable_amount: payableAmount,
              payment_plan: values.payment_plan,
              initial_deposit: String(values.initial_deposit),
              units: values.units,
              citta_id: values.citta_id,
            });
            action.openModal(<PaymentSummary property={property} />);
          }}
        >
          {({ isValid, values, errors }) => {
            console.log("Formik state:", { isValid, errors, values });
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
            // getValidationSchema(values.payment_plan);
            return (
              <Form className="flex flex-col gap-8 justify-between min-h-[220px]">
                <AutoEndDateUpdater />
                {/* <UpdateValidation /> */}
                <div className="space-y-7">
                  {/* <div className="space-y-1">
                    <div className="text-lg">Select payment plan</div>
                    <RadioGroup
                      name="payment_plan"
                      options={PAYMENT_PLAN}
                      orientation="horizontal"
                    />
                  </div> */}
                  <div className="space-y-1">
                    <div className="text-lg">Select your property size</div>
                    <SelectInput
                      name="property_size"
                      options={SIZE_OPTIONS}
                      className="py-3 bg-adron-body"
                    />
                  </div>

                  {values.property_size && (
                    <>
                      <div className="space-y-1">
                        <div className="text-lg">Select payment duration</div>
                        <SelectInput
                          name="payment_duration"
                          options={DURATION_OPTIONS}
                          className="py-3 bg-adron-body"
                        />
                      </div>
                    </>
                  )}
                  {values.payment_duration && (
                    <div className="space-y-1">
                      <div className="text-lg">Select Payment schedule</div>
                      <SelectInput
                        name="payment_schedule"
                        options={SCHEDULE_OPTIONS}
                        className="py-3 bg-adron-body"
                      />
                    </div>
                  )}
                  {values.payment_duration && values.payment_schedule && (
                    <div className="space-y-1">
                      <div className="text-lg">
                        Select your property purpose
                      </div>
                      <SelectInput
                        name="property_purpose"
                        options={PURPOSE_OPTIONS}
                        className="py-3 bg-adron-body"
                      />
                    </div>
                  )}
                  {values.property_purpose && (
                    <div className="space-y-1">
                      <div className="text-lg">Select your number of units</div>
                      <InputField
                        name="units"
                        className="text-2xl font-bold rounded-xl py-3"
                      />
                    </div>
                  )}

                  {values.payment_plan === "Installment" &&
                    values.units &&
                    values.payment_duration &&
                    values.payment_schedule &&
                    values.property_purpose && (
                      <>
                        <div className="space-y-1">
                          <div className="text-lg">Enter Initial Deposit</div>
                          <CurrencyInputField
                            name="initial_deposit"
                            placeholder="Initial Deposit"
                            formatAsNaira
                            className="text-2xl font-bold rounded-xl py-3"
                          />
                        </div>
                      </>
                    )}
                </div>
                {values.payment_plan === "Installment" &&
                  values.initial_deposit && (
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
                  )}
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
                    disabled={!isValid || false}
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
