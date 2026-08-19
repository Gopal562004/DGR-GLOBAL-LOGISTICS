import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dgrgloballogistics.com'),
  title: {
    default: 'DGR Global Logistics | Premier Freight Forwarder & DG Specialist in Mumbai, Maharashtra, India',
    template: '%s | DGR Global Logistics Mumbai',
  },
  description: 'Top Freight Forwarder in Mumbai & Maharashtra. Specialized in Sahar Air Cargo Complex logistics, Nhava Sheva (JNPT) custom clearance (CHA), UN approved 4G/4GV boxes & drums, and certified IATA Dangerous Goods packaging in Mumbai 400099.',
  keywords: [
    'Freight Forwarder in Mumbai',
    'Best Logistics Company in Mumbai',
    'Air Freight Forwarding Mumbai Sahar',
    'Dangerous Goods Logistics Mumbai',
    'Custom Clearance Agent Mumbai CHA',
    'Custom House Agent Nhava Sheva JNPT',
    'UN Approved 4G Boxes Supplier Mumbai',
    'UN 4GV Certified Packaging Maharashtra',
    'UN Steel Drums Supplier Mumbai',
    'Hazardous Material Packaging Mumbai India',
    'IATA Dangerous Goods Labels Mumbai',
    'Dry Ice Packaging Logistics Mumbai',
    'Lithium Battery Packaging Mumbai Airport',
    'Import Export Console Mumbai',
    'International Courier Andheri East Mumbai',
    'Logistics Company near Mumbai International Airport',
    'Mayur Kadam DGR Logistics Mumbai',
    'Shippers Declaration DG Documentation Maharashtra',
    'Air Cargo Forwarder Sahar Village Andheri East',
    'Freight Forwarding Company in Maharashtra India'
  ],
  authors: [{ name: 'Mayur Kadam', url: 'https://dgrgloballogistics.com' }],
  creator: 'DGR Global Logistics',
  publisher: 'DGR Global Logistics',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DGR Global Logistics | Top Freight & Dangerous Goods Specialist in Mumbai, India',
    description: 'Leading International Freight Forwarding, Custom Clearance & Certified UN Hazardous Packaging based at Sahar Village, Andheri East, Mumbai, Maharashtra 400099.',
    url: 'https://dgrgloballogistics.com',
    siteName: 'DGR Global Logistics',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'DGR Global Logistics Air Cargo and Freight Terminal Mumbai Maharashtra',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DGR Global Logistics Mumbai | Freight & Hazardous Packaging Specialist',
    description: 'Get What You Want, Just On Time. Fast Sahar Air Cargo, JNPT Ocean Console, UN Certified Packaging, and 24/7 Custom Clearance in Mumbai, India.',
    images: ['https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mumbai, Sahar Village, Andheri East, Maharashtra, India',
    'geo.position': '19.0990;72.8745',
    'ICBM': '19.0990, 72.8745',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Comprehensive Hyper-Localized Structured Data (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'LogisticsService'],
        '@id': 'https://dgrgloballogistics.com/#organization',
        name: 'DGR Global Logistics',
        alternateName: ['DGR Logistics Mumbai', 'DGR Global Logistics Maharashtra', 'DGR Dangerous Goods Logistics'],
        slogan: 'GET WHAT YOU WANT, JUST ON TIME',
        description: 'Premier international freight forwarder, custom house agent (CHA), supplier of UN certified 4G/4GV boxes & drums, and certified hazardous material packaging in Mumbai, Maharashtra, India.',
        url: 'https://dgrgloballogistics.com',
        telephone: '+91-9028345261',
        email: 'dgr.export.logistics@gmail.com',
        priceRange: '₹₹',
        image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '7/1 Creado House Ground Floor, Sutar pakhadi Near Sai Hanuman Mandir, Sahar Village, Andheri East',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400099',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '19.0990',
          longitude: '72.8745',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        founder: {
          '@type': 'Person',
          name: 'Mayur Kadam',
          jobTitle: 'Manager - Operations and Sales',
          telephone: '+91-9028345261',
          worksFor: {
            '@type': 'Organization',
            name: 'DGR Global Logistics',
          },
        },
        areaServed: [
          { '@type': 'City', name: 'Mumbai' },
          { '@type': 'AdministrativeArea', name: 'Andheri East, Mumbai' },
          { '@type': 'AdministrativeArea', name: 'Sahar Village, Mumbai' },
          { '@type': 'AdministrativeArea', name: 'Navi Mumbai' },
          { '@type': 'AdministrativeArea', name: 'Thane' },
          { '@type': 'AdministrativeArea', name: 'Nhava Sheva (JNPT)' },
          { '@type': 'AdministrativeArea', name: 'Pune, Maharashtra' },
          { '@type': 'AdministrativeArea', name: 'Maharashtra' },
          { '@type': 'Country', name: 'India' },
          { '@type': 'AdministrativeArea', name: 'Worldwide' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Mumbai Freight & Dangerous Goods Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Air Freight Forwarding Mumbai Sahar' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Import & Console (Air & Sea) JNPT Mumbai' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Clearance CHA Mumbai' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Warehouse & Distribution Maharashtra' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supplier of Hazardous Labels Mumbai India' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Courier Services Andheri East' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supplier of UN Approved Drums & Boxes Mumbai' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hazardous Material Packaging Mumbai' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultancy & Documentation Shipper Declaration Mumbai' } },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which areas in Mumbai and Maharashtra does DGR Global Logistics serve?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DGR Global Logistics provides 24/7 doorstep pickup and customs clearance across Mumbai (Andheri, Sahar, Bandra, Kurla, BKC), Navi Mumbai, Thane, Taloja MIDC, Turbhe, JNPT Nhava Sheva, Tarapur, Chakan Pune, and pan-India industrial belts with direct airline connections from Mumbai CSMIA Air Cargo Complex.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast can export cargo be cleared at Mumbai Sahar Air Cargo Complex?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Due to our strategic location in Sahar Village, Andheri East (minutes from MIAL Air Cargo Terminal), our operations lead Mayur Kadam manages immediate handovers, last-minute flight cut-offs, and expedited 24-hour custom clearance for standard and dangerous goods cargo.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are UN approved 4G/4GV boxes and hazard labels available in stock in Mumbai?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We maintain ready stock of UN certified 4G and 4GV fiberboard boxes, UN tight-head steel/HDPE drums, and Class 1 to 9 IATA/IMDG hazard diamond warning labels at our Mumbai hub with same-day delivery across Mumbai, Navi Mumbai, and Thane.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I contact DGR Global Logistics operations manager in Mumbai?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can contact Mayur Kadam (Manager - Operations and Sales) directly by calling or WhatsApping +91 9028345261, or email dgr.export.logistics@gmail.com.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-amber-500 selection:text-slate-950">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
