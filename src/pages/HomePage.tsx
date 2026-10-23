import React, { useEffect } from "react";
import { Hero } from "@/components/home/Hero";
import { ReassuranceStrip } from "@/components/home/ReassuranceStrip";
import { CareServices } from "@/components/home/CareServices";
import { LifeAtHome } from "@/components/home/LifeAtHome";
import { Accommodation } from "@/components/home/Accommodation";
import { AdmissionsProcess } from "@/components/home/AdmissionsProcess";
import { TeamSection } from "@/components/home/TeamSection";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutSection } from "@/components/home/AboutSection";
import { FAQ } from "@/components/home/FAQ";
import { VisitCTA } from "@/components/home/VisitCTA";
import { ContactSection } from "@/components/home/ContactSection";
import { CareersCTA } from "@/components/home/CareersCTA";
import { siteConfig } from "@/data/siteConfig";

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = `${siteConfig.name} | Exceptional Care & Senior Living`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* SECTION 2 — Split Hero */}
      <Hero />

      {/* SECTION 3 — Reassurance Strip */}
      <ReassuranceStrip />

      {/* SECTION 4 — Our Care Services */}
      <CareServices />

      {/* SECTION 5 — Life at Willowbrook */}
      <LifeAtHome />

      {/* SECTION 6 — Accommodation and Facilities */}
      <Accommodation />

      {/* SECTION 7 — How Admission Works */}
      <AdmissionsProcess />

      {/* SECTION 8 — Meet the Team */}
      <TeamSection />

      {/* SECTION 9 — Family Testimonials and Reviews */}
      <Testimonials />

      {/* SECTION 10 — About Our Home */}
      <AboutSection />

      {/* SECTION 11 — Family Information and FAQ */}
      <FAQ />

      {/* SECTION 12 — Arrange a Visit CTA */}
      <VisitCTA />

      {/* SECTION 13 — Contact and Enquiry Form */}
      <ContactSection />

      {/* SECTION 14 — Careers */}
      <CareersCTA />
    </div>
  );
};
