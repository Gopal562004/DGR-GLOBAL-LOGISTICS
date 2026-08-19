'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ServicesSection from './ServicesSection';
import HazardousPackagingHub from './HazardousPackagingHub';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import RequirementModal from './RequirementModal';

export default function MainPageClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenQuoteModal = (serviceName = null) => {
    setSelectedService(serviceName || "Air Freight Forwarding");
    setModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Semantic Header */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Semantic Body */}
      <main>
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />
        <HazardousPackagingHub onOpenQuoteModal={handleOpenQuoteModal} />
        <AboutSection onOpenQuoteModal={handleOpenQuoteModal} />
        <ContactSection />
      </main>

      {/* Semantic Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Floating Action Buttons */}
      <FloatingCTA />

      {/* Interactive Modal */}
      <RequirementModal
        isOpen={modalOpen}
        onClose={handleCloseQuoteModal}
        initialService={selectedService}
      />
    </div>
  );
}
