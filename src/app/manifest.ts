import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DGR Global Logistics',
    short_name: 'DGR Logistics',
    description: 'International Freight Forwarding, Custom Clearance & Certified Dangerous Goods Packaging in Mumbai, Maharashtra, India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
