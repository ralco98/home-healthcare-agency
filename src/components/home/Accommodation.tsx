import React from "react";
import { accommodationItems, facilityHighlights } from "@/data/facilities";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RoomCard } from "@/components/shared/RoomCard";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import {
  ShieldCheck,
  Accessibility,
  Wifi,
  Car,
  Sparkles,
  Armchair,
  Coffee,
  Trees,
  DoorOpen,
} from "lucide-react";

const facilityIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-primary" />,
  Accessibility: <Accessibility className="w-5 h-5 text-primary" />,
  Wifi: <Wifi className="w-5 h-5 text-primary" />,
  Car: <Car className="w-5 h-5 text-primary" />,
  Sparkles: <Sparkles className="w-5 h-5 text-primary" />,
  Armchair: <Armchair className="w-5 h-5 text-primary" />,
  Coffee: <Coffee className="w-5 h-5 text-primary" />,
  Trees: <Trees className="w-5 h-5 text-primary" />,
};

export const Accommodation: React.FC = () => {
  // Show the primary 3 requested categories on home page
  const displayItems = accommodationItems.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="YOUR SPACE, YOUR COMFORT"
            title="Comfortable rooms. Thoughtful details."
            description="Explore spaces designed to feel welcoming, familiar, and comfortable, with practical support for everyday living."
            align="center"
            className="mb-14 sm:mb-16"
          />
        </Reveal>

        {/* 3 Visual Cards */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {displayItems.map((item) => (
            <StaggerItem key={item.id}>
              <RoomCard item={item} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Verified Facility Amenities Bar */}
        <Reveal delay={0.2} className="mt-14 pt-10 border-t border-border/60">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
              COMFORTS & ACCESSIBLE AMENITIES
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {facilityHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-sage-50/70 border border-border/50 text-foreground"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-border/60 flex items-center justify-center flex-shrink-0 shadow-xs">
                  {facilityIconMap[highlight.icon] || <Sparkles className="w-4 h-4 text-primary" />}
                </div>
                <span className="text-xs font-semibold leading-tight">
                  {highlight.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Room Availability Callout */}
        <Reveal delay={0.3} className="mt-14">
          <div className="rounded-card bg-cream border border-border p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-forest-800 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <DoorOpen className="w-6 h-6 text-sage-200" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                  Looking for a room?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                  Contact our team to discuss current availability, room suitability, and how we can tailor accommodations to personal preferences.
                </p>
              </div>
            </div>

            <CTAButton to="/contact" variant="primary" size="lg" className="flex-shrink-0">
              Ask About Availability
            </CTAButton>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
