import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  ShieldCheck, 
  Building2, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

const AboutSection = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Visiting Card Digital Card Component */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
              Operations & Management
            </div>
            
            {/* Visiting Card Physical Replica */}
            <div className="bg-white border-2 border-slate-300 p-6 sm:p-8 shadow-md relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-sm">
                    &gt;
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-950 font-heading leading-none">
                      DGR
                    </div>
                    <div className="text-[9px] font-bold text-amber-600 uppercase tracking-wider">
                      GLOBAL LOGISTICS
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-base font-extrabold font-heading text-slate-950">
                    {COMPANY_INFO.contactPerson}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600">
                    {COMPANY_INFO.role}
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <div className="text-center py-2 bg-slate-50 border-y border-slate-100 text-[11px] font-extrabold text-slate-900 tracking-wider uppercase mb-6">
                "{COMPANY_INFO.tagline}"
              </div>

              {/* Contact Details List (Golden Icons matching Card) */}
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-slate-950 hover:text-amber-600">
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-medium text-slate-700 hover:text-amber-600 truncate">
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-slate-600 leading-tight">
                    {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.line3}, {COMPANY_INFO.address.city} {COMPANY_INFO.address.pincode}
                  </div>
                </div>
              </div>

              {/* Angled Accent on Visiting Card */}
              <div className="absolute bottom-0 inset-x-0 h-1.5 flex">
                <div className="w-2/3 bg-slate-900"></div>
                <div className="w-1/3 bg-amber-500"></div>
              </div>

            </div>

            {/* Quick Action */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase py-3 px-4 text-center transition-colors"
              >
                Call Mayur Kadam ({COMPANY_INFO.phone})
              </a>
            </div>

          </div>

          {/* Right Column: Narrative & Strategic Location */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
                Strategically Located at Sahar Cargo Complex
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Operating directly out of Sahar Village, Andheri East, Mumbai, <strong>DGR Global Logistics</strong> provides rapid ground access to the Mumbai International Airport (CSMIA) Air Cargo Complex.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-slate-200">
                <div className="font-bold text-xs uppercase text-slate-950 flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-amber-600" />
                  24/7 Operations Desk
                </div>
                <p className="text-xs text-slate-600">
                  Continuous flight monitoring, customs handovers, and emergency shipment handling at all hours.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200">
                <div className="font-bold text-xs uppercase text-slate-950 flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  100% DG Compliance
                </div>
                <p className="text-xs text-slate-600">
                  Strict adherence to IATA DGR and IMO regulations with zero carrier rejections.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 border border-amber-600 shadow-sm transition-all"
              >
                Get in Touch with Operations
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20would%20like%20to%20connect%20with%20DGR%20Global%20Logistics.`}
                target="_blank"
                rel="noreferrer"
                className="text-slate-900 hover:text-amber-600 font-bold text-xs uppercase flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
