import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.handsoncert.com/certs/az-104/',
      lastModified: new Date('2026-06-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
