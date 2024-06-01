import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base:"front-project-321-nklvnsta",
  plugins: [react(), VitePWA({
    registerType: 'prompt', 
    includeAssets: ['favicon.ico', 'logo.png', 'logo.svg'],
    manifest: {
      name: 'Vostorg',
      short_name: 'Vostorg',
      description: 'I am a simple vite app',
      icons: [
        {
          src: '/logo.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'favicon',
        },
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'favicon',
        },
        {
          src: '/logo.png',
          sizes: '180x180',
          type: 'image/png',
          purpose: 'apple touch icon',
        },
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      theme_color: '#181818',
      background_color: '#e0cc3b',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      orientation: 'portrait',
    },
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'tests/setup.tsx',
    css: true,
  },
});
