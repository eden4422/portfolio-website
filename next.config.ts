import type { NextConfig } from "next";

const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/portfolio-website" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
