// Change `phase` as TuraCare moves from building to testing to launch.
// The hero, header button and "Where we are" timeline update automatically.
export type Phase = "building" | "testing" | "launch";

export const site = {
  name: "TuraCare",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://turacare.co",
  description: "TuraCare is building Tura EarthPant, a plant-based disposable menstrual pant designed with African women. Join the First 1000.",
  phase: "building" as Phase,
  waitlistGoal: 1000,
  waitlistCount: 0, // set a real number to show the counter; hidden while 0
  email: "turacareofficial@gmail.com", // swap for a branded address when set up
  social: [
    { label: "Instagram", href: "https://www.instagram.com/turacare.co" },
    { label: "TikTok", href: "https://www.tiktok.com/@turacare" }, // TODO: add exact TikTok URL
    //{ label: "LinkedIn", href: "#" }, // TODO: add exact LinkedIn URL
  ],
  nav: [
    { label: "Our story", href: "/our-story" },
    { label: "The problem", href: "/the-problem" },
    { label: "Our approach", href: "/our-approach" },
    { label: "Tura EarthPant", href: "/tura-earthpant" },
    { label: "Research", href: "/research" },
    { label: "Journal", href: "/journal" },
    { label: "FAQ", href: "/faq" },
  ],
};

export const phaseCopy: Record<Phase, { hero: string; sub: string; cta: string }> = {
  building: {
    hero: "Made from nature. Made for you.",
    sub: "TuraCare is a social enterprise building Tura EarthPant, a plant-based disposable menstrual pant designed from what 150 Nigerian women told us about their periods. Join the First 1000 and help shape it.",
    cta: "Join the First 1000",
  },
  testing: {
    hero: "Testing is open. Help us get it right.",
    sub: "Tura EarthPant is in testing with the women of the First 1000. Join to be considered for the next round.",
    cta: "Join the First 1000",
  },
  launch: {
    hero: "Tura EarthPant is here.",
    sub: "Made from nature, made for you. Be among the first to get yours.",
    cta: "Get yours",
  },
};
