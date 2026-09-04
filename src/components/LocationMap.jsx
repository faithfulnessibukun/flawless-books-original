import { useEffect, useState } from "react";
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
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    // If iframe doesn't load within 8s, show fallback. Useful when network
    // blocks Google Maps or the embed is prevented by browser settings.
    const t = setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [loaded]);

  function retryLoad() {
    setFailed(false);
    setLoaded(false);
    // bump key to force iframe remount
    setIframeKey((k) => k + 1);
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="flex-1 min-h-[220px] relative">
        {!failed ? (
          <iframe
            title="Flawless Consulting Firm Ltd location"
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoaded(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6">
            <div className="max-w-sm mx-auto text-center">
              <div className="relative rounded-lg overflow-hidden shadow-inner mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-[#E7DEE1] to-[#D8C6CC] flex items-center justify-center">
                  {/* simple stylized map thumbnail */}
                  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#C9B4B9" strokeWidth="1.5" fill="#F6EFE7"/>
                    <path d="M3 7h18M3 12h18M3 17h10" stroke="#C9B4B9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="p-3 bg-white text-left text-xs text-[#8A7A85]">Map preview not available</div>
              </div>

              <p className="font-bold text-[#241B22] mb-2">Map unavailable</p>
              <p className="text-sm text-[#8A7A85] mb-4">
                Your browser or network may be blocking Google Maps. Try reloading
                the map or open it in Google Maps.
              </p>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={retryLoad}
                  className="px-4 py-2 bg-white border border-[#E8871D] text-[#3B1130] rounded-full font-bold"
                >
                  Retry
                </button>

                <a
                  href={embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#E8871D] text-white rounded-full font-bold"
                >
                  Open map
                </a>
              </div>
            </div>
          </div>
        )}
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