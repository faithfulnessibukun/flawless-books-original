import {
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { SOCIALS } from "../data/siteContent";

const ICONS = {
  YouTube: FaYoutube,
  Telegram: FaTelegram,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  Twitter: FaTwitter,
  Facebook: FaFacebook,
  "Facebook Page": FaFacebook,
};

// Entries with a real `url` (set in siteContent.js) render as working
// links that open in a new tab. Entries without one yet (Telegram, both
// Facebook links — see the TODOs there) render dimmed and unclickable
// instead of pointing somewhere wrong.
//
// layout="icons" — a row of circular icon buttons (used in the Footer).
// layout="list"  — icon + platform + handle, one per line (used on Contact).
function SocialLinks({ layout = "icons", className = "" }) {
  if (layout === "list") {
    return (
      <div className={`space-y-3 ${className}`}>
        {SOCIALS.map((social) => {
          const Icon = ICONS[social.platform] || FaFacebook;
          const row = (
            <div className="flex items-center gap-3 text-[#8A7A85]">
              <Icon className="text-[#3B1130] shrink-0" size={16} />
              <span className="font-semibold text-[#241B22]">
                {social.platform}:
              </span>
              <span>{social.handle}</span>
            </div>
          );

          return social.url ? (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#E8871D] transition"
            >
              {row}
            </a>
          ) : (
            <div key={social.platform} title="Link coming soon">
              {row}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map((social) => {
        const Icon = ICONS[social.platform] || FaFacebook;

        return social.url ? (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="w-9 h-9 rounded-full bg-[#F6EFE7]/10 hover:bg-[#E8871D] text-[#F6EFE7] hover:text-[#2A0C22] flex items-center justify-center transition"
          >
            <Icon size={15} />
          </a>
        ) : (
          <span
            key={social.platform}
            aria-label={`${social.platform} — link coming soon`}
            title="Link coming soon"
            className="w-9 h-9 rounded-full bg-[#F6EFE7]/5 text-[#F6EFE7]/30 flex items-center justify-center cursor-not-allowed"
          >
            <Icon size={15} />
          </span>
        );
      })}
    </div>
  );
}

export default SocialLinks;