"use client";
import ApplicationForm from "@/components/ApplicationForm";
import Loader from "@/components/Loader";
import { useGetJobByID } from "@/data/hooks";
// import { JobsApiResponse } from "@/data/types/jobListTypes";
import { formatPrice } from "@/utils/formater";
import Image from "next/image";
import { useParams } from "next/navigation";
import { BiMoney } from "react-icons/bi";
import { FaHome, FaMapMarker } from "react-icons/fa";
import DOMPurify from "dompurify";
import { Eye } from "lucide-react";

// export async function generateStaticParams() {
//   try {
//     const response = await fetch(
//       "https://adron.microf10.sg-host.com/api/jobs-page",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Identifier: "dMNOcdMNOPefFGHIlefFGHIJKLmno",
//           Accept: "application/json",
//         },
//         cache: "force-cache",
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const jobsData: JobsApiResponse = await response.json();
//     const jobs = jobsData.data.jobs_post.data;

//     return jobs.map((jobs) => ({
//       id: jobs.id.toString(),
//     }));
//   } catch (error) {
//     console.error("Error fetching jobs for static generation:", error);
//     return [];
//   }
// }
const JobDetail = () => {
  const params = useParams();
  const id = Number(params?.id);

  const { data, isLoading, error } = useGetJobByID(id);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading property.</p>;
  const sanitizedHTML = (content: string) => DOMPurify.sanitize(content);
  return (
    <div className="flex flex-col w-full px-8 mb-14">
      <div className="w-full h-[200px] relative my-20">
        <Image src="/job-detail-banner.png" alt="Job Image" fill />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] flex flex-col gap-5">
          <h1 className="text-4xl md:text-6xl font-bold">
            {" "}
            {data?.job_post.job_title}
          </h1>
          <div className="flex flex-roww gap-10">
            <div className="flex gap-2">
              <FaHome />
              <p className="text-sm">{data?.job_post.location}</p>
            </div>
            <div className="flex gap-2">
              <FaMapMarker />
              <p className="text-sm">{data?.job_post.job_type}</p>
            </div>
            <div className="flex gap-2">
              <Eye />
              <p className="text-sm">{data?.job_post.views} views</p>
            </div>
            <div className="flex gap-2">
              <BiMoney />
              <p className="text-sm">
                {formatPrice(data?.job_post.compensation || 0)}
              </p>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizedHTML(data?.job_post.description || ""),
            }}
            className="prose  prose-lg
                  max-w-none prose-headings:font-bold [&>*]:text-gray-700 [&>*]:text-xs prose-headings:text-gray-900 [&>h2]:!font-adron-bold [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>p]:my-5 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:text-xs [&>a]:text-blue-600 [&>a]:no-underline [&>a]:border-b-2 [&>a]:border-blue-300 [&>a]:hover:border-blue-600 [&>strong]:text-gray-900 [&>ul]:list-inside [&>ol]:list-inside [&>ul]:list-disc [&>ol]:list-decimal [&>li]:my-1 blockquote:border-l-4 blockquote:border-gray-300 blockquote:pl-4 blockquote:italic [&>img]:rounded-lg [&>img]:shadow-md [&>table]:border [&>table]:border-gray-200 [&>th]:bg-gray-50 [&>th]:p-2 [&>td]:p-2 "
          />
          <div className="">
            <p className="font-bold">Key Responsibilities:</p>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizedHTML(data?.job_post.key_responsibility || ""),
              }}
              className="ml-5 prose  prose-lg
                  max-w-none prose-headings:font-bold [&>*]:text-gray-700 [&>*]:text-xs prose-headings:text-gray-900 [&>h2]:!font-adron-bold [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>p]:my-5 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:text-xs [&>a]:text-blue-600 [&>a]:no-underline [&>a]:border-b-2 [&>a]:border-blue-300 [&>a]:hover:border-blue-600 [&>strong]:text-gray-900 [&>ul]:list-inside [&>ol]:list-inside [&>ul]:list-disc [&>ol]:list-decimal [&>li]:my-1 blockquote:border-l-4 blockquote:border-gray-300 blockquote:pl-4 blockquote:italic [&>img]:rounded-lg [&>img]:shadow-md [&>table]:border [&>table]:border-gray-200 [&>th]:bg-gray-50 [&>th]:p-2 [&>td]:p-2 "
            />
          </div>
          <div className="">
            <p className="font-bold">Requirements:</p>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizedHTML(data?.job_post.requirements || ""),
              }}
              className="ml-5 prose  prose-lg
                  max-w-none prose-headings:font-bold [&>*]:text-gray-700 [&>*]:text-xs prose-headings:text-gray-900 [&>h2]:!font-adron-bold [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>p]:my-5 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:text-xs [&>a]:text-blue-600 [&>a]:no-underline [&>a]:border-b-2 [&>a]:border-blue-300 [&>a]:hover:border-blue-600 [&>strong]:text-gray-900 [&>ul]:list-inside [&>ol]:list-inside [&>ul]:list-disc [&>ol]:list-decimal [&>li]:my-1 blockquote:border-l-4 blockquote:border-gray-300 blockquote:pl-4 blockquote:italic [&>img]:rounded-lg [&>img]:shadow-md [&>table]:border [&>table]:border-gray-200 [&>th]:bg-gray-50 [&>th]:p-2 [&>td]:p-2 "
            />
          </div>
          <div className="">
            <p className="font-bold">Preferred Qualifications:</p>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizedHTML(data?.job_post.qualifications || ""),
              }}
              className="ml-5 prose  prose-lg
                  max-w-none prose-headings:font-bold [&>*]:text-gray-700 [&>*]:text-xs prose-headings:text-gray-900 [&>h2]:!font-adron-bold [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>p]:my-5 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:text-xs [&>a]:text-blue-600 [&>a]:no-underline [&>a]:border-b-2 [&>a]:border-blue-300 [&>a]:hover:border-blue-600 [&>strong]:text-gray-900 [&>ul]:list-inside [&>ol]:list-inside [&>ul]:list-disc [&>ol]:list-decimal [&>li]:my-1 blockquote:border-l-4 blockquote:border-gray-300 blockquote:pl-4 blockquote:italic [&>img]:rounded-lg [&>img]:shadow-md [&>table]:border [&>table]:border-gray-200 [&>th]:bg-gray-50 [&>th]:p-2 [&>td]:p-2 "
            />
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
