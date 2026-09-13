import { useEffect, useRef, useState } from "react";

// Crossfades through every photo in `photos` every `interval` ms, with
// dot navigation to jump straight to one. Pauses while the mouse is over
// it. Mirrors the same crossfade pattern used by ServiceGallery.
//
// `photos` accepts either plain image strings, or objects like
// { src, focalPoint } when a photo needs its crop anchored somewhere
// other than dead-center (e.g. a tall photo where object-cover on a wide
// banner would otherwise cut someone's head off).
function StaffGroupGallery({ photos, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = (nextIndex) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(nextIndex);
      setVisible(true);
    }, 300);
  };

  useEffect(() => {
    if (paused || photos.length <= 1) return;

    timerRef.current = setInterval(() => {
      goTo((index + 1) % photos.length);
    }, interval);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, interval, photos.length]);

  if (!photos || photos.length === 0) return null;

  // Normalize each entry so the rest of the component can always read
  // .src and .focalPoint, whether the caller passed plain strings or
  // { src, focalPoint } objects.
  const slides = photos.map((p) =>
    typeof p === "string" ? { src: p, focalPoint: "center" } : { focalPoint: "center", ...p }
  );
  const slide = slides[index];

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-sm bg-[#3B1130]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="aspect-[16/9] md:aspect-[21/9]">
        <img
          src={slide.src}
          alt={`Staff group photo ${index + 1}`}
          style={{ objectPosition: slide.focalPoint }}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-8 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Show staff group photo ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#E8871D]" : "w-2 bg-[#F6EFE7]/40 hover:bg-[#F6EFE7]/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default StaffGroupGallery;