'use client';

import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  Plane,
  Container,
  Truck,
  CheckCircle2,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

interface AboutSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-bold px-3 py-1 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-amber-700" /> Mumbai Logistics Network
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            ON-GROUND OPERATIONS & GATEWAYS
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Operational Desk */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="bg-slate-900 text-white p-6 sm:p-8 border-t-4 border-amber-500 shadow-md">
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                    Operations Desk
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 font-bold uppercase">
                  Verified Desk
                </span>
              </div>

              <div className="mb-5">
                <h3 className="text-xl font-bold font-heading text-white">
                  {COMPANY_INFO.contactPerson}
                </h3>
                <div className="text-xs text-amber-400 font-semibold mt-0.5">
                  {COMPANY_INFO.role}
                </div>
              </div>

              {/* Clean Checklist */}
              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>5 Minutes</strong> to Sahar Air Cargo Gates</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>100% Airline Acceptance</strong> for DG & UN Boxes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Same-Day</strong> Pan-Maharashtra Factory Pickups</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-800">
                <a
                  href={`tel:+91${COMPANY_INFO.phone}`}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase py-3 px-3 text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Mayur</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(`Hello Mayur, I would like to inquire about freight bookings and custom clearance.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase py-3 px-3 text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* IndiaMART Verified Score */}
            <div className="bg-slate-50 border border-slate-200 p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>IndiaMART Verified Supplier</span>
              </div>
              <span className="text-xs font-mono font-bold text-amber-600 bg-amber-100 px-2 py-0.5">
                ★ 4.5 / 5.0 (11 Reviews)
              </span>
            </div>

          </div>

          {/* Right Column: 3 Clean Strategic Gateways */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Gateway 1: Sahar Airport */}
            <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 hover:border-slate-800 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-none bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 border border-slate-800">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-heading text-slate-950 uppercase">
                    Mumbai Air Cargo Complex (CSMIA / BOM)
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Sahar Village, Andheri East • Immediate airside handover & late cut-off clearance.
                  </p>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 uppercase shrink-0">
                24/7 Active
              </span>
            </div>

            {/* Gateway 2: JNPT */}
            <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 hover:border-slate-800 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-none bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 border border-slate-800">
                  <Container className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-heading text-slate-950 uppercase">
                    JNPT Nhava Sheva Seaport Terminal
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Navi Mumbai • FCL & LCL container stuffing, customs examination & DG compliance.
                  </p>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 uppercase shrink-0">
                LCL & FCL
              </span>
            </div>

            {/* Gateway 3: Maharashtra Fleet */}
            <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 hover:border-slate-800 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-none bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 border border-slate-800">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-heading text-slate-950 uppercase">
                    Pan-Maharashtra Surface Transport
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Dedicated cargo vehicles covering MIDC Thane, Taloja, Pune & Nashik.
                  </p>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 uppercase shrink-0">
                Same-Day
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
