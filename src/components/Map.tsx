// Fix Leaflet marker icon path
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: "/leaflet/marker-icon.svg",
//   iconRetinaUrl: "/leaflet/marker-icon-2x.png",
//   shadowUrl: "/leaflet/marker-shadow.png",
// });
// Fix Leaflet marker icon path

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: "/leaflet/marker-icon.svg",
//   iconRetinaUrl: "/leaflet/marker-icon-2x.png",
//   shadowUrl: "/leaflet/marker-shadow.png",
// });
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
declare module "leaflet" {
  interface IconOptions {
    _getIconUrl?: string;
  }
}

const defaultIcon = L.Icon.Default.prototype as { _getIconUrl?: string };
delete defaultIcon._getIconUrl;

type Props = {
  lat: number;
  lng: number;
};

export default function Map({ lat, lng }: Props) {
  return (
    <div className="w-full h-[200px] md:h-[400px] rounded-[40px] md:rounded-[90px] overflow-hidden shadow">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>Adron Homes Head Office</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
