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
    // This will only run on the client side
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/66ad19831601a2195ba01fda/1i4a2nafr";
    s1.setAttribute("crossorigin", "*");
    if (s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }
  }, []);

  return null; // This component doesn't need to render anything
};

export default TawkTo;
