import React, { useEffect } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { teamProfiles } from "@/data/team";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/data/siteConfig";
import { Check, ShieldCheck, Heart, Award, GraduationCap } from "lucide-react";

export const TeamPage: React.FC = () => {
  useEffect(() => {
    document.title = `Meet the Team | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="OUR DEDICATED PEOPLE"
        title="Care begins with compassionate people."
        description="Our multi-disciplinary team brings together experienced managers, registered nurses, dedicated senior caregivers, creative activity leads, and talented chefs all united by a devotion to resident dignity."
        breadcrumbs={[{ label: "Meet the Team" }]}
      />

      {/* Team Profiles Grid */}
      <section className="py-16 md:py-24 bg-background border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {teamProfiles.map((member) => (
              <div
                key={member.id}
                className="p-8 sm:p-10 rounded-card bg-white border border-border/80 shadow-xs flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
              >
                {/* Photo */}
                <div className="w-full sm:w-44 aspect-square rounded-2xl overflow-hidden bg-sage-200 flex-shrink-0 border border-border">
                  <img
                    src={member.imageUrl}
                    alt={member.role}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="space-y-3 flex-1">
                  <span className="text-[11px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded bg-sage-100 text-primary-dark">
                    {member.department}
                  </span>

                  <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                    {member.role}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>

                  <div className="pt-2 border-t border-border/60 space-y-1.5">
                    <span className="text-xs font-mono font-bold uppercase text-foreground">
                      Core Responsibilities:
                    </span>
                    {member.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staffing Standards & Vetting */}
      <section className="py-16 bg-cream border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
              HOW WE CHOOSE OUR TEAM
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
              Rigorous Recruitment, Continuous Training & Heart
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We choose caregivers based on kindness, patience, and character as much as clinical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-card bg-white border border-border/80 shadow-xs space-y-3">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">
                Rigorous Background Vetting
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Full criminal record background checks, detailed professional reference verifications, and drug screening before any candidate steps into our home.
              </p>
            </div>

            <div className="p-6 rounded-card bg-white border border-border/80 shadow-xs space-y-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">
                Dementia & Dignity Certifications
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Ongoing specialist training in dementia support, person-centred communication, safe transfer techniques, and dignified palliative care.
              </p>
            </div>

            <div className="p-6 rounded-card bg-white border border-border/80 shadow-xs space-y-3">
              <Heart className="w-8 h-8 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">
                Living Wage & Valued Teams
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We reward our carers fairly so they stay with us long term, ensuring familiar faces and genuine emotional bonds for your loved ones.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <CTAButton to="/contact" variant="primary" size="lg">
              Book a Tour & Meet Us in Person
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};
