import React, { useEffect } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactSection } from "@/components/home/ContactSection";
import { siteConfig } from "@/data/siteConfig";
import { MapPin, Phone, Mail, Clock, ExternalLink, Calendar, HeartHandshake } from "lucide-react";

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = `Contact & Arrange a Visit | ${siteConfig.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="CONNECT WITH OUR TEAM"
        title="We would love to welcome you."
        description="Whether you have questions about care services, room availability, fees, or want to schedule a relaxed tour and coffee, our team is ready to assist."
        breadcrumbs={[{ label: "Contact & Visit" }]}
      />

      {/* Embedded Contact & Form Section */}
      <ContactSection />

      {/* Map and Directions Overview */}
      <section className="py-16 bg-cream border-t border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-card bg-white border border-border/80 p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary-dark">
                FINDING OUR HOME
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Easy Step-Free Access & Parking
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Located on Dungan Road in Philadelphia, PA, our home offers smooth level access for wheelchair users and ample on-site visitor parking right outside our main reception.
              </p>
              <div className="pt-2 text-sm text-foreground space-y-1">
                <p className="font-semibold">{siteConfig.contact.address.full}</p>
                <p className="text-xs text-muted-foreground">Coordinates: {siteConfig.contact.plusCode}</p>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-subtle bg-forest-800 text-white font-medium hover:bg-forest-900 transition-colors text-sm shadow-xs"
                >
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-border/80 aspect-[16/10] bg-sage-100 relative">
              {/* Map presentation placeholder or Google Maps frame */}
              <iframe
                title="Willowbrook Care Home Location Map"
                src="https://maps.google.com/maps?q=7770+Dungan+Rd+Unit+126,+Philadelphia,+PA+19111&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
