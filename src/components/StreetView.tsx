// components/StreetView.tsx
"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

type Props = {
  lat: number;
  lng: number;
};

export default function StreetView({ lat, lng }: Props) {
  const streetViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // store securely in .env
      version: "weekly",
    });

    loader.load().then(() => {
      if (!streetViewRef.current) return;

      const panorama = new google.maps.StreetViewPanorama(
        streetViewRef.current,
        {
          position: { lat, lng },
          pov: { heading: 165, pitch: 0 },
          zoom: 1,
        }
      );
    });
  }, [lat, lng]);

  return <div ref={streetViewRef} style={{ width: "100%", height: "500px" }} />;
}
