import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import { BRAND } from "../data/siteContent";

// Uses Google's free "q=<address>" embed — no API key required, and more
// reliable than hardcoding lat/lng by hand, since Google geocodes the
// address text itself when the map loads.
//
// If you later want a pixel-exact pin (rather than Google's best guess
// at the address), open Google Maps yourself, search the address, right
// click the exact spot, and copy the lat/lng shown — then replace
// `mapQuery` below with `${lat},${lng}` instead of the address text.
const mapQuery = encodeURIComponent(BRAND.address);
const embedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

function LocationMap() {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="flex-1 min-h-[220px]">
        <iframe
          title="Flawless Consulting Firm Ltd location"
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="p-5 flex items-center justify-between gap-3">
        <div className="flex items-start gap-2 min-w-0">
          <FaMapMarkerAlt className="text-[#E8871D] shrink-0 mt-1" size={14} />
          <p className="text-sm text-[#8A7A85] leading-relaxed">
            {BRAND.address}
          </p>
        </div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1.5 text-xs font-bold text-[#3B1130] hover:text-[#E8871D] transition"
        >
          <FaDirections size={13} /> Directions
        </a>
      </div>
    </div>
  );
}

export default LocationMap;