import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  images: {

    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-client-webp-image.s3.ap-south-1.amazonaws.com",
      },
    ],
    // formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
  },
  trailingSlash: true,
};

export default nextConfig;
