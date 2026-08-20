'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/logisticsData';

const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Take only top 2 FAQs for the homepage to keep it lightweight on mobile
  const topFaqs = FAQ_ITEMS.slice(0, 2);

  return (
    <section id="faq" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" /> Quick Answers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-xs sm:text-sm text-slate-600">
            Quick guidance on Mumbai air freight, customs, and certified UN packaging.
          </p>
        </div>

        {/* Compact 2-Item FAQ Preview */}
        <div className="space-y-3">
          {topFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base font-heading text-slate-950 hover:text-amber-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All FAQs Link to Dedicated /faq page */}
        <div className="mt-6 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs uppercase px-5 py-2.5 transition-colors shadow-xs"
          >
            <span>Read All FAQs & Guidelines (Dedicated Page)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
