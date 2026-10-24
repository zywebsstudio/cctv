import Link from "next/link";
import {
  Camera,
  Network,
  HardDrive,
  DoorClosed,
  Smartphone,
  Wrench,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/site-config";

const iconMap: Record<string, React.ReactNode> = {
  Camera: <Camera className="w-6 h-6 text-[#2563EB]" />,
  Network: <Network className="w-6 h-6 text-[#2563EB]" />,
  HardDrive: <HardDrive className="w-6 h-6 text-[#2563EB]" />,
  DoorClosed: <DoorClosed className="w-6 h-6 text-[#2563EB]" />,
  Smartphone: <Smartphone className="w-6 h-6 text-[#2563EB]" />,
  Wrench: <Wrench className="w-6 h-6 text-[#2563EB]" />,
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F5F7FA] border-t border-[#E2E8F0]">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Complete Security Solutions"
          description="From homes to commercial properties, discover practical security solutions tailored to your requirements."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-[#2563EB]/5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <span className="group-hover:[&>svg]:text-white transition-colors">
                      {iconMap[service.iconName] || <Camera className="w-6 h-6 text-[#2563EB]" />}
                    </span>
                  </div>

                  {service.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-md border border-[#2563EB]/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0B1220] group-hover:text-[#2563EB] transition-colors leading-snug mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E8F0]">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] group-hover:text-[#1d4ed8] transition-colors"
                >
                  <span>Request Solution</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
