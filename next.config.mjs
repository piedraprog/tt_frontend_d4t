/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath:"/signin",
    async redirects() {
        return [
          {
            source: '/',
            destination: '/signin',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
