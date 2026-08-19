import React, { useState } from 'react';
import { 
  Package, 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  Copy, 
  Check, 
  ShieldAlert, 
  Box, 
  MapPin, 
  FileText, 
  ArrowRight,
  Sparkles,
  ClipboardList
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, HAZARDOUS_CLASSES } from '../data/logisticsData';

const InteractiveOrderBuilder = () => {
  const [selectedService, setSelectedService] = useState("Air Freight Forwarding");
  const [cargoName, setCargoName] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [packageCount, setPackageCount] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [originCity, setOriginCity] = useState("Mumbai (BOM)");
  const [destinationCity, setDestinationCity] = useState("");
  const [isHazmat, setIsHazmat] = useState(false);
  const [selectedDgClass, setSelectedDgClass] = useState("Class 3 - Flammable Liquids");
  const [unBoxesRequired, setUnBoxesRequired] = useState(false);
  const [unDrumsRequired, setUnDrumsRequired] = useState(false);
  const [labelsRequired, setLabelsRequired] = useState(false);
  const [urgency, setUrgency] = useState("Standard Urgent (24-48 hrs)");
  
  // Client details
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [specialRemarks, setSpecialRemarks] = useState("");

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getManifestText = () => {
    return `*SHIPMENT & ORDER REQUIREMENT - DGR GLOBAL LOGISTICS*
========================================
*1. CLIENT DETAILS:*
- Name: ${clientName || 'Pending'}
- Company: ${clientCompany || 'Individual / Shipper'}
- Phone: ${clientPhone || 'Pending'}
- Email: ${clientEmail || 'N/A'}

*2. SERVICE & SHIPMENT SPECIFICATIONS:*
- Requested Service: ${selectedService}
- Cargo Item: ${cargoName || 'Not specified'}
- Approx Weight: ${weightKg ? `${weightKg} KG` : 'TBD'}
- Total Packages / Volume: ${packageCount ? `${packageCount} Units` : 'TBD'} ${dimensions ? `(Dims: ${dimensions})` : ''}
- Origin: ${originCity || 'Mumbai'}
- Destination: ${destinationCity || 'To Be Finalized'}
- Urgency Level: ${urgency}

*3. DANGEROUS GOODS & PACKAGING REQUIREMENT:*
- Hazardous / DG Cargo: ${isHazmat ? `YES (${selectedDgClass})` : 'NO (General Cargo)'}
- UN 4G/4GV Certified Boxes Needed: ${unBoxesRequired ? 'YES' : 'NO'}
- UN Steel/Plastic Drums Needed: ${unDrumsRequired ? 'YES' : 'NO'}
- Hazardous Warning Labels Needed: ${labelsRequired ? 'YES' : 'NO'}

*4. SPECIAL REMARKS / INSTRUCTIONS:*
${specialRemarks || 'Please quote best freight rate and earliest connection flight/vessel.'}
========================================
*Operations Desk: Mayur Kadam (+91 9028345261)*
*Location: Sahar Village, Andheri East, Mumbai 400099*`;
  };

  const handleWhatsAppDispatch = (e) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert("Please provide at least your Name and Phone Number.");
      return;
    }
    const text = encodeURIComponent(getManifestText());
    window.open(`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleEmailDispatch = (e) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert("Please provide at least your Name and Phone Number.");
      return;
    }
    const subject = encodeURIComponent(`Cargo Requirement / Order: ${selectedService} - ${clientName}`);
    const body = encodeURIComponent(getManifestText().replace(/\*/g, ''));
    window.open(`mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  const handleCopyManifest = () => {
    navigator.clipboard.writeText(getManifestText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="order-builder" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 uppercase tracking-widest">
            <ClipboardList className="w-3.5 h-3.5" /> Client Order & Requirement Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white uppercase">
            Build Your Shipment & Supply Order
          </h2>
          <p className="text-sm text-slate-300">
            Configure your cargo specifications, hazardous handling details, or UN packaging requirements below. Dispatch directly to Operations Lead <strong className="text-amber-400">Mayur Kadam</strong> via WhatsApp, Email, or instant direct submission.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form (8 Cols) */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-8">
            
            {/* Step 1: Select Service */}
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-5 h-5 bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-bold">1</span>
                <span>Select Required Service Category</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedService(s.title)}
                    className={`text-left p-2.5 text-xs border transition-all ${
                      selectedService === s.title
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="truncate">{s.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Shipment & Cargo Metrics */}
            <div className="border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-5 h-5 bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-bold">2</span>
                <span>Cargo Specifications & Route</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Cargo Item / Commodity</label>
                  <input
                    type="text"
                    placeholder="e.g. Industrial Chemicals, Pharma, Samples"
                    value={cargoName}
                    onChange={(e) => setCargoName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Approx Weight (KG / Tons)</label>
                  <input
                    type="text"
                    placeholder="e.g. 350 KG"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Package Count / Units</label>
                  <input
                    type="text"
                    placeholder="e.g. 10 Boxes / 2 Drums"
                    value={packageCount}
                    onChange={(e) => setPackageCount(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Dimensions (L x W x H cm)</label>
                  <input
                    type="text"
                    placeholder="e.g. 50x40x30 cm each"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Origin City / Port</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai (BOM), Nhava Sheva"
                    value={originCity}
                    onChange={(e) => setOriginCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Destination Country / City</label>
                  <input
                    type="text"
                    placeholder="e.g. Dubai, London, Singapore"
                    value={destinationCity}
                    onChange={(e) => setDestinationCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Dangerous Goods & UN Packaging Add-ons */}
            <div className="border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-5 h-5 bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-bold">3</span>
                <span>Dangerous Goods & UN Packaging Add-ons</span>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-200">
                    <input
                      type="checkbox"
                      checked={isHazmat}
                      onChange={(e) => setIsHazmat(e.target.checked)}
                      className="w-4 h-4 text-amber-600 accent-amber-500 rounded-none"
                    />
                    <span>Dangerous Goods / Hazardous (DG) Cargo</span>
                  </label>

                  <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-200">
                    <input
                      type="checkbox"
                      checked={unBoxesRequired}
                      onChange={(e) => setUnBoxesRequired(e.target.checked)}
                      className="w-4 h-4 text-amber-600 accent-amber-500 rounded-none"
                    />
                    <span>Supply UN 4G / 4GV Certified Fiberboard Boxes</span>
                  </label>

                  <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-200">
                    <input
                      type="checkbox"
                      checked={unDrumsRequired}
                      onChange={(e) => setUnDrumsRequired(e.target.checked)}
                      className="w-4 h-4 text-amber-600 accent-amber-500 rounded-none"
                    />
                    <span>Supply UN Steel / Plastic Drums (1A1 / 1H1)</span>
                  </label>

                  <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-200">
                    <input
                      type="checkbox"
                      checked={labelsRequired}
                      onChange={(e) => setLabelsRequired(e.target.checked)}
                      className="w-4 h-4 text-amber-600 accent-amber-500 rounded-none"
                    />
                    <span>Supply IATA / IMDG Hazard Warning Labels</span>
                  </label>
                </div>

                {isHazmat && (
                  <div className="pt-3 border-t border-slate-800">
                    <label className="block text-[11px] font-bold text-amber-400 uppercase mb-1">
                      Select Hazardous Class
                    </label>
                    <select
                      value={selectedDgClass}
                      onChange={(e) => setSelectedDgClass(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                    >
                      {HAZARDOUS_CLASSES.map((c) => (
                        <option key={c.class} value={`${c.class} - ${c.name}`}>
                          {c.class}: {c.name} ({c.desc})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Step 4: Shipper / Client Identification */}
            <div className="border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-5 h-5 bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-bold">4</span>
                <span>Your Contact Information & Urgency</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp / Mobile"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Company Name</label>
                  <input
                    type="text"
                    placeholder="Business / Trader"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                  Specific Remarks / Special Handling / Deadlines
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Requires dry ice replenishment at Sahar terminal, urgent next flight connection, temperature +2 to +8°C..."
                  value={specialRemarks}
                  onChange={(e) => setSpecialRemarks(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-white px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

          </div>

          {/* Right Live Manifest & Dispatch Console (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            
            {/* Live Manifest Preview */}
            <div className="bg-slate-900 border-2 border-slate-800 p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold font-heading text-white uppercase">Live Order Manifest</span>
                  </div>
                  <button
                    onClick={handleCopyManifest}
                    className="text-[11px] text-slate-400 hover:text-amber-400 flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="bg-slate-950 p-3 border border-slate-800 font-mono text-[11px] text-slate-300 whitespace-pre-line leading-relaxed max-h-80 overflow-y-auto">
                  {getManifestText()}
                </div>
              </div>

              {/* Direct Multi-Channel Actions */}
              <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Instant Multi-Channel Dispatch:
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppDispatch}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailDispatch}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider py-2.5 flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Send to Operations Email</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full bg-slate-950 hover:bg-slate-900 text-slate-200 font-bold text-xs uppercase tracking-wider py-2.5 flex items-center justify-center gap-2 border border-slate-800 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Direct Call Mayur Kadam</span>
                </a>
              </div>
            </div>

            {/* Operational Guarantee Card */}
            <div className="bg-slate-900 border border-slate-800 p-4 text-xs text-slate-400 space-y-1">
              <div className="font-bold text-white uppercase text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-2 bg-emerald-500 inline-block"></span>
                Direct Desk Response
              </div>
              <p>
                Every submission goes directly to <strong>Mayur Kadam</strong> (Operations and Sales Manager) for immediate rate quotation and flight/vessel space confirmation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractiveOrderBuilder;
