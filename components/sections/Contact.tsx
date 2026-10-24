"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, ShieldAlert, Check } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/site-config";
import { createWhatsAppUrl, getGeneralWhatsAppUrl, ContactFormData } from "@/lib/whatsapp";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phoneNumber: "",
    propertyType: "Independent House / Villa",
    serviceRequired: "CCTV Camera Installation",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your name.";
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.trim().length < 8) {
      errors.phoneNumber = "Please enter a valid phone number.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const url = createWhatsAppUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0B1220] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_90%,rgba(37,99,235,0.14),transparent)] pointer-events-none" />

      <div className="container mx-auto px-3 sm:px-6 lg:px-10 relative z-10">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's Secure What Matters Most"
          description="Tell us about your property and security requirements. We'll help you explore the right CCTV solution."
          dark
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#14243A] border border-white/10 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                Connect directly with our security engineers for fast quotes, equipment recommendations, or site audit appointments.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Phone Call
                    </span>
                    <p className="text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                      {SITE_CONFIG.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#34D399]">
                      Instant WhatsApp
                    </span>
                    <p className="text-sm font-semibold text-white">
                      Chat with Support ({SITE_CONFIG.phoneDisplay})
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Email Address
                    </span>
                    <p className="text-sm font-semibold text-white">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Service Location
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-white/90 leading-snug">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Operating Hours
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-white/90 leading-snug">
                      {SITE_CONFIG.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl bg-[#14243A] border border-white/10 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Request Your Free Security Quote
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] mb-6 sm:mb-8 leading-relaxed">
              Complete the details below to generate a pre-formatted WhatsApp enquiry. You can review and send it directly from your device.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-lg bg-[#0B1220] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
                  />
                  {formErrors.fullName && (
                    <p className="text-xs text-red-400 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg bg-[#0B1220] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
                  />
                  {formErrors.phoneNumber && (
                    <p className="text-xs text-red-400 mt-1">{formErrors.phoneNumber}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({ ...formData, propertyType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#0B1220] border border-white/15 text-white text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
                  >
                    <option value="Independent House / Villa">Independent House / Villa</option>
                    <option value="Apartment / Flat">Apartment / Flat</option>
                    <option value="Commercial Office / IT Unit">Commercial Office / IT Unit</option>
                    <option value="Retail Store / Showroom">Retail Store / Showroom</option>
                    <option value="Warehouse / Factory Yard">Warehouse / Factory Yard</option>
                    <option value="School / Institution">School / Institution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceRequired: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#0B1220] border border-white/15 text-white text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
                  >
                    <option value="CCTV Camera Installation">CCTV Camera Installation</option>
                    <option value="IP Camera Systems">IP Camera Systems</option>
                    <option value="DVR / NVR Upgrade & Storage">DVR / NVR Upgrade & Storage</option>
                    <option value="Video Door Phone Intercom">Video Door Phone Intercom</option>
                    <option value="Remote Phone Viewing Setup">Remote Phone Viewing Setup</option>
                    <option value="Maintenance & Repair Support">Maintenance & Repair Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                  Project Notes / Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about number of cameras needed, outdoor boundaries, or specific security concerns..."
                  className="w-full px-4 py-3 rounded-lg bg-[#0B1220] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#38BDF8] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/25 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-[#94A3B8] mt-2.5">
                  Submitting opens your WhatsApp app with your details pre-composed for instant review.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
