import React from "react";
import { admissionSteps } from "@/data/admissionsSteps";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import { PhoneCall, Calendar, FileHeart, CheckCircle2, LucideIcon } from "lucide-react";

const stepIcons: Record<string, LucideIcon> = {
  PhoneCall,
  Calendar,
  FileHeart,
  CheckCircle2,
};

export const AdmissionsProcess: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-sage-100/60 border-b border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="YOUR NEXT STEPS"
            title="Finding the right care, made clearer."
            description="We know choosing a care home can feel like a big decision. Our team will help you understand the options and take things one step at a time."
            align="center"
            className="mb-14 sm:mb-16"
          />
        </Reveal>

        {/* 4-Step Grid: Horizontal on Desktop, Timeline on Mobile */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative"
        >
          {admissionSteps.map((step, idx) => {
            const Icon = stepIcons[step.iconName] || PhoneCall;
            return (
              <StaggerItem key={step.stepNumber}>
                <div className="relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-card bg-white border border-border shadow-xs hover:shadow-soft hover:border-primary/40 transition-all duration-300">
                  {/* Decorative Number */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-3xl sm:text-4xl font-extrabold text-sage-300 tracking-tight">
                        {step.stepNumber}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-sage-100 text-primary flex items-center justify-center">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl text-foreground tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/50 text-xs text-muted-foreground font-medium">
                    Step {idx + 1} of 4
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Responsible note & Bottom CTA */}
        <Reveal delay={0.25} className="mt-14 text-center space-y-5 max-w-2xl mx-auto">
          <p className="text-xs text-muted-foreground italic">
            * Suitability, current room availability, comprehensive assessments, and funding arrangements are confirmed collaboratively before any placement is agreed.
          </p>

          <div className="pt-2">
            <CTAButton to="/admissions" variant="primary" size="lg">
              Talk to Our Admissions Team
            </CTAButton>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
