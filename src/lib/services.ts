export type ServiceItem = {
  slug: string;
  title: string;
  image: string;
  description: string;
  benefits: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "small-repairs",
    title: "Small Repairs",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    description:
      "From leaky taps to broken hinges — quick fixes handled professionally.",
    benefits: [
      "Leaks, hinges and handles sorted quickly",
      "Neat finishes with minimal disruption",
      "Advice if something needs a specialist",
      "Ideal for landlords and busy households",
    ],
  },
  {
    slug: "furniture-assembly",
    title: "Furniture Assembly",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    description:
      "IKEA, Argos or any flatpack — assembled correctly, first time.",
    benefits: [
      "Correct fittings and fixings throughout",
      "Walls protected during assembly",
      "Packaging tidy-up on request",
      "Anchoring advice for taller units",
    ],
  },
  {
    slug: "wall-fixing-shelving",
    title: "Wall Fixing & Shelving",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8e2a4a1d48?w=600&q=80",
    description:
      "Shelves, TV brackets, curtain rails — fixed securely to any wall type.",
    benefits: [
      "Solid fixing into studs or suitable anchors",
      "Level lines and aligned layouts",
      "TV brackets tested before handover",
      "Metal, masonry and stud walls covered",
    ],
  },
  {
    slug: "painting-touch-ups",
    title: "Painting Touch-ups",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    description:
      "Scuffs, chips and marks — blended seamlessly for a fresh finish.",
    benefits: [
      "Colour matching guidance",
      "Careful masking of trims and carpets",
      "Small plaster prep where needed",
      "Landlord-ready refreshes between lets",
    ],
  },
  {
    slug: "property-maintenance",
    title: "Property Maintenance",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    description:
      "Regular upkeep for landlords and homeowners who want peace of mind.",
    benefits: [
      "Scheduled visits available",
      "Snagging lists cleared efficiently",
      "Photos supplied on request",
      "Friendly communication throughout",
    ],
  },
  {
    slug: "general-handyman",
    title: "General Handyman Jobs",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    description:
      "Not sure what you need? If it's a household job, I can handle it.",
    benefits: [
      "Honest guidance on what's realistic",
      "Most odd jobs covered in one visit",
      "Tools and materials sourced locally",
      "Transparent estimates before work starts",
    ],
  },
];

export const HOME_PREVIEW_SERVICES = SERVICES;
