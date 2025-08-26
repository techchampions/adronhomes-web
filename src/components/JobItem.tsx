"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";
interface Job {
  id: number;
  job_title: string;
  job_type: string;
  location: string;
}

const JobItem = ({ job }: { job: Job }) => {
  const router = useRouter();

  const handleViewJob = () => {
    router.push(
      `/careers/jobs/${job.id}?title=${encodeURIComponent(job.job_title)}`
    );
  };

  return (
    <div className="flex flex-col bg-adron-body rounded-[20px] px-5 py-6 m-2 gap-1.5">
      <h5 className="text-lg font-semibold mt-2">{job.job_title}</h5>
      <p className="text-sm text-adron-gray-300">{job.job_type}</p>
      <p className="text-sm text-adron-gray-300">{job.location}</p>
      <Button
        label="View Details"
        type="button"
        onClick={handleViewJob}
        className="bg-adron-green text-white mt-4 text-sm px-4 py-2 !w-fit"
      />
    </div>
  );
};
export default JobItem;
