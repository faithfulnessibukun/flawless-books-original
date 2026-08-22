import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SERVICES } from "../data/siteContent";

function Services() {
  return (
    <div className="bg-[#F7EFF3]">
      <Navbar />

      <section className="bg-[#3B1130] py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
            /ˈsɜːvɪsɪz/ Services
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-[#F6EFE7]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            What We Offer
          </h1>
          <p className="text-[#F6EFE7]/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Twelve disciplines, one standard — precise, confident,
            British-English communication.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition"
            >
              <p className="font-mono text-[10px] tracking-[0.1em] text-[#D9A441] mb-3">
                {service.ipa}
              </p>
              <h3
                className="font-bold text-xl text-[#241B22]"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-[#8A7A85] mt-3 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
