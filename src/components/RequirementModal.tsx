'use client';

import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Mail, CheckCircle2, ShieldAlert, MapPin, User, Phone as PhoneIcon, Globe, Package, FileText } from 'lucide-react';
import { COMPANY_INFO, SERVICES, ServiceItem } from '../data/logisticsData';

interface RequirementModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string | null;
}

const RequirementModal: React.FC<RequirementModalProps> = ({ isOpen, onClose, initialService = null }) => {
  const [service, setService] = useState<string>(initialService || "Air Freight Forwarding");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [origin, setOrigin] = useState<string>("Mumbai");
  const [destination, setDestination] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [isDG, setIsDG] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getSummary = () => {
    return `*INQUIRY / RATE QUOTE - DGR GLOBAL LOGISTICS*
----------------------------------------
*Client:* ${name || 'N/A'}
*Phone:* ${phone || 'N/A'}
----------------------------------------
*Service:* ${service}
*Route:* ${origin} ➔ ${destination || 'Global Export'}
*Weight / Quantity:* ${weight || 'Standard'}
*Dangerous Goods / UN Packaging:* ${isDG ? 'YES (UN Certified Required)' : 'NO'}
*Notes:* ${notes || 'Please provide rates and flight/vessel space schedule'}
----------------------------------------
*Operations Desk: Mayur Kadam (+91 9028345261)*`;
  };

  const handleWhatsApp = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }
    window.open(`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(getSummary())}`, '_blank');
    setSubmitted(true);
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }
    const subject = encodeURIComponent(`Freight Quote: ${service} - ${name}`);
    const body = encodeURIComponent(getSummary().replace(/\*/g, ''));
    window.open(`mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/80 backdrop-blur-xs transition-opacity duration-200">
      
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full sm:max-w-xl bg-white border-t sm:border border-slate-300 shadow-2xl z-10 max-h-[94vh] sm:max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
        
        {/* Sticky Header */}
        <div className="bg-slate-900 text-white px-4 sm:px-6 py-3.5 flex items-center justify-between border-b-2 border-amber-500 shrink-0">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Instant Operations Desk
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold font-heading text-white uppercase tracking-tight">
              Request Rate Quote / Booking
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4 flex-1">
          {submitted ? (
            <div className="py-8 text-center bg-white space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto rounded-full">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-heading text-slate-950 uppercase">
                Inquiry Sent Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>. Operations Lead <strong>Mayur Kadam</strong> has received your inquiry and will reach out on WhatsApp / Mobile immediately.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase px-8 py-3.5 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsApp} className="space-y-4">
              
              {/* Service Selection Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-1 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-amber-600" />
                  <span>Select Logistics Service *</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 px-3.5 py-3 text-sm text-slate-900 font-medium focus:outline-none focus:border-amber-500 focus:bg-white rounded-none"
                >
                  {SERVICES.map((s: ServiceItem) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-600" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase mb-1 flex items-center gap-1.5">
                    <PhoneIcon className="w-3.5 h-3.5 text-amber-600" />
                    <span>Phone / WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white rounded-none"
                  />
                </div>
              </div>

              {/* Route & Cargo Weight Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>Destination / Country</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dubai, London, New York"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase mb-1 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-amber-600" />
                    <span>Approx Weight / Units</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 250 KG, 10 UN Boxes"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white rounded-none"
                  />
                </div>
              </div>

              {/* Hazardous / UN Packaging Checkbox */}
              <div className="p-3 bg-amber-50 border border-amber-200">
                <label className="flex items-start sm:items-center gap-3 cursor-pointer text-xs font-bold text-amber-950 select-none">
                  <input
                    type="checkbox"
                    checked={isDG}
                    onChange={(e) => setIsDG(e.target.checked)}
                    className="w-5 h-5 accent-amber-600 shrink-0 mt-0.5 sm:mt-0"
                  />
                  <span>Requires Dangerous Goods (DG) Packaging or UN Certified Boxes/Drums?</span>
                </label>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-1 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-600" />
                  <span>Cargo Notes / Timeline</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Cargo description, temperature instructions, deadline..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white rounded-none"
                />
              </div>

            </form>
          )}
        </div>

        {/* Sticky Action Footer */}
        {!submitted && (
          <div className="bg-slate-50 border-t border-slate-200 p-3.5 sm:p-4 shrink-0 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase py-3.5 px-4 flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleEmail}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase py-3.5 px-5 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default RequirementModal;
