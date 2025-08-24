import Loader from "@/components/Loader";
import { JobsApiResponse } from "@/data/types/jobListTypes";
import { Suspense } from "react";

export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://adron.microf10.sg-host.com/api/jobs-page",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Identifier: "dMNOcdMNOPefFGHIlefFGHIJKLmno",
          Accept: "application/json",
        },
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jobsData: JobsApiResponse = await response.json();
    const jobs = jobsData.data.jobs_post.data;

    return jobs.map((jobs) => ({
      id: jobs.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching jobs for static generation:", error);
    return [];
  }
}

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
