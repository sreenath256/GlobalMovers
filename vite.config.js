import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://globaliconmovers.com',
      dynamicRoutes: [
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
      ]
    })
  ],
})


