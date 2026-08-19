// Global TypeScript Type Definitions for DGR Global Logistics

export interface Address {
  line1: string;
  line2: string;
  line3: string;
  city: string;
  pincode: string;
  landmark: string;
  state: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  subTagline: string;
  contactPerson: string;
  role: string;
  phone: string;
  displayPhone: string;
  whatsappPhone: string;
  email: string;
  address: Address;
  operatingHours: string;
  coverage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  image: string;
  description: string;
  features: string[];
}

export interface HazardousClass {
  class: string;
  name: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface HubItem {
  title: string;
  location: string;
  distance: string;
  desc: string;
  tag: string;
}
