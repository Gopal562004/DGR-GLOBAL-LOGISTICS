'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  Box, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  Search, 
  Filter, 
  ArrowRight, 
  ShieldCheck, 
  X, 
  FileText, 
  Truck, 
  Sparkles, 
  Eye,
  ExternalLink
} from 'lucide-react';
import { UNProduct, CompanyInfo } from '@/data/logisticsData';

interface ProductsCatalogClientProps {
  products: UNProduct[];
  companyInfo: CompanyInfo;
}

const CATEGORIES = [
  { 
    id: 'all', 
    label: 'All Packaging',
    desc: 'Complete range of UN certified fiberboard boxes, open top HDPE drums, Jerry cans, hazardous labels, and chemical absorbents.'
  },
  { 
    id: 'un-boxes', 
    label: 'UN 4GV Boxes (X3-X55)',
    desc: 'Manufacturer of a wide range of UN certified fiberboard boxes: UN Mark 4GV X31, X55, X3, X6, X9, and X22 with IIP/IATA test certificates.'
  },
  { 
    id: 'hdpe-drums', 
    label: 'HDPE Open Top Drums',
    desc: 'Leading manufacturer of UN approved 30L, 35L, 60L, and 1H2/X60 open top HDPE drums for chemicals and hazardous transport.'
  },
  { 
    id: 'jerry-cans', 
    label: 'UN Jerry Cans (3H1)',
    desc: 'UN approved 35L (3H1/X35) and 50L narrow/wide mouth HDPE jerry cans tested for Packing Groups II and III.'
  },
  { 
    id: 'steel-drums', 
    label: 'Steel & 220L Drums',
    desc: 'UN marked 220L PG II chemical storage drums and 10L-30L mild steel (MS / 1A1) drums.'
  },
  { 
    id: 'labels-absorbents', 
    label: 'Hazard Labels & Absorbents',
    desc: 'Self-adhesive weatherproof PVC Class 1 to 9 hazard diamond labels and Bio-Tech chemical absorbent powder bags.'
  },
];

