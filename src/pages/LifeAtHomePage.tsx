import React, { useEffect } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { activityHighlights, sampleMenu } from "@/data/activities";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/data/siteConfig";
import { Utensils, Calendar, Heart, Check, Coffee, Sun } from "lucide-react";

export const LifeAtHomePage: React.FC = () => {
  useEffect(() => {
    document.title = `Life at Willowbrook | Activities, Dining & Community`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="MORE THAN A PLACE TO STAY"
        title="A vibrant life filled with warmth, flavour, and friendship."
        description="Daily life at our home is about autonomy, personal choices, engaging hobbies, and shared celebrations, all supported at a gentle and comfortable pace."
        breadcrumbs={[{ label: "Life at Willowbrook" }]}
      />

      {/* 4 Pillars of Daily Life */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {activityHighlights.map((pillar, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={pillar.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-card bg-white border border-border/80 shadow-xs"
              >
                {/* Text Description */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
                    {pillar.eyebrow}
                  </span>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                    {pillar.title}
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {pillar.longDescription}
                  </p>

                  <div className="pt-2 space-y-2">
                    <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">
                      Favourite Examples:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground/85">
                      {pillar.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Photography */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-[16px] overflow-hidden border border-border shadow-lift aspect-[4/3] bg-sage-100">
                    <img
                      src={pillar.imageUrl}
                      alt={pillar.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-green/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sample Seasonal Dining Menu Showcase */}
      <section className="py-16 md:py-24 bg-cream border-y border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.14em] uppercase text-primary-dark mb-3">
              <Utensils className="w-4 h-4 text-primary" />
              <span>FRESH & NUTRITIOUS HOSPITALITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              A Sample Taste of Our Daily Menu
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Meals are prepared from scratch every single day, with complete personalization for diabetic, low-sodium, vegetarian, and texture-modified diets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleMenu.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-card bg-white border border-border/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60">
                    <span className="font-display font-bold text-lg text-primary">
                      {item.meal}
                    </span>
                    <Coffee className="w-4 h-4 text-primary/70" />
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    {item.items}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
                  Individual requests welcome
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAButton to="/contact" variant="primary" size="lg">
              Arrange a Visit & Meet Our Chef
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};
