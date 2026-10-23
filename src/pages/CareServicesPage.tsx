import React, { useEffect } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { careServices } from "@/data/services";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/data/siteConfig";
import { Check, ShieldCheck, HeartHandshake, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CareServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = `Our Care Services | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="TAILORED SUPPORT"
        title="Compassionate care designed around you."
        description="Every person's needs, preferences, and daily rhythms are unique. We take the time to listen, understand, and provide support that respects independence and dignity."
        breadcrumbs={[{ label: "Care Services" }]}
      />

      {/* Main Services Deep-Dive Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {careServices.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-card bg-white border border-border/80 shadow-xs"
              >
                {/* Left Description Column */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-3">
                    {service.badge && (
                      <span className="text-[11px] font-mono tracking-wider font-semibold uppercase px-3 py-1 rounded-full bg-sage-100 text-primary-dark">
                        {service.badge}
                      </span>
                    )}
                    <span className="text-xs font-mono text-muted-foreground uppercase">
                      Category {index + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-base text-primary font-medium">
                    {service.tagline}
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-2 space-y-2.5">
                    <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-foreground">
                      What is included:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground/80">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitability Note */}
                  <div className="p-4 rounded-xl bg-sage-50 border border-border/60 text-xs text-foreground/90">
                    <strong className="font-semibold text-primary-dark block mb-0.5">
                      Suitability & Assessment:
                    </strong>
                    {service.suitabilityNote}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-2 flex flex-wrap gap-4">
                    <CTAButton to="/contact" variant="primary" size="md">
                      Enquire About {service.title}
                    </CTAButton>
                    <CTAButton to="/admissions" variant="secondary" size="md">
                      How Admission Works
                    </CTAButton>
                  </div>
                </div>

                {/* Right Visual Panel */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-[16px] overflow-hidden border border-border shadow-lift aspect-[4/3] bg-sage-100">
                    <img
                      src={
                        index === 0
                          ? "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                          : index === 1
                          ? "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                          : index === 2
                          ? "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
                          : index === 3
                          ? "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                          : index === 4
                          ? "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
                          : "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                      }
                      alt={service.title}
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

      {/* Assessment Reassurance Banner */}
      <section className="py-16 bg-cream border-b border-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-forest-800 text-white flex items-center justify-center mx-auto">
            <HeartHandshake className="w-6 h-6 text-sage-200" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Our Commitment to Transparent Assessment
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We never make generic promises. Before welcoming any resident, our registered care leads carry out a detailed, respectful assessment to confirm whether our home, staffing, and facilities can properly support your loved one's specific requirements.
          </p>
          <div className="pt-2">
            <CTAButton to="/contact" variant="primary" size="lg">
              Book a Confidential Consultation
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};
