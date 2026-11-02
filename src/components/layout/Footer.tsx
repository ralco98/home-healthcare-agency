import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-slate-200 border-t border-dark-border selection:bg-forest-700 selection:text-white">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column (5 cols / ~2fr) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-forest-700 text-white flex items-center justify-center border border-forest-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 text-sage-300"
                  aria-hidden="true"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight block">
                  {siteConfig.name}
                </span>
                <span className="text-xs font-mono text-sage-300">
                  Residential Care & Senior Living
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              A welcoming residential home dedicated to dignified, person-centred care, familiar routines, and peace of mind for families in Philadelphia and surrounding communities.
            </p>

            {/* Regulatory and Credential Reassurance */}
            <div className="pt-2 flex items-center gap-2.5 text-xs text-sage-300 font-mono">
              <ShieldCheck className="w-4 h-4 text-sage-400 flex-shrink-0" />
              <span>Registered & Licensed Health Care Provider</span>
            </div>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs bg-forest-800/80 border border-forest-700 text-sage-200 px-3 py-1 rounded-full">
                <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300/30" />
                <span>LGBTQ+ Friendly & Inclusive Community</span>
              </span>
            </div>
          </div>

          {/* Care Links (2 cols / ~1fr) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-[0.12em] uppercase text-sage-300">
              Our Care
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/care-services" className="text-slate-300 hover:text-white transition-colors">
                  Residential Care
                </Link>
              </li>
              <li>
                <Link to="/care-services#dementia-care" className="text-slate-300 hover:text-white transition-colors">
                  Dementia Care
                </Link>
              </li>
              <li>
                <Link to="/care-services#respite-care" className="text-slate-300 hover:text-white transition-colors">
                  Respite & Short Stays
                </Link>
              </li>
              <li>
                <Link to="/accommodation" className="text-slate-300 hover:text-white transition-colors">
                  Accommodation & Rooms
                </Link>
              </li>
              <li>
                <Link to="/life-here" className="text-slate-300 hover:text-white transition-colors">
                  Life Here
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sage-200 hover:text-white font-medium transition-colors inline-flex items-center gap-1">
                  <span>Arrange a Visit</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Links (2 cols / ~1fr) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-[0.12em] uppercase text-sage-300">
              Information
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Our Home
                </Link>
              </li>
              <li>
                <Link to="/meet-the-team" className="text-slate-300 hover:text-white transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/families" className="text-slate-300 hover:text-white transition-colors">
                  Family FAQ & Guidance
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-slate-300 hover:text-white transition-colors">
                  Admissions Process
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-300 hover:text-white transition-colors">
                  Careers & Vacancies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column (3 cols / ~1.2fr) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-[0.12em] uppercase text-sage-300">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-start gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-sage-400 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-2.5 text-slate-300 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-sage-400 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-sage-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>{siteConfig.contact.address.street}</p>
                  <p>{siteConfig.contact.address.unit}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}</p>
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-sage-300 hover:text-white underline mt-1"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300 text-xs pt-1">
                <Clock className="w-4 h-4 text-sage-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Reception Hours:</p>
                  <p>{siteConfig.contact.hours.reception}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>
              © {currentYear} {siteConfig.name} & {siteConfig.tradingName}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Care services, room availability, and admission suitability assessed individually prior to confirmation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">
              Accessibility Statement
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
