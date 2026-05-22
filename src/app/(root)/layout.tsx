import CookieConsent from "@/components/CookieConsent";
import ErrorBoundary from "@/components/ErrorBoundary";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar";
import PressOneWidget from "@/components/PressOneWidget";
// import RouteTracker from "@/components/RouteTracker";
import ModalWrapper from "@/components/ModalWrapper";
import TawkTo from "@/components/TawkTo";
import "leaflet/dist/leaflet.css"; // ✅ Add Leaflet CSS
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../globals.css";
import { Providers } from "../Provider";

const adronTitle = Cormorant_Garamond({
  variable: "--font-adron-title",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Adron Homes",
  description: "Adron Home Properties.",
  icons: "/logo.svg",
};
export const googleApiKey = "AIzaSyBPIyWllHG8je77s56Pyp69b5mzlghzD9U";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://web.pressone.africa/pub-widget.js"
          strategy="beforeInteractive"
        />
        <Script src="https://js.paystack.co/v1/inline.js" />
        <Script src="https://newwebpay.interswitchng.com/inline-checkout.js" />
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places&callback=initGoogleMaps`}
        />
        <GoogleAnalytics />
        {/* <RouteTracker /> */}
        <TawkTo />
      </head>

      <body className={`${adronTitle.variable} antialiased`}>
        <ErrorBoundary>
          <Providers>
            <CookieConsent />
            <ModalWrapper />
            <Navbar />
            <main className="mb-0">{children}</main>
            <Footer />
            <PressOneWidget />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
