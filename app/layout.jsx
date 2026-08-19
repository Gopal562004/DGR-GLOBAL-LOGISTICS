import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
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

export const metadata = {
  metadataBase: new URL('https://dgrgloballogistics.com'),
  title: {
    default: 'DGR Global Logistics | What You Want, Just On Time | Mumbai',
    template: '%s | DGR Global Logistics',
  },
  description: 'DGR Global Logistics is Mumbai’s premier international freight forwarder and certified Dangerous Goods (DGR) packaging specialist. Air & Ocean Freight, Customs Clearance (CHA), UN 4G/4GV Certified Boxes & Drums, and IATA Hazard Labels.',
  keywords: [
    'DGR Global Logistics',
    'Dangerous Goods Logistics Mumbai',
    'Air Freight Forwarding Mumbai',
    'Sahar Air Cargo Forwarder',
    'Custom Clearance Mumbai CHA',
    'UN Approved 4G Boxes Supplier',
    'UN 4GV Certified Fiberboard Box',
    'UN Approved Drums Mumbai',
    'Hazardous Material Packaging',
    'IATA Dangerous Goods Labels Supplier',
    'Dry Ice Packaging Logistics',
    'Lithium Battery Packaging Mumbai',
    'Import Export Console Air Sea',
    'International Courier Services Mumbai',
    'Mayur Kadam DGR Logistics',
    'Shippers Declaration for DG Documentation'
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
    title: 'DGR Global Logistics | What You Want, Just On Time',
    description: 'International Freight Forwarding, Custom Clearance & Certified Hazardous Material Packaging in Sahar Village, Andheri East, Mumbai.',
    url: 'https://dgrgloballogistics.com',
    siteName: 'DGR Global Logistics',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'DGR Global Logistics Air Freight and Hazardous Material Handling Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DGR Global Logistics | Freight & Dangerous Goods Specialist Mumbai',
    description: 'Get What You Want, Just On Time. Fast Air Cargo, Ocean Console, UN Certified Packaging, and 24/7 Custom Clearance.',
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
};

export const viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  // Comprehensive Structured Data (JSON-LD) for LocalBusiness & LogisticsService
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://dgrgloballogistics.com/#organization',
        name: 'DGR Global Logistics',
        alternateName: 'DGR Logistics Mumbai',
        slogan: 'GET WHAT YOU WANT, JUST ON TIME',
        description: 'International freight forwarding, custom clearance (CHA), UN approved dangerous goods packaging, and hazardous labels supplier in Mumbai.',
        url: 'https://dgrgloballogistics.com',
        telephone: '+91-9028345261',
        email: 'dgr.export.logistics@gmail.com',
        priceRange: '$$',
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
        },
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'AdministrativeArea', name: 'Worldwide' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Logistics and Packaging Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Air Freight Forwarding' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Import & Console (Air & Sea)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Clearance' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Warehouse & Distribution' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supplier of Hazardous Labels' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Courier' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supplier of UN Approved Drums & Boxes' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hazardous Material Packaging' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultancy & Documentation' } },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services does DGR Global Logistics provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DGR Global Logistics provides Air Freight Forwarding, Import & Ocean Console (LCL/FCL), Custom Clearance (CHA), Warehousing, Supply of UN Approved Drums & 4G/4GV Boxes, Supply of Hazardous Labels (Class 1-9), Dangerous Goods Packaging, International Courier, and DG Consultancy & Documentation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where is DGR Global Logistics located in Mumbai?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DGR Global Logistics is located at 7/1 Creado House Ground Floor, Sutar pakhadi Near Sai Hanuman Mandir, Sahar Village, Andheri East, Mumbai 400099, minutes away from the Mumbai International Airport (CSMIA) Air Cargo Complex.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I contact Operations Manager Mayur Kadam?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can contact Mayur Kadam directly via phone or WhatsApp at +91 9028345261 or by email at dgr.export.logistics@gmail.com.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you supply certified UN boxes and hazardous labels?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we supply genuine UN tested 4G and 4GV fiberboard boxes, UN rated steel & HDPE plastic drums, and Class 1 to 9 IATA/IMO certified hazardous diamond warning labels with ready stock in Mumbai.',
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
      </body>
    </html>
  );
}
