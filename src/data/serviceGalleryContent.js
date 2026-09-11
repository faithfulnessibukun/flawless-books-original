// Gallery updated with your real event photos.
// Each `image` now points to an actual cropped/optimized photo
// (1000x650, matching your original placeholder ratio) instead of a
// placehold.co placeholder. Captions and titles were rewritten to match
// exactly what's shown on the banner/screen in each photo.
//
// Note: these five photos are from Women Lead Conference, Flawless Read
// Pro Bee Competition, and a Facilitation/Public Speaking training —
// they don't map onto your original service list (Accent Polishing,
// Phonics, Voice Modulation, etc.), so I've named each entry after the
// actual event/session pictured rather than forcing it into one of
// those categories. Swap in real photos for the other services whenever
// you have them, using the same shot() placeholder pattern.
//
// Added a unique `id` field below (two entries share the same `service`
// name — "Women Lead Conference" — so keying off `service` in React
// caused a "duplicate key" warning). Use `item.id` as the key in
// ServiceGallery.jsx instead.

// IMPORTANT: these must be real `import` statements, not plain string
// paths. Vite only bundles/resolves an image if it's imported like this.
// Adjust each filename below to EXACTLY match what's in src/assets
// (check spelling, dashes/no dashes, and .jpg vs .jpeg — they must be
// character-for-character identical, including case).
import womenLeadConference1 from "../assets/womenleadconference1.jpeg";
import spellingBee from "../assets/spellingbee.jpeg";
import facilitationEssentials from "../assets/facilitationessentialstraining.jpeg";
import womenLeadConference2 from "../assets/womenleadconference2.jpeg";
import publicSpeakingTraining from "../assets/trainingonpublicspeaking.jpeg";

const shot = (label) =>
  `https://placehold.co/1000x650/3B1130/F6EFE7?text=${encodeURIComponent(
    label
  )}&font=raleway`;

export const SERVICE_GALLERY = [
  {
    id: "womenleadconference1",
    service: "Women Lead Conference",
    caption: "Women Lead Conference — Empower. Inspire. Lead.",
    image: womenLeadConference1,
    // This source photo is a tall portrait shot, so a plain center-crop
    // on the wide 21:9 banner cuts the face off. Anchoring near the top
    // keeps the face in frame. Adjust the % if it still sits too high/low.
    focalPoint: "center 15%",
  },
  {
    id: "spellingbee",
    service: "Flawless Read Pro Bee Competition (FRPBC)",
    caption: "Flawless Read Pro Bee Competition",
    image: spellingBee,
  },
  {
    id: "facilitationessentialstraining",
    service: "Facilitation Essentials Training",
    caption: "Facilitation Essentials — Key Skills for Effective Facilitation",
    image: facilitationEssentials,
  },
  {
    id: "womenleadconference2",
    service: "Women Lead Conference",
    caption: "Leadership Through Impact — Building Influence, Driving Change",
    image: womenLeadConference2,
  },
  {
    id: "trainingonpublicspeaking",
    service: "Public Speaking Training",
    caption: "Training on Public Speaking — Speak with Confidence. Inspire with Impact.",
    image: publicSpeakingTraining,
  },

  // Keep any services you don't have photos for yet using shot():
  // {
  //   id: "accent-polishing",
  //   service: "Accent Polishing",
  //   caption: "Accent Polishing Session",
  //   image: shot("Accent Polishing Session Photo"),
  // },
];