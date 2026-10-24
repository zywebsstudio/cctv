import Image from "next/image";
import Link from "next/link";
import { Sliders, ShieldCheck, Cpu, Headphones, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/site-config";

const benefitIcons: Record<string, React.ReactNode> = {
  Sliders: <Sliders className="w-5 h-5 text-[#38BDF8]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#38BDF8]" />,
  Headphones: <Headphones className="w-5 h-5 text-[#38BDF8]" />,
};

export default function WhyChooseUs() {
  const { heading, description, image, benefits } = SITE_CONFIG.whyChooseUs;

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#0B1220] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(37,99,235,0.12),transparent)] pointer-events-none" />

      <div className="container mx-auto px-3 sm:px-6 lg:px-10 relative z-10">
        <SectionHeading
          eyebrow="WHY CHOOSE US"
          title={heading}
          description={description}
          dark
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="p-5 sm:p-6 rounded-xl bg-[#14243A]/80 border border-white/10 hover:border-[#38BDF8]/40 transition-colors flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#38BDF8]/30 flex items-center justify-center shrink-0 mt-0.5">
                    {benefitIcons[benefit.iconName] || <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#1d4ed8] shadow-md shadow-[#2563EB]/30 transition-all active:scale-95"
              >
                <span>Request a System Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/15 bg-[#14243A] shadow-2xl">
              <Image
                src={image}
                alt="Monitoring station and CCTV surveillance systems by SENTRIX SECURITY"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-85" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0B1220]/90 border border-white/15 backdrop-blur-md">
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  Engineered For Uninterrupted Reliability
                </p>
                <p className="text-[11px] text-[#94A3B8] mt-1">
                  Surge protection, battery backup integration, and encrypted network access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
