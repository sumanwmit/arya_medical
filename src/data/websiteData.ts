export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  iconName: string;
  benefits: string[];
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'equipment' | 'products';
  imageUrl: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  location: string;
  text: string;
  tag: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  readTime: string;
  date: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const BUSINESS_INFO = {
  name: "ARYA MEDICAL HALL",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  owner: "Rajesh Kumar (Reg. Pharmacist)",
  phone: "7488380297",
  whatsappNumber: "917488380297",
  formattedPhone: "+91 7488380297",
  email: "aryamedicalhall.jhd@gmail.com",
  address: "ARYA MEDICAL HALL, Near Sadar Hospital Road, Jehanabad, Bihar 804408",
  shortAddress: "Jehanabad, Bihar 804408",
  landmark: "Near Sadar Hospital Chowk, Main Road",
  googleMapsUrl: "https://maps.google.com/?q=ARYA+MEDICAL+HALL+Jehanabad+Bihar+804408",
  hours: {
    weekdays: "8:00 AM – 10:00 PM (Mon – Sat)",
    sunday: "9:00 AM – 8:00 PM",
    whatsappResponse: "24/7 WhatsApp Order Acceptance"
  },
  establishedYear: "2010",
  totalPatientsServed: "50,000+",
  genuineGuarantee: "100% Genuine Certified Medicines Sourced Direct From Authorized Distributors"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-1",
    title: "Prescription Medicine Fulfillment",
    category: "Prescription Medicines",
    description: "Complete inventory of all specialty and chronic disease medications carefully verified by registered pharmacists.",
    longDescription: "At Arya Medical Hall, we prioritize safety and authenticity. Our registered pharmacists thoroughly verify doctors' prescriptions, cross-check dosages, check expiry dates, and advise on administration guidelines for all major therapeutic categories including cardiology, endocrinology, neurology, and pediatrics.",
    iconName: "Pill",
    benefits: [
      "100% authentic medicines direct from manufacturer-authorized stockists",
      "Temperature-controlled cold chain storage for insulin, vaccines, and biologics",
      "Free dosage and interaction counseling with every prescription",
      "Special order facility for rare or specialty hospital medications within 24 hours"
    ],
    features: ["Doctor Prescription Review", "Batch Verification", "Cold Chain Managed", "Generics & Branded Options"]
  },
  {
    id: "serv-2",
    title: "Over-The-Counter (OTC) Medicines",
    category: "OTC Medicines",
    description: "Quick access to essential daily healthcare, pain relief, fever remedies, antacids, and seasonal allergy relief.",
    longDescription: "We stock a vast range of OTC healthcare remedies for daily wellness needs, including fever relievers, cough syrups, digestive supplements, skin ointments, eye/ear drops, and first-aid kits without delay.",
    iconName: "ShieldCheck",
    benefits: [
      "Trusted brands like Dolo, Volini, Crocin, Digene, and Vicks in stock",
      "Expert guidance from senior pharma staff on dosage and safety",
      "Affordable pricing with genuine MRP discounts",
      "Clear instructions provided on multi-drug schedules"
    ],
    features: ["Instant Counter Sale", "Symptom Relief Products", "First Aid Essentials", "Travel Health Kits"]
  },
  {
    id: "serv-3",
    title: "Health Devices & Monitoring Equipment",
    category: "Health Devices",
    description: "Digital blood pressure monitors, glucometers, nebulizers, pulse oximeters, and body thermometers.",
    longDescription: "Empower your family with home health monitoring. We supply certified medical monitoring equipment from top brands like Omron, Dr. Morepen, Accu-Chek, and Control D with manufacturer warranties and live operational demos at our counter.",
    iconName: "Activity",
    benefits: [
      "Authorized warranty-backed instruments",
      "In-store demonstration and setup assistance",
      "Test strips and calibration accessories always in stock",
      "Replacement & servicing support for devices"
    ],
    features: ["Digital BP Monitors", "Glucometer Kits & Strips", "Nebulizer Machines", "Infrared Thermometers"]
  },
  {
    id: "serv-4",
    title: "Baby Care & Mother Wellness",
    category: "Baby Care",
    description: "Premium baby formulas, diapers, infant skincare, nursing products, and pediatric nutritional supplements.",
    longDescription: "Motherhood and infant care require special softness and certified safety. We offer gentle, dermatologically tested products for babies including Sebamed, Himalaya Baby, Johnson's, Lactogen, Similac, and Pediasure.",
    iconName: "Baby",
    benefits: [
      "Safe, hypoallergenic formula and skincare products",
      "Infant nutrition & growth supplements as recommended by pediatricians",
      "Breastfeeding supplies, sterilizers, and maternal health drinks",
      "Frequent stock updates ensuring long shelf life"
    ],
    features: ["Infant Formulas", "Hypoallergenic Skincare", "Diapers & Wipes", "Pediatric Supplements"]
  },
  {
    id: "serv-5",
    title: "Surgical & Hospital Home Care Products",
    category: "Surgical Supplies",
    description: "Sterile dressings, surgical gloves, syringes, adult diapers, catheter supplies, and orthopedic supports.",
    longDescription: "For home recovery and post-operative nursing, Arya Medical Hall supplies comprehensive surgical supplies. From sterile wound care kits to wheelchair accessories and cervical collars, we support home patient care seamlessly.",
    iconName: "Stethoscope",
    benefits: [
      "Medical-grade sterile materials for surgical wound management",
      "Orthopedic belts, knee supports, and lumbar pillows for pain rehabilitation",
      "Bulk hospital supply discounts for patient attendants",
      "Prompt delivery for urgent post-surgery home requirements"
    ],
    features: ["Sterile Dressings & Bandages", "Orthopedic Belts & Braces", "Adult Diapers & Underpads", "Syringes & IV Sets"]
  },
  {
    id: "serv-6",
    title: "Express WhatsApp Prescription & Home Delivery",
    category: "Home Delivery",
    description: "Snap a photo of your prescription, WhatsApp it to 7488380297, and get doorstep medicine delivery in Jehanabad.",
    longDescription: "We make getting medicines easy for senior citizens and busy families in Jehanabad. Simply upload or message your doctor's slip on WhatsApp, and our staff will confirm item availability, total bill, and dispatch our local rider directly to your home.",
    iconName: "Truck",
    benefits: [
      "Zero hassle — order in 30 seconds via WhatsApp",
      "Free home delivery for senior citizens and orders above minimum threshold",
      "Digital invoice generated and sent via WhatsApp before delivery",
      "Flexible cash on delivery or online UPI payment"
    ],
    features: ["WhatsApp Prescription Upload", "Jehanabad Local Express Delivery", "UPI & Cash Payment", "Order Tracking Updates"]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Arya Medical Hall Store Exterior Front",
    category: "store",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80",
    caption: "Prominent main road frontage in Jehanabad with easy parking and clear signages."
  },
  {
    id: "gal-2",
    title: "Organized Prescription Medicine Counter",
    category: "shelves",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80",
    caption: "Systematically categorized shelves ensuring fast & accurate prescription processing."
  },
  {
    id: "gal-3",
    title: "Temperature Controlled Cold-Chain Refrigerator",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    caption: "Dedicated medical refrigerators storing insulin, vaccines, and temperature-sensitive biologics."
  },
  {
    id: "gal-4",
    title: "Digital Health Devices & Diagnostic Section",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1000&q=80",
    caption: "Wide selection of Omron BP monitors, glucometers, nebulizers, and pulse oximeters."
  },
  {
    id: "gal-5",
    title: "Nutritional Supplements & Daily OTC Display",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1000&q=80",
    caption: "Authentic multivitamins, protein powders, and immunity boosters on display."
  },
  {
    id: "gal-6",
    title: "Surgical Supplies & Home Care Section",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?auto=format&fit=crop&w=1000&q=80",
    caption: "Sterile dressings, orthopedic belts, gloves, and patient care accessories."
  },
  {
    id: "gal-7",
    title: "Baby Care & Infant Nutrition Counter",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1000&q=80",
    caption: "Comprehensive mother and baby care brands stored in hygienic dust-free displays."
  },
  {
    id: "gal-8",
    title: "Consultation & Patient Advice Area",
    category: "store",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    caption: "Private counter space where senior pharmacists review dosage guidelines with customers."
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Ramesh Sharma",
    rating: 5,
    date: "2 weeks ago",
    location: "Jehanabad Sadar",
    tag: "Genuine Medicines",
    text: "Very reliable medical shop in Jehanabad. I always get my father's diabetes and BP medicines here at reasonable prices. The pharmacist explains the exact timings for every tablet."
  },
  {
    id: "rev-2",
    author: "Pooja Kumari",
    rating: 5,
    date: "1 month ago",
    location: "Kanko Road, Jehanabad",
    tag: "WhatsApp Order & Fast Delivery",
    text: "Sent my prescription on WhatsApp and received my medicine package at home within 45 minutes! Exceptional service for busy families in Jehanabad. Highly recommended."
  },
  {
    id: "rev-3",
    author: "Dr. Alok Verma",
    rating: 5,
    date: "2 months ago",
    location: "Jehanabad Hospital Road",
    tag: "Cold Chain Assurance",
    text: "Arya Medical Hall maintains proper cold storage for insulin and critical injections. As a medical professional, I appreciate their adherence to drug storage standards."
  },
  {
    id: "rev-4",
    author: "Sanjay Singh",
    rating: 5,
    date: "3 months ago",
    location: "Makhdumpur Road",
    tag: "Surgical Equipment",
    text: "Bought an Omron BP monitor and surgical knee support here. The staff gave me a complete demonstration of how to operate the BP machine at home. Very polite behavior."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can I order medicines via WhatsApp from Arya Medical Hall?",
    answer: "It's simple! Take a clear picture of your doctor's prescription or write the list of required medicines. Click the WhatsApp button on our website or save our official number +91 7488380297. Send the message along with your delivery address. Our pharmacist will verify items and confirm the bill instantly.",
    category: "Ordering & Delivery"
  },
  {
    id: "faq-2",
    question: "Are all medicines at Arya Medical Hall 100% genuine and fresh?",
    answer: "Yes, 100%! We procure all medicines and healthcare devices directly from company-authorized pharma distributors. Every product comes with valid batch numbers, clear expiry dates, and proper GST invoices.",
    category: "Authenticity"
  },
  {
    id: "faq-3",
    question: "Do you offer home delivery in Jehanabad, Bihar?",
    answer: "Yes, we provide doorstep home delivery across Jehanabad city and surrounding localities for prescriptions and OTC essentials. Delivery is free for senior citizens and orders meeting minimum value requirements.",
    category: "Ordering & Delivery"
  },
  {
    id: "faq-4",
    question: "Is a prescription required for purchasing medicines?",
    answer: "Prescription-only medicines (Schedule H and H1 drugs such as antibiotics, psychiatric, and cardiac medications) require a valid doctor's prescription as per Indian Drugs and Cosmetics Rules. Over-the-counter (OTC) items, vitamins, health monitors, and baby care do not require a prescription.",
    category: "Prescriptions"
  },
  {
    id: "faq-5",
    question: "What are the operating working hours of Arya Medical Hall?",
    answer: "Our physical store is open Monday to Saturday from 8:00 AM to 10:00 PM, and Sundays from 9:00 AM to 8:00 PM. Our WhatsApp order assistant accepts prescription uploads 24/7.",
    category: "Store Info"
  },
  {
    id: "faq-6",
    question: "How can I check if a particular medicine is currently in stock?",
    answer: "You can use our online Medicine Stock Checker tool on the Services page of this website! Alternatively, search on our homepage search box or drop us a quick WhatsApp message at 7488380297 to get instant stock confirmation.",
    category: "Stock Availability"
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: "tip-1",
    title: "Essential Rules for Storing Insulin & Temperature-Sensitive Medicines at Home",
    category: "Medicine Safety",
    summary: "Learn how to store insulin vials and antibiotic syrups correctly during hot summers to preserve potency.",
    content: "Temperature-sensitive drugs like insulin, vaccines, and certain eye drops must be stored between 2°C to 8°C. Never freeze insulin, and keep opened vials at room temperature below 25°C away from direct sunlight.",
    author: "Arya Medical Pharma Team",
    readTime: "3 min read",
    date: "July 2026",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tip-2",
    title: "How to Accurately Measure Blood Pressure at Home Using Digital BP Monitors",
    category: "Health Devices",
    summary: "Avoid common errors while using digital BP machines: posture, arm cuff position, and rest timing matter.",
    content: "Sit quietly for 5 minutes before taking a reading. Place the arm cuff at heart level, rest your feet flat on the floor, avoid talking, and measure twice 1 minute apart for accurate monitoring.",
    author: "Reg. Pharmacist",
    readTime: "4 min read",
    date: "June 2026",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tip-3",
    title: "Why You Should Never Stop Antibiotic Courses Incomplete",
    category: "General Health",
    summary: "Stopping antibiotics early when symptoms fade leads to drug-resistant superbugs and disease relapse.",
    content: "Even if you feel better after 2 days, complete the full 5-day or 7-day course prescribed by your doctor. Early termination leaves surviving bacteria to mutate and resist future treatments.",
    author: "Arya Clinical Team",
    readTime: "3 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80"
  }
];
