// DGR Global Logistics TypeScript Data Models & Constants

export interface Address {
  line1: string;
  line2: string;
  line3: string;
  city: string;
  pincode: string;
  landmark: string;
  state: string;
}

export interface UNProduct {
  id: string;
  name: string;
  category: 'un-boxes' | 'hdpe-drums' | 'jerry-cans' | 'steel-drums' | 'labels-absorbents';
  itemCode?: string;
  price: number;
  priceDisplay: string;
  capacity: string;
  packingGroup: string;
  dimensions?: string;
  tareWeight?: string;
  material: string;
  image: string;
  galleryImages?: string[];
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  date: string;
  product: string;
  rating: number;
  comment?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  subTagline: string;
  contactPerson: string;
  role: string;
  proprietor: string;
  gstNo: string;
  iecCode: string;
  establishedYear: string;
  annualTurnover: string;
  phone: string;
  displayPhone: string;
  whatsappPhone: string;
  email: string;
  address: Address;
  operatingHours: string;
  coverage: string;
}

export interface ServiceDetailFAQ {
  q: string;
  a: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  image: string;
  description: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  fullDescription: string[];
  benefits: string[];
  specifications: string[];
  faqList: ServiceDetailFAQ[];
}

export interface HazardousClass {
  class: string;
  name: string;
  desc: string;
}

