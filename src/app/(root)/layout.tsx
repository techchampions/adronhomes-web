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
  description:
    "Discover premium properties and homes with Adron Homes. Your trusted real estate partner in Nigeria.",
  keywords: [
    "real estate",
    "properties",
    "homes",
    "Adron Homes",
    "Nigeria property",
  ],
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
        {/* TikTok Pixel Code */}
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
                var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
                ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                ttq.load('D6LBL73C77U5049K047G');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2259472234373802');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2259472234373802&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* X (Twitter) conversion tracking base code */}
        <Script
          id="twitter-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','nvq8z');
            `,
          }}
        />

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