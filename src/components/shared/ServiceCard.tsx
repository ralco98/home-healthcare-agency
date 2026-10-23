import React from "react";
import { Link } from "react-router-dom";
import { CareService } from "@/data/services";
import {
  Home,
  HeartHandshake,
  CalendarClock,
  Stethoscope,
  Sparkles,
  Users,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Home,
  HeartHandshake,
  CalendarClock,
  Stethoscope,
  Sparkles,
  Users,
};

interface ServiceCardProps {
  service: CareService;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => {
  const IconComponent = iconMap[service.iconName] || Home;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between p-6 sm:p-7 rounded-card bg-white border border-border/70 shadow-sm transition-all duration-300 hover:-translate-y-[3px] hover:border-primary/40 hover:shadow-soft",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-sage-100 text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
            <IconComponent className="w-6 h-6 transition-transform group-hover:scale-105" aria-hidden="true" />
          </div>
          {service.badge && (
            <span className="text-[11px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded-full bg-sage-100 text-primary-dark">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {service.details && (
          <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
            {service.details.slice(0, 2).map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-border/50">
        <Link
          to={service.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded py-1"
        >
          <span>Learn about this service</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};
