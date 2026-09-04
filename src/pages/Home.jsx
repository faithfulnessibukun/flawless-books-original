import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import CategoryBrowser from "../components/CategoryBrowser";
import BenefitsBanner from "../components/BenefitsBanner";
import NewsletterSignup from "../components/NewsletterSignup";
import Reveal from "../components/Reveal";
import RotatingText from "../components/RotatingText";
import StatsSection from "../components/StatsSection";
import ClienteleMarquee from "../components/ClienteleMarquee";
import ServiceGallery from "../components/ServiceGallery";
import { BRAND, SERVICES } from "../data/siteContent";
import { getBooks } from "../utils/bookStorage";
import heroBackground from "../assets/backgroundpicture.jpeg";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const load = () => setBooks(getBooks());
    load();
    window.addEventListener("booksUpdated", load);
    return () => window.removeEventListener("booksUpdated", load);
  }, []);

  useEffect(() => {
    let raf = null;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const offset = Math.min(Math.max(window.scrollY * 0.18, 0), 200);
        setBgOffset(offset);
        raf = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const counts = useMemo(() => {
    const map = {};
    books.forEach((book) => {
      if (!book.level) return;
      map[book.level] = (map[book.level] || 0) + 1;
    });
    return map;
  }, [books]);

  const featuredBooks = books.slice(0, 4);
  const [bgOffset, setBgOffset] = useState(0);

  return (
    <div className="bg-transparent">
      <Navbar />

      {/* Hero — the "stage" the whole brand lives on */}
      <section
        className="relative overflow-hidden bg-[#3B1130]"
        style={{
          backgroundImage: `linear-gradient(rgba(89, 45, 72, 0.68), rgba(89, 45, 72, 0.78)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: `center calc(15% + ${bgOffset}px)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -top-20 left-[10%] w-40 h-[140%] bg-gradient-to-b from-[#D9A441]/30 to-transparent rotate-[8deg] blur-2xl animate-[drift_11s_ease-in-out_infinite]" />
          <div className="absolute -top-20 left-[45%] w-48 h-[140%] bg-gradient-to-b from-[#E8871D]/25 to-transparent rotate-[3deg] blur-2xl animate-[drift_14s_ease-in-out_infinite]" />
          <div className="absolute -top-20 left-[75%] w-40 h-[140%] bg-gradient-to-b from-[#D9A441]/30 to-transparent -rotate-[6deg] blur-2xl animate-[drift_9s_ease-in-out_infinite]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 md:px-8 pt-24 pb-28 text-center">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D9A441] mb-5">
              {BRAND.ipa}
            </p>

            <h1
              className="text-5xl md:text-6xl font-black text-[#F6EFE7] leading-[1.05]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Speak with
            </h1>

            <RotatingText
              phrases={["confidence", "clarity", "precision", "eloquence"]}
              interval={3200}
              className="block italic text-[#E8871D] text-5xl md:text-6xl font-black leading-[1.05]"
            />

            <p className="text-[#F6EFE7]/80 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              British-English communication coaching for schools, professionals, and events.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <Link
                to="/services"
                className="bg-[#E8871D] hover:bg-[#C96F12] active:scale-95 text-[#2A0C22] font-bold px-7 py-3.5 rounded-full transition flex items-center gap-2"
              >
                Explore Services <FaArrowRight size={13} />
              </Link>
              <Link
                to="/books"
                className="border-2 border-[#F6EFE7]/30 hover:border-[#F6EFE7]/60 active:scale-95 text-[#F6EFE7] font-bold px-7 py-3.5 rounded-full transition"
              >
                Browse Books
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats card — sits AFTER the hero (not inside it), pulled up with
          negative margin so it overlaps the hero's bottom edge. Doing it
          this way (rather than inside the hero) means the hero's
          overflow-hidden — needed for the drifting beams — never clips it,
          and the pull-up margin doesn't fight Reveal's own slide-in
          transform on the same property. */}
      <div className="relative max-w-5xl mx-auto px-5 md:px-8 -mt-16 md:-mt-20 mb-8 md:mb-12">
        <Reveal>
          <StatsSection />
        </Reveal>
      </div>

      {/* Browse by category */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-16">
        <Reveal>
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
                /brraʊz/ Browse
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-[#241B22]"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Shop by Category
              </h2>
            </div>
            <Link
              to="/books"
              className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-[#3B1130] hover:text-[#E8871D] transition shrink-0"
            >
              View all categories <FaArrowRight size={12} />
            </Link>
          </div>

          <CategoryBrowser counts={counts} activeLevel={null} onSelect={() => {}} />
        </Reveal>
      </section>

      {/* Featured books */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
                /bʊks/ Learning materials
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-[#241B22] inline-block relative"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Popular Books
                <span className="block w-14 h-1 bg-[#E8871D] rounded-full mx-auto mt-3" />
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {featuredBooks.map((book, index) => (
              <Reveal key={book.id} delay={index * 80}>
                <BookCard book={book} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-10">
              <Link
                to="/books"
                className="inline-flex items-center gap-2 border-2 border-[#3B1130]/15 hover:border-[#3B1130]/30 active:scale-95 text-[#3B1130] font-bold px-7 py-3 rounded-full transition"
              >
                Shop All Books <FaArrowRight size={12} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
                /ˈsɜːvɪsɪz/ What we do
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-[#241B22]"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Our Services
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-[#3B1130] hover:text-[#E8871D] transition shrink-0"
            >
              View all <FaArrowRight size={12} />
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.slice(0, 6).map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 90}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <p className="font-mono text-[10px] tracking-[0.1em] text-[#D9A441] mb-2">
                  {service.ipa}
                </p>
                <h3
                  className="font-bold text-lg text-[#241B22]"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[#8A7A85] mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services in action — auto-changing photo gallery */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-20">
        <Reveal>
          <div className="text-center mb-8">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
              /ɪn ˈækʃən/ In Action
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-[#241B22]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Our Services in Action
            </h2>
          </div>
          <ServiceGallery />
        </Reveal>
      </section>

      {/* Trusted by — clientele marquee */}
      <section className="bg-white py-14 border-y border-[#3B1130]/5">
        <Reveal>
          <p className="text-center font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-6">
            /trʌstɪd/ Who We Serve
          </p>
          <ClienteleMarquee />
        </Reveal>
      </section>

      {/* Benefits + newsletter */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 space-y-8">
        <Reveal>
          <BenefitsBanner />
        </Reveal>
        <Reveal delay={100}>
          <NewsletterSignup />
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

export default Home;