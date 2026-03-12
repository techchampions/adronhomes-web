import CookieConsent from "@/components/CookieConsent";
import ErrorBoundary from "@/components/ErrorBoundary";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar";
import PressOneWidget from "@/components/PressOneWidget";
// import RouteTracker from "@/components/RouteTracker";
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
  title: "Adron Homes - Find Your Dream Property",
  description: "Discover premium properties and homes with Adron Homes. Your trusted real estate partner in Nigeria.",
  keywords: ["real estate", "properties", "homes", "Adron Homes", "Nigeria property"],
  openGraph: {
    title: "Adron Homes - Find Your Dream Property",
    description: "Discover premium properties and homes with Adron Homes.",
    type: "website",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adron Homes - Find Your Dream Property",
    description: "Discover premium properties and homes with Adron Homes.",
    images: ["/logo.svg"],
  },

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
        {/* <RouteTracker /> */}
        <TawkTo />
      </head>

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
