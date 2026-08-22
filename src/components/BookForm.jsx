import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addBook, updateBook } from "../utils/bookStorage";

const BLANK_FORM = {
  title: "",
  author: "",
  level: "",
  price: "",
  originalPrice: "",
  rating: "5",
  description: "",
  amazonUrl: "",
  coverImage: "",
};

function BookForm({ editingBook, onDone }) {
  const [form, setForm] = useState(BLANK_FORM);

  useEffect(() => {
    setForm(editingBook ? { ...BLANK_FORM, ...editingBook } : BLANK_FORM);
  }, [editingBook]);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.amazonUrl.trim()) {
      toast.error("Title and Amazon link are required.");
      return;
    }

    if (editingBook) {
      updateBook(editingBook.id, form);
      toast.success("Book updated.");
    } else {
      addBook(form);
      toast.success("Book added.");
    }

    setForm(BLANK_FORM);
    onDone?.();
  };

  const inputClasses =
    "w-full border-2 border-[#3B1130]/10 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#E8871D] text-sm";
  const labelClasses =
    "block text-xs font-bold uppercase tracking-wider text-[#241B22] mb-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm p-6 space-y-4"
    >
      <h2
        className="text-lg font-bold text-[#241B22]"
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        {editingBook ? "Edit Book" : "Add a Book"}
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>Title *</label>
          <input
            value={form.title}
            onChange={handleChange("title")}
            className={inputClasses}
            placeholder="Flawless Phonics — Primary Edition"
          />
        </div>

        <div>
          <label className={labelClasses}>Author</label>
          <input
            value={form.author}
            onChange={handleChange("author")}
            className={inputClasses}
            placeholder="Flawless Consulting Firm Ltd"
          />
        </div>

        <div>
          <label className={labelClasses}>Level</label>
          <input
            value={form.level}
            onChange={handleChange("level")}
            className={inputClasses}
            placeholder="Nursery, Primary, Secondary..."
          />
        </div>

        <div>
          <label className={labelClasses}>Price</label>
          <input
            value={form.price}
            onChange={handleChange("price")}
            className={inputClasses}
            placeholder="₦4,800"
          />
        </div>

        <div>
          <label className={labelClasses}>
            Original price <span className="normal-case font-normal text-[#8A7A85]">(optional — shows a sale badge)</span>
          </label>
          <input
            value={form.originalPrice}
            onChange={handleChange("originalPrice")}
            className={inputClasses}
            placeholder="₦5,500"
          />
        </div>

        <div>
          <label className={labelClasses}>Rating (1–5)</label>
          <select
            value={form.rating}
            onChange={handleChange("rating")}
            className={inputClasses}
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>
                {n} star{n === 1 ? "" : "s"}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClasses}>Amazon link *</label>
          <input
            value={form.amazonUrl}
            onChange={handleChange("amazonUrl")}
            className={inputClasses}
            placeholder="https://www.amazon.com/..."
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClasses}>Cover image URL</label>
          <input
            value={form.coverImage}
            onChange={handleChange("coverImage")}
            className={inputClasses}
            placeholder="Leave blank to use the placeholder cover"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClasses}>Description</label>
          <textarea
            value={form.description}
            onChange={handleChange("description")}
            className={`${inputClasses} min-h-[80px]`}
            placeholder="A short description of the book..."
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-[#E8871D] hover:bg-[#C96F12] text-[#2A0C22] font-bold px-6 py-2.5 rounded-xl transition"
        >
          {editingBook ? "Save Changes" : "Add Book"}
        </button>
        {editingBook && (
          <button
            type="button"
            onClick={onDone}
            className="text-[#8A7A85] hover:text-[#241B22] font-semibold px-4 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default BookForm;
