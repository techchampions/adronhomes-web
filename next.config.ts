import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["adron.microf10.sg-host.com", "adrons.com"],
  },
};

export default nextConfig;
