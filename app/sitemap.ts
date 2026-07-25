import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/profile";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/experience", "/projects", "/research", "/leadership", "/resume", "/contact"];
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
