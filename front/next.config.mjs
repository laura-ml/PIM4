/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
 
                protocol: 'https',
                hostname: '**', 
                port: '',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com', 
                port: '',
                pathname: '/images?q=tbn:**'
            },
        ],
    },
};

export default nextConfig;