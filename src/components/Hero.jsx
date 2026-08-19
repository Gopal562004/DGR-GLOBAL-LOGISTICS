import React from 'react';
import { 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  MapPin, 
  CheckCircle2, 
  Plane, 
  Container, 
  ShieldAlert, 
  Box,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

const Hero = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Decorative Light Background Elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        
        {/* Top Visiting Card Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-300 px-3.5 py-1.5 mb-8 text-xs">
          <span className="w-2 h-2 bg-amber-500 rounded-none inline-block"></span>
          <span className="font-bold text-slate-900 uppercase tracking-wider">
            Mumbai Sahar Air Cargo Hub
          </span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-700 font-semibold">
            Direct Desk: Mayur Kadam ({COMPANY_INFO.phone})
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clear, Spacious Branding Statement */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-600 font-extrabold text-sm uppercase tracking-widest">
                <span className="h-0.5 w-6 bg-amber-500"></span>
                DGR GLOBAL LOGISTICS
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-950 tracking-tight uppercase leading-none">
                GET WHAT YOU WANT, <br />
                <span className="text-amber-600">JUST ON TIME.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Your dependable partner for worldwide Air & Ocean Freight Forwarding, Custom Clearance (CHA), and certified Dangerous Goods (DGR) Packaging & UN Approved Boxes in Mumbai.
            </p>

            {/* Quick Feature Pillars (Light, Uncluttered) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-50 border border-slate-200 p-3.5">
                <div className="text-slate-950 font-bold text-xs uppercase flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-amber-600" /> Air Freight
                </div>
                <div className="text-slate-500 text-[11px] mt-0.5">Sahar Cargo Complex</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3.5">
                <div className="text-slate-950 font-bold text-xs uppercase flex items-center gap-1.5">
                  <Container className="w-3.5 h-3.5 text-amber-600" /> Ocean Console
                </div>
                <div className="text-slate-500 text-[11px] mt-0.5">LCL & FCL Worldwide</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3.5 col-span-2 sm:col-span-1">
                <div className="text-slate-950 font-bold text-xs uppercase flex items-center gap-1.5">
                  <Box className="w-3.5 h-3.5 text-amber-600" /> UN Boxes & DG
                </div>
                <div className="text-slate-500 text-[11px] mt-0.5">Certified Hazmat Packing</div>
              </div>
            </div>

            {/* Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 flex items-center gap-2 border border-amber-600 shadow-sm transition-all"
              >
                <span>Request a Rate Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20would%20like%20to%20inquire%20about%20freight%20services.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 flex items-center gap-2 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Mayur Kadam</span>
              </a>

              <a
                href="#services"
                className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider px-5 py-3.5 border border-slate-300 transition-all"
              >
                View Services
              </a>
            </div>

          </div>

          {/* Right Column: High Quality Photographic Showcase */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Main Photo Card */}
            <div className="relative bg-white border-2 border-slate-300 shadow-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1000&q=80"
                alt="Air Freight Cargo Aircraft"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-0 inset-x-0 bg-slate-900/90 text-white p-4 backdrop-blur-xs border-t border-amber-500 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold font-heading text-amber-400 uppercase">
                    Air Freight & Hazardous Cargo
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Connecting Mumbai (BOM) to 180+ Global Destinations
                  </div>
                </div>
                <span className="bg-amber-500 text-slate-950 font-bold text-[10px] px-2 py-0.5 uppercase">
                  Active 24/7
                </span>
              </div>
            </div>

            {/* Secondary Dual Mini Photo Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative bg-white border border-slate-300 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=600&q=80"
                  alt="Ocean Freight Vessel"
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-white px-2.5 py-1 text-[10px] font-bold uppercase truncate">
                  Ocean Consolidation (Air & Sea)
                </div>
              </div>

              <div className="relative bg-white border border-slate-300 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=600&q=80"
                  alt="UN Approved Boxes & Packaging"
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-white px-2.5 py-1 text-[10px] font-bold uppercase truncate text-amber-400">
                  UN Drums & Hazmat Boxes
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Visiting Card Distinctive Angled Dark & Gold Accent Strip at Bottom */}
      <div className="w-full h-2 flex">
        <div className="w-2/3 bg-slate-900"></div>
        <div className="w-1/3 bg-amber-500"></div>
      </div>
    </section>
  );
};

export default Hero;
