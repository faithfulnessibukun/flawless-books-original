import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocationMap from "../components/LocationMap";
import { BRAND } from "../data/siteContent";

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

      <section className="max-w-5xl mx-auto px-5 md:px-8 py-20 space-y-10">
        <div className="grid md:grid-cols-2 gap-10">
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

          <LocationMap />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;