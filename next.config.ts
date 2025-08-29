import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'portfolioo'

const nextConfig: NextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: isGhPages ? `/${repoName}` : '',
    assetPrefix: isGhPages ? `/${repoName}` : '',
};

export default nextConfig;
