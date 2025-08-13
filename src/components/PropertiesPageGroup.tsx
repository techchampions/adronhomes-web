"use client";
import { usePropertiespage } from "@/data/hooks";
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
      setFilters({ state: location });
      console.log("filters:", filters);
    }
  }, [location, filters]); // <- only runs when location changes
  const { data, isLoading, isError } = usePropertiespage(page, filters);

  if (isLoading) return <Loader />;
  if (isError) return <ApiErrorBlock />;
  const properties =
    filters && Object.values(filters).some((v) => v !== "")
      ? data?.data || []
      : data?.properties?.data || [];

  const totalPages = data?.properties.last_page || 0;

  return (
    <div className="max-w-7xl mx-auto p-2 md:p-6">
      {/* <Suspense fallback={<Loader />}>
        <PropertiesPageHeader />
        </Suspense> */}
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
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
          hasPrev={!!data?.properties.prev_page_url}
          hasNext={!!data?.properties.next_page_url}
        />
      </div>
    </div>
  );
}
