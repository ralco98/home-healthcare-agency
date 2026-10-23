import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import { CTAButton } from "@/components/shared/CTAButton";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark-green/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-cream border-l border-border shadow-2xl flex flex-col justify-between overflow-y-auto p-6">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-border/80">
            <Link to="/" className="flex items-center gap-2.5" onClick={onClose}>
              <div className="w-8 h-8 rounded-lg bg-forest-800 text-white flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 text-sage-200"
                  aria-hidden="true"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                {siteConfig.name}
              </span>
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-lg border border-border bg-white flex items-center justify-center text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1.5" aria-label="Mobile Navigation">
            {siteConfig.navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    isActive
                      ? "bg-sage-200/70 text-primary-dark font-bold"
                      : "text-foreground hover:bg-sage-100 hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-border/80 space-y-4">
          <CTAButton to="/contact" variant="primary" size="lg" className="w-full">
            Arrange a Visit
          </CTAButton>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-subtle border border-border bg-white text-foreground font-semibold hover:border-primary/50 text-sm shadow-sm"
          >
            <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
            <span>Call: {siteConfig.contact.phoneDisplay}</span>
          </a>

          <div className="pt-2 text-xs text-muted-foreground space-y-1">
            <p className="flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 mt-0.5 text-primary flex-shrink-0" />
              <span>{siteConfig.contact.address.full}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
