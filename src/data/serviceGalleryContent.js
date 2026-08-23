// One slide per service that's naturally "photographable" — people
// actually in a session, on stage, or hosting an event. A few services
// (editing/proofreading, school rebranding consultancy) are left out
// since they're less visual. Each `image` is a placeholder labeled with
// exactly what the real photo should show — swap the URL once you have
// it, the caption/service text can stay as-is.

const shot = (label) =>
  `https://placehold.co/1000x650/3B1130/F6EFE7?text=${encodeURIComponent(
    label
  )}&font=raleway`;

export const SERVICE_GALLERY = [
  {
    service: "Accent Polishing",
    caption: "Accent Polishing Session",
    image: shot("Accent Polishing Session Photo"),
  },
  {
    service: "Public Speaking Training",
    caption: "Public Speaking Training",
    image: shot("Public Speaking Training Photo"),
  },
  {
    service: "Phonics, Diction & Elocution",
    caption: "Elocution Class in Session",
    image: shot("Elocution Class Photo"),
  },
  {
    service: "Presentation Skills Training",
    caption: "Presentation Skills Coaching",
    image: shot("Presentation Skills Coaching Photo"),
  },
  {
    service: "Voice Modulation & Therapy",
    caption: "Voice Therapy Session",
    image: shot("Voice Therapy Session Photo"),
  },
  {
    service: "Etiquette & Comportment Training",
    caption: "Etiquette Training in Progress",
    image: shot("Etiquette Training Photo"),
  },
  {
    service: "Personal Development Workshops",
    caption: "Personal Development Workshop",
    image: shot("Personal Development Workshop Photo"),
  },
  {
    service: "MC / Compère Services",
    caption: "Hosting a Live Event",
    image: shot("MC Hosting an Event Photo"),
  },
];