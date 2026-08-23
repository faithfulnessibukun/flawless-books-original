// Short, punchy words paired with a placeholder photo — used by the
// hero's rotating side panel. Once you have real photos, swap the
// `image` URLs; the overlaid word can stay as a caption even over a
// real photo, or you can remove it per-slide if the photo speaks for
// itself.

const shot = (label) =>
  `https://placehold.co/700x800/3B1130/F6EFE7?text=${encodeURIComponent(
    label
  )}&font=raleway`;

export const HERO_ROTATOR = [
  { word: "Precision", image: shot("Precision") },
  { word: "Confidence", image: shot("Confidence") },
  { word: "Clarity", image: shot("Clarity") },
  { word: "Elocution", image: shot("Elocution") },
  { word: "Excellence", image: shot("Excellence") },
];