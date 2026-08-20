'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  MessageSquare, 
  ChevronRight,
  Send
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

interface NavbarProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "UN Catalog", href: "/products" },
    { name: "Operations", href: "/#about" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact", href: "/#contact" }
  ];

  const handleQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      window.open(`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20would%20like%20to%20request%20a%20logistics%20rate%20quote.`, '_blank');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Clean Info Bar (Light Theme) */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-4 text-xs">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              {COMPANY_INFO.contactPerson} ({COMPANY_INFO.role})
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Sahar Village, Andheri East, Mumbai 400099
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:+91${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1 font-bold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.displayPhone}</span>
            </a>

            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Hello%20Mayur,%20I%20have%20an%20inquiry%20regarding%20freight%20and%20logistics%20services.`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-0.5 font-bold text-[11px] flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Clean Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Visiting Card Logo Reproduction */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-lg border border-slate-800 shadow-sm shrink-0">
              <span className="font-mono text-base font-extrabold">&gt;</span>
            </div>

            <div>
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="text-2xl font-extrabold tracking-tight text-slate-950 font-heading">
                  DGR
                </span>
                <span className="text-sm font-extrabold tracking-wider text-amber-600 uppercase font-heading">
                  GLOBAL LOGISTICS
                </span>
              </div>
              <p className="text-[10px] font-bold text-slate-600 tracking-wider uppercase mt-1">
                {COMPANY_INFO.tagline}
              </p>
            </div>
          </Link>

          {/* Clean Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-700 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Quote Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleQuoteClick}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold uppercase tracking-wider px-5 py-2.5 border border-amber-600 shadow-sm flex items-center gap-1.5 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleQuoteClick}
              className="bg-amber-500 text-slate-950 text-xs font-bold px-3 py-2 uppercase"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 border border-slate-300"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 pt-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-800 hover:text-amber-600 py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleQuoteClick();
              }}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 text-xs uppercase tracking-wider text-center"
            >
              Request Fast Quote
            </button>

            <a
              href={`tel:+91${COMPANY_INFO.phone}`}
              className="w-full bg-slate-900 text-white font-bold py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" /> Call {COMPANY_INFO.displayPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
