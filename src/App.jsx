import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import HazardousPackagingHub from './components/HazardousPackagingHub';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import RequirementModal from './components/RequirementModal';

function App() {
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
      {/* Top Navbar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Sections (Light, Clean, Uncongested) */}
      <main>
        {/* Clean Hero with Photos */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 9 Services Matching Visiting Card Back */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* UN Packaging & Hazardous Specialization */}
        <HazardousPackagingHub onOpenQuoteModal={handleOpenQuoteModal} />

        {/* About Mayur Kadam & Mumbai Sahar Air Cargo Hub */}
        <AboutSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Simple & Clean Contact Section */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Minimal Floating WhatsApp & Call Buttons */}
      <FloatingCTA />

      {/* Simple Quote / Booking Modal */}
      <RequirementModal
        isOpen={modalOpen}
        onClose={handleCloseQuoteModal}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
