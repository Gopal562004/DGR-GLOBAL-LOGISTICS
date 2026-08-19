'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ServicesSection from './ServicesSection';
import HazardousPackagingHub from './HazardousPackagingHub';
import MumbaiHubSection from './MumbaiHubSection';
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
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
        {/* Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 9 Services */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* UN Packaging & DG Specialization */}
        <HazardousPackagingHub onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Dedicated Mumbai, JNPT & Maharashtra Cargo Gateway */}
        <MumbaiHubSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* About Mayur Kadam & Operations Desk */}
        <AboutSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Rich SEO FAQ Section */}
        <FAQSection />

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
}
