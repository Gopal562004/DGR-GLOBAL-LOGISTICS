'use client';

import React from 'react';
import { 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

interface MumbaiHubSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

interface HubItem {
  title: string;
  location: string;
  distance: string;
  desc: string;
  tag: string;
}

const MumbaiHubSection: React.FC<MumbaiHubSectionProps> = ({ onOpenQuoteModal }) => {
  const hubs: HubItem[] = [
    {
      title: "Sahar Air Cargo Complex (CSMIA - BOM)",
      location: "Sahar Village, Andheri East, Mumbai 400099",
      distance: "5 Mins from Terminal",
      desc: "Direct proximity to Mumbai International Airport export & import cargo gates for expedited flight bookings, dry ice topping, and rapid CHA document clearance.",
      tag: "Air Hub"
    },
    {
      title: "Nhava Sheva (JNPT) & Mumbai Port",
      location: "Navi Mumbai & South Mumbai Seaport",
      distance: "Daily Console Vans",
      desc: "Comprehensive LCL consolidation and FCL container trucking to JNPT port terminals with fast-track customs assessment and factory stuffing inspection.",
      tag: "Ocean Gateway"
    },
    {
      title: "Pan-Maharashtra Industrial Belts",
      location: "Taloja, Thane-Belapur, Chakan, Tarapur, Pune",
      distance: "Same-Day Pickup",
      desc: "Dedicated hazardous and commercial cargo vehicle fleet picking up shipments directly from pharma, chemical, and engineering manufacturing plants.",
      tag: "Statewide Network"
    }
  ];

  return (
    <section id="mumbai-gateway" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-amber-700" /> Mumbai & Maharashtra Regional Gateway
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            Mumbai's Strategic Air & Ocean Freight Hub
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Headquartered at <strong>Sahar Village, Andheri East (Near Sai Hanuman Mandir)</strong>, we bridge Maharashtra's top manufacturing and export industries with 180+ global markets.
          </p>
        </div>

        {/* 3 Gateway Cards with Photos & Map Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {hubs.map((hub: HubItem, idx: number) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-slate-900 text-amber-400 text-[10px] font-extrabold px-2 py-0.5 uppercase tracking-wider">
                    {hub.tag}
                  </span>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 border border-amber-200">
                    {hub.distance}
                  </span>
                </div>

                <h3 className="text-base font-bold font-heading text-slate-950 uppercase group-hover:text-amber-700 transition-colors mb-2">
                  {hub.title}
                </h3>

                <div className="flex items-start gap-1.5 text-xs text-slate-500 font-semibold mb-3">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{hub.location}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {hub.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuoteModal(`${hub.title} Inquiry`)}
                  className="text-xs font-bold text-slate-950 hover:text-amber-600 uppercase flex items-center gap-1"
                >
                  <span>Book Hub Pickup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Local Advantage Banner */}
        <div className="bg-white border-2 border-slate-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Pan-India Coverage with 24/7 Mumbai Airport Command
            </div>
            <h4 className="text-xl font-bold font-heading text-slate-950 uppercase">
              Urgent Export Shipment Leaving Mumbai Tonight?
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl">
              Call Operations Lead <strong>Mayur Kadam</strong> directly at <strong>+91 9028345261</strong> for emergency airport handover, last-minute dry ice packing, or immediate custom clearance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20have%20an%20urgent%20shipment%20at%20Mumbai%20Airport.`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase px-5 py-3 flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Mayur</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase px-5 py-3 border border-slate-800 transition-colors"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MumbaiHubSection;
