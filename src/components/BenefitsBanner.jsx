import { FaGlobe, FaBullseye, FaBolt, FaHeart } from "react-icons/fa";
import { BENEFITS } from "../data/siteContent";

const ICONS = {
  clock: FaGlobe,
  target: FaBullseye,
  bolt: FaBolt,
  heart: FaHeart,
};

function BenefitsBanner() {
  return (
    <div className="bg-[#2A0C22] rounded-2xl p-8 md:p-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {BENEFITS.map((benefit) => {
          const Icon = ICONS[benefit.icon] || FaHeart;
          return (
            <div key={benefit.title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE7]/10 flex items-center justify-center shrink-0">
                <Icon className="text-[#D9A441]" size={16} />
              </div>
              <div>
                <h3 className="font-bold text-[#F6EFE7] text-sm">
                  {benefit.title}
                </h3>
                <p className="text-xs text-[#F6EFE7]/60 mt-1 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BenefitsBanner;
