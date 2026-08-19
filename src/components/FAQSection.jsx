'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What makes DGR Global Logistics the top freight forwarder in Mumbai?",
      a: "Our ground operations office is situated in Sahar Village, Andheri East (adjacent to Mumbai CSMIA Air Cargo Complex). This strategic location enables us to offer faster flight space allocation, immediate airport handovers, late flight cut-off clearance, and 24/7 on-site dangerous goods handling led by Operations Manager Mayur Kadam."
    },
    {
      q: "Which areas in Mumbai and Maharashtra do you cover for cargo pickup?",
      a: "We offer same-day doorstep pickup across all areas of Mumbai (Andheri, Sahar, BKC, Bandra, Kurla), Navi Mumbai, Thane, JNPT / Nhava Sheva, Taloja MIDC, Turbhe, Tarapur, Chakan / Pune industrial corridors, and pan-India manufacturing hubs."
    },
    {
      q: "Do you supply UN approved 4G/4GV boxes and drums with test certificates in Mumbai?",
      a: "Yes. We maintain extensive ready inventory of UN certified 4G and 4GV fiberboard boxes, UN rated tight-head steel drums (1A1), and HDPE plastic jerricans (1H1/3H1) tested for Packing Groups I, II, and III (X, Y, Z ratings), with genuine test certificates provided."
    },
    {
      q: "What Dangerous Goods (DG) classes and labels do you provide?",
      a: "We supply certified weather-resistant IATA/IMDG warning diamond labels for all Class 1 to 9 hazardous materials, including Class 3 (Flammable Liquids), Class 8 (Corrosives), Class 9 (Lithium Batteries & Dry Ice), Limited Quantity (LQ) marks, and Cargo Aircraft Only (CAO) placards."
    },
    {
      q: "How can I get an immediate rate quote for Air or Sea shipments?",
      a: "You can reach out directly to Mayur Kadam (Manager - Operations & Sales) via Phone or WhatsApp at +91 9028345261 or email dgr.export.logistics@gmail.com for an instant freight quotation."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            Mumbai Freight & DG Logistics FAQs
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-sm text-slate-600">
            Answers to common questions about air freight, ocean consolidation, custom clearance, and UN certified dangerous goods in Mumbai.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base font-heading text-slate-950 hover:text-amber-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Contact Prompt */}
        <div className="mt-8 p-4 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <span className="font-bold text-amber-400">Have a specific shipment or customs question?</span> Speak with <strong>Mayur Kadam</strong>.
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-1.5 uppercase transition-colors"
            >
              Call {COMPANY_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20have%20a%20logistics%20question.`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 uppercase transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
