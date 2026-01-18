/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Webpack вече е конфигуриран автоматично от Next.js
  // Можете да добавите custom конфигурация тук ако е необходимо:
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Custom webpack конфигурация
  //   return config
  // },
  
  // Production оптимизации
  swcMinify: true, // Използва SWC за минификация (по-бързо)
  compress: true, // Gzip компресия
  poweredByHeader: false, // Скрива X-Powered-By header за сигурност
  
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  },
}

module.exports = nextConfig