export interface HubItem {
  slug: string;
  title: string;
  location: string;
  distance: string;
  desc: string;
  tag: string;
  metaTitle: string;
  metaDescription: string;
  details: string[];
  highlights: string[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "DGR GLOBAL LOGISTICS",
  tagline: "GET WHAT YOU WANT, JUST ON TIME",
  subTagline: "International Freight Forwarding, Custom Clearance & Certified Hazardous Material Packaging",
  contactPerson: "Mayur Kadam",
  role: "Manager - Operations and Sales",
  proprietor: "Nitesh Kondalkar",
  gstNo: "27XXXXXXXXXXXXX",
  iecCode: "03XXXXXXXX",
  establishedYear: "2011",
  annualTurnover: "₹1.5 - 5 Crore",
  phone: "9028345261",
  displayPhone: "+91 90283 45261",
  whatsappPhone: "919028345261",
  email: "dgr.export.logistics@gmail.com",
  address: {
    line1: "Shop No. 103, CTS No. 365 36 4, Arahie Cabral Brothers Chawl",
    line2: "Church Pakhadi Main Road, Sahar Village",
    line3: "Sahar Cargo Complex, Andheri East",
    city: "Mumbai",
    pincode: "400099",
    landmark: "Near Khushi Wine Shop, Sahar Cargo Complex",
    state: "Maharashtra, India"
  },
  operatingHours: "24/7 Operations & Air Cargo Desk",
  coverage: "Worldwide Air & Ocean Networks across 180+ Countries"
};

export const UN_PRODUCTS: UNProduct[] = [
  // UN 4GV Boxes
  {
    id: "un-4gv-x3",
    name: "UN Mark 4GV X3 Fibreboard Box",
    category: "un-boxes",
    itemCode: "X3",
    price: 130,
    priceDisplay: "₹130 / Piece",
    capacity: "3 Kg",
    packingGroup: "I, II & III (PG I, II, III)",
    dimensions: "19 × 19 × 31 cm",
    tareWeight: "450 gm",
    material: "Heavy-Duty Fibreboard",
    image: "/images/un-4gv-box-closeup.jpg",
    galleryImages: [
      "/images/un-4gv-box-closeup.jpg",
      "/images/un-boxes-drums.jpg",
      "/images/hazmat-labels-packing.jpg"
    ],
    popular: true
  },
  {
    id: "un-4gv-x6",
    name: "UN Mark 4GV X6 Fibreboard Box",
    category: "un-boxes",
    itemCode: "X6",
    price: 150,
    priceDisplay: "₹150 / Piece",
    capacity: "6 Kg",
    packingGroup: "I, II & III",
    dimensions: "23 × 23 × 37 cm",
    tareWeight: "650 gm",
    material: "Heavy-Duty Fibreboard",
    image: "/images/un-4gv-box-closeup.jpg",
    galleryImages: [
      "/images/un-4gv-box-closeup.jpg",
      "/images/un-boxes-drums.jpg"
    ]
  },
  {
    id: "un-4gv-x9",
    name: "UN Mark 4GV X9 Fibreboard Box",
    category: "un-boxes",
    itemCode: "X9",
    price: 200,
    priceDisplay: "₹200 / Piece",
    capacity: "9 Kg",
    packingGroup: "I, II & III",
    dimensions: "28 × 28 × 38 cm",
    tareWeight: "900 gm",
    material: "Heavy-Duty Fibreboard",
    image: "/images/un-4gv-box-closeup.jpg",
    galleryImages: [
      "/images/un-4gv-box-closeup.jpg",
      "/images/un-boxes-drums.jpg"
    ],
    popular: true
  },
  {
    id: "un-4gv-x22",
    name: "UN Mark 4GV X22 Fibreboard Box",
    category: "un-boxes",
    itemCode: "X22",
    price: 300,
    priceDisplay: "₹300 / Piece",
    capacity: "22 Kg",
    packingGroup: "I, II & III",
    dimensions: "37 × 37 × 43 cm",
    tareWeight: "1.5 Kg",
    material: "Heavy-Duty Fibreboard",
    image: "/images/un-4gv-box-closeup.jpg",
    galleryImages: [
      "/images/un-4gv-box-closeup.jpg",
      "/images/un-boxes-drums.jpg"
    ]
  },
  {
    id: "un-4gv-x31",
    name: "UN Mark 4GV X31 Fibreboard Box",
    category: "un-boxes",
    itemCode: "X31",
    price: 350,
    priceDisplay: "₹350 / Piece",
    capacity: "31 Kg",
    packingGroup: "I, II & III",
    dimensions: "47 × 47 × 43 cm",
    tareWeight: "2.0 Kg",
    material: "Heavy-Duty Fibreboard",
    image: "/images/un-4gv-box-closeup.jpg",
    galleryImages: [
      "/images/un-4gv-box-closeup.jpg",
      "/images/un-boxes-drums.jpg",
      "/images/hazmat-labels-packing.jpg"
    ],
    popular: true
  },
  {
    id: "un-4gv-x55",
    name: "UN Mark 4GV X55 Fibreboard Box",
    category: "un-boxes",
    itemCode: "X55",
    price: 450,
    priceDisplay: "₹450 / Piece",
    capacity: "55 Kg",
    packingGroup: "I, II & III",
    dimensions: "50 × 50 × 55 cm",
    tareWeight: "2.5 Kg",
    material: "Heavy-Duty Fibreboard",
    image: "/images/un-4gv-box-closeup.jpg",
    galleryImages: [
      "/images/un-4gv-box-closeup.jpg",
      "/images/un-boxes-drums.jpg"
    ],
    popular: true
  },

  // HDPE Drums
  {
    id: "hdpe-drum-30l",
    name: "UN Approved 30L Open Top HDPE Drum",
    category: "hdpe-drums",
    price: 360,
    priceDisplay: "₹360 / Piece",
    capacity: "30 Litres",
    packingGroup: "I, II & III",
    dimensions: "Height: 530mm | Width: 330mm",
    material: "Virgin Grade HDPE",
    image: "/images/hdpe-open-top-drum.jpg",
    galleryImages: [
      "/images/hdpe-open-top-drum.jpg",
      "/images/un-boxes-drums.jpg"
    ]
  },
  {
    id: "hdpe-drum-35l",
    name: "UN Approved 35L Open Top HDPE Drum",
    category: "hdpe-drums",
    price: 430,
    priceDisplay: "₹430 / Piece",
    capacity: "35 Litres",
    packingGroup: "I, II & III",
    dimensions: "32 × 32 × 54 cm | Tare: 2.5 Kg",
    material: "Virgin Grade HDPE",
    image: "/images/hdpe-open-top-drum.jpg",
    galleryImages: [
      "/images/hdpe-open-top-drum.jpg",
      "/images/un-boxes-drums.jpg"
    ],
    popular: true
  },
  {
    id: "hdpe-drum-60l",
    name: "UN Approved 60L Open Top HDPE Drum",
    category: "hdpe-drums",
    price: 600,
    priceDisplay: "₹600 / Piece",
    capacity: "60 Litres",
    packingGroup: "I, II & III",
    dimensions: "Height: 680mm | Width: 370mm",
    material: "Virgin Grade HDPE",
    image: "/images/hdpe-open-top-drum.jpg",
    galleryImages: [
      "/images/hdpe-open-top-drum.jpg",
      "/images/un-boxes-drums.jpg"
    ]
  },

  // Jerry Cans
  {
    id: "jerrycan-35l-un",
    name: "UN Approved 35L HDPE Jerry Can (3H1/X35)",
    category: "jerry-cans",
    price: 430,
    priceDisplay: "₹430 / Piece",
    capacity: "35 Litres",
    packingGroup: "II & III",
    dimensions: "30 × 28 × 46 cm | Tare: 2.5 Kg",
    material: "High Density Polyethylene (HDPE)",
    image: "/images/hdpe-jerry-can-un.jpg",
    galleryImages: [
      "/images/hdpe-jerry-can-un.jpg",
      "/images/un-boxes-drums.jpg"
    ],
    popular: true
  },
  {
    id: "jerrycan-50l-un",
    name: "UN Approved 50L Heavy-Duty HDPE Jerry Can",
    category: "jerry-cans",
    price: 600,
    priceDisplay: "₹600 / Piece",
    capacity: "50 Litres",
    packingGroup: "II & III",
    material: "High Density Polyethylene (HDPE)",
    image: "/images/hdpe-jerry-can-un.jpg",
    galleryImages: [
      "/images/hdpe-jerry-can-un.jpg",
      "/images/un-boxes-drums.jpg"
    ]
  },

  // Steel & Special Drums
  {
    id: "drum-220l-pg2",
    name: "UN Marking Drum PG II (Chemical Storage)",
    category: "steel-drums",
    price: 500,
    priceDisplay: "₹500 / Piece",
    capacity: "220 Litres",
    packingGroup: "PG II (Medium Hazard)",
    material: "Industrial Plastic / Chemical Grade",
    image: "/images/un-boxes-drums.jpg",
    galleryImages: [
      "/images/un-boxes-drums.jpg",
      "/images/hdpe-open-top-drum.jpg"
    ]
  },
  {
    id: "ms-drum-30l",
    name: "UN Approved Mild Steel (MS) Drum",
    category: "steel-drums",
    price: 400,
    priceDisplay: "₹400 / Piece",
    capacity: "10-30 Litres",
    packingGroup: "I, II & III",
    material: "Mild Steel (MS / 1A1)",
    image: "/images/un-boxes-drums.jpg",
    galleryImages: [
      "/images/un-boxes-drums.jpg",
      "/images/hdpe-open-top-drum.jpg"
    ]
  },

  // Labels & Absorbents
  {
    id: "hazmat-labels-all",
    name: "Hazardous Material Diamond Labels (Class 1-9)",
    category: "labels-absorbents",
    price: 5,
    priceDisplay: "₹5 / Piece",
    capacity: "Class 1 to 9 (Flammable, Toxic, Corrosive)",
    packingGroup: "IATA / IMDG Compliant",
    material: "Self-Adhesive Weatherproof PVC",
    image: "/images/hazmat-labels-packing.jpg",
    galleryImages: [
      "/images/hazmat-labels-packing.jpg",
      "/images/un-4gv-box-closeup.jpg"
    ],
    popular: true
  },
  {
    id: "chemical-absorbent-powder",
    name: "Chemical Absorbent Socks & Bio-Tech Powder",
    category: "labels-absorbents",
    price: 850,
    priceDisplay: "Ask for Price (20-25 Kg Bag)",
    capacity: "20 Kg / 25 Kg Bags",
    packingGroup: "Spill Response / Hazmat",
    material: "Bio-Tech Industrial Powder",
    image: "/images/hazmat-labels-packing.jpg",
    galleryImages: [
      "/images/hazmat-labels-packing.jpg",
      "/images/hero-cargo-warehouse.jpg"
    ]
  }
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Mahesh Laxman Makwana",
    location: "Mumbai, Maharashtra",
    date: "30-July-2024",
    product: "UN Approved Packaging Boxes (4GV X31)",
    rating: 5,
    comment: "Prompt delivery of UN certified 4GV boxes for our chemical air export from Mumbai airport. Quality is top-notch."
  },
  {
    id: "rev-2",
    name: "Mehul Solanki",
    location: "Mumbai, Maharashtra",
    date: "05-October-2025",
    product: "UN Approved 35L HDPE Packaging Drum",
    rating: 5,
    comment: "Excellent support by Mayur Kadam for our dangerous cargo clearance and drum certification. Highly recommended."
  },
  {
    id: "rev-3",
    name: "SQUARE S INTERNATIONAL",
    location: "Kolkata, West Bengal",
    date: "20-October-2022",
    product: "UN Approved Packaging & Freight Clearance",
    rating: 5,
    comment: "Reliable logistics partner with fast customs response and genuine UN certificates provided with each batch."
  }
];

