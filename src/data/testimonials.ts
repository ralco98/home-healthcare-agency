export interface Testimonial {
  id: string;
  author: string;
  relationship: string;
  quote: string;
  rating: number;
  date?: string;
  source: string;
  sourceUrl?: string;
  verified: boolean;
  highlightCategory: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    author: "Blair Goensch",
    relationship: "Family Member / Primary Caregiver",
    quote: "Sending my father here was scary for me. I have always been his caretaker, yet I needed to also hold down my job. I called Adult Day Care and they were nice on the phone. I felt comfortable after I saw how clean the place was. The staff here are compassionate, and they take time to talk to the seniors that are there.",
    rating: 5,
    date: "Verified Google Review",
    source: "Google Reviews",
    sourceUrl: "https://maps.google.com/?q=7770+Dungan+Rd+Unit+126,+Philadelphia,+PA+19111",
    verified: true,
    highlightCategory: "Cleanliness & Compassionate Staff",
  },
  {
    id: "review-2",
    author: "Naila Quispe",
    relationship: "Family Member",
    quote: "Spoke with them about a situation with my Mom. Everyone was extremely compassionate and understanding. Going to discuss it with the family and will definitely call Fox Chase if we do decide to use a home care agency. Great people working there.",
    rating: 5,
    date: "Verified Google Review",
    source: "Google Reviews",
    sourceUrl: "https://maps.google.com/?q=7770+Dungan+Rd+Unit+126,+Philadelphia,+PA+19111",
    verified: true,
    highlightCategory: "Compassionate Guidance",
  },
  {
    id: "review-3",
    author: "Penny Marshall",
    relationship: "Family Referral",
    quote: "I referred Fox Chase Wellness Center to a relative to care for their parents in Philadelphia. None of my aunt and uncle's children lived nearby to help with, and oversee, their living conditions and activities. The care staff stepped in with such warmth, diligence, and genuine kindness.",
    rating: 5,
    date: "Verified Google Review",
    source: "Google Reviews",
    sourceUrl: "https://maps.google.com/?q=7770+Dungan+Rd+Unit+126,+Philadelphia,+PA+19111",
    verified: true,
    highlightCategory: "Family Support & Oversight",
  },
  {
    id: "review-4",
    author: "Verified Reviewer",
    relationship: "Client Family",
    quote: "They staff very professional, reliable and highly qualified caregivers. You can genuinely tell they care about the human beings they look after every single day.",
    rating: 5,
    date: "Verified Google Review",
    source: "Google Reviews",
    sourceUrl: "https://maps.google.com/?q=7770+Dungan+Rd+Unit+126,+Philadelphia,+PA+19111",
    verified: true,
    highlightCategory: "Caregiver Professionalism",
  },
  {
    id: "review-5",
    author: "Verified Reviewer",
    relationship: "Client Family",
    quote: "This is a challenging business that people don't get into for the money — the team here demonstrates that every day through patience, kindness, and deep respect for our seniors.",
    rating: 5,
    date: "Verified Google Review",
    source: "Google Reviews",
    sourceUrl: "https://maps.google.com/?q=7770+Dungan+Rd+Unit+126,+Philadelphia,+PA+19111",
    verified: true,
    highlightCategory: "Heartfelt Dedication",
  },
  {
    id: "review-6",
    author: "Verified Reviewer",
    relationship: "Family Member",
    quote: "My overall experience with this company has been amazing. From the first consultation call to the care routine, they provided true peace of mind for our entire family.",
    rating: 5,
    date: "Verified Google Review",
    source: "Google Reviews",
    sourceUrl: "https://maps.google.com/?q=7770+Dungan+Rd+Unit+126,+Philadelphia,+PA+19111",
    verified: true,
    highlightCategory: "Overall Experience",
  },
];

export const familyCommitments = [
  {
    title: "Open Door Communication",
    description: "Families are welcome to visit anytime during daily visiting hours and receive regular, transparent updates on their loved one's wellbeing.",
    icon: "MessageSquare",
  },
  {
    title: "Individualised Dignity",
    description: "Every resident's personal life story, waking routines, food preferences, and cultural background guide daily care decisions.",
    icon: "Heart",
  },
  {
    title: "Clean, Safe & Homely",
    description: "Meticulous hygiene standards paired with the warmth and comfort of a genuine home — never cold or institutional.",
    icon: "Sparkles",
  },
];
