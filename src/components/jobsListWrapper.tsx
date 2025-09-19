"use client";

import { useJobListPage } from "@/data/hooks";
import Loader from "./Loader";
import JobsList from "./JobsList";
import ApiErrorBlock from "./ApiErrorBlock";
import NoPropertyFound from "@/components/NoPropertyFound";
import Button from "@/components/Button";

const JobsListWrapper = () => {
  const { data, isLoading, isError } = useJobListPage(1, "");

  if (isLoading) return <Loader />;
  if (isError) return <ApiErrorBlock />;

  const jobs = data?.data.jobs_post.data || [];
  console.log(jobs.length);
  if (jobs.length < 1) {
    return <NoPropertyFound text="No Jobs found." />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full rounded-[50px] md:px-8 py-5 mt-10 text-left mb-20">
        <JobsList jobs={jobs.slice(0, 3)} />
      </div>
      <Button
        label="View Jobs"
        onClick={() => (window.location.href = "/careers/jobs")}
        className="bg-adron-green px-4 text-sm !w-fit"
      />
    </div>
  );
};
export default JobsListWrapper;
