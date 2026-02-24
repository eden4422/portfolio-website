import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio-website", // Remove this line if deploying to username.github.io
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
