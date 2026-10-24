"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Menu, X, Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm py-3"
          : "bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]/60 py-4 sm:py-5"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shadow-md shadow-[#2563EB]/25 group-hover:scale-105 transition-transform shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0B1220] leading-none">
                {SITE_CONFIG.shortName}
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mt-1">
                SECURITY
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-[#334155] hover:text-[#2563EB] transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold text-[#334155] hover:text-[#2563EB] px-3 py-2 rounded-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-md shadow-[#2563EB]/25 transition-all active:scale-95"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#0B1220] hover:text-[#2563EB] bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-[#F1F5F9] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="xl:hidden mt-3 p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xl space-y-4 animate-in fade-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-2.5">
              {SITE_CONFIG.navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider text-[#334155] hover:text-[#2563EB] hover:bg-[#F8FAFC] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-3">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#334155] bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]"
              >
                <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>

              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#1D4ED8]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
