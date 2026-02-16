/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig

export default {
  output: "export", // This tells Next.js to export static HTML
};
