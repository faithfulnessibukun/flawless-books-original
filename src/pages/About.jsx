import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  OVERVIEW,
  OBJECTIVES,
  TIMELINE,
  VISION,
  MISSION,
  WORKFLOW,
  CLIENTELE,
  ACHIEVEMENTS,
} from "../data/siteContent";

function SectionLabel({ ipa, children }) {
  return (
    <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
      {ipa} {children}
    </p>
  );
}

function About() {
  return (
    <div className="bg-[#F7EFF3]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#3B1130] py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <SectionLabel ipa="/əˈbaʊt/">About Us</SectionLabel>
          <h1
            className="text-4xl md:text-5xl font-black text-[#F6EFE7]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Our History
          </h1>
          <p className="text-[#F6EFE7]/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Born from a desire to eradicate unconscious mother-tongue
            interference among Nigerian English speakers, and to cultivate
            extraordinary communicators.
          </p>
        </div>
      </section>

      {/* Overview + Objectives */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <SectionLabel ipa="/ˈəʊvəvjuː/">Overview</SectionLabel>
            <h2
              className="text-2xl font-black text-[#241B22] mb-4"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Why we do this work
            </h2>
            <p className="text-[#8A7A85] leading-relaxed">{OVERVIEW.intro}</p>
            <p className="text-[#8A7A85] leading-relaxed mt-4">
              {OVERVIEW.approach}
            </p>
          </div>

          <div>
            <SectionLabel ipa="/ˌɒbdʒɛkˈtɪvz/">Objectives</SectionLabel>
            <h2
              className="text-2xl font-black text-[#241B22] mb-4"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              What we set out to do
            </h2>
            <ul className="space-y-3">
              {OBJECTIVES.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[#8A7A85] leading-relaxed text-sm"
                >
                  <span className="text-[#E8871D] font-bold shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline — a real sequence, so numbering/dates carry information */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 py-20">
        <div className="relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#3B1130]/15" />

          <div className="space-y-10">
            {TIMELINE.map((event) => (
              <div key={`${event.year}-${event.title}`} className="relative">
                <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-[#E8871D] ring-4 ring-[#F7EFF3]" />
                <p className="font-mono text-xs tracking-[0.1em] text-[#D9A441] mb-1">
                  {event.year}
                </p>
                <h3
                  className="font-bold text-xl text-[#241B22]"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {event.title}
                </h3>
                <p className="text-[#8A7A85] mt-1 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="bg-[#F7EFF3] py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <SectionLabel ipa="/ˈvɪʒən/">Vision</SectionLabel>
            <h2
              className="text-2xl font-black text-[#241B22] mb-4"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Where we're headed
            </h2>
            <p className="text-[#8A7A85] leading-relaxed">{VISION}</p>
          </div>

          <div>
            <SectionLabel ipa="/ˈmɪʃən/">Mission</SectionLabel>
            <h2
              className="text-2xl font-black text-[#241B22] mb-4"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              How we get there
            </h2>
            <div className="space-y-4">
              {MISSION.map((item) => (
                <div key={item.title}>
                  <h3 className="font-bold text-[#241B22]">{item.title}</h3>
                  <p className="text-sm text-[#8A7A85] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow acronym */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-20">
        <SectionLabel ipa="/ˈwɜːkfləʊ/">How We Work</SectionLabel>
        <h2
          className="text-2xl md:text-3xl font-black text-[#241B22] mb-8"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          The FLAWLESS ethic
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {WORKFLOW.map((item) => (
            <div
              key={item.word}
              className="bg-white rounded-2xl p-5 text-center shadow-sm"
            >
              <span
                className="text-3xl font-black text-[#E8871D]"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {item.letter}
              </span>
              <p className="text-sm font-bold text-[#241B22] mt-1">
                {item.word}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-[#3B1130] py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
            /əˈtʃiːvmənts/ Achievements
          </p>
          <h2
            className="text-2xl md:text-3xl font-black text-[#F6EFE7] mb-8"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Milestones so far
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.title}
                className="bg-[#F6EFE7]/5 border border-[#F6EFE7]/10 rounded-2xl p-6"
              >
                <h3 className="font-bold text-[#F6EFE7]">{item.title}</h3>
                <p className="text-sm text-[#F6EFE7]/60 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 py-20">
        <SectionLabel ipa="/ˈklaɪəntiːl/">Who We Serve</SectionLabel>
        <h2
          className="text-2xl md:text-3xl font-black text-[#241B22] mb-8"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Our clientele
        </h2>

        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {CLIENTELE.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[#8A7A85] leading-relaxed"
            >
              <span className="text-[#E8871D] font-bold shrink-0">—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default About;