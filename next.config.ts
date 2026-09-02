import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // Generate static HTML/CSS/JS in /out
  trailingSlash: true,        // Ensures /software/kaunhaibe/ works as index.html in subfolders
  images: {
    unoptimized: true,        // Required: Next.js image optimization needs a server
  },
};

export default nextConfig;
