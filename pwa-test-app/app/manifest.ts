import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PWA Test.',
    short_name: 'PT',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    start_url: '/',
    display: 'standalone',
    theme_color: '#030712',
    background_color: '#030712',
    scope: '/',
    lang: 'en',
    dir: 'auto',
    orientation: 'any',
    description: 'A base for a fullstack next pwa',
    screenshots: [
      {
        src: '/Screenshot_Narrow.png',
        sizes: '412x915',
        type: 'image/png',
        form_factor: 'narrow',
        label: "Narrow mode"
      },
      {
        src: '/Screenshot_Wide.png',
        sizes: '915x412',
        type: 'image/png',
        form_factor: 'wide',
        label: "Wide mode"
      }
    ],
    categories: ['developer', 'education']
  }
}