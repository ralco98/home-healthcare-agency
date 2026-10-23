import React from "react";
import { faqs } from "@/data/faqs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/shared/Accordion";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column (5 cols) - Heading, reassurance, contact CTA */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow="HELPFUL INFORMATION"
                title="Questions, answered with care."
                description="Choosing a care home involves important decisions. If you need more information, our team is here to help you understand the process."
                align="left"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="p-6 rounded-card bg-cream border border-border/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest-800 text-white flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-sage-200" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground">
                      Prefer to speak directly?
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      No question is too small or too early.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed">
                  Call our admissions team directly at{" "}
                  <strong className="text-foreground">{siteConfig.contact.phoneDisplay}</strong> or
                  arrange a quiet conversation with our manager.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <CTAButton to="/contact" variant="primary" size="md">
                    Speak to Our Team
                  </CTAButton>
                  <CTAButton to="/families" variant="secondary" size="md">
                    View Family Guide
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (7 cols) - Accessible Accordion */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="bg-surface rounded-card p-6 sm:p-8 border border-border/80 shadow-xs">
                <Accordion type="single" collapsible defaultValue="care-types" className="w-full">
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
