import React from "react";
import { Link } from "react-router-dom";
import { AccommodationItem } from "@/data/facilities";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoomCardProps {
  item: AccommodationItem;
  className?: string;
}

export const RoomCard: React.FC<RoomCardProps> = ({ item, className }) => {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between overflow-hidden rounded-card bg-white border border-border/70 shadow-sm transition-all duration-300 hover:-translate-y-[3px] hover:border-primary/40 hover:shadow-soft",
        className
      )}
    >
      <div>
        {/* Image Container with natural aspect ratio */}
        <div className="relative aspect-[16/10] overflow-hidden bg-sage-100">
          <img
            src={item.imageUrl}
            alt={item.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 via-transparent to-transparent opacity-30" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-sage-50 text-foreground/80 border border-border/50"
                >
                  <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/accommodation#${item.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded py-1"
        >
          <span>Explore Accommodation</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};
