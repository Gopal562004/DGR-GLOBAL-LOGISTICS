'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Plane, 
  Container, 
  FileCheck2, 
  Warehouse, 
  ShieldAlert, 
  Globe, 
  Box, 
  Flame, 
  FileSpreadsheet, 
  ArrowRight,
  MessageSquare,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Layers,
  Sparkles
} from 'lucide-react';
import { SERVICES, COMPANY_INFO, ServiceItem } from '../data/logisticsData';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane: Plane,
  Container: Container,
  FileCheck2: FileCheck2,
  Warehouse: Warehouse,
  ShieldAlert: ShieldAlert,
  Globe: Globe,
  Box: Box,
  Flame: Flame,
  FileSpreadsheet: FileSpreadsheet
};

const CATEGORIES = [
  {
    id: 'all',
    label: 'All Services (9)',
    icon: Layers,
    serviceIds: ['air-freight', 'import-export-console', 'custom-clearance', 'warehouse-distribution', 'hazardous-labels', 'international-courier', 'un-drums-boxes', 'hazmat-packaging', 'consultancy-documentation']
  },
  {
    id: 'freight',
    label: '✈️ Freight & Courier (3)',
    icon: Plane,
    serviceIds: ['air-freight', 'import-export-console', 'international-courier']
  },
  {
    id: 'customs',
    label: '📋 Customs & Warehouse (2)',
    icon: FileCheck2,
    serviceIds: ['custom-clearance', 'warehouse-distribution']
  },
  {
    id: 'dgr',
    label: '☣️ UN Boxes & DG (4)',
    icon: ShieldAlert,
    serviceIds: ['un-drums-boxes', 'hazmat-packaging', 'hazardous-labels', 'consultancy-documentation']
  }
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllCards, setShowAllCards] = useState(false);

  const selectedCategoryObj = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0];
  const allFilteredServices = SERVICES.filter(service => 
    selectedCategoryObj.serviceIds.includes(service.id)
  );

  // On "All Services", if not expanded, show only top 3 to keep mobile view super clean
  const displayServices = (activeCategory === 'all' && !showAllCards) 
    ? allFilteredServices.slice(0, 3) 
    : allFilteredServices;

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setShowAllCards(true); // Automatically show all items in targeted category
  };

  return (
    <section id="services" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-[10px]">
              &gt;
            </div>
            <span className="text-[11px] font-extrabold tracking-widest text-amber-600 uppercase">
              DGR GLOBAL LOGISTICS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            OUR CORE CAPABILITIES
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>

          <p className="text-xs sm:text-sm text-slate-600">
            Select a category below to explore Air, Ocean, Customs Brokerage, and UN Packaging solutions.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Compact, High-Converting Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayServices.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.icon] || Box;
            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 hover:border-slate-800 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                {/* Photo Header */}
                <Link href={`/services/${service.slug}`} className="relative h-40 overflow-hidden bg-slate-100 block">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900 text-amber-400 p-1.5 border border-slate-800 shadow-sm">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-slate-950/85 text-white px-3 py-1 text-[10px] font-bold uppercase truncate">
                    {service.tagline}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-heading text-slate-950 group-hover:text-amber-700 transition-colors uppercase mb-1.5">
                      <Link href={`/services/${service.slug}`} className="hover:underline flex items-center justify-between">
                        <span>{service.title}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0" />
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                      {service.description}
                    </p>

                    {/* Features (2 bullets max for brevity) */}
                    <div className="space-y-1 pt-2.5 border-t border-slate-100 mb-4">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium truncate">
                          <span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] uppercase py-2 px-2.5 flex items-center justify-center gap-1 transition-colors text-center"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3 text-amber-400" />
                    </Link>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(`Hello Mayur, I would like to inquire about rates for ${service.title}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] uppercase py-2 px-2.5 flex items-center justify-center gap-1 transition-colors text-center"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Expand / Show More Toggle Button (When on 'All Services') */}
        {activeCategory === 'all' && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllCards(!showAllCards)}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border-2 border-slate-900 font-bold text-xs uppercase px-6 py-3 transition-all shadow-xs"
            >
              {showAllCards ? (
                <>
                  <span>Show Less Services</span>
                  <ChevronUp className="w-4 h-4 text-amber-600" />
                </>
              ) : (
                <>
                  <span>View All 9 Services & Capabilities ({allFilteredServices.length - 3} More)</span>
                  <ChevronDown className="w-4 h-4 text-amber-600" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesSection;
