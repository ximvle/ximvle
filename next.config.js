/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
