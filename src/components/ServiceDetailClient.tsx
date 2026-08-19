'use client';

import React, { useState } from 'react';
import { Send, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO, ServiceItem } from '@/data/logisticsData';
import RequirementModal from './RequirementModal';

interface ServiceDetailClientProps {
  service: ServiceItem;
}

const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-2.5">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase py-3.5 px-4 flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Instant Rate Quote for {service.title}</span>
        </button>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(`Hello Mayur, I need an instant quote for ${service.title}.`)}`}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase py-3.5 px-4 flex items-center justify-center gap-2 transition-colors shadow-sm block text-center"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Mayur Kadam</span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase py-3 px-4 flex items-center justify-center gap-2 transition-colors block text-center"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Direct Call: {COMPANY_INFO.phone}</span>
        </a>
      </div>

      <RequirementModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={service.title}
      />
    </>
  );
};

export default ServiceDetailClient;
