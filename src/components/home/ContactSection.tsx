import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquiryFormSchema, EnquiryFormData } from "@/lib/validation";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ContactSectionProps {
  embedded?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ embedded = false }) => {
  const [submissionState, setSubmissionState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submissionMessage, setSubmissionMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      preferredContactMethod: "phone",
      enquiryType: "Arrange a visit",
      consent: true,
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmissionState("loading");
    try {
      // Simulate API integration point with network delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Demonstration Integration Endpoint:
      // In production, this forwards data to a secure endpoint, CRM (e.g. HubSpot/Salesforce) or admissions notification service.
      console.log("Enquiry Form Data (Ready for Backend/CRM integration):", data);

      setSubmissionState("success");
      setSubmissionMessage(
        `Thank you, ${data.fullName}. Your enquiry regarding "${data.enquiryType}" has been safely received. Our admissions team will contact you via your preferred method (${data.preferredContactMethod}) shortly.`
      );
      reset();
    } catch (err) {
      setSubmissionState("error");
      setSubmissionMessage(
        "We were unable to transmit your enquiry at this moment. Please call our team directly at " +
          siteConfig.contact.phoneDisplay
      );
    }
  };

  return (
    <section id="contact-enquiry" className="py-20 md:py-28 bg-surface border-b border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="We are here to help your family."
            description="Whether you have an immediate need for care, wish to schedule a personal tour, or simply want to explore possibilities, our compassionate team is always ready to talk."
            align="left"
            className="mb-14 sm:mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column (5 cols) - Contact Details, Hours & Directions */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal delay={0.1}>
              <div className="space-y-6 bg-white p-7 sm:p-8 rounded-card border border-border/80 shadow-xs">
                <h3 className="font-display font-bold text-xl text-foreground">
                  Contact Information
                </h3>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 text-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase text-muted-foreground block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-base font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {siteConfig.contact.hours.phoneHours}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase text-muted-foreground block">
                      Email Enquiries
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-base font-bold text-foreground hover:text-primary transition-colors break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase text-muted-foreground block">
                      Our Location
                    </span>
                    <p className="text-sm font-semibold text-foreground">
                      {siteConfig.contact.address.street}, {siteConfig.contact.address.unit}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                    </p>
                    <a
                      href={siteConfig.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:text-primary-dark mt-2 underline"
                    >
                      <span>Open in Google Maps / Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Hours & Visiting */}
                <div className="pt-4 border-t border-border/70 space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-foreground block">Reception Hours:</span>
                      <span className="text-muted-foreground">{siteConfig.contact.hours.reception}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-foreground block">Visiting Policy:</span>
                      <span className="text-muted-foreground">{siteConfig.contact.hours.visiting}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (7 cols) - Clean, Accessible Validated Enquiry Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="bg-white p-7 sm:p-10 rounded-card border border-border/80 shadow-xs">
                
                <div className="mb-6">
                  <h3 className="font-display font-bold text-2xl text-foreground tracking-tight">
                    Send a Care Enquiry or Request a Tour
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Please provide basic details below. We never share your contact details and do not request sensitive medical records online.
                  </p>
                </div>

                {/* Success Message Banner */}
                {submissionState === "success" && (
                  <div
                    className="mb-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3.5"
                    role="alert"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-bold">Enquiry Received</p>
                      <p className="mt-1 text-emerald-800">{submissionMessage}</p>
                      <button
                        type="button"
                        onClick={() => setSubmissionState("idle")}
                        className="mt-3 text-xs font-semibold text-emerald-700 underline"
                      >
                        Send another enquiry
                      </button>
                    </div>
                  </div>
                )}

                {/* Error Message Banner */}
                {submissionState === "error" && (
                  <div
                    className="mb-6 p-5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3.5"
                    role="alert"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-bold">Submission Issue</p>
                      <p className="mt-1 text-rose-800">{submissionMessage}</p>
                    </div>
                  </div>
                )}

                {submissionState !== "success" && (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        {...register("fullName")}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="e.g. Sarah Jenkins"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="sarah@example.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-xs text-rose-600 font-medium">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                          Phone Number <span className="text-muted-foreground font-normal">(Optional)</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="+1 (215) 555-0192"
                        />
                      </div>
                    </div>

                    {/* Preferred Contact Method & Enquiry Type Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="enquiryType" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                          Enquiry Type <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="enquiryType"
                          {...register("enquiryType")}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        >
                          <option value="Arrange a visit">Arrange a visit</option>
                          <option value="Ask about availability">Ask about availability</option>
                          <option value="Learn about care services">Learn about care services</option>
                          <option value="Discuss fees and funding">Discuss fees and funding</option>
                          <option value="Professional referral">Professional referral</option>
                          <option value="Careers">Careers</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="preferredContactMethod" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                          Preferred Contact Method
                        </label>
                        <select
                          id="preferredContactMethod"
                          {...register("preferredContactMethod")}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        >
                          <option value="phone">Phone call</option>
                          <option value="email">Email reply</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Visit Date */}
                    <div>
                      <label htmlFor="preferredVisitDate" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                        Preferred Visit Date <span className="text-muted-foreground font-normal">(Optional)</span>
                      </label>
                      <input
                        id="preferredVisitDate"
                        type="date"
                        {...register("preferredVisitDate")}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                        Your Message or Care Context <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register("message")}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-y"
                        placeholder="Please share a few details about the person seeking care and any specific questions you have..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-xs text-rose-600 font-medium">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Privacy & Consent Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register("consent")}
                          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-xs text-muted-foreground leading-normal">
                          I consent to Willowbrook Care Home storing and processing this enquiry information to respond to my request, in accordance with the{" "}
                          <Link to="/privacy-policy" className="text-primary underline font-medium">
                            Privacy Policy
                          </Link>
                          . Sensitive medical histories should not be submitted here and will be discussed privately with our care coordinators.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium">
                          {errors.consent.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <CTAButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting || submissionState === "loading"}
                      >
                        {submissionState === "loading" ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Securely...</span>
                          </span>
                        ) : (
                          "Send Care Enquiry"
                        )}
                      </CTAButton>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-muted-foreground pt-1">
                      <Lock className="w-3.5 h-3.5 text-sage-400" />
                      <span>Direct admissions integration · No spam guaranteed</span>
                    </div>
                  </form>
                )}

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
