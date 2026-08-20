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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-amber-600 flex items-center gap-1 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">UN Packaging Catalog</span>
        </div>

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1 uppercase tracking-widest">
            <Box className="w-3.5 h-3.5 text-amber-700" /> Complete Certified Catalog
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            UN APPROVED PACKAGING & DRUMS
          </h1>

          {/* Statutory Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            <span className="bg-slate-100 border border-slate-300 px-3 py-1 font-bold text-slate-900">
              GST No: <span className="font-mono text-amber-700">{COMPANY_INFO.gstNo}</span>
            </span>
            <span className="bg-slate-100 border border-slate-300 px-3 py-1 font-bold text-slate-900">
              IEC Code: <span className="font-mono text-amber-700">{COMPANY_INFO.iecCode}</span>
            </span>
            <span className="bg-slate-100 border border-slate-300 px-3 py-1 font-bold text-slate-900">
              Est. {COMPANY_INFO.establishedYear}
            </span>
            <span className="bg-emerald-100 border border-emerald-300 px-3 py-1 font-bold text-emerald-800 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> TrustSEAL Verified
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
