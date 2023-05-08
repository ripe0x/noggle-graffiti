import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://nogglesgraffiti.wtf",
      lastModified: new Date(),
    },
  ];
}
