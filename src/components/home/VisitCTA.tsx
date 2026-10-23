import React from "react";
import { CTAButton } from "@/components/shared/CTAButton";
import { siteConfig } from "@/data/siteConfig";
import { Reveal } from "@/components/shared/Reveal";
import { Phone, HeartHandshake } from "lucide-react";

export const VisitCTA: React.FC = () => {
  return (
    <section className="relative py-20 md:py-24 bg-forest-900 text-white overflow-hidden">
      {/* Subtle organic texture / glowing background */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#bed0c1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-forest-700/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.14em] uppercase text-sage-300">
              <span className="w-6 h-[2px] rounded-full bg-sage-400 inline-block" aria-hidden="true" />
              <span>WE WOULD LOVE TO WELCOME YOU</span>
              <span className="w-6 h-[2px] rounded-full bg-sage-400 inline-block" aria-hidden="true" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.035em] leading-[1.12]">
              Come and see what makes a place feel like home.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Arrange a visit, meet our team, explore the surroundings, and talk through the questions that matter to you and your family.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <CTAButton to="/contact" variant="white" size="lg">
                Arrange a Visit
              </CTAButton>
              <CTAButton href={`tel:${siteConfig.contact.phone}`} variant="outline" size="lg" className="text-white border-white/40 hover:bg-white/10 hover:border-white">
                <Phone className="w-4 h-4 mr-2" />
                <span>Call Our Team: {siteConfig.contact.phoneDisplay}</span>
              </CTAButton>
            </div>

            {/* Trust line */}
            <p className="text-xs sm:text-sm text-sage-300/90 font-medium pt-3 flex items-center justify-center gap-2">
              <HeartHandshake className="w-4 h-4 text-sage-400" aria-hidden="true" />
              <span>No pressure. Honest conversations. Time to explore your options.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
