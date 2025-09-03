import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'portfolio'

const nextConfig: NextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: isGhPages ? `/${repoName}` : '',
};

export default nextConfig;
