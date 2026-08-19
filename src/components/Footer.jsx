import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/logisticsData';

const Footer = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white border-t-4 border-amber-500">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Visiting Card Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm">
                &gt;
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white font-heading">
                  DGR
                </span>
                <span className="text-sm font-extrabold text-amber-400 uppercase font-heading ml-1.5">
                  GLOBAL LOGISTICS
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-bold uppercase tracking-wider">
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Mumbai's premier partner for International Air & Ocean Freight Forwarding, UN Certified Dangerous Goods Packaging, Custom House Agent (CHA) Clearance, and Express International Courier.
            </p>

            <div className="pt-2">
              <div className="text-xs text-slate-400">Operations Lead:</div>
              <div className="text-sm font-bold text-white">{COMPANY_INFO.contactPerson}</div>
              <div className="text-xs text-amber-400">{COMPANY_INFO.role}</div>
            </div>
          </div>

          {/* Col 2: All 9 Services (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2">
              Our 9 Core Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onOpenQuoteModal(s.title)}
                  className="text-left text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5 py-0.5 truncate"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500 shrink-0" />
                  <span className="truncate">{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2">
              Mumbai Hub
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.line3}, {COMPANY_INFO.address.city} {COMPANY_INFO.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-white hover:text-amber-400">
                  {COMPANY_INFO.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-amber-400 break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase py-2 px-3 text-center transition-colors"
              >
                Request Quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>DGR Global Logistics</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">IATA DGR & IMO Compliant Logistics</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
