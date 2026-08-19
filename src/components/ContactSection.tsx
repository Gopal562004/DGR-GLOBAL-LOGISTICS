'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, ServiceItem } from '../data/logisticsData';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Air Freight Forwarding');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    const text = `*NEW INQUIRY - DGR GLOBAL LOGISTICS*
----------------------------------------
*Client Name:* ${name}
*Phone:* ${phone}
*Service Requested:* ${service}
*Requirement / Message:* ${message || 'Please provide rates and flight schedule'}
----------------------------------------
*Direct to: Mayur Kadam (+91 9028345261)*`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase">
              REACH OUR DESK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 uppercase tracking-tight">
            CONTACT & MUMBAI LOCATION
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Get in touch with Operations Lead <strong className="text-slate-900">{COMPANY_INFO.contactPerson}</strong> for instant freight quotation and shipment handovers.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Address (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-5">
              
              <div className="border-b border-slate-200 pb-4">
                <div className="text-lg font-bold font-heading text-slate-950 uppercase">
                  {COMPANY_INFO.contactPerson}
                </div>
                <div className="text-xs font-bold text-amber-600 uppercase">
                  {COMPANY_INFO.role}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Direct Mobile</div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-base font-bold text-slate-950 hover:text-amber-600">
                    {COMPANY_INFO.displayPhone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Official Email</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-slate-900 hover:text-amber-600 break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 pt-2 border-t border-slate-200">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-700 space-y-0.5">
                  <div className="font-bold text-slate-950 uppercase mb-1">Mumbai Operational Hub:</div>
                  <div>{COMPANY_INFO.address.line1}</div>
                  <div>{COMPANY_INFO.address.line2}</div>
                  <div>{COMPANY_INFO.address.line3}</div>
                  <div className="font-bold text-slate-900">{COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}</div>
                  <div className="text-amber-700 font-medium text-[11px] pt-1">
                    ★ {COMPANY_INFO.address.landmark}
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("7/1 Creado House, Sutar pakhadi Near Sai Hanuman Mandir, Sahar Village Andheri East Mumbai 400099")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase py-2.5 px-4 border border-slate-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Clean, Uncongested Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8">
            
            <div className="border-b border-slate-200 pb-4 mb-6">
              <h3 className="text-xl font-bold font-heading text-slate-950 uppercase">
                Send Requirement / Message
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Direct submission to Operations Desk. Fast response on WhatsApp & Phone.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-white border border-emerald-300 space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 uppercase">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600">
                  Thank you, <strong>{name}</strong>. Mayur Kadam has received your details and will get back to you immediately.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-slate-900 text-white font-bold text-xs uppercase px-4 py-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Required</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  >
                    {SERVICES.map((s: ServiceItem) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Cargo Details / Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Mention destination, approx weight, UN packaging, or specific timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider py-3.5 px-8 flex items-center justify-center gap-2 border border-amber-600 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Mayur Kadam</span>
                  </button>

                  <div className="text-[11px] text-slate-500 text-center sm:text-right">
                    Direct reply on WhatsApp & Call within 15 minutes.
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
