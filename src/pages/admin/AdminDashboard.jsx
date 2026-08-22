import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaSignOutAlt, FaTrash, FaEdit } from "react-icons/fa";
import BookForm from "../../components/BookForm";
import { BOOK_GROUP_PHOTOS } from "../../data/siteContent";
import { STAFF_GROUP_PHOTOS } from "../../data/teamContent";
import { isAdminLoggedIn, adminLogout } from "../../utils/adminAuth";
import { getBooks, deleteBook } from "../../utils/bookStorage";

function AdminDashboard() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [bookPhotos, setBookPhotos] = useState(
    () => JSON.parse(localStorage.getItem("BOOK_GROUP_PHOTOS")) || BOOK_GROUP_PHOTOS
  );
  const [staffPhotos, setStaffPhotos] = useState(
    () => JSON.parse(localStorage.getItem("STAFF_GROUP_PHOTOS")) || STAFF_GROUP_PHOTOS
  );

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      navigate("/admin");
      return;
    }
    const load = () => setBooks(getBooks());
    load();
    window.addEventListener("booksUpdated", load);
    return () => window.removeEventListener("booksUpdated", load);
  }, [navigate]);

  const handleDelete = (book) => {
    if (!window.confirm(`Delete "${book.title}"?`)) return;
    deleteBook(book.id);
    toast.success("Book deleted.");
    if (editingBook?.id === book.id) setEditingBook(null);
  };

  const handleLogout = () => {
    adminLogout();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-[#F7EFF3]">
      <header className="bg-[#3B1130] px-5 md:px-8 py-5 flex items-center justify-between">
        <h1
          className="text-xl font-black text-[#F6EFE7]"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Book Admin
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-[#F6EFE7]/80 hover:text-[#F6EFE7] text-sm font-semibold transition"
        >
          <FaSignOutAlt /> Log Out
        </button>
      </header>

      <div className="max-w-4xl mx-auto px-5 md:px-8 py-10 space-y-8">
        <BookForm
          key={editingBook?.id || "new"}
          editingBook={editingBook}
          onDone={() => setEditingBook(null)}
        />

        {/* Photo slots editor */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="font-bold text-lg mb-3">Editable Photo Slots</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Book Group Photos</h3>
            <div className="grid grid-cols-1 gap-2 mt-2">
              {bookPhotos.map((p, i) => (
                <input
                  key={i}
                  value={p}
                  onChange={(e) => {
                    const next = [...bookPhotos];
                    next[i] = e.target.value;
                    setBookPhotos(next);
                  }}
                  className="border rounded px-3 py-2 w-full"
                  placeholder={`/src/assets/your-photo.jpeg or https://...`}
                />
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  localStorage.setItem("BOOK_GROUP_PHOTOS", JSON.stringify(bookPhotos));
                  toast.success("Book group photos saved.");
                }}
                className="px-3 py-2 rounded bg-[#3B1130] text-white"
              >
                Save
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("BOOK_GROUP_PHOTOS");
                  setBookPhotos(BOOK_GROUP_PHOTOS);
                  toast.success("Book group photos reset to defaults.");
                }}
                className="px-3 py-2 rounded border"
              >
                Reset
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Staff Group Photos</h3>
            <div className="grid grid-cols-1 gap-2 mt-2">
              {staffPhotos.map((p, i) => (
                <input
                  key={i}
                  value={p}
                  onChange={(e) => {
                    const next = [...staffPhotos];
                    next[i] = e.target.value;
                    setStaffPhotos(next);
                  }}
                  className="border rounded px-3 py-2 w-full"
                  placeholder={`/src/assets/your-photo.jpeg or https://...`}
                />
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  localStorage.setItem("STAFF_GROUP_PHOTOS", JSON.stringify(staffPhotos));
                  toast.success("Staff group photos saved.");
                }}
                className="px-3 py-2 rounded bg-[#3B1130] text-white"
              >
                Save
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("STAFF_GROUP_PHOTOS");
                  setStaffPhotos(STAFF_GROUP_PHOTOS);
                  toast.success("Staff group photos reset to defaults.");
                }}
                className="px-3 py-2 rounded border"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2
            className="text-lg font-bold text-[#241B22] mb-4"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {books.length} {books.length === 1 ? "Book" : "Books"}
          </h2>

          <div className="space-y-3">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-14 h-20 object-cover rounded-lg shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#241B22] truncate">
                    {book.title}
                  </h3>
                  <p className="text-xs text-[#8A7A85] truncate">
                    {book.level || "—"} · {book.price || "No price set"}
                  </p>
                </div>

                <button
                  onClick={() => setEditingBook(book)}
                  className="p-2.5 rounded-xl bg-[#F7EFF3] text-[#3B1130] hover:bg-[#3B1130] hover:text-white transition shrink-0"
                  aria-label="Edit"
                >
                  <FaEdit size={14} />
                </button>
                <button
                  onClick={() => handleDelete(book)}
                  className="p-2.5 rounded-xl bg-[#F7EFF3] text-red-500 hover:bg-red-500 hover:text-white transition shrink-0"
                  aria-label="Delete"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
