"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { SITE_CONFIG } from "@/lib/site-config";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingSocials() {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <aside
      aria-label="Quick contact links"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3 select-none"
    >
      <a
        href={SITE_CONFIG.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow SENTRIX SECURITY on Instagram"
        className="group relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg shadow-black/25 transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95"
      >
        <FontAwesomeIcon icon={faInstagram} className="text-lg sm:text-xl" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#0B1220]/90 px-2.5 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-sm transition-opacity group-hover:block">
          Instagram
        </span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SENTRIX SECURITY on WhatsApp"
        className="group relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition-all duration-200 hover:scale-110 hover:bg-[#20ba59] hover:shadow-xl active:scale-95"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl sm:text-2xl" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#0B1220]/90 px-2.5 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-sm transition-opacity group-hover:block">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
