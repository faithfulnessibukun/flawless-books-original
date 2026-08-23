import { useEffect, useRef, useState } from "react";

// Counts up from 0 to `value` once it scrolls into view, then stays put.
function StatCounter({ value, suffix = "", duration = 1400, label }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <p
        className="text-4xl md:text-5xl font-black text-[#F6EFE7]"
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs md:text-sm text-[#F6EFE7]/60 mt-2 uppercase tracking-wide font-mono">
        {label}
      </p>
    </div>
  );
}

export default StatCounter;