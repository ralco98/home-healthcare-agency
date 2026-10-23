export interface ActivityHighlight {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageAlt: string;
  bullets: string[];
}

export const activityHighlights: ActivityHighlight[] = [
  {
    id: "meaningful-activities",
    eyebrow: "ENGAGEMENT & HOBBIES",
    title: "Meaningful Activities",
    description: "Creative sessions, games, music, celebrations, and activities based on residents' interests.",
    longDescription: "We believe activity should never feel forced or patronising. Our team spends time discovering what each resident has always enjoyed — from oil painting and pottery to classical music, gentle seated yoga, crossword clubs, and listening to audiobooks.",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Older adults enjoying an art and watercolour painting session with a gentle caregiver smiling",
    bullets: [
      "Watercolour painting, tactile crafts, and clay modeling",
      "Live acoustic musical afternoons and sing-alongs",
      "Gentle mobility exercises and chair yoga sessions",
      "Book clubs, poetry readings, and memory sharing circles",
    ],
  },
  {
    id: "good-food",
    eyebrow: "NUTRITION & HOSPITALITY",
    title: "Good Food, Shared Moments",
    description: "Meals and dining experiences that respect individual preferences and documented dietary needs.",
    longDescription: "Dining is one of life's greatest pleasures. Our chef prepares daily menus combining comforting traditional favourites with wholesome modern dishes. We celebrate birthdays with bespoke cakes and make mealtimes a welcoming social focal point of the day.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Delicious and colourful freshly prepared home-cooked meal served on an elegant wooden table",
    bullets: [
      "Freshly prepared 3-course daily lunches with hot choices",
      "Mid-morning baked scones, afternoon tea, and savoury treats",
      "Bespoke menus for low-sodium, diabetic, vegetarian, or textured diets",
      "Hydration and juice bars stocked throughout the day",
    ],
  },
  {
    id: "gardens-quiet",
    eyebrow: "NATURE & TRANQUILITY",
    title: "Gardens and Quiet Spaces",
    description: "Comfortable spaces for fresh air, relaxation, visits, and time with family.",
    longDescription: "Connection with the natural world promotes calm and emotional balance. Our safe gardens feature level paths, fragrant flower beds, bird tables, and shaded benches where residents can sit quietly in the morning sunshine or stroll with visiting relatives.",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Peaceful landscaped courtyard with wooden benches, blooming roses, and sunlit paths",
    bullets: [
      "Secure step-free pathways with handrails and resting benches",
      "Raised herb and tomato planters for resident gardeners",
      "Covered veranda for enjoying fresh air during rainfall",
      "Sensory flower borders rich with lavender, rosemary, and lilies",
    ],
  },
  {
    id: "family-community",
    eyebrow: "RELATIONSHIPS & VISITS",
    title: "Family and Community",
    description: "Opportunities for visitors, shared celebrations, and community connections in line with the home's arrangements.",
    longDescription: "Moving into a care home shouldn't mean leaving family life behind. Families are welcomed with open arms. Grandchildren are greeted with warmth, dogs on leads are welcome in the garden, and private rooms can be booked for anniversary and birthday lunches.",
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Loving family multi-generational visit with grandmother and adult daughter laughing together",
    bullets: [
      "Open visiting hours with flexible arrangements for family schedules",
      "Dedicated family tea lounge with fresh coffee and biscuits",
      "Community partnerships with local choirs and gardening clubs",
      "Regular transparent family updates and care catch-up calls",
    ],
  },
];

export const sampleMenu = [
  { meal: "Breakfast", items: "Freshly baked pastries, warm porridge with honey, eggs to order, fresh fruit & artisan coffee" },
  { meal: "Lunch", items: "Roast breast of chicken with sage stuffing, thyme roast potatoes & seasonal garden greens, or Mediterranean vegetable tartlet. Followed by warm apple crumble." },
  { meal: "Afternoon Tea", items: "Traditional Earl Grey or herbal infusions with homemade lemon drizzle cake & shortbread" },
  { meal: "Supper", items: "Wholesome roasted butternut squash soup, artisanal sandwiches, or light Welsh rarebit with fresh salad" },
];
