"use client";

import { useEffect } from "react";

export default function PressOneWidget() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).PressOne) {
      (window as any).PressOne.init(
        'pk_138300uHfNAPlkg6JDZ7t3Mnt3lOt',
        {
          minimal: true,
          display: false,
          bottom: "20px",
          right: "20px",
          element: "#call-widget",

          onCallInitiated: (phone: string) => {
            console.log("Call initiated:", phone);
          },
          onCallStarted: (call: any) => {
            console.log("Call started:", call);
          },
          onCallEnded: (call: any) => {
            console.log("Call ended:", call);
          },
        }
      );
    }
  }, []);

  return <div id="call-widget" className="fixed bottom-20 left-20 z-50" />;
}
