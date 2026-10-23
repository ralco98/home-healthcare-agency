import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import { formatPhoneNumber, cn } from "@/lib/utils";
import { CTAButton } from "@/components/shared/CTAButton";
import { MobileNavigation } from "./MobileNavigation";
import { Phone, Menu, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Care", href: "/care-services" },
    { label: "Life Here", href: "/life-at-willowbrook" },
    { label: "Accommodation", href: "/accommodation" },
    { label: "About Us", href: "/about" },
    { label: "Families", href: "/families" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/80"
            : "bg-cream/90 backdrop-blur-sm border-b border-border/50"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[76px]">
            {/* Left Brand Identity */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1"
              aria-label={`${siteConfig.name} - Home`}
            >
              {/* Elegant Willow / Leaf Icon */}
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center shadow-sm group-hover:bg-forest-900 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-sage-200"
                  aria-hidden="true"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[11px] font-mono text-muted-foreground font-normal tracking-wide">
                  A place to feel at home
                </span>
              </div>
            </Link>

            {/* Center Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "px-3.5 py-2 rounded-md text-sm font-medium transition-colors relative",
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground/85 hover:text-primary hover:bg-sage-100/60"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-primary rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-sm font-semibold text-foreground/90 hover:text-primary transition-colors py-2 px-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Call us at ${siteConfig.contact.phoneDisplay}`}
              >
                <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-primary">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <CTAButton to="/contact" variant="primary" size="md">
                Arrange a Visit
              </CTAButton>
            </div>

            {/* Mobile Actions: Phone icon + Hamburger button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-10 h-10 rounded-lg border border-border bg-white flex items-center justify-center text-primary shadow-sm"
                aria-label="Call home directly"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 rounded-lg border border-border bg-white flex items-center justify-center text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
                aria-expanded={mobileMenuOpen}
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Slide-in Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
