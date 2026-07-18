import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/branscher", destination: "/industries", permanent: true },
      { source: "/branscher/:path*", destination: "/industries/:path*", permanent: true },
      { source: "/tjanster", destination: "/services", permanent: true },
      { source: "/tjanster/:path*", destination: "/services/:path*", permanent: true },
      { source: "/kundcase", destination: "/case-studies", permanent: true },
      { source: "/kundcase/:path*", destination: "/case-studies/:path*", permanent: true },
      { source: "/resurser", destination: "/resources", permanent: true },
      { source: "/resurser/:path*", destination: "/resources/:path*", permanent: true },
      { source: "/om-oss", destination: "/about", permanent: true },
      { source: "/kontakt", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
