import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  ShieldCheck, 
  Box, 
  MapPin, 
  Clock,
  HelpCircle,
  Package,
  Layers
} from 'lucide-react';
import { SERVICES, COMPANY_INFO, ServiceItem } from '@/data/logisticsData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | DGR Global Logistics',
    };
  }

  return {
    title: `${service.metaTitle} | DGR Global Logistics`,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | DGR Global Logistics Mumbai`,
      description: service.metaDescription,
      url: `https://dgrgloballogistics.com/services/${service.slug}`,
      siteName: 'DGR Global Logistics',
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: 'article',
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Generate Service JSON-LD Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      telephone: '+91-9028345261',
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.address.line1 + ', ' + COMPANY_INFO.address.line2,
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400099',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
    },
    description: service.metaDescription,
  };

  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navbar />

      <main>
        {/* Breadcrumb & Hero Header */}
        <section className="bg-slate-900 text-white border-b-2 border-amber-500 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/#services" className="hover:text-amber-400 transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-amber-400 font-semibold truncate">{service.title}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="inline-block bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 uppercase tracking-wider">
                  DGR Global Logistics Specialist
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white uppercase tracking-tight">
                  {service.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-300">
                  {service.tagline}
                </p>
              </div>

              {/* Direct Fast Action */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(`Hello Mayur, I am interested in inquiring about ${service.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase px-5 py-3 flex items-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Mayur Kadam</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase px-5 py-3 flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Core Content Grid */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Main Content (8 cols) */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* Hero Photo */}
                <div className="border border-slate-300 overflow-hidden shadow-sm">
                  <img
                    src={service.image}
                    alt={`${service.title} in Mumbai`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                    <span>Operational Facility: <strong>Sahar Village, Andheri East, Mumbai 400099</strong></span>
                    <span className="text-emerald-700 font-bold">✓ Active 24/7 Operations Desk</span>
                  </div>
                </div>

                {/* Comprehensive Description */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold font-heading text-slate-950 uppercase border-b border-slate-200 pb-2">
                    Service Overview & Capabilities
                  </h2>
                  {service.fullDescription.map((para, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Shipper Key Benefits */}
                <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-bold font-heading text-slate-950 uppercase flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-600" />
                    Key Benefits for Shippers & Exporters
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="border border-slate-200 p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-bold font-heading text-slate-950 uppercase flex items-center gap-2">
                    <Layers className="w-5 h-5 text-amber-600" />
                    Technical Specifications & Scope
                  </h3>
                  <div className="space-y-2 pt-2">
                    {service.specifications.map((spec, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dedicated Service FAQs */}
                {service.faqList && service.faqList.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-slate-950 uppercase flex items-center gap-2 border-b border-slate-200 pb-2">
                      <HelpCircle className="w-5 h-5 text-amber-600" />
                      Frequently Asked Questions about {service.title}
                    </h3>
                    <div className="space-y-3">
                      {service.faqList.map((faq, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 border border-slate-200">
                          <h4 className="font-bold text-sm text-slate-950 mb-1">{faq.q}</h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Right Sticky Inquiry Card (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Contact Desk Box */}
                <div className="bg-slate-900 text-white p-6 border-t-4 border-amber-500 shadow-md space-y-4 sticky top-28">
                  <div className="border-b border-slate-800 pb-3">
                    <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                      Direct Operations Lead
                    </div>
                    <div className="text-lg font-bold font-heading text-white">
                      {COMPANY_INFO.contactPerson}
                    </div>
                    <div className="text-xs text-slate-400">
                      {COMPANY_INFO.role}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Need instant rates, flight space, or customs clearance for <strong>{service.title}</strong>? Contact our Mumbai airport desk directly.
                  </p>

                  <div className="space-y-2 pt-2">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(`Hello Mayur, I need a rate quote for ${service.title}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase py-3 px-4 flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp {COMPANY_INFO.phone}</span>
                    </a>

                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase py-3 px-4 flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call {COMPANY_INFO.phone}</span>
                    </a>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <div className="flex items-center gap-1 text-slate-300 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>Sahar Village, Andheri East, Mumbai 400099</span>
                    </div>
                    <div>★ Minutes from Mumbai Air Cargo Complex</div>
                    <div className="text-emerald-400 font-semibold">★ 24/7 Operations Coverage</div>
                  </div>

                  {/* Related Services */}
                  <div className="pt-4 border-t border-slate-800">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                      Other Logistics Services:
                    </div>
                    <div className="space-y-1.5">
                      {otherServices.map((other) => (
                        <Link
                          key={other.id}
                          href={`/services/${other.slug}`}
                          className="block text-xs text-slate-300 hover:text-amber-400 transition-colors truncate"
                        >
                          → {other.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
