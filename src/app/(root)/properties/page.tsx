import Loader from "@/components/Loader";
import PropertiesPageGroup from "@/components/PropertiesPageGroup";
import { Suspense } from "react";

export default function PropertiesPage() {
  return (
    <Suspense fallback={<Loader />}>
      <PropertiesPageGroup />;
    </Suspense>
  );
}
