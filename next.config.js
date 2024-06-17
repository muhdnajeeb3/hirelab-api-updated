/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"thinkdream.in"
            }
        ]
    }
}

module.exports = nextConfig