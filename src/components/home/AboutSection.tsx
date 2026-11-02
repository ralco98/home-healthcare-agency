import React from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";
import { ShieldCheck, Sparkles, Heart, UserCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Dignity",
      description: "Respecting every person, their privacy, personal boundary choices, and right to self-direction.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Taking time to listen attentively, understand personal concerns, and respond with warmth and patience.",
    },
    {
      icon: UserCheck,
      title: "Individuality",
      description: "Recognising personal histories, lifelong interests, distinct food preferences, and daily routines.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-sage-100/60 border-b border-border/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (5 cols) - Warm authentic photography */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <div className="relative rounded-[16px] overflow-hidden border border-border shadow-lift bg-white p-2">
                <div className="aspect-[4/5] rounded-[12px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80"
                    alt="A warm, light-filled family room in our care home where residents and visiting family members enjoy peaceful conversation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Verified Credentials Badge */}
                <div className="p-4 mt-2 bg-cream rounded-xl border border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-forest-800 text-white flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-sage-200" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-foreground">
                        {siteConfig.tradingName}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Licensed Residential & Community Care · Philadelphia, PA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (7 cols) - Story, Values & CTA */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow="OUR STORY"
                title="Good care starts with feeling at home."
                description={`At ${siteConfig.name}, our aim is to create an environment where every resident is recognised as an individual. We want people to feel welcomed, listened to, and supported in ways that respect their preferences and independence.`}
                align="left"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We believe good care is about more than meeting practical needs. It is also about familiar routines, meaningful relationships, thoughtful communication, and the everyday moments that make a place feel like home.
              </p>
            </Reveal>

            {/* 3 Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <Reveal key={idx} delay={0.2 + idx * 0.1}>
                    <div className="p-4 rounded-xl bg-white border border-border/80 shadow-2xs h-full">
                      <div className="w-8 h-8 rounded-lg bg-sage-100 text-primary flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <h3 className="font-display font-bold text-base text-foreground">
                        {val.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* CTA */}
            <Reveal delay={0.4} className="pt-2">
              <CTAButton to="/about" variant="secondary" size="lg" icon>
                Learn More About Us
              </CTAButton>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
};
