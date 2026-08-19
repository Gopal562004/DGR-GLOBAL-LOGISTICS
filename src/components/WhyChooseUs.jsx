import React from 'react';
import { 
  MapPin, 
  Award, 
  Layers, 
  Headphones, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Building2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/logisticsData';

const iconMap = {
  MapPin: MapPin,
  Award: Award,
  Layers: Layers,
  Headphones: Headphones,
  Globe: Globe,
  ShieldCheck: ShieldCheck
};

const WhyChooseUs = ({ onOpenRequirementModal }) => {
  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold px-3 py-1 uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-amber-600" /> Operational Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 uppercase">
            Why Shippers Choose DGR Global Logistics
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Speed, safety, and regulatory compliance engineered for time-critical freight and hazardous cargo.
          </p>
        </div>

        {/* Strategic Sahar Location Spotlight Banner */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 mb-12 border-2 border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 uppercase tracking-wider">
                Geographic Advantage
              </span>
              <span className="text-xs text-slate-400">Mumbai Air Cargo Terminal Proximity</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-white uppercase">
              Located at Sahar Village, Andheri East — Minutes from Mumbai Air Cargo Complex
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our ground operations office at <strong>7/1 Creado House, Sutar Pakhadi, Sahar Village (Near Sai Hanuman Mandir)</strong> gives us an unparalleled turnaround time for urgent export cargo handovers, late flight cut-offs, dry ice top-ups, and DG documentation inspections at Chhatrapati Shivaji Maharaj International Airport (CSMIA) Air Cargo Complex.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
            <button
              onClick={() => onOpenRequirementModal("Express Air Cargo Handover")}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider py-3 px-6 text-center transition-colors"
            >
              Book Rapid Airport Handover
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 text-center border border-slate-700 transition-colors"
            >
              Call Airport Desk ({COMPANY_INFO.phone})
            </a>
          </div>
        </div>

        {/* 6 Grid Advantage Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-300 p-6 flex flex-col justify-between hover:border-slate-900 transition-all hover:bg-white"
              >
                <div>
                  <div className="w-12 h-12 bg-slate-900 text-amber-500 flex items-center justify-center mb-4 border border-slate-800">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold font-heading text-slate-950 mb-2 uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Guaranteed Execution</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
