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
    // Add CSS to force left positioning - ONLY for Tawk.to elements
    const style = document.createElement("style");
    style.innerHTML = `
      /* Only target Tawk.to specific elements */
      iframe[title="chat widget"],
      iframe[src*="tawk.to"],
      div[id*="tawk"],
      .widget-visible {
        left: 20px !important;
        right: auto !important;
      }
    `;
    document.head.appendChild(style);

    // Load Tawk.to script
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/66ad19831601a2195ba01fda/1i4a2nafr";
    s1.setAttribute("crossorigin", "*");
    
    if (s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }

    // Monitor for widget injection and force position
    const observer = new MutationObserver(() => {
      const widgets = document.querySelectorAll('iframe[title="chat widget"], div[id*="tawk"]');
      widgets.forEach((widget: any) => {
        if (widget.style) {
          widget.style.left = '20px';
          widget.style.right = 'auto';
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null;
};

export default TawkTo;
