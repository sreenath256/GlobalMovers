import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig(async () => {

  let blogRoutes = [];

  try {
    // Fetch up to 100 pages from your "blog user" (Author ID 2)
    const response = await fetch('https://lemonchiffon-whale-379446.hostingersite.com/wp-json/wp/v2/pages?author=4&per_page=100');
    const pages = await response.json();

    // Map the WordPress slugs into your React routing format
    blogRoutes = pages.map(page => `/blog/${page.slug}`);
  } catch (error) {
    console.error('Failed to fetch blogs for sitemap:', error);
  }

  const allRoutes = [
    '/',
    '/storage-solutions-in-abu-dhabi',
    '/services',
    '/gallery',
    '/blog',
    '/services/office-movers-in-abu-dhabi',
    '/services/house-movers-in-abu-dhabi',
    '/services/corporate-services',
    '/services/short-term-storage-solutions-in-abu-dhabi',
    '/services/long-term-storage-solutions-in-abu-dhabi',
    '/services/commercial-space',
    '/services/furniture-handyman',
    '/contact-us',
    ...blogRoutes // The "spread" operator adds all fetched routes to this list
  ];

  return {
    plugins: [
      react(),
      Sitemap({
        hostname: 'https://globaliconmovers.com',
        dynamicRoutes: allRoutes
      })
    ],
  }
})


