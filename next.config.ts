import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <--- Tells Next.js to generate static HTML files (index.html, etc.)
  images: {
    unoptimized: true, // <--- Required: Truehost cannot run the Next.js Image Optimization server
  },
};

export default nextConfig;