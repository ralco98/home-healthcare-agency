export interface TeamMember {
  id: string;
  role: string;
  department: string;
  description: string;
  responsibilities: string[];
  imageUrl: string;
  isEditorialRoleCard: boolean;
}

export const teamProfiles: TeamMember[] = [
  {
    id: "home-manager",
    role: "Registered Home Director & Manager",
    department: "Leadership & Governance",
    description: "Leading our home with warmth, regulatory compliance, and an unwavering commitment to resident dignity, safety, and family communication.",
    responsibilities: [
      "Oversees daily care quality and regulatory compliance standards",
      "Leads admissions consultations and family partnership discussions",
      "Fosters a culture of kindness, respect, and continuous staff development",
    ],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    isEditorialRoleCard: true,
  },
  {
    id: "care-lead",
    role: "Care Team Lead & Registered Nurse",
    department: "Care & Clinical Support",
    description: "Coordinating individualized care plans, medication administration, and liaison with visiting physicians and allied healthcare professionals.",
    responsibilities: [
      "Develops and regularly reviews personalized resident care plans",
      "Supervises senior caregivers and health monitoring protocols",
      "Supports residents with mobility, comfort, and medication reviews",
    ],
    imageUrl: "https://images.unsplash.com/photo-1594824813637-295b9d3b4fa4?auto=format&fit=crop&w=800&q=80",
    isEditorialRoleCard: true,
  },
  {
    id: "activities-coordinator",
    role: "Head of Wellbeing & Activities",
    department: "Lifestyle & Social Engagement",
    description: "Designing a vibrant, inclusive calendar of music, gardening, crafts, seasonal events, and one-on-one companionship tailored to personal passions.",
    responsibilities: [
      "Plans creative, cognitive, and sensory activity schedules",
      "Coordinates guest musicians, gardening projects, and community outings",
      "Spends 1-on-1 time with residents who prefer quieter companionship",
    ],
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80",
    isEditorialRoleCard: true,
  },
  {
    id: "head-chef",
    role: "Head Chef & Hospitality Lead",
    department: "Dining & Nutrition",
    description: "Crafting nutritious, freshly prepared home-cooked meals, morning bakes, and satisfying seasonal dishes tailored to individual dietary choices.",
    responsibilities: [
      "Prepares wholesome menus with fresh, high-quality ingredients",
      "Customizes meals for diabetic, allergen-safe, or textured diets",
      "Hosts special celebratory family lunches and afternoon teas",
    ],
    imageUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    isEditorialRoleCard: true,
  },
];
