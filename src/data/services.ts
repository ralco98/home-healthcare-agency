export interface CareService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  href: string;
  details: string[];
  suitabilityNote: string;
  badge?: string;
}

export const careServices: CareService[] = [
  {
    id: "residential-care",
    title: "Residential Care",
    tagline: "A welcoming environment with everyday warmth and support.",
    description: "A welcoming environment with day-to-day support, companionship, and help with everyday activities, enabling residents to enjoy independence with peace of mind.",
    iconName: "Home",
    href: "/care-services#residential-care",
    badge: "Core Service",
    details: [
      "Assistance with morning routines, dressing, and personal care",
      "Delicious, freshly prepared home-style meals and refreshments",
      "Full laundry, housekeeping, and room maintenance services",
      "Engaging daily social calendar and leisure activities",
    ],
    suitabilityNote: "Ideal for older adults who value their autonomy but benefit from gentle daily support and a vibrant community atmosphere.",
  },
  {
    id: "dementia-care",
    title: "Dementia Care",
    tagline: "Considerate support shaped around familiarity and reassurance.",
    description: "Considerate support designed around familiarity, dignity, individual preferences, and a reassuring environment that minimizes anxiety and supports cognitive wellbeing.",
    iconName: "HeartHandshake",
    href: "/care-services#dementia-care",
    badge: "Specialised",
    details: [
      "Compassionate, specially trained caregivers who understand memory loss",
      "Familiar, sensory-friendly environments with clear visual wayfinding",
      "Life-story work celebrating each individual's background and passions",
      "Meaningful reminiscence and gentle stimulation sessions",
    ],
    suitabilityNote: "Suitable for residents living with mild to moderate dementia who thrive in an empathetic, consistent, and safe environment.",
  },
  {
    id: "respite-care",
    title: "Respite & Short Stays",
    tagline: "Temporary stays providing rest for families and full hospitality for guests.",
    description: "A temporary stay that offers residents a welcoming place to stay and families or regular carers an opportunity to take a break or recover after illness.",
    iconName: "CalendarClock",
    href: "/care-services#respite-care",
    details: [
      "Flexible short-term stays from one week to several months",
      "Full access to accommodation, dining, and daily activities",
      "Comprehensive care handover and individualized support plan",
      "A gentle, stress-free opportunity to experience life at our home",
    ],
    suitabilityNote: "Perfect for family caregivers needing planned rest, or seniors recovering from surgery before returning home.",
  },
  {
    id: "nursing-care",
    title: "Nursing Care Support",
    tagline: "Clinical oversight and coordinated care for more complex health needs.",
    description: "Care provided by appropriately qualified nursing and healthcare professionals when clinical oversight, medication management, or wound care is required.",
    iconName: "Stethoscope",
    href: "/care-services#nursing-care",
    details: [
      "Registered nurse supervision and medication administration",
      "Close coordination with local GPs, therapists, and specialists",
      "Pressure care management, monitoring, and health tracking",
      "Empathetic, dignifying assistance for complex mobility requirements",
    ],
    suitabilityNote: "Designed for individuals with chronic conditions or clinical health requirements requiring continuous professional monitoring.",
  },
  {
    id: "personal-care",
    title: "Personal Care",
    tagline: "Respectful, discreet assistance tailored to personal routines.",
    description: "Respectful assistance with daily routines, personal hygiene, dressing, mobility, and other agreed support needs delivered with dignity and privacy.",
    iconName: "Sparkles",
    href: "/care-services#personal-care",
    details: [
      "Unrushed, discreet assistance with bathing, grooming, and dressing",
      "Mobility assistance and safe transfers with appropriate equipment",
      "Incontinence management handled with maximum respect and discretion",
      "Support tailored around the resident's natural waking and resting times",
    ],
    suitabilityNote: "Available to all residents as part of their individualized care plan, adjusted as needs evolve.",
  },
  {
    id: "activities-companionship",
    title: "Activities & Companionship",
    tagline: "Connection, purposeful hobbies, and shared joyful moments.",
    description: "Opportunities to connect with others, enjoy favourite pastimes, and take part in activities at a comfortable pace with dedicated companionship.",
    iconName: "Users",
    href: "/care-services#activities-companionship",
    details: [
      "Gentle gardening club in landscaped raised flower beds",
      "Arts, crafts, music therapy, and book discussions",
      "Celebrations for birthdays, cultural traditions, and seasonal festivals",
      "One-to-one companionship for quiet conversations, walks, or reading",
    ],
    suitabilityNote: "Designed for all residents with activities adaptable to different physical and sensory capabilities.",
  },
];
