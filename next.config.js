
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
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
}

module.exports = nextConfig
