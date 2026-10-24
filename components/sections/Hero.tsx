import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Eye } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Hero() {
  const { eyebrow, headline, description, primaryCta, secondaryCta, trustHighlights, image } =
    SITE_CONFIG.hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 sm:pt-36 pb-16 lg:py-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.06),transparent)] pointer-events-none" />

      <div className="container mx-auto px-3 sm:px-6 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                {eyebrow}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1220] tracking-tight leading-[1.12] mb-5 sm:mb-6">
              Protect What Matters Most with{" "}
              <span className="text-[#2563EB]">
                Smarter Security.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-xl mb-7 sm:mb-9 font-normal">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-lg shadow-[#2563EB]/25 hover:shadow-xl hover:shadow-[#2563EB]/35 transition-all active:scale-95 text-center"
              >
                <span>{primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B1220] bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#F8FAFC] shadow-xs transition-all text-center"
              >
                <span>{secondaryCta}</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] w-full">
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                {trustHighlights.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-[11px] sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span className="font-semibold">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#2563EB]/15 via-[#38BDF8]/10 to-transparent rounded-2xl blur-xl" />

              <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] w-full rounded-lg sm:rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#F8FAFC] shadow-2xl shadow-[#0B1220]/10">
                <Image
                  src={image}
                  alt="High-resolution CCTV camera surveillance installation by SENTRIX SECURITY"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/95 border border-[#E2E8F0] backdrop-blur-md text-[11px] font-bold text-[#0B1220] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span>24/7 Active Protection</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-[#E2E8F0] backdrop-blur-md shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB]">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0B1220] uppercase tracking-wider">
                        Ultra HD Clarity
                      </p>
                      <p className="text-[11px] text-[#64748B]">
                        Color Night Vision & Smart AI
                      </p>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="px-2.5 py-1 rounded bg-[#2563EB]/10 border border-[#2563EB]/20 text-[10px] font-bold text-[#2563EB] uppercase tracking-wider">
                      Commercial Grade
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
