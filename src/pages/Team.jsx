import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StaffGroupGallery from "../components/StaffGroupGallery";
import { CEO, STAFF, STAFF_GROUP_PHOTOS } from "../data/teamContent";

function Team() {
  return (
    <div className="bg-[#F7EFF3]">
      <Navbar />

      <section className="bg-[#3B1130] py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
            /tiːm/ Our Team
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-[#F6EFE7]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            The People Behind Flawless
          </h1>
        </div>
      </section>

      {/* CEO — featured */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-20">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden grid md:grid-cols-2">
          <div className="aspect-[4/5] md:aspect-auto">
            <img
              src={CEO.photo}
              alt={CEO.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
              /siːˌiːˈoʊ/ Leadership
            </p>
            <h2
              className="text-3xl font-black text-[#241B22]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {CEO.name}
            </h2>
              <p className="font-bold text-[#E8871D] mt-1 text-left w-full transform translate-x-10">{CEO.role}</p>
            <p className="text-[#8A7A85] mt-4 leading-relaxed">{CEO.bio}</p>
          </div>
        </div>
      </section>

      {/* Staff grid */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#D9A441] mb-2">
              /stæf/ Our People
            </p>
            <h2
              className="text-3xl font-black text-[#241B22] inline-block relative"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Meet the Team
              <span className="block w-14 h-1 bg-[#E8871D] rounded-full mx-auto mt-3" />
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {STAFF.map((member, index) => (
              <div key={`${member.name}-${index}`} className="text-center">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-sm mb-3">
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{ objectPosition: member.focalPoint || "center" }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="font-bold text-[#241B22]"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-xs text-[#8A7A85] mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="text-center mb-6">
              <h3
                className="text-2xl md:text-3xl font-black text-[#241B22] inline-block relative"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Staff Group Photos
                <span className="block w-14 h-1 bg-[#E8871D] rounded-full mx-auto mt-3" />
              </h3>
            </div>
            <StaffGroupGallery photos={STAFF_GROUP_PHOTOS} interval={4000} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Team;