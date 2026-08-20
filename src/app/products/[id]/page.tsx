import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ShieldCheck, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  Box, 
  Truck, 
  FileCheck2,
  Share2,
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import ProductImageGallery from '@/components/ProductImageGallery';
import { COMPANY_INFO, UN_PRODUCTS, UNProduct } from '@/data/logisticsData';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const CATEGORY_LINKS = [
  { id: 'un-boxes', label: 'UN 4GV Boxes (X3-X55)', href: '/products?category=un-boxes' },
  { id: 'hdpe-drums', label: 'HDPE Open Top Drums', href: '/products?category=hdpe-drums' },
  { id: 'jerry-cans', label: 'UN Jerry Cans (3H1)', href: '/products?category=jerry-cans' },
  { id: 'steel-drums', label: 'Steel & 220L Drums', href: '/products?category=steel-drums' },
  { id: 'labels-absorbents', label: 'Hazard Labels & Absorbents', href: '/products?category=labels-absorbents' },
];

export async function generateStaticParams() {
  return UN_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = UN_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found | DGR Global Logistics',
      description: 'The requested UN packaging product could not be found.',
    };
  }

  const title = `${product.name} (Price ${product.priceDisplay}) | DGR Packaging Mumbai`;
  const description = `Buy ${product.name} in Mumbai. Capacity: ${product.capacity}, Packing Group: ${product.packingGroup}. Factory rate ${product.priceDisplay}. UN Certified for air & ocean hazardous export.`;

  return {
    title,
    description,
    keywords: [
      product.name,
      product.itemCode ? `UN Box ${product.itemCode}` : '',
      'UN Certified packaging Mumbai',
      '4GV boxes price',
      'dangerous goods packaging Mumbai',
      'IATA certified boxes',
      'HDPE drums manufacturer Mumbai'
    ].filter(Boolean),
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://dgrgloballogistics.com/products/${product.id}`,
      siteName: 'DGR Global Logistics',
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        }
      ],
      type: 'website',
    },
  };
}

