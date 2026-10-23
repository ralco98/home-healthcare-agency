import React from "react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import { Star, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Testimonials: React.FC = () => {
  // Show top 3 featured verified reviews on home
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-background border-b border-border/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-6">
            <SectionHeading
              eyebrow="WORDS FROM FAMILIES"
              title="Trust built through everyday care."
              description="Choosing a care home is personal. Families deserve clear information, thoughtful communication, and the opportunity to understand what life here is really like."
              align="center"
            />

            {/* Proof badge */}
            <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-border shadow-xs mt-6">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-xs font-medium text-foreground">
                <strong className="font-bold">{siteConfig.reassurance.rating}</strong> Rating ({siteConfig.reassurance.reviewCount} Verified Google Reviews)
              </span>
              <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
          </div>
        </Reveal>

        {/* 3-Column Desktop Grid / Horizontal Snap Scroll on Mobile */}
        <StaggerContainer
          staggerDelay={0.1}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {displayTestimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Verification note & CTA */}
        <Reveal delay={0.25} className="mt-14 text-center space-y-4">
          <p className="text-xs text-muted-foreground font-mono">
            * All displayed reviews are genuine, unedited feedback published publicly by clients and families on Google.
          </p>
          <div>
            <CTAButton to="/contact" variant="primary" size="lg">
              Arrange a Visit and See for Yourself
            </CTAButton>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
