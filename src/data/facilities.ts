export interface AccommodationItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  features: string[];
}

export const accommodationItems: AccommodationItem[] = [
  {
    id: "private-bedrooms",
    title: "Private Bedrooms",
    subtitle: "A serene, personal sanctuary you can make your own",
    description: "Personal spaces where residents can relax, bring familiar belongings, and make their room feel their own.",
    longDescription: "Each bedroom has been thoughtfully furnished with comfortable posture-support beds, warm textiles, and generous natural daylight. Residents are warmly encouraged to bring cherished pictures, favourite ornaments, small furniture items, and familiar keepsakes so their room feels authentically like home from day one.",
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Warm and bright private bedroom with comfortable bed, soft armchair, and window overlooking trees",
    tags: ["Ensuite Wet Room", "Emergency Call System", "Garden Views", "Personalised Décor"],
    features: [
      "Comfortable profiling beds with pressure-relieving mattresses",
      "Private accessible ensuite wet room with level-access shower",
      "24-hour discreet nurse call button within reach of bed and chair",
      "High-speed Wi-Fi and television points in every room",
      "Warm thermostatic climate control tailored to resident comfort",
      "Plenty of wardrobe storage and lockable drawer space",
    ],
  },
  {
    id: "shared-lounges",
    title: "Shared Lounges & Library",
    subtitle: "Inviting communal spaces for connection, reading, and tea",
    description: "Comfortable places to enjoy a conversation, spend time with visitors, or relax with others.",
    longDescription: "Our shared living areas are designed like a welcoming boutique residence rather than a clinical facility. With plush armchairs, quiet reading corners, soft lighting, and tea stations, they serve as the social heart of our home where friendships flourish naturally.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Bright communal living lounge with comfortable armchairs, indoor plants, and natural light",
    tags: ["Acoustic Comfort", "Tea & Coffee Points", "Visitor Seating", "Warm Fireplace Corner"],
    features: [
      "Ergonomic, easy-rise seating arranged for comfortable conversation",
      "Dedicated quiet corner with lending library and board games",
      "Complimentary beverage and fresh fruit stations for residents and guests",
      "Full acoustic insulation allowing restful relaxation without loud echo",
      "Direct level access to sunny garden patios and walking paths",
    ],
  },
  {
    id: "gardens-communal",
    title: "Gardens & Communal Spaces",
    subtitle: "Secure, fragrant landscaped grounds with level walking pathways",
    description: "Inviting areas for fresh air, activities, and quieter moments throughout the day.",
    longDescription: "Surrounded by mature trees, raised herbal planters, and level sensory pathways, our courtyard gardens are safe and peaceful. Whether participating in the morning gardening club, enjoying afternoon tea on the patio, or watching the songbirds, our grounds offer year-round contact with nature.",
    imageUrl: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Beautiful landscaped garden courtyard with accessible paved paths, wooden benches, and flowers",
    tags: ["Sensory Plants", "Level Paved Paths", "Secure Boundaries", "Outdoor Seating Patios"],
    features: [
      "Smooth, level non-slip pathways suitable for wheelchairs and walking aids",
      "Raised garden beds enabling easy planting without bending or straining",
      "Sheltered covered veranda for comfortable outdoor sitting in all seasons",
      "Bird feeders, butterfly-friendly perennials, and aromatic lavender borders",
      "Secure perimeter providing total peace of mind for residents and families",
    ],
  },
  {
    id: "dining-kitchen",
    title: "Dining Room & Family Kitchen",
    subtitle: "Nutritious, freshly prepared meals served in good company",
    description: "Sociable dining areas where nutritious, freshly cooked dishes are savoured together.",
    longDescription: "Food brings people together. Our dining team crafts seasonal menus based on resident preferences and individual dietary requirements. Residents can dine with friends in the airy dining room, invite family for Sunday lunch, or enjoy breakfast in bed whenever preferred.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Inviting dining room with set tables, natural wood chairs, and soft warm lighting",
    tags: ["Fresh Seasonal Menus", "Dietary Needs Accommodated", "Guest Dining", "Hydration Stations"],
    features: [
      "Daily choices of hot meals prepared fresh each day",
      "Full accommodation for diabetic, low-sodium, gluten-free, or soft food diets",
      "Flexible breakfast timings allowing residents to wake naturally",
      "Family dining tables available for visiting family lunches and celebrations",
    ],
  },
];

export const facilityHighlights = [
  { icon: "ShieldCheck", label: "24/7 Monitored Safety & Call Points" },
  { icon: "Accessibility", label: "Step-Free Level Access & Modern Lifts" },
  { icon: "Wifi", label: "High-Speed Wi-Fi Throughout" },
  { icon: "Car", label: "Dedicated Visitor & Accessible Parking" },
  { icon: "Sparkles", label: "Daily Housekeeping & Laundry" },
  { icon: "Armchair", label: "Personal Furniture Policies Welcome" },
  { icon: "Coffee", label: "Complimentary Family Tea & Coffee Lounge" },
  { icon: "Trees", label: "Enclosed Safe Sensory Gardens" },
];
