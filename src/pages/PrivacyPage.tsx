import React, { useEffect } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { siteConfig } from "@/data/siteConfig";

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = `Privacy Policy | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="LEGAL & DATA GOVERNANCE"
        title="Privacy Policy & Information Notice"
        description="We are committed to safeguarding personal information with transparency, respect, and rigorous compliance."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-card bg-white border border-border/80 shadow-xs prose prose-slate max-w-none space-y-6 text-foreground text-sm sm:text-base leading-relaxed">
            
            <p className="text-muted-foreground italic text-xs">
              Last updated: October 2026. Applicable to {siteConfig.name} and {siteConfig.tradingName}.
            </p>

            <h2 className="text-xl font-bold font-display text-foreground pt-2">
              1. Our Principles Regarding Your Personal Data
            </h2>
            <p>
              At {siteConfig.name}, we treat prospective residents and their families with the highest standards of dignity and privacy. This Privacy Notice describes what information we collect when you visit our website, submit an enquiry, or request a tour, and how we keep that information safe.
            </p>

            <h2 className="text-xl font-bold font-display text-foreground pt-2">
              2. What Information We Collect via This Website
            </h2>
            <p>
              When you submit a care enquiry, visit request, or job application through our website forms, we collect only the minimal information necessary to respond to your request:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
              <li>Your name and contact details (email address and telephone number).</li>
              <li>Your preferred contact method and ideal tour date.</li>
              <li>General questions or care context you choose to share in the message box.</li>
              <li>For career applicants: work history summaries, selected positions, and cover notes.</li>
            </ul>

            <div className="p-4 rounded-xl bg-sage-50 border border-border/60 text-xs sm:text-sm text-foreground">
              <strong>Notice Regarding Sensitive Health & Medical Data:</strong> Our website marketing forms are intentionally designed NOT to collect detailed medical records, diagnosis files, or special-category personal data. Confidential health assessments are conducted in person or via verified secure medical channels during the formal admissions assessment.
            </div>

            <h2 className="text-xl font-bold font-display text-foreground pt-2">
              3. How We Use Your Information
            </h2>
            <p>
              We process your submitted data strictly for legitimate operational purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
              <li>To contact you and answer questions regarding care options, room availability, and fees.</li>
              <li>To schedule and confirm personal visits and tour arrangements.</li>
              <li>To evaluate employment applications for open positions.</li>
            </ul>
            <p>
              We never sell, rent, or trade your contact information to third-party marketing companies or brokers.
            </p>

            <h2 className="text-xl font-bold font-display text-foreground pt-2">
              4. Data Security & Storage
            </h2>
            <p>
              All communications between your browser and our website are encrypted using industry-standard SSL/TLS protocols. Access to submitted enquiries is restricted to authorized admissions and management personnel who have received comprehensive confidentiality training.
            </p>

            <h2 className="text-xl font-bold font-display text-foreground pt-2">
              5. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or ask us to delete your enquiry contact details at any time.
            </p>

            <h2 className="text-xl font-bold font-display text-foreground pt-2">
              6. Contact Our Privacy Lead
            </h2>
            <p>
              If you have any questions or requests regarding your data, please contact our management team:
            </p>
            <div className="p-4 rounded-xl bg-cream border border-border/70 text-xs sm:text-sm">
              <p><strong>{siteConfig.name} Data Privacy Officer</strong></p>
              <p>Address: {siteConfig.contact.address.full}</p>
              <p>Email: {siteConfig.contact.email}</p>
              <p>Phone: {siteConfig.contact.phoneDisplay}</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
