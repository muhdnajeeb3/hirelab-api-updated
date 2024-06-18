/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "thinkdream.in",
            },
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    // Remove or comment out distDir to use the default .next directory
    // distDir: "build",

    webpack(config, options) {
        console.log('Building project with Next.js version:', require('next/package.json').version);
        console.log('Dist Directory:', options.config.distDir);
        return config;
    }
};

module.exports = nextConfig;
