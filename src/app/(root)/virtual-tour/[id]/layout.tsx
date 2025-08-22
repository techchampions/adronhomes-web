import Loader from "@/components/Loader";
import { VirtualTourResponse } from "@/data/types/virtualTourPageTypes";
import { Suspense } from "react";

export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://adron.microf10.sg-host.com/api/virtual-tour",
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

    const virtualTourData: VirtualTourResponse = await response.json();
    const virtualTour = virtualTourData.data.virtual_properties.data;

    return virtualTour.map((property) => ({
      id: property.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching properties for static generation:", error);
    return [];
  }
}

export default function VirtualTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
