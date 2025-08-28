"use client";
import { useGetHomeListing } from "@/data/hooks";
import Loader from "./Loader";
import ApiErrorBlock from "./ApiErrorBlock";
import HomePropertyList from "./HomePagePropertyList";
import Pagination from "@/components/Pagination";
import { useState } from "react";

export default function HomeListingContainer() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetHomeListing(page);

  if (isLoading) return <Loader />;
  if (isError) return <ApiErrorBlock />;
  const estates = data?.data || [];
  const totalPages = data?.last_page || 0;

  return (
    <div className="max-w-7xl mx-auto p-2 md:p-6">
      <div className="bg-transparent w-full mt-6 mb-10">
        <div className="flex flex-col justify-center mx-auto text-center space-y-2">
          <h1 className="text-4xl md:text-6xl text-black font-bold">
            Our Home Listings
          </h1>
          <p className="text-sm w-[70%] font-bold md:w-full mx-auto">
            this is our home listings
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl px-4 md-px-10 py-6 md:py-10 w-full mx-auto">
        <HomePropertyList properties={estates} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
          hasPrev={!!data?.prev_page_url}
          hasNext={!!data?.next_page_url}
        />
      </div>
    </div>
  );
}
