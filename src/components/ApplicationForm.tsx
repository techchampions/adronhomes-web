"use client";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputField from "./InputField"; // adjust path as needed
import { useRef } from "react";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  coverLetter: Yup.string().required("Cover letter is required"),
  resume: Yup.mixed().required("Resume is required"),
  consent: Yup.boolean().oneOf([true], "You must accept to submit"),
});

const ApplicationForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-[30px]">
      <div className="flex flex-col mb-12">
        <h4 className="text-2xl font-bold mb-1">Application</h4>
        <p className="text-gray-500 text-sm">Fill the application form Below</p>
      </div>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          coverLetter: "",
          resume: null,
          consent: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Submitted", values);
        }}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <InputField name="firstName" placeholder="First Name" />
              <InputField name="lastName" placeholder="Last Name" />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-2 gap-4">
              <InputField
                name="email"
                placeholder="Email Address"
                type="email"
              />
              <InputField name="phone" placeholder="Phone Number" type="tel" />
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Cover Letter
              </label>
              <InputField
                name="coverLetter"
                type="textarea"
                className="resize-none rounded-xl"
                placeholder="Write your cover letter..."
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-medium mb-1">Resume</label>
              <div
                className="bg-adron-body p-6 text-center rounded-xl cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <p>
                  Drop your Resume here or{" "}
                  <span className="text-adron-green font-medium cursor-pointer underline">
                    Browse
                  </span>
                </p>
                <p className="text-xs mt-2 text-gray-500">
                  Max file size 4MB (Pdf, Doc, Docx)
                </p>
                {values.resume && (
                  <p className="text-sm text-gray-700 mt-2">
                    Selected: {values.resume}
                  </p>
                )}
              </div>
              <input
                name="resume"
                type="file"
                ref={fileInputRef}
                accept=".pdf,.doc,.docx"
                onChange={(event) => {
                  setFieldValue("resume", event.currentTarget.files?.[0]);
                }}
                className="hidden"
              />
              {errors.resume && touched.resume && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.resume as string}
                </p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3">
              <Field
                type="checkbox"
                name="consent"
                className="mt-1 accent-adron-green w-5 h-5"
              />
              <label className="text-sm text-gray-600">
                By submitting this form, I agree with the storage and handling
                of your data by the website.{" "}
              </label>
            </div>
            {errors.consent && touched.consent && (
              <p className="text-red-500 text-xs">{errors.consent}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-adron-green text-white py-3 px-6 rounded-full font-semibold w-fit"
            >
              Submit Application
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplicationForm;
