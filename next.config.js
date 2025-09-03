/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    swcMinify: true,
    experimental: {
        optimizePackageImports: ['lucide-react']
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '/**'
            },
        ]
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=31536000, stale-while-revalidate=59' }
                ]
            }
        ]
    }
}

export default nextConfig
