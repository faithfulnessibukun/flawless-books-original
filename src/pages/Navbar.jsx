import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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
      isActive ? "text-[#F6EFE7]" : "text-[#F6EFE7]/80 hover:text-[#F6EFE7]"
    } drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]`;

  return (
    <header className="sticky top-0 z-50 bg-[#3B1130] border-b border-[#F6EFE7]/10 shadow-[0_10px_25px_rgba(59,17,48,0.25)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center leading-none">
          <span
            className="text-2xl font-black text-[#F6EFE7] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            FLAWLESS
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
          className="md:hidden text-transparent p-2"
          aria-label="Open menu"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#3B1130] flex flex-col">
          <div className="h-20 flex items-center justify-between px-5 border-b border-[#F6EFE7]/10">
            <span
              className="text-2xl font-black text-[#F6EFE7] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              FLAWLESS
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-[#F6EFE7] p-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
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
                  `py-4 text-2xl font-bold border-b border-transparent ${
                    isActive ? "text-transparent" : "text-transparent"
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