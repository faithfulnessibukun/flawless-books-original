import { useEffect, useMemo, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import CategoryBrowser from "../components/CategoryBrowser";
import BenefitsBanner from "../components/BenefitsBanner";
import NewsletterSignup from "../components/NewsletterSignup";
import { getBooks } from "../utils/bookStorage";
import { BOOK_GROUP_PHOTOS } from "../data/siteContent";
import groupbooks from "../assets/groupbooks.jpeg";

function Books() {
  const [books, setBooks] = useState([]);
  const [activeLevel, setActiveLevel] = useState(null);

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

  const filteredBooks = useMemo(
    () => (activeLevel ? books.filter((book) => book.level === activeLevel) : books),
    [books, activeLevel]
  );

  return (
    <div className="bg-[#F7EFF3] min-h-screen">
      <Navbar />

      <section className="bg-[#3B1130] py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
            /bʊks/ Books
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-[#F6EFE7]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Learning Materials
          </h1>
          <p className="text-[#F6EFE7]/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Affordable books for nursery, primary, and secondary learners.
            Tap any title to complete your purchase on Amazon.
          </p>
        </div>
      </section>
      {/* Group photo of the titles — swap BOOKS_COLLECTION_IMAGE in
          siteContent.js once you have the real photo, or once it's split
          into individual covers for each book below. */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-14">
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img
            src={groupbooks}
            alt="Our published titles"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Three group-photo slots for books */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-8">
        <h3 className="text-xl font-bold mb-4">Group of Books</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {BOOK_GROUP_PHOTOS.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border p-1">
              <img src={src} alt={`Group ${i + 1}`} className="w-full h-40 object-cover" />
              <p className="text-xs mt-2 text-center text-[#8A7A85]">Slot {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14">
        <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
          /brraʊz/ Browse by Category
        </p>
        <h2
          className="text-2xl font-black text-[#241B22] mb-6"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Shop by Level
        </h2>
        <CategoryBrowser
          counts={counts}
          activeLevel={activeLevel}
          onSelect={setActiveLevel}
        />
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-6">
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-black text-[#241B22] inline-block relative"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {activeLevel ? activeLevel : "Popular Books"}
            <span className="block w-14 h-1 bg-[#E8871D] rounded-full mx-auto mt-3" />
          </h2>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-16 text-center">
            <FaBookOpen className="mx-auto text-[#D8CDB6] mb-4" size={36} />
            <h3
              className="text-lg font-bold text-[#241B22]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              No books here yet
            </h3>
            <p className="text-[#8A7A85] mt-2">
              Check back soon, or browse a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 space-y-8">
        <BenefitsBanner />
        <NewsletterSignup />
      </section>

      <Footer />
    </div>
  );
}

export default Books;