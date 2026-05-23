/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

const nextConfig = {
  output: 'export',   // ← add this
  basePath: '/Portfolio', // ← add this (matches your repo name)
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
}