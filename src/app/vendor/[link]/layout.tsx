import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../../globals.css";
import { Providers } from "../../Provider";

export const metadata: Metadata = {
  title: "Vendor Gift Portal | Adron Homes",
  description: "Manage promotional gift pickup requests from Adron Homes.",
  robots: { index: false, follow: false },
};

export default function VendorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
