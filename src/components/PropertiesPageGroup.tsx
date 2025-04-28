"use client";
import { usePropertiespage } from "@/data/hooks";
import FilterBar from "./FilterBar";
import SwiperPropertyList from "./SwiperPropertyList";
import Loader from "./Loader";
import ApiErrorBlock from "./ApiErrorBlock";
import HomePropertyList from "./HomePagePropertyList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PropertiesPageHeader from "./PropertiesPageHeader";

export default function PropertiesPageGroup() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const location = searchParams.get("location") || "";
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Record<string, any>>({});

  // Reset filters if user navigates to /properties again
  useEffect(() => {
    console.log("pathname:", pathname);
    const handleReset = () => {
      if (pathname === "/properties") {
        setPage(1);
        setFilters({});
      }
    };

    window.addEventListener("reset-properties", handleReset);

    return () => {
      window.removeEventListener("reset-properties", handleReset);
    };
  }, [pathname]);
  useEffect(() => {
    if (location) {
      setFilters({ state: location });
      console.log("filters:", filters);
    }
  }, [location]); // <- only runs when location changes
  const { data, isLoading, isError } = usePropertiespage(page, filters);

  if (isLoading) return <Loader />;
  if (isError) return <ApiErrorBlock />;
  const properties =
    filters && Object.values(filters).some((v) => v !== "")
      ? data?.data || []
      : data?.properties?.data || [];

  const pagination = data?.properties;

  return (
    <div className="max-w-7xl mx-auto p-2 md:p-6">
      <PropertiesPageHeader />

      <FilterBar
        initialFilters={filters}
        onFilter={(values) => {
          const mapped = {
            state: values.state,
            type: values.propertyType,
            status: values.status,
            minPrice: values.min,
            maxPrice: values.max,
          };

          setPage(1); // Reset pagination when filters change
          setFilters(mapped);
        }}
      />
      <div className="bg-white rounded-3xl px-4 md-px-10 py-6 md:py-10 w-full mx-auto">
        <HomePropertyList properties={properties} />
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={!pagination?.prev_page_url}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {pagination?.current_page} of {pagination?.last_page}
          </span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={!pagination?.next_page_url}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