export default async function SingleProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = UN_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Get similar products from the same category or related catalog
  const sameCategoryProducts = UN_PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  );
  const otherProducts = UN_PRODUCTS.filter(
    (p) => p.id !== product.id && p.category !== product.category && p.popular
  );
  const similarProducts = [...sameCategoryProducts, ...otherProducts].slice(0, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `https://dgrgloballogistics.com${product.image}`,
    description: `${product.name} - UN certified dangerous goods packaging in Mumbai. Capacity: ${product.capacity}. Packing Group: ${product.packingGroup}.`,
    sku: product.itemCode || product.id,
    mpn: product.itemCode || product.id,
    brand: {
      '@type': 'Brand',
      name: 'DGR'
    },
    manufacturer: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.address.line1,
        addressLocality: COMPANY_INFO.address.city,
        postalCode: COMPANY_INFO.address.pincode,
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      }
    },
    offers: {
      '@type': 'Offer',
      url: `https://dgrgloballogistics.com/products/${product.id}`,
      priceCurrency: 'INR',
      price: product.price,
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: COMPANY_INFO.name
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '11'
    }
  };

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(
    `Hello Mayur, I would like to inquire about purchasing:\n• Product: ${product.name}\n• Item Code: ${product.itemCode || 'N/A'}\n• Price: ${product.priceDisplay}\n• Capacity: ${product.capacity}\nPlease share ready stock availability in Mumbai.`
  )}`;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      {/* JSON-LD Rich Snippet for Google Search Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
          <Link href="/" className="hover:text-amber-600 font-semibold">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-amber-600 font-semibold">UN Packaging Catalog</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate">{product.name}</span>
        </div>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Product Image & Gallery with Interactive Angles */}
          <div className="lg:col-span-6 space-y-4">
            <ProductImageGallery
              mainImage={product.image}
              galleryImages={product.galleryImages}
              productName={product.name}
              itemCode={product.itemCode}
            />

            {/* Statutory Compliance Bar */}
            <div className="bg-slate-50 border border-slate-200 p-4 text-xs space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Certified Indian Manufacturer & Exporter</span>
              </div>
              <div className="text-slate-600 flex flex-wrap items-center gap-2 text-[11px]">
                <span>GST: <strong className="font-mono text-slate-800">{COMPANY_INFO.gstNo}</strong></span>
                <span>•</span>
                <span>IEC: <strong className="font-mono text-slate-800">{COMPANY_INFO.iecCode}</strong></span>
                <span>•</span>
                <span>TrustSEAL Verified (Est. {COMPANY_INFO.establishedYear})</span>
              </div>
            </div>
          </div>

          {/* Right: Product Details & Order Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 uppercase mb-2">
                IATA / IMDG Compliant Packaging
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-950 uppercase leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Price Box */}
            <div className="bg-slate-900 text-white p-5 border-l-4 border-amber-500 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold">Factory Supply Rate:</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono mt-0.5">
                  {product.priceDisplay}
                </div>
              </div>
              <span className="text-[11px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-1 font-bold uppercase">
                Ready Stock in Mumbai
              </span>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Technical Specifications:
              </h3>
              <table className="w-full text-xs text-left border border-slate-200">
                <tbody>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2.5 font-bold text-slate-600 w-1/3">Brand</td>
                    <td className="p-2.5 font-semibold text-slate-900">DGR Packaging</td>
                  </tr>
                  {product.itemCode && (
                    <tr className="border-b border-slate-200">
                      <td className="p-2.5 font-bold text-slate-600">Item Code</td>
                      <td className="p-2.5 font-mono font-bold text-amber-700">{product.itemCode}</td>
                    </tr>
                  )}
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2.5 font-bold text-slate-600">Capacity</td>
                    <td className="p-2.5 font-bold text-slate-900">{product.capacity}</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2.5 font-bold text-slate-600">Packing Group</td>
                    <td className="p-2.5 font-semibold text-slate-800">{product.packingGroup}</td>
                  </tr>
                  {product.dimensions && (
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-600">Dimensions</td>
                      <td className="p-2.5 font-mono text-slate-800">{product.dimensions}</td>
                    </tr>
                  )}
                  {product.tareWeight && (
                    <tr className="border-b border-slate-200">
                      <td className="p-2.5 font-bold text-slate-600">Tare Weight</td>
                      <td className="p-2.5 text-slate-800">{product.tareWeight}</td>
                    </tr>
                  )}
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2.5 font-bold text-slate-600">Material</td>
                    <td className="p-2.5 text-slate-800">{product.material}</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-slate-600">Certification</td>
                    <td className="p-2.5 font-bold text-emerald-700">UN Approved (IATA DGR & IMDG Certified)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Instant Order / Quotation Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase py-3.5 px-4 flex items-center justify-center gap-2 transition-colors shadow-md text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Yes! I Am Interested — Order on WhatsApp</span>
              </a>

              <a
                href={`tel:+91${COMPANY_INFO.phone}`}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase py-3 px-4 flex items-center justify-center gap-2 transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Mayur Kadam: {COMPANY_INFO.displayPhone}</span>
              </a>
            </div>

          </div>

        </div>

        {/* Similar & Related Products Section */}
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-950 uppercase">
                Similar UN Packaging Products
              </h2>
              <p className="text-xs text-slate-500">
                Explore other certified container capacities and specifications in Mumbai stock.
              </p>
            </div>

            <Link
              href="/products"
              className="text-xs font-bold text-amber-600 hover:text-amber-700 uppercase flex items-center gap-1 shrink-0"
            >
              <span>View All 15+ Packaging Items</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-slate-200 hover:border-slate-900 transition-all flex flex-col justify-between shadow-xs group"
              >
                <Link href={`/products/${p.id}`} className="relative h-32 overflow-hidden bg-slate-100 block border-b border-slate-200">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.itemCode ? (
                    <span className="absolute top-2 left-2 bg-slate-950 text-amber-400 font-mono font-bold text-[10px] px-2 py-0.5">
                      CODE: {p.itemCode}
                    </span>
                  ) : (
                    <span className="absolute top-2 left-2 bg-emerald-700 text-white font-bold text-[9px] px-1.5 py-0.5 uppercase">
                      UN Certified
                    </span>
                  )}
                  <span className="absolute bottom-2 right-2 bg-slate-900/85 text-white text-[10px] font-semibold px-2 py-0.5">
                    {p.capacity}
                  </span>
                </Link>

                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-950 uppercase line-clamp-2 leading-snug">
                      <Link href={`/products/${p.id}`} className="hover:text-amber-700 transition-colors">
                        {p.name}
                      </Link>
                    </h4>
                  </div>

                  <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-600 font-mono">
                      {p.priceDisplay}
                    </span>
                    <Link
                      href={`/products/${p.id}`}
                      className="text-[10px] font-bold text-slate-900 hover:text-amber-600 uppercase flex items-center gap-0.5"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Other Packaging Categories Strip */}
        <div className="bg-slate-50 border border-slate-200 p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-600" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Browse Other Hazardous Packaging Categories:
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CATEGORY_LINKS.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="bg-white hover:bg-slate-900 hover:text-amber-400 text-slate-800 border border-slate-300 font-bold text-xs uppercase px-3.5 py-2 transition-colors shadow-xs"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
