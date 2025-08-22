import Loader from "@/components/Loader";
import { PropertiesResponse } from "@/data/types/propertiesPageTypes";
import { Suspense } from "react";

export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://adron.microf10.sg-host.com/api/properties-page",
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

    const propertiesData: PropertiesResponse = await response.json();
    const properties = propertiesData.properties.data;

    return properties.map((property) => ({
      id: property.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching properties for static generation:", error);
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
