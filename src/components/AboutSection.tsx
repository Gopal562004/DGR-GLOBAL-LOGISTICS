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
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-amber-700" /> Mumbai Strategic Operational Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            ON-GROUND OPERATIONS & GATEWAYS
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Headquartered at Sahar Village right next to Mumbai Airport Cargo Gates, delivering instant ground execution, fast customs clearance, and certified hazardous handling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Operational Credentials & Direct Desk */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="bg-slate-900 text-white p-6 sm:p-7 border-t-4 border-amber-500 shadow-md">
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                    Operations Leadership
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 font-bold uppercase">
                  Verified Desk
                </span>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold font-heading text-white">
                  {COMPANY_INFO.contactPerson}
                </h3>
                <div className="text-xs text-amber-400 font-semibold mt-0.5">
                  {COMPANY_INFO.role}
                </div>
                <div className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Direct operations management for export-import air cargo, ocean console bookings, and IATA/IMDG dangerous goods packaging compliance.
                </div>
              </div>

              {/* Trust checklist */}
              <div className="space-y-2.5 pt-3 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>5 Minutes</strong> to Sahar Air Cargo Gates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>100% Airline Acceptance</strong> for DG & UN Boxes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Same-Day</strong> Pan-Maharashtra Factory Pickups</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>24/7 Rapid Response</strong> on Phone & WhatsApp</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-5 mt-4 border-t border-slate-800">
                <a
                  href={`tel:+91${COMPANY_INFO.phone}`}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase py-2.5 px-3 text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Mayur</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20would%20like%20to%20connect%20with%20DGR%20Global%20Logistics.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase py-2.5 px-3 text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 3 Key Strategic Logistics Gateways */}
          <div className="lg:col-span-7 space-y-3.5 flex flex-col justify-between">
            
            <div className="bg-white border border-slate-200 p-4 sm:p-5 hover:border-slate-800 transition-colors shadow-xs">
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-8 h-8 rounded-none bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Plane className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-950 uppercase">Sahar Air Cargo Complex (CSMIA - BOM)</h3>
                  <div className="text-[11px] text-amber-700 font-semibold">5 Mins from Terminal Gates</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fast flight bookings, late cut-off handovers, and dry ice re-icing right at Mumbai airport.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-4 sm:p-5 hover:border-slate-800 transition-colors shadow-xs">
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-8 h-8 rounded-none bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Container className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-950 uppercase">Nhava Sheva (JNPT) & Mumbai Port Gateway</h3>
                  <div className="text-[11px] text-amber-700 font-semibold">Daily Console Vans & CFS Operations</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Daily LCL console boxes, FCL container trucking, and factory stuffing clearance across JNPT.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-4 sm:p-5 hover:border-slate-800 transition-colors shadow-xs">
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-8 h-8 rounded-none bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-950 uppercase">Pan-Maharashtra Industrial Pickup Fleet</h3>
                  <div className="text-[11px] text-amber-700 font-semibold">Taloja, Chakan, Tarapur, Thane & Pune</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Same-day commercial and DG-certified vehicle pickup directly from manufacturing plants.
              </p>
            </div>

          </div>

        </div>

        {/* IndiaMART Verified Trust & Ratings Bar */}
        <div className="mt-8 bg-white border border-slate-200 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-base shrink-0">
              4.5★
            </div>
            <div>
              <div className="text-xs font-bold uppercase text-slate-950">
                Verified B2B Rating (11 Verified Industry Reviews)
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-3 mt-0.5">
                <span>Response: <strong className="text-emerald-700">100%</strong></span>
                <span>•</span>
                <span>Quality: <strong className="text-emerald-700">100%</strong></span>
                <span>•</span>
                <span>Delivery: <strong className="text-emerald-700">100%</strong></span>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-600 flex flex-wrap items-center gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
            <span>GST: <strong className="text-slate-900 font-mono">{COMPANY_INFO.gstNo}</strong></span>
            <span>•</span>
            <span>IEC: <strong className="text-slate-900 font-mono">{COMPANY_INFO.iecCode}</strong></span>
            <span>•</span>
            <span>Proprietor: <strong className="text-slate-900">{COMPANY_INFO.proprietor}</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
