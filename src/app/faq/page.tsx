import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  HelpCircle, 
  ArrowLeft, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  ShieldCheck,
  Plane,
  Box,
  FileCheck2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { COMPANY_INFO, FAQ_ITEMS } from '@/data/logisticsData';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs) | DGR Global Logistics Mumbai',
  description: 'Common questions and answers regarding international air freight forwarding, customs clearance (CHA), UN certified 4GV packaging boxes, and hazardous goods transport from Mumbai.',
  alternates: {
    canonical: '/faq',
  }
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-amber-600 flex items-center gap-1 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">FAQs</span>
        </div>

        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1 uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" /> Knowledge & Guidelines
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 border border-slate-200 p-5 sm:p-6 hover:border-slate-400 transition-colors"
            >
              <h2 className="text-base sm:text-lg font-bold font-heading text-slate-950 mb-2">
                {faq.q}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-12 bg-slate-950 text-white p-6 sm:p-8 border-t-4 border-amber-500">
          <h3 className="text-lg font-bold font-heading uppercase text-white mb-2">
            Still Have Questions? Speak with Operations Lead
          </h3>
          <p className="text-xs text-slate-400 mb-6 max-w-xl">
            Mayur Kadam and our Mumbai customs desk are available 24/7 for urgent shipment consultations, tariff classification, and packaging assistance.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:+91${COMPANY_INFO.phone}`}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase px-5 py-3 flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20have%20a%20logistics%20question.`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase px-5 py-3 flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
