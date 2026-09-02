

// Crossfades through HERO_ROTATOR every `interval` ms — a photo with a
// large word overlaid on top. Sits in the hero's right column on desktop,
// stacks below the headline on mobile.
function HeroRotator({ interval = 2600 }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % HERO_ROTATOR.length);
        setVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  const slide = HERO_ROTATOR[index];

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-[#F6EFE7]/10 aspect-[4/5] max-w-sm mx-auto md:mx-0">
      <img
        src={slide.image}
        alt={slide.word}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0715]/80 via-transparent to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <p
          className={`text-3xl font-black text-[#F6EFE7] transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {slide.word}
        </p>
      </div>

      {/* Progress dots */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        {HERO_ROTATOR.map((item, i) => (
          <span
            key={item.word}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-[#E8871D]" : "w-1.5 bg-[#F6EFE7]/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroRotator;