// components/TawkTo.js
"use client";
import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    // Prevent loading in development
    if (process.env.NODE_ENV !== "production") return;

    const s1 = document.createElement("script");
    const s0 = document.createElement("script");

    s1.async = true;
    s1.src = "https://embed.tawk.to/1i4a2nafr/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    s0.innerText = `
      var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
      (function() {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/1i4a2nafr/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
    `;

    document.head.appendChild(s1);
  }, []);

  return null;
};

export default TawkTo;
