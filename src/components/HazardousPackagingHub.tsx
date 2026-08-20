'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Package
} from 'lucide-react';
import { COMPANY_INFO, UN_PRODUCTS } from '../data/logisticsData';

interface HazardousPackagingHubProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const CATEGORY_SHOWCASE = [
  {
    categoryId: 'un-boxes',
    categoryName: 'UN 4GV Boxes',
    product: UN_PRODUCTS.find(p => p.id === 'un-4gv-x31') || UN_PRODUCTS[4], // X31 (₹350)
  },
  {
    categoryId: 'hdpe-drums',
    categoryName: 'HDPE Open Top Drums',
    product: UN_PRODUCTS.find(p => p.id === 'hdpe-drum-35l') || UN_PRODUCTS[7], // 35L Drum (₹430)
  },
  {
    categoryId: 'jerry-cans',
    categoryName: 'UN Jerry Cans (3H1)',
    product: UN_PRODUCTS.find(p => p.id === 'jerrycan-35l-un') || UN_PRODUCTS[9], // 35L Jerry Can (₹430)
  },
  {
    categoryId: 'labels-absorbents',
    categoryName: 'Hazard Labels & DG',
    product: UN_PRODUCTS.find(p => p.id === 'hazmat-labels-all') || UN_PRODUCTS[13], // Hazmat Labels (₹5)
  },
];

const HazardousPackagingHub: React.FC<HazardousPackagingHubProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="hazmat" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-300 text-xs font-bold px-3 py-1 uppercase tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" /> Manufacturer & Supplier in Mumbai
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            UN CERTIFIED PACKAGING & DRUMS
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-xs sm:text-sm text-slate-600">
            Factory rates for UN 4GV fiberboard boxes, open-top HDPE drums, Jerry cans, and Class 1-9 hazard labels.
          </p>
        </div>

        {/* 4 Category-Diverse Real-Product Cards with Category Badges and Direct Links to /products */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8">
          {CATEGORY_SHOWCASE.map((item) => {
            const p = item.product;
            return (
              <div 
                key={item.categoryId}
                className="bg-slate-50 border border-slate-200 hover:border-slate-800 transition-all shadow-xs group flex flex-col justify-between"
              >
                {/* Category Top Banner */}
                <div className="bg-slate-900 text-amber-400 px-3 py-1.5 text-[11px] font-bold uppercase flex items-center justify-between">
                  <span>{item.categoryName}</span>
                  <Link 
                    href={`/products?category=${item.categoryId}`}
                    className="text-[10px] text-slate-300 hover:text-white underline"
                  >
                    View All →
                  </Link>
                </div>

                {/* Product Photo */}
                <Link 
                  href={`/products?category=${item.categoryId}`} 
                  className="relative h-32 sm:h-36 overflow-hidden bg-slate-100 block border-b border-slate-200"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.itemCode ? (
                    <span className="absolute top-2 left-2 bg-slate-950 text-amber-400 font-mono font-bold text-[10px] px-2 py-0.5 shadow-xs">
                      CODE: {p.itemCode}
                    </span>
                  ) : (
                    <span className="absolute top-2 left-2 bg-emerald-700 text-white font-bold text-[10px] px-2 py-0.5 shadow-xs uppercase">
                      UN CERTIFIED
                    </span>
                  )}
                  <span className="absolute bottom-2 right-2 bg-slate-900/85 text-white text-[10px] font-semibold px-2 py-0.5">
                    {p.capacity}
                  </span>
                </Link>

                {/* Product Details & Actions */}
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-950 uppercase line-clamp-2 leading-snug">
                      <Link href={`/products?category=${item.categoryId}`} className="hover:text-amber-700 transition-colors">
                        {p.name}
                      </Link>
                    </h3>
                    <div className="text-[10px] text-slate-500 font-semibold mt-1">
                      PG: {p.packingGroup}
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-[9px] text-slate-400 font-bold uppercase">Price:</div>
                      <div className="text-xs sm:text-sm font-extrabold text-amber-600 font-mono">
                        {p.priceDisplay}
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(p.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white p-1.5 sm:px-2.5 sm:py-1.5 text-[11px] font-bold uppercase transition-colors flex items-center gap-1 shadow-xs"
                      title="Inquire on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Catalog Link & Statutory Banner */}
        <div className="bg-slate-950 text-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-4 border-amber-500">
          
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
              <span className="text-amber-400 font-bold uppercase">Statutory Compliance:</span>
              <span className="text-slate-300">GST: <strong>{COMPANY_INFO.gstNo}</strong></span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">IEC: <strong>{COMPANY_INFO.iecCode}</strong></span>
              <span className="text-slate-500">|</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> TrustSEAL Verified
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Complete range: 4GV Boxes (X3 to X55), 30L-60L Drums, Jerry cans, Class 1-9 labels & absorbents.
            </p>
          </div>

          <Link
            href="/products"
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase px-5 py-3 flex items-center justify-center gap-2 transition-colors shrink-0"
          >
            <span>View Full Packaging Catalog (15+ Items)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default HazardousPackagingHub;
