import React, { useEffect } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/shared/Accordion";
import {
  Heart,
  MessageSquare,
  Clock,
  ClipboardList,
  CheckCircle,
  Phone,
  Calendar,
} from "lucide-react";

export const FamiliesPage: React.FC = () => {
  useEffect(() => {
    document.title = `Information for Families | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  const checklistItems = [
    "Arrange an initial visit and tour together with family members",
    "Gather medical summaries, current prescriptions, and specialist notes",
    "List preferred daily habits: waking times, favourite meals, and hobbies",
    "Select comforting bedroom furnishings: framed family photos, favourite books & armchair",
    "Confirm communication preferences: designated family contacts for updates",
    "Schedule move-in day with our admissions lead during quiet morning hours",
  ];

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="SUPPORT FOR FAMILIES"
        title="We are here for your entire family."
        description="Choosing a care home is an emotional journey. We partner with families at every step, offering honest answers, open visiting hours, and ongoing peace of mind."
        breadcrumbs={[{ label: "Families" }]}
      />

      {/* Visiting & Family Partnership Pillars */}
      <section className="py-16 md:py-20 bg-background border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-card bg-white border border-border/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sage-100 text-primary flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Flexible Visiting Hours
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Visiting hours are 9:00 AM – 7:30 PM daily, with complete flexibility for family schedules. Enjoy lunch together, sit in the courtyard garden, or join afternoon tea.
              </p>
              <div className="pt-2 text-xs font-mono text-primary font-semibold">
                No appointment needed for regular visits
              </div>
            </div>

            <div className="p-8 rounded-card bg-white border border-border/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sage-100 text-primary flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Dedicated Communication
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You will have a named Key Worker and nurse contact. We provide prompt updates on routine health changes, medical reviews, or whenever you call for an update.
              </p>
              <div className="pt-2 text-xs font-mono text-primary font-semibold">
                Regular scheduled care plan reviews
              </div>
            </div>

            <div className="p-8 rounded-card bg-white border border-border/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sage-100 text-primary flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Family Celebrations
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Private dining areas can be booked for resident birthdays, anniversaries, and family reunions. Children and well-behaved family dogs are warmly welcomed!
              </p>
              <div className="pt-2 text-xs font-mono text-primary font-semibold">
                Complimentary tea & coffee lounge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Checklist */}
      <section className="py-16 md:py-24 bg-cream border-b border-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
              STEP-BY-STEP GUIDANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
              Preparing for the Transition: A Family Checklist
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Moving into residential care is smoother when taken in thoughtful, gentle steps. Here is how we recommend preparing.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-card bg-white border border-border/80 shadow-xs space-y-4">
            <div className="space-y-3.5">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground italic">
                Our admissions coordinator is on hand to guide you through every item.
              </span>
              <CTAButton to="/contact" variant="primary" size="md">
                Talk to Admissions
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Full Family FAQ Accordion */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-foreground mt-2">
              Everything Families Ask Us Most Often
            </h2>
          </div>

          <div className="bg-white rounded-card p-6 sm:p-10 border border-border/80 shadow-xs">
            <Accordion type="single" collapsible defaultValue="care-types" className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};
