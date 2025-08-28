// components/ClientPartnershipForm.tsx
"use client";
import Button from "@/components/Button";
import { useClientPartnership } from "@/data/hooks";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Check } from "lucide-react";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullname: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  location: Yup.string().required("Location is required"),
  phone_number: Yup.string().required("Phone number is required"),
  message: Yup.string().max(180, "Max 180 characters"),
});

const ClientPartnershipForm = () => {
  const [success, setSuccess] = useState(false);
  const { mutate: sendRequest, isPending } = useClientPartnership();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12">
        {/* LEFT INFO */}
        <div>
          <h3 className="text-indigo-900 font-semibold text-lg">
            INTRODUCING CLIENT
          </h3>
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            PARTNERSHIP SCHEME
          </h2>

          <div className="space-y-6 text-gray-800">
            {/* BDE */}
            <div>
              <h4 className="font-bold uppercase text-sm">
                BUSINESS DEVELOPMENT EXECUTIVE (BDE)
              </h4>
              <p className="font-semibold">BENEFITS:</p>
              <ul className="list-decimal list-inside text-sm space-y-1">
                <li>
                  Clients to earn a commission of 5% on any plot of land sold
                  and 3% on housing unit sold.
                </li>
                <li>Periodic Appreciation.</li>
              </ul>
            </div>

            {/* ABE */}
            <div>
              <h4 className="font-bold uppercase text-sm">
                ASSOCIATE BUSINESS EXECUTIVE (ABE)
              </h4>
              <p className="font-semibold">BENEFITS:</p>
              <ul className="list-decimal list-inside text-sm space-y-1">
                <li>
                  Clients to earn a commission of 6% on any plot of land sold
                  and 3% on housing unit sold.
                </li>
                <li>
                  Clients are at liberty to include our products on their
                  company’s hand bills and other forms of adverts or promotions
                  run by them as approved by Adron Homes.
                </li>
                <li>Clients will also be entitled to a branded vehicle.</li>
                <li>Periodic Appreciation.</li>
              </ul>
            </div>

            {/* NED */}
            <div>
              <h4 className="font-bold uppercase text-sm">
                NON EXECUTIVE DIRECTOR (NED)
              </h4>
              <p className="font-semibold">BENEFITS:</p>
              <ul className="list-decimal list-inside text-sm space-y-1">
                <li>
                  Clients to earn a commission of 6% on any plot of land unit
                  and 3% on housing unit sold.
                </li>
                <li>
                  Clients are at liberty to include our products on their
                  company’s promotional materials.
                </li>
                <li>Periodic Appreciation.</li>
                <li>
                  Clients will have privilege of holding meetings with the board
                  of directors and play advisory roles in Adron homes.
                </li>
                <li>
                  Each Non-executive director will also be entitled to an
                  Executive vehicle upon meeting certain requirements.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div>
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Get Started
          </h2>

          <Formik
            initialValues={{
              fullname: "",
              email: "",
              location: "",
              phone_number: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Form data:", values);
              sendRequest(values, {
                onSuccess() {
                  setSuccess(true);
                  setTimeout(() => {
                    setSuccess(false);
                  }, 3000);
                  resetForm();
                },
              });
            }}
          >
            {({ values, isValid }) => (
              <Form className="space-y-4">
                {/* Full name */}
                <div>
                  <Field
                    name="fullname"
                    placeholder="Full name *"
                    className="w-full border-b border-gray-400 focus:outline-none py-2"
                  />
                  <ErrorMessage
                    name="fullname"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    className="w-full border-b border-gray-400 focus:outline-none py-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Location */}
                <div>
                  <Field
                    name="location"
                    placeholder="Location"
                    className="w-full border-b border-gray-400 focus:outline-none py-2"
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Field
                    name="phone_number"
                    placeholder="Phone Number"
                    className="w-full border-b border-gray-400 focus:outline-none py-2"
                  />
                  <ErrorMessage
                    name="phone_number"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    maxLength={180}
                    rows={4}
                    className="w-full border border-gray-400 rounded-md p-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500"
                    />
                    <span>{values.message.length}/180</span>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex gap-4 items-center">
                  <Button
                    label="Submit"
                    isLoading={isPending}
                    type="submit"
                    disabled={!isValid || isPending}
                    className="bg-adron-green !w-fit px-6 rounded-lg"
                  />
                  {success && (
                    <div className="flex items-center gap-1 text-adron-green">
                      <Check />
                      <span>Request Sent Successfully</span>
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ClientPartnershipForm;