export default function ProductsCatalogClient({ products, companyInfo }: ProductsCatalogClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<UNProduct | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  // Sync category state when URL query parameter changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORIES.some(c => c.id === cat)) {
      setSelectedCategory(cat);
    } else if (!cat) {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      router.push('/products', { scroll: false });
    } else {
      router.push(`/products?category=${catId}`, { scroll: false });
    }
  };

  const activeCategoryObj = CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.itemCode && p.itemCode.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.capacity.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openProductModal = (product: UNProduct) => {
    setActiveModalProduct(product);
    setModalImageIndex(0);
  };

  const handleInquireWhatsApp = (product: UNProduct) => {
    const text = `Hello Mayur, I am interested in purchasing:
• Product: ${product.name}
• Item Code: ${product.itemCode || 'N/A'}
• Price: ${product.priceDisplay}
• Capacity/Specs: ${product.capacity} (${product.packingGroup})
Please share ready stock availability, dispatch timeline, and quotation in Mumbai.`;

    window.open(`https://wa.me/${companyInfo.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-8">
      
      {/* Category Pills Bar */}
      <div className="bg-slate-50 border border-slate-200 p-4 space-y-4">
        
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const href = cat.id === 'all' ? '/products' : `/products?category=${cat.id}`;
              return (
                <Link
                  key={cat.id}
                  href={href}
                  scroll={false}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-sm'
                      : 'bg-white text-slate-700 hover:text-slate-950 border-slate-300'
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative shrink-0 md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search X3, X31, 35L, Drum..."
              className="w-full bg-white border border-slate-300 pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 rounded-none"
            />
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="text-xs text-slate-600 bg-white border-l-4 border-amber-500 p-3 flex items-center justify-between gap-4">
          <div>
            <strong>{activeCategoryObj.label}:</strong> {activeCategoryObj.desc}
          </div>
          <span className="text-[11px] font-mono text-slate-400 shrink-0 font-bold">
            {filteredProducts.length} Items Listed
          </span>
        </div>

      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-slate-200 hover:border-slate-800 transition-all flex flex-col justify-between shadow-xs relative group"
          >
            {/* Top Image & Item Code Badge */}
            <Link 
              href={`/products/${p.id}`}
              className="relative overflow-hidden bg-slate-100 border-b border-slate-200 block"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {p.itemCode && (
                <div className="absolute top-2.5 left-2.5 bg-slate-950 text-amber-400 font-mono font-extrabold text-xs px-2.5 py-1 border border-slate-700 shadow-xs">
                  CODE: {p.itemCode}
                </div>
              )}
              <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white font-extrabold text-[11px] px-2 py-0.5 uppercase tracking-wider">
                UN Certified
              </div>
            </Link>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base font-extrabold font-heading text-slate-950 uppercase leading-snug">
                  <Link href={`/products/${p.id}`} className="hover:text-amber-700 transition-colors">
                    {p.name}
                  </Link>
                </h3>

                <div className="mt-2.5 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <span className="text-slate-400">Capacity:</span>
                    <span className="font-bold text-slate-900">{p.capacity}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <span className="text-slate-400">Packing Group:</span>
                    <span className="font-semibold text-amber-700">{p.packingGroup}</span>
                  </div>

                  {p.dimensions && (
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-400">Dimensions:</span>
                      <span className="font-mono text-[11px] text-slate-800">{p.dimensions}</span>
                    </div>
                  )}

                  {p.tareWeight && (
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-400">Tare Weight:</span>
                      <span className="font-semibold text-slate-800">{p.tareWeight}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-slate-400">Material:</span>
                    <span className="text-slate-700">{p.material}</span>
                  </div>
                </div>
              </div>

              {/* Price & Action Buttons */}
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Factory Price:</span>
                  <span className="text-lg font-extrabold text-amber-600 font-mono">
                    {p.priceDisplay}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/products/${p.id}`}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase py-2.5 px-2 text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Product</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </Link>

                  <button
                    onClick={() => handleInquireWhatsApp(p)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase py-2.5 px-2 flex items-center justify-center gap-1 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-slate-50 border border-slate-200 p-8 space-y-3">
          <p className="text-base font-bold text-slate-900">No packaging items matched your search.</p>
          <button
            onClick={() => {
              handleCategorySelect('all');
              setSearchQuery('');
            }}
            className="bg-amber-500 text-slate-950 font-bold text-xs uppercase px-4 py-2"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Full Specifications & Multi-View Image Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border-2 border-slate-900 max-w-2xl w-full p-6 relative max-h-[92vh] overflow-y-auto shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-950 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="border-b border-slate-200 pb-3 mb-4">
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 uppercase mb-1">
                <ShieldCheck className="w-3 h-3 text-amber-700" /> UN Certified Specification
              </div>
              <h3 className="text-xl font-extrabold font-heading text-slate-950 uppercase">
                {activeModalProduct.name}
              </h3>
              <div className="text-base font-extrabold text-amber-600 font-mono mt-1">
                Approx Factory Price: {activeModalProduct.priceDisplay}
              </div>
            </div>

            {/* Multi-View Image Gallery Strip */}
            <div className="mb-5 space-y-2">
              <div className="w-full h-56 bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
                <img
                  src={
                    activeModalProduct.galleryImages && activeModalProduct.galleryImages.length > 0
                      ? activeModalProduct.galleryImages[modalImageIndex] || activeModalProduct.image
                      : activeModalProduct.image
                  }
                  alt={activeModalProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {activeModalProduct.galleryImages && activeModalProduct.galleryImages.length > 1 && (
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Available Views:</span>
                  {activeModalProduct.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModalImageIndex(idx)}
                      className={`w-14 h-12 border overflow-hidden transition-all ${
                        modalImageIndex === idx ? 'border-amber-500 ring-2 ring-amber-400' : 'border-slate-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Specifications Table */}
            <div className="space-y-2 text-xs mb-6">
              <div className="font-bold text-slate-900 uppercase border-b border-slate-100 pb-1">
                Technical Specifications:
              </div>

              <table className="w-full text-left border border-slate-200">
                <tbody>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 font-bold text-slate-600 w-1/3">Brand</td>
                    <td className="p-2 font-semibold text-slate-900">DGR</td>
                  </tr>
                  {activeModalProduct.itemCode && (
                    <tr className="border-b border-slate-200">
                      <td className="p-2 font-bold text-slate-600">Item Code</td>
                      <td className="p-2 font-mono font-bold text-amber-700">{activeModalProduct.itemCode}</td>
                    </tr>
                  )}
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 font-bold text-slate-600">Capacity</td>
                    <td className="p-2 font-bold text-slate-900">{activeModalProduct.capacity}</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-bold text-slate-600">Packing Group</td>
                    <td className="p-2 text-slate-800">{activeModalProduct.packingGroup}</td>
                  </tr>
                  {activeModalProduct.dimensions && (
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <td className="p-2 font-bold text-slate-600">Dimensions</td>
                      <td className="p-2 font-mono text-slate-800">{activeModalProduct.dimensions}</td>
                    </tr>
                  )}
                  {activeModalProduct.tareWeight && (
                    <tr className="border-b border-slate-200">
                      <td className="p-2 font-bold text-slate-600">Tare Weight</td>
                      <td className="p-2 text-slate-800">{activeModalProduct.tareWeight}</td>
                    </tr>
                  )}
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-2 font-bold text-slate-600">Material</td>
                    <td className="p-2 text-slate-800">{activeModalProduct.material}</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-bold text-slate-600">Certification</td>
                    <td className="p-2 font-bold text-emerald-700">UN Approved (IATA / IMDG / IIP Certified)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-2 font-bold text-slate-600">Usage / Application</td>
                    <td className="p-2 text-slate-800">Dangerous Goods, Chemical Air/Sea Export, Battery Transport</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button
                onClick={() => handleInquireWhatsApp(activeModalProduct)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase py-3 px-4 flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Yes! I Am Interested — Get Best Quote on WhatsApp</span>
              </button>

              <Link
                href={`/products/${activeModalProduct.id}`}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase py-2.5 px-4 flex items-center justify-center gap-2 transition-colors text-center"
              >
                <span>Go to Dedicated Product Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
