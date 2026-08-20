'use client';

import React from 'react';
import { MessageSquare, Phone, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

const FloatingCTA: React.FC = () => {
  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-2.5">
        {/* Direct Call */}
        <a
          href={`tel:+91${COMPANY_INFO.phone}`}
          className="h-12 px-4 rounded-full bg-slate-950 hover:bg-slate-900 text-amber-400 flex items-center gap-2 shadow-xl border border-slate-700 transition-all hover:scale-105"
          title={`Call Mayur Kadam: ${COMPANY_INFO.displayPhone}`}
          aria-label="Call Mayur Kadam"
        >
          <Phone className="w-4 h-4" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Call Desk
          </span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20have%20an%20inquiry%20regarding%20DGR%20Global%20Logistics%20services.`}
          target="_blank"
          rel="noreferrer"
          className="h-12 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-xl transition-all hover:scale-105"
          title="Chat on WhatsApp with Mayur Kadam"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">
            WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 grid grid-cols-2 gap-2 shadow-2xl">
        <a
          href={`tel:+91${COMPANY_INFO.phone}`}
          className="bg-slate-900 text-amber-400 font-bold text-xs uppercase py-3 px-3 flex items-center justify-center gap-2 border border-slate-700 active:bg-slate-800"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Desk</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20need%20a%20freight%20quote%20from%20Mumbai.`}
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 text-white font-bold text-xs uppercase py-3 px-3 flex items-center justify-center gap-2 shadow-sm active:bg-emerald-700"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default FloatingCTA;
