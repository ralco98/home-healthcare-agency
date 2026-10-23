import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { careersFormSchema, CareersFormData } from "@/lib/validation";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { careerOpenings, employeeValues } from "@/data/careers";
import { siteConfig } from "@/data/siteConfig";
import {
  HeartHandshake,
  GraduationCap,
  Users,
  Clock,
  CheckCircle,
  Briefcase,
  AlertCircle,
  Loader2,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ReactNode> = {
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-primary" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-primary" />,
  Users: <Users className="w-6 h-6 text-primary" />,
  Clock: <Clock className="w-6 h-6 text-primary" />,
};

export const CareersPage: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [selectedRole, setSelectedRole] = useState<string>("Care Assistant / Senior Carer");

  useEffect(() => {
    document.title = `Careers & Employment | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersFormData>({
    resolver: zodResolver(careersFormSchema),
    defaultValues: {
      position: "Care Assistant / Senior Carer",
      experienceYears: "1-3 years",
      consent: true,
    },
  });

  const onSubmit = async (data: CareersFormData) => {
    setSubmissionStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("Career Application Data:", data);
      setSubmissionStatus("success");
      reset();
    } catch {
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="JOIN OUR TEAM"
        title="Make a genuine difference in people's lives."
        description="If you have a compassionate heart, respect for older adults, and a desire to work in an environment where your dedication is truly valued, we would love to hear from you."
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Workplace Values */}
      <section className="py-16 md:py-20 bg-background border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
              WHY WORK WITH US
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
              A Workplace Founded on Respect & Dignity
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We care for our team with the exact same compassion we extend to our residents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {employeeValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-card bg-white border border-border/80 shadow-xs space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center">
                  {iconMap[val.icon] || <HeartHandshake className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Vacancies List */}
      <section className="py-16 md:py-24 bg-cream border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="text-3xl font-extrabold text-foreground mt-2">
              Explore Our Open Positions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              All roles include paid induction, free uniforms, ongoing qualification support, and fair scheduling.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {careerOpenings.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-card bg-white border border-border/80 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-foreground">
                      {job.title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">
                      {job.department} · {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                    </span>
                  </div>
                  <span className="inline-block text-xs font-mono uppercase px-3 py-1 rounded-full bg-sage-100 text-primary-dark font-bold self-start sm:self-auto">
                    {job.employmentType}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {job.description}
                </p>

                <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-mono uppercase font-bold text-foreground mb-1.5">
                      Requirements:
                    </h4>
                    <ul className="space-y-1 text-xs text-foreground/80">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase font-bold text-foreground mb-1.5">
                      Qualities We Value:
                    </h4>
                    <ul className="space-y-1 text-xs text-foreground/80">
                      {job.qualities.map((qual, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <a
                    href="#apply-form"
                    onClick={() => setSelectedRole(job.title)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark underline"
                  >
                    <span>Apply for this role below</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section id="apply-form" className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-card border border-border/80 shadow-xs">
            <div className="mb-8">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
                JOIN OUR TEAM
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                Submit an Employment Application
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We review applications promptly and contact qualified candidates for an informal interview and home visit.
              </p>
            </div>

            {submissionStatus === "success" && (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3.5 mb-6">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-bold">Application Received</p>
                  <p className="mt-1 text-emerald-800">
                    Thank you for applying to Willowbrook Care Home. Our management team will review your application and get in touch shortly.
                  </p>
                </div>
              </div>
            )}

            {submissionStatus !== "success" && (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    {...register("fullName")}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Jane Doe"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="jane@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (267) 555-0182"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="position" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                      Role Applying For <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="position"
                      {...register("position")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="Care Assistant / Senior Carer">Care Assistant / Senior Carer</option>
                      <option value="Activities & Companionship Assistant">Activities & Companionship Assistant</option>
                      <option value="Night Care Assistant">Night Care Assistant</option>
                      <option value="Kitchen / Hospitality Support">Kitchen / Hospitality Support</option>
                      <option value="General Enquiry">General Care Employment Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experienceYears" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                      Relevant Care Experience <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="experienceYears"
                      {...register("experienceYears")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="Entry level (No previous experience - willing to train)">Entry level (Willing to train)</option>
                      <option value="1-2 years experience">1-2 years experience</option>
                      <option value="3-5 years experience">3-5 years experience</option>
                      <option value="5+ years senior care experience">5+ years senior care experience</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="coverNote" className="block text-xs font-mono font-semibold uppercase text-foreground mb-1.5">
                    Brief Introduction & Why You'd Like to Join <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="coverNote"
                    rows={4}
                    {...register("coverNote")}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                    placeholder="Tell us a little about your background, what motivates you to care for older adults, and what kind of shifts you are looking for..."
                  />
                  {errors.coverNote && (
                    <p className="mt-1 text-xs text-rose-600">{errors.coverNote.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("consent")}
                      className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-xs text-muted-foreground leading-normal">
                      I consent to Willowbrook Care Home processing my application details for recruitment purposes in accordance with the{" "}
                      <Link to="/privacy-policy" className="text-primary underline">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-xs text-rose-600">{errors.consent.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <CTAButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting || submissionStatus === "loading"}
                  >
                    {submissionStatus === "loading" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </CTAButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
