import React, { useEffect } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/data/siteConfig";
import {
  ShieldCheck,
  Heart,
  UserCheck,
  CheckCircle,
  Building,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = `About Us | Our Story & Care Philosophy | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="OUR STORY & VALUES"
        title="Good care starts with feeling at home."
        description="We believe care is about much more than medical tasks. It is about understanding each person's story, respecting their habits, and cultivating a community grounded in genuine warmth."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Story & Philosophy Section */}
      <section className="py-16 md:py-24 bg-background border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
                OUR CARE PHILOSOPHY
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                A boutique residential approach, rooted in dignity.
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                At {siteConfig.name}, our aim is to create an environment where every resident is recognised as an individual. We want people to feel welcomed, listened to, and supported in ways that respect their preferences and independence.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Too often, senior care facilities feel clinical, sterile, or rigid in routine. We consciously created our home to feel like a gracious residential home: filled with natural daylight, comfortable domestic furniture, the aroma of home-baked bread, and staff who have time for a relaxed chat.
              </p>

              <div className="p-6 rounded-xl bg-sage-50 border border-border/70 space-y-3">
                <h3 className="font-display font-bold text-base text-foreground">
                  Our Uncompromising Service Commitments:
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Every resident sets their own waking, sleeping, and dining schedule.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Personal rooms can be decorated with cherished artwork, armchairs, and heirlooms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Families maintain unrestricted daily visiting rights and complete transparency.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Panel (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[16px] overflow-hidden border border-border shadow-lift aspect-[4/5] bg-sage-100">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                  alt="Care home staff listening attentively to a resident"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Verified Business, Regulatory & Heritage Details */}
      <section className="py-16 md:py-20 bg-cream border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
              TRANSPARENCY & ACCREDITATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
              Verified Business & Community Governance
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We strictly adhere to ethical business practices and regulatory compliance. All details below reflect our verified organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-card bg-white border border-border/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center">
                <Building className="w-5 h-5 text-sage-200" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">
                Registered Organization
              </h3>
              <p className="text-sm text-muted-foreground">
                Operating legally as <strong className="text-foreground">{siteConfig.tradingName}</strong> and {siteConfig.name}.
              </p>
              <div className="pt-2 text-xs font-mono text-primary font-semibold">
                Licensed Care Facility
              </div>
            </div>

            <div className="p-6 rounded-card bg-white border border-border/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center">
                <MapPin className="w-5 h-5 text-sage-200" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">
                Verified Address
              </h3>
              <p className="text-sm text-muted-foreground">
                {siteConfig.contact.address.full}
              </p>
              <div className="pt-2 text-xs font-mono text-primary font-semibold">
                Plus Code: {siteConfig.contact.plusCode}
              </div>
            </div>

            <div className="p-6 rounded-card bg-white border border-border/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center">
                <Heart className="w-5 h-5 text-sage-200" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">
                Inclusive Community
              </h3>
              <p className="text-sm text-muted-foreground">
                Proudly verified LGBTQ+ friendly, multicultural, and welcoming seniors from all walks of life with equal warmth and dignity.
              </p>
              <div className="pt-2 text-xs font-mono text-primary font-semibold">
                Equality & Dignity Standard
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Experience our home in person
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            The best way to know if our home is right for your family is to visit, meet our care manager, and feel the atmosphere yourself.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <CTAButton to="/contact" variant="primary" size="lg">
              Arrange a Visit
            </CTAButton>
            <CTAButton to="/meet-the-team" variant="secondary" size="lg">
              Meet Our Team
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};
