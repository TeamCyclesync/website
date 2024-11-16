import { MetadataRoute } from 'next'

// You can add more page types as your site grows
type Page = {
  slug: string
  lastModified: Date
}

function generateSiteMap() {
  // Base URL of your website
  const baseUrl = 'https://cyclesync.com'

  // Main sections of your landing page
  const sections = [
    'hero',
    'services',
    'team',
    'get-started',
  ]

  // Static pages (currently just homepage)
  const pages: Page[] = [
    {
      slug: '',
      lastModified: new Date(),
    }
  ]

  // Generate sitemap entries
  return [
    // Main pages
    ...pages.map((page) => ({
      url: `${baseUrl}${page.slug}`,
      lastModified: page.lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    })),

    // Section anchors
    ...sections.map((section) => ({
      url: `${baseUrl}/#${section}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSiteMap()
}