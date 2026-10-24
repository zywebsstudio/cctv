export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface WhyChooseBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  propertyType: string;
  review: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: "SENTRIX SECURITY",
  shortName: "SENTRIX",
  tagline: "Professional CCTV & Intelligent Surveillance Systems",
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappNumber: "919876543210",
  instagramUrl: "https://instagram.com",
  email: "contact@sentrixsecurity.com",
  address: "SENTRIX Towers, Civil Station Road, Ernakulam, Kochi, Kerala",
  city: "Ernakulam, Kochi",
  workingHours: "Mon – Sat: 8:30 AM – 7:30 PM | Emergency Support Available",
  hero: {
    eyebrow: "SMARTER SECURITY. GREATER PEACE OF MIND.",
    headline: "Protect What Matters Most with Smarter Security.",
    description:
      "Professional CCTV installation and reliable security solutions designed to help protect your home, business, and the people who matter most.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Explore Our Services",
    trustHighlights: [
      "Professional Installation",
      "Tailored Security Solutions",
      "Ongoing Technical Support",
    ],
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
  },
  about: {
    eyebrow: "ABOUT OUR COMPANY",
    heading: "Your Trusted Partner for Smarter Security",
    description:
      "We help homeowners and businesses explore reliable CCTV and surveillance solutions suited to their properties, requirements, and budgets. From system recommendations to installation and setup, our focus is on practical solutions and professional service.",
    valuePoints: [
      {
        title: "Customer-Focused Solutions",
        description:
          "Recommendations based specifically on your property layout, budget, and real-world security risks.",
      },
      {
        title: "Professional Installation",
        description:
          "Neat, concealed cabling, optimized camera angles, and rigorous multi-point testing on every project.",
      },
      {
        title: "Clear Communication",
        description:
          "Transparent pricing with no hidden surprises, accompanied by straightforward equipment walkthroughs.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
    ctaText: "Talk to Our Team",
  },
  whyChooseUs: {
    heading: "Security Solutions You Can Depend On",
    description:
      "Discover why commercial establishments and homeowners rely on Sentrix for reliable protection and prompt technical guidance.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    benefits: [
      {
        id: "benefit-1",
        title: "Tailored Recommendations",
        description:
          "Solutions based on the property, security requirements, and budget.",
        iconName: "Sliders",
      },
      {
        id: "benefit-2",
        title: "Professional Installation",
        description:
          "Careful planning and attention to camera placement and installation quality.",
        iconName: "ShieldCheck",
      },
      {
        id: "benefit-3",
        title: "Reliable Technical Guidance",
        description:
          "Clear explanations of equipment, recording systems, and supported features.",
        iconName: "Cpu",
      },
      {
        id: "benefit-4",
        title: "Ongoing Support",
        description:
          "A clear process for technical assistance and maintenance enquiries.",
        iconName: "Headphones",
      },
    ],
  },
  services: [
    {
      id: "cctv-installation",
      title: "CCTV Camera Installation",
      description:
        "High-definition bullet and dome camera deployment with weatherproofing and night vision clarity.",
      iconName: "Camera",
      badge: "Core Service",
    },
    {
      id: "ip-camera-systems",
      title: "IP Camera Systems",
      description:
        "High-resolution digital network cameras offering 4K video quality, Power-over-Ethernet, and smart alerts.",
      iconName: "Network",
      badge: "High Definition",
    },
    {
      id: "dvr-nvr-systems",
      title: "DVR & NVR Systems",
      description:
        "Dedicated digital and network video recording units with high-capacity surveillance storage drives.",
      iconName: "HardDrive",
      badge: "Storage & Backup",
    },
    {
      id: "video-door-phones",
      title: "Video Door Phones",
      description:
        "Smart audio-video door intercoms allowing two-way communication and electronic door unlock.",
      iconName: "DoorClosed",
      badge: "Access Control",
    },
    {
      id: "remote-monitoring",
      title: "Remote Monitoring Setup",
      description:
        "Secure smartphone and tablet integration allowing live streaming and instant motion notifications anywhere.",
      iconName: "Smartphone",
      badge: "Mobile App Access",
    },
    {
      id: "maintenance-support",
      title: "Maintenance & Technical Support",
      description:
        "Routine health audits, lens cleaning, firmware upgrades, and prompt on-site troubleshooting.",
      iconName: "Wrench",
      badge: "Reliable Care",
    },
  ],
  testimonials: [
    {
      id: "test-1",
      name: "Arun K. Nair",
      role: "Commercial Property Manager",
      propertyType: "Retail Complex",
      review:
        "Sentrix delivered an immaculate 16-camera IP installation for our shopping plaza. The cabling is completely concealed, the live feed on our phones is instantaneous, and their team was thoroughly professional.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Deepa Menon",
      role: "Homeowner",
      propertyType: "Independent Villa",
      review:
        "We needed cameras covering the perimeter and main entrance of our residence. The Sentrix technicians recommended the exact lens angles we needed without overselling unnecessary hardware. Highly recommended.",
      rating: 5,
    },
    {
      id: "test-3",
      name: "Mathew Varghese",
      role: "Logistics Director",
      propertyType: "Warehouse Facility",
      review:
        "Their NVR and 4K surveillance setup has provided seamless 24/7 visibility over our loading bays and inventory aisles. Prompt response whenever we have a technical inquiry.",
      rating: 5,
    },
    {
      id: "test-4",
      name: "Rohit Krishnan",
      role: "Clinic Director",
      propertyType: "Healthcare Facility",
      review:
        "Extremely neat installation with high-grade night vision and video door intercom. Their post-installation demonstration made it very easy for our staff to manage the recordings.",
      rating: 5,
    },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "How much does CCTV installation cost?",
      answer:
        "CCTV installation costs depend on the property size, the number of cameras required, cabling distances, resolution specifications (Full HD vs 4K), storage capacity (days of backup), and whether an analog DVR or IP NVR architecture is selected. We provide a complimentary on-site or layout evaluation with a transparent itemized quotation tailored to your budget.",
    },
    {
      id: "faq-2",
      question: "Which CCTV camera is suitable for my property?",
      answer:
        "For indoor areas such as living rooms or retail counters, discreet dome cameras are ideal. For outdoor boundaries, driveways, and open spaces, weatherproof bullet cameras with extended infrared night vision are best suited. During our site visit, we map your premises to recommend the optimal mix of focal lengths and camera types.",
    },
    {
      id: "faq-3",
      question: "Can I view my cameras on my mobile phone?",
      answer:
        "Yes, absolutely. All our modern DVR and NVR installations are configured with encrypted remote view applications compatible with iOS and Android smartphones, tablets, and laptops. As long as your recorder is connected to the internet, you can stream live footage and review past recordings from anywhere in the world.",
    },
    {
      id: "faq-4",
      question: "How many cameras do I need?",
      answer:
        "A typical 2 to 3-bedroom residential home generally requires 4 to 8 cameras to cover the main gate, front porch, side pathways, and backyard. Commercial spaces, warehouses, and offices depend on entry/exit points, cash counters, and storage areas. We calculate camera counts based on critical blind spots rather than arbitrary numbers.",
    },
    {
      id: "faq-5",
      question: "What is the difference between DVR and NVR?",
      answer:
        "A DVR (Digital Video Recorder) processes analog camera signals transmitted over coaxial cables. An NVR (Network Video Recorder) records digital video streams transmitted over Ethernet (PoE) network cables from IP cameras. NVR systems offer superior resolution, simpler cable management, and advanced AI analytics, while DVR systems offer a cost-effective alternative for budget-focused projects.",
    },
    {
      id: "faq-6",
      question: "Do you provide maintenance and technical support?",
      answer:
        "Yes, we provide ongoing maintenance support, camera repositioning, hard drive health assessments, power supply replacements, and software updates. Our team is accessible via phone and WhatsApp for fast troubleshooting whenever you need assistance.",
    },
  ],
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
};
