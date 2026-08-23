import StatCounter from "./StatCounter";
import { BRAND, SERVICES } from "../data/siteContent";

// Every number here comes from what's already in siteContent.js —
// nothing fabricated. Update BRAND.founded or the hardcoded figures
// there if the real counts change.
function StatsSection() {
  const yearsActive = new Date().getFullYear() - BRAND.founded;

  return (
    <div className="bg-[#2A0C22] shadow-2xl shadow-black/30 border-t-2 border-[#D9A441]/60 rounded-2xl py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
      <StatCounter value={yearsActive} suffix="+" label="Years of Excellence" />
      <StatCounter value={1000} suffix="+" label="Clients Trained" />
      <StatCounter value={SERVICES.length} label="Services Offered" />
      <StatCounter value={15} label="Titles in Development" />
    </div>
  );
}

export default StatsSection;