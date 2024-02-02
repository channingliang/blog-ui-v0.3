
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/posts',
        permanent: true,
      },
    ]
  },
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pic.stayuplate.icu',
        port: '',
        pathname: '/**/**',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'pic.stayuplate.icu',
      //   port: '',
      //   pathname: '/image/**',
      // },
    ],
  },
  output: "standalone",
  eslint: {
    // Warning: This allows production builds to successfully complete even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
