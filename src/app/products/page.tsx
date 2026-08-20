import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Box, 
  ArrowLeft, 
  ShieldCheck, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  FileText,
  Truck,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import ProductsCatalogClient from '@/components/ProductsCatalogClient';
import { COMPANY_INFO, UN_PRODUCTS } from '@/data/logisticsData';

export const metadata: Metadata = {
  title: 'UN Certified Boxes, HDPE Drums & Packaging Catalog | DGR Mumbai',
  description: 'Full catalog and verified prices for UN Mark 4GV Fibreboard Boxes (X3 to X55), UN HDPE Drums, Jerry Cans, and Class 1-9 Hazmat Labels in Mumbai.',
  alternates: {
    canonical: '/products',
  }
};

export default function ProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'UN Certified Packaging & Drums Catalog',
    description: 'Catalog of UN 4GV certified fiberboard boxes, open-top HDPE drums, Jerry cans, and hazmat labels in Mumbai.',
    itemListElement: UN_PRODUCTS.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: p.name,
      url: `https://dgrgloballogistics.com/products/${p.id}`,
      image: `https://dgrgloballogistics.com${p.image}`
    }))
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <Link href="/" className="hover:text-amber-600 flex items-center gap-1 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">UN Packaging Catalog</span>
        </div>

        {/* Slim Compact Page Header */}
        <div className="border-b border-slate-200 pb-4 mb-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
              UN APPROVED PACKAGING & DRUMS
            </h1>
          </div>

          {/* Statutory Trust Badges (Compact) */}
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="bg-slate-100 border border-slate-300 px-2.5 py-0.5 font-bold text-slate-900">
              GST: <span className="font-mono text-amber-700">{COMPANY_INFO.gstNo}</span>
            </span>
            <span className="bg-slate-100 border border-slate-300 px-2.5 py-0.5 font-bold text-slate-900">
              IEC: <span className="font-mono text-amber-700">{COMPANY_INFO.iecCode}</span>
            </span>
            <span className="bg-emerald-100 border border-emerald-300 px-2 py-0.5 font-bold text-emerald-800 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> TrustSEAL
            </span>
          </div>
        </div>

        {/* Interactive Client Catalog Component */}
        <React.Suspense fallback={<div className="py-20 text-center text-xs text-slate-500 font-bold uppercase">Loading Packaging Catalog...</div>}>
          <ProductsCatalogClient products={UN_PRODUCTS} companyInfo={COMPANY_INFO} />
        </React.Suspense>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
