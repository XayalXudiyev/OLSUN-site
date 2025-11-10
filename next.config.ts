import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    debugIds: true,
  },
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: {
      properties: ["^data-testid$"],
    },
  },
  experimental: {
    esmExternals: true,
    optimizeCss: true,
    optimizePackageImports: [
      "react-hook-form",
      "zod",
      "react-hook-form/resolvers",
      "shadcn/ui",
    ],
  },
};

export default withNextIntl(nextConfig);
