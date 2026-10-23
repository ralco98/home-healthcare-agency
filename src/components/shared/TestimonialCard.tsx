import React from "react";
import { Testimonial } from "@/data/testimonials";
import { Star, CheckCircle, ExternalLink, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between p-6 sm:p-7 rounded-card bg-white border border-border/80 shadow-sm transition-all duration-300 hover:shadow-soft hover:border-primary/30",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          {/* Star Rating */}
          <div className="flex items-center gap-1 text-amber-500" aria-label={`${testimonial.rating} out of 5 stars`}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>

          {/* Verification indicator */}
          {testimonial.verified && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-primary font-medium px-2 py-0.5 rounded-full bg-sage-100">
              <CheckCircle className="w-3 h-3 text-primary" aria-hidden="true" />
              <span>Verified Review</span>
            </span>
          )}
        </div>

        {/* Quote Icon Background */}
        <Quote className="w-8 h-8 text-sage-200/60 mb-2" aria-hidden="true" />

        {/* Quote */}
        <blockquote className="text-sm sm:text-base text-foreground leading-relaxed italic">
          "{testimonial.quote}"
        </blockquote>
      </div>

      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
        <div>
          <cite className="not-italic font-bold text-sm text-foreground block">
            {testimonial.author}
          </cite>
          <span className="text-xs text-muted-foreground block">
            {testimonial.relationship}
          </span>
        </div>

        {testimonial.sourceUrl && (
          <a
            href={testimonial.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-dark font-medium underline underline-offset-2"
            title={`View on ${testimonial.source}`}
          >
            <span>{testimonial.source}</span>
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
};
