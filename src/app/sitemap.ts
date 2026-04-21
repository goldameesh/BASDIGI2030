import { MetadataRoute } from 'next'
import { servicesData } from '@/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bhramaastra.com'
  
  // Core routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/ecosystem',
    '/library',
    '/academy',
    '/decisionmine',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/playground',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic service routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
