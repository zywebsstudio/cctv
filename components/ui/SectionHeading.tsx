import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 ${
            dark
              ? "bg-[#14243A] text-[#38BDF8] border border-[#2563EB]/30"
              : "bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? "text-white" : "text-[#0B1220]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed ${
            dark ? "text-[#CBD5E1]" : "text-[#475569]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
