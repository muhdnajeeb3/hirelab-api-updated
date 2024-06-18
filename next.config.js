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
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    distDir: ".next", // Ensure you really need this; otherwise, consider removing it

    // Add logging for debugging
    webpack(config, options) {
        console.log('Building project with Next.js version:', require('next/package.json').version);
        console.log('Dist Directory:', options.config.distDir);
        return config;
    }
}

module.exports = nextConfig;
