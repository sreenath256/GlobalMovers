import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import path from 'path'
import { URL } from './src/common/api'


// https://vite.dev/config/
export default defineConfig(async () => {
  let cmsBlogRoutes = [];

  // Fetch blogs from your Custom CMS
  try {
    const cmsResponse = await fetch(`${URL}/public/blogs`);
    const cmsData = await cmsResponse.json();

    if (cmsData && cmsData.blogs) {
      cmsBlogRoutes = cmsData.blogs.map(blog => `/blog/${blog.slug}`);
    }
  } catch (error) {
    console.error('Failed to fetch CMS blogs for sitemap:', error);
  }

  // Combine static routes with dynamic routes
  const allRoutes = [
    '/',
    '/about',
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
    '/services/handyman',
    '/contact-us',
    '/moving-packing-and-storage-in-abu-dhabi',
    ...cmsBlogRoutes  // Spreads CMS routes
  ];

  return {
    plugins: [
      react(),
      Sitemap({
        hostname: 'https://globaliconmovers.com',
        dynamicRoutes: allRoutes
      })
    ],
    build: {
      sourcemap: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@common': path.resolve(__dirname, './src/common'),
        '@components': path.resolve(__dirname, './src/components'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@assets': path.resolve(__dirname, './src/assets'),
      },
    },

  }
})