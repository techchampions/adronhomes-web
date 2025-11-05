"use client";
import { useFilterProperties, usePropertiespage } from "@/data/hooks";
import FilterBar from "./FilterBar";
import Loader from "./Loader";
import ApiErrorBlock from "./ApiErrorBlock";
import HomePropertyList from "./HomePagePropertyList";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PropertiesPageHeader from "./PropertiesPageHeader";
import { PropertyFilters } from "@/data/api";
import Pagination from "@/components/Pagination";

export default function PropertiesPageGroup() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const location = searchParams.get("location") || "";
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState<PropertyFilters>({});

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
      setFilters({ state: location, type: "1" });
    }
  }, [location]); // <- only runs when location changes
  const { data, isLoading, isError } = usePropertiespage(page);
  console.log(data);
  const {
    data: filteredData,
    isLoading: filtering,
    isError: notFiltered,
  } = useFilterProperties(page, filters);

  if (isLoading || filtering) return <Loader />;
  if (isError || notFiltered) return <ApiErrorBlock />;
  const properties = filteredData?.data || [];
  const totalPages = filteredData?.last_page || 0;

  return (
    <div className="max-w-7xl mx-auto p-2 md:p-6">
      <PropertiesPageHeader />

      <FilterBar
        filtering={filtering}
        initialFilters={filters}
        onFilter={(values) => {
          const mapped: PropertyFilters = {
            state: values.state,
            type: values.type,
            bedrooms: values.bedrooms,
            status: values.status,
            min: values.min,
            max: values.max,
          };

          setPage(1); // Reset pagination when filters change
          setFilters(mapped);
        }}
      />
      <div className="bg-white rounded-3xl px-4 md-px-10 py-6 md:py-10 w-full mx-auto">
        <HomePropertyList properties={properties} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
          hasPrev={!!filteredData?.prev_page_url}
          hasNext={!!filteredData?.next_page_url}
        />
      </div>
    </div>
  );
}
