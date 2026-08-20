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

const MainPageClient: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleOpenQuoteModal = (serviceName: string = "Air Freight Forwarding") => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950 pb-12 sm:pb-0">
      {/* Semantic Header */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Semantic Body */}
      <main>
        {/* Hero Section with Quick Rate Estimator */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* UN Packaging & DG Specialization (Manufacturer & Supplier Hub) */}
        <HazardousPackagingHub onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Categorized Services with Interactive Tabs */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* High-Trust Operations Desk, Visiting Card & Mumbai Gateways */}
        <AboutSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Contact & Location Section */}
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
};

export default MainPageClient;
