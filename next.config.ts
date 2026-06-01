import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",

  poweredByHeader: false,

  reactStrictMode: true,
  
  images: {

    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-client-webp-image.s3.ap-south-1.amazonaws.com",
      },
    ],
    formats: ["image/avif", "image/webp"],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    minimumCacheTTL: 2678400,

    dangerouslyAllowSVG: true,

    contentDispositionType: "attachment",
  },
  trailingSlash: true,

   experimental: {
    scrollRestoration: true,

    optimisticClientCache: true,
    optimizeCss: true,
    optimizePackageImports: ["react-datepicker", "axios", "swiper/react"],
  },
};

export default nextConfig;
