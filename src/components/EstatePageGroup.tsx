"use client";
import { useGetEstates } from "@/data/hooks";
import Loader from "./Loader";
import ApiErrorBlock from "./ApiErrorBlock";
import HomePropertyList from "./HomePagePropertyList";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { EstateFilters } from "@/data/api";
import Pagination from "@/components/Pagination";
import EstatePageHeader from "@/components/EstatePageHeader";

export default function EstatePageGroup() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const location = searchParams.get("state") || "";
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState<EstateFilters>({});

  // Reset filters if user navigates to /properties again
  useEffect(() => {
    console.log("pathname:", pathname);
    const handleReset = () => {
      if (pathname === "/estate") {
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
    }
  }, [location]); // <- only runs when location changes
  const { data, isLoading, isError } = useGetEstates(page, filters);

  if (isLoading) return <Loader />;
  if (isError) return <ApiErrorBlock />;
  const estates = data?.properties.data || [];
  const totalPages = data?.properties?.last_page || 0;

  return (
    <div className="max-w-7xl mx-auto p-2 md:p-6">
      <EstatePageHeader data={data?.properties_header[0]} />

      <div className="bg-white rounded-3xl px-4 md-px-10 py-6 md:py-10 w-full mx-auto">
        <HomePropertyList properties={estates} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
          hasPrev={!!data?.properties?.prev_page_url}
          hasNext={!!data?.properties?.next_page_url}
        />
      </div>
    </div>
  );
}
