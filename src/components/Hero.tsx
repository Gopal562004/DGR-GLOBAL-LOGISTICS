'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Plane, 
  Container, 
  Box,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

interface HeroProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [cargoType, setCargoType] = useState('Air Freight Forwarding');
  const [origin, setOrigin] = useState('Mumbai (BOM / Sahar)');
  const [destination, setDestination] = useState('');
  const [approxWeight, setApproxWeight] = useState('');

  const handleWhatsAppQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Mayur, I need a quick rate quote for:
• Service: ${cargoType}
• Origin: ${origin}
• Destination: ${destination || 'To be specified'}
• Approx Weight/Qty: ${approxWeight || 'Not specified'}
Please share best freight rates and earliest transit details.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encoded}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-slate-900">
      
      {/* Background Image with High Brightness & Clarity */}
      <div className="absolute inset-0">
        <img
          src="/images/mumbai-airport-cargo.jpg"
          alt="Mumbai CSMIA Air Cargo Terminal"
          className="w-full h-full object-cover opacity-85"
        />
        {/* Soft Left-To-Right Gradient ensuring text contrast while keeping image bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 lg:pt-12 lg:pb-10">
        
        {/* Top Verified Strip */}
        <div className="inline-flex flex-wrap items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 px-3.5 py-1.5 mb-6 text-xs text-white">
          <span className="w-2 h-2 bg-amber-400 inline-block"></span>
          <span className="font-bold uppercase tracking-wider text-amber-400">
            IATA & DG Certified Mumbai Hub
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-200">
            Operations Lead: <strong>{COMPANY_INFO.contactPerson}</strong> ({COMPANY_INFO.displayPhone})
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400 font-bold">
            <Clock className="w-3.5 h-3.5" /> 15-Min Response
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Bold Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs sm:text-sm uppercase tracking-widest">
                <span className="h-0.5 w-6 bg-amber-400"></span>
                DGR GLOBAL LOGISTICS MUMBAI
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight uppercase leading-[1.1]">
                GET WHAT YOU WANT, <br />
                <span className="text-amber-400">JUST ON TIME.</span>
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 max-w-lg leading-relaxed font-medium">
              International Air & Ocean Freight Forwarding, Custom Clearance (CHA), and UN Certified DG Packaging with 24/7 ground desk at Mumbai Sahar Airport & JNPT.
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              <div className="bg-slate-800/90 border border-slate-700 p-2.5 text-center sm:text-left">
                <div className="text-white font-bold text-xs uppercase flex items-center justify-center sm:justify-start gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Air Freight</span>
                </div>
                <div className="text-slate-300 text-[10px] mt-0.5 truncate">Sahar Air Cargo</div>
              </div>

              <div className="bg-slate-800/90 border border-slate-700 p-2.5 text-center sm:text-left">
                <div className="text-white font-bold text-xs uppercase flex items-center justify-center sm:justify-start gap-1.5">
                  <Container className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Ocean Console</span>
                </div>
                <div className="text-slate-300 text-[10px] mt-0.5 truncate">JNPT & Port Gates</div>
              </div>

              <div className="bg-slate-800/90 border border-slate-700 p-2.5 text-center sm:text-left">
                <div className="text-white font-bold text-xs uppercase flex items-center justify-center sm:justify-start gap-1.5">
                  <Box className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>UN Boxes</span>
                </div>
                <div className="text-slate-300 text-[10px] mt-0.5 truncate">4GV Certified Stock</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 flex items-center gap-2 transition-all shadow-md"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20would%20like%20to%20inquire%20about%20freight%20services.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 flex items-center gap-2 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Mayur</span>
              </a>

              <a
                href="/products"
                className="bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider px-4 py-3 border border-white/25 transition-all"
              >
                View UN Catalog &rarr;
              </a>
            </div>

          </div>

          {/* Right Column: Bright, High-Converting White Card for Instant Estimation */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 border-2 border-slate-900 p-5 sm:p-6 shadow-2xl relative">
              
              <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-950">
                    Quick Rate Inquiry
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5">
                  15-Min Response
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-extrabold font-heading text-slate-950 mb-1 leading-tight uppercase">
                Instant Freight & Packaging Rates
              </h2>
              <p className="text-[11px] text-slate-600 mb-4">
                Direct inquiry to Mayur Kadam on WhatsApp for rapid space allocation.
              </p>

              <form onSubmit={handleWhatsAppQuickEstimate} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs px-3 py-2 focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Air Freight Forwarding">✈️ Air Freight Forwarding (BOM Sahar)</option>
                    <option value="Import & Console (Air & Sea)">🚢 Ocean Console LCL / FCL (JNPT)</option>
                    <option value="Custom Clearance">📋 Custom Clearance (CHA Desk)</option>
                    <option value="UN Packaging & Haz Goods">☣️ UN Boxes & Hazardous Goods (DGR)</option>
                    <option value="Dangerous Goods Declarations">📄 DG Declarations & MSDS Advisory</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Origin
                    </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="e.g. Mumbai / JNPT"
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs px-3 py-2 focus:border-amber-500 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Destination
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g. Dubai / Europe / USA"
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs px-3 py-2 focus:border-amber-500 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                    Approx Weight / Boxes
                  </label>
                  <input
                    type="text"
                    value={approxWeight}
                    onChange={(e) => setApproxWeight(e.target.value)}
                    placeholder="e.g. 250 kg / 10 UN Boxes"
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs px-3 py-2 focus:border-amber-500 focus:outline-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Instant Rate on WhatsApp</span>
                </button>
              </form>

              <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> IATA & UN Approved
                </span>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="text-amber-700 hover:underline font-bold"
                >
                  Full quote form &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Indian Logistics Photo Strip with Clean Bright Thumbnails */}
      <div className="relative z-10 bg-slate-950/40 backdrop-blur-xs border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            
            <div className="relative overflow-hidden group border border-slate-600/60 shadow-sm">
              <img
                src="/images/hero-cargo-warehouse.jpg"
                alt="Indian Workers Handling UN Boxes at Mumbai Sahar Cargo Warehouse"
                className="w-full h-20 sm:h-26 lg:h-30 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 inset-x-0 px-2 pb-1.5 sm:px-3 sm:pb-2">
                <div className="text-[10px] font-bold text-amber-400 uppercase truncate">UN Box Warehouse</div>
                <div className="text-[9px] text-slate-200 truncate hidden sm:block">Sahar Cargo Complex, Mumbai</div>
              </div>
            </div>

            <div className="relative overflow-hidden group border border-slate-600/60 shadow-sm">
              <img
                src="/images/ocean-freight-jnpt.jpg"
                alt="JNPT Nhava Sheva Port Container Ship Loading Mumbai"
                className="w-full h-20 sm:h-26 lg:h-30 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 inset-x-0 px-2 pb-1.5 sm:px-3 sm:pb-2">
                <div className="text-[10px] font-bold text-amber-400 uppercase truncate">JNPT Seaport Gateway</div>
                <div className="text-[9px] text-slate-200 truncate hidden sm:block">Nhava Sheva, Navi Mumbai</div>
              </div>
            </div>

            <div className="relative overflow-hidden group border border-slate-600/60 shadow-sm">
              <img
                src="/images/un-boxes-drums.jpg"
                alt="UN 4GV Certified Boxes and Hazmat Steel Drums"
                className="w-full h-20 sm:h-26 lg:h-30 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 inset-x-0 px-2 pb-1.5 sm:px-3 sm:pb-2">
                <div className="text-[10px] font-bold text-amber-400 uppercase truncate">UN Certified Boxes</div>
                <div className="text-[9px] text-slate-200 truncate hidden sm:block">4GV Packaging Stock</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Distinctive Amber Trim Line */}
      <div className="relative z-10 w-full h-1.5 bg-amber-500"></div>
    </section>
  );
};

export default Hero;
