import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import CategoryBrowser from "../components/CategoryBrowser";
import BenefitsBanner from "../components/BenefitsBanner";
import NewsletterSignup from "../components/NewsletterSignup";
import { BRAND, SERVICES } from "../data/siteContent";
import { getBooks } from "../utils/bookStorage";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const load = () => setBooks(getBooks());
    load();
    window.addEventListener("booksUpdated", load);
    return () => window.removeEventListener("booksUpdated", load);
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

  return (
    <div className="bg-[#F7EFF3]">
      <Navbar />

      {/* Hero — the "stage" the whole brand lives on */}
      <section className="relative bg-[#3B1130] overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -top-20 left-[10%] w-40 h-[140%] bg-gradient-to-b from-[#D9A441]/30 to-transparent rotate-[8deg] blur-2xl" />
          <div className="absolute -top-20 left-[45%] w-48 h-[140%] bg-gradient-to-b from-[#E8871D]/25 to-transparent rotate-[3deg] blur-2xl" />
          <div className="absolute -top-20 left-[75%] w-40 h-[140%] bg-gradient-to-b from-[#D9A441]/30 to-transparent -rotate-[6deg] blur-2xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-5 md:px-8 pt-24 pb-28 text-center">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D9A441] mb-5">
            {BRAND.ipa}
          </p>

          <h1
            className="text-5xl md:text-7xl font-black text-[#F6EFE7] leading-[1.05]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Speak with{" "}
            <span className="italic text-[#E8871D]">flawless</span> precision
          </h1>

          <p className="text-[#F6EFE7]/70 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Accent polishing, public speaking, and communication training
            built on British-English standards — since {BRAND.founded}.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link
              to="/services"
              className="bg-[#E8871D] hover:bg-[#C96F12] text-[#2A0C22] font-bold px-7 py-3.5 rounded-full transition flex items-center gap-2"
            >
              Explore Services <FaArrowRight size={13} />
            </Link>
            <Link
              to="/books"
              className="border-2 border-[#F6EFE7]/30 hover:border-[#F6EFE7]/60 text-[#F6EFE7] font-bold px-7 py-3.5 rounded-full transition"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by category */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
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
      </section>

      {/* Featured books */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/books"
              className="inline-flex items-center gap-2 border-2 border-[#3B1130]/15 hover:border-[#3B1130]/30 text-[#3B1130] font-bold px-7 py-3 rounded-full transition"
            >
              Shop All Books <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.slice(0, 6).map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
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
          ))}
        </div>
      </section>

      {/* Benefits + newsletter */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-20 space-y-8">
        <BenefitsBanner />
        <NewsletterSignup />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
