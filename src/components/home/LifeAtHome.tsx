import React from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";
import { Palette, Utensils, Trees, Users2 } from "lucide-react";

export const LifeAtHome: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: "Meaningful Activities",
      description: "Creative sessions, games, music, celebrations, and activities based on residents' interests.",
    },
    {
      icon: Utensils,
      title: "Good Food, Shared Moments",
      description: "Meals and dining experiences that respect individual preferences and documented dietary needs.",
    },
    {
      icon: Trees,
      title: "Gardens and Quiet Spaces",
      description: "Comfortable spaces for fresh air, relaxation, visits, and time with family.",
    },
    {
      icon: Users2,
      title: "Family and Community",
      description: "Opportunities for visitors, shared celebrations, and community connections in line with the home's arrangements.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-forest-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-forest-800/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal>
              <SectionHeading
                eyebrow="MORE THAN A PLACE TO STAY"
                title="A home for living, connecting, and belonging."
                description="We believe the little things make a difference: a favourite meal, a friendly conversation, time in the garden, or a familiar activity enjoyed at your own pace."
                theme="dark"
                align="left"
              />
            </Reveal>

            {/* Feature List */}
            <div className="space-y-6 pt-2">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Reveal key={idx} delay={0.1 * idx}>
                    <div className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-forest-800 border border-forest-700 text-sage-300 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-white group-hover:text-sage-200 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* CTA */}
            <Reveal delay={0.5} className="pt-2">
              <CTAButton to="/life-here" variant="secondary" size="lg" icon>
                Discover Life Here
              </CTAButton>
            </Reveal>
          </div>

          {/* Right Column (6 cols) - Large editorial photo with two smaller supporting images */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Large Main Image (spans 2 columns) */}
                <div className="col-span-2 relative aspect-[16/10] rounded-[16px] overflow-hidden border border-forest-700 shadow-lift">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                    alt="Residents and caregiver engaged in a joyful painting workshop in the sunny garden lounge"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono tracking-wider uppercase text-sage-200 bg-forest-900/80 px-2.5 py-1 rounded backdrop-blur-sm">
                      Creative Expressions & Social Life
                    </span>
                  </div>
                </div>

                {/* Supporting Photo 1: Dining */}
                <div className="relative aspect-square rounded-[14px] overflow-hidden border border-forest-700 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                    alt="Freshly prepared wholesome meal prepared with love"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[11px] font-mono text-white bg-forest-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                      Home Cooked Meals
                    </span>
                  </div>
                </div>

                {/* Supporting Photo 2: Gardens */}
                <div className="relative aspect-square rounded-[14px] overflow-hidden border border-forest-700 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80"
                    alt="Peaceful sunny garden walking paths with blooming flowers"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[11px] font-mono text-white bg-forest-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                      Safe Sensory Gardens
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
