import React from "react";
import { Link } from "react-router-dom";
import { CTAButton } from "@/components/shared/CTAButton";
import { HeartHandshake, Calendar, CheckCircle2, Star, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { motion, useReducedMotion } from "framer-motion";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      {/* Subtle organic background gradients */}
      <div
        className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary-light/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cream blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px] lg:min-h-[660px]">
          
          {/* Left Panel (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-7 z-10">
            {/* Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.14em] uppercase text-primary-dark"
            >
              <span className="w-8 h-[2px] rounded-full bg-primary inline-block" aria-hidden="true" />
              <span>A PLACE TO CALL HOME</span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-[-0.04em] text-foreground leading-[1.06]"
            >
              Exceptional care.{" "}
              <span className="text-primary block sm:inline">
                A life well lived.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground font-normal leading-relaxed max-w-2xl"
            >
              Discover a welcoming home where compassionate care, familiar routines, meaningful friendships, and individual choice come together every day.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <CTAButton to="/contact" variant="primary" size="lg">
                Arrange a Visit
              </CTAButton>
              <CTAButton to="/care-services" variant="secondary" size="lg" icon>
                Explore Our Care
              </CTAButton>
            </motion.div>

            {/* Compact Trust Indicators */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-4 border-t border-border/70 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Individualised Care</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Warm, Welcoming Spaces</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Families Always Welcome</span>
              </div>
            </motion.div>

            {/* Verified Google Review Proof Strip */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="flex items-center gap-3 text-xs text-muted-foreground pt-1"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span>
                <strong className="text-foreground font-semibold">{siteConfig.reassurance.rating}</strong> out of 5 based on{" "}
                <span className="underline">{siteConfig.reassurance.reviewCount} verified Google reviews</span>
              </span>
            </motion.div>
          </div>

          {/* Right Panel (5 cols on desktop) - Lifestyle Photograph & Floating Cards */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative rounded-[16px] overflow-hidden border border-border/80 shadow-lift bg-sage-100 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] max-h-[600px] w-full"
            >
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                alt="Bright residential care home lounge with natural daylight where an older adult and a caring staff member share a cheerful, dignified conversation"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />

              {/* Restrained cream gradient at the bottom for legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-dark-green/40 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </motion.div>

            {/* Floating Card 1 — A Personal Approach (Bottom-left over photo on desktop) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden sm:flex absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-[12px] border border-border shadow-lift max-w-xs items-start gap-3.5 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-sage-100 text-primary flex items-center justify-center flex-shrink-0">
                <HeartHandshake className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-primary-dark block">
                  CARE THAT FEELS PERSONAL
                </span>
                <p className="text-xs font-bold text-foreground">
                  Every resident is an individual.
                </p>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  Care shaped around their needs, preferences, and routines.
                </p>
              </div>
            </motion.div>

            {/* Floating Card 2 — A Warm Welcome (Top-right) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="hidden sm:flex absolute -top-5 -right-5 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-[12px] border border-border shadow-lift max-w-[240px] items-start gap-3 z-20"
            >
              <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-primary-dark block">
                  FAMILIES ARE WELCOME
                </span>
                <p className="text-xs font-semibold text-foreground">
                  Come and see life here for yourself.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
