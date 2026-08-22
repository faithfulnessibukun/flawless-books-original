import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BRAND, SOCIALS } from "../data/siteContent";

const SOCIAL_ICONS = {
  YouTube: FaYoutube,
  Telegram: FaTelegram,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  Twitter: FaTwitter,
  Facebook: FaFacebook,
  "Facebook Page": FaFacebook,
};

function Contact() {
  return (
    <div className="bg-[#F7EFF3]">
      <Navbar />

      <section className="bg-[#3B1130] py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
            /kɒntækt/ Contact
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-[#F6EFE7]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Get In Touch
          </h1>
          <p className="text-[#F6EFE7]/70 mt-4 max-w-xl mx-auto leading-relaxed">
            Questions about a service or a title? Reach us any of these ways.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2
            className="text-xl font-bold text-[#241B22] mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Details
          </h2>

          <div className="space-y-5">
            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-[#E8871D] shrink-0 mt-1" />
              <p className="text-[#8A7A85] leading-relaxed">{BRAND.address}</p>
            </div>

            <div className="flex gap-4">
              <FaPhone className="text-[#E8871D] shrink-0 mt-1" />
              <div className="text-[#8A7A85]">
                <p>{BRAND.phone}</p>
                <p>{BRAND.telephone}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="text-[#E8871D] shrink-0 mt-1" />
              <div className="text-[#8A7A85]">
                {BRAND.emails.map((email) => (
                  <p key={email}>{email}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2
            className="text-xl font-bold text-[#241B22] mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Follow along
          </h2>

          <div className="space-y-3">
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social.platform] || FaEnvelope;
              return (
                <div
                  key={social.platform}
                  className="flex items-center gap-3 text-[#8A7A85]"
                >
                  <Icon className="text-[#3B1130] shrink-0" size={16} />
                  <span className="font-semibold text-[#241B22]">
                    {social.platform}:
                  </span>
                  <span>{social.handle}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
