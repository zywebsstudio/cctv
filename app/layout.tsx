import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SENTRIX SECURITY | Professional CCTV & Security Solutions",
  description:
    "Professional CCTV camera installation, IP surveillance systems, DVR/NVR setup, and remote phone monitoring for homes and businesses. Request a free quote.",
  keywords: [
    "CCTV installation",
    "Security cameras",
    "IP camera systems",
    "DVR NVR setup",
    "Surveillance solutions",
    "Video door phone",
    "Home security",
    "Commercial CCTV",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="bg-white text-[#475569] antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
