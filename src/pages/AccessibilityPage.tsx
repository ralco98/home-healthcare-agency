import React, { useEffect } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { siteConfig } from "@/data/siteConfig";
import { CheckCircle, Eye, Keyboard, Sparkles, Volume2 } from "lucide-react";

export const AccessibilityPage: React.FC = () => {
  useEffect(() => {
    document.title = `Accessibility Statement | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="INCLUSION & STANDARDS"
        title="Accessibility Statement"
        description="We are committed to making our digital website and physical care home welcoming, legible, and completely accessible to everyone."
        breadcrumbs={[{ label: "Accessibility" }]}
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-card bg-white border border-border/80 shadow-xs space-y-8 text-foreground text-sm sm:text-base leading-relaxed">
            
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-foreground">
                Our Ongoing Accessibility Commitment
              </h2>
              <p className="mt-2 text-muted-foreground">
                {siteConfig.name} strives to ensure that its services and digital spaces are accessible to people with disabilities. We believe every person has the right to live with dignity, equality, and independence.
              </p>
            </div>

            {/* Core Accessibility Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-5 rounded-xl bg-sage-50 border border-border/60 space-y-2">
                <Eye className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground text-sm">Visual Clarity & Contrast</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Generous text sizes (minimum 15px body), high-contrast colour ratios exceeding WCAG AA standards, and clear typographic hierarchy.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-sage-50 border border-border/60 space-y-2">
                <Keyboard className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground text-sm">Full Keyboard Navigation</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All interactive controls, accordion questions, mobile navigation, and forms can be fully navigated and operated using standard keyboard controls.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-sage-50 border border-border/60 space-y-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground text-sm">Reduced Motion Support</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We respect the <code className="font-mono text-xs">prefers-reduced-motion</code> browser setting. All animations and parallax effects are disabled automatically when requested.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-sage-50 border border-border/60 space-y-2">
                <Volume2 className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground text-sm">Screen Reader Semantics</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Semantic HTML5 landmark tags (<code className="font-mono text-xs">&lt;header&gt;</code>, <code className="font-mono text-xs">&lt;main&gt;</code>, <code className="font-mono text-xs">&lt;nav&gt;</code>, <code className="font-mono text-xs">&lt;footer&gt;</code>), explicit ARIA attributes, and descriptive image alt text.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border/70 space-y-3">
              <h2 className="text-lg font-bold font-display text-foreground">
                Physical Accessibility at Our Home
              </h2>
              <p className="text-muted-foreground">
                Our care facility in Philadelphia has been purpose-designed for level, barrier-free living:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/80 pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Step-free level access at all primary entrances, patios, and courtyard gardens.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Spacious modern lifts with acoustic announcements and low-level braille buttons.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Accessible ensuite wet rooms equipped with grab rails and level-entry showers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Dedicated accessible parking spaces located immediately adjacent to the entrance.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-cream border border-border/70 space-y-2">
              <h3 className="font-bold text-foreground text-base">Feedback & Accessible Formats</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                If you encounter any difficulty accessing information on this site or require a brochure in large print or audio format, please contact our team at{" "}
                <a href={`tel:${siteConfig.contact.phone}`} className="text-primary font-bold underline">
                  {siteConfig.contact.phoneDisplay}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary font-bold underline">
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
