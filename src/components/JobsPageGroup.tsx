"use client";

import { Form, Formik } from "formik";
import InputField from "./InputField";
import { GoSearch } from "react-icons/go";
import { useJobListPage } from "@/data/hooks";
import Loader from "./Loader";
import JobsList from "./JobsList";
import ApiErrorBlock from "./ApiErrorBlock";

const JobsPageGroup = () => {
  const { data, isLoading, isError } = useJobListPage();
  if (isLoading) return <Loader />;
  if (isError) return <ApiErrorBlock />;
  return (
    <div className="flex flex-col items-center justify-center w-full px-8">
      <div className="flex flex-col justify-center mx-auto text-center space-y-2 py-20">
        <h4 className="text-4xl md:text-4xl text-black font-bold">
          {/* The search begins here */}
          {data?.data.jobs_header[0].header}
        </h4>
        <div className="bg-white flex w-fit mx-auto shadow rounded-full px-4 my-1 text-xs justify-between items-center gap-2 mb-4 md:mb-0">
          <span>126 jobs</span>
          <span className="text-lg">•</span>
          <span>20 Locations</span>
        </div>
      </div>
      <div className="w-[70%] mx-auto">
        <Formik
          initialValues={{
            query: "",
          }}
          onSubmit={(values, actions) => {
            console.log("Form Values:", values);
            actions.setSubmitting(false);
          }}
        >
          <Form className="">
            <InputField
              name="query"
              placeholder="Search for jobs"
              type="text"
              rightIcon={<GoSearch />}
              className="w-full h-16 rounded-xl bg-white px-4 py-4"
            />
          </Form>
        </Formik>
      </div>
      <div className="bg-white w-full rounded-[50px] grid grid-cols-1 md:grid-cols-3 px-8 py-20 mt-10 text-left">
        <JobsList jobs={data?.data.jobs_post || []} />
      </div>
    </div>
  );
};
export default JobsPageGroup;
