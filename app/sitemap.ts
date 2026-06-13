import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.handsoncert.com/hashicorp/',
      lastModified: new Date('2026-06-12'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.handsoncert.com/gcp/',
      lastModified: new Date('2026-06-12'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://www.handsoncert.com/azure/',
      lastModified: new Date('2026-06-12'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://www.handsoncert.com/certs/',
      lastModified: new Date('2026-06-11'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.handsoncert.com/certs/az-104/',
      lastModified: new Date('2026-06-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
