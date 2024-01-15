
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.stayuplate.icu',
        port: '',
        pathname: '/i/**',
      },
    ],
  },
}

module.exports = nextConfig