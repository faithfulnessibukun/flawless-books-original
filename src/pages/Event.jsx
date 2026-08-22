import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { EVENT_CATEGORIES } from "../data/eventContent";

function Events() {
  return (
    <div className="bg-[#F7EFF3]">
      <Navbar />

      <section className="bg-[#3B1130] py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
            /ɪˈvɛnts/ Events
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-[#F6EFE7]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Moments in the Making
          </h1>
          <p className="text-[#F6EFE7]/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Teaching sessions, competitions, and milestones from the Flawless
            journey so far.
          </p>
        </div>
      </section>

      {EVENT_CATEGORIES.map((category, index) => (
        <section
          key={category.id}
          className={`max-w-6xl mx-auto px-5 md:px-8 py-16 ${
            index % 2 === 1 ? "bg-white" : ""
          }`}
        >
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
            {category.ipa}
          </p>
          <h2
            className="text-2xl md:text-3xl font-black text-[#241B22]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {category.title}
          </h2>
          <p className="text-[#8A7A85] mt-2 max-w-2xl">{category.description}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {category.photos.map((photo, photoIndex) => (
              <div
                key={`${category.id}-${photoIndex}`}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="p-4 text-sm font-semibold text-[#241B22]">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}

export default Events;