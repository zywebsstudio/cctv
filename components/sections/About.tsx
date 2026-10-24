import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function About() {
  const { eyebrow, heading, description, valuePoints, image, ctaText } = SITE_CONFIG.about;

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-[#E2E8F0] overflow-hidden">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl bg-[#F5F7FA]">
              <Image
                src={image}
                alt="SENTRIX technician installing and testing security equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-[#E2E8F0] shadow-md flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0B1220] uppercase tracking-wide">
                    Certified Installation Standards
                  </h4>
                  <p className="text-[11px] text-[#475569] mt-0.5">
                    Rigorous testing for signal integrity and camera alignment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1220] tracking-tight leading-tight mb-5">
              {heading}
            </h2>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-8">
              {description}
            </p>

            <div className="space-y-4 w-full mb-8">
              {valuePoints.map((point) => (
                <div
                  key={point.title}
                  className="p-4 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] flex items-start gap-3.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1220]">
                      {point.title}
                    </h3>
                    <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0B1220] hover:bg-[#2563EB] shadow-md transition-all active:scale-95"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
