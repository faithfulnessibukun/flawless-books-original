import { FaSeedling, FaBook, FaGraduationCap, FaBrain } from "react-icons/fa";
import { BOOK_LEVELS } from "../data/siteContent";

const ICONS = {
  seedling: FaSeedling,
  book: FaBook,
  graduation: FaGraduationCap,
  brain: FaBrain,
};

// Clicking a tile calls onSelect(level) so the parent page can filter.
// `activeLevel` highlights the one currently selected (or null for "All").
function CategoryBrowser({ counts = {}, activeLevel, onSelect }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {BOOK_LEVELS.map((cat) => {
        const Icon = ICONS[cat.icon] || FaBook;
        const isActive = activeLevel === cat.label;
        const count = counts[cat.label] || 0;

        return (
          <button
            key={cat.label}
            onClick={() => onSelect(isActive ? null : cat.label)}
            className={`flex flex-col items-center gap-2 rounded-2xl p-5 border-2 transition text-center ${
              isActive
                ? "border-[#E8871D] bg-[#FCEEDD]"
                : "border-transparent bg-white hover:border-[#3B1130]/10 shadow-sm"
            }`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                isActive ? "bg-[#E8871D] text-[#2A0C22]" : "bg-[#F7EFF3] text-[#3B1130]"
              }`}
            >
              <Icon size={18} />
            </div>
            <span className="font-bold text-sm text-[#241B22]">{cat.label}</span>
            <span className="text-xs text-[#8A7A85]">
              {count} {count === 1 ? "title" : "titles"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default CategoryBrowser;
