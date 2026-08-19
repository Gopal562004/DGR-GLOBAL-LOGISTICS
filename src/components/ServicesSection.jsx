import React from 'react';
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
  Send
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/logisticsData';

const iconMap = {
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

const ServicesSection = ({ onOpenQuoteModal }) => {
  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Visiting Card 'OUR SERVICES' */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-sm">
              &gt;
            </div>
            <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase">
              DGR GLOBAL LOGISTICS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            OUR SERVICES
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>

          <p className="text-sm sm:text-base text-slate-600">
            Comprehensive air, ocean, custom clearance, and certified dangerous goods packaging solutions tailored for efficiency and total compliance.
          </p>
        </div>

        {/* 9 Clean Service Cards with Photos (Matching Visiting Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Box;
            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 hover:border-slate-800 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                {/* Service Photo Header */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900 text-amber-400 p-2 border border-slate-800 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-white px-3 py-1.5 text-[11px] font-bold uppercase truncate">
                    {service.tagline}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold font-heading text-slate-950 group-hover:text-amber-700 transition-colors uppercase mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase py-2 px-3 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3 text-amber-400" />
                    </button>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(`Hello Mayur, I would like to inquire about ${service.title}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase py-2 px-3 flex items-center justify-center gap-1.5 transition-colors"
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

      </div>
    </section>
  );
};

export default ServicesSection;
