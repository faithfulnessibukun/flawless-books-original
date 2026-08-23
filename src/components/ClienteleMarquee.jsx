import { CLIENTELE } from "../data/siteContent";

// Duplicate the list once so the CSS loop can jump from -50% back to 0%
// without a visible seam.
function ClienteleMarquee() {
  const track = [...CLIENTELE, ...CLIENTELE];

  return (
    <div className="overflow-hidden">
      <div className="marquee-track flex gap-4 w-max animate-[marquee_36s_linear_infinite]">
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 bg-white border border-[#3B1130]/10 rounded-full px-5 py-2.5 text-sm font-semibold text-[#241B22] shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ClienteleMarquee;