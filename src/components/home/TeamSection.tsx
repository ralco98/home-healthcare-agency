import React from "react";
import { teamProfiles } from "@/data/team";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import { Check } from "lucide-react";

export const TeamSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="THE PEOPLE WHO MAKE IT HOME"
            title="Care begins with the people."
            description="Our team works to create a welcoming environment where residents are treated with kindness, dignity, and respect."
            align="center"
            className="mb-14 sm:mb-16"
          />
        </Reveal>

        {/* Team Profile Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {teamProfiles.map((member) => (
            <StaggerItem key={member.id}>
              <div className="group h-full flex flex-col justify-between rounded-card bg-surface border border-border/70 overflow-hidden shadow-xs hover:shadow-soft hover:border-primary/40 transition-all duration-300">
                <div>
                  {/* Portrait photo */}
                  <div className="relative aspect-[4/4.5] overflow-hidden bg-sage-200">
                    <img
                      src={member.imageUrl}
                      alt={member.role}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 via-transparent to-transparent opacity-40" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono tracking-wider uppercase text-white bg-dark-green/80 px-2 py-0.5 rounded backdrop-blur-xs">
                      {member.department}
                    </span>
                  </div>

                  {/* Bio & Details */}
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {member.role}
                    </h3>

                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>

                    {/* Core Responsibilities */}
                    <div className="mt-4 pt-3 border-t border-border/60 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase text-primary font-bold tracking-wider block">
                        Key Leadership Focus:
                      </span>
                      {member.responsibilities.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <span className="text-[11px] font-mono text-muted-foreground block text-right">
                    Verified Care Lead
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <Reveal delay={0.25} className="mt-14 text-center">
          <CTAButton to="/meet-the-team" variant="secondary" size="lg" icon>
            Get to Know Our Team
          </CTAButton>
        </Reveal>

      </div>
    </section>
  );
};
