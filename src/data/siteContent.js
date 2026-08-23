// All the real, static content for the site lives here — brand details,
// services, history, vision/mission, achievements, contact info. Pulling
// it out of the page components keeps the JSX focused on layout, and
// makes it trivial to update copy without touching markup.

export const BRAND = {
  name: "Flawless Consulting Firm Ltd",
  ipa: "/ˈflɔːlɪs kənˈsʌltɪŋ fɜːm/",
  tagline: "Speak with flawless precision",
  founded: 2016,
  email: "flawlessconsult01@gmail.com",
  emails: [
    "flawlessconsult01@gmail.com",
    "flawlessaccent@gmail.com",
    "flawlessaccent@yahoo.com",
  ],
  phone: "0703 948 1207",
  telephone: "0903 506 2576",
  address: "Plot 11, House 54 Adetola Street, Aguda, Surulere, Lagos.",
};

export const SOCIALS = [
  { platform: "YouTube", handle: "flawlessconsultingfirm" },
  { platform: "Telegram", handle: "Flawless Speaking Community Hub" },
  { platform: "Instagram", handle: "flawlessconsultingfirmltd" },
  { platform: "TikTok", handle: "@flawlessconsulting" },
  { platform: "Twitter", handle: "@flawlessconsul8" },
  { platform: "Facebook", handle: "Flaw Less" },
  { platform: "Facebook Page", handle: "Flawless Consulting Firm Ltd." },
];

// Every service, with a short IPA gloss — this is the recurring design
// motif used throughout the site (see BRAND.ipa above).
export const SERVICES = [
  {
    title: "Accent Polishing",
    ipa: "/ˈæksɛnt ˈpɒlɪʃɪŋ/",
    description:
      "Certified British English training to make your accent impeccable and globally recognised.",
  },
  {
    title: "Public Speaking Training",
    ipa: "/ˈpʌblɪk ˈspiːkɪŋ/",
    description:
      "Captivate and inspire an audience with confidence, structure, and charisma.",
  },
  {
    title: "Voice Modulation & Therapy",
    ipa: "/vɔɪs ˌmɒdjʊˈleɪʃən/",
    description:
      "Techniques to strengthen your voice quality and expressiveness for real impact.",
  },
  {
    title: "Education & Communication Consultation",
    ipa: "/ˌɛdjʊˈkeɪʃən/",
    description:
      "Expert guidance on educational strategy and effective communication practice.",
  },
  {
    title: "Presentation Skills Training",
    ipa: "/ˌprɛzənˈteɪʃən skɪlz/",
    description:
      "Deliver compelling, persuasive presentations that leave a lasting impression.",
  },
  {
    title: "Phonics, Diction & Elocution",
    ipa: "/ɪˌlɒkˈjuːʃən/",
    description:
      "Comprehensive British-English training for learners of every age.",
  },
  {
    title: "Montessori Training & Materials",
    ipa: "/ˌmɒntɪˈsɔːri/",
    description:
      "Montessori programmes and high-quality materials for educational settings.",
  },
  {
    title: "School Rebranding",
    ipa: "/riːˈbrændɪŋ/",
    description:
      "Elevate a school's reputation and performance through expert consulting.",
  },
  {
    title: "Etiquette & Comportment Training",
    ipa: "/ˈɛtɪkɛt/",
    description:
      "Cultivate grace, poise, and professionalism for personal and public life.",
  },
  {
    title: "Personal Development Workshops",
    ipa: "/dɪˈvɛləpmənt/",
    description:
      "Tailored workshops that unlock potential and build lasting confidence.",
  },
  {
    title: "Editing & Proofreading",
    ipa: "/ˈɛdɪtɪŋ/",
    description:
      "Ensure your published writing is flawless, from manuscript to final proof.",
  },
  {
    title: "MC / Compère Services",
    ipa: "/kɒmˈpɛə/",
    description:
      "Experienced hosts for school and corporate events, seamless and engaging.",
  },
];

export const CLIENTELE = [
  "Professionals enhancing their accent for career advancement",
  "Speakers preparing for presentations, conferences, or speeches",
  "Actors, voice-over artists, and broadcasters refining delivery",
  "Schools, colleges, and universities seeking teaching-method consultation",
  "Corporate teams refining presentations for pitches and client meetings",
  "Parents enrolling children in phonics, diction, and elocution classes",
  "Authors and publishers needing editing and proofreading",
  "Schools sourcing Montessori training and materials",
  "Companies undergoing rebranding and communication strategy work",
  "Individuals pursuing etiquette and comportment training",
  "Event organisers booking MCs for school or corporate events",
];

