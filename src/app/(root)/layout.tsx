import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import "leaflet/dist/leaflet.css"; // ✅ Add Leaflet CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "../Provider";
import TawkTo from "@/components/TawkTo";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ErrorBoundary from "@/components/ErrorBoundary";
import Script from "next/script";
import PressOneWidget from "@/components/PressOneWidget";

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
        <GoogleAnalytics />
        <TawkTo />
      </head>
      {/* <GoogleAnalytics />
      <TawkTo /> */}
 

      <body className={`${adronTitle.variable} antialiased`}>
        <ErrorBoundary>
          <Providers>
            <CookieConsent />
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
