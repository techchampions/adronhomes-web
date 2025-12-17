import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL("https://adron.microf10.sg-host.com"),
      new URL("https://adrons.com"),
    ],
  },
};

export default nextConfig;
