export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  employmentType: "Full-time" | "Part-time" | "Bank / Flexible";
  description: string;
  requirements: string[];
  qualities: string[];
}

export const careerOpenings: CareerOpening[] = [
  {
    id: "senior-care-assistant",
    title: "Care Assistant / Senior Carer",
    department: "Residential Care",
    employmentType: "Full-time",
    description: "Provide compassionate, person-centered daily care for our residents, supporting with personal care, companionship, and daily activities in a warm, respectful environment.",
    requirements: [
      "Previous experience in elderly care or NVQ/SVQ/Equivalent Level 2 or 3 preferred (or willingness to train)",
      "Empathy, patience, and strong communication skills",
      "Dedication to resident dignity, choice, and wellbeing",
    ],
    qualities: [
      "Kind-hearted and attentive listener",
      "Reliable team player who values resident comfort",
      "Committed to ongoing professional development",
    ],
  },
  {
    id: "activities-assistant",
    title: "Activities & Companionship Assistant",
    department: "Wellbeing & Lifestyle",
    employmentType: "Part-time",
    description: "Support our Wellbeing Lead in running creative workshops, gardening sessions, music therapy, and quiet one-to-one companionship for residents.",
    requirements: [
      "Enthusiasm for creative arts, music, games, or gardening",
      "Ability to connect warmly and respectfully with older adults",
      "Positive, encouraging energy and organizational skills",
    ],
    qualities: [
      "Outgoing, creative, and patient",
      "Passionate about combating loneliness and celebrating individual hobbies",
    ],
  },
  {
    id: "night-care-assistant",
    title: "Night Care Assistant",
    department: "Night Care Support",
    employmentType: "Full-time",
    description: "Provide reassuring presence, night-time comfort checks, gentle personal care assistance, and immediate response to resident call bells throughout the evening and night.",
    requirements: [
      "Care experience with older adults",
      "Calm, observant, and reassuring demeanor",
      "Strong commitment to safety and overnight comfort",
    ],
    qualities: [
      "Attentive and safety-conscious",
      "Gentle bedside manner and respectful approach",
    ],
  },
];

export const employeeValues = [
  {
    title: "Respect & Human Dignity",
    description: "We treat our staff with the same dignity and compassion that we ask them to extend to our residents.",
    icon: "HeartHandshake",
  },
  {
    title: "Comprehensive Training & Mentorship",
    description: "Paid induction, ongoing certifications, dementia awareness workshops, and career advancement pathways.",
    icon: "GraduationCap",
  },
  {
    title: "Supportive Team Culture",
    description: "A collaborative, warm environment where your contribution is recognized and celebrated every single day.",
    icon: "Users",
  },
  {
    title: "Fair Pay & Thoughtful Shift Rota",
    description: "Competitive compensation, manageable staff-to-resident ratios, and balanced scheduling.",
    icon: "Clock",
  },
];
