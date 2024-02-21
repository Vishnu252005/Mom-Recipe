import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moms-recipe.app"
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ]
}
