import { useEffect, useRef, useState } from "react";
import { SERVICE_GALLERY } from "../data/serviceGalleryContent";

// A single large photo that crossfades to the next one every few seconds,
// with a caption + service name overlay and clickable dots to jump
// straight to a slide. Pauses while the mouse is over it.
function ServiceGallery({ interval = 4500 }) {
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
    if (paused) return;

    timerRef.current = setInterval(() => {
      goTo((index + 1) % SERVICE_GALLERY.length);
    }, interval);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, interval]);

  const slide = SERVICE_GALLERY[index];

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-lg bg-[#3B1130]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="aspect-[16/9] md:aspect-[21/9]">
        <img
          src={slide.image}
          alt={slide.caption}
          style={{ objectPosition: slide.focalPoint || "center" }}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Caption overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A0715]/90 via-[#1A0715]/40 to-transparent p-6 md:p-8">
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#D9A441] mb-1">
          {slide.service}
        </p>
        <h3
          className="text-xl md:text-2xl font-black text-[#F6EFE7]"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {slide.caption}
        </h3>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-8 flex gap-2">
        {SERVICE_GALLERY.map((item, i) => (
          <button
            key={item.id}
            onClick={() => goTo(i)}
            aria-label={`Show ${item.caption}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#E8871D]" : "w-2 bg-[#F6EFE7]/40 hover:bg-[#F6EFE7]/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceGallery;