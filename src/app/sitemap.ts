import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import { PROJECTS_DATA } from "@/data/projects";
import { SERVICES_DATA } from "@/data/services";
import { MATERIALS_DATA } from "@/data/materials";
import { SERVICE_AREAS } from "@/data/areas";
import { ARTICLES_DATA } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/kitchen-set`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/kitchen-set/minimalis`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/kitchen-set/modern`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/kitchen-set/letter-l`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/kitchen-set/letter-u`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/kitchen-set/straight`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/kitchen-set/island`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/layanan`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/material`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/estimator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/area-layanan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/proses`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/inspirasi`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/tentang-kami`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/testimoni`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/konsultasi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/kontak`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/jadwalkan-survei`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Projects dynamic routes
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified: new Date(p.createdAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Services dynamic routes
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((s) => ({
    url: `${baseUrl}/layanan/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Material dynamic routes
  const materialRoutes: MetadataRoute.Sitemap = MATERIALS_DATA.map((m) => ({
    url: `${baseUrl}/material/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Area dynamic routes
  const areaRoutes: MetadataRoute.Sitemap = SERVICE_AREAS.map((a) => ({
    url: `${baseUrl}/area-layanan/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Article dynamic routes
  const articleRoutes: MetadataRoute.Sitemap = ARTICLES_DATA.map((art) => ({
    url: `${baseUrl}/inspirasi/${art.slug}`,
    lastModified: new Date(art.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...serviceRoutes,
    ...materialRoutes,
    ...areaRoutes,
    ...articleRoutes,
  ];
}
