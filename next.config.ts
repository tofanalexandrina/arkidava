import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(process.env.S3_PUBLIC_DEVELOPMENT_URL!).hostname,
      },
    ],
  },
};

export default withPayload(nextConfig);
