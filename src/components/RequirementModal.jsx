import React, { useState } from 'react';
import { X, MessageSquare, Phone, Mail, CheckCircle2, Send } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/logisticsData';

const RequirementModal = ({ isOpen, onClose, initialService = null }) => {
  const [service, setService] = useState(initialService || "Air Freight Forwarding");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [origin, setOrigin] = useState("Mumbai");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [isDG, setIsDG] = useState(false);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const getSummary = () => {
    return `*INQUIRY / RATE QUOTE - DGR GLOBAL LOGISTICS*
----------------------------------------
*Client:* ${name || 'N/A'}
*Company:* ${company || 'Individual / Shipper'}
*Phone:* ${phone || 'N/A'}
----------------------------------------
*Service:* ${service}
*Route:* ${origin} ➔ ${destination || 'TBD'}
*Weight / Quantity:* ${weight || 'Not specified'}
*Dangerous Goods / UN Packaging:* ${isDG ? 'YES' : 'NO'}
*Notes:* ${notes || 'Please provide rates and flight/vessel space schedule'}
----------------------------------------
*Direct Operations Lead: Mayur Kadam (+91 9028345261)*`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    window.open(`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(getSummary())}`, '_blank');
    setSubmitted(true);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    const subject = encodeURIComponent(`Freight Quote: ${service} - ${name}`);
    const body = encodeURIComponent(getSummary().replace(/\*/g, ''));
    window.open(`mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-slate-300 shadow-2xl my-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b-2 border-amber-500">
          <div>
            <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
              Mayur Kadam (Operations Desk: 9028345261)
            </div>
            <h3 className="text-lg font-bold font-heading text-white uppercase">
              Request Rate Quote / Service
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center bg-white space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-heading text-slate-950 uppercase">
              Quote Request Sent!
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Thank you, <strong>{name}</strong>. Operations Lead <strong>Mayur Kadam</strong> has received your inquiry and will contact you directly on WhatsApp / Phone.
            </p>
            <div className="pt-2">
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="bg-slate-900 text-white font-bold text-xs uppercase px-6 py-2.5"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form className="p-6 space-y-4 text-slate-900">
            
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service *</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp / Mobile"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Destination / Country</label>
                <input
                  type="text"
                  placeholder="e.g. Dubai, London, New York"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Approx Weight / Units</label>
                <input
                  type="text"
                  placeholder="e.g. 200 KG, 5 UN Boxes"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-800">
                <input
                  type="checkbox"
                  checked={isDG}
                  onChange={(e) => setIsDG(e.target.checked)}
                  className="w-4 h-4 accent-amber-500"
                />
                <span>Requires Dangerous Goods (DG) Packaging or UN Certified Boxes?</span>
              </label>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Notes / Additional Info</label>
              <textarea
                rows={2}
                placeholder="Cargo type, temperature instructions, deadline, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-2 border-t border-slate-200">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase px-5 py-2.5 flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> Send on WhatsApp
              </button>

              <button
                type="button"
                onClick={handleEmail}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase px-5 py-2.5 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Mail className="w-4 h-4" /> Send Email
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

export default RequirementModal;
