export type Review = {
  quote: string;
  name: string;
  location: string;
  date: string;
};

export const HOME_REVIEWS = [
  {
    quote:
      "Pasquale fixed our kitchen shelves and assembled a wardrobe — brilliant job, very tidy and on time.",
    name: "Sarah M.",
    location: "Bishop's Stortford",
  },
  {
    quote:
      "Sorted a long list of small repairs around the house in one visit. Highly recommend.",
    name: "James T.",
    location: "Sawbridgeworth",
  },
  {
    quote:
      "Reliable, honest and good value. Our go-to handyman for the last two years.",
    name: "Linda K.",
    location: "Harlow",
  },
];

export const ALL_REVIEWS: Review[] = [
  ...HOME_REVIEWS.map((r, i) => ({
    ...r,
    date: `${["12 Apr", "28 Mar", "9 Feb"][i]} 2026`,
  })),
  {
    quote:
      "Professional attitude and spotless workmanship on curtain poles and blinds.",
    name: "Priya N.",
    location: "Stansted Mountfitchet",
    date: "21 Jan 2026",
  },
  {
    quote:
      "Quick response after we moved in — dozens of little jobs handled across two afternoons.",
    name: "Daniel R.",
    location: "Hertford",
    date: "6 Dec 2025",
  },
  {
    quote:
      "Explained options clearly before drilling into our newly plastered walls. Really appreciated.",
    name: "Emma L.",
    location: "Ware",
    date: "17 Nov 2025",
  },
];
