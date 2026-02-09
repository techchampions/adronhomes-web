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
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_API.customStyle = {
      zIndex: 1000,
      visibility: {
        desktop: {
          position: "bl",
          xOffset: "20",
          yOffset: "20",
        },
        mobile: {
          position: "bl",
          xOffset: "16",
          yOffset: "20",
        },
      },
    };

    const style = document.createElement("style");
    style.innerHTML = `
      /* Move chat to left and fix alignment */
      iframe#tawkchat-minimized-container,
      iframe#tawkchat-maximized,
      iframe[title="chat widget"],
      .tawk-flex-container,
      .tawk-chat-container,
      .tawk-min {
        left: 20px !important;
        right: auto !important;
        margin-right: 0 !important;
        transform: none !important;
      }

      /* Reduce hand icon size */
      .tawk-min {
        transform: scale(0.7) !important; /* 70% of original size */
        transform-origin: bottom left !important;
      }

      /* Optional: adjust maximized chat panel */
      .tawk-chat-container {
        left: 20px !important;
        right: auto !important;
      }
    `;
    document.head.appendChild(style);

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/66ad19831601a2195ba01fda/1i4a2nafr";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);

    return () => {
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default TawkTo;
