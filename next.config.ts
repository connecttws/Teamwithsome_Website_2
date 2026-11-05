import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1yei2z3i6k35z.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "d3syewzhvzylbl.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "d2543nuuc0wvdg.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
