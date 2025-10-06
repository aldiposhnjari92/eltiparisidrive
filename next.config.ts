import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagsapi.com',
        port: '', // leave empty for default
        pathname: '/**', // allows all paths
      },
    ],
  },
};

export default nextConfig;