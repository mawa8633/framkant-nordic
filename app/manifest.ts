import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Framkant Nordic",
    short_name: "Framkant",
    description: "Structured digital growth systems for long-term business growth.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0057C2",
    icons: [
      {
        src: "/assets/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
