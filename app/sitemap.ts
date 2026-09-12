import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const BASE_URL = 'https://www.handsoncert.com'
const FALLBACK_DATE = new Date('2026-07-29')

// Real per-file last-modified date from git history, computed once at build time.
// Falls back to a fixed date if git isn't available (e.g. a shallow-clone build
// environment) rather than fabricating a "just built" timestamp.
function lastModified(relPath: string): Date {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${relPath}"`, {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim()
    return iso ? new Date(iso) : FALLBACK_DATE
  } catch {
    return FALLBACK_DATE
  }
}

// Auto-discovers page directories so new certs/comparisons show up in the
// sitemap without a manual edit here.
function listPageDirs(relDir: string): string[] {
  const abs = path.join(process.cwd(), relDir)
  if (!fs.existsSync(abs)) return []
  return fs
    .readdirSync(abs, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(abs, entry.name, 'page.tsx')))
    .map((entry) => entry.name)
    .sort()
}

// Provider hub pages: small, stable set. Not auto-discovered like certs/compare
// because they're sibling top-level app/ directories alongside non-page folders
// (fonts, etc.) with no shared parent to scan.
const HUB_SLUGS = ['azure', 'gcp', 'cncf', 'hashicorp', 'microsoft-365']

export default function sitemap(): MetadataRoute.Sitemap {
  const certSlugs = listPageDirs('app/certs')
  const compareSlugs = listPageDirs('app/compare')

  const entries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: lastModified('app/route.ts'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/certs/`,
      lastModified: lastModified('app/certs/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  for (const slug of certSlugs) {
    entries.push({
      url: `${BASE_URL}/certs/${slug}/`,
      lastModified: lastModified(`app/certs/${slug}/page.tsx`),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  for (const slug of compareSlugs) {
    entries.push({
      url: `${BASE_URL}/compare/${slug}/`,
      lastModified: lastModified(`app/compare/${slug}/page.tsx`),
      changeFrequency: 'monthly',
      priority: 0.75,
    })
  }

  for (const slug of HUB_SLUGS) {
    entries.push({
      url: `${BASE_URL}/${slug}/`,
      lastModified: lastModified(`app/${slug}/page.tsx`),
      changeFrequency: 'weekly',
      priority: 0.85,
    })
  }

  return entries
}
