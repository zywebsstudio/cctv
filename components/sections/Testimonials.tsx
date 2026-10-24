"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Star, ChevronLeft, ChevronRight, Quote, Shield } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/site-config";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white border-t border-[#E2E8F0] overflow-hidden">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="CLIENT EXPERIENCES"
            title="What Customers Say"
            description="Read firsthand feedback from homeowners and commercial property operators who rely on our installations."
            align="left"
            className="mb-0"
          />

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              className="w-10 h-10 rounded-lg border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#2563EB]/10 flex items-center justify-center text-[#0B1220] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => swiperInstance?.slideNext()}
              className="w-10 h-10 rounded-lg border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#2563EB]/10 flex items-center justify-center text-[#0B1220] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={setSwiperInstance}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {SITE_CONFIG.testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-[#F5F7FA] border border-[#E2E8F0] flex flex-col justify-between hover:border-[#2563EB]/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#2563EB]/20" />
                  </div>

                  <p className="text-sm text-[#475569] leading-relaxed italic mb-6">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1220]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      {item.role}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">
                    {item.propertyType}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
