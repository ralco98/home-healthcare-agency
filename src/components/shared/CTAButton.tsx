import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight, Phone } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "phone";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  icon = false,
  className,
  onClick,
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-subtle transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98] select-none";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-sm gap-1.5",
    md: "px-5 py-2.5 text-base gap-2",
    lg: "px-7 py-3.5 text-lg font-semibold gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-forest-800 text-white hover:bg-forest-900 shadow-sm hover:shadow-soft",
    secondary:
      "bg-primary-light text-primary-dark hover:bg-sage-200 border border-primary-muted/40",
    outline:
      "bg-transparent text-primary-dark border border-primary-muted hover:border-primary hover:bg-primary-light/50",
    white:
      "bg-white text-forest-900 hover:bg-cream border border-white/20 shadow-sm",
    phone:
      "bg-transparent text-foreground hover:text-primary font-medium border border-border hover:border-primary/40",
  }[variant];

  const content = (
    <>
      {variant === "phone" && <Phone className="w-4 h-4 text-primary" aria-hidden="true" />}
      <span>{children}</span>
      {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={cn(baseStyles, sizeStyles, variantStyles, "group", className)}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseStyles, sizeStyles, variantStyles, "group", className)}
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        baseStyles,
        sizeStyles,
        variantStyles,
        "group",
        disabled && "opacity-60 cursor-not-allowed hover:bg-inherit active:scale-100",
        className
      )}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
