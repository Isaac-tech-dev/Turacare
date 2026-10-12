// Copy from the founder's brief. Written to be swapped for a headless CMS (Sanity) later.
// CLAIMS RULE: only publish what TuraCare can substantiate. Items under "needsSource" are
// deliberately NOT shown on the site until the client supplies a citation.
import type { Phase } from "@/config/site";

export const tagline = "Made from nature. Made for you.";

export const problem = {
  title: "Period quality poverty",
  definition:
    "The condition of having access to menstrual products while being denied the right to one that is honest about what it contains, safe for the body using it, and built with any consideration for the earth it enters.",
  intro:
    "The global conversation on period poverty has focused on access: whether women have menstrual products. It has said far less about whether the products they have are honest, safe, or built with care for the bodies using them or the earth receiving them.",
  stats: [
    // CONFIRM: "105 of 150" wording with the client
    { value: "105 of 150", text: "Nigerian women we surveyed experience skin irritation every cycle, and have come to treat it as unavoidable.", source: "TuraCare primary survey, January to February 2026" },
    { value: "95%", text: "had never had access to a plant-based alternative.", source: "TuraCare primary survey, 2026" },
    { value: "2024", text: "A systematic review found endocrine-disrupting chemicals, phthalates and dioxins in menstrual products.", source: "Wesselink AK et al., BJOG, 2024" },
  ],
};

// needsSource (not published): "up to 90% petroleum plastic", "290 million women menstruate in Sub-Saharan Africa",
// "500 to 800 years to decompose", bamboo carbon / pesticide claims, "Africa's first" claims, "naturally antimicrobial".

export const pillars = [
  { title: "Designed with women", body: "Before we designed anything, we surveyed 150 Nigerian women about what their menstrual products were doing to their bodies. Their words became the product specification." },
  { title: "Honest about every ingredient", body: "We commit to disclosing every material in EarthPant. We build from evidence, and we claim only what we can prove." },
  { title: "Built in the open", body: "We are not waiting for perfect. We build transparently, improve continuously, and update this site as the formulation evolves." },
];

export const earthpant = {
  confirmed: [
    "Bamboo fibre topsheet at the point of skin contact",
    "Breathable backsheet with a waterproof barrier layer",
    "Zero synthetic fragrance",
    "Zero chlorine",
    "Brief-cut underwear silhouette in a disposable pant format",
    // CONFIRM before adding: absorbent core wording (claims doc says plant-based; brand guidelines say SAP)
  ],
  stillConfirming: ["Biodegradability", "Absorbency and hours of protection", "Certifications"],
  stillConfirmingNote: "We are still confirming these. We will share each one on this page once the results are in, and we will never claim something we cannot substantiate.",
};

export const journey: { phase: Phase; title: string; body: string }[] = [
  { phase: "building", title: "Building", body: "Research with African women, design and early prototypes." },
  { phase: "testing", title: "Testing", body: "Beta testing and feedback with members of the First 1000." },
  { phase: "launch", title: "Launch", body: "Tura EarthPant becomes available to the First 1000 first." },
];

export const founder = {
  name: "Faith Idowu",
  role: "CEO and Founder, TuraCare",
  bio: [
    "Faith Idowu has spent her career working at the intersection of policy, innovation and systems change across Africa. But TuraCare began somewhere more personal than any boardroom.",
    "For years, like millions of African women, Faith used conventional menstrual products without questioning what was in them. When she finally did, she found petroleum-derived polypropylene pressing against intimate skin for hours every cycle, and no ingredient disclosure requirements.",
    "In January 2026, before designing a single product, she surveyed 150 Nigerian women about what their periods actually felt like. Not one of them used the word comfortable. That survey became the founding document of TuraCare, and the women who answered it became the brief.",
    "Today Faith leads TuraCare in building its flagship product, the EarthPant, alongside a growing research and advocacy programme generating the continent's first evidence base on menstrual product quality and safety.",
  ],
  quote: "For too long, we as women have been starved of the option to actually choose products that work for our bodies, are honest about what they contain, and are built with any consideration for the earth we live in.",
};

export const approach = [
  { title: "Materials", body: "We replace petroleum-derived inputs with plant-based alternatives, starting with a bamboo fibre topsheet where the product meets the skin." },
  { title: "Transparency", body: "Every material in EarthPant is named, sourced intentionally and disclosed to the woman using it. Transparency is a design principle for us, not a marketing line. Women have the right to know what touches their bodies." },
  { title: "Research and advocacy", body: "The Period Quality Poverty Index and our Position Paper build the accountability that holds the whole menstrual care industry to a higher standard." },
  { title: "Where we are heading", body: "In future, we commit to moving toward a fully plant-based formulation, including a biodegradable backsheet, as commercial scale and certification infrastructure allow." },
];

export const research = [
  // CONFIRM statuses with the client
  { title: "The Period Quality Poverty framework", status: "Introduced January 2026", body: "A framework that names the gap between having access to menstrual products and having access to ones that are honest, safe and built with care for the earth." },
  { title: "The 200-woman Africa-wide study", status: "In progress", body: "The continental primary evidence base on what menstrual products are doing to women's bodies." },
  { title: "The Period Quality Poverty Index", status: "In development", body: "An annual score and ranking of African countries across five dimensions of menstrual product quality." },
  { title: "Position Paper", status: "In progress", body: "Policy advocacy on menstrual product quality and safety in Africa." },
];

export const firstThousand = {
  intro: "The First 1000 are the women who join TuraCare's community before EarthPant is available. They are our beta testing pool, our research participants, our first customers, and the community TuraCare is accountable to.",
  benefits: [
    "Early access to EarthPant at launch",
    "An invitation to beta testing, for selected members",
    "Period Quality Poverty research findings before public publication",
    "A direct line to the building process",
    "The knowledge that you shaped what TuraCare became",
  ],
  after: [
    "A welcome email with a link to the Period Quality Poverty quiz",
    "Periodic updates on the building process",
    "First access to purchase when EarthPant launches",
  ],
};

export const faqs = [
  { q: "What is the First 1000?", a: firstThousand.intro },
  { q: "What happens after I sign up?", a: "You will get a welcome email with a link to the Period Quality Poverty quiz, periodic updates on the building process, an invitation to beta testing if you are selected, and first access to purchase when EarthPant launches." },
  { q: "Is Tura EarthPant available now?", a: "Not yet. We are building and testing it with the First 1000. Join the community to be among the first to know." },
  { q: "What is period quality poverty?", a: problem.definition },
  { q: "What is EarthPant made from?", a: "EarthPant has a bamboo fibre topsheet at the point of skin contact, a breathable backsheet, and no synthetic fragrance or chlorine. We will publish every material as the formulation is confirmed." },
  { q: "How is my data used?", a: "We use your details to run the First 1000 community: updates, research invitations and beta testing. Optional questions are always optional. Read our privacy policy for full details." },
];
