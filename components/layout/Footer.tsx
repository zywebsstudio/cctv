import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin, ArrowUp, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { SITE_CONFIG } from "@/lib/site-config";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1220] text-white pt-16 sm:pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/10">
          <div className="lg:col-span-4 space-y-4">
            <Link href="#home" className="flex items-center gap-2.5 inline-flex">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#14243A] border border-[#38BDF8]/30 flex items-center justify-center text-white shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                  {SITE_CONFIG.shortName}
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#38BDF8] mt-1">
                  SECURITY SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Professional CCTV installation, IP surveillance systems, DVR/NVR storage solutions, and 24/7 remote phone monitoring for residential and commercial premises.
            </p>

            <div className="pt-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-sm"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-5">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#94A3B8]">
                {SITE_CONFIG.navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                Our Services
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#94A3B8]">
                {SITE_CONFIG.services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href="#services"
                      className="hover:text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#home" className="hover:text-[#CBD5E1] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#home" className="hover:text-[#CBD5E1] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
