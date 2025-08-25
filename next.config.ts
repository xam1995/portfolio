import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'portfolio' // change this

const nextConfig: NextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: isProd ? `/${repoName}` : '',
    assetPrefix: isProd ? `/${repoName}` : '',
  /* config options here */
};

export default nextConfig;
