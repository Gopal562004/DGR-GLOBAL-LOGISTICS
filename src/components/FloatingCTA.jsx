'use client';

import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Phone Call */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 flex items-center justify-center shadow-lg border border-slate-700 transition-transform hover:scale-105"
        title={`Call Mayur Kadam: ${COMPANY_INFO.displayPhone}`}
        aria-label="Call Mayur Kadam"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Chat */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20have%20an%20inquiry%20regarding%20DGR%20Global%20Logistics%20services.`}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingCTA;
