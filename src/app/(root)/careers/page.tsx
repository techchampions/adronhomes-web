"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

// Validation schema
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  state: Yup.string().required("State is required"),
  jobRole: Yup.string().required("Job role is required"),
  education: Yup.string().required("Education level is required"),
  message: Yup.string(),
});

export default function CareersPage() {
  const educationOptions = ["Bsc", "Msc", "PhD", "HND", "OND"];
  const jobRoles = [
    "Software Engineer",
    "Product Manager",
    "Designer",
    "Data Analyst",
  ];
  return (
    <div className="px-10 space-y-5">
      <div className="flex flex-col justify-center items-center gap-5 text-center my-10">
        <h1 className="text-6xl font-bold">Careers</h1>
        <p className="text-md font-bold">View available job openings</p>
        <Button
          label="View Jobs"
          onClick={() => (window.location.href = "/careers/jobs")}
          className="bg-adron-green px-4 text-sm !w-fit"
        />
      </div>

      <div className="w-full overflow-hidden mt-5 relative">
        <Image
          src="/career-banner.png"
          alt="career banner"
          width={800}
          height={461}
          className="w-full object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center z-20 px-6 md:px-12"></div>
      </div>

      <div className="w-full mx-auto px-6 py-10 bg-white rounded-[40px]">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          What kind of Job are you looking for?
        </h2>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            state: "",
            jobRole: "",
            education: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log("Form Values:", values);
            actions.setSubmitting(false);
          }}
        >
          <Form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputField name="fullName" placeholder="Enter your name" />
              <InputField name="email" placeholder="Enter your email" />
              <InputField name="phone" placeholder="Enter your number" />
              <InputField name="state" placeholder="Enter your state" />
              <SelectField
                name="jobRole"
                placeholder="Select Role"
                options={jobRoles}
              />
              <SelectField
                name="education"
                placeholder="Select Education"
                options={educationOptions}
              />
            </div>
            <InputField
              name="message"
              placeholder="Enter your message"
              type="textarea"
              className="resize-none rounded-lg"
            />
            <div className="flex justify-center">
              <Button
                label="Submit Application"
                type="submit"
                className="bg-adron-green px-4 text-sm !w-fit"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
