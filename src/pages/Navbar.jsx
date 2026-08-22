import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BRAND } from "../data/siteContent";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/books", label: "Books" },
  { to: "/team", label: "Team" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition ${
      isActive ? "text-[#E8871D]" : "text-[#F6EFE7]/80 hover:text-[#F6EFE7]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#3B1130]/95 backdrop-blur border-b border-[#F6EFE7]/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span
            className="text-2xl font-black text-[#F6EFE7] tracking-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            FLAWLESS
          </span>
          <span className="text-[10px] font-mono tracking-[0.15em] text-[#D9A441] mt-1">
            {BRAND.ipa}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-7">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-[#F6EFE7] p-2"
          aria-label="Open menu"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#3B1130] flex flex-col">
          <div className="h-20 flex items-center justify-between px-5">
            <span
              className="text-2xl font-black text-[#F6EFE7]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              FLAWLESS
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-[#F6EFE7] p-2"
              aria-label="Close menu"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-5 mt-4">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `py-4 text-2xl font-bold border-b border-[#F6EFE7]/10 ${
                    isActive ? "text-[#E8871D]" : "text-[#F6EFE7]"
                  }`
                }
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;