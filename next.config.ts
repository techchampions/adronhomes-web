import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: ["adron.microf10.sg-host.com", "adrons.com"], // 👈 Add the domain here
  },
};

export default nextConfig;
