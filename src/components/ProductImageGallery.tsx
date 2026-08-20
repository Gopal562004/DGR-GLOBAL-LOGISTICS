'use client';

import React, { useState } from 'react';

interface ProductImageGalleryProps {
  mainImage: string;
  galleryImages?: string[];
  productName: string;
  itemCode?: string;
}

export default function ProductImageGallery({
  mainImage,
  galleryImages = [],
  productName,
  itemCode,
}: ProductImageGalleryProps) {
  const images = galleryImages && galleryImages.length > 0 ? galleryImages : [mainImage];
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const currentImage = images[selectedIndex] || mainImage;

  return (
    <div className="space-y-4">
      {/* Big Main Image Container */}
      <div className="border-2 border-slate-900 overflow-hidden bg-slate-100 shadow-md relative group">
        <img
          src={currentImage}
          alt={`${productName} - View ${selectedIndex + 1}`}
          className="w-full h-80 sm:h-96 object-cover transition-all duration-300 group-hover:scale-105"
        />
        
        {itemCode && (
          <div className="absolute top-3 left-3 bg-slate-950 text-amber-400 font-mono font-extrabold text-sm px-3 py-1 border border-slate-700 shadow-sm">
            CODE: {itemCode}
          </div>
        )}
        
        <div className="absolute top-3 right-3 bg-emerald-600 text-white font-extrabold text-xs px-2.5 py-1 uppercase tracking-wider shadow-sm">
          UN Certified
        </div>

        {/* View Indicator Overlay Badge */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-slate-950/80 text-amber-400 text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider backdrop-blur-xs">
            Viewing Angle {selectedIndex + 1} of {images.length}
          </div>
        )}
      </div>

      {/* Interactive Thumbnails for Hover and Click */}
      {images.length > 1 && (
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase text-slate-500 shrink-0">Angles:</span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {images.map((img, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-16 h-14 border-2 overflow-hidden shadow-xs transition-all relative ${
                    isSelected
                      ? 'border-amber-500 ring-2 ring-amber-400 scale-105 opacity-100'
                      : 'border-slate-300 opacity-60 hover:opacity-100 hover:border-slate-800'
                  }`}
                  title={`View Angle ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Angle View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-slate-950/75 text-white text-[8px] font-bold text-center py-0.2">
                    View {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