// A real, dated sequence — the timeline uses these dates as its structure
// because the order genuinely carries information here.
export const TIMELINE = [
  {
    year: "2016",
    title: "Founded",
    description:
      "Began from home, training selected schools in British-English accent and communication.",
  },
  {
    year: "2017",
    title: "Registered with the CAC",
    description:
      'Officially registered as "Flawless Accent International" on April 4th.',
  },
  
  {
    year: "2022",
    title: "Renamed to Flawless Consulting Firm Ltd",
    description:
      "Marked our fifth anniversary by broadening our reach beyond linguistic training.",
  },
  {
    year: "2022",
    title: "Flawless Read Pro Bee Competition",
    description:
      "Our inaugural literacy competition aired on TVC, GOtv, and DStv.",
  },
  {
    year: "2023",
    title: "Trademark secured",
    description:
      "Secured trademark protection for the firm's name on November 15th.",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Flawless Phonics Textbooks",
    description:
      "Our first Nursery and Primary textbook series, built to foster literacy and a love of reading.",
  },
  {
    title: "1,000+ clients trained",
    description:
      "Personalised coaching delivered to a diverse clientele across Nigeria.",
  },
  {
    title: "15 titles in development",
    description:
      "A full textbook range in progress, spanning Nursery through College level.",
  },
  {
    title: "National broadcast reach",
    description:
      "The Flawless Read Pro Bee Competition reached audiences on major TV networks.",
  },
];

export const VISION =
  "A world where every individual speaks with clarity and confidence — Africa's premier literacy and British-accent-polishing consultancy, esteemed globally for unmatched expertise.";

export const MISSION = [
  {
    title: "Accent Polishing Excellence",
    description:
      "Honing accent-polished verbal communication and fostering linguistic precision.",
  },
  {
    title: "Cultural Integration",
    description:
      "Bridging social, professional, and international divides while celebrating African languages and traditions.",
  },
];

// "Browse by Category" tiles on the Books/Home pages — mirrors how
// Flawless actually segments its materials (by learner level), plus one
// general-audience category for non-textbook titles.
// One combined photo showing several book covers together (not yet split
// into individual covers) — shown as a banner on the Books page. Replace
// this URL once you have the real photo, or once it's cropped into
// individual covers for each book's `coverImage` in bookStorage.js.
import GROUPBOOKS from "../assets/groupbooks.jpeg";
import GROUPOFBOOK2 from "../assets/groupofbook2.jpeg";
import GROUPOFBOOKS3 from "../assets/groupofbooks3.jpeg";
import GROUPOFBOOK from "../assets/groupofbook.jpeg";

export const BOOKS_COLLECTION_IMAGE = GROUPBOOKS;

// Three slots for group photos used on the Books page. Replace these
// imports with your chosen images (or keep the defaults in `src/assets`).
export const BOOK_GROUP_PHOTOS = [GROUPOFBOOK2, GROUPOFBOOKS3, GROUPOFBOOK];
export const BOOK_LEVELS = [
  { label: "Nursery", icon: "seedling" },
  { label: "Primary", icon: "book" },
  { label: "Secondary", icon: "graduation" },
  { label: "Personal Development", icon: "brain" },
];

// The "Why Watch/Buy From Us" benefits banner.
export const BENEFITS = [
  {
    icon: "clock",
    title: "British-English Standard",
    description: "Every title is built on certified phonics and diction practice.",
  },
  {
    icon: "target",
    title: "Practical, Structured Learning",
    description: "Clear progression from nursery through secondary level.",
  },
  {
    icon: "bolt",
    title: "Fast Amazon Checkout",
    description: "Buy securely through Amazon in a couple of taps.",
  },
  {
    icon: "heart",
    title: "Built by Educators",
    description: "Written by the team behind Flawless's own training programmes.",
  },
];

export const WORKFLOW = [
  { letter: "F", word: "Frontline" },
  { letter: "L", word: "Lovable" },
  { letter: "A", word: "Aberrant" },
  { letter: "W", word: "Winsome" },
  { letter: "L", word: "Lofty" },
  { letter: "E", word: "Endearing" },
  { letter: "S", word: "Singular" },
  { letter: "S", word: "Satisfying" },
];