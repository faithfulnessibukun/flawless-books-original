import { Link } from "react-router-dom";
import { BRAND, SOCIALS } from "../data/siteContent";

// Four-column footer, mirroring the QuickReads reference structure:
// brand blurb, Explore, Company, and Stay Connected (contact + socials).
function Footer() {
  return (
    <footer className="bg-[#2A0C22] text-[#F6EFE7] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span
              className="text-2xl font-black"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              FLAWLESS
            </span>
            <p className="text-[#F6EFE7]/60 text-sm mt-3 leading-relaxed max-w-xs">
              Accent training, communication consultancy, and books built on
              British-English standards.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.15em] text-[#D9A441] uppercase mb-3">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-[#F6EFE7]/80">
              <li><Link to="/books" className="hover:text-[#F6EFE7] transition">Books</Link></li>
              <li><Link to="/services" className="hover:text-[#F6EFE7] transition">Services</Link></li>
              <li><Link to="/about" className="hover:text-[#F6EFE7] transition">About</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.15em] text-[#D9A441] uppercase mb-3">
              Company
            </p>
            <ul className="space-y-2 text-sm text-[#F6EFE7]/80">
              <li><Link to="/about" className="hover:text-[#F6EFE7] transition">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-[#F6EFE7] transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.15em] text-[#D9A441] uppercase mb-3">
              Stay Connected
            </p>
            <ul className="space-y-1.5 text-sm text-[#F6EFE7]/80 mb-4">
              <li>{BRAND.phone}</li>
              <li>{BRAND.email}</li>
            </ul>
            <ul className="space-y-1.5 text-xs text-[#F6EFE7]/60">
              {SOCIALS.slice(0, 4).map((social) => (
                <li key={social.platform}>
                  {social.platform}: {social.handle}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F6EFE7]/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F6EFE7]/50">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          {/* Admin removed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
