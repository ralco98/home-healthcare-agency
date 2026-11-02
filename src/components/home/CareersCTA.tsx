import React from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/data/siteConfig";
import { Sparkles, Users, Award, Heart } from "lucide-react";

export const CareersCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background border-b border-border/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-card bg-cream/90 border border-border p-8 sm:p-12 md:p-14 shadow-sm relative overflow-hidden">
          {/* Subtle background element */}
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-light/40 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <Reveal>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.14em] uppercase text-primary-dark">
                  <span className="w-6 h-[2px] rounded-full bg-primary inline-block" aria-hidden="true" />
                  <span>CAREERS AT {siteConfig.name.toUpperCase()}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  Make a meaningful difference.
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  If you care about helping people feel respected, supported, and at home, we'd love to hear from you. We offer paid training, empathetic team leadership, and a workplace built on dignity.
                </p>

                {/* Key perks strip */}
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-foreground/80">
                  <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-border">
                    <Heart className="w-3.5 h-3.5 text-primary" />
                    Living Wage Employer
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-border">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    Full Paid Induction & NVQ Training
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-border">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    Supportive Staff Rota
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Reveal delay={0.2}>
                <CTAButton to="/careers" variant="primary" size="lg" icon>
                  Explore Careers
                </CTAButton>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
