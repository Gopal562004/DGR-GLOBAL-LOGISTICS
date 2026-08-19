import React from 'react';
import { 
  Activity, 
  Beaker, 
  Wrench, 
  Cpu, 
  Sparkles, 
  Package, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { INDUSTRIES } from '../data/logisticsData';

const iconMap = {
  Activity: Activity,
  Beaker: Beaker,
  Wrench: Wrench,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Package: Package
};

const IndustriesServed = ({ onOpenRequirementModal }) => {
  return (
    <section id="industries" className="py-20 bg-slate-100 border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-600"></span>
              Vertical Specializations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 uppercase">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Specialized packaging, documentation, and expedited freight tailored to the strict compliance requirements of sensitive industry sectors.
            </p>
          </div>

          <button
            onClick={() => onOpenRequirementModal("Industry Specific Logistics")}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 shrink-0 flex items-center gap-2 transition-colors"
          >
            <span>Request Sector Consultation</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* 6 Industry Cards (Sharp Industrial Boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = iconMap[ind.icon] || Package;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-300 p-6 flex flex-col justify-between hover:border-slate-900 transition-all group"
              >
                <div>
                  <div className="w-10 h-10 bg-slate-900 text-amber-500 flex items-center justify-center mb-4 border border-slate-800">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold font-heading text-slate-950 uppercase group-hover:text-amber-700 transition-colors mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ind.note}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    IATA / IMO Compliant
                  </span>
                  <button
                    onClick={() => onOpenRequirementModal(`${ind.name} Logistics`)}
                    className="text-xs font-bold text-slate-900 hover:text-amber-600 uppercase flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IndustriesServed;
