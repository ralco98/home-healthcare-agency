import React, { useEffect } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { accommodationItems, facilityHighlights } from "@/data/facilities";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/data/siteConfig";
import { Check, ShieldCheck, Armchair, DoorOpen, Sparkles } from "lucide-react";

export const AccommodationPage: React.FC = () => {
  useEffect(() => {
    document.title = `Accommodation & Living Spaces | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="YOUR SPACE, YOUR COMFORT"
        title="Living spaces designed to feel like home."
        description="Thoughtfully appointed private bedrooms, airy shared lounges, fragrant gardens, and welcoming dining rooms designed for safety, comfort, and independence."
        breadcrumbs={[{ label: "Accommodation" }]}
      />

      {/* Main Living Spaces Showcase */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {accommodationItems.map((item, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={item.id}
                id={item.id}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-card bg-white border border-border/80 shadow-xs"
              >
                {/* Details Column */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
                    Area 0{index + 1}
                  </span>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                    {item.title}
                  </h2>

                  <p className="text-base text-primary font-medium">
                    {item.subtitle}
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.longDescription}
                  </p>

                  {/* Features List */}
                  <div className="pt-2 space-y-2.5">
                    <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">
                      Key Highlights & Inclusions:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground/80">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap gap-4">
                    <CTAButton to="/contact" variant="primary" size="md">
                      Ask About Current Availability
                    </CTAButton>
                    <CTAButton to="/contact" variant="secondary" size="md">
                      Book a Personal Tour
                    </CTAButton>
                  </div>
                </div>

                {/* Imagery Column */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-[16px] overflow-hidden border border-border shadow-lift aspect-[4/3] bg-sage-100">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
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

      {/* Personal Belongings & Furniture Policy */}
      <section className="py-16 bg-cream border-y border-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-card bg-white border border-border/80 shadow-xs flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-forest-800 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Armchair className="w-8 h-8 text-sage-200" aria-hidden="true" />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display font-bold text-2xl text-foreground">
                Our Personal Belongings Welcome Policy
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We believe familiar surrounds bring comfort and emotional ease. All residents are invited to bring personal photographs, favourite armchairs, reading lamps, framed art, and treasured bed quilts. Our maintenance team will happily assist with hanging pictures and positioning furniture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
