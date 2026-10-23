import React from "react";
import { careServices } from "@/data/services";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import { MessageCircleQuestion } from "lucide-react";

export const CareServices: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="CARE THAT STARTS WITH YOU"
            title="Support that respects every individual."
            description="Every person's needs are different. We take time to understand each resident's preferences, routines, and support requirements before discussing the right care arrangements."
            align="center"
            className="mb-14 sm:mb-16"
          />
        </Reveal>

        {/* Responsive Grid of Service Cards */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {careServices.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA Callout */}
        <Reveal delay={0.2} className="mt-14 sm:mt-16">
          <div className="max-w-3xl mx-auto rounded-card bg-cream p-6 sm:p-8 border border-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <MessageCircleQuestion className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  Not sure what type of care is right?
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Our friendly team is always here to listen, answer questions, and help you explore the options.
                </p>
              </div>
            </div>

            <CTAButton to="/contact" variant="primary" size="md" className="flex-shrink-0">
              Talk to Our Team
            </CTAButton>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
