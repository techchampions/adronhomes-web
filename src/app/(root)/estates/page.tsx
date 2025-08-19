import EstatePageGroup from "@/components/EstatePageGroup";
import Loader from "@/components/Loader";
import { Suspense } from "react";

export default function EstatePage() {
  return (
    <Suspense fallback={<Loader />}>
      <EstatePageGroup />;
    </Suspense>
  );
}
