// "use client";

// const TawkTo = () => {
//   const render = () => {
//     const s1 = document.createElement("script"),
//       s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = "https://embed.tawk.to/66ad19831601a2195ba01fda/1i4a2nafr";
//     s1.setAttribute("crossorigin", "*");
//     s0.parentNode?.insertBefore(s1, s0);
//     return null;
//   };
//   return <div>{render()}</div>;
// };

// export default TawkTo;

"use client";

import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    // 1. Official API – MUST be set BEFORE script loads
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_API.customStyle = {
      zIndex: 1000,
      visibility: {
        desktop: {
          position: "bl",       // bottom left
          xOffset: "20",        // px from left edge
          yOffset: "20",        // px from bottom
        },
        mobile: {
          position: "bl",
          xOffset: "16",
          yOffset: "80",        // more space on mobile to avoid overlap
        },
      },
    };

    // 2. CSS fallback with higher specificity
    const style = document.createElement("style");
    style.innerHTML = `
      iframe#tawkchat-minimized-container,
      iframe#tawkchat-maximized,
      iframe[title="chat widget"],
      .tawk-flex-container,
      .tawk-chat-container,
      .tawk-body,
      .tawk-min,
      .tawk-lancher,
      [id*="tawk"][style*="right"],
      .widget-visible {
        left: 20px !important;
        right: auto !important;
        margin-right: 0 !important;
        transform: none !important;
      }

      /* Force expanded panel left */
      .tawk-text-right,
      .tawk-right-aligned,
      .tawk-chat-window {
        right: auto !important;
        left: 20px !important;
      }

      .tawk-flex {
        justify-content: flex-start !important;
        flex-direction: row-reverse !important; /* sometimes helps flip alignment */
      }
    `;
    document.head.appendChild(style);

    // 3. Load script AFTER customStyle
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/66ad19831601a2195ba01fda/1i4a2nafr";
    s1.setAttribute("crossorigin", "*");
    if (s0.parentNode) s0.parentNode.insertBefore(s1, s0);

    // 4. MutationObserver + timer fallback for resets
    const forceLeft = (el: HTMLElement) => {
      el.style.left = "20px";
      el.style.right = "auto";
      el.style.marginRight = "0";
      if (el.style.transform?.includes("translate")) {
        el.style.transform = el.style.transform.replace(/translateX$$   [^)]+   $$/, "translateX(0)");
      }
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        document.querySelectorAll(
          'iframe[title="chat widget"], iframe#tawkchat-maximized, .tawk-min, .tawk-flex, .tawk-chat-container, [id*="tawk"]'
        ).forEach((el) => forceLeft(el as HTMLElement));
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    // Timer fallback – Tawk often resets after delay/scroll
    const interval = setInterval(() => {
      document.querySelectorAll(
        'iframe[title="chat widget"], iframe#tawkchat-maximized, .tawk-min, .tawk-flex, .tawk-chat-container'
      ).forEach((el) => forceLeft(el as HTMLElement));
    }, 500);

    // Stop timer after ~5s (or keep if very stubborn)
    setTimeout(() => clearInterval(interval), 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default TawkTo;