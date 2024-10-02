/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'development' ? undefined : 'export',
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@tabler/icons-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abnffhjllqq8li90.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
  sassOptions: {
    prependData: `@import "./_mantine.scss";`,
  },
};

export default nextConfig;
