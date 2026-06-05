// components/GoogleAnalytics.tsx
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VZ4Z26L5L0"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VZ4Z26L5L0');
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
