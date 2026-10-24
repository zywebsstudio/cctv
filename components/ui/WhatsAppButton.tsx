import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  label?: string;
  prefill?: string;
  variant?: "solid" | "outline";
  className?: string;
}

export default function WhatsAppButton({
  label = "WhatsApp Enquiry",
  prefill,
  variant = "solid",
  className = "",
}: WhatsAppButtonProps) {
  const url = getGeneralWhatsAppUrl(prefill);

  if (variant === "outline") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all duration-200 active:scale-95 ${className}`}
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md shadow-[#25D366]/20 transition-all duration-200 active:scale-95 ${className}`}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
      <span>{label}</span>
    </a>
  );
}
