'use client';

import React, { useState, useRef, useEffect } from 'react';
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
    serviceIds: ['air-freight', 'import-export-console', 'custom-clearance', 'warehouse-distribution', 'hazardous-labels', 'international-courier', 'un-drums-boxes', 'hazmat-packaging', 'consultancy-documentation']
  },
  {
    id: 'freight',
    label: '✈️ Freight & Courier (3)',
    serviceIds: ['air-freight', 'import-export-console', 'international-courier']
  },
  {
    id: 'customs',
    label: '📋 Customs & Warehouse (2)',
    serviceIds: ['custom-clearance', 'warehouse-distribution']
  },
  {
    id: 'dgr',
    label: '☣️ UN Boxes & DG (4)',
    serviceIds: ['un-drums-boxes', 'hazmat-packaging', 'hazardous-labels', 'consultancy-documentation']
  }
];

// 4-times duplicated array for seamless bidirectional infinite scrolling in both directions
const LOOP_CATEGORIES = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES];

const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllCards, setShowAllCards] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isInteractingRef = useRef<boolean>(false);
  const animFrameIdRef = useRef<number | null>(null);

  const selectedCategoryObj = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0];
  const allFilteredServices = SERVICES.filter(service => 
    selectedCategoryObj.serviceIds.includes(service.id)
  );

  // On "All Services", show top 3 initially for a clean, spacious layout
  const displayServices = (activeCategory === 'all' && !showAllCards) 
    ? allFilteredServices.slice(0, 3) 
    : allFilteredServices;

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setShowAllCards(true);
  };

  // Continuous gentle slow auto-scroll with seamless bidirectional infinite looping
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let resumeTimeout: NodeJS.Timeout;

    // Center scroll position on middle duplicate set on mount
    const singleSetWidth = scrollContainer.scrollWidth / 4;
    if (scrollContainer.scrollLeft === 0 && singleSetWidth > 0) {
      scrollContainer.scrollLeft = singleSetWidth;
    }

    const checkBidirectionalBoundary = () => {
      const oneSet = scrollContainer.scrollWidth / 4;
      if (oneSet <= 0) return;

      // When user scrolls left (backward) near the start, jump forward by 2 sets
      if (scrollContainer.scrollLeft <= 10) {
        scrollContainer.scrollLeft += oneSet * 2;
      } 
      // When user scrolls right (forward) near the end, jump backward by 2 sets
      else if (scrollContainer.scrollLeft >= oneSet * 3) {
        scrollContainer.scrollLeft -= oneSet * 2;
      }
    };

    const autoScroll = () => {
      if (!isInteractingRef.current && scrollContainer) {
        // Slow gentle speed (0.2px per frame)
        scrollContainer.scrollLeft += 0.2;
        checkBidirectionalBoundary();
      }
      animFrameIdRef.current = requestAnimationFrame(autoScroll);
    };

    animFrameIdRef.current = requestAnimationFrame(autoScroll);

    const handleScroll = () => {
      checkBidirectionalBoundary();
    };

    const handleUserStart = () => {
      isInteractingRef.current = true;
      clearTimeout(resumeTimeout);
    };

    const handleUserEnd = () => {
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        isInteractingRef.current = false;
      }, 2500); // Resume auto-glide 2.5s after user finishes swipe
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    scrollContainer.addEventListener('touchstart', handleUserStart, { passive: true });
    scrollContainer.addEventListener('touchend', handleUserEnd, { passive: true });
    scrollContainer.addEventListener('mouseenter', handleUserStart);
    scrollContainer.addEventListener('mouseleave', handleUserEnd);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      clearTimeout(resumeTimeout);
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('touchstart', handleUserStart);
      scrollContainer.removeEventListener('touchend', handleUserEnd);
      scrollContainer.removeEventListener('mouseenter', handleUserStart);
      scrollContainer.removeEventListener('mouseleave', handleUserEnd);
    };
  }, []);

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean, Minimalist Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            OUR CORE CAPABILITIES
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Desktop View: Centered Filter Pills */}
        <div className="hidden sm:flex items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
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

        {/* Mobile View: Infinite Auto-Glide Ticker with Bidirectional Manual Swipe */}
        <div className="sm:hidden mb-8 relative">
          <div
            ref={scrollRef}
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x cursor-grab active:cursor-grabbing select-none"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {LOOP_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={`${cat.id}-${idx}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 border ${
                    isActive
                      ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-sm ring-2 ring-amber-400/50'
                      : 'bg-white text-slate-700 border-slate-300 active:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
          {/* Subtle side fade indicators for mobile scrolling cue */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-slate-50 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-slate-50 to-transparent"></div>
        </div>

        {/* Airy, High-Contrast Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayServices.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.icon] || Box;
            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 hover:border-slate-800 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                {/* Photo Header */}
                <Link href={`/services/${service.slug}`} className="relative h-44 overflow-hidden bg-slate-100 block">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900 text-amber-400 p-2 border border-slate-800 shadow-sm">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-slate-950/85 text-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider truncate">
                    {service.tagline}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold font-heading text-slate-950 group-hover:text-amber-700 transition-colors uppercase mb-2">
                      <Link href={`/services/${service.slug}`} className="hover:underline flex items-center justify-between">
                        <span>{service.title}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0" />
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase py-2.5 px-3 flex items-center justify-center gap-1 transition-colors text-center"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </Link>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(`Hello Mayur, I would like to inquire about rates for ${service.title}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase py-2.5 px-3 flex items-center justify-center gap-1 transition-colors text-center"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Expand / Collapse Button */}
        {activeCategory === 'all' && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllCards(!showAllCards)}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 transition-all shadow-sm"
            >
              {showAllCards ? (
                <>
                  <span>Show Top 3 Services Only</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>View All 9 Services & Capabilities ({allFilteredServices.length - 3} More)</span>
                  <ChevronDown className="w-4 h-4" />
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