export const FAQ_ITEMS = [
  {
    q: "What makes DGR Global Logistics the top freight forwarder in Mumbai?",
    a: "Our ground operations office is situated in Sahar Village, Andheri East (adjacent to Mumbai CSMIA Air Cargo Complex). This strategic location enables us to offer faster flight space allocation, immediate airport handovers, late flight cut-off clearance, and 24/7 on-site dangerous goods handling led by Operations Manager Mayur Kadam."
  },
  {
    q: "Do you supply UN approved 4G/4GV boxes (X3, X6, X9, X22, X31, X55) with test certificates in Mumbai?",
    a: "Yes. We maintain extensive ready inventory of UN certified 4GV fiberboard boxes from X3 (3 Kg @ ₹130) to X55 (55 Kg @ ₹450), UN rated tight-head steel drums, and HDPE plastic jerricans (1H1/3H1) tested for Packing Groups I, II, and III (X, Y, Z ratings), with genuine test certificates provided."
  },
  {
    q: "Which areas in Mumbai and Maharashtra do you cover for cargo pickup?",
    a: "We offer same-day doorstep pickup across all areas of Mumbai (Andheri, Sahar, BKC, Bandra, Kurla), Navi Mumbai, Thane, JNPT / Nhava Sheva, Taloja MIDC, Turbhe, Tarapur, Chakan / Pune industrial corridors, and pan-India manufacturing hubs."
  },
  {
    q: "What Dangerous Goods (DG) classes and labels do you provide?",
    a: "We supply certified weather-resistant IATA/IMDG warning diamond labels for all Class 1 to 9 hazardous materials (starting at ₹5/piece), including Class 3 (Flammable Liquids), Class 8 (Corrosives), Class 9 (Lithium Batteries & Dry Ice), Limited Quantity (LQ) marks, and Cargo Aircraft Only (CAO) placards."
  },
  {
    q: "How can I get an immediate rate quote for Air, Sea, or Packaging supplies?",
    a: "You can reach out directly to Mayur Kadam (Manager - Operations & Sales) via Phone or WhatsApp at +91 9028345261 or email dgr.export.logistics@gmail.com for an instant quotation within 15 minutes."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "air-freight",
    slug: "air-freight-forwarding-mumbai",
    title: "Air Freight Forwarding",
    tagline: "Expedited Worldwide Air Cargo from Mumbai (BOM)",
    icon: "Plane",
    image: "/images/mumbai-airport-cargo.jpg",
    description: "Fast airport-to-airport and door-to-door air freight services with guaranteed space allocation and rapid customs handling at Mumbai Sahar Air Cargo Terminal.",
    features: [
      "Priority and deferred air freight",
      "Door-to-door worldwide delivery",
      "Real-time flight status tracking",
      "Perishable and high-value cargo handling"
    ],
    metaTitle: "Air Freight Forwarding in Mumbai | Sahar Air Cargo Terminal Agent",
    metaDescription: "Top Air Freight Forwarder in Mumbai (BOM). Guaranteed airline space allocation, urgent flight cut-off clearance, and 24/7 Sahar Cargo Terminal operations by Mayur Kadam.",
    keywords: [
      "Air Freight Forwarder Mumbai",
      "Air Cargo Agent Sahar Mumbai",
      "Expedited Air Freight India",
      "Mumbai Airport Air Cargo Booking",
      "International Air Freight Forwarding Mumbai"
    ],
    fullDescription: [
      "DGR Global Logistics is a premier air freight forwarder headquartered in Sahar Village, Andheri East, right next to Chhatrapati Shivaji Maharaj International Airport (CSMIA) Air Cargo Complex.",
      "We provide scheduled consolidated flights, priority express air cargo, and dedicated charter solutions to over 180 countries. Our strategic ground proximity gives shippers maximum cut-off flexibility and immediate tarmac handover.",
      "Led by Operations Lead Mayur Kadam, our air desk operates 24/7 to manage flight space allotments, airway bill (AWB) generation, customs assessment, and secure final-mile delivery across North America, Europe, Middle East, and Asia-Pacific."
    ],
    benefits: [
      "Direct carrier contracts with top international airlines for premier air freight rates",
      "Immediate handover at Sahar Air Cargo Complex with 24/7 desk presence",
      "Specialized handling for Temperature-Sensitive (Pharma), High-Value, and Dangerous Goods cargo",
      "Seamless door-to-door global tracking from pickup in Maharashtra to overseas consignee"
    ],
    specifications: [
      "Transit Times: Express (24-48 Hours) | Standard (3-5 Days) | Deferred (5-7 Days)",
      "Hub: Mumbai CSMIA (BOM) International Air Cargo Complex",
      "Documentation: Master Airway Bill (MAWB), House Airway Bill (HAWB), Cargo Manifest",
      "Aircraft Coverage: Passenger Belly Cargo, Narrowbody/Widebody Freighters, Full Cargo Charters"
    ],
    faqList: [
      {
        q: "What is the cut-off time for urgent air cargo at Mumbai Airport?",
        a: "Because our operations desk is located in Sahar Village (5 minutes from the terminal gates), we can accommodate late cargo handovers up to 4-6 hours prior to flight departure depending on the airline."
      },
      {
        q: "Do you handle hazardous and temperature-controlled air freight?",
        a: "Yes. We specialize in IATA DGR compliant hazardous air cargo, dry ice replenishment (-78.5°C), and pharma cold chain (+2°C to +8°C and +15°C to +25°C)."
      }
    ]
  },
  {
    id: "import-export-console",
    slug: "ocean-console-air-sea-mumbai",
    title: "Import & Console (Air & Sea)",
    tagline: "LCL & FCL Ocean & Air Consolidation Worldwide",
    icon: "Container",
    image: "/images/ocean-freight-jnpt.jpg",
    description: "Cost-effective ocean and air consolidation solutions for Less than Container Load (LCL) and Full Container Load (FCL) shipments across major global sea trade lanes.",
    features: [
      "Regular scheduled consolidation boxes",
      "FCL and LCL ocean freight management",
      "Competitive container freight rates",
      "Nhava Sheva (JNPT) & Mumbai Port liaison"
    ],
    metaTitle: "Import & Export Console (Air & Sea) Mumbai | LCL & FCL Forwarding JNPT",
    metaDescription: "Reliable LCL & FCL ocean consolidation services at Nhava Sheva (JNPT) & Mumbai Port. Direct box departures, buyer console, and competitive sea freight rates.",
    keywords: [
      "LCL Consolidation Mumbai",
      "FCL Ocean Freight Forwarder JNPT",
      "Import Export Console Mumbai",
      "Sea Freight Forwarder Maharashtra",
      "Nhava Sheva Container Consolidation"
    ],
    fullDescription: [
      "Our Import & Export Console division specializes in combining smaller cargo volumes (LCL) into dedicated shipping containers to optimize shipping costs and transit reliability.",
      "We operate weekly direct console box departures from Mumbai Port and Nhava Sheva (JNPT) to major worldwide destinations including Jebel Ali (Dubai), Singapore, Rotterdam, Hamburg, Felixstowe, and New York.",
      "Whether you are shipping full 20ft/40ft containers (FCL) or palletized LCL cargo, we provide complete container stuffing, drayage trucking, customs documentation, and overseas destuffing."
    ],
    benefits: [
      "Weekly direct scheduled LCL boxes reducing transshipment delays and risk of damage",
      "Competitive ocean freight contracts with major shipping lines (Maersk, MSC, CMA CGM, Hapag-Lloyd)",
      "Multi-supplier Buyer's Consolidation hubs across Mumbai and Navi Mumbai CFS stations",
      "Complete sea-air multimodal solutions balancing speed and cost"
    ],
    specifications: [
      "Container Sizes: 20ft Standard, 40ft Standard, 40ft High Cube, Reefer Containers, Open Top",
      "Ports Served: Nhava Sheva (JNPT), Mumbai Port Trust (MbPT), Mundra, Hazira",
      "Incoterms: FOB, CIF, CFR, EXW, DDP, DAP",
      "Documentation: Bill of Lading (B/L), Sea Waybill, Packing List, Certificate of Origin"
    ],
    faqList: [
      {
        q: "What is the difference between LCL and FCL shipping?",
        a: "FCL (Full Container Load) means you rent the entire 20ft or 40ft container for your goods. LCL (Less than Container Load) allows you to share container space with other exporters, paying only for the volume (CBM) or weight you use."
      }
    ]
  },
  {
    id: "custom-clearance",
    slug: "custom-clearance-mumbai-cha",
    title: "Custom Clearance",
    tagline: "Fast & Error-Free Custom House Agent (CHA) Services",
    icon: "FileCheck2",
    image: "/images/customs-clearance-cha.jpg",
    description: "Expert Custom House Agent (CHA) clearance services at Mumbai Air Cargo Complex, seaport terminals, and ICDs with complete duty and HS Code compliance.",
    features: [
      "Import & Export Bill of Entry filing",
      "Duty computation and HS Code advisory",
      "Port documentation and inspection support",
      "Fast 24-hour clearance capability"
    ],
    metaTitle: "Custom Clearance Agent Mumbai (CHA) | Sahar Air Cargo & JNPT Clearance",
    metaDescription: "Authorized Custom House Agent (CHA) in Mumbai. Rapid Bill of Entry & Shipping Bill filing, tariff advisory, and fast-track customs clearance at Sahar Airport and JNPT.",
    keywords: [
      "Custom Clearance Agent Mumbai",
      "CHA Agent Sahar Air Cargo",
      "Custom House Agent Mumbai",
      "JNPT Nhava Sheva Customs Clearance",
      "Import Export Custom Clearance India"
    ],
    fullDescription: [
      "Navigating Indian Customs regulations requires precise documentation, accurate Harmonized System (HS) code classification, and seasoned port liaisons.",
      "DGR Global Logistics provides end-to-end CHA services at Mumbai Air Cargo Complex (CSMIA), Nhava Sheva (JNPT), Mumbai Port, and Inland Container Depots (ICDs).",
      "We handle Bill of Entry (BE) filings, Shipping Bills, duty draw-backs, EPCG/Advance Authorization schemes, and statutory regulatory clearances (ADC, FSSAI, CDSCO, Plant Quarantine, WPC)."
    ],
    benefits: [
      "Fast 24-hour clearance turnarounds minimizing port demurrage and airport detention charges",
      "Expert HS Code classification and customs duty optimization guidance",
      "Specialized clearance protocols for Dangerous Goods (DG), chemicals, and pharmaceutical APIs",
      "Real-time status updates from online ICEGATE customs portal"
    ],
    specifications: [
      "Customs Ports: Mumbai Air Cargo Complex (INBOM4), JNPT (INNSA1), Mumbai Port (INBOM1)",
      "Clearance Modes: Home Consumption, In-Bond Warehouse, Ex-Bond, Re-Export, EPCG",
      "Filing: Online ICEGATE electronic filing with digital signature compliance",
      "Liaison: Customs Officers, Port Health, Drug Controller (ADC), Wildlife & Quarantine"
    ],
    faqList: [
      {
        q: "What documents are required for import custom clearance in Mumbai?",
        a: "Standard import documents include: Commercial Invoice, Packing List, Bill of Lading (BL) / Airway Bill (AWB), Purchase Order, Certificate of Origin, and MSDS (for chemicals/hazardous cargo)."
      }
    ]
  },
  {
    id: "warehouse-distribution",
    slug: "warehouse-distribution-mumbai",
    title: "Warehouse & Distribution",
    tagline: "Secure Storage, Inventory & Pan-India Distribution",
    icon: "Warehouse",
    image: "/images/warehouse-logistics-mumbai.jpg",
    description: "Safe and strategically located warehousing facilities offering inventory management, palletization, pick-and-pack, and nationwide last-mile transport.",
    features: [
      "Short & long term secure storage",
      "Pick, pack, labeling & palletization",
      "Segregated dangerous goods storage area",
      "Pan-India distribution transport"
    ],
    metaTitle: "Warehouse & Distribution Services Mumbai | Storage Near Sahar Airport",
    metaDescription: "Secure warehousing, pick & pack, palletization, and dangerous goods storage near Mumbai Airport and Nhava Sheva. Pan-India distribution fleet.",
    keywords: [
      "Warehousing Mumbai",
      "Logistics Storage Near Mumbai Airport",
      "Dangerous Goods Warehouse Mumbai",
      "Distribution Services Maharashtra",
      "Palletization and Pick Pack Mumbai"
    ],
    fullDescription: [
      "Our warehousing facilities are strategically situated close to Mumbai International Airport and the expressway corridors connecting Nhava Sheva and the industrial belts of Maharashtra.",
      "We offer short-term staging, bonded storage, palletization, shrink-wrapping, barcoding, and order fulfillment tailored for manufacturing and trading enterprises.",
      "Our dedicated hazardous storage section provides fire-rated containment and ventilation compliant with explosive and chemical storage guidelines."
    ],
    benefits: [
      "24/7 CCTV surveillance, fire-suppression systems, and security personnel",
      "Dedicated dangerous goods segregated zones with spill containment",
      "Fast cross-docking to eliminate storage fees for transit consignments",
      "Pan-India transport network for prompt factory-to-port and port-to-door deliveries"
    ],
    specifications: [
      "Facilities: Ambient, Temperature-Controlled, and Hazardous Storage Segregations",
      "Material Handling: Forklifts, Pallet Jacks, Racking, Heavy Crane Staging",
      "Value Added: Repacking, Labelling, Kitting, Quality Inspection, Palletizing",
      "Distribution: Pan-India Dedicated & Consolidated Fleet"
    ],
    faqList: [
      {
        q: "Can I store chemical goods in your Mumbai warehouse?",
        a: "Yes, we have designated hazardous material storage zones with proper safety segregation and compliance with Maharashtra Pollution Control Board (MPCB) and municipal regulations."
      }
    ]
  },
  {
    id: "hazardous-labels",
    slug: "hazardous-labels-supplier-mumbai",
    title: "Supplier of Hazardous Labels",
    tagline: "IATA, IMO & ADR Certified Class 1 to 9 Warning Labels",
    icon: "ShieldAlert",
    image: "/images/hazmat-labels-packing.jpg",
    description: "Supplying top quality, weather-resistant Class 1 to 9 hazard diamond labels, handling marks, lithium battery marks, and container placards adhering to ICAO/IATA norms.",
    features: [
      "Class 1 to 9 Hazard Diamond labels",
      "Lithium Battery Warning & Handling marks",
      "Limited Quantity (LQ) & CAO marks",
      "High-tack weatherproof adhesive vinyl"
    ],
    metaTitle: "Hazardous Labels Supplier Mumbai | IATA & IMO Dangerous Goods Labels",
    metaDescription: "Certified supplier of Class 1-9 IATA Hazard Diamond labels, Lithium Battery marks, and IMO vehicle placards in Mumbai. In stock with same-day delivery.",
    keywords: [
      "Hazardous Labels Supplier Mumbai",
      "IATA Dangerous Goods Labels Mumbai",
      "Class 3 Flammable Liquid Label",
      "Lithium Battery Warning Labels",
      "IMDG Container Placards Supplier India"
    ],
    fullDescription: [
      "Incorrect or poor quality hazard labeling is the #1 reason dangerous goods shipments get rejected at air cargo acceptance desks worldwide.",
      "DGR Global Logistics manufactures and supplies authentic, high-tack, UV-resistant hazard diamond labels strictly compliant with IATA Dangerous Goods Regulations and IMDG Code specifications.",
      "We maintain ready inventory in Mumbai for all 9 hazard classes, handling marks (Cargo Aircraft Only, Orientation Arrows, Magnetized Material), and new Lithium Battery Class 9A warning labels."
    ],
    benefits: [
      "100% compliant with IATA Section 7 and IMO Chapter 5.2 dimensional & color specifications",
      "Weather-proof, scratch-resistant vinyl and gloss paper with permanent marine-grade adhesive",
      "Available in standard 100mm x 100mm packages and 250mm x 250mm vehicle/container placards",
      "Same-day dispatch across Mumbai, Navi Mumbai, Thane, and overnight pan-India delivery"
    ],
    specifications: [
      "Dimensions: Standard 100mm x 100mm (Package Labels) | 250mm x 250mm (Placards)",
      "Material: Heavy Duty Vinyl, Semi-Gloss Paper, Polypropylene Film",
      "Adhesive: High-Tack Permanent Acrylic Adhesive (BS 5609 Marine Test Compliant)",
      "Classes Covered: Class 1 (Explosives) through Class 9 (Miscellaneous / Lithium Batteries)"
    ],
    faqList: [
      {
        q: "What size are standard IATA dangerous goods labels?",
        a: "Standard package hazard labels must be at least 100mm x 100mm (4 inches x 4 inches) with a solid line 5mm inside the edge. For shipping containers and trucks, 250mm x 250mm placards are required."
      }
    ]
  },
  {
    id: "international-courier",
    slug: "international-courier-services-mumbai",
    title: "International Courier",
    tagline: "Worldwide Express Doorstep Parcel & Sample Delivery",
    icon: "Globe",
    image: "/images/express-courier-mumbai.jpg",
    description: "Global express courier solutions for urgent business documents, commercial samples, gifts, and packages with end-to-end milestone tracking.",
    features: [
      "Express 2 to 4 days worldwide transit",
      "Free doorstep pickup in Mumbai",
      "Online GPS milestone tracking",
      "Customs duty pre-clearance support"
    ],
    metaTitle: "International Courier Services in Mumbai | Express Worldwide Delivery",
    metaDescription: "Fast international courier service in Andheri East, Mumbai. Worldwide express delivery for commercial samples, export documents, and parcels with GPS tracking.",
    keywords: [
      "International Courier Services Mumbai",
      "Express Courier Andheri East",
      "Document Courier USA UK Dubai",
      "Sample Export Courier Mumbai",
      "Worldwide Parcel Delivery Maharashtra"
    ],
    fullDescription: [
      "When time is of the essence for critical export documents, tenders, contracts, or commercial export samples, our International Courier service delivers reliability and speed.",
      "Operating from Andheri East, Mumbai, we provide seamless door-to-door delivery to over 220 countries through Tier-1 global courier partner networks.",
      "We assist with commercial invoice preparation, customs value declarations, and duty pre-clearance so your parcel clears overseas customs without delays."
    ],
    benefits: [
      "Free doorstep pickup anywhere in Mumbai, Navi Mumbai, and Thane",
      "Fast 2-4 business day delivery to USA, UK, UAE, Europe, Singapore, and Australia",
      "Online real-time tracking with SMS and email delivery confirmations",
      "Discounted corporate rates for regular exporters and manufacturing businesses"
    ],
    specifications: [
      "Services: Express Document, Commercial Sample Express, Non-Doc Parcel",
      "Weight Brackets: 0.5 KG up to Heavy Cargo Courier 100+ KG",
      "Packaging: Free courier flyers, bubble mailers, and carton boxes provided",
      "Transit Times: USA/UK (2-3 Days) | Middle East (1-2 Days) | Europe (2-4 Days) | Rest of World (3-5 Days)"
    ],
    faqList: [
      {
        q: "Can you send commercial chemical samples via international courier?",
        a: "Yes! As dangerous goods specialists, we can prepare, classify, package, and courier commercial chemical and biological samples internationally in full compliance."
      }
    ]
  },
  {
    id: "un-drums-boxes",
    slug: "un-approved-drums-boxes-mumbai",
    title: "Supplier of UN Approved Drums & Boxes",
    tagline: "Certified Heavy-Duty Packaging for Dangerous Cargo",
    icon: "Box",
    image: "/images/un-boxes-drums.jpg",
    description: "Certified supplier of genuine UN tested 4G / 4GV fiberboard boxes, steel drums (1A1), and HDPE plastic jerricans (1H1/3H1) rated for Packing Groups I, II, and III.",
    features: [
      "UN 4G / 4GV Certified Fiberboard Boxes",
      "UN Steel & HDPE Plastic Drums (1A1 / 1H1)",
      "Tested for Packing Groups X, Y, and Z",
      "Hydrostatic pressure and drop test certified"
    ],
    metaTitle: "Supplier of UN Approved Drums & 4G/4GV Boxes in Mumbai, India",
    metaDescription: "Authorized supplier of UN certified 4G & 4GV boxes, UN steel drums (1A1), and HDPE jerricans in Mumbai. Tested for Packing Groups I, II & III with test certificates.",
    keywords: [
      "UN Approved Boxes Supplier Mumbai",
      "UN 4GV Certified Box Maharashtra",
      "UN Steel Drums Supplier Mumbai",
      "UN HDPE Jerricans Chemical Packaging",
      "Dangerous Goods Certified Packaging India"
    ],
    fullDescription: [
      "Shipping hazardous substances internationally by air (IATA) or sea (IMDG) requires certified UN packaging that has passed rigorous drop, stack, and hydrostatic pressure tests.",
      "DGR Global Logistics is Mumbai's premier distributor of UN certified 4G (standard outer) and 4GV (variation outer) fiberboard boxes, tight-head steel drums (1A1), open-top steel drums (1A2), and high-density polyethylene (HDPE) jerricans (1H1/3H1).",
      "All packaging comes with legitimate UN specification marks and test compliance certificates issued by authorized testing institutes (such as IIP - Indian Institute of Packaging)."
    ],
    benefits: [
      "Ready stock in Mumbai across all popular sizes (5L, 10L, 20L, 25L, 200L drums and small to extra-large 4GV boxes)",
      "Certified for Packing Group I (X rating - highest hazard), Group II (Y), and Group III (Z)",
      "Complete kits available including inner plastic bottles, vermiculite absorbent, leak-proof tape, and hazard labels",
      "Guaranteed acceptance by all global airlines and shipping lines"
    ],
    specifications: [
      "Box Types: UN 4G (Specific inners), UN 4GV (Universal inners tested with fragile glass/plastic)",
      "Drum Types: UN 1A1 (Tight Head Steel), UN 1A2 (Open Top Steel), UN 1H1 (Plastic Tight Head)",
      "Ratings: UN 4GV/X15/S/... | UN 1A1/X1.8/300/... | UN 3H1/Y1.9/200/...",
      "Test Standards: Drop Test (1.8m), Hydraulic Pressure Test (300 kPa), Stacking Test (3m height for 24h)"
    ],
    faqList: [
      {
        q: "What is the difference between UN 4G and UN 4GV boxes?",
        a: "A UN 4G box is tested and certified ONLY with the specific inner containers (bottles/cans) used during testing. A UN 4GV box is certified for universal inners (any glass, metal, or plastic bottle) when packed with adequate absorbent material (vermiculite)."
      },
      {
        q: "Do you supply test certificates with the UN boxes?",
        a: "Yes! Every batch of UN approved boxes and drums we supply comes with an official certificate verifying its UN specification marking and validity."
      }
    ]
  },
  {
    id: "hazmat-packaging",
    slug: "hazardous-material-packaging-mumbai",
    title: "Hazardous Material Packaging",
    tagline: "Certified DG Packing, Dry Ice & Dangerous Goods Handling",
    icon: "Flame",
    image: "/images/hero-cargo-warehouse.jpg",
    description: "Certified dangerous goods packaging performed by trained professionals. Handling flammable liquids, chemicals, lithium batteries, and dry ice conditioned pharma goods.",
    features: [
      "Dry Ice (-78.5°C) thermal conditioning",
      "Lithium Ion / Metal battery packing",
      "Chemicals & flammable liquids safety pack",
      "Overpack prep and absorbent cushioning"
    ],
    metaTitle: "Hazardous Material Packaging Services Mumbai | DG Packing & Dry Ice",
    metaDescription: "Certified Dangerous Goods (DG) packaging services in Mumbai. Dry ice replenishment, Lithium battery packaging (Section IA/IB/II), and chemical packing.",
    keywords: [
      "Hazardous Material Packaging Mumbai",
      "Dangerous Goods Packing Services",
      "Dry Ice Packaging Logistics Mumbai",
      "Lithium Battery Packing Mumbai Airport",
      "Chemical Export Packaging Maharashtra"
    ],
    fullDescription: [
      "Packing dangerous cargo is a specialized technical discipline requiring trained certified packers who understand chemical compatibility, absorbent volume calculations, and pressure venting.",
      "At DGR Global Logistics, our certified DG packaging team handles on-site and in-hub packaging for flammable liquids (Class 3), corrosives (Class 8), toxic substances (Class 6), and lithium batteries (Class 9).",
      "We also provide turnkey cold-chain conditioning with high-density Dry Ice (-78.5°C) and Phase Change Materials (PCM) for life-saving biological samples and active pharmaceutical ingredients (APIs)."
    ],
    benefits: [
      "Certified packaging executed in accordance with IATA DGR and IMDG Code packing instructions",
      "Dry Ice topping-up service at Mumbai Sahar terminal prior to flight departure",
      "Lithium Ion / Metal battery packaging compliance (UN3480, UN3481, UN3090, UN3091)",
      "Zero-defect guarantee against cargo damage, leakage, or carrier rejection"
    ],
    specifications: [
      "Thermal Range: Dry Ice (-78.5°C) | Gel Packs (+2°C to +8°C) | Ambient Controlled",
      "Packaging Materials: UN Fibreboard, Vermiculite, Secondary Pressure Bags (95 kPa), Polyethylene Liners",
      "Compliance: IATA DGR Packing Instructions (PI 650, PI 965-970, PI 350-370)",
      "Location: Sahar Hub Mumbai or On-Site Client Factory Packing"
    ],
    faqList: [
      {
        q: "Can you pack hazardous chemicals at our factory in Maharashtra?",
        a: "Yes. Our certified DG packing team can travel to your facility in Mumbai, Taloja, Pune, or Tarapur with all required UN boxes, absorbent material, and hazard labels to package and certify the consignment on site."
      }
    ]
  },
  {
    id: "consultancy-documentation",
    slug: "dangerous-goods-consultancy-documentation-mumbai",
    title: "Consultancy & Documentation",
    tagline: "Shipper's Declaration for DG & International Advisory",
    icon: "FileSpreadsheet",
    image: "/images/dg-documentation-desk.jpg",
    description: "End-to-end guidance on Dangerous Goods Regulations (DGR). Preparing Shipper’s Declaration (DGD), verifying MSDS/SDS sheets, and ensuring 100% airline acceptance.",
    features: [
      "Shipper's Declaration (DGD) preparation",
      "Material Safety Data Sheet (MSDS) review",
      "UN Number & Proper Shipping Name guidance",
      "Zero-rejection airline acceptance audit"
    ],
    metaTitle: "Dangerous Goods Consultancy & Documentation Mumbai | Shipper's Declaration",
    metaDescription: "Expert DGR Consultancy in Mumbai. IATA Dangerous Goods Declaration (DGD) preparation, MSDS audit, UN classification, and airline acceptance pre-checks.",
    keywords: [
      "Dangerous Goods Consultancy Mumbai",
      "Shippers Declaration for DG Preparation",
      "MSDS Audit Logistics Mumbai",
      "IATA DGR Documentation Agent India",
      "UN Classification Chemical Export"
    ],
    fullDescription: [
      "A single typo or mismatched UN number on a Shipper's Declaration for Dangerous Goods (DGD) can cause costly flight offloading, airline penalties, and missed delivery deadlines.",
      "DGR Global Logistics provides comprehensive regulatory advisory for exporters, chemical manufacturers, and logistics agents across India.",
      "We audit Material Safety Data Sheets (MSDS / SDS 16-section format), identify Proper Shipping Names (PSN), determine Packing Groups, and generate authorized IATA DGD documents ready for airline sign-off."
    ],
    benefits: [
      "Eliminate airline rejection fees and shipment groundings with pre-screened documentation",
      "Expert assistance in identifying whether cargo falls under Limited Quantity (LQ) or Excepted Quantity (EQ)",
      "24/7 documentation desk available for urgent night flight clearances at Mumbai Airport",
      "Guidance on country-specific and airline-specific operator variations (State & Operator Variations)"
    ],
    specifications: [
      "Forms: IATA Shipper's Declaration for Dangerous Goods (Red-Bordered Format)",
      "Audit Standards: ICAO Technical Instructions, IATA DGR (Latest Edition), IMDG Code",
      "Data Verified: UN Number, PSN, Class/Division, Packing Group, Quantity, Packing Instruction",
      "Turnaround: Instant 30-minute draft turnaround for standard chemical commodities"
    ],
    faqList: [
      {
        q: "What is a Shipper's Declaration for Dangerous Goods (DGD)?",
        a: "A DGD is a legal declaration signed by the shipper/agent stating that the dangerous cargo has been identified, classified, packaged, marked, and labeled in accordance with IATA Dangerous Goods Regulations."
      }
    ]
  }
];

export const HAZARDOUS_CLASSES: HazardousClass[] = [
  { class: "Class 1", name: "Explosives", desc: "Ammunition, flares, pyrotechnics" },
  { class: "Class 2", name: "Gases", desc: "Aerosols, compressed gases, refrigerants" },
  { class: "Class 3", name: "Flammable Liquids", desc: "Paints, solvents, alcohol, chemicals" },
  { class: "Class 4", name: "Flammable Solids", desc: "Matches, sulfur, self-reactive substances" },
  { class: "Class 5", name: "Oxidizing Substances", desc: "Peroxides, fertilizers, bleaching powder" },
  { class: "Class 6", name: "Toxic & Infectious", desc: "Pesticides, medical samples, viruses" },
  { class: "Class 7", name: "Radioactive Materials", desc: "Isotopes, medical density equipment" },
  { class: "Class 8", name: "Corrosives", desc: "Acids, caustic soda, batteries" },
  { class: "Class 9", name: "Miscellaneous DG", desc: "Lithium batteries, dry ice, hazardous goods" }
];
