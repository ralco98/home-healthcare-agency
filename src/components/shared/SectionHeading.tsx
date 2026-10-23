import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightText,
  description,
  align = "left",
  theme = "light",
  className,
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "space-y-4 max-w-3xl",
        align === "center" ? "mx-auto text-center items-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2 text-xs font-mono font-medium tracking-[0.14em] uppercase",
            align === "center" && "justify-center",
            isDark ? "text-sage-300" : "text-primary-dark"
          )}
        >
          <span
            className={cn(
              "w-6 h-[2px] rounded-full inline-block",
              isDark ? "bg-sage-400" : "bg-primary"
            )}
            aria-hidden="true"
          />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.035em] leading-[1.12]",
          isDark ? "text-white" : "text-foreground"
        )}
      >
        {highlightText && title.includes(highlightText) ? (
          <>
            {title.split(highlightText)[0]}
            <span
              className={cn(
                "inline-block",
                isDark ? "text-sage-300" : "text-primary"
              )}
            >
              {highlightText}
            </span>
            {title.split(highlightText)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-slate-300" : "text-muted-foreground",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
