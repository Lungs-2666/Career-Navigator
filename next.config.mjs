/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  serverExternalPackages: ['mongodb'],

};

export default nextConfig;
