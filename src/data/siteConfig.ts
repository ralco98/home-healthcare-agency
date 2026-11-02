export interface SiteConfig {
  name: string;
  tradingName?: string;
  tagline: string;
  description: string;
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    address: {
      street: string;
      unit?: string;
      city: string;
      state: string;
      zip: string;
      country: string;
      full: string;
    };
    hours: {
      reception: string;
      visiting: string;
      phoneHours: string;
    };
    googleMapsUrl: string;
    googleMapsEmbedUrl?: string;
    plusCode: string;
  };
  reassurance: {
    rating: number;
    reviewCount: number;
    ratingSource: string;
    attributes: string[];
    isVerifiedBusiness: boolean;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  socials: {
    name: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Home Health Care Agencies",
  tradingName: "Fox Chase Wellness Center",
  tagline: "Exceptional care. A life well lived.",
  description: "A welcoming residential and senior care community providing compassionate care, comfortable accommodation, meaningful daily activities, and genuine peace of mind for residents and families.",
  contact: {
    phone: "+12674489408",
    phoneDisplay: "+1 (267) 448-9408",
    email: "enquiries@homehealthcareagencies.com",
    address: {
      street: "7770 Dungan Rd",
      unit: "Unit 126",
      city: "Philadelphia",
      state: "PA",
      zip: "19111",
      country: "United States",
      full: "7770 Dungan Rd Unit 126, Philadelphia, PA 19111, United States",
    },
    hours: {
      reception: "Monday – Friday: 8:00 AM – 5:00 PM",
      visiting: "Daily visiting hours: 9:00 AM – 7:30 PM (flexible by arrangement)",
      phoneHours: "Phone enquiries welcome 8:00 AM – 6:00 PM daily",
    },
    googleMapsUrl: "https://maps.google.com/?q=7770+Dungan+Rd+Unit+126,+Philadelphia,+PA+19111",
    plusCode: "3W8H+59 Philadelphia, Pennsylvania, USA",
  },
  reassurance: {
    rating: 4.8,
    reviewCount: 28,
    ratingSource: "Verified Google Reviews",
    attributes: [
      "LGBTQ+ Friendly",
      "Compassionate & Dedicated Staff",
      "Clean & Welcoming Environment",
      "Individualised Care Routines",
    ],
    isVerifiedBusiness: true,
  },
  navigation: [
    { label: "Our Care", href: "/care-services" },
    { label: "Life Here", href: "/life-here" },
    { label: "Accommodation", href: "/accommodation" },
    { label: "About Us", href: "/about" },
    { label: "Families", href: "/families" },
    { label: "Admissions", href: "/admissions" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { name: "Facebook", href: "https://facebook.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ],
};
