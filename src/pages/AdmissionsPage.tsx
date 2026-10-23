import React, { useEffect } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { admissionSteps } from "@/data/admissionsSteps";
import { siteConfig } from "@/data/siteConfig";
import { Check, ShieldCheck, HelpCircle, PhoneCall, Calendar } from "lucide-react";

export const AdmissionsPage: React.FC = () => {
  useEffect(() => {
    document.title = `Admissions Process & Fees | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="ADMISSIONS & GUIDANCE"
        title="Finding the right care, made clearer."
        description="We understand that considering residential care is a significant step. Our experienced admissions team guides families through every detail with empathy, transparency, and no pressure."
        breadcrumbs={[{ label: "Admissions" }]}
      />

      {/* 4 Step Deep-Dive */}
      <section className="py-16 md:py-24 bg-background border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
              STEP-BY-STEP ADMISSIONS ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2">
              How the Admission Journey Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {admissionSteps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="p-8 sm:p-10 rounded-card bg-white border border-border/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
                    <span className="font-mono text-4xl font-extrabold text-sage-300">
                      {step.stepNumber}
                    </span>
                    <span className="text-xs font-mono font-semibold uppercase text-primary bg-sage-100 px-3 py-1 rounded-full">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-base text-primary font-medium">
                    {step.description}
                  </p>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">
                    Collaborative & Unhurried
                  </span>
                  <CTAButton to="/contact" variant="outline" size="sm">
                    Begin Step {idx + 1}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees & Funding Transparency */}
      <section className="py-16 md:py-24 bg-cream border-b border-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
              HONEST & CLEAR INFORMATION
            </span>
            <h2 className="text-3xl font-extrabold text-foreground">
              Understanding Care Fees & Inclusions
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We believe families deserve upfront clarity without hidden surprises. Fees are based on individual assessed support needs and accommodation selection.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-card bg-white border border-border/80 shadow-xs space-y-6">
            <h3 className="font-display font-bold text-xl text-foreground">
              What Is Covered in Our Comprehensive Care Fee:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/80">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>24-hour trained care assistance and wellbeing oversight</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Private furnished room with ensuite wet room</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>All daily freshly prepared 3-course meals, snacks & drinks</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Full laundry, bed linen service & daily room housekeeping</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Daily leisure activities, live music & gardening programs</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>High-speed Wi-Fi, heating & room utilities</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-sage-50 border border-border/60 text-xs text-muted-foreground leading-relaxed">
              * Personal incidentals (such as hairdressing, personal newspapers, bespoke private transport, or optional external trips) are itemized separately with prior family consent.
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/70">
              <div>
                <p className="font-bold text-foreground text-sm">Need a written fees breakdown?</p>
                <p className="text-xs text-muted-foreground">Our admissions lead will provide a transparent, personalized estimate.</p>
              </div>
              <CTAButton to="/contact" variant="primary" size="md">
                Request Fee Guidance
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Reassurance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <ShieldCheck className="w-12 h-12 text-primary mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            No Obligation, Respectful Assessment
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Our assessment process is designed to ensure safety and comfort. We are here to help you evaluate if our home is the ideal match for your loved one.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <CTAButton to="/contact" variant="primary" size="lg">
              Speak to Our Admissions Team
            </CTAButton>
            <CTAButton href={`tel:${siteConfig.contact.phone}`} variant="outline" size="lg">
              Call: {siteConfig.contact.phoneDisplay}
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};
