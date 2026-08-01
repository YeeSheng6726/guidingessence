import type { MetadataRoute } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Guiding Essence",
    short_name: "Guiding Essence",
    description: "Helping businesses grow by empowering people and transforming the way work gets done.",
    start_url: `${basePath}/`,
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: `${basePath}/icon.png`,
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
