import React from 'react';
import { 
  ShieldAlert, 
  Box, 
  Flame, 
  CheckCircle2, 
  FileSpreadsheet, 
  MessageSquare, 
  Send,
  Layers
} from 'lucide-react';
import { HAZARDOUS_CLASSES, COMPANY_INFO } from '../data/logisticsData';

const HazardousPackagingHub = ({ onOpenQuoteModal }) => {
  return (
    <section id="hazmat" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-300 text-xs font-bold px-3 py-1 uppercase tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" /> Dangerous Goods Specialization
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            UN Approved Packaging & Hazmat Solutions
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Certified IATA DGR and IMO compliant packaging materials, UN certified drums/boxes, and Class 1 to 9 hazard labels with ready stock in Mumbai.
          </p>
        </div>

        {/* 2-Column Clean Layout with Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          
          {/* Left Visual Photo Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=600&q=80"
                alt="UN Tested Boxes"
                className="w-full h-44 object-cover"
              />
              <div className="p-3 bg-white">
                <div className="font-bold text-xs text-slate-950 uppercase">UN 4G / 4GV Boxes</div>
                <div className="text-[11px] text-slate-500">Packing Groups I, II & III</div>
              </div>
            </div>

            <div className="border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80"
                alt="Hazardous Warning Labels"
                className="w-full h-44 object-cover"
              />
              <div className="p-3 bg-white">
                <div className="font-bold text-xs text-slate-950 uppercase">Hazardous Labels</div>
                <div className="text-[11px] text-slate-500">IATA / IMDG Class 1-9</div>
              </div>
            </div>

            <div className="border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt="DG Material Packaging"
                className="w-full h-44 object-cover"
              />
              <div className="p-3 bg-white">
                <div className="font-bold text-xs text-slate-950 uppercase">Dry Ice & DG Packing</div>
                <div className="text-[11px] text-slate-500">Pharma & Chemical safety</div>
              </div>
            </div>

            <div className="border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
                alt="Shippers Declaration Documentation"
                className="w-full h-44 object-cover"
              />
              <div className="p-3 bg-white">
                <div className="font-bold text-xs text-slate-950 uppercase">DG Documentation</div>
                <div className="text-[11px] text-slate-500">Shipper's Declaration (DGD)</div>
              </div>
            </div>
          </div>

          {/* Right Core Capabilities (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-heading text-slate-950 uppercase">
                End-to-End Hazardous Goods Handling
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you need certified UN 4GV boxes for chemicals, temperature-controlled dry ice replenishment for biological samples, or authorized IATA diamond labels, our team ensures 100% carrier acceptance.
              </p>
            </div>

            {/* Quick List */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Box className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-950 uppercase">UN 4G / 4GV Boxes & Steel/HDPE Drums</div>
                  <div className="text-xs text-slate-600">Tested for drop, pressure, and leakage standards. Ready dispatch in Mumbai.</div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Flame className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-950 uppercase">Certified DG Packing & Lithium Batteries</div>
                  <div className="text-xs text-slate-600">Specialist packing for Class 3, Class 8, and Class 9 / 9A battery consignments.</div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 flex items-start gap-3">
                <FileSpreadsheet className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-950 uppercase">Shipper's Declaration (DGD) & MSDS Audit</div>
                  <div className="text-xs text-slate-600">Complete documentation prepared and signed by qualified DGR professionals.</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenQuoteModal("UN Packaging & Hazmat Supply")}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-3 border border-amber-600 shadow-sm transition-all"
              >
                Inquire Packaging Supply
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20need%20UN%20approved%20packaging%20/%20hazardous%20labels.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 flex items-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Mayur</span>
              </a>
            </div>

          </div>

        </div>

        {/* Clean Class 1-9 Badge Strip */}
        <div className="bg-slate-50 border border-slate-200 p-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 text-center sm:text-left">
            Covering All 9 Hazardous Classes (IATA & IMDG):
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {HAZARDOUS_CLASSES.map((cls, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-2 text-center text-xs">
                <div className="font-bold text-slate-950">{cls.class}</div>
                <div className="text-[10px] text-slate-500 truncate">{cls.name}</div>
              </div>
            ))}
            <div className="bg-amber-500 text-slate-950 font-bold p-2 text-center text-xs flex items-center justify-center">
              All Classes Supplied
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HazardousPackagingHub;
