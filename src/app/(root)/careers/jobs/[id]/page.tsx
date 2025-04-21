"use client";
import ApplicationForm from "@/components/ApplicationForm";
import Loader from "@/components/Loader";
import { useGetJobByID } from "@/data/hooks";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaHome, FaMapMarker, FaShare } from "react-icons/fa";

const JobDetail = () => {
  const params = useParams();
  const id = params?.id;

  const { data, isLoading, error } = useGetJobByID(id);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading property.</p>;
  return (
    <div className="flex flex-col w-full px-8 mb-14">
      <div className="w-full h-[200px] relative my-20">
        <Image src="/job-detail-banner.png" alt="Job Image" fill />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] flex flex-col gap-5">
          <h1 className="text-4xl md:text-6xl font-bold">
            {" "}
            {data?.data.job_details[0].job_title}{" "}
          </h1>
          <div className="flex flex-roww gap-10">
            <div className="flex gap-2">
              <FaHome />
              <p className="text-sm">{data?.data.job_details[0].location}</p>
            </div>
            <div className="flex gap-2">
              <FaMapMarker />
              <p className="text-sm">{data?.data.job_details[0].job_type}</p>
            </div>
            <div className="flex gap-2">
              <FaShare />
              <p className="text-sm">share this job</p>
            </div>
          </div>
          <p className="text-sm text-adron-gray-500">
            {" "}
            {data?.data.job_details[0].description}{" "}
          </p>
          <div className="">
            <p className="font-bold">Key Responsibilities:</p>
            <ul className="list-disc ml-5 text-sm text-adron-gray-500">
              {data?.data.job_details[0].key_responsibility.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
          <div className="">
            <p className="font-bold">Requirements:</p>
            <ul className="list-disc ml-5 text-sm text-adron-gray-500">
              {data?.data.job_details[0].requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <p className="font-bold">Preferred Qualifications:</p>
            <ul className="list-disc ml-5 text-sm text-adron-gray-500">
              {data?.data.job_details[0].qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
};
export default JobDetail;
