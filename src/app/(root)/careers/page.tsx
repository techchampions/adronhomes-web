"use client";
import Button from "@/components/Button";
import Image from "next/image";
import JobsListWrapper from "@/components/jobsListWrapper";

export default function CareersPage() {
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

      <div className="w-full mx-auto px-6 py-10 bg-white rounded-[40px] mb-5">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          What kind of Job are you looking for?
        </h2>
        <JobsListWrapper />
      </div>
    </div>
  );
}
