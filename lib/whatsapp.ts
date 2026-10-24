import { SITE_CONFIG } from "./site-config";

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  propertyType: string;
  serviceRequired: string;
  message?: string;
}

export const createWhatsAppUrl = (data: ContactFormData): string => {
  const lines = [
    `*NEW CCTV ENQUIRY - ${SITE_CONFIG.name}*`,
    `Name: ${data.fullName.trim()}`,
    `Phone: ${data.phoneNumber.trim()}`,
    `Property Type: ${data.propertyType}`,
    `Service: ${data.serviceRequired}`,
  ];

  if (data.message && data.message.trim().length > 0) {
    lines.push(`Requirements: ${data.message.trim()}`);
  }

  const encoded = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
};

export const getGeneralWhatsAppUrl = (prefill?: string): string => {
  const text = prefill || `Hi ${SITE_CONFIG.name}, I would like to enquire about CCTV installation for my property.`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
