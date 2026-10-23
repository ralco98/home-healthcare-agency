import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  className,
}) => {
  return (
    <div
      className={cn(
        "relative pt-32 pb-16 sm:pb-20 md:pb-24 bg-cream/70 border-b border-border/80 overflow-hidden",
        className
      )}
    >
      {/* Subtle organic background decoration */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-light/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-sage-200/40 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-6" aria-label="Breadcrumb">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-border" aria-hidden="true" />
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Eyebrow */}
        {eyebrow && (
          <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-[0.14em] uppercase text-primary-dark mb-3">
            <span className="w-6 h-[2px] rounded-full bg-primary inline-block" aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-[-0.035em] leading-[1.08] max-w-4xl">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
